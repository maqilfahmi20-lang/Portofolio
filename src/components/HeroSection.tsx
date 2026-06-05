'use client';

import { portfolioData } from '@/data/portfolioData';
import { useState } from 'react';

export default function HeroSection() {
  const [showCopy, setShowCopy] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setShowCopy(true);
    setTimeout(() => setShowCopy(false), 2000);
  };

  return (
    <section id="home" className="pt-24 pb-12 px-4 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-4 inline-block">
              <span className="text-secondary font-semibold text-sm">Halo, saya</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Muhammad Aqil Fahmi
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              IT Programmer & Full Stack Developer
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Fresh graduate Informatics Engineering dengan pengalaman membangun aplikasi web scalable, 
              payment gateway integration, dan data analytics. Passionate tentang clean code dan modern technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                className="px-8 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Lihat Projects
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-8 py-3 border-2 border-secondary text-secondary rounded-lg font-semibold hover:bg-secondary hover:text-white transition-colors"
              >
                {showCopy ? '✓ Email Disalin' : 'Hubungi Saya'}
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-3xl font-bold text-secondary">3+</p>
                <p className="text-gray-600">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">2+</p>
                <p className="text-gray-600">Years Tech</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">5+</p>
                <p className="text-gray-600">Technologies</p>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image Placeholder */}
          <div className="hidden md:flex justify-center items-center">
            <div className="w-80 h-80 bg-gradient-to-br from-secondary to-blue-600 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">👨‍💻</div>
                <p className="text-lg font-semibold">Muhammad Aqil Fahmi</p>
                <p className="text-sm opacity-90">IT Programmer Developer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
