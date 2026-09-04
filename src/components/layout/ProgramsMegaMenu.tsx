'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search, Clock, Award } from 'lucide-react';
import { championshipProgramsList } from '@/data/landingData';

interface ProgramsMegaMenuProps {
  open: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export const ProgramsMegaMenu: React.FC<ProgramsMegaMenuProps> = ({ open, onClose, onOpenSearch }) => {
  const available = championshipProgramsList.filter((p) => p.status === 'available');
  const upcoming = championshipProgramsList.filter((p) => p.status !== 'available');

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[55] bg-slate-950/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
          />
          <motion.div
            role="menu"
            aria-label="Programs"
            className="fixed left-0 right-0 top-20 z-[60] flex justify-center px-4"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <div className="w-full max-w-4xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr]">
                {/* Left: category list */}
                <div className="p-5 border-b sm:border-b-0 sm:border-r border-slate-100 bg-slate-50/60">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Categories
                  </div>
                  <ul className="space-y-1">
                    {available.map((p) => (
                      <li key={p.id}>
                        <Link
                          href="/programs/data-science"
                          onClick={onClose}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold text-slate-900 bg-white border border-purple-200 shadow-sm"
                        >
                          <span
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: p.categoryColor }}
                          />
                          {p.title}
                        </Link>
                      </li>
                    ))}
                    {upcoming.map((p) => (
                      <li key={p.id}>
                        <span className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-400 cursor-default">
                          <span
                            className="w-2 h-2 rounded-full flex-shrink-0 opacity-40"
                            style={{ backgroundColor: p.categoryColor }}
                          />
                          {p.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: available program preview */}
                <div className="p-5">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Available Program
                  </div>
                  <div className="flex gap-4 rounded-xl border border-slate-100 p-3 hover:border-purple-200 transition-colors">
                    <div className="relative w-24 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100">
                      <Image
                        src="/assets/data_skyline.jpg"
                        alt="Data Science Championship Program"
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-black text-slate-950 font-heading leading-snug">
                        Data Science Championship Program™
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Train like a champion. Beginner to job ready.
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-[11px] text-slate-500 font-semibold">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-purple-500" /> 24 Weeks
                        </span>
                        <span className="flex items-center gap-1">
                          <Award className="w-3.5 h-3.5 text-amber-500" /> Certificate
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mt-4">
                    <Link
                      href="/programs/data-science/overview"
                      onClick={onClose}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-slate-900 border border-slate-300 hover:border-purple-400 hover:text-purple-700 transition-colors"
                    >
                      <span>View Program</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/programs/data-science"
                      onClick={onClose}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 shadow-sm transition-all"
                    >
                      <span>Explore Curriculum</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenSearch();
                    }}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-purple-700 transition-colors"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>Search all programs →</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
