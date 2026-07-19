import { portfolioData } from '@/data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl mb-4">Aqil.dev</h3>
            <p className="text-gray-400">
              Building beautiful and scalable web applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
              <li><a href="#experience" className="hover:text-white transition">Experience</a></li>
              <li><a href="#education" className="hover:text-white transition">Education</a></li>
              <li><a href="#publications" className="hover:text-white transition">Publications</a></li>
              <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href={`mailto:${portfolioData.email}`} className="hover:text-white transition">
                  {portfolioData.email}
                </a>
              </li>
              <li>
                <a href={`tel:${portfolioData.phone}`} className="hover:text-white transition">
                  {portfolioData.phone}
                </a>
              </li>
              <li>{portfolioData.location}</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/aqil-fahmi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition" title="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M5.5 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
                </svg>
              </a>
              <a href="https://github.com/maqilfahmi20-lang" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition" title="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Muhammad Aqil Fahmi. All rights reserved.</p>
            <p>Designed & Built with React & Next.js</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
