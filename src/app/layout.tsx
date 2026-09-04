import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import { PageTransition } from '@/components/layout/PageTransition';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gurukul | Learn. Build. Get Hired. — EdTech Championship Programs',
  description: 'Big Dreams. Hard Work. Real Impact. Champion Your Career. Industry-ready skills, real-world projects, mentor support, and career transformation.',
  keywords: ['Data Science', 'EdTech', 'Machine Learning', 'AI', 'Gurukul', 'Career Championship', 'Mentorship', 'Full Stack Data Science'],
  authors: [{ name: 'Gurukul EdTech' }],
  openGraph: {
    title: 'Gurukul | Champion Your Career with Industry-Aligned Programs',
    description: 'Learn. Build. Get Hired. Transform into a job-ready professional with our Data Science Championship Program.',
    siteName: 'Gurukul EdTech',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-white text-slate-900 selection:bg-purple-500 selection:text-white">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
