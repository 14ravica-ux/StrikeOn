import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight, Phone } from 'lucide-react';
import { blogPosts } from '../data';

const categories = ['All', 'Bed Bugs', 'Rodents', 'Tips & Advice', 'Commercial', 'Pest ID'];

export default function Blog() {
  const [category, setCategory] = useState('All');

  const filtered = category === 'All' ? blogPosts : blogPosts.filter(p => p.category === category);

  const formatDate = (d: string) => new Date(d).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">Pest Control Tips</span>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-white mt-2 mb-5">
            Blog & Resources
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Expert pest control advice, seasonal tips, and local insights from Saskatchewan's certified pest applicator.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${category === cat ? 'bg-brand-lime text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(post => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 hover:border-brand-lime/20 transition-all group">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-lime text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {formatDate(post.date)}</span>
                    <span className="flex items-center gap-1"><Tag size={12} /> {post.category}</span>
                  </div>
                  <h2 className="font-montserrat font-bold text-brand-navy text-lg mb-3 leading-snug group-hover:text-brand-lime transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                  <button className="flex items-center gap-1.5 text-brand-lime font-semibold text-sm hover:gap-2.5 transition-all">
                    Read Article <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl text-white mb-4">Have a Pest Problem Right Now?</h2>
          <p className="text-gray-300 mb-7">Skip the research — call us and get a certified professional's advice in minutes. Free inspection available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:2032025533" className="inline-flex items-center justify-center gap-2 bg-brand-lime text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-darkLime transition-colors text-lg">
              <Phone size={20} /> 203-202-5533
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-brand-navy font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors text-lg">
              Book Free Inspection <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
