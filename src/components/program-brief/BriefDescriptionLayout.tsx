import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BriefSidebar } from './BriefSidebar';
import { BriefHeader } from './BriefHeader';
import { WhyThisMattersCard } from './WhyThisMattersCard';
import { LearningJourneyRoadmapCard } from './LearningJourneyRoadmapCard';
import { TimeCommitmentCard } from './TimeCommitmentCard';
import { WeekByWeekRoadmapTable } from './WeekByWeekRoadmapTable';
import { BriefFooterCta } from './BriefFooterCta';

export const BriefDescriptionLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gurukul-navy-950 text-slate-100 selection:bg-sky-500 selection:text-white flex flex-col justify-between">
      {/* 1. Global Dark Navbar */}
      <Navbar variant="dark" />

      {/* 2. Top Golden Laurels Motto Banner */}
      <div className="w-full bg-slate-950 border-b border-slate-800/80 py-3 px-4 text-center shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <span className="text-amber-400 text-sm">🌿</span>
          <p className="text-xs sm:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 tracking-wider font-heading uppercase">
            One Goal. Many Paths. Your Championship Starts Here.
          </p>
          <span className="text-amber-400 text-sm">🌿</span>
        </div>
      </div>

      {/* 3. Main Body Container Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 flex-1 w-full">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Sidebar */}
          <BriefSidebar activeSection="overview" />

          {/* Right Main Content Area */}
          <main className="flex-1 w-full overflow-hidden space-y-6">
            {/* Header Banner with 6 Stat Pills */}
            <BriefHeader />

            {/* Middle 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {/* Left: Why This Matters */}
              <WhyThisMattersCard />

              {/* Center: Your Learning Journey & Tracks */}
              <LearningJourneyRoadmapCard />

              {/* Right: 10 Hours Per Week Commitment */}
              <TimeCommitmentCard />
            </div>

            {/* Detailed Week-by-Week Roadmap Table (24 Weeks) */}
            <WeekByWeekRoadmapTable />

            {/* Bottom Feature Badges & Action Bar */}
            <BriefFooterCta />
          </main>
        </div>
      </div>

      {/* 4. Global Footer */}
      <Footer />
    </div>
  );
};
