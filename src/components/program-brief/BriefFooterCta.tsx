import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code, Briefcase, Users, Award, ShieldCheck } from 'lucide-react';

export const BriefFooterCta: React.FC = () => {
  const briefFeatures = [
    { label: 'Hands-on Skills', desc: 'Industry Relevant', icon: Code, color: 'text-sky-600' },
    { label: 'Real-world Projects', desc: 'Build Your Portfolio', icon: Briefcase, color: 'text-purple-600' },
    { label: 'Career Support', desc: 'Resume, LinkedIn, Interview', icon: Users, color: 'text-emerald-600' },
    { label: 'Certificate of Completion', desc: 'Showcase Your Achievement', icon: ShieldCheck, color: 'text-amber-600' },
    { label: 'Community Access', desc: 'Learn, Connect, Grow', icon: Award, color: 'text-indigo-600' },
  ];

  return (
    <div className="mt-8 space-y-6">
      {/* 5-Item Feature Strip */}
      <div className="rounded-2xl bg-white border border-slate-200 p-4 sm:p-5 shadow-card">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
          {briefFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0">
                  <Icon className={`w-4 h-4 ${item.color}`} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-900 leading-tight">{item.label}</div>
                  <div className="text-[9px] text-slate-500 leading-tight">{item.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Action Bar & Navigation Links */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-purple-50 via-white to-sky-50 border border-slate-200 shadow-card">
        <div className="text-center sm:text-left">
          <div className="text-xs font-bold text-purple-700 uppercase tracking-wider mb-1">
            READY TO TRANSFORM YOUR CAREER?
          </div>
          <div className="text-sm sm:text-base font-extrabold text-slate-900 font-heading">
            Enroll in the Data Science Championship Program
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* View Detailed Program Link */}
          <Link
            href="/programs/data-science"
            className="px-5 py-3 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 transition-all flex items-center gap-1.5"
          >
            <span>View Detailed Program</span>
            <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
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
