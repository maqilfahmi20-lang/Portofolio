'use client';

import Link from 'next/link';
import { blogPosts } from '@/data/blogData';
import { useState } from 'react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  return (
    <div className="pt-24 pb-12 px-4 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            Blog & Articles
          </h1>
          <p className="text-xl text-gray-600">
            Artikel tentang web development, machine learning, dan pengalaman programming saya
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-primary mb-4">Filter by Category</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === null
                  ? 'bg-secondary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Semua
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-secondary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {!selectedCategory && (
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div className="bg-gradient-to-br from-secondary to-blue-600 text-white p-8 rounded-lg hover:shadow-xl transition-all cursor-pointer h-full">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-4">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                  <p className="text-blue-100 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-blue-100 text-sm">
                    <span>{post.date}</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured || selectedCategory).map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <div className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow cursor-pointer h-full p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="px-3 py-1 bg-blue-50 text-secondary rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center text-gray-500 text-xs">
                  <span>{post.date}</span>
                  <span className="text-secondary font-semibold">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600">Tidak ada artikel dalam kategori ini</p>
          </div>
        )}
      </div>
    </div>
  );
}
