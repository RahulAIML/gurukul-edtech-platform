import React from 'react';
import { ArrowRight, Info, CheckCircle2 } from 'lucide-react';

export const LearningJourneyRoadmapCard: React.FC = () => {
  return (
    <div id="learning-journey" className="h-full rounded-2xl bg-slate-900/90 border border-slate-800 p-5 flex flex-col justify-between shadow-xl">
      <div>
        <h3 className="text-xs font-black text-slate-300 font-heading tracking-wider uppercase mb-4 pb-2 border-b border-slate-800">
          YOUR LEARNING JOURNEY
        </h3>

        {/* 3-Step Top Process Diagram */}
        <div className="flex items-center justify-between gap-1 mb-4">
          <div className="flex-1 p-2 rounded-xl bg-emerald-950/80 border border-emerald-600/50 text-center shadow-sm">
            <div className="text-[11px] font-bold text-emerald-400">Core Foundations</div>
            <div className="text-[9px] text-emerald-300/80">(Weeks 1–12)</div>
          </div>

          <ArrowRight className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />

          <div className="flex-1 p-2 rounded-xl bg-blue-950/80 border border-blue-600/50 text-center shadow-sm">
            <div className="text-[11px] font-bold text-sky-400">Track Specialization</div>
            <div className="text-[9px] text-sky-300/80">(Weeks 13–20)</div>
          </div>

          <ArrowRight className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />

          <div className="flex-1 p-2 rounded-xl bg-amber-950/80 border border-amber-600/50 text-center shadow-sm">
            <div className="text-[11px] font-bold text-amber-400">Capstone Project</div>
            <div className="text-[9px] text-amber-300/80">(Weeks 21–24)</div>
          </div>
        </div>

        {/* Certified Champion Badge with Branching Paths */}
        <div className="relative flex flex-col items-center my-3">
          <div className="px-3.5 py-1 rounded-full bg-purple-900/80 border border-purple-500 text-purple-300 text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
            Certified Champion
          </div>

          {/* Branching Nodes */}
          <div className="w-full grid grid-cols-2 gap-2.5 mt-2.5">
            <div className="p-2.5 rounded-xl bg-teal-950/60 border border-teal-600/40 text-center shadow-sm">
              <span className="text-[11px] font-bold text-teal-300 block leading-tight">Foundations Track</span>
              <span className="text-[9px] text-slate-400 block mt-0.5">For Students / Beginners</span>
            </div>

            <div className="p-2.5 rounded-xl bg-indigo-950/60 border border-indigo-600/40 text-center shadow-sm">
              <span className="text-[11px] font-bold text-indigo-300 block leading-tight">Professional Track</span>
              <span className="text-[9px] text-slate-400 block mt-0.5">For Working Professionals</span>
            </div>
          </div>
        </div>

        {/* Phase Summary Table */}
        <div className="overflow-x-auto mt-4 rounded-xl border border-slate-800">
          <table className="w-full text-left text-[11px]">
            <thead>
              <tr className="bg-slate-950 text-slate-400 border-b border-slate-800 font-bold uppercase text-[9px]">
                <th className="p-2">PHASE</th>
                <th className="p-2">WEEKS</th>
                <th className="p-2">AUDIENCE</th>
                <th className="p-2">FOCUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              <tr className="hover:bg-slate-800/40 transition-colors">
                <td className="p-2 font-bold text-slate-200">Phase 1: Core Foundations</td>
                <td className="p-2 text-slate-400 whitespace-nowrap font-mono">1–12</td>
                <td className="p-2 text-emerald-400 font-medium">Everyone</td>
                <td className="p-2 text-slate-300">Statistics, Python, SQL, EDA</td>
              </tr>
              <tr className="hover:bg-slate-800/40 transition-colors">
                <td className="p-2 font-bold text-teal-300">Phase 2A: Foundations Track</td>
                <td className="p-2 text-slate-400 whitespace-nowrap font-mono">13–20</td>
                <td className="p-2 text-teal-400 font-medium">Students / Beginners</td>
                <td className="p-2 text-slate-300">ML fundamentals, guided projects</td>
              </tr>
              <tr className="hover:bg-slate-800/40 transition-colors">
                <td className="p-2 font-bold text-indigo-300">Phase 2B: Professional Track</td>
                <td className="p-2 text-slate-400 whitespace-nowrap font-mono">13–20</td>
                <td className="p-2 text-indigo-400 font-medium">Working Professionals</td>
                <td className="p-2 text-slate-300">Applied ML, deployment, business framing</td>
              </tr>
              <tr className="hover:bg-slate-800/40 transition-colors">
                <td className="p-2 font-bold text-amber-300">Phase 3: Capstone Project</td>
                <td className="p-2 text-slate-400 whitespace-nowrap font-mono">21–24</td>
                <td className="p-2 text-amber-400 font-medium">Everyone</td>
                <td className="p-2 text-slate-300">End-to-end project + portfolio</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Helper Entry Note */}
      <div className="mt-4 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-2 text-[10px] text-slate-400 leading-relaxed">
        <Info className="w-3.5 h-3.5 text-sky-400 flex-shrink-0 mt-0.5" />
        <span>
          <strong className="text-slate-300">Entry requirement:</strong> None for the Foundations Track. Professional Track assumes basic spreadsheet/analytics exposure — Week 0 placement quiz routes learners automatically.
        </span>
      </div>
    </div>
  );
};
