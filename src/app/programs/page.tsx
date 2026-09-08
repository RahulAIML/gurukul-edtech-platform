import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LearningJourney } from '@/components/landing/LearningJourney';
import { dataScienceProgram } from '@/data/programsData';
import { ArrowRight, Sparkles, CheckCircle2, Clock, Award, Users, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'Data Science Championship Program | Gurukul EdTech',
  description: 'Beginner to job ready in 24 weeks. Live + recorded learning, 1-on-1 mentorship, and project-oriented training. Explore the Gurukul Data Science Championship Program.',
  alternates: { canonical: '/programs/data-science' },
};

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar variant="light" />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-red-50/60 to-white py-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            ELITE CAREER TRACKS
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 font-heading tracking-tight mb-4">
            CHAMPIONSHIP <span className="text-red-700">PROGRAMS</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Train like a champion. Interview like one too. Master industry skills, build real-world projects, and become job ready.
          </p>
        </div>
      </section>

      {/* Flagship Program Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-red-100 bg-gradient-to-br from-red-50/60 via-white to-white shadow-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
              <div className="lg:col-span-5 relative h-56 sm:h-72 rounded-2xl overflow-hidden">
                <Image
                  src="/assets/data_skyline.jpg"
                  alt="Data Science Championship Program"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-sky-500 text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                  MOST POPULAR
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="text-xs font-bold text-red-700 uppercase tracking-wider">
                  Flagship Program • Enrolling Now
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-950 font-heading mt-2 mb-3">
                  Data Science Championship Program™
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {dataScienceProgram.subtitle} Master Python, SQL, Statistics, Machine Learning, MLOps, and Generative AI through live and recorded learning, mentorship, and project-oriented training.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold mb-8">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock className="w-4 h-4 text-red-600" />
                    <span>24 Weeks</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <BarChart3 className="w-4 h-4 text-sky-600" />
                    <span>192 Learning Hours</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Users className="w-4 h-4 text-emerald-600" />
                    <span>1-on-1 Mentorship</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Award className="w-4 h-4 text-amber-600" />
                    <span>Job Ready Portfolio</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3.5">
                  <Link
                    href="/programs/data-science/overview"
                    className="text-center py-3.5 px-6 rounded-xl font-bold text-sm text-red-800 border border-red-200 hover:border-red-400 hover:bg-red-50 shadow-sm transition-all"
                  >
                    View Brief Overview
                  </Link>
                  <Link
                    href="/programs/data-science"
                    className="text-center py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Start Championship</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-10 pb-8 flex flex-wrap gap-3">
              {dataScienceProgram.overview.highlights.slice(0, 4).map((h, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-semibold text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-xs text-slate-400 mt-6">
            More championship programs — Network, Oracle, SQL Server, AI — are in active curriculum development.
          </p>
        </div>
      </section>

      {/* Learning Journey */}
      <LearningJourney />

      <Footer />
    </div>
  );
}
