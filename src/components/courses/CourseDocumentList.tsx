'use client';

import React, { useEffect, useState } from 'react';
import { FileText, Download, Eye, Loader2, AlertCircle } from 'lucide-react';
import { formatBytes } from '@/lib/assessment/fileValidation';
import type { CourseDocumentSummary } from '@/lib/courseDocuments/types';

interface CourseDocumentListProps {
  courseSlug: string;
  courseTitle: string;
}

type ListState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'loaded'; documents: CourseDocumentSummary[] };

export const CourseDocumentList: React.FC<CourseDocumentListProps> = ({ courseSlug, courseTitle }) => {
  const [state, setState] = useState<ListState>({ status: 'loading' });

  useEffect(() => {
    let cancelled = false;
    setState({ status: 'loading' });

    fetch(`/api/courses/${courseSlug}/documents`)
      .then(async (res) => {
        const body = await res.json();
        if (!res.ok || !body.success) {
          throw new Error(body?.error?.message ?? 'Could not load documents for this course.');
        }
        if (!cancelled) setState({ status: 'loaded', documents: body.documents });
      })
      .catch((err: Error) => {
        if (!cancelled) setState({ status: 'error', message: err.message });
      });

    return () => {
      cancelled = true;
    };
  }, [courseSlug]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="mb-8">
        <span className="text-xs font-extrabold text-red-600 uppercase tracking-wider">{courseTitle}</span>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-950 font-heading tracking-tight mt-1.5">
          Course Documents
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed mt-2">
          View or download the study materials for this course.
        </p>
      </div>

      {state.status === 'loading' && (
        <div className="flex items-center justify-center gap-2 py-16 text-slate-400">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span className="text-sm">Loading documents…</span>
        </div>
      )}

      {state.status === 'error' && (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-900">{state.message}</p>
        </div>
      )}

      {state.status === 'loaded' && state.documents.length === 0 && (
        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-8 text-center">
          <FileText className="w-8 h-8 text-slate-300 mx-auto mb-3" />
          <p className="text-sm text-slate-500">No documents have been added to this course yet.</p>
        </div>
      )}

      {state.status === 'loaded' && state.documents.length > 0 && (
        <ul className="space-y-3">
          {state.documents.map((doc) => (
            <li
              key={doc.id}
              className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-card"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-red-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-slate-900 truncate">{doc.title}</p>
                  <p className="text-xs text-slate-500">
                    {doc.filename} &middot; {formatBytes(doc.sizeBytes)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={`/api/courses/${courseSlug}/documents/${doc.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold text-slate-700 border border-slate-200 hover:border-red-300 hover:text-red-700 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">View</span>
                </a>
                <a
                  href={`/api/courses/${courseSlug}/documents/${doc.id}?download=1`}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
