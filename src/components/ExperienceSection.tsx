'use client';

import { portfolioData } from '@/data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Work & Organizational Experience
          </h2>
          <p className="text-xl text-gray-600">
            My professional journey in the tech industry
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-secondary to-blue-600"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {portfolioData.experience.map((exp, idx) => (
              <div key={exp.id} className={`flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className="flex-1">
                  <div className={`bg-gradient-to-br ${exp.type === 'internship' ? 'from-blue-50 to-blue-100' : 'from-purple-50 to-purple-100'} p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{exp.type === 'internship' ? '💼' : '🏢'}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-primary">{exp.position}</h3>
                        <p className="text-secondary font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 7V3m8 4V3m4 6h-4m-8.993 6L4 19h16l-2.007-8H5.007z" />
                      </svg>
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="flex justify-center md:flex-col items-center">
                  <div className="w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-lg relative z-10"></div>
                </div>

                {/* Empty space for even items */}
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
