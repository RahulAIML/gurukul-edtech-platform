import React from 'react';
import { getPerformanceLevel } from '@/lib/assessment/performanceLevels';

interface ScoreOverviewProps {
  score: number;
  maxScore: number;
  percentage: number;
  performanceLevel: string;
}

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export const ScoreOverview: React.FC<ScoreOverviewProps> = ({ score, maxScore, percentage, performanceLevel }) => {
  const band = getPerformanceLevel(percentage);
  const offset = CIRCUMFERENCE - (Math.max(0, Math.min(100, percentage)) / 100) * CIRCUMFERENCE;

  return (
    <div className="flex flex-col items-center text-center py-2">
      <div className="relative w-40 h-40 sm:w-44 sm:h-44">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          <circle cx="60" cy="60" r={RADIUS} fill="none" stroke="#F1F5F9" strokeWidth="10" />
          <circle
            cx="60"
            cy="60"
            r={RADIUS}
            fill="none"
            strokeWidth="10"
            strokeLinecap="round"
            className={`${band.ringClass} transition-[stroke-dashoffset] duration-700 ease-out`}
            stroke="currentColor"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl sm:text-4xl font-black text-slate-950 font-heading leading-none">
            {score}
            <span className="text-base font-bold text-slate-400">/{maxScore}</span>
          </span>
          <span className="text-sm font-bold text-slate-500 mt-1">{Math.round(percentage)}%</span>
        </div>
      </div>

      <span
        className={`mt-5 inline-flex items-center px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wide bg-slate-50 border border-slate-200 ${band.colorClass}`}
      >
        {performanceLevel}
      </span>
    </div>
  );
};
