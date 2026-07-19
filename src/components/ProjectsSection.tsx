'use client';

import { portfolioData } from '@/data/portfolioData';
import Link from 'next/link';
import { useState } from 'react';

export default function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600">
            A selection of projects I have built
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-primary">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1 bg-secondary text-white text-sm rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-lg">
                      {project.shortDesc}
                    </p>
                  </div>
                  <button
                    onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                    className="ml-4 text-secondary hover:text-blue-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={expandedId === project.id ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"}
                      />
                    </svg>
                  </button>
                </div>

                {/* Period */}
                <p className="text-gray-500 text-sm mb-4">
                  {project.startDate} - {project.endDate}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-secondary rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Deploy & GitHub Links */}
                <div className="flex flex-wrap gap-3">
                  {project.deployUrl ? (
                    <a
                      href={project.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-400 text-sm font-semibold rounded-lg cursor-not-allowed">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </span>
                  )}

                </div>

                {/* Expanded Content */}
                {expandedId === project.id && (
                  <div className="border-t pt-6 mt-6 space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Full Description</h4>
                      <p className="text-gray-700 leading-relaxed">{project.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <span className="text-secondary mr-3 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-3">Highlights</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <span className="text-accent mr-3 mt-1">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/blog"
            className="px-8 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors inline-block"
          >
            Read Case Studies on Blog →
          </Link>
        </div>
      </div>
    </section>
  );
}
