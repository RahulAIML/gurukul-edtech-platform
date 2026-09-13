import { evaluationResultSchema, type EvaluationResult } from '@/lib/assessment/schema';
import type { GeminiPart } from '@/lib/assessment/documentProcessing';
import { PERFORMANCE_LEVELS } from '@/lib/assessment/performanceLevels';

const GEMINI_API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';

export class GeminiServiceError extends Error {
  constructor(
    message: string,
    public readonly code:
      | 'missing_api_key'
      | 'upstream_error'
      | 'timeout'
      | 'malformed_response'
      | 'invalid_structured_output'
  ) {
    super(message);
    this.name = 'GeminiServiceError';
  }
}

function getModel(): string {
  return process.env.GEMINI_MODEL?.trim() || 'gemini-3.5-flash';
}

function getApiKey(): string {
  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    throw new GeminiServiceError(
      'The AI evaluation service is not configured. Missing GEMINI_API_KEY.',
      'missing_api_key'
    );
  }
  return key;
}

// Gemini's responseSchema uses a JSON-Schema-like dialect with UPPERCASE types.
// Kept hand-written (rather than auto-converted from the Zod schema) so the
// exact fields/required-ness sent to the model are explicit and reviewable.
const GEMINI_RESPONSE_SCHEMA = {
  type: 'OBJECT',
  properties: {
    evaluation_status: { type: 'STRING', enum: ['ok', 'insufficient_information'] },
    overall_score: { type: 'NUMBER' },
    max_score: { type: 'NUMBER' },
    percentage: { type: 'NUMBER' },
    performance_level: { type: 'STRING' },
    summary: { type: 'STRING' },
    strengths: {
      type: 'ARRAY',
      items: {
        type: 'OBJECT',
        properties: { title: { type: 'STRING' }, description: { type: 'STRING' } },
        required: ['title', 'description'],
      },
    },
    improvement_areas: {
      type: 'ARRAY',
      items: {
        type: 'OBJECT',
        properties: {
          area: { type: 'STRING' },
          severity: { type: 'STRING', enum: ['low', 'medium', 'high'] },
          description: { type: 'STRING' },
          recommendation: { type: 'STRING' },
        },
        required: ['area', 'severity', 'description', 'recommendation'],
      },
    },
    topic_scores: {
      type: 'ARRAY',
      items: {
        type: 'OBJECT',
        properties: {
          topic: { type: 'STRING' },
          score: { type: 'NUMBER' },
          max_score: { type: 'NUMBER' },
          feedback: { type: 'STRING' },
        },
        required: ['topic', 'score', 'max_score', 'feedback'],
      },
    },
    question_feedback: {
      type: 'ARRAY',
      items: {
        type: 'OBJECT',
        properties: {
          question_number: { type: 'INTEGER' },
          question_summary: { type: 'STRING' },
          score: { type: 'NUMBER' },
          max_score: { type: 'NUMBER' },
          status: { type: 'STRING', enum: ['correct', 'partially_correct', 'incorrect', 'not_attempted'] },
          what_was_good: { type: 'STRING' },
          what_could_improve: { type: 'STRING' },
          feedback: { type: 'STRING' },
        },
        required: [
          'question_number',
          'question_summary',
          'score',
          'max_score',
          'status',
          'what_was_good',
          'what_could_improve',
          'feedback',
        ],
      },
    },
    next_steps: { type: 'ARRAY', items: { type: 'STRING' } },
    confidence: { type: 'NUMBER' },
  },
  required: [
    'evaluation_status',
    'overall_score',
    'max_score',
    'percentage',
    'performance_level',
    'summary',
    'strengths',
    'improvement_areas',
    'topic_scores',
    'question_feedback',
    'next_steps',
    'confidence',
  ],
} as const;

function buildSystemInstruction(): string {
  const bands = PERFORMANCE_LEVELS.map((b) => `${b.min}-100: "${b.label}"`)
    .reverse()
    .join(', ');

  return `You are an educational assessment evaluator for the GURUKUL EdTech platform.

Evaluate the student's submission objectively and constructively.

RULES — follow strictly:
- Use the supplied assessment instructions/questions and rubric when provided. If a rubric is provided, score according to its weighted criteria.
- Do NOT invent facts. Do NOT invent questions that were not in the supplied instructions. Do NOT invent student answers that are not present in the submission.
- Every score and claim must be traceable to the actual submission content and/or rubric/instructions provided.
- If the submission cannot be reliably evaluated (e.g. it is empty, unrelated to any assessment, or illegible), set evaluation_status to "insufficient_information", set confidence low (below 0.3), and explain why in the summary. Do not fabricate a score in that case — still return numeric overall_score/percentage of 0 and empty arrays where nothing can be substantiated.
- If no assessment instructions or rubric were provided, evaluate based only on the general quality, correctness, and completeness of the submission's own content, and lower your confidence score accordingly, since there is no authoritative grading standard to compare against.
- Identify individual questions in the submission where possible and evaluate each one individually with transparent, evidence-based reasoning. Do not expose internal chain-of-thought — feedback text must be concise and educational, not a reasoning transcript.
- performance_level must be one of these bands based on the percentage: ${bands}.
- topic_scores should only be included if the submission content clearly maps to identifiable topics — do not invent topic scores that cannot be substantiated.
- Provide constructive, actionable next_steps.
- Return ONLY the structured JSON output matching the provided schema. No prose outside the JSON.`;
}

interface EvaluateSubmissionArgs {
  assessmentTitle?: string;
  assessmentInstructions?: string;
  rubric?: string;
  submissionParts: GeminiPart[];
}

export async function evaluateSubmissionWithGemini({
  assessmentTitle,
  assessmentInstructions,
  rubric,
  submissionParts,
}: EvaluateSubmissionArgs): Promise<EvaluationResult> {
  const apiKey = getApiKey();
  const model = getModel();

  const contextLines = [
    assessmentTitle ? `Assessment title: ${assessmentTitle}` : null,
    assessmentInstructions
      ? `Assessment instructions/questions:\n${assessmentInstructions}`
      : 'No assessment instructions/questions were provided by the student.',
    rubric ? `Evaluation rubric/criteria:\n${rubric}` : 'No rubric was provided by the student.',
    '\nHere is the student\'s submission to evaluate:',
  ]
    .filter(Boolean)
    .join('\n\n');

  const body = {
    systemInstruction: {
      role: 'system',
      parts: [{ text: buildSystemInstruction() }],
    },
    contents: [
      {
        role: 'user',
        parts: [{ text: contextLines }, ...submissionParts],
      },
    ],
    generationConfig: {
      temperature: 0.2,
      responseMimeType: 'application/json',
      responseSchema: GEMINI_RESPONSE_SCHEMA,
    },
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 55_000);

  let response: Response;
  try {
    response = await fetch(`${GEMINI_API_BASE}/${model}:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
  } catch (err) {
    if (err instanceof Error && err.name === 'AbortError') {
      throw new GeminiServiceError('The evaluation request timed out. Please try again.', 'timeout');
    }
    throw new GeminiServiceError('Could not reach the AI evaluation service.', 'upstream_error');
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    // Never forward raw upstream error bodies (may contain the key context) to the client.
    throw new GeminiServiceError(
      `The AI evaluation service returned an error (status ${response.status}).`,
      'upstream_error'
    );
  }

  let json: unknown;
  try {
    json = await response.json();
  } catch {
    throw new GeminiServiceError('The AI evaluation service returned an unreadable response.', 'malformed_response');
  }

  const text = extractText(json);
  if (!text) {
    throw new GeminiServiceError('The AI evaluation service returned no content.', 'malformed_response');
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new GeminiServiceError(
      'The AI evaluation service returned output that was not valid JSON.',
      'malformed_response'
    );
  }

  const result = evaluationResultSchema.safeParse(parsed);
  if (!result.success) {
    throw new GeminiServiceError(
      'The AI evaluation service returned output that did not match the expected structure.',
      'invalid_structured_output'
    );
  }

  return result.data;
}

function extractText(payload: unknown): string | null {
  if (typeof payload !== 'object' || payload === null) return null;
  const candidates = (payload as { candidates?: unknown }).candidates;
  if (!Array.isArray(candidates) || candidates.length === 0) return null;
  const first = candidates[0] as { content?: { parts?: { text?: string }[] } };
  const parts = first?.content?.parts;
  if (!Array.isArray(parts)) return null;
  const textPart = parts.find((p) => typeof p?.text === 'string');
  return textPart?.text ?? null;
}
