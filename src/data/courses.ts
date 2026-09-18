import type { Course } from '@/lib/courseDocuments/types';

/**
 * Static course list. No course-management backend exists yet — this is
 * the seed list documents can be attached to. Swapping this for a real
 * fetch later does not change any consumer of getCourse()/courses.
 */
export const courses: Course[] = [
  { slug: 'data-science', title: 'Data Science Championship Program™' },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
