'use client';

import { portfolioData } from '@/data/portfolioData';

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Publications
          </h2>
          <p className="text-xl text-gray-600">
            Karya ilmiah yang telah dipublikasikan
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {portfolioData.publications.map((pub) => (
            <div
              key={pub.id}
              className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  {/* Badge & Year */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-secondary text-white text-sm font-semibold rounded-full">
                      {pub.journal}
                    </span>
                    <span className="text-gray-500 text-sm">{pub.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                    {pub.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {pub.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-secondary rounded-full text-sm font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link Button */}
                <div className="flex-shrink-0">
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Lihat Jurnal
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
