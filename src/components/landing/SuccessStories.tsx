'use client';

import React from 'react';
import Link from 'next/link';
import { successStoriesData } from '@/data/landingData';
import { Star, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export const SuccessStories: React.FC = () => {
  return (
    <section id="success-stories" className="py-16 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Navigation Arrows */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-purple-900 font-heading uppercase">
              SUCCESS STORIES THAT INSPIRE
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              className="p-2 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-purple-700 hover:border-purple-300 transition-colors"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              className="p-2 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-purple-700 hover:border-purple-300 transition-colors"
              aria-label="Next story"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonials Row (4 stories + 1 CTA Card) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {successStoriesData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Avatar + Info */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 p-0.5 shadow-sm flex-shrink-0">
                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xs">
                      {item.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-tight font-heading">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-slate-500">{item.role}</p>
                    <p className="text-[10px] text-purple-700 font-semibold">Placed at {item.company}</p>
                  </div>
                </div>

                {/* Package & Rating Badge */}
                <div className="flex items-center justify-between pt-2 pb-2.5 border-y border-slate-100 mb-3">
                  <span className="text-sm font-black text-blue-700 font-heading">
                    {item.packageOffered}
                  </span>
                  <div className="flex items-center gap-1">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-slate-700">{item.rating}/5</span>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs text-slate-600 italic leading-relaxed">
                  {item.review}
                </p>
              </div>
            </div>
          ))}

          {/* 5th CTA Card: YOUR STORY CAN BE NEXT */}
          <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-950 rounded-2xl p-6 text-white shadow-xl flex flex-col justify-between relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

            <div>
              <h3 className="text-base font-black tracking-tight font-heading leading-snug mb-2">
                YOUR STORY
                <br />
                CAN BE NEXT.
              </h3>
              <p className="text-xs text-purple-200/90 leading-relaxed mb-6">
                Join thousands of learners who are now building the careers they dreamed of.
              </p>
            </div>

            <Link
              href="/programs/data-science"
              className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-amber-300 transition-all duration-200 shadow-md transform group-hover:scale-105"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
