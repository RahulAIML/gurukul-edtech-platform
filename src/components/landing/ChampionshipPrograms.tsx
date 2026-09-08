'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { championshipProgramsList } from '@/data/landingData';
import { ArrowRight, Info } from 'lucide-react';
import { Carousel } from '@/components/ui/Carousel';

export const ChampionshipPrograms: React.FC = () => {
  const router = useRouter();

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
            {/* Golden Brain & Chip Visual */}
            <div className="w-14 h-14 rounded-xl border-2 border-dashed border-amber-400 bg-amber-50 flex items-center justify-center relative shadow-sm">
              <span className="text-amber-700 font-black text-lg">AI</span>
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-amber-500 rounded-full" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-500 rounded-full" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-amber-500 rounded-full" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-amber-500 rounded-full" />
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
        {/* Section Heading with Golden Diamonds */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-amber-500 text-sm">✦✦</span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 font-heading uppercase">
              CHOOSE YOUR CHAMPIONSHIP PROGRAM
            </h2>
            <span className="text-amber-500 text-sm">✦✦</span>
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
                    ? 'bg-white border-2 border-blue-400/80 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 cursor-pointer ring-4 ring-blue-50'
                    : 'bg-white border border-slate-200 shadow-sm opacity-85 hover:opacity-100 hover:border-slate-300'
                }`}
              >
                {/* Most Popular Badge */}
                {program.isPopular && (
                  <div className="absolute -top-3.5 left-4 px-3 py-1 rounded-md bg-sky-500 text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                    MOST POPULAR
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
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-900 border border-slate-300 hover:bg-slate-900 hover:text-white transition-all duration-200"
                      >
                        <span>Start Championship</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <div className="text-center">
                        <span className="text-[10px] font-semibold text-sky-600 hover:underline">
                          View Brief Overview →
                        </span>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={(e) => e.preventDefault()}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-400 bg-slate-50 border border-slate-200 cursor-default"
                    >
                      <span>In Development</span>
                    </button>
                  )}
                </div>
              </div>
            );
          };

          return (
            <>
              {/* Tablet / Desktop: full grid */}
              <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {championshipProgramsList.map((program) => renderCard(program))}
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
