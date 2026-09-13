'use client';

import React, { useEffect, useState } from 'react';
import { Check, Loader2 } from 'lucide-react';

const STAGES = [
  'Reading your submission',
  'Understanding the assessment',
  'Evaluating your responses',
  'Identifying improvement areas',
  'Preparing personalized feedback',
];

// Purely cosmetic pacing for the UI stages below — the backend does not
// report discrete progress, so this never claims a fake percentage.
const STAGE_INTERVAL_MS = 2200;

export const EvaluationLoading: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setActiveStage((prev) => (prev < STAGES.length - 1 ? prev + 1 : prev));
    }, STAGE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 text-center"
    >
      <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mx-auto mb-5">
        <Loader2 className="w-6 h-6 text-red-600 animate-spin" />
      </div>
      <h2 className="text-lg font-black text-slate-950 font-heading mb-6">Analyzing Your Assessment</h2>

      <ul className="max-w-xs mx-auto space-y-3 text-left">
        {STAGES.map((stage, idx) => {
          const done = idx < activeStage;
          const current = idx === activeStage;
          return (
            <li key={stage} className="flex items-center gap-3">
              <span
                className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                  done
                    ? 'bg-emerald-500'
                    : current
                    ? 'bg-red-100 border-2 border-red-500'
                    : 'bg-slate-100 border border-slate-200'
                }`}
              >
                {done && <Check className="w-3 h-3 text-white" />}
              </span>
              <span
                className={`text-sm ${
                  done ? 'text-slate-400 line-through' : current ? 'text-slate-900 font-semibold' : 'text-slate-400'
                }`}
              >
                {stage}
              </span>
            </li>
          );
        })}
      </ul>
      <span className="sr-only">Evaluation in progress, please wait.</span>
    </div>
  );
};
