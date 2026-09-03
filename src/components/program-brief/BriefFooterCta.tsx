import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code, Briefcase, Users, Award, ShieldCheck } from 'lucide-react';

export const BriefFooterCta: React.FC = () => {
  const briefFeatures = [
    { label: 'Hands-on Skills', desc: 'Industry Relevant', icon: Code, color: 'text-sky-400' },
    { label: 'Real-world Projects', desc: 'Build Your Portfolio', icon: Briefcase, color: 'text-purple-400' },
    { label: 'Career Support', desc: 'Resume, LinkedIn, Interview', icon: Users, color: 'text-emerald-400' },
    { label: 'Certificate of Completion', desc: 'Showcase Your Achievement', icon: ShieldCheck, color: 'text-amber-400' },
    { label: 'Community Access', desc: 'Learn, Connect, Grow', icon: Award, color: 'text-indigo-400' },
  ];

  return (
    <div className="mt-8 space-y-6">
      {/* 5-Item Dark Feature Strip */}
      <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-4 sm:p-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
          {briefFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <Icon className={`w-4 h-4 ${item.color}`} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white leading-tight">{item.label}</div>
                  <div className="text-[9px] text-slate-400 leading-tight">{item.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Action Bar & Navigation Links */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-slate-800 shadow-2xl">
        <div className="text-center sm:text-left">
          <div className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-1">
            READY TO TRANSFORM YOUR CAREER?
          </div>
          <div className="text-sm sm:text-base font-extrabold text-white font-heading">
            Enroll in the Data Science Championship Program
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* View Detailed Program Link */}
          <Link
            href="/programs/data-science"
            className="px-5 py-3 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all flex items-center gap-1.5"
          >
            <span>View Detailed Program</span>
            <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
          </Link>

          {/* Start Championship Primary Glowing Button */}
          <Link
            href="/programs/data-science"
            className="px-6 py-3 rounded-xl text-xs font-black text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <span>Start Your Journey Today</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
