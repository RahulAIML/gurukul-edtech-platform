import React from 'react';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModuleDocumentViewer } from '@/components/learn/ModuleDocumentViewer';
import { getModuleDocument, moduleDocuments } from '@/data/moduleDocuments';

interface Props {
  params: { moduleSlug: string };
}

export function generateStaticParams() {
  return moduleDocuments.map((doc) => ({ moduleSlug: doc.slug }));
}

export function generateMetadata({ params }: Props) {
  const doc = getModuleDocument(params.moduleSlug);
  return {
    title: doc ? `${doc.title} | Gurukul` : 'Module Document | Gurukul',
    description: doc?.description,
  };
}

export default function ModuleDocumentPage({ params }: Props) {
  const doc = getModuleDocument(params.moduleSlug);
  if (!doc) notFound();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar variant="light" />
      <main className="flex-1">
        <ModuleDocumentViewer document={doc} />
      </main>
      <Footer />
    </div>
  );
}
