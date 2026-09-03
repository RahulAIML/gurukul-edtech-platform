import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { StatsBar } from '@/components/landing/StatsBar';
import { LearningJourney } from '@/components/landing/LearningJourney';
import { ChampionshipPrograms } from '@/components/landing/ChampionshipPrograms';
import { MentorProgressSection } from '@/components/landing/MentorProgressSection';
import { ProjectsSection } from '@/components/landing/ProjectsSection';
import { SuccessStories } from '@/components/landing/SuccessStories';
import { CareerCtaBanner } from '@/components/landing/CareerCtaBanner';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* 1. Header / Navbar */}
      <Navbar variant="light" />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Hero Statistics Bar */}
      <StatsBar />

      {/* 4. Learning Journey */}
      <LearningJourney />

      {/* 5. Championship Programs Grid */}
      <ChampionshipPrograms />

      {/* 6. Mentor / Progress Section */}
      <MentorProgressSection />

      {/* 7. Real Projects Portfolio */}
      <ProjectsSection />

      {/* 8. Success Stories / Testimonials */}
      <SuccessStories />

      {/* 9. Career CTA Banner */}
      <CareerCtaBanner />

      {/* 10. Feature Strip & Footer */}
      <Footer />
    </main>
  );
}
