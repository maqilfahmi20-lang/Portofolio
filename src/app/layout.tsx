import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Muhammad Aqil Fahmi | IT Programmer & Full Stack Developer',
  description: 'Portfolio profesional Muhammad Aqil Fahmi. Full Stack Developer dengan pengalaman Next.js, React, Laravel, dan payment gateway integration.',
  keywords: ['Full Stack Developer', 'Web Developer', 'Next.js', 'React', 'Laravel', 'Portfolio'],
  openGraph: {
    title: 'Muhammad Aqil Fahmi | IT Programmer & Full Stack Developer',
    description: 'Portfolio profesional Muhammad Aqil Fahmi. Full Stack Developer dengan pengalaman Next.js, React, Laravel.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-gray-900">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
