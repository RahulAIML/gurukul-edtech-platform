import React from 'react';

interface AssessmentFormProps {
  title: string;
  instructions: string;
  rubric: string;
  disabled: boolean;
  onTitleChange: (value: string) => void;
  onInstructionsChange: (value: string) => void;
  onRubricChange: (value: string) => void;
}

export const AssessmentForm: React.FC<AssessmentFormProps> = ({
  title,
  instructions,
  rubric,
  disabled,
  onTitleChange,
  onInstructionsChange,
  onRubricChange,
}) => {
  return (
    <section aria-labelledby="assessment-details-heading" className="mb-8">
      <h2
        id="assessment-details-heading"
        className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-4"
      >
        Assessment Details
      </h2>

      <div className="space-y-4">
        <div>
          <label htmlFor="assessment-title" className="block text-xs font-bold text-slate-700 mb-1.5">
            Assessment Title
          </label>
          <input
            id="assessment-title"
            type="text"
            value={title}
            disabled={disabled}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder="e.g. Week 4 — SQL & Statistics Assignment"
            maxLength={200}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:border-red-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <label htmlFor="assessment-instructions" className="block text-xs font-bold text-slate-700 mb-1.5">
            Instructions / Questions <span className="font-normal text-slate-400">(optional, recommended)</span>
          </label>
          <textarea
            id="assessment-instructions"
            value={instructions}
            disabled={disabled}
            onChange={(e) => onInstructionsChange(e.target.value)}
            placeholder="Paste the questions or task instructions your submission is answering. Gemini uses this to grade accurately instead of guessing."
            rows={4}
            maxLength={8000}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:border-red-400 transition-colors resize-y disabled:opacity-60 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <label htmlFor="assessment-rubric" className="block text-xs font-bold text-slate-700 mb-1.5">
            Evaluation Criteria / Rubric <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <textarea
            id="assessment-rubric"
            value={rubric}
            disabled={disabled}
            onChange={(e) => onRubricChange(e.target.value)}
            placeholder={'e.g.\nCorrectness: 40%\nConceptual understanding: 25%\nProblem solving: 20%\nPresentation: 15%'}
            rows={4}
            maxLength={4000}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:border-red-400 transition-colors resize-y disabled:opacity-60 disabled:cursor-not-allowed"
          />
        </div>
      </div>
    </section>
  );
};
