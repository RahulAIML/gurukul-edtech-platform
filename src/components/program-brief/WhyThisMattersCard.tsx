import React from 'react';
import { DollarSign, Briefcase, TrendingUp, Globe, AlertCircle, ArrowRight } from 'lucide-react';

export const WhyThisMattersCard: React.FC = () => {
  return (
    <div id="why-matters" className="h-full rounded-2xl bg-slate-900/90 border border-slate-800 p-5 flex flex-col justify-between shadow-xl">
      <div>
        <h3 className="text-xs font-black text-slate-300 font-heading tracking-wider uppercase mb-4 pb-2 border-b border-slate-800">
          WHY THIS MATTERS
        </h3>

        <div className="space-y-4">
          {/* 1. $156.89 Billion */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
              <DollarSign className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-black text-white font-heading">$156.89 Billion</div>
              <div className="text-[11px] text-slate-400 leading-snug">
                Global Data Science market in 2026 (~38% in North America)
              </div>
            </div>
          </div>

          {/* 2. 11.5 Million+ */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0 mt-0.5">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-black text-white font-heading">11.5 Million+</div>
              <div className="text-[11px] text-slate-400 leading-snug">
                New data science jobs by 2026
              </div>
            </div>
          </div>

          {/* 3. 36% Growth */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0 mt-0.5">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-black text-white font-heading">36% Growth</div>
              <div className="text-[11px] text-slate-400 leading-snug">
                In the US data scientist roles (2023–2033)
              </div>
            </div>
          </div>

          {/* 4. Fastest Growing Region */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 flex-shrink-0 mt-0.5">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-black text-white font-heading">Fastest Growing Region</div>
              <div className="text-[11px] text-slate-400 leading-snug">
                Asia-Pacific CAGR ~26–27% from 2024 to 2033
              </div>
            </div>
          </div>

          {/* 5. Skills Gap */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
              <AlertCircle className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-black text-white font-heading">Skills Gap</div>
              <div className="text-[11px] text-slate-400 leading-snug">
                49% cite data privacy concerns, 44% lack skilled professionals
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        type="button"
        className="mt-6 w-full py-2.5 px-3 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-sky-400 hover:text-sky-300 border border-slate-700/80 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
      >
        <span>Explore Full Market Report</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
