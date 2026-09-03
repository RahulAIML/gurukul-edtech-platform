'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';
import { VideoModal } from '@/components/ui/VideoModal';

export const HeroSection: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white pt-6 pb-12 lg:pt-10 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Headline & Value Proposition (5.5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left z-10">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-[11px] font-bold tracking-wider uppercase mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              INDUSTRY-ALIGNED. MENTOR-DRIVEN. RESULT-FOCUSED.
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.08] text-slate-950 font-heading mb-5">
              BIG DREAMS.
              <br />
              HARD WORK.
              <br />
              REAL IMPACT.
              <br />
              <span className="text-slate-950">CHAMPION </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">
                YOUR CAREER.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mb-7">
              Industry-ready skills. Real-world projects. Mentor support. Career transformation.
              <br className="hidden sm:inline" />
              <span className="font-semibold text-slate-800"> We don&apos;t just teach. We make Champions.</span>
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-full bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-800 hover:from-purple-800 hover:to-indigo-900 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/45 transition-all duration-200 transform hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-slate-800 hover:text-purple-700 hover:bg-purple-50/70 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-purple-700 transition-all duration-200">
                  <Play className="w-4 h-4 fill-current ml-0.5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900 group-hover:text-purple-700">Watch Video</div>
                  <div className="text-[11px] text-slate-500">See how it works</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Artwork Composition (6.5 cols) */}
          <div className="lg:col-span-7 relative flex flex-col items-center">
            {/* Soft Ambient Background Glows */}
            <div className="absolute -top-10 -right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="relative w-full">
              {/* Floating Tech Badges (Precisely positioned matching reference) */}
              
              {/* 1. DATA ANALYTICS (Top Left) */}
              <div className="absolute -top-6 left-6 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-purple-100 flex flex-col items-center hover:scale-105 transition-transform duration-200">
                <span className="text-[10px] font-black tracking-wider text-slate-900 uppercase">DATA ANALYTICS</span>
                <div className="flex items-end gap-1 h-4 mt-1">
                  <div className="w-1.5 h-2 bg-purple-400 rounded-sm" />
                  <div className="w-1.5 h-4 bg-purple-600 rounded-sm" />
                  <div className="w-1.5 h-3 bg-purple-500 rounded-sm" />
                  <div className="w-1.5 h-4 bg-indigo-600 rounded-sm" />
                </div>
              </div>

              {/* 2. AI / ML (Top Center) */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-blue-100 flex flex-col items-center hover:scale-105 transition-transform duration-200">
                <span className="text-[10px] font-black tracking-wider text-slate-900 uppercase">AI / ML</span>
                <div className="w-5 h-5 mt-0.5 text-blue-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-5.04Z" />
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-5.04Z" />
                  </svg>
                </div>
              </div>

              {/* 3. SQL (Top Right) */}
              <div className="absolute -top-6 right-28 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-cyan-100 flex flex-col items-center hover:scale-105 transition-transform duration-200">
                <span className="text-[10px] font-black tracking-wider text-slate-900 uppercase">SQL</span>
                <div className="w-5 h-5 mt-0.5 text-cyan-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                    <path d="M3 12A9 3 0 0 0 21 12" />
                  </svg>
                </div>
              </div>

              {/* 4. Motivational Italic Note & Surging Arrow (Far Right Corner) */}
              <div className="absolute -top-8 -right-2 z-20 text-right pointer-events-none">
                <div className="text-[11px] sm:text-xs font-bold tracking-tight text-slate-800 italic leading-tight">
                  <p>Discipline Today</p>
                  <p className="text-slate-900 font-semibold">Freedom Tomorrow.</p>
                  <p className="text-purple-700 font-bold">Your Hard Work</p>
                  <p className="text-amber-600 font-extrabold">Will Pay Off.</p>
                </div>
                <div className="flex justify-end mt-1">
                  <svg width="36" height="36" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-600 animate-pulse">
                    <path d="M6 40L38 8M38 8H18M38 8V28" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Main Photorealistic Hero Artwork */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200/80 group mt-4">
                <Image
                  src="/assets/hero_learner.jpg"
                  alt="Gurukul Data Science Student Working at Modern Desk"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transform group-hover:scale-102 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal isOpen={videoModalOpen} onClose={() => setVideoModalOpen(false)} />
    </section>
  );
};
