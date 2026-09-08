import React from 'react';
import { DollarSign, Briefcase, TrendingUp, Globe, AlertCircle, ArrowRight } from 'lucide-react';

export const WhyThisMattersCard: React.FC = () => {
  return (
    <div id="why-matters" className="h-full rounded-2xl bg-white border border-slate-200 p-5 flex flex-col justify-between shadow-card">
      <div>
        <h3 className="text-xs font-black text-slate-500 font-heading tracking-wider uppercase mb-4 pb-2 border-b border-slate-100">
          WHY THIS MATTERS
        </h3>

        <div className="space-y-4">
          {/* 1. $156.89 Billion */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
              <DollarSign className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-black text-slate-900 font-heading">$156.89 Billion</div>
              <div className="text-[11px] text-slate-500 leading-snug">
                Global Data Science market in 2026 (~38% in North America)
              </div>
            </div>
          </div>

          {/* 2. 11.5 Million+ */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 flex-shrink-0 mt-0.5">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-black text-slate-900 font-heading">11.5 Million+</div>
              <div className="text-[11px] text-slate-500 leading-snug">
                New data science jobs by 2026
              </div>
            </div>
          </div>

          {/* 3. 36% Growth */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-red-600 flex-shrink-0 mt-0.5">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-black text-slate-900 font-heading">36% Growth</div>
              <div className="text-[11px] text-slate-500 leading-snug">
                In the US data scientist roles (2023–2033)
              </div>
            </div>
          </div>

          {/* 4. Fastest Growing Region */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 flex-shrink-0 mt-0.5">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-black text-slate-900 font-heading">Fastest Growing Region</div>
              <div className="text-[11px] text-slate-500 leading-snug">
                Asia-Pacific CAGR ~26–27% from 2024 to 2033
              </div>
            </div>
          </div>

          {/* 5. Skills Gap */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0 mt-0.5">
              <AlertCircle className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-black text-slate-900 font-heading">Skills Gap</div>
              <div className="text-[11px] text-slate-500 leading-snug">
                49% cite data privacy concerns, 44% lack skilled professionals
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        type="button"
        className="mt-6 w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-red-50 text-red-700 hover:text-red-800 border border-slate-200 hover:border-red-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
      >
        <span>Explore Full Market Report</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
