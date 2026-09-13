import { validateUploadedFile } from './fileValidation.server';
import { getExtension } from './fileValidation';
import { buildSubmissionParts, DocumentProcessingError } from './documentProcessing';
import { evaluateSubmissionWithGemini, GeminiServiceError } from '@/lib/gemini/geminiService';
import { buildMockEvaluation } from './mockEvaluation';
import type { EvaluationResult } from './schema';

export class AssessmentServiceError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly status: number
  ) {
    super(message);
    this.name = 'AssessmentServiceError';
  }
}

export interface EvaluateAssessmentInput {
  filename: string;
  buffer: Buffer;
  assessmentTitle?: string;
  assessmentInstructions?: string;
  rubric?: string;
}

function isMockMode(): boolean {
  return process.env.USE_MOCK_ASSESSMENT_EVALUATION === 'true';
}

export async function evaluateAssessment(input: EvaluateAssessmentInput): Promise<EvaluationResult> {
  const { filename, buffer, assessmentTitle, assessmentInstructions, rubric } = input;

  const validation = await validateUploadedFile(filename, buffer);
  if (!validation.valid) {
    throw new AssessmentServiceError(validation.error ?? 'Invalid file.', 'invalid_file', 400);
  }

  if (isMockMode()) {
    // Simulate realistic latency so the frontend's staged-loading UI reads naturally in dev.
    await new Promise((resolve) => setTimeout(resolve, 1200));
    return buildMockEvaluation(assessmentTitle);
  }

  const extension = getExtension(validation.safeFilename ?? filename);

  let submissionParts;
  try {
    const processed = await buildSubmissionParts(buffer, validation.detectedMime ?? '', extension);
    submissionParts = processed.parts;
  } catch (err) {
    if (err instanceof DocumentProcessingError) {
      throw new AssessmentServiceError(err.message, 'unreadable_document', 422);
    }
    throw new AssessmentServiceError('Could not process the uploaded document.', 'processing_error', 500);
  }

  try {
    return await evaluateSubmissionWithGemini({
      assessmentTitle,
      assessmentInstructions,
      rubric,
      submissionParts,
    });
  } catch (err) {
    if (err instanceof GeminiServiceError) {
      const statusByCode: Record<string, number> = {
        missing_api_key: 503,
        upstream_error: 502,
        timeout: 504,
        malformed_response: 502,
        invalid_structured_output: 502,
      };
      throw new AssessmentServiceError(
        friendlyGeminiMessage(err.code),
        err.code,
        statusByCode[err.code] ?? 502
      );
    }
    throw new AssessmentServiceError('The AI evaluation failed unexpectedly.', 'unknown_error', 500);
  }
}

function friendlyGeminiMessage(code: GeminiServiceError['code']): string {
  switch (code) {
    case 'missing_api_key':
      return 'The AI evaluation service is not configured yet. Please try again later.';
    case 'timeout':
      return 'The evaluation is taking longer than expected. Please try again.';
    case 'malformed_response':
    case 'invalid_structured_output':
      return 'The AI evaluation service returned an unexpected response. Please try again.';
    case 'upstream_error':
    default:
      return 'The AI evaluation service is temporarily unavailable. Please try again in a moment.';
  }
}
