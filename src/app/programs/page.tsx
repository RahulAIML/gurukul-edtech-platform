import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ChampionshipPrograms } from '@/components/landing/ChampionshipPrograms';
import { LearningJourney } from '@/components/landing/LearningJourney';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Explore Championship Programs | Gurukul EdTech',
  description: 'Choose your championship career track in Data Science, AI, Cloud, and Engineering. Mentor-driven, project-based curriculum.',
};

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar variant="light" />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-purple-50/60 to-white py-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            ELITE CAREER TRACKS
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 font-heading tracking-tight mb-4">
            CHAMPIONSHIP <span className="text-purple-700">PROGRAMS</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Choose your intensive training ground. Master industry skills, build real-world projects, and transform into a job-ready champion.
          </p>
        </div>
      </section>

      {/* Championship Program Cards Section */}
      <ChampionshipPrograms />

      {/* Featured Flagship Program Spotlight */}
      <section className="py-12 bg-slate-50/60 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-bold uppercase tracking-wider">
                  FLAGSHIP PROGRAM • ENROLLING NOW
                </span>
                <h2 className="text-2xl sm:text-4xl font-black font-heading mt-4 mb-3">
                  Data Science Championship Program
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  A 24-week applied curriculum with dual-track specialization for beginners and working professionals. Master Python, SQL, Statistics, Machine Learning, MLOps, and Generative AI.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold">
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>24 Weeks</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>192 Learning Hours</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>1-on-1 Mentorship</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Job Ready Portfolio</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center">
                <Link
                  href="/programs/data-science/overview"
                  className="w-full text-center py-3.5 px-6 rounded-xl font-bold text-sm bg-white text-slate-950 hover:bg-slate-100 shadow-md transition-all"
                >
                  View Brief Overview
                </Link>
                <Link
                  href="/programs/data-science"
                  className="w-full text-center py-3.5 px-6 rounded-xl font-bold text-sm bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Start Championship</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <LearningJourney />

      <Footer />
    </div>
  );
}
