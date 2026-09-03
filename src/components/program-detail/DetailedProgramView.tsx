'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { dataScienceProgram } from '@/data/programsData';
import {
  Calendar,
  Clock,
  Award,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Code,
  FileText,
  Users,
  Briefcase,
  HelpCircle,
  Sparkles,
  ArrowRight,
  PhoneCall,
  Check,
} from 'lucide-react';

export const DetailedProgramView: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<string | null>('module-1');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [activeTrackTab, setActiveTrackTab] = useState<'foundations' | 'professional'>('foundations');
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [enrollSubmitted, setEnrollSubmitted] = useState(false);

  const toggleModule = (id: string) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  const toggleFaq = (idx: number) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-purple-600 selection:text-white">
      {/* Light Navbar */}
      <Navbar variant="light" />

      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 text-white py-16 lg:py-24 overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Program Headline & Badges (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              {/* Laurel / Top Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>FLAGSHIP CHAMPIONSHIP PROGRAM • 2026 COHORT</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-tight">
                DATA SCIENCE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-300 to-amber-300">
                  CHAMPIONSHIP PROGRAM
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                {dataScienceProgram.subtitle} Master Statistics, Python, SQL, Exploratory Data Analysis, Machine Learning, MLOps, and Generative AI through our dual-track curriculum.
              </p>

              {/* Key Stat Pills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-sky-400 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase">Duration</span>
                  </div>
                  <div className="text-base font-black text-white font-heading">24 Weeks</div>
                  <div className="text-[10px] text-slate-400">Structured Roadmap</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-purple-400 mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase">Commitment</span>
                  </div>
                  <div className="text-base font-black text-white font-heading">10 Hrs / Week</div>
                  <div className="text-[10px] text-slate-400">192 Total Hours</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-amber-400 mb-1">
                    <Award className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase">Projects</span>
                  </div>
                  <div className="text-base font-black text-white font-heading">6+ Portfolio</div>
                  <div className="text-[10px] text-slate-400">Production Ready</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase">Mentorship</span>
                  </div>
                  <div className="text-base font-black text-white font-heading">1-on-1 Live</div>
                  <div className="text-[10px] text-slate-400">Weekly Code Reviews</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setEnrollModalOpen(true)}
                  className="px-8 py-4 rounded-full text-base font-black text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 shadow-xl shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <span>Start Championship</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <Link
                  href="/programs/data-science/overview"
                  className="px-6 py-4 rounded-full text-sm font-bold text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:text-white transition-all"
                >
                  View Brief Overview
                </Link>
              </div>
            </div>

            {/* Right Col: Pricing / Cohort Fast-Card (4 cols) */}
            <div className="lg:col-span-4 bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Next Cohort Starts</span>
                  <div className="text-base font-bold text-white">Upcoming Monday</div>
                </div>
                <div className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                  Seats Filling Fast
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white font-heading">
                    {dataScienceProgram.pricing.discountedPrice}
                  </span>
                  <span className="text-sm text-slate-500 line-through">
                    {dataScienceProgram.pricing.originalPrice}
                  </span>
                  <span className="text-xs font-bold text-amber-400">40% OFF</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {dataScienceProgram.pricing.emiStartsAt}
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                {dataScienceProgram.pricing.features.slice(0, 5).map((feat, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setEnrollModalOpen(true)}
                className="w-full py-3.5 rounded-xl font-black text-sm text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Enroll in Championship</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Program Overview & Who Should Join */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Deep Overview & Highlights (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-extrabold text-purple-700 tracking-wider uppercase">
                  PROGRAM OVERVIEW
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-heading mt-1">
                  Engineered for Serious Aspirants. Not Passive Viewers.
                </h2>
              </div>

              {dataScienceProgram.overview.description.map((para, i) => (
                <p key={i} className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {para}
                </p>
              ))}

              <div className="pt-4 space-y-3">
                <h3 className="text-sm font-extrabold text-slate-900 font-heading uppercase tracking-wide">
                  Program Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {dataScienceProgram.overview.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-50/60 border border-purple-100 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-purple-700 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Who Should Join & Prerequisites (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-base font-extrabold text-slate-950 font-heading mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-700" />
                  <span>Who Should Join?</span>
                </h3>
                <ul className="space-y-3 text-xs text-slate-700">
                  {dataScienceProgram.overview.whoShouldJoin.map((who, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 flex-shrink-0" />
                      <span>{who}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-base font-extrabold text-slate-950 font-heading mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-sky-600" />
                  <span>Prerequisites & Eligibility</span>
                </h3>
                <ul className="space-y-3 text-xs text-slate-700">
                  {dataScienceProgram.overview.prerequisites.map((prereq, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-1.5 flex-shrink-0" />
                      <span>{prereq}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dual Track Specialization Interactive Tabs */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-black text-sky-600 uppercase tracking-wider">
              TAILORED PEDAGOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-heading mt-1">
              Dual-Track Specialization (Weeks 13–20)
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Whether you are starting from zero or have tech experience, our tailored streams ensure maximum career acceleration.
            </p>

            {/* Track Selector Buttons */}
            <div className="inline-flex p-1.5 bg-slate-200 rounded-full mt-6 shadow-inner">
              <button
                type="button"
                onClick={() => setActiveTrackTab('foundations')}
                className={`px-6 py-2.5 rounded-full text-xs font-extrabold transition-all duration-200 ${
                  activeTrackTab === 'foundations'
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                Foundations Track (Beginners)
              </button>
              <button
                type="button"
                onClick={() => setActiveTrackTab('professional')}
                className={`px-6 py-2.5 rounded-full text-xs font-extrabold transition-all duration-200 ${
                  activeTrackTab === 'professional'
                    ? 'bg-indigo-700 text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                Professional Track (Working Pros)
              </button>
            </div>
          </div>

          {/* Active Track Details */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card">
            {activeTrackTab === 'foundations' ? (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 rounded-md bg-teal-100 text-teal-800 text-xs font-bold uppercase">
                    Track A • For Students & Career Starters
                  </div>
                  <span className="text-xs text-slate-500">No prior coding expected</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  Machine Learning Fundamentals & Guided Projects
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Focus on intuitive algorithmic understanding, step-by-step Scikit-Learn workflows, extensive exploratory exercises, and building confidence through structured, mentor-guided implementations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 mb-1">Key Focus Areas</div>
                    <p className="text-slate-600">Linear Regression, Logistic Classifiers, Decision Trees, K-Means Clustering, Feature Preprocessing</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 mb-1">Milestone Outcome</div>
                    <p className="text-slate-600">2 Complete End-to-End Predictive Web Apps hosted on Streamlit Cloud with GitHub repositories</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 rounded-md bg-indigo-100 text-indigo-800 text-xs font-bold uppercase">
                    Track B • For Working Engineers & Analysts
                  </div>
                  <span className="text-xs text-slate-500">Accelerated pace</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  Applied Enterprise ML, MLOps & Business Problem Framing
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Engineered for software engineers and data professionals wanting to transition into Senior ML Engineer and Applied AI roles. Deep dive into automated pipelines, FastAPI microservices, Docker, and GenAI API integrations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 mb-1">Key Focus Areas</div>
                    <p className="text-slate-600">XGBoost/LightGBM tuning, MLflow experiment tracking, FastAPI REST microservices, Dockerization, RAG Pipelines</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 mb-1">Milestone Outcome</div>
                    <p className="text-slate-600">Production-grade containerized microservice deployed with automated CI/CD and observability</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Complete 24-Week Curriculum Accordion */}
      <section id="curriculum" className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-purple-700 tracking-wider uppercase">
              DETAILED SYLLABUS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-heading mt-1">
              Complete 24-Week Curriculum
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              9 comprehensive modules designed to take you from foundational syntax to industry-grade machine learning systems.
            </p>
          </div>

          <div className="space-y-4">
            {dataScienceProgram.curriculum.map((module) => {
              const isOpen = expandedModule === module.id;

              return (
                <div
                  key={module.id}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleModule(module.id)}
                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 font-extrabold flex items-center justify-center text-sm font-heading flex-shrink-0">
                        {module.number}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold text-purple-700 uppercase">
                            {module.weeks} • {module.phase}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-slate-900 font-heading">
                          {module.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-slate-500">
                      <span className="hidden sm:inline text-xs font-semibold text-slate-400">
                        {module.learningHours} Hours • {module.lessonsCount} Lessons
                      </span>
                      {isOpen ? <ChevronUp className="w-5 h-5 text-purple-700" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-4">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {module.description}
                      </p>

                      <div className="space-y-2">
                        <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          Key Topics Covered:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {module.topics.map((topic, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-slate-700">
                              <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                              <span>{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200">
                        <span className="text-[10px] font-bold text-slate-500 uppercase">Tools & Libraries:</span>
                        {module.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-bold text-purple-700"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      {module.project && (
                        <div className="p-3 rounded-xl bg-purple-100/60 border border-purple-200 text-xs">
                          <div className="font-bold text-purple-900">Module Project: {module.project.name}</div>
                          <p className="text-purple-800 text-[11px] mt-0.5">{module.project.description}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Tools & Technologies Stack */}
      <section id="tools" className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold text-purple-700 tracking-wider uppercase">
            INDUSTRY TECH STACK
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-heading mt-1 mb-8">
            Tools & Technologies You Will Master
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {dataScienceProgram.tools.map((tool) => (
              <div
                key={tool.name}
                className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2 hover:border-purple-300 hover:shadow-md transition-all"
              >
                <Code className="w-4 h-4 text-purple-600" />
                <span className="text-xs font-bold text-slate-800">{tool.name}</span>
                <span className="text-[10px] text-slate-400 font-normal">({tool.category})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Capstone Projects Portfolio */}
      <section id="projects" className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-purple-700 tracking-wider uppercase">
              PORTFOLIO READY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-heading mt-1">
              Featured Production Projects
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Every project is built from raw data, reviewed by senior engineers, and showcased in your hiring portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dataScienceProgram.projects.map((proj, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-purple-100 text-purple-800">
                    {proj.type}
                  </span>
                  <h3 className="text-base font-bold text-slate-950 font-heading mt-3 mb-2 leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {proj.description}
                  </p>
                </div>

                <div>
                  <div className="space-y-1 mb-4">
                    {proj.outcomes.map((out, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200">
                    {proj.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white border border-slate-200 text-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Instructors & Mentorship */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-purple-700 tracking-wider uppercase">
              EXPERT GUIDANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-heading mt-1">
              Learn from Silicon Valley & Fortune 500 Mentors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {dataScienceProgram.instructors.map((inst, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-card flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-700 to-indigo-600 text-white font-black text-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  {inst.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-950 font-heading">{inst.name}</h3>
                  <div className="text-xs font-bold text-purple-700">{inst.role}</div>
                  <div className="text-[11px] text-slate-500 font-semibold mb-2">{inst.currentCompany} • {inst.experience}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{inst.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQs Accordion */}
      <section id="faqs" className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-purple-700 tracking-wider uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-heading mt-1">
              Got Questions? We Have Answers.
            </h2>
          </div>

          <div className="space-y-3">
            {dataScienceProgram.faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;

              return (
                <div key={idx} className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm font-bold text-slate-900 font-heading pr-4">
                      {faq.question}
                    </span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-purple-700 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Final Enrollment CTA Bar */}
      <section className="py-16 bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-black text-amber-400 uppercase tracking-widest">
            BECOME A CERTIFIED CHAMPION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading max-w-2xl mx-auto leading-tight">
            Your Hard Work Will Pay Off. Start Today.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Join the next cohort of the Data Science Championship Program. Limited seats available per mentor batch.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => setEnrollModalOpen(true)}
              className="px-8 py-4 rounded-full text-base font-black text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Enroll Now — Start Championship</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:+919876543210"
              className="px-6 py-4 rounded-full text-sm font-bold text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Talk to Admissions Advisor</span>
            </a>
          </div>
        </div>
      </section>

      {/* Enrollment Modal */}
      {enrollModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <h3 className="text-lg font-black text-slate-900 font-heading">
                  Enroll in Data Science Championship
                </h3>
                <p className="text-xs text-slate-500">24 Weeks • 192 Hours • 1-on-1 Mentorship</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setEnrollModalOpen(false);
                  setEnrollSubmitted(false);
                }}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            {enrollSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-black text-slate-900 font-heading">Application Received!</h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
                  Our Senior Admissions Counselor will contact you within 2 hours to confirm your cohort slot and schedule your Week 0 diagnostic onboarding.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setEnrollModalOpen(false);
                    setEnrollSubmitted(false);
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-purple-700 hover:bg-purple-800"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setEnrollSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Deepak Kumar"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-purple-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="deepak@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-purple-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-purple-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Track</label>
                  <select className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-purple-600 focus:outline-none bg-white">
                    <option>Foundations Track (Beginner / Student)</option>
                    <option>Professional Track (Working Professional)</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-black text-xs text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 shadow-md transition-all"
                  >
                    Submit Enrollment Application →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Light Footer */}
      <Footer />
    </div>
  );
};
