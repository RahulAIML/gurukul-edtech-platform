import React from 'react';
import { AlertTriangle } from 'lucide-react';
import type { ImprovementArea } from '@/lib/assessment/schema';

interface ImprovementAreasProps {
  areas: ImprovementArea[];
}

const SEVERITY_STYLES: Record<ImprovementArea['severity'], string> = {
  high: 'bg-red-50 text-red-700 border-red-200',
  medium: 'bg-amber-50 text-amber-700 border-amber-200',
  low: 'bg-slate-50 text-slate-600 border-slate-200',
};

export const ImprovementAreas: React.FC<ImprovementAreasProps> = ({ areas }) => {
  if (areas.length === 0) return null;

  return (
    <section aria-labelledby="improvement-heading" className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
      <h3 id="improvement-heading" className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-4">
        Areas to Improve
      </h3>
      <ol className="space-y-4">
        {areas.map((area, i) => (
          <li key={i} className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
              {i + 1}
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <p className="text-sm font-bold text-slate-900">{area.area}</p>
                <span
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase border ${SEVERITY_STYLES[area.severity]}`}
                >
                  <AlertTriangle className="w-2.5 h-2.5" />
                  {area.severity}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{area.description}</p>
              <p className="text-xs text-slate-800 font-medium mt-1.5">
                <span className="text-red-700 font-bold">Recommendation: </span>
                {area.recommendation}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
