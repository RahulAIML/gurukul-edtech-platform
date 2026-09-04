import { SearchableItem } from '@/types';

export const searchIndex: SearchableItem[] = [
  {
    id: 'data-science-program',
    title: 'Data Science Championship Program™',
    description: 'Beginner to job ready in 24 weeks. Live + recorded learning, mentorship, and project-oriented training.',
    href: '/programs/data-science',
    group: 'Programs',
    keywords: ['data science', 'ml', 'machine learning', 'python', 'sql', 'ai', 'statistics', 'championship', 'course', 'program'],
  },
  {
    id: 'data-science-overview',
    title: 'Data Science Program — Brief Overview',
    description: 'Quick summary of the curriculum, roadmap, and time commitment.',
    href: '/programs/data-science/overview',
    group: 'Programs',
    keywords: ['overview', 'brief', 'roadmap', 'summary', 'data science'],
  },
  {
    id: 'all-programs',
    title: 'Explore All Championship Programs',
    description: 'Browse every available and upcoming career track.',
    href: '/programs',
    group: 'Programs',
    keywords: ['programs', 'courses', 'tracks', 'catalog'],
  },
  {
    id: 'learning-journey',
    title: 'Learning Journey',
    description: 'Learn, Practice, Build, Get Reviewed, Improve, Interview, Get Hired.',
    href: '/#learning-journey',
    group: 'Learning Journey',
    keywords: ['journey', 'learn', 'practice', 'build', 'interview', 'hired'],
  },
  {
    id: 'mentorship',
    title: 'Mentorship',
    description: '1-on-1 mentor tracking, weekly activity, and skill progress.',
    href: '/#mentorship',
    group: 'Learning Journey',
    keywords: ['mentor', 'mentorship', 'guidance', 'progress'],
  },
  {
    id: 'success-stories',
    title: 'Success Stories',
    description: 'Real outcomes from Gurukul learners.',
    href: '/#success-stories',
    group: 'Resources',
    keywords: ['success', 'testimonials', 'placements', 'reviews'],
  },
  {
    id: 'career-roadmaps',
    title: 'Career Roadmaps',
    description: 'Step-by-step career path guides.',
    href: '/programs/data-science/overview',
    group: 'Resources',
    keywords: ['career', 'roadmap', 'guide'],
  },
];

export function searchPrograms(query: string): SearchableItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return searchIndex.filter((item) => {
    const haystack = `${item.title} ${item.description} ${item.keywords.join(' ')}`.toLowerCase();
    return haystack.includes(q);
  });
}
