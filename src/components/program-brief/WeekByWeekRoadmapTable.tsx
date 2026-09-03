import React from 'react';
import { dataScienceProgram } from '@/data/programsData';

export const WeekByWeekRoadmapTable: React.FC = () => {
  const leftRoadmap = dataScienceProgram.roadmap.slice(0, 8); // Weeks 0 - 12
  const rightRoadmap = dataScienceProgram.roadmap.slice(8); // Weeks 13 - 24

  const renderPhaseBadge = (phase: string) => {
    switch (phase) {
      case 'Orientation':
        return <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-800 text-slate-300">Orientation</span>;
      case 'Core':
        return <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-blue-900/60 text-sky-300 border border-blue-700/40">Core</span>;
      case 'Track':
        return <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-teal-900/60 text-teal-300 border border-teal-700/40">Track</span>;
      case 'Capstone':
        return <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-900/60 text-amber-300 border border-amber-700/40">Capstone</span>;
      default:
        return <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-800 text-slate-300">{phase}</span>;
    }
  };

  return (
    <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 shadow-2xl mt-6">
      <div className="text-center pb-3 border-b border-slate-800 mb-4">
        <h3 className="text-sm font-black text-sky-400 font-heading tracking-wider uppercase">
          DETAILED WEEK-BY-WEEK ROADMAP (24 WEEKS)
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Table: Weeks 0 - 12 (Core Foundations) */}
        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left text-[11px]">
            <thead>
              <tr className="bg-slate-950 text-slate-400 border-b border-slate-800 font-bold uppercase text-[9px]">
                <th className="p-2.5">WEEK</th>
                <th className="p-2.5">PHASE</th>
                <th className="p-2.5">TOPIC</th>
                <th className="p-2.5">APPLIES TO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {leftRoadmap.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-2.5 font-mono font-bold text-slate-200 whitespace-nowrap">
                    {item.week}
                  </td>
                  <td className="p-2.5 whitespace-nowrap">
                    {renderPhaseBadge(item.phase)}
                  </td>
                  <td className="p-2.5 text-slate-200 font-medium leading-snug">
                    {item.topic}
                  </td>
                  <td className="p-2.5 text-slate-400 whitespace-nowrap text-[10px]">
                    {item.appliesTo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Table: Weeks 13 - 24 (Tracks & Capstone) */}
        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left text-[11px]">
            <thead>
              <tr className="bg-slate-950 text-slate-400 border-b border-slate-800 font-bold uppercase text-[9px]">
                <th className="p-2.5">WEEK</th>
                <th className="p-2.5">PHASE</th>
                <th className="p-2.5">TOPIC</th>
                <th className="p-2.5">APPLIES TO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {rightRoadmap.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-2.5 font-mono font-bold text-slate-200 whitespace-nowrap">
                    {item.week}
                  </td>
                  <td className="p-2.5 whitespace-nowrap">
                    {renderPhaseBadge(item.phase)}
                  </td>
                  <td className="p-2.5 text-slate-200 font-medium leading-snug">
                    {item.topic}
                  </td>
                  <td className="p-2.5 text-slate-400 whitespace-nowrap text-[10px]">
                    {item.appliesTo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
