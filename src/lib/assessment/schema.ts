import { z } from 'zod';

/**
 * Single source of truth for the AI evaluation result shape.
 * Used to:
 *  - validate Gemini's structured JSON output server-side
 *  - constrain Gemini's output via responseSchema (see geminiService.ts)
 *  - type the API response consumed by the frontend
 */

export const strengthSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

export const improvementAreaSchema = z.object({
  area: z.string().min(1),
  severity: z.enum(['low', 'medium', 'high']),
  description: z.string().min(1),
  recommendation: z.string().min(1),
});

export const topicScoreSchema = z.object({
  topic: z.string().min(1),
  score: z.number().min(0),
  max_score: z.number().min(1),
  feedback: z.string().min(1),
});

export const questionFeedbackSchema = z.object({
  question_number: z.number().int().min(1),
  question_summary: z.string().min(1),
  score: z.number().min(0),
  max_score: z.number().min(1),
  status: z.enum(['correct', 'partially_correct', 'incorrect', 'not_attempted']),
  what_was_good: z.string(),
  what_could_improve: z.string(),
  feedback: z.string().min(1),
});

export const evaluationResultSchema = z.object({
  evaluation_status: z.enum(['ok', 'insufficient_information']),
  overall_score: z.number().min(0),
  max_score: z.number().min(1),
  percentage: z.number().min(0).max(100),
  performance_level: z.string().min(1),
  summary: z.string().min(1),
  strengths: z.array(strengthSchema),
  improvement_areas: z.array(improvementAreaSchema),
  topic_scores: z.array(topicScoreSchema),
  question_feedback: z.array(questionFeedbackSchema),
  next_steps: z.array(z.string().min(1)),
  confidence: z.number().min(0).max(1),
});

export type Strength = z.infer<typeof strengthSchema>;
export type ImprovementArea = z.infer<typeof improvementAreaSchema>;
export type TopicScore = z.infer<typeof topicScoreSchema>;
export type QuestionFeedback = z.infer<typeof questionFeedbackSchema>;
export type EvaluationResult = z.infer<typeof evaluationResultSchema>;

/**
 * Future-compatible persistence shape. Not written to a database yet
 * (no DB exists in this project) — kept here so a DB write is a
 * drop-in addition later without reshaping the evaluation payload.
 */
export interface AssessmentEvaluationRecord {
  id: string;
  user_id: string | null;
  assessment_title: string | null;
  score: number;
  max_score: number;
  percentage: number;
  performance_level: string;
  result_json: EvaluationResult;
  created_at: string;
}

export const evaluateRequestSchema = z.object({
  assessment_title: z.string().max(200).optional(),
  assessment_instructions: z.string().max(8000).optional(),
  rubric: z.string().max(4000).optional(),
});

export interface EvaluateApiSuccessResponse {
  success: true;
  evaluation: EvaluationResult;
}

export interface EvaluateApiErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
  };
}

export type EvaluateApiResponse = EvaluateApiSuccessResponse | EvaluateApiErrorResponse;
