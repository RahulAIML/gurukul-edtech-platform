import type { EvaluationResult } from './schema';

/**
 * Isolated development-mode mock. Only ever invoked when
 * USE_MOCK_ASSESSMENT_EVALUATION=true — never mixed into the real
 * Gemini code path in assessmentService.ts.
 */
export function buildMockEvaluation(assessmentTitle?: string): EvaluationResult {
  return {
    evaluation_status: 'ok',
    overall_score: 82,
    max_score: 100,
    percentage: 82,
    performance_level: 'Strong',
    summary: `[MOCK MODE] This is a simulated evaluation${
      assessmentTitle ? ` for "${assessmentTitle}"` : ''
    } used for frontend development while USE_MOCK_ASSESSMENT_EVALUATION=true. No real AI evaluation was performed.`,
    strengths: [
      { title: 'Clear structure', description: 'The submission is organized logically with well-separated sections.' },
      { title: 'Correct core logic', description: 'The primary approach to the problem is sound and well justified.' },
    ],
    improvement_areas: [
      {
        area: 'Edge case handling',
        severity: 'medium',
        description: 'Some boundary conditions were not addressed.',
        recommendation: 'Explicitly test and handle empty/null inputs and extreme values.',
      },
    ],
    topic_scores: [
      { topic: 'Python', score: 88, max_score: 100, feedback: 'Strong command of core syntax and idioms.' },
      { topic: 'SQL', score: 76, max_score: 100, feedback: 'Joins are correct; window functions need practice.' },
      { topic: 'Statistics', score: 81, max_score: 100, feedback: 'Good grasp of descriptive statistics.' },
    ],
    question_feedback: [
      {
        question_number: 1,
        question_summary: 'Mock question 1',
        score: 9,
        max_score: 10,
        status: 'correct',
        what_was_good: 'Correct approach with clear reasoning.',
        what_could_improve: 'Minor formatting improvements possible.',
        feedback: 'Well answered overall.',
      },
    ],
    next_steps: [
      'Review edge-case handling patterns.',
      'Practice SQL window functions.',
      'Re-submit an updated version once revised.',
    ],
    confidence: 0.5,
  };
}
