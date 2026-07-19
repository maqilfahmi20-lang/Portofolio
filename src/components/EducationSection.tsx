'use client';

import { portfolioData } from '@/data/portfolioData';

export default function EducationSection() {

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-600">
            Academic background and professional certifications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold text-primary mb-8 flex items-center">
              <span className="text-4xl mr-3">🎓</span> Education
            </h3>
            <div className="space-y-6">
              {portfolioData.education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-secondary"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-primary">{edu.degree}</h4>
                    <span className="text-sm text-secondary bg-blue-50 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-700 font-semibold mb-3">{edu.institution}</p>
                  <p className="text-sm text-gray-600 mb-3">{edu.status}</p>
                  
                  {edu.thesis && (
                    <div className="mt-4 p-4 bg-blue-50 rounded">
                      <p className="text-sm font-semibold text-primary mb-1">Thesis:</p>
                      <p className="text-sm text-gray-700">{edu.thesis}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold text-primary mb-8 flex items-center">
              <span className="text-4xl mr-3">🏆</span> Certifications
            </h3>
            <div className="space-y-4">
              {portfolioData.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-accent flex items-start"
                >
                  <div className="text-2xl mr-4">✓</div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-semibold leading-relaxed">{cert}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <span className="text-3xl mr-2">🌐</span> Languages
              </h3>
              <div className="space-y-4">
                {portfolioData.languages.map((lang, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-secondary to-blue-600 text-white p-4 rounded-lg">
                    <p className="font-semibold">{lang}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
