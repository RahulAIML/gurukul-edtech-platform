import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ArrowLeft, LogIn } from 'lucide-react';

export const metadata = {
  title: 'Login | Gurukul',
  description: 'Sign in to your Gurukul account to continue your learning journey.',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar variant="light" />

      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mx-auto mb-4">
              <LogIn className="w-6 h-6 text-red-600" />
            </div>
            <h1 className="text-2xl font-black text-slate-900 font-heading">Welcome Back</h1>
            <p className="text-sm text-slate-500 mt-1.5">Sign in to continue your learning journey.</p>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1.5">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600/40 focus:border-red-400 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-xs font-bold text-slate-700 mb-1.5">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600/40 focus:border-red-400 transition-colors"
              />
            </div>
            <button
              type="button"
              disabled
              className="w-full py-3 rounded-xl text-sm font-bold text-white bg-red-700/70 cursor-not-allowed"
            >
              Sign In
            </button>
            <p className="text-center text-xs text-slate-400">
              Authentication is not yet connected. This page is a frontend placeholder.
            </p>
          </form>

          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-red-700 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
