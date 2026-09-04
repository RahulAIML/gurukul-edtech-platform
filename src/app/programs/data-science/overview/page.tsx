import React from 'react';
import { BriefDescriptionLayout } from '@/components/program-brief/BriefDescriptionLayout';

export const metadata = {
  title: 'Data Science Championship Program™ — Brief Overview | Gurukul',
  description: 'A 24-week Data Science training program with dual-track specialization for beginners and working professionals. 192 learning hours, weekly tests, portfolio projects, and lifetime career support.',
  alternates: { canonical: '/programs/data-science/overview' },
  openGraph: {
    title: 'Data Science Championship Program™ — Brief Overview | Gurukul',
    description: 'A 24-week Data Science course roadmap: curriculum, time commitment, and career outcomes at a glance.',
    url: '/programs/data-science/overview',
    type: 'website',
  },
};

export default function DataScienceOverviewPage() {
  return <BriefDescriptionLayout />;
}
