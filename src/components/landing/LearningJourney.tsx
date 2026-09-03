import React from 'react';
import { learningJourneySteps } from '@/data/landingData';
import { BookOpen, Code, Box, UserCheck, TrendingUp, MessageSquare, Award, ArrowRight } from 'lucide-react';

export const LearningJourney: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6' };
    switch (iconName) {
      case 'book-open':
        return <BookOpen {...props} className="w-6 h-6 text-purple-600" />;
      case 'code':
        return <Code {...props} className="w-6 h-6 text-blue-600" />;
      case 'box':
        return <Box {...props} className="w-6 h-6 text-purple-600" />;
      case 'user-check':
        return <UserCheck {...props} className="w-6 h-6 text-indigo-600" />;
      case 'trending-up':
        return <TrendingUp {...props} className="w-6 h-6 text-sky-600" />;
      case 'message-square':
        return <MessageSquare {...props} className="w-6 h-6 text-purple-600" />;
      case 'award':
        return <Award {...props} className="w-6 h-6 text-amber-500" />;
      default:
        return <BookOpen {...props} className="w-6 h-6 text-purple-600" />;
    }
  };

  return (
    <section id="learning-journey" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-950 font-heading">
            A JOURNEY THAT TURNS YOU INTO A{' '}
            <span className="text-purple-700">JOB-READY</span> PROFESSIONAL
          </h2>
        </div>

        {/* Desktop Horizontal Journey (7 Steps) */}
        <div className="hidden lg:grid grid-cols-7 gap-2 relative">
          {learningJourneySteps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center text-center relative group">
              {/* Step Circle Card */}
              <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 group-hover:bg-purple-50 group-hover:border-purple-300 group-hover:scale-110 transition-all duration-200 shadow-sm">
                {getStepIcon(step.iconName)}
              </div>

              {/* Connecting Arrow */}
              {index < learningJourneySteps.length - 1 && (
                <div className="absolute top-7 left-[65%] w-[70%] flex items-center justify-center pointer-events-none text-slate-300">
                  <div className="h-[2px] w-full bg-slate-200" />
                  <ArrowRight className="w-4 h-4 text-slate-300 -ml-1.5 flex-shrink-0" />
                </div>
              )}

              {/* Step Stage Title */}
              <h3 className="text-sm font-extrabold text-slate-900 tracking-wider font-heading mb-1 uppercase">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-500 max-w-[130px] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Vertical Timeline Journey */}
        <div className="lg:hidden space-y-6 max-w-md mx-auto">
          {learningJourneySteps.map((step, index) => (
            <div key={step.id} className="relative flex items-start gap-4">
              {/* Connecting Line */}
              {index < learningJourneySteps.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-purple-100 -ml-[1px]" />
              )}

              {/* Step Circle */}
              <div className="w-12 h-12 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center flex-shrink-0 z-10 shadow-sm">
                {getStepIcon(step.iconName)}
              </div>

              {/* Step Content */}
              <div className="pt-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-700">
                    Step {index + 1}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-heading">{step.title}</h3>
                </div>
                <p className="text-sm text-slate-600 mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
