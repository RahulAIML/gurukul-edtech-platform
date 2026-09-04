import React from 'react';
import { dataScienceProgram } from '@/data/programsData';

export const WeekByWeekRoadmapTable: React.FC = () => {
  const leftRoadmap = dataScienceProgram.roadmap.slice(0, 8); // Weeks 0 - 12
  const rightRoadmap = dataScienceProgram.roadmap.slice(8); // Weeks 13 - 24

  const renderPhaseBadge = (phase: string) => {
    switch (phase) {
      case 'Orientation':
        return <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-100 text-slate-600">Orientation</span>;
      case 'Core':
        return <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-sky-50 text-sky-700 border border-sky-200">Core</span>;
      case 'Track':
        return <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-teal-50 text-teal-700 border border-teal-200">Track</span>;
      case 'Capstone':
        return <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-50 text-amber-700 border border-amber-200">Capstone</span>;
      default:
        return <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-100 text-slate-600">{phase}</span>;
    }
  };

  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-card mt-6">
      <div className="text-center pb-3 border-b border-slate-100 mb-4">
        <h3 className="text-sm font-black text-purple-700 font-heading tracking-wider uppercase">
          DETAILED WEEK-BY-WEEK ROADMAP (24 WEEKS)
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Table: Weeks 0 - 12 (Core Foundations) */}
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-[11px]">
            <thead>
              <tr className="bg-slate-50 text-slate-500 border-b border-slate-200 font-bold uppercase text-[9px]">
                <th className="p-2.5">WEEK</th>
                <th className="p-2.5">PHASE</th>
                <th className="p-2.5">TOPIC</th>
                <th className="p-2.5">APPLIES TO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {leftRoadmap.map((item, idx) => (
                <tr key={idx} className={`hover:bg-purple-50/40 transition-colors ${idx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}`}>
                  <td className="p-2.5 font-mono font-bold text-slate-800 whitespace-nowrap">
                    {item.week}
                  </td>
                  <td className="p-2.5 whitespace-nowrap">
                    {renderPhaseBadge(item.phase)}
                  </td>
                  <td className="p-2.5 text-slate-700 font-medium leading-snug">
                    {item.topic}
                  </td>
                  <td className="p-2.5 text-slate-500 whitespace-nowrap text-[10px]">
                    {item.appliesTo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Table: Weeks 13 - 24 (Tracks & Capstone) */}
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-[11px]">
            <thead>
              <tr className="bg-slate-50 text-slate-500 border-b border-slate-200 font-bold uppercase text-[9px]">
                <th className="p-2.5">WEEK</th>
                <th className="p-2.5">PHASE</th>
                <th className="p-2.5">TOPIC</th>
                <th className="p-2.5">APPLIES TO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rightRoadmap.map((item, idx) => (
                <tr key={idx} className={`hover:bg-purple-50/40 transition-colors ${idx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}`}>
                  <td className="p-2.5 font-mono font-bold text-slate-800 whitespace-nowrap">
                    {item.week}
                  </td>
                  <td className="p-2.5 whitespace-nowrap">
                    {renderPhaseBadge(item.phase)}
                  </td>
                  <td className="p-2.5 text-slate-700 font-medium leading-snug">
                    {item.topic}
                  </td>
                  <td className="p-2.5 text-slate-500 whitespace-nowrap text-[10px]">
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
