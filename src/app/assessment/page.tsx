import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AssessmentPage } from '@/components/assessment/AssessmentPage';

export const metadata = {
  title: 'AI Assessment Evaluator | Gurukul',
  description:
    'Submit your work and get intelligent, evidence-based AI feedback — overall score, strengths, mistakes, topic-wise performance, and actionable next steps.',
};

export default function AssessmentRoute() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar variant="light" />
      <main className="flex-1">
        <AssessmentPage />
      </main>
      <Footer />
    </div>
  );
}
