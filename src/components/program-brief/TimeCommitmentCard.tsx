import React from 'react';
import { Clock, Video, Code, FileCheck, Rocket } from 'lucide-react';

export const TimeCommitmentCard: React.FC = () => {
  return (
    <div className="h-full rounded-2xl bg-white border border-slate-200 p-5 flex flex-col justify-between shadow-card">
      <div>
        <h3 className="text-xs font-black text-slate-500 font-heading tracking-wider uppercase mb-4 pb-2 border-b border-slate-100">
          10 HOURS PER WEEK COMMITMENT
        </h3>

        {/* Clock Visualization */}
        <div className="flex items-center gap-4 p-3 rounded-xl bg-sky-50 border border-sky-100 mb-4 shadow-sm">
          <div className="w-12 h-12 rounded-full border-2 border-sky-400 bg-white flex items-center justify-center text-sky-600 flex-shrink-0 shadow-inner">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-base font-black text-slate-900 font-heading">
              10 HOURS <span className="text-sky-600 text-xs font-normal">PER WEEK</span>
            </div>
            <div className="text-[10px] text-slate-500">Consistent & Effective</div>
          </div>
        </div>

        {/* Total Hours Banner */}
        <div className="p-2.5 rounded-xl bg-red-50 border border-red-100 text-center mb-4 shadow-sm">
          <div className="text-[11px] font-bold text-red-800 font-heading">
            192 TOTAL LEARNING HOURS
          </div>
          <div className="text-[9px] text-slate-500">(24 WEEKS × 10 HOURS)</div>
        </div>

        {/* Weekly Time Breakdown */}
        <div className="space-y-2">
          <div className="text-[10px] font-black text-slate-500 uppercase tracking-wider">
            WEEKLY TIME BREAKDOWN (10 HOURS)
          </div>

          <div className="space-y-1.5 text-[11px]">
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2 text-slate-700">
                <Video className="w-3.5 h-3.5 text-red-600" />
                <span>Video Lessons / Theory</span>
              </div>
              <span className="font-bold text-slate-900 font-mono">3 Hours</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2 text-slate-700">
                <Code className="w-3.5 h-3.5 text-sky-600" />
                <span>Hands-on Labs / Coding</span>
              </div>
              <span className="font-bold text-slate-900 font-mono">3 Hours</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2 text-slate-700">
                <FileCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>Weekly Test (Quizzes / Assessments)</span>
              </div>
              <span className="font-bold text-slate-900 font-mono">2 Hours</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2 text-slate-700">
                <Rocket className="w-3.5 h-3.5 text-emerald-600" />
                <span>Project / Practice</span>
              </div>
              <span className="font-bold text-slate-900 font-mono">2 Hours</span>
            </div>

            {/* Total Row */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-200 font-bold">
              <span className="text-slate-700">TOTAL</span>
              <span className="text-sky-600 font-black font-mono">10 HOURS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Motivational Runner Footer Banner */}
      <div className="mt-4 p-2.5 rounded-xl bg-gradient-to-r from-sky-50 to-red-50 border border-sky-100 text-[10px] text-slate-600 flex items-center justify-between shadow-sm">
        <span className="leading-tight">
          Every Test. Every Project. Every Step Brings You Closer to Your Dream Career.
        </span>
        <span className="text-amber-500 text-base font-bold ml-2">🏃</span>
      </div>
    </div>
  );
};
