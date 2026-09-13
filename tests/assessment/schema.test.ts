import { describe, it, expect } from 'vitest';
import { evaluationResultSchema } from '@/lib/assessment/schema';
import { buildMockEvaluation } from '@/lib/assessment/mockEvaluation';

describe('evaluationResultSchema', () => {
  it('accepts a well-formed evaluation result', () => {
    const result = evaluationResultSchema.safeParse(buildMockEvaluation('Test Assessment'));
    expect(result.success).toBe(true);
  });

  it('rejects a malformed Gemini output missing required fields', () => {
    const malformed = { overall_score: 82, summary: 'ok' };
    const result = evaluationResultSchema.safeParse(malformed);
    expect(result.success).toBe(false);
  });

  it('rejects an invalid severity enum value', () => {
    const base = buildMockEvaluation();
    const invalid = {
      ...base,
      improvement_areas: [
        { area: 'x', severity: 'catastrophic', description: 'y', recommendation: 'z' },
      ],
    };
    const result = evaluationResultSchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });

  it('rejects a percentage outside 0-100', () => {
    const base = buildMockEvaluation();
    const invalid = { ...base, percentage: 150 };
    const result = evaluationResultSchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });

  it('accepts evaluation_status of insufficient_information with empty arrays', () => {
    const base = buildMockEvaluation();
    const insufficient = {
      ...base,
      evaluation_status: 'insufficient_information' as const,
      overall_score: 0,
      percentage: 0,
      strengths: [],
      improvement_areas: [],
      topic_scores: [],
      question_feedback: [],
      confidence: 0.1,
    };
    const result = evaluationResultSchema.safeParse(insufficient);
    expect(result.success).toBe(true);
  });
});
