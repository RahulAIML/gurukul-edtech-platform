import React from 'react';
import Link from 'next/link';
import { GurukulLogo } from '@/components/ui/GurukulLogo';
import { FeatureStrip } from '@/components/landing/FeatureStrip';

export const Footer: React.FC = () => {
  return (
    <footer id="about-us" className="bg-white">
      {/* 5-Item Feature Strip */}
      <FeatureStrip />

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <GurukulLogo size="md" />
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed">
              Gurukul is India&apos;s premier career championship EdTech platform. We engineer rigorous, mentor-led programs designed to turn ambitious learners into elite, job-ready professionals.
            </p>
            <div className="text-xs text-slate-500">
              © {new Date().getFullYear()} Gurukul Education Technologies Pvt. Ltd. All rights reserved.
            </div>
          </div>

          {/* Championship Programs */}
          <div>
            <h4 className="text-sm font-bold text-slate-950 font-heading mb-4 tracking-wide uppercase">
              Championship Programs
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <Link href="/programs/data-science/overview" className="hover:text-purple-700 font-semibold text-purple-700 flex items-center gap-1.5">
                  <span>Data Science (Active)</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </Link>
              </li>
              <li><span className="text-slate-400 cursor-not-allowed">Network Championship (Soon)</span></li>
              <li><span className="text-slate-400 cursor-not-allowed">Oracle Championship (Soon)</span></li>
              <li><span className="text-slate-400 cursor-not-allowed">SQL Server Database (Soon)</span></li>
              <li><span className="text-slate-400 cursor-not-allowed">AI & GenAI Championship (Soon)</span></li>
            </ul>
          </div>

          {/* Learning & Mentorship */}
          <div>
            <h4 className="text-sm font-bold text-slate-950 font-heading mb-4 tracking-wide uppercase">
              Experience
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li><Link href="/#learning-journey" className="hover:text-purple-700">7-Step Learning Journey</Link></li>
              <li><Link href="/#mentorship" className="hover:text-purple-700">1-on-1 Mentorship</Link></li>
              <li><Link href="/programs/data-science/overview" className="hover:text-purple-700">24-Week Applied Roadmap</Link></li>
              <li><Link href="/#success-stories" className="hover:text-purple-700">Placement Success Stories</Link></li>
              <li><Link href="/programs/data-science" className="hover:text-purple-700">Curriculum Syllabus</Link></li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="text-sm font-bold text-slate-950 font-heading mb-4 tracking-wide uppercase">
              Contact & Support
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li><a href="mailto:admissions@gurukul.edu" className="hover:text-purple-700">admissions@gurukul.edu</a></li>
              <li><a href="tel:+919876543210" className="hover:text-purple-700">+91 98765 43210</a></li>
              <li><a href="#" className="hover:text-purple-700">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-700">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-700">Honor Code & Integrity</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
