'use client';

import React from 'react';
import Link from 'next/link';
import { FileText, Download, ArrowRight } from 'lucide-react';
import type { ModuleDocument } from '@/data/moduleDocuments';

interface ModuleDocumentViewerProps {
  document: ModuleDocument;
}

/**
 * Step 1 of the module flow: the student views the document online and can
 * download it. Step 2 (taking the test) is a separate CTA to /assessment —
 * kept as two steps/pages, matching the ticket's flow, rather than one
 * combined page, so the assessment upload stays a standalone, reusable tool.
 */
export const ModuleDocumentViewer: React.FC<ModuleDocumentViewerProps> = ({ document: doc }) => {
  const handleDownload = () => {
    const blob = new Blob([doc.content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = window.document.createElement('a');
    link.href = url;
    link.download = doc.downloadFilename;
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="mb-8">
        <span className="text-xs font-extrabold text-red-600 uppercase tracking-wider">{doc.moduleTitle}</span>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-950 font-heading tracking-tight mt-1.5 mb-3">
          {doc.title}
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">{doc.description}</p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white shadow-card overflow-hidden">
        <div className="flex items-center justify-between gap-3 px-5 sm:px-6 py-4 border-b border-slate-100 bg-slate-50/60">
          <div className="flex items-center gap-2.5 min-w-0">
            <FileText className="w-4 h-4 text-red-600 flex-shrink-0" />
            <span className="text-sm font-bold text-slate-900 truncate">{doc.downloadFilename}</span>
          </div>
          <button
            type="button"
            onClick={handleDownload}
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-slate-700 border border-slate-200 hover:border-red-300 hover:text-red-700 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Download
          </button>
        </div>

        <div
          role="document"
          aria-label={`${doc.title} — document contents`}
          className="px-5 sm:px-6 py-6 max-h-[60vh] overflow-y-auto"
        >
          <pre className="whitespace-pre-wrap text-sm text-slate-700 leading-relaxed font-sans">{doc.content}</pre>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-red-100 bg-red-50/50 p-5 sm:p-6">
        <div>
          <p className="text-sm font-bold text-slate-900">Ready to check your understanding?</p>
          <p className="text-xs text-slate-600 mt-0.5">
            Complete the module assessment — upload your answers as a PDF, Word, or Excel file.
          </p>
        </div>
        <Link
          href="/assessment"
          className="flex-shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/25 transition-all duration-200"
        >
          <span>Take the Assessment</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
