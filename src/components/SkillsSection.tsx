import { portfolioData } from '@/data/portfolioData';

export default function SkillsSection() {
  const { skills, softSkills } = portfolioData;

  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Languages */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
            <div className="text-3xl mb-4">🔤</div>
            <h3 className="text-xl font-bold text-primary mb-4">Languages</h3>
            <ul className="space-y-2">
              {skills.languages.map((lang, idx) => (
                <li key={idx} className="text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  {lang}
                </li>
              ))}
            </ul>
          </div>

          {/* Frameworks */}
          <div className="bg-gradient-to-br from-secondary to-blue-600 p-8 rounded-lg text-white">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-4">Frameworks</h3>
            <ul className="space-y-2">
              {skills.frameworks.map((framework, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  {framework}
                </li>
              ))}
            </ul>
          </div>

          {/* Databases */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
            <div className="text-3xl mb-4">🗄️</div>
            <h3 className="text-xl font-bold text-primary mb-4">Databases</h3>
            <ul className="space-y-2">
              {skills.databases.map((db, idx) => (
                <li key={idx} className="text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  {db}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
            <div className="text-3xl mb-4">🛠️</div>
            <h3 className="text-xl font-bold text-primary mb-4">Tools & Services</h3>
            <ul className="space-y-2">
              {skills.tools.map((tool, idx) => (
                <li key={idx} className="text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="bg-gradient-to-r from-primary to-gray-800 text-white p-12 rounded-lg">
          <h3 className="text-2xl font-bold mb-8">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, idx) => (
              <div key={idx} className="flex items-center">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Spoken */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-primary mb-8">Languages Spoken</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.languages.map((lang, idx) => (
              <div key={idx} className="flex items-center p-4 border-2 border-secondary rounded-lg">
                <div className="text-3xl mr-4">🌐</div>
                <div>
                  <p className="font-semibold text-primary">{lang.split('(')[0].trim()}</p>
                  <p className="text-sm text-gray-600">{lang.split('(')[1]?.replace(')', '')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
