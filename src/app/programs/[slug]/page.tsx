import React from 'react';
import { notFound } from 'next/navigation';
import { DetailedProgramView } from '@/components/program-detail/DetailedProgramView';
import { dataScienceProgram } from '@/data/programsData';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  if (params.slug === 'data-science') {
    return {
      title: 'Data Science Championship Program | Gurukul EdTech',
      description: dataScienceProgram.subtitle,
    };
  }

  const titleCase = params.slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${titleCase} Championship Program | Gurukul`,
    description: `The ${titleCase} Championship Program is under active curriculum development.`,
  };
}

export default function DynamicProgramPage({ params }: Props) {
  if (params.slug === 'data-science') {
    return <DetailedProgramView />;
  }

  const titleCase = params.slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Navbar variant="light" />

      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto shadow-sm">
          <Clock className="w-8 h-8" />
        </div>

        <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
          Curriculum In Development
        </span>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
          {titleCase} Championship Program
        </h1>

        <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          This championship track is currently being curated with our industry partners.
          In the meantime, explore our flagship Data Science Championship Program.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/programs/data-science"
            className="px-6 py-3 rounded-full text-xs font-bold text-white bg-purple-700 hover:bg-purple-800 shadow-md transition-all"
          >
            Explore Data Science Championship →
          </Link>
          <Link
            href="/programs"
            className="px-6 py-3 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Programs</span>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
