import React from 'react';
import Link from 'next/link';
import { Rocket, PhoneCall, ArrowRight } from 'lucide-react';

export const CareerCtaBanner: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-red-900 via-red-900 to-red-950 p-8 sm:p-12 overflow-hidden shadow-2xl border border-red-800">
          {/* Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-red-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="flex items-center gap-6 text-left">
              {/* Rocket Icon */}
              <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center flex-shrink-0 text-amber-400">
                <Rocket className="w-8 h-8 transform -rotate-45" />
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-heading tracking-tight leading-snug">
                  YOUR CAREER DOESN&apos;T NEED ANOTHER COURSE.
                  <br />
                  <span className="text-amber-400">IT NEEDS A TRAINING GROUND.</span>
                </h2>
                <p className="text-sm sm:text-base text-red-200 mt-2 font-medium">
                  Enter Gurukul. Become a Data Science Champion.
                </p>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <Link
                href="/programs/data-science"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 shadow-lg shadow-amber-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Start Your Championship</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs font-bold text-white hover:text-amber-300 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Talk to Our Career Advisor</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
