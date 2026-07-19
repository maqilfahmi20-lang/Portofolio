import { portfolioData } from '@/data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
          <p>&copy; {currentYear} Muhammad Aqil Fahmi. All rights reserved.</p>
          <p>Designed & Built with React & Next.js</p>
        </div>
      </div>
    </footer>
  );
}
