'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { QuestionFeedback as QuestionFeedbackType } from '@/lib/assessment/schema';

interface QuestionFeedbackProps {
  items: QuestionFeedbackType[];
}

const STATUS_STYLES: Record<QuestionFeedbackType['status'], { label: string; className: string }> = {
  correct: { label: 'Correct', className: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  partially_correct: { label: 'Partially Correct', className: 'bg-amber-50 text-amber-700 border-amber-200' },
  incorrect: { label: 'Incorrect', className: 'bg-red-50 text-red-700 border-red-200' },
  not_attempted: { label: 'Not Attempted', className: 'bg-slate-50 text-slate-500 border-slate-200' },
};

export const QuestionFeedback: React.FC<QuestionFeedbackProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (items.length === 0) return null;

  return (
    <section aria-labelledby="detailed-feedback-heading" className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
      <h3 id="detailed-feedback-heading" className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-4">
        Detailed Feedback
      </h3>

      <div className="space-y-2">
        {items.map((q, i) => {
          const isOpen = openIndex === i;
          const status = STATUS_STYLES[q.status];
          const panelId = `question-feedback-panel-${i}`;
          const buttonId = `question-feedback-button-${i}`;

          return (
            <div key={i} className="rounded-xl border border-slate-100 overflow-hidden">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-sm font-bold text-slate-900 flex-shrink-0">Question {q.question_number}</span>
                  <span
                    className={`hidden sm:inline-flex px-2 py-0.5 rounded-md text-[10px] font-bold border ${status.className}`}
                  >
                    {status.label}
                  </span>
                  <span className="text-xs text-slate-500 truncate">{q.question_summary}</span>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs font-bold text-slate-700">
                    {q.score}/{q.max_score}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </div>
              </button>

              {isOpen && (
                <div id={panelId} role="region" aria-labelledby={buttonId} className="px-4 pb-4 pt-1 space-y-3 bg-slate-50/50">
                  <span className={`sm:hidden inline-flex px-2 py-0.5 rounded-md text-[10px] font-bold border ${status.className}`}>
                    {status.label}
                  </span>
                  {q.what_was_good && (
                    <div>
                      <p className="text-[11px] font-bold text-emerald-700 uppercase tracking-wide mb-0.5">
                        What was good
                      </p>
                      <p className="text-xs text-slate-700 leading-relaxed">{q.what_was_good}</p>
                    </div>
                  )}
                  {q.what_could_improve && (
                    <div>
                      <p className="text-[11px] font-bold text-amber-700 uppercase tracking-wide mb-0.5">
                        What could improve
                      </p>
                      <p className="text-xs text-slate-700 leading-relaxed">{q.what_could_improve}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-0.5">Feedback</p>
                    <p className="text-xs text-slate-700 leading-relaxed">{q.feedback}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
