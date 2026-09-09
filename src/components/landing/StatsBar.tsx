import React from 'react';
import { heroStatsData } from '@/data/landingData';
import { Users, TrendingUp, Trophy, Infinity as InfinityIcon, Star } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const renderIcon = (iconName: string, color: string) => {
    const iconProps = { className: 'w-7 h-7 sm:w-8 sm:h-8', style: { color } };
    switch (iconName) {
      case 'users':
        return <Users {...iconProps} />;
      case 'trending-up':
        return <TrendingUp {...iconProps} />;
      case 'trophy':
        return <Trophy {...iconProps} />;
      case 'infinity':
        return <InfinityIcon {...iconProps} />;
      case 'star':
        return <Star {...iconProps} fill={color} fillOpacity={0.15} />;
      default:
        return <Users {...iconProps} />;
    }
  };

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 lg:-mt-20 mb-16">
      <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-6 sm:p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {heroStatsData.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex items-center gap-4 ${
                idx > 0 ? 'sm:pl-6 pt-4 sm:pt-0' : ''
              } group hover:translate-y-[-2px] transition-transform duration-200`}
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                {renderIcon(stat.iconName, stat.color)}
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-heading">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-600 font-medium leading-snug">
                  <div>{stat.label}</div>
                  {stat.sublabel && <div className="text-slate-500">{stat.sublabel}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
