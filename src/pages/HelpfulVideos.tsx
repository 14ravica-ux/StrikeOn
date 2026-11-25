import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock, Tag, Phone, ArrowRight } from 'lucide-react';
import { videos } from '../data';

const categories = ['All', 'Bed Bugs', 'Rodents', 'Commercial', 'Wasps', 'General', 'Tips'];

export default function HelpfulVideos() {
  const [category, setCategory] = useState('All');

  const filtered = category === 'All' ? videos : videos.filter(v => v.category === category);

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">Learn & Prepare</span>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-white mt-2 mb-5">
            Helpful Videos
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Watch our expert video guides on pest identification, treatment preparation, and prevention tips for Saskatchewan homeowners and businesses.
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

      {/* Videos grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map(video => (
              <div key={video.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 group transition-all">
                {/* Thumbnail */}
                <div className="relative h-48 bg-brand-navy/10 overflow-hidden">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-brand-navy/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 bg-brand-lime rounded-full flex items-center justify-center shadow-lg">
                      <Play size={24} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 bg-brand-navy/80 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                    <Clock size={11} /> {video.duration}
                  </div>
                  {/* Category */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-lime text-white text-xs font-bold px-2.5 py-1 rounded-full">{video.category}</span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-montserrat font-bold text-brand-navy text-base mb-2 leading-snug">{video.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{video.description}</p>
                  <button className="flex items-center gap-2 bg-brand-lime text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-brand-darkLime transition-colors">
                    <Play size={14} fill="white" /> Watch Video
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-brand-lime">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl text-white mb-4">Ready to Take Action?</h2>
          <p className="text-white/90 mb-7">Armed with the right knowledge — now let us handle the hard part. Book a free inspection today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:2032025533" className="inline-flex items-center justify-center gap-2 bg-white text-brand-lime font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors text-lg">
              <Phone size={20} /> 203-202-5533
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-brand-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-navy/90 transition-colors text-lg">
              Book Free Inspection <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
