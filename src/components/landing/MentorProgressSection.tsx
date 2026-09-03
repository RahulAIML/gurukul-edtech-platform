'use client';

import React from 'react';
import { mentorSectionData, mentorTrackBullets } from '@/data/landingData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const MentorProgressSection: React.FC = () => {
  const { stats, name, role, quote } = mentorSectionData;
  const daysHeader = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <section id="mentorship" className="py-20 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading & Value List (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Badge */}
            <span className="text-xs font-black tracking-widest text-purple-700 uppercase mb-3">
              YOU ARE NEVER ALONE
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 font-heading leading-tight mb-4">
              Your Mentor Tracks.
              <br />
              Guides. Pushes You.
              <br />
              Until <span className="text-purple-700">You&apos;re Ready.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              We track your progress across every step and help you improve where it matters most.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 w-full">
              {mentorTrackBullets.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 fill-purple-100" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Column: Your Progress Dashboard Visualization (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 shadow-card border border-slate-100">
            <h3 className="text-sm font-extrabold text-slate-900 font-heading mb-6 tracking-wide">
              Your Progress Dashboard
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
              {/* Overall Progress Donut Chart (5 cols) */}
              <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                <span className="text-xs font-bold text-slate-600 mb-2">Overall Progress</span>
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-100"
                      strokeWidth="4"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-emerald-500"
                      strokeDasharray="78, 100"
                      strokeWidth="4"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-xl font-black text-slate-900 font-heading">
                      {stats.overallProgress}%
                    </span>
                    <span className="text-[9px] font-semibold text-emerald-600">On Track</span>
                  </div>
                </div>
              </div>

              {/* Weekly Activity Heatmap (7 cols) */}
              <div className="sm:col-span-7">
                <div className="text-xs font-bold text-slate-700 mb-2 flex justify-between items-center">
                  <span>Weekly Activity</span>
                  <div className="flex gap-2 text-[10px] text-slate-400 font-mono">
                    {daysHeader.map((d, i) => (
                      <span key={i} className="w-3 text-center">{d}</span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  {stats.weeklyActivity.map((activity) => (
                    <div key={activity.category} className="flex items-center justify-between text-xs">
                      <span className="text-slate-600 text-[11px] font-medium w-16 truncate">
                        {activity.category}
                      </span>
                      <div className="flex gap-2">
                        {activity.days.map((active, idx) => (
                          <div
                            key={idx}
                            className={`w-3 h-3 rounded-full ${
                              active ? 'bg-purple-600' : 'bg-purple-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Progress Bars */}
            <div className="pt-4 border-t border-slate-100">
              <div className="text-xs font-bold text-slate-700 mb-3">Skills Progress</div>
              <div className="space-y-2.5">
                {stats.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-medium w-28 truncate">{skill.name}</span>
                    <div className="flex-1 mx-3 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"
                        style={{ width: `${(skill.score / skill.maxScore) * 100}%` }}
                      />
                    </div>
                    <span className="text-slate-800 font-bold text-[11px] font-mono">
                      {skill.score}/{skill.maxScore}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Your Mentor Card (3 cols) */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-6 shadow-card border border-slate-100 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-extrabold text-slate-900 font-heading mb-4 tracking-wide">
                Your Mentor
              </h3>

              {/* Mentor Profile */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-amber-500 p-0.5 shadow-sm">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-white font-bold text-sm">
                    RV
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">{name}</h4>
                  <p className="text-xs text-slate-500">{role}</p>
                </div>
              </div>

              {/* Speech Bubble Quote */}
              <div className="relative bg-slate-50 rounded-xl p-3.5 border border-slate-200/80 mb-6 text-xs text-slate-700 font-medium leading-relaxed">
                <div className="absolute -top-2 left-6 w-3 h-3 bg-slate-50 border-t border-l border-slate-200/80 transform rotate-45" />
                {quote}
              </div>
            </div>

            {/* Message Mentor Button */}
            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 shadow-md shadow-purple-500/20 transition-all duration-200"
            >
              <span>Message Mentor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
