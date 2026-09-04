import React from 'react';
import { DetailedProgramView } from '@/components/program-detail/DetailedProgramView';

export const metadata = {
  title: 'Data Science Championship Program™ | Beginner to Job Ready | Gurukul',
  description: 'Data Science course, program, and training: master Python, SQL, Statistics, Machine Learning, MLOps, and Generative AI in a rigorous 24-week mentor-led training ground. Beginner to job ready.',
  alternates: { canonical: '/programs/data-science' },
  openGraph: {
    title: 'Data Science Championship Program™ | Gurukul',
    description: 'Train like a champion. Interview like one too. A 24-week Data Science course from beginner to job ready.',
    url: '/programs/data-science',
    type: 'website',
  },
};

export default function DataScienceProgramPage() {
  return <DetailedProgramView />;
}
