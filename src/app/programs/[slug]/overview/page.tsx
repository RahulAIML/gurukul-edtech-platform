import React from 'react';
import { BriefDescriptionLayout } from '@/components/program-brief/BriefDescriptionLayout';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export default function DynamicOverviewPage({ params }: Props) {
  if (params.slug === 'data-science') {
    return <BriefDescriptionLayout />;
  }

  const titleCase = params.slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-gurukul-navy-950 text-white flex flex-col justify-between">
      <Navbar variant="dark" />

      <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 text-sky-400 flex items-center justify-center mx-auto shadow-inner">
          <Clock className="w-8 h-8" />
        </div>

        <span className="px-3 py-1 rounded-full bg-blue-900/40 text-sky-300 border border-blue-800 text-xs font-bold uppercase tracking-wider">
          Overview Coming Soon
        </span>

        <h1 className="text-3xl sm:text-4xl font-black font-heading text-white">
          {titleCase} Brief Overview
        </h1>

        <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
          The brief curriculum specifications for this track are being finalized. Check out our active Data Science Championship Program.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/programs/data-science/overview"
            className="px-6 py-3 rounded-full text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all"
          >
            View Data Science Overview →
          </Link>
          <Link
            href="/programs"
            className="px-6 py-3 rounded-full text-xs font-bold text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-all flex items-center gap-1.5"
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
