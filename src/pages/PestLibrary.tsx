import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, ChevronUp, Phone, ArrowRight, Bug } from 'lucide-react';
import { pests } from '../data';

const categories = ['All', 'Bed Bugs', 'Rodents', 'Cockroaches', 'Ants', 'Wasps', 'Spiders', 'Termites'];

const pestCategories: Record<string, string> = {
  'bed-bugs': 'Bed Bugs',
  'mice': 'Rodents',
  'rats': 'Rodents',
  'cockroaches': 'Cockroaches',
  'ants': 'Ants',
  'wasps': 'Wasps',
  'spiders': 'Spiders',
  'termites': 'Termites',
};

export default function PestLibrary() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = pests.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'All' || pestCategories[p.id] === category;
    return matchSearch && matchCategory;
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">Know Your Enemy</span>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-white mt-2 mb-5">
            Pest Identification Library
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Learn about the common pests found in Saskatchewan — their biology, behaviour, signs of infestation, and how professional treatments work.
          </p>

          {/* Search */}
          <div className="max-w-lg mx-auto relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search pests..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white text-gray-800 outline-none focus:ring-2 focus:ring-brand-lime"
            />
          </div>
        </div>
      </section>

      {/* Category filters */}
      <section className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
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

      {/* Pest cards */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              <Bug size={40} className="mx-auto mb-4 text-gray-300" />
              <p className="text-lg">No pests found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map(pest => {
                const isOpen = expanded === pest.id;
                return (
                  <div key={pest.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="flex gap-4 p-5">
                      {/* Image */}
                      <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                        <img
                          src={pest.imageUrl}
                          alt={pest.name}
                          className="w-full h-full object-cover"
                          onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-montserrat font-bold text-brand-navy text-lg">{pest.name}</h3>
                            <p className="text-brand-lime text-xs font-medium italic">{pest.scientificName}</p>
                            {pest.orderFamily && <p className="text-gray-400 text-xs">{pest.orderFamily}</p>}
                          </div>
                          <span className="bg-brand-lime/10 text-brand-lime text-xs px-2.5 py-1 rounded-full font-semibold shrink-0">
                            {pestCategories[pest.id]}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 line-clamp-2">{pest.description}</p>
                      </div>
                    </div>

                    {/* Expandable details */}
                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                      <div className="px-5 pb-5 space-y-4 border-t border-gray-50 pt-4">
                        {pest.biology && (
                          <div>
                            <h4 className="font-semibold text-brand-navy text-sm mb-1">Biology</h4>
                            <p className="text-gray-500 text-sm">{pest.biology}</p>
                          </div>
                        )}
                        {pest.behavior && (
                          <div>
                            <h4 className="font-semibold text-brand-navy text-sm mb-1">Behaviour</h4>
                            <p className="text-gray-500 text-sm">{pest.behavior}</p>
                          </div>
                        )}
                        {pest.control && (
                          <div>
                            <h4 className="font-semibold text-brand-navy text-sm mb-1">Control Methods</h4>
                            <p className="text-gray-500 text-sm">{pest.control}</p>
                          </div>
                        )}
                        {pest.faq && pest.faq.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-brand-navy text-sm mb-2">Common Questions</h4>
                            <div className="space-y-2">
                              {pest.faq.map((q, i) => (
                                <div key={i} className="bg-gray-50 rounded-lg p-3">
                                  <p className="font-medium text-brand-navy text-sm mb-1">{q.question}</p>
                                  <p className="text-gray-500 text-sm">{q.answer}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        <div className="flex gap-3 pt-2">
                          <a href="tel:8018012193" className="inline-flex items-center gap-2 bg-brand-lime text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-brand-darkLime transition-colors">
                            <Phone size={14} /> Call Now
                          </a>
                          <Link to="/contact" className="inline-flex items-center gap-2 border border-brand-navy text-brand-navy text-sm font-semibold px-4 py-2 rounded-lg hover:bg-brand-navy hover:text-white transition-colors">
                            Free Inspection <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setExpanded(isOpen ? null : pest.id)}
                      className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-brand-lime hover:bg-brand-lime/5 transition-colors border-t border-gray-50"
                    >
                      {isOpen ? (<><ChevronUp size={16} /> Show Less</>) : (<><ChevronDown size={16} /> Learn More</>)}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl text-white mb-4">Not Sure What Pest You Have?</h2>
          <p className="text-gray-300 mb-8">Our certified applicator will inspect your property and identify any pest for free. No guessing — just accurate identification and an honest recommendation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8018012193" className="inline-flex items-center justify-center gap-2 bg-brand-lime text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-darkLime transition-colors text-lg">
              <Phone size={20} /> 801-801-2193
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-brand-navy font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors text-lg">
              Schedule Inspection <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
