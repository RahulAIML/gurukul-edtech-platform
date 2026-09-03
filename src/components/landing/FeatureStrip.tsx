import React from 'react';
import { featureStripItems } from '@/data/landingData';
import { ClipboardList, Users, Briefcase, MessageSquareCode, ShieldCheck } from 'lucide-react';

export const FeatureStrip: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-purple-700' };
    switch (iconName) {
      case 'clipboard-list':
        return <ClipboardList {...props} />;
      case 'users':
        return <Users {...props} />;
      case 'briefcase':
        return <Briefcase {...props} />;
      case 'message-square-code':
        return <MessageSquareCode {...props} />;
      case 'shield-check':
        return <ShieldCheck {...props} />;
      default:
        return <ClipboardList {...props} />;
    }
  };

  return (
    <div className="py-8 bg-slate-50 border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-center">
          {featureStripItems.map((item) => (
            <div key={item.id} className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-xl bg-purple-100/70 flex items-center justify-center flex-shrink-0">
                {getFeatureIcon(item.iconName)}
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
