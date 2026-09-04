'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GurukulLogo } from '@/components/ui/GurukulLogo';
import { navigationLinks } from '@/data/landingData';
import { ProgramsMegaMenu } from './ProgramsMegaMenu';
import { SearchOverlay } from './SearchOverlay';
import { Menu, X, ChevronDown, ArrowRight, Search } from 'lucide-react';

interface NavbarProps {
  variant?: 'light' | 'dark';
}

export const Navbar: React.FC<NavbarProps> = ({ variant = 'light' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [programsMenuOpen, setProgramsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isDark = variant === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openPrograms = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProgramsMenuOpen(true);
  };

  const scheduleClosePrograms = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setProgramsMenuOpen(false), 200);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isDark
          ? 'bg-gurukul-navy-950/95 border-b border-gurukul-navy-cardBorder text-white backdrop-blur-md'
          : scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 text-slate-900'
          : 'bg-white border-b border-slate-100 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <GurukulLogo variant={isDark ? 'dark' : 'light'} />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navigationLinks.map((link) => {
              if (link.label === 'Programs') {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={openPrograms}
                    onMouseLeave={scheduleClosePrograms}
                  >
                    <button
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded={programsMenuOpen}
                      onClick={() => setProgramsMenuOpen((v) => !v)}
                      className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                        isDark ? 'text-slate-200 hover:text-white' : 'text-slate-700 hover:text-purple-700'
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                          programsMenuOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                );
              }

              if (link.children) {
                return (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setResourcesOpen(true)}
                    onMouseLeave={() => setResourcesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                        isDark
                          ? 'text-slate-200 hover:text-white'
                          : 'text-slate-700 hover:text-purple-700'
                      }`}
                      onClick={() => setResourcesOpen(!resourcesOpen)}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-purple-600 transition-transform duration-200 group-hover:rotate-180" />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 w-64 pt-2 transition-all duration-200 ${
                        resourcesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div
                        className={`rounded-xl shadow-xl border p-2 ${
                          isDark
                            ? 'bg-gurukul-navy-card border-gurukul-navy-cardBorder text-white'
                            : 'bg-white border-slate-100 text-slate-900'
                        }`}
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`block p-2.5 rounded-lg transition-colors ${
                              isDark
                                ? 'hover:bg-slate-800/60'
                                : 'hover:bg-purple-50'
                            }`}
                          >
                            <div className="text-sm font-semibold">{child.label}</div>
                            {child.description && (
                              <div className="text-xs text-slate-400 mt-0.5">{child.description}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? isDark
                        ? 'text-purple-400 font-semibold'
                        : 'text-purple-700 font-semibold'
                      : isDark
                      ? 'text-slate-200 hover:text-white'
                      : 'text-slate-700 hover:text-purple-700'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Persistent search pill (xl+), icon-only trigger below xl */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className={`hidden xl:flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium transition-colors ${
                isDark
                  ? 'border-slate-700 text-slate-400 hover:bg-slate-800'
                  : 'border-slate-200 text-slate-500 hover:border-purple-300 hover:bg-purple-50/50'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>What do you want to learn?</span>
            </button>
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className={`xl:hidden p-2 rounded-full transition-colors ${
                isDark ? 'text-slate-200 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100 hover:text-purple-700'
              }`}
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              href="/#login"
              className={`px-5 py-2 text-sm font-semibold rounded-full border transition-all duration-200 ${
                isDark
                  ? 'border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white'
                  : 'border-slate-200 text-slate-700 hover:border-purple-300 hover:text-purple-700 hover:bg-purple-50/50'
              }`}
            >
              Login
            </Link>

            <Link
              href="/programs/data-science"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 text-sm font-bold text-white rounded-full bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 shadow-md hover:shadow-purple-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className={`p-2 rounded-lg ${isDark ? 'text-slate-200 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'}`}
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${
                isDark ? 'text-slate-200 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Programs Mega Menu */}
      <div onMouseEnter={openPrograms} onMouseLeave={scheduleClosePrograms}>
        <ProgramsMegaMenu
          open={programsMenuOpen}
          onClose={() => setProgramsMenuOpen(false)}
          onOpenSearch={() => setSearchOpen(true)}
        />
      </div>

      {/* Global Search Overlay */}
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Responsive Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-4 pt-2 pb-6 space-y-3 transition-all ${
            isDark
              ? 'bg-gurukul-navy-card border-gurukul-navy-cardBorder text-white'
              : 'bg-white border-slate-200 text-slate-900 shadow-lg'
          }`}
        >
          <div className="flex flex-col space-y-2 pt-2">
            {navigationLinks.map((link) => {
              if (link.label === 'Programs') {
                return (
                  <div key={link.label}>
                    <button
                      type="button"
                      onClick={() => setMobileProgramsOpen((v) => !v)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isDark ? 'text-slate-200 hover:bg-slate-800' : 'text-slate-700 hover:bg-purple-50 hover:text-purple-700'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileProgramsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileProgramsOpen && (
                      <div className="pl-3 pt-1 pb-2 space-y-1">
                        <Link
                          href="/programs/data-science"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 rounded-md text-sm font-semibold text-purple-700 bg-purple-50"
                        >
                          Data Science Championship Program™
                        </Link>
                        <Link
                          href="/programs"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 rounded-md text-xs font-semibold text-slate-500"
                        >
                          Explore all →
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.children) return null;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isDark
                      ? 'text-slate-200 hover:bg-slate-800'
                      : 'text-slate-700 hover:bg-purple-50 hover:text-purple-700'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
            <Link
              href="/#login"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full py-2.5 text-center text-sm font-semibold rounded-lg border ${
                isDark
                  ? 'border-slate-700 text-white'
                  : 'border-slate-300 text-slate-700'
              }`}
            >
              Login
            </Link>
            <Link
              href="/programs/data-science"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center text-sm font-bold text-white rounded-lg bg-gradient-to-r from-purple-700 to-indigo-700 shadow-md flex items-center justify-center gap-2"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
