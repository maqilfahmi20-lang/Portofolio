'use client';

import { portfolioData } from '@/data/portfolioData';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = await response.json();
        setError(data.error || 'Gagal mengirim pesan. Coba lagi nanti.');
      }
    } catch (err) {
      setError('Terjadi kesalahan. Pastikan email environment sudah dikonfigurasi atau hubungi via email/WhatsApp.');
      console.error('Error sending email:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadCV = async () => {
    try {
      const response = await fetch('/api/download-cv');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Muhammad_Aqil_Fahmi_CV.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Error downloading CV:', error);
      alert('Gagal download CV. Silakan coba lagi.');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Mari Berkolaborasi
          </h2>
          <p className="text-xl text-gray-600">
            Hubungi saya untuk project atau kesempatan kerja baru
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Mari Terhubung</h3>
              <p className="text-gray-600 leading-relaxed">
                Saya selalu terbuka untuk peluang baru, pertanyaan, atau sekadar untuk menyapa. 
                Hubungi saya melalui form, email, atau WhatsApp.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <a href={`mailto:${portfolioData.email}`} className="flex items-start p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-secondary">
                <div className="text-2xl text-secondary mr-4">📧</div>
                <div>
                  <p className="font-semibold text-primary">Email</p>
                  <p className="text-gray-600 hover:text-secondary transition-colors">
                    {portfolioData.email}
                  </p>
                </div>
              </a>

              <a href={`https://wa.me/62${portfolioData.phone.substring(1)}?text=Halo%20Aqil`} target="_blank" rel="noopener noreferrer" className="flex items-start p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500">
                <div className="text-2xl mr-4">💬</div>
                <div>
                  <p className="font-semibold text-primary">WhatsApp</p>
                  <p className="text-gray-600 hover:text-green-600 transition-colors">
                    {portfolioData.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-start p-4 bg-white rounded-lg shadow-md border-l-4 border-blue-500">
                <div className="text-2xl mr-4">📍</div>
                <div>
                  <p className="font-semibold text-primary">Lokasi</p>
                  <p className="text-gray-600">{portfolioData.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-semibold text-primary mb-4">Ikuti Saya</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://linkedin.com/in/maqilf" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors" title="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M5.5 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
                  </svg>
                </a>
                <a href="https://github.com/maqilfahmi20-lang" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors" title="GitHub">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors" title="Twitter">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.1 5.2-5.5 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" fill="none" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 text-green-700 rounded-lg font-semibold">
                ✓ Pesan Anda berhasil terkirim! Saya akan segera membalas.
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 border-2 border-red-500 text-red-700 rounded-lg">
                ⚠️ {error}
              </div>
            )}

            <div className="mb-6">
              <label className="block text-sm font-semibold text-primary mb-2">
                Nama Anda *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary transition-colors"
                placeholder="Muhammad Aqil"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-primary mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary transition-colors"
                placeholder="nama@example.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-primary mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary transition-colors"
                placeholder="Pertanyaan tentang project..."
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-primary mb-2">
                Pesan *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary transition-colors resize-none"
                placeholder="Tulis pesan Anda di sini..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors disabled:bg-gray-400 cursor-pointer"
            >
              {loading ? 'Mengirim...' : 'Kirim Pesan'}
            </button>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              Jika form tidak bekerja, hubungi saya langsung via email atau WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
