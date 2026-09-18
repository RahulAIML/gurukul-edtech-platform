import React from 'react';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CourseDocumentList } from '@/components/courses/CourseDocumentList';
import { getCourse, courses } from '@/data/courses';

interface Props {
  params: { courseSlug: string };
}

export function generateStaticParams() {
  return courses.map((c) => ({ courseSlug: c.slug }));
}

export function generateMetadata({ params }: Props) {
  const course = getCourse(params.courseSlug);
  return {
    title: course ? `${course.title} — Documents | Gurukul` : 'Course Documents | Gurukul',
  };
}

export default function CourseDocumentsPage({ params }: Props) {
  const course = getCourse(params.courseSlug);
  if (!course) notFound();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar variant="light" />
      <main className="flex-1">
        <CourseDocumentList courseSlug={course.slug} courseTitle={course.title} />
      </main>
      <Footer />
    </div>
  );
}
