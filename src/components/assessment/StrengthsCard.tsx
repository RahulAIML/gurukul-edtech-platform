import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import type { Strength } from '@/lib/assessment/schema';

interface StrengthsCardProps {
  strengths: Strength[];
}

export const StrengthsCard: React.FC<StrengthsCardProps> = ({ strengths }) => {
  if (strengths.length === 0) return null;

  return (
    <section aria-labelledby="strengths-heading" className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
      <h3 id="strengths-heading" className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-4">
        What You Did Well
      </h3>
      <ul className="space-y-3">
        {strengths.map((s, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-slate-900">{s.title}</p>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{s.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
