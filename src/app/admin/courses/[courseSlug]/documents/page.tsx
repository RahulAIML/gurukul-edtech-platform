import React from 'react';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CourseDocumentAdmin } from '@/components/admin/CourseDocumentAdmin';
import { getCourse } from '@/data/courses';

interface Props {
  params: { courseSlug: string };
}

export const metadata = {
  title: 'Manage Course Documents | Gurukul Admin',
  robots: { index: false, follow: false },
};

export default function AdminCourseDocumentsPage({ params }: Props) {
  const course = getCourse(params.courseSlug);
  if (!course) notFound();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar variant="light" />
      <main className="flex-1">
        <CourseDocumentAdmin courseSlug={course.slug} courseTitle={course.title} />
      </main>
      <Footer />
    </div>
  );
}
