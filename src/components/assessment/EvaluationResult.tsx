import React from 'react';
import { AlertCircle, RotateCcw } from 'lucide-react';
import type { EvaluationResult as EvaluationResultType } from '@/lib/assessment/schema';
import { ScoreOverview } from './ScoreOverview';
import { StrengthsCard } from './StrengthsCard';
import { ImprovementAreas } from './ImprovementAreas';
import { TopicScores } from './TopicScores';
import { QuestionFeedback } from './QuestionFeedback';
import { NextSteps } from './NextSteps';

interface EvaluationResultProps {
  result: EvaluationResultType;
  onEvaluateAnother: () => void;
}

export const EvaluationResult: React.FC<EvaluationResultProps> = ({ result, onEvaluateAnother }) => {
  const isInsufficient = result.evaluation_status === 'insufficient_information';

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h2 className="text-center text-xs font-extrabold text-slate-500 uppercase tracking-wider">
        Your Assessment Result
      </h2>

      {isInsufficient && (
        <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-900 leading-relaxed">
            There wasn&apos;t enough information in this submission to evaluate it reliably. The summary below
            explains why — consider adding assessment instructions/a rubric, or re-uploading a clearer submission.
          </p>
        </div>
      )}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <ScoreOverview
          score={result.overall_score}
          maxScore={result.max_score}
          percentage={result.percentage}
          performanceLevel={result.performance_level}
        />
        <p className="text-sm text-slate-600 leading-relaxed text-center max-w-xl mx-auto mt-4">{result.summary}</p>
        {result.confidence < 0.5 && (
          <p className="text-xs text-slate-400 text-center mt-3">
            Confidence in this evaluation: {Math.round(result.confidence * 100)}%
          </p>
        )}
      </div>

      <StrengthsCard strengths={result.strengths} />
      <ImprovementAreas areas={result.improvement_areas} />
      <TopicScores topics={result.topic_scores} />
      <QuestionFeedback items={result.question_feedback} />
      <NextSteps steps={result.next_steps} />

      <div className="text-center pt-2">
        <button
          type="button"
          onClick={onEvaluateAnother}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-slate-700 border border-slate-200 hover:border-red-300 hover:text-red-700 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Evaluate Another Assessment
        </button>
      </div>
    </div>
  );
};
