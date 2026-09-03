import React from 'react';
import Image from 'next/image';
import { Calendar, Clock, Award, ShieldCheck, CheckCircle, Flame } from 'lucide-react';

export const BriefHeader: React.FC = () => {
  return (
    <div className="relative rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 border border-slate-800 p-6 sm:p-8 shadow-2xl overflow-hidden mb-6">
      {/* Background High-Fidelity Cyber Data City Silhouette Image */}
      <div className="absolute inset-y-0 right-0 w-full sm:w-2/3 opacity-25 pointer-events-none">
        <Image
          src="/assets/data_skyline.jpg"
          alt="Data Science City Skyline"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <div className="relative z-10 space-y-5">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight font-heading text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-300 to-indigo-200">
            DATA SCIENCE CHAMPIONSHIP PROGRAM
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-medium mt-1">
            A 24-week applied curriculum to make you industry ready.
          </p>
        </div>

        {/* 6 Quick Key Stat Badges in a Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-1">
          {/* 1. 24 Weeks */}
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/95 border border-slate-800/90 shadow-sm backdrop-blur-md">
            <Calendar className="w-4 h-4 text-sky-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-black text-white font-heading">24</div>
              <div className="text-[10px] text-slate-400 leading-tight">Weeks</div>
            </div>
          </div>

          {/* 2. 192 Hours */}
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/95 border border-slate-800/90 shadow-sm backdrop-blur-md">
            <Clock className="w-4 h-4 text-purple-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-black text-white font-heading">192</div>
              <div className="text-[10px] text-slate-400 leading-tight">Total Learning Hours</div>
            </div>
          </div>

          {/* 3. 10 Hours / Week */}
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/95 border border-slate-800/90 shadow-sm backdrop-blur-md">
            <Flame className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-black text-white font-heading">10</div>
              <div className="text-[10px] text-slate-400 leading-tight">Hours / Week</div>
            </div>
          </div>

          {/* 4. 2 Hours Weekly Test */}
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/95 border border-slate-800/90 shadow-sm backdrop-blur-md">
            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-black text-white font-heading">2</div>
              <div className="text-[10px] text-slate-400 leading-tight">Hours Weekly Test</div>
            </div>
          </div>

          {/* 5. Portfolio Ready */}
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/95 border border-slate-800/90 shadow-sm backdrop-blur-md">
            <Award className="w-4 h-4 text-sky-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-black text-white font-heading">Portfolio Ready</div>
              <div className="text-[10px] text-slate-400 leading-tight">Projects</div>
            </div>
          </div>

          {/* 6. Certificate of Completion */}
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/95 border border-slate-800/90 shadow-sm backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-black text-white font-heading">Certificate of</div>
              <div className="text-[10px] text-slate-400 leading-tight">Completion</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
