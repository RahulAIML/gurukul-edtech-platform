import React from 'react';
import { ArrowRight, Info, CheckCircle2 } from 'lucide-react';

export const LearningJourneyRoadmapCard: React.FC = () => {
  return (
    <div id="learning-journey" className="h-full rounded-2xl bg-white border border-slate-200 p-5 flex flex-col justify-between shadow-card">
      <div>
        <h3 className="text-xs font-black text-slate-500 font-heading tracking-wider uppercase mb-4 pb-2 border-b border-slate-100">
          YOUR LEARNING JOURNEY
        </h3>

        {/* 3-Step Top Process Diagram */}
        <div className="flex items-center justify-between gap-1 mb-4">
          <div className="flex-1 p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-center shadow-sm">
            <div className="text-[11px] font-bold text-emerald-700">Core Foundations</div>
            <div className="text-[9px] text-emerald-600/80">(Weeks 1–12)</div>
          </div>

          <ArrowRight className="w-3.5 h-3.5 text-slate-300 flex-shrink-0" />

          <div className="flex-1 p-2 rounded-xl bg-sky-50 border border-sky-200 text-center shadow-sm">
            <div className="text-[11px] font-bold text-sky-700">Track Specialization</div>
            <div className="text-[9px] text-sky-600/80">(Weeks 13–20)</div>
          </div>

          <ArrowRight className="w-3.5 h-3.5 text-slate-300 flex-shrink-0" />

          <div className="flex-1 p-2 rounded-xl bg-amber-50 border border-amber-200 text-center shadow-sm">
            <div className="text-[11px] font-bold text-amber-700">Capstone Project</div>
            <div className="text-[9px] text-amber-600/80">(Weeks 21–24)</div>
          </div>
        </div>

        {/* Certified Champion Badge with Branching Paths */}
        <div className="relative flex flex-col items-center my-3">
          <div className="px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
            Certified Champion
          </div>

          {/* Branching Nodes */}
          <div className="w-full grid grid-cols-2 gap-2.5 mt-2.5">
            <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-200 text-center shadow-sm">
              <span className="text-[11px] font-bold text-teal-700 block leading-tight">Foundations Track</span>
              <span className="text-[9px] text-slate-500 block mt-0.5">For Students / Beginners</span>
            </div>

            <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-center shadow-sm">
              <span className="text-[11px] font-bold text-red-800 block leading-tight">Professional Track</span>
              <span className="text-[9px] text-slate-500 block mt-0.5">For Working Professionals</span>
            </div>
          </div>
        </div>

        {/* Phase Summary Table */}
        <div className="overflow-x-auto mt-4 rounded-xl border border-slate-200">
          <table className="w-full text-left text-[11px]">
            <thead>
              <tr className="bg-slate-50 text-slate-500 border-b border-slate-200 font-bold uppercase text-[9px]">
                <th className="p-2">PHASE</th>
                <th className="p-2">WEEKS</th>
                <th className="p-2">AUDIENCE</th>
                <th className="p-2">FOCUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-2 font-bold text-slate-800">Phase 1: Core Foundations</td>
                <td className="p-2 text-slate-500 whitespace-nowrap font-mono">1–12</td>
                <td className="p-2 text-emerald-700 font-medium">Everyone</td>
                <td className="p-2 text-slate-600">Statistics, Python, SQL, EDA</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-2 font-bold text-teal-700">Phase 2A: Foundations Track</td>
                <td className="p-2 text-slate-500 whitespace-nowrap font-mono">13–20</td>
                <td className="p-2 text-teal-700 font-medium">Students / Beginners</td>
                <td className="p-2 text-slate-600">ML fundamentals, guided projects</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-2 font-bold text-red-800">Phase 2B: Professional Track</td>
                <td className="p-2 text-slate-500 whitespace-nowrap font-mono">13–20</td>
                <td className="p-2 text-red-800 font-medium">Working Professionals</td>
                <td className="p-2 text-slate-600">Applied ML, deployment, business framing</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-2 font-bold text-amber-700">Phase 3: Capstone Project</td>
                <td className="p-2 text-slate-500 whitespace-nowrap font-mono">21–24</td>
                <td className="p-2 text-amber-700 font-medium">Everyone</td>
                <td className="p-2 text-slate-600">End-to-end project + portfolio</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Helper Entry Note */}
      <div className="mt-4 p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2 text-[10px] text-slate-500 leading-relaxed">
        <Info className="w-3.5 h-3.5 text-sky-600 flex-shrink-0 mt-0.5" />
        <span>
          <strong className="text-slate-700">Entry requirement:</strong> None for the Foundations Track. Professional Track assumes basic spreadsheet/analytics exposure — Week 0 placement quiz routes learners automatically.
        </span>
      </div>
    </div>
  );
};
