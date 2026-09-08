'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Award,
  Users,
  BookOpen,
  Terminal,
  Brain,
} from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title = 'How Gurukul Championship Programs Work',
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeScene, setActiveScene] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  // 4 Cinematic High-Energy Narrative Scenes
  const scenes = useMemo(
    () => [
      {
        id: 0,
        badge: 'Phase 1 • Core Foundations',
        headline: 'From Zero to High-Performance Data Analysis',
        subtitle: 'Build unshakeable statistical intuition, write modular Python, and execute complex SQL window functions from Day 1.',
        voiceNarration:
          'Welcome to Gurukul. In Phase 1, you build strong foundations. Master descriptive and inferential statistics, high performance Python with NumPy and Pandas, and write enterprise SQL with window functions and CTEs.',
        codeSnippet: `import pandas as pd\nimport numpy as np\n# Ingesting & analyzing 500k+ records\ndf = pd.read_sql("SELECT * FROM transactions", engine)\ninsights = df.groupby('segment').agg({'revenue': ['mean', 'sum']})`,
        tags: ['Statistics & Probability', 'NumPy & Pandas', 'Complex SQL & CTEs', 'Exploratory Data Analysis'],
        metric: 'Weeks 1–12 • Foundations Track',
        bgGradient: 'from-slate-950 via-red-950 to-slate-900',
        icon: BookOpen,
        iconColor: 'text-red-400',
        accentBorder: 'border-red-500/50',
        glowColor: 'bg-red-500/20',
      },
      {
        id: 1,
        badge: 'Phase 2 • Dual-Track ML & AI',
        headline: 'Train & Deploy Enterprise Machine Learning Pipelines',
        subtitle: 'Progress from fundamental Scikit-Learn algorithms to gradient boosting with XGBoost, FastAPI microservices, and Generative AI.',
        voiceNarration:
          'In Phase 2, dive into Machine Learning. Train classification and regression models, optimize hyperparameters with Optuna, containerize with Docker, and integrate Generative AI APIs into real-world applications.',
        codeSnippet: `from xgboost import XGBClassifier\nfrom fastapi import FastAPI\n# Production Model Microservice\nmodel = XGBClassifier(n_estimators=300, max_depth=6)\nmodel.fit(X_train, y_train)\n# 91.4% ROC-AUC Target Achieved`,
        tags: ['Supervised & Unsupervised ML', 'XGBoost & LightGBM', 'FastAPI Microservices', 'GenAI & LangChain RAG'],
        metric: 'Weeks 13–20 • Track Specialization',
        bgGradient: 'from-slate-950 via-sky-950 to-slate-900',
        icon: Brain,
        iconColor: 'text-sky-400',
        accentBorder: 'border-sky-500/50',
        glowColor: 'bg-sky-500/20',
      },
      {
        id: 2,
        badge: 'Phase 3 • 1-on-1 Mentorship',
        headline: 'Weekly Code Reviews & 70%+ Checkpoint Gates',
        subtitle: 'Never learn alone. Lead data scientists from Amazon and Google review your pull requests and guide your technical growth.',
        voiceNarration:
          'You are never alone. Your dedicated industry mentor tracks your code quality, conducts weekly live reviews, and guides you through the mandatory Week 12 Checkpoint Gate until you are ready.',
        codeSnippet: `// Mentor Feedback: Rahul Verma (Amazon)\n✓ Vectorized memory bottleneck resolved (-42% latency)\n✓ Cross-validation strategy verified\n✓ PR Approved! Unlocked Capstone Milestone`,
        tags: ['1-on-1 Live Code Reviews', 'Weekly Checkpoint Gates', '70%+ Passing Standard', 'Direct Mentor Chat'],
        metric: 'Continuous Growth • Expert Reviews',
        bgGradient: 'from-slate-950 via-teal-950 to-slate-900',
        icon: Users,
        iconColor: 'text-emerald-400',
        accentBorder: 'border-emerald-500/50',
        glowColor: 'bg-emerald-500/20',
      },
      {
        id: 3,
        badge: 'Phase 4 • Capstone & Placement',
        headline: 'Defend Your Portfolio & Crack Top-Tier Offers',
        subtitle: 'Showcase production capstones to industry juries, undergo 5x technical mock interviews, and land packages up to ₹80 LPA+.',
        voiceNarration:
          'Finally, Phase 4. Defend your multi-modal capstone project before an industry jury, undergo intensive mock technical interviews, and transform into a job-ready Champion.',
        codeSnippet: `// Career Placement Milestone\n🏆 Capstone Defense: Grade A+ (Verified)\n💼 5x Technical Mock Interviews Completed\n🚀 Placed at Top Tier Tech Firms (₹12 LPA - ₹80 LPA+)`,
        tags: ['Live Capstone Defense', '5x Technical Mock Interviews', '₹80 LPA+ Highest Package', 'Lifetime Career Network'],
        metric: 'Weeks 21–24 • Job-Ready Champion',
        bgGradient: 'from-slate-950 via-amber-950 to-slate-900',
        icon: Award,
        iconColor: 'text-amber-400',
        accentBorder: 'border-amber-500/50',
        glowColor: 'bg-amber-500/20',
      },
    ],
    []
  );

  // Browser Speech Synthesis (Human-like AI Voice Narrator)
  const speakText = useCallback(
    (text: string) => {
      if (typeof window === 'undefined' || !window.speechSynthesis) return;

      window.speechSynthesis.cancel();

      if (isMuted) return;

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.02;
      utterance.pitch = 1.0;

      const voices = window.speechSynthesis.getVoices();
      const preferredVoice =
        voices.find(
          (v) =>
            v.lang.startsWith('en') &&
            (v.name.includes('Google') ||
              v.name.includes('Natural') ||
              v.name.includes('Samantha') ||
              v.name.includes('Daniel') ||
              v.name.includes('Guy') ||
              v.name.includes('Jenny'))
        ) || voices.find((v) => v.lang.startsWith('en'));

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      window.speechSynthesis.speak(utterance);
    },
    [isMuted]
  );

  // Trigger narration whenever scene changes or modal opens
  useEffect(() => {
    if (isOpen && isPlaying && !isMuted) {
      speakText(scenes[activeScene].voiceNarration);
    } else if (!isOpen || !isPlaying || isMuted) {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    }
  }, [isOpen, activeScene, isPlaying, isMuted, speakText, scenes]);

  // Clean up speech on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Timer for smooth scene playback
  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveScene((current) => (current + 1) % scenes.length);
          return 0;
        }
        return prev + 1.2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isOpen, isPlaying, scenes.length]);

  if (!isOpen) return null;

  const currentScene = scenes[activeScene];
  const SceneIcon = currentScene.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500" />
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white font-heading tracking-wide flex items-center gap-2">
              <span>{title}</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded-full border border-amber-800/60">
                <Sparkles className="w-3 h-3" /> AI Voice Narrated
              </span>
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`p-2 rounded-full border transition-colors ${
                isMuted
                  ? 'bg-red-950/40 border-red-800 text-red-400'
                  : 'bg-slate-800 border-slate-700 text-slate-200 hover:text-white'
              }`}
              title={isMuted ? 'Unmute Voice Narration' : 'Mute Voice'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />}
            </button>

            <button
              onClick={() => {
                if (typeof window !== 'undefined' && window.speechSynthesis) {
                  window.speechSynthesis.cancel();
                }
                onClose();
              }}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Display Screen */}
        <div
          className={`relative aspect-video w-full bg-gradient-to-br ${currentScene.bgGradient} p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-700`}
        >
          {/* Animated Background Mesh & Glows */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          <div className={`absolute -top-24 -right-24 w-80 h-80 ${currentScene.glowColor} rounded-full blur-3xl pointer-events-none`} />

          {/* Top Info Bar inside player */}
          <div className="relative z-10 flex items-center justify-between">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border ${currentScene.accentBorder} text-xs font-bold text-white shadow-md`}>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentScene.badge}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-semibold text-slate-300 bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800">
                Phase {activeScene + 1} of {scenes.length}
              </span>
              <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800/50 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live Audio
              </span>
            </div>
          </div>

          {/* Center Content: Interactive Animated Showcase Grid */}
          <div className="relative z-10 my-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Narrative Text (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center shadow-lg">
                  <SceneIcon className={`w-5 h-5 ${currentScene.iconColor}`} />
                </div>
                <div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">
                    {currentScene.metric}
                  </span>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-black text-white font-heading leading-tight">
                    {currentScene.headline}
                  </h4>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {currentScene.subtitle}
              </p>

              {/* Feature Topic Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {currentScene.tags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-[10px] font-semibold text-slate-200 shadow-sm"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Live Code / Terminal Simulator (5 cols) */}
            <div className="lg:col-span-5 hidden sm:block">
              <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-3.5 shadow-xl font-mono text-[10px] text-slate-300 space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[9px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-sky-400" />
                    <span>gurukul_kernel.py</span>
                  </span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                </div>
                <pre className="text-sky-300 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                  {currentScene.codeSnippet}
                </pre>
              </div>
            </div>
          </div>

          {/* Bottom Player Controls & Scrub Bar */}
          <div className="relative z-10 pt-3 space-y-2.5">
            {/* Progress Bar for the active scene */}
            <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-red-500 via-sky-400 to-amber-400 h-full rounded-full transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Interactive Control Buttons */}
            <div className="flex items-center justify-between text-slate-300 text-xs">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveScene(0);
                    setProgress(0);
                    speakText(scenes[0].voiceNarration);
                  }}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Restart"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <span className="font-mono text-[11px] text-slate-400 pl-1">
                  0{activeScene + 1}:{(Math.floor(progress / 10)).toString().padStart(2, '0')} / 04:00
                </span>
              </div>

              {/* Scene Switcher Pills */}
              <div className="flex items-center gap-1.5">
                {scenes.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActiveScene(idx);
                      setProgress(0);
                      speakText(scenes[idx].voiceNarration);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeScene === idx ? 'w-6 bg-amber-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Jump to phase ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
