'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';
import { VideoModal } from '@/components/ui/VideoModal';

const journeySteps = ['LEARN', 'PRACTICE', 'BUILD', 'GROW', 'LEAD'];
const impactList = ['PEOPLE', 'SKILLS', 'OPPORTUNITIES', 'REAL IMPACT'];

const cursiveStyle: React.CSSProperties = {
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontSize: 'clamp(0.95rem, 1.6vw, 1.3rem)',
  transform: 'rotate(-4deg)',
};

export const HeroSection: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* ============== DESKTOP / LARGE TABLET (lg+) ============== */}
      <div className="hidden lg:block relative min-h-[560px]">
        {/* Artwork: fills the right ~58% of the viewport, full bleed to the edge */}
        <div className="absolute inset-y-0 right-0 w-[58%]">
          <Image
            src="/assets/hero_artwork.jpg"
            alt="A climber plants a Gurukul flag at a mountain summit, a red road winding down through the peaks to a city skyline below — symbolizing the journey from learning to real opportunity."
            fill
            sizes="58vw"
            priority
            className="object-cover object-center"
          />
          {/* Soft left-edge blend into the white page background */}
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none" />

          {/* Overlay: PEOPLE / SKILLS / OPPORTUNITIES / REAL IMPACT */}
          <ul className="absolute top-[11%] right-[7%] border-l-2 border-red-600 pl-3 space-y-0.5 text-right">
            {impactList.map((item) => (
              <li key={item} className="text-[11px] font-bold tracking-wider text-slate-900">
                {item}
              </li>
            ))}
          </ul>

          {/* Overlay: cursive "From Learning to Real Opportunities" */}
          <div className="absolute top-[33%] right-[6%] w-[36%] text-right pointer-events-none">
            <p className="text-slate-900 italic leading-tight" style={cursiveStyle}>
              From Learning
              <br />
              to <span className="font-semibold">Real Opportunities</span>
            </p>
            <svg viewBox="0 0 160 24" className="w-40 h-6 ml-auto text-red-600" fill="none">
              <path d="M2 18C40 4 110 4 158 14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>

          {/* Overlay: dark badge with LEARN / PRACTICE / BUILD / GROW / LEAD */}
          <div className="absolute top-[57%] left-[42%] rounded-2xl bg-slate-950/55 backdrop-blur-[2px] px-4 py-3 space-y-1.5">
            {journeySteps.map((step) => (
              <div key={step} className="flex items-center gap-2">
                <span className="w-3 h-[2px] bg-red-500" />
                <span className="text-[11px] font-bold tracking-wider text-white">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="max-w-md pt-14 pb-16">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-6 h-[3px] bg-red-600 rounded-full" />
              <span className="text-xs font-bold tracking-[0.15em] text-slate-600 uppercase">
                Learn Today. Lead Tomorrow.
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-black tracking-tight leading-[1.05] text-4xl xl:text-5xl">
              <span className="block text-slate-950">DATA SKILLS</span>
              <span className="block text-slate-950">REAL PROJECTS</span>
              <span className="block text-red-600">BRIGHTER CAREERS.</span>
            </h1>

            {/* Description */}
            <p className="mt-5 text-sm text-slate-600 leading-relaxed max-w-sm">
              Industry-ready skills. Real-world projects. 1:1 mentor support.
              <br />
              A learning journey designed to make you job-ready.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex items-center gap-5">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/25 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center gap-2.5 group"
              >
                <span className="w-9 h-9 rounded-full border-2 border-red-600 text-red-600 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-200">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                <span className="text-left">
                  <span className="block text-xs font-bold text-slate-900">Watch Video</span>
                  <span className="block text-[11px] text-slate-500">See how it works</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ============== MOBILE / TABLET (< lg) ============== */}
      <div className="lg:hidden max-w-2xl mx-auto px-4 sm:px-6 pt-8 pb-6">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-6 h-[3px] bg-red-600 rounded-full" />
          <span className="text-[11px] font-bold tracking-[0.15em] text-slate-600 uppercase">
            Learn Today. Lead Tomorrow.
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading font-black tracking-tight leading-[1.08] text-4xl sm:text-5xl">
          <span className="block text-slate-950">DATA SKILLS</span>
          <span className="block text-slate-950">REAL PROJECTS</span>
          <span className="block text-red-600">BRIGHTER CAREERS.</span>
        </h1>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
          Industry-ready skills. Real-world projects. 1:1 mentor support. A learning journey designed to make you job-ready.
        </p>

        {/* CTAs */}
        <div className="mt-6 flex flex-wrap items-center gap-5">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/25 transition-all duration-200"
          >
            <span>Explore Programs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            type="button"
            onClick={() => setVideoModalOpen(true)}
            className="inline-flex items-center gap-2.5 group"
          >
            <span className="w-9 h-9 rounded-full border-2 border-red-600 text-red-600 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-200">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </span>
            <span className="text-left">
              <span className="block text-xs font-bold text-slate-900">Watch Video</span>
              <span className="block text-[11px] text-slate-500">See how it works</span>
            </span>
          </button>
        </div>

        {/* Artwork: contained card below content, keeps mobile page compact */}
        {/* Phones: a tighter portrait crop keeps the flag + summit fully in frame */}
        <div className="sm:hidden relative mt-8 w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/assets/hero_artwork_mobile.jpg"
            alt="A climber plants a Gurukul flag at a mountain summit, with a red road winding down through the peaks."
            fill
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>
        {/* Tablets: the wider artwork fits a landscape card */}
        <div className="hidden sm:block relative mt-8 w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/assets/hero_artwork.jpg"
            alt="A climber plants a Gurukul flag at a mountain summit, a red road winding down through the peaks to a city skyline below."
            fill
            sizes="100vw"
            className="object-cover object-[55%_center]"
          />
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal isOpen={videoModalOpen} onClose={() => setVideoModalOpen(false)} />
    </section>
  );
};
