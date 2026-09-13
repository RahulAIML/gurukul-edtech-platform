import React from 'react';
import { Sparkles } from 'lucide-react';

export const AssessmentHeader: React.FC = () => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-5">
        <Sparkles className="w-3.5 h-3.5" />
        <span>AI Assessment Evaluator</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-black text-slate-950 font-heading tracking-tight mb-4">
        Submit Your Work. <span className="text-red-600">Get Intelligent Feedback.</span>
      </h1>
      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
        Understand where you stand and how to improve — evaluated instantly by AI against your
        assignment&apos;s own instructions and rubric.
      </p>
    </div>
  );
};
