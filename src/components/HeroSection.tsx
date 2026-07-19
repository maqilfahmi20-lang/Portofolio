'use client';

import { portfolioData } from '@/data/portfolioData';
import { useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [copyState, setCopyState] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopyState(true);
    setTimeout(() => setCopyState(false), 2000);
  };

  const hasPhoto = true;

  return (
    <section id="home" className="pt-24 pb-12 px-4 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <div className="mb-4 inline-block">
              <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
                Available for Work
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 leading-tight">
              Muhammad<br />Aqil Fahmi
            </h1>

            <h2 className="text-2xl md:text-3xl text-secondary font-semibold mb-6">
              Full Stack Developer
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Informatics Engineering graduate specializing in full-stack web development and machine learning, with experience in payment gateway integration and published academic research.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="px-8 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                View Projects
              </a>
              <a
                href="/CV_Muhammad_Aqil_Fahmi.pdf"
                download
                className="px-8 py-3 border-2 border-secondary text-secondary rounded-lg font-semibold hover:bg-secondary hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-8 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                {copyState ? '✓ Email Copied' : 'Copy Email'}
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 border-t pt-8">
              <div>
                <p className="text-3xl font-bold text-secondary">3+</p>
                <p className="text-gray-500 text-sm">Projects Built</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">1+</p>
                <p className="text-gray-500 text-sm">experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">1</p>
                <p className="text-gray-500 text-sm">Publication</p>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Photo or Avatar */}
          <div className="hidden md:flex justify-center items-center">
            {hasPhoto ? (
              <div className="w-80 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-secondary ring-offset-4">
                <Image
                  src="/profile.jpeg"
                  alt="Muhammad Aqil Fahmi"
                  width={320}
                  height={420}
                  className="w-full h-auto object-cover object-top"
                  priority
                />
              </div>
            ) : (
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-secondary to-blue-700 rounded-2xl shadow-2xl ring-4 ring-secondary ring-offset-4 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                      <span className="text-5xl font-bold text-white">MAF</span>
                    </div>
                    <p className="text-lg font-semibold">Muhammad Aqil Fahmi</p>
                    <p className="text-sm opacity-80 mt-1">Full Stack Developer</p>
                  </div>
                </div>
                {/* Decorative dots */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full opacity-40"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-40"></div>
              </div>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20">
          <div className="animate-bounce flex flex-col items-center gap-1">
            <span className="text-xs text-gray-400">Scroll down</span>
            <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
