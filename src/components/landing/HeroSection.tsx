'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';
import { VideoModal } from '@/components/ui/VideoModal';

export const HeroSection: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white md:pt-0 pt-6 pb-12 md:pb-0 lg:pb-0">
      {/* Desktop / Tablet: designed hero banner with real clickable CTA hotspots */}
      <div className="hidden md:block relative w-full">
        <div className="relative w-full aspect-[1983/793]">
          <Image
            src="/assets/header.png"
            alt="Gurukul — Data Skills. Real Projects. Brighter Careers. Industry-ready skills, real-world projects and 1:1 mentor support."
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />

          {/* Hotspot: Explore Programs */}
          <Link
            href="/programs"
            aria-label="Explore Programs"
            className="absolute rounded-full transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
            style={{ left: '3.78%', top: '66.08%', width: '15.69%', height: '8.07%' }}
          >
            <span className="sr-only">Explore Programs</span>
          </Link>

          {/* Hotspot: Watch Video */}
          <button
            type="button"
            onClick={() => setVideoModalOpen(true)}
            aria-label="Watch video — see how it works"
            className="absolute rounded-full transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
            style={{ left: '21.18%', top: '66.08%', width: '13.00%', height: '8.32%' }}
          >
            <span className="sr-only">Watch Video</span>
          </button>
        </div>
      </div>

      {/* Mobile: coded hero (real text + buttons, readable on small screens) */}
      <div className="md:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Headline & Value Proposition (5.5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left z-10">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-800 text-[11px] font-bold tracking-wider uppercase mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
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
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-full bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:from-red-800 hover:to-red-900 shadow-lg shadow-red-600/30 hover:shadow-red-600/45 transition-all duration-200 transform hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-slate-800 hover:text-red-700 hover:bg-red-50/70 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-red-700 transition-all duration-200">
                  <Play className="w-4 h-4 fill-current ml-0.5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900 group-hover:text-red-700">Watch Video</div>
                  <div className="text-[11px] text-slate-500">See how it works</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Artwork Composition (6.5 cols) */}
          <div className="lg:col-span-7 relative flex flex-col items-center">
            {/* Soft Ambient Background Glows */}
            <div className="absolute -top-10 -right-10 w-96 h-96 bg-red-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="relative w-full">
              {/* Motivational Italic Note & Surging Arrow (Far Right Corner) */}
              <div className="absolute -top-8 -right-2 z-20 text-right pointer-events-none">
                <div className="text-[11px] sm:text-xs font-bold tracking-tight text-slate-800 italic leading-tight">
                  <p>Discipline Today</p>
                  <p className="text-slate-900 font-semibold">Freedom Tomorrow.</p>
                  <p className="text-red-700 font-bold">Your Hard Work</p>
                  <p className="text-amber-600 font-extrabold">Will Pay Off.</p>
                </div>
                <div className="flex justify-end mt-1">
                  <svg width="36" height="36" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-600 animate-pulse">
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
