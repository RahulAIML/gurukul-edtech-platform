'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { searchPrograms } from '@/data/searchData';
import { SearchableItem } from '@/types';

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ open, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchableItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery('');
      setResults([]);
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const handler = setTimeout(() => setResults(searchPrograms(query)), 150);
    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex flex-col items-center bg-slate-950/40 backdrop-blur-sm px-4 pt-24 sm:pt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Search Gurukul"
        >
          <motion.div
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
              <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search programs, topics, resources…"
                aria-label="Search"
                className="flex-1 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 outline-none bg-transparent"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close search"
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2">
              {query.trim() === '' ? (
                <p className="px-4 py-8 text-center text-xs text-slate-400">
                  Start typing to search programs, learning journey, and resources.
                </p>
              ) : results.length === 0 ? (
                <p className="px-4 py-8 text-center text-xs text-slate-400">
                  No results for &ldquo;{query}&rdquo;. Try &ldquo;data science&rdquo; or &ldquo;mentorship&rdquo;.
                </p>
              ) : (
                <ul className="space-y-1">
                  {results.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl hover:bg-purple-50 transition-colors group"
                      >
                        <div>
                          <div className="text-xs font-bold text-purple-700 uppercase tracking-wide">{item.group}</div>
                          <div className="text-sm font-bold text-slate-900">{item.title}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{item.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-purple-600 flex-shrink-0 transition-colors" />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
