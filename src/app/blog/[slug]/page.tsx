'use client';

import Link from 'next/link';
import { blogPosts } from '@/data/blogData';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="pt-24 pb-12 px-4 bg-white">
      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link href="/blog" className="text-secondary hover:text-blue-600 mb-6 inline-flex items-center">
            ← Kembali ke Blog
          </Link>
          
          <div className="mb-4 flex items-center gap-3">
            <span className="px-4 py-2 bg-blue-50 text-secondary rounded-full text-sm font-semibold">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">{post.readTime}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-8 border-b-2 border-gray-200">
            <span>📝 {post.author}</span>
            <span>📅 {post.date}</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-sm md:prose md:prose-lg max-w-none mb-16">
          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
            {post.content}
          </div>
        </div>

        {/* Tags & Share */}
        <div className="border-t border-b border-gray-200 py-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h4 className="font-semibold text-primary mb-3">Share Article</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-secondary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-secondary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M5.5 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
                  </svg>
                </a>
              </div>
            </div>
            <button className="px-6 py-2 bg-secondary text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
              Copy Link
            </button>
          </div>
        </div>

        {/* Author Info */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary to-blue-600 rounded-lg flex items-center justify-center text-white text-3xl">
              👨‍💻
            </div>
            <div>
              <h4 className="text-xl font-bold text-primary mb-2">{post.author}</h4>
              <p className="text-gray-600 mb-4">
                Fresh graduate Informatics Engineering dengan passion di web development dan machine learning. 
                Senang berbagi pengetahuan dan belajar hal baru.
              </p>
              <a href="/#contact" className="text-secondary font-semibold hover:text-blue-600">
                Follow & Connect →
              </a>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(relPost => (
                <Link key={relPost.id} href={`/blog/${relPost.slug}`}>
                  <div className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow p-6 cursor-pointer h-full">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-secondary rounded-full text-xs font-semibold mb-4">
                      {relPost.category}
                    </span>
                    <h4 className="font-bold text-primary mb-3 line-clamp-2">
                      {relPost.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {relPost.excerpt}
                    </p>
                    <div className="flex justify-between items-center text-gray-500 text-xs">
                      <span>{relPost.date}</span>
                      <span className="text-secondary">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
