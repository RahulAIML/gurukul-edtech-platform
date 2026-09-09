'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { championshipProgramsList } from '@/data/landingData';
import { ArrowRight, ArrowLeft, Info } from 'lucide-react';
import { Carousel } from '@/components/ui/Carousel';

export const ChampionshipPrograms: React.FC = () => {
  const router = useRouter();
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 'left' | 'right') => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(320, el.clientWidth * 0.8);
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const renderProgramIcon = (iconType: string) => {
    switch (iconType) {
      case 'data-science':
        return (
          <div className="w-20 h-16 relative flex items-center justify-center">
            {/* 3D Bar Chart + Pie Chart Visual */}
            <div className="flex items-end gap-1.5 h-12">
              <div className="w-3.5 h-6 bg-gradient-to-t from-blue-700 to-sky-400 rounded-t-sm shadow-sm" />
              <div className="w-3.5 h-9 bg-gradient-to-t from-blue-700 to-sky-400 rounded-t-sm shadow-sm" />
              <div className="w-3.5 h-12 bg-gradient-to-t from-blue-700 to-sky-400 rounded-t-sm shadow-sm" />
            </div>
            {/* Pie Chart */}
            <div className="w-10 h-10 -ml-1 rounded-full border-2 border-white shadow-md relative overflow-hidden bg-sky-500">
              <div className="absolute inset-0 bg-blue-700" style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 0 100%, 0 50%)' }} />
              <div className="absolute inset-0 bg-sky-400" style={{ clipPath: 'polygon(50% 50%, 50% 0, 0 0, 0 50%)' }} />
            </div>
          </div>
        );

      case 'network':
        return (
          <div className="w-20 h-16 relative flex items-center justify-center">
            {/* Network graph nodes */}
            <svg viewBox="0 0 80 60" className="w-full h-full text-red-600">
              <line x1="20" y1="30" x2="40" y2="15" stroke="#C084FC" strokeWidth="2" />
              <line x1="40" y1="15" x2="60" y2="30" stroke="#C084FC" strokeWidth="2" />
              <line x1="20" y1="30" x2="40" y2="45" stroke="#C084FC" strokeWidth="2" />
              <line x1="40" y1="45" x2="60" y2="30" stroke="#C084FC" strokeWidth="2" />
              <line x1="40" y1="15" x2="40" y2="45" stroke="#C084FC" strokeWidth="2" />

              <circle cx="20" cy="30" r="7" fill="#7C3AED" />
              <circle cx="40" cy="15" r="7" fill="#9333EA" />
              <circle cx="60" cy="30" r="7" fill="#7C3AED" />
              <circle cx="40" cy="45" r="7" fill="#9333EA" />
              <circle cx="40" cy="30" r="5" fill="#C084FC" />
            </svg>
          </div>
        );

      case 'oracle':
        return (
          <div className="w-20 h-16 relative flex items-center justify-center">
            {/* Oracle Red Oval */}
            <div className="w-14 h-8 rounded-full border-[6px] border-red-600 flex items-center justify-center shadow-sm" />
          </div>
        );

      case 'sql-server':
        return (
          <div className="w-20 h-16 relative flex items-center justify-center">
            {/* Cylindrical Database Stack */}
            <svg viewBox="0 0 60 60" className="w-14 h-14 text-teal-600">
              <ellipse cx="30" cy="15" rx="22" ry="7" fill="#14B8A6" />
              <path d="M8 15v12c0 4 10 7 22 7s22-3 22-7V15" fill="#0D9488" stroke="#0F766E" strokeWidth="1" />
              <path d="M8 27v12c0 4 10 7 22 7s22-3 22-7V27" fill="#0F766E" stroke="#115E59" strokeWidth="1" />
            </svg>
          </div>
        );

      case 'ai':
        return (
          <div className="w-20 h-16 relative flex items-center justify-center">
            {/* Red Chip / AI Visual */}
            <div className="w-14 h-14 rounded-xl border-2 border-dashed border-red-400 bg-red-50 flex items-center justify-center relative shadow-sm">
              <span className="text-red-700 font-black text-lg">AI</span>
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-red-500 rounded-full" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-red-500 rounded-full" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="programs" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[3px] bg-red-600 rounded-full flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 font-heading uppercase">
              Choose Your Championship Program
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <span className="text-xs text-slate-400 italic">Different Paths. A Brighter Tomorrow.</span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scrollByCard('left')}
                aria-label="Scroll programs left"
                className="w-8 h-8 rounded-full border border-slate-200 text-slate-500 flex items-center justify-center hover:border-red-300 hover:text-red-700 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard('right')}
                aria-label="Scroll programs right"
                className="w-8 h-8 rounded-full border border-slate-200 text-slate-500 flex items-center justify-center hover:border-red-300 hover:text-red-700 transition-colors"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Program Card (shared between grid and mobile carousel) */}
        {(() => {
          const renderCard = (program: (typeof championshipProgramsList)[number]) => {
            const isAvailable = program.status === 'available';

            return (
              <div
                key={program.id}
                onClick={() => {
                  if (isAvailable) {
                    router.push('/programs/data-science/overview');
                  }
                }}
                className={`relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 h-full ${
                  isAvailable
                    ? 'bg-red-50/40 border-2 border-red-300 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 cursor-pointer ring-4 ring-red-50'
                    : 'bg-white border border-slate-200 shadow-sm opacity-85 hover:opacity-100 hover:border-slate-300'
                }`}
              >
                {/* Most Popular Ribbon */}
                {program.isPopular && (
                  <div
                    className="absolute -top-3 left-4 px-3 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider shadow-sm"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 92% 50%, 100% 100%, 0 100%)' }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Card Top: Icon & Title */}
                <div>
                  <div className="flex justify-center mb-6 pt-2">
                    {renderProgramIcon(program.iconType)}
                  </div>

                  <h3 className="text-center font-extrabold text-slate-950 text-base font-heading mb-1 leading-snug">
                    {program.title}
                  </h3>
                  <div className="text-center text-xs font-bold text-slate-600 mb-3 tracking-wide">
                    {program.tagline}
                  </div>

                  <p className="text-xs text-slate-600 text-center leading-relaxed mb-6">
                    {program.description}
                  </p>
                </div>

                {/* Card Bottom Button */}
                <div>
                  {isAvailable ? (
                    <div className="space-y-2">
                      <Link
                        href="/programs/data-science"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-all duration-200"
                      >
                        <span>Start Championship</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href="/programs/data-science/overview"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-slate-700 border border-slate-200 hover:border-red-300 hover:text-red-700 transition-all duration-200"
                      >
                        <span>View Details</span>
                      </Link>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={(e) => e.preventDefault()}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-700 border border-slate-200 hover:border-red-300 hover:text-red-700 transition-all duration-200"
                    >
                      <span>View Program</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          };

          return (
            <>
              {/* Tablet / Desktop: horizontally scrollable row (snap), wired to the arrow buttons.
                  Today's 5 programs fit most viewports; overflow scroll activates automatically
                  as more programs are added via the CMS/admin later. */}
              <div
                ref={scrollerRef}
                className="hidden sm:flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {championshipProgramsList.map((program) => (
                  <div key={program.id} className="snap-start flex-1 min-w-[220px]">
                    {renderCard(program)}
                  </div>
                ))}
              </div>

              {/* Mobile: auto-advancing swipeable carousel */}
              <div className="sm:hidden">
                <Carousel autoplay autoplayDelay={4000}>
                  {championshipProgramsList.map((program) => renderCard(program))}
                </Carousel>
              </div>
            </>
          );
        })()}

        {/* Subtitle / Helper info below cards */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500 text-center">
          <Info className="w-4 h-4 text-red-600 flex-shrink-0" />
          <span>Click on any program to explore the detailed curriculum, roadmap, projects and more.</span>
        </div>
      </div>
    </section>
  );
};
