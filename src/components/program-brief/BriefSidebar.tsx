'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Home,
  BookOpen,
  Milestone,
  Briefcase,
  Wrench,
  HelpCircle,
  TrendingUp,
  Award,
  Sparkles,
  ArrowLeft,
} from 'lucide-react';

interface BriefSidebarProps {
  activeSection?: string;
}

export const BriefSidebar: React.FC<BriefSidebarProps> = ({ activeSection = 'overview' }) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Home, href: '#overview' },
    { id: 'curriculum', label: 'Curriculum', icon: BookOpen, href: '/programs/data-science#curriculum' },
    { id: 'learning-journey', label: 'Learning Journey', icon: Milestone, href: '#learning-journey' },
    { id: 'projects', label: 'Projects', icon: Briefcase, href: '/programs/data-science#projects' },
    { id: 'tools', label: 'Tools & Technologies', icon: Wrench, href: '/programs/data-science#tools' },
    { id: 'why-program', label: 'Why This Program', icon: HelpCircle, href: '#why-matters' },
    { id: 'outcomes', label: 'Career Outcomes', icon: TrendingUp, href: '/programs/data-science#outcomes' },
    { id: 'success-stories', label: 'Success Stories', icon: Award, href: '/#success-stories' },
    { id: 'faqs', label: 'FAQs', icon: Sparkles, href: '/programs/data-science#faqs' },
  ];

  return (
    <aside className="w-full lg:w-64 flex-shrink-0 flex flex-col justify-between space-y-6">
      <div className="space-y-6">
        {/* Back link to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-purple-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-purple-600" />
          <span>Back to Landing Page</span>
        </Link>

        {/* Program Identity Header */}
        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-purple-700 to-indigo-600 flex items-center justify-center text-white flex-shrink-0 shadow-md">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M4 19h16v2H4zM4 10h4v7H4zm6-5h4v12h-4zm6 3h4v9h-4z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xs font-black text-slate-900 font-heading uppercase leading-tight">
              DATA SCIENCE
            </h3>
            <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider block">
              CHAMPIONSHIP PROGRAM
            </span>
            <span className="text-[9px] text-slate-500 block mt-0.5">
              Turn Data Into Decisions. Build the Future.
            </span>
          </div>
        </div>

        {/* Vertical Navigation Menu */}
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <Link
                key={item.id}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-purple-50 text-purple-700 border border-purple-200 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-purple-700' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Motivational Climber Card */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 p-5 text-left shadow-card min-h-[220px] flex flex-col justify-end">
        {/* Background Image */}
        <Image
          src="/assets/mountain_climber.jpg"
          alt="Climber Summit Sunset"
          fill
          sizes="260px"
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />

        <div className="relative z-10">
          <h4 className="text-sm font-black text-white font-heading tracking-tight mb-1">
            Dream Big.
            <br />
            Work Smart.
            <br />
            <span className="text-amber-400">Get Rewarded.</span>
          </h4>
          <p className="text-[11px] text-slate-200 leading-relaxed mt-1 mb-3">
            Your hard work today will create the life you dream of tomorrow.
          </p>
          <div className="w-8 h-1 bg-amber-400 rounded-full" />
        </div>
      </div>
    </aside>
  );
};
