import React from 'react';
import type { TopicScore } from '@/lib/assessment/schema';

interface TopicScoresProps {
  topics: TopicScore[];
}

export const TopicScores: React.FC<TopicScoresProps> = ({ topics }) => {
  if (topics.length === 0) return null;

  return (
    <section aria-labelledby="topics-heading" className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
      <h3 id="topics-heading" className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-4">
        Topic-Wise Performance
      </h3>
      <div className="space-y-4">
        {topics.map((topic, i) => {
          const pct = Math.round((topic.score / topic.max_score) * 100);
          return (
            <div key={i}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-bold text-slate-900">{topic.topic}</span>
                <span className="text-xs font-bold text-slate-600">{pct}%</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={pct}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${topic.topic} score`}
                className="h-2 rounded-full bg-slate-100 overflow-hidden"
              >
                <div
                  className="h-full rounded-full bg-red-600 transition-[width] duration-700 ease-out"
                  style={{ width: `${pct}%` }}
                />
              </div>
              {topic.feedback && <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{topic.feedback}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
};
