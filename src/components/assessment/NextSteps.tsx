import React from 'react';
import { Target } from 'lucide-react';

interface NextStepsProps {
  steps: string[];
}

export const NextSteps: React.FC<NextStepsProps> = ({ steps }) => {
  if (steps.length === 0) return null;

  return (
    <section
      aria-labelledby="next-steps-heading"
      className="rounded-2xl border border-red-100 bg-red-50/50 p-5 sm:p-6"
    >
      <h3
        id="next-steps-heading"
        className="flex items-center gap-2 text-xs font-extrabold text-red-700 uppercase tracking-wider mb-4"
      >
        <Target className="w-3.5 h-3.5" />
        Next Steps
      </h3>
      <ol className="space-y-2.5">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-600 text-white text-[11px] font-bold flex items-center justify-center mt-0.5">
              {i + 1}
            </span>
            <span className="text-sm text-slate-800 leading-relaxed">{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
};
