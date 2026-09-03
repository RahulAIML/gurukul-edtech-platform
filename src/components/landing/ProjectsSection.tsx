import React from 'react';
import Link from 'next/link';
import { featuredProjectsData } from '@/data/landingData';
import { ShoppingCart, Users, BarChart3, Truck, ArrowRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const renderProjectIcon = (iconName: string, iconColor: string) => {
    const props = { className: 'w-6 h-6', style: { color: iconColor } };
    switch (iconName) {
      case 'shopping-cart':
        return <ShoppingCart {...props} />;
      case 'users':
        return <Users {...props} />;
      case 'bar-chart':
        return <BarChart3 {...props} />;
      case 'truck':
        return <Truck {...props} />;
      default:
        return <BarChart3 {...props} />;
    }
  };

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-blue-700 font-heading uppercase">
            BUILD REAL PROJECTS. BUILD A REAL PORTFOLIO.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Work on industry-relevant projects and create proof of your skills.
          </p>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featuredProjectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Project Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: project.iconBgColor }}
                >
                  {renderProjectIcon(project.iconName, project.iconColor)}
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-slate-900 text-base font-heading mb-2 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies Tag list */}
              {project.technologies && (
                <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-slate-50">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-50 text-slate-600 border border-slate-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center">
          <Link
            href="/programs/data-science/overview"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-slate-800 border border-slate-300 hover:border-purple-600 hover:text-purple-700 hover:bg-purple-50/50 transition-all duration-200"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
