import React from 'react';
import { Clock, Video, Code, FileCheck, Rocket } from 'lucide-react';

export const TimeCommitmentCard: React.FC = () => {
  return (
    <div className="h-full rounded-2xl bg-slate-900/90 border border-slate-800 p-5 flex flex-col justify-between shadow-xl">
      <div>
        <h3 className="text-xs font-black text-slate-300 font-heading tracking-wider uppercase mb-4 pb-2 border-b border-slate-800">
          10 HOURS PER WEEK COMMITMENT
        </h3>

        {/* Clock Visualization */}
        <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800 mb-4 shadow-sm">
          <div className="w-12 h-12 rounded-full border-2 border-sky-400/80 bg-sky-950/40 flex items-center justify-center text-sky-400 flex-shrink-0 shadow-inner">
            <Clock className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="text-base font-black text-white font-heading">
              10 HOURS <span className="text-sky-400 text-xs font-normal">PER WEEK</span>
            </div>
            <div className="text-[10px] text-slate-400">Consistent & Effective</div>
          </div>
        </div>

        {/* Total Hours Banner */}
        <div className="p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-center mb-4 shadow-sm">
          <div className="text-[11px] font-bold text-indigo-300 font-heading">
            192 TOTAL LEARNING HOURS
          </div>
          <div className="text-[9px] text-slate-400">(24 WEEKS × 10 HOURS)</div>
        </div>

        {/* Weekly Time Breakdown */}
        <div className="space-y-2">
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
            WEEKLY TIME BREAKDOWN (10 HOURS)
          </div>

          <div className="space-y-1.5 text-[11px]">
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center gap-2 text-slate-300">
                <Video className="w-3.5 h-3.5 text-purple-400" />
                <span>Video Lessons / Theory</span>
              </div>
              <span className="font-bold text-white font-mono">3 Hours</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center gap-2 text-slate-300">
                <Code className="w-3.5 h-3.5 text-blue-400" />
                <span>Hands-on Labs / Coding</span>
              </div>
              <span className="font-bold text-white font-mono">3 Hours</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center gap-2 text-slate-300">
                <FileCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Weekly Test (Quizzes / Assessments)</span>
              </div>
              <span className="font-bold text-white font-mono">2 Hours</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center gap-2 text-slate-300">
                <Rocket className="w-3.5 h-3.5 text-emerald-400" />
                <span>Project / Practice</span>
              </div>
              <span className="font-bold text-white font-mono">2 Hours</span>
            </div>

            {/* Total Row */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800 font-bold">
              <span className="text-slate-200">TOTAL</span>
              <span className="text-sky-400 font-black font-mono">10 HOURS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Motivational Runner Footer Banner */}
      <div className="mt-4 p-2.5 rounded-xl bg-gradient-to-r from-blue-950 to-indigo-950 border border-blue-800/50 text-[10px] text-slate-300 flex items-center justify-between shadow-sm">
        <span className="leading-tight">
          Every Test. Every Project. Every Step Brings You Closer to Your Dream Career.
        </span>
        <span className="text-amber-400 text-base font-bold ml-2">🏃</span>
      </div>
    </div>
  );
};
