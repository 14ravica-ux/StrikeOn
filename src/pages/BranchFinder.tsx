import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Building, CheckCircle, ArrowRight, Search } from 'lucide-react';
import { branches } from '../data';

export default function BranchFinder() {
  const [postalCode, setPostalCode] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">Find Us</span>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-white mt-2 mb-5">
            Branch Finder
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
            Find your nearest StrikeOn service location or confirm we service your area.
          </p>
          <form onSubmit={handleSearch} className="max-w-md mx-auto flex gap-3">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={postalCode}
                onChange={e => setPostalCode(e.target.value)}
                placeholder="Enter postal code (e.g., S4S 6V8)"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white text-gray-800 outline-none focus:ring-2 focus:ring-brand-lime"
              />
            </div>
            <button type="submit" className="bg-brand-lime hover:bg-brand-darkLime text-white font-bold px-5 py-3.5 rounded-xl transition-colors whitespace-nowrap">
              Search
            </button>
          </form>

          {searched && (
            <div className="mt-4 inline-flex items-center gap-2 bg-brand-lime/20 border border-brand-lime/40 text-brand-lime px-4 py-2 rounded-full text-sm">
              <CheckCircle size={15} /> Great news! We service your area. See details below.
            </div>
          )}
        </div>
      </section>

      {/* Branches */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {branches.map(branch => (
              <div key={branch.city} className={`bg-white rounded-2xl p-7 shadow-sm border ${branch.isMain ? 'border-brand-lime' : 'border-gray-100'} hover:shadow-md transition-shadow`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${branch.isMain ? 'bg-brand-lime' : 'bg-gray-100'}`}>
                      {branch.isMain
                        ? <Building size={20} className="text-white" />
                        : <MapPin size={20} className="text-brand-lime" />
                      }
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-brand-navy text-xl">{branch.city}</h3>
                      <span className="text-xs font-semibold text-brand-lime">{branch.type}</span>
                    </div>
                  </div>
                  {branch.isMain && (
                    <span className="bg-brand-lime text-white text-xs font-bold px-3 py-1 rounded-full">Main Office</span>
                  )}
                </div>

                <div className="space-y-2.5 mb-5">
                  <div className="flex items-center gap-2.5 text-sm text-gray-600">
                    <MapPin size={15} className="text-brand-lime" />
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-600">
                    <Phone size={15} className="text-brand-lime" />
                    <a href={`tel:${branch.phone.replace(/\D/g, '')}`} className="hover:text-brand-lime transition-colors font-semibold">
                      {branch.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={`tel:${branch.phone.replace(/\D/g, '')}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-brand-lime text-white font-semibold py-2.5 rounded-lg hover:bg-brand-darkLime transition-colors text-sm"
                  >
                    <Phone size={14} /> Call
                  </a>
                  {branch.isMain && (
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 border border-brand-navy text-brand-navy font-semibold py-2.5 rounded-lg hover:bg-brand-navy hover:text-white transition-colors text-sm"
                    >
                      <MapPin size={14} /> Directions
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-brand-navy rounded-3xl p-8 text-center text-white">
            <h3 className="font-montserrat font-bold text-2xl mb-3">Not Sure If We Cover Your Area?</h3>
            <p className="text-gray-300 mb-6">Give us a call — we service many communities across southern Saskatchewan and are always expanding.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8018012193" className="inline-flex items-center justify-center gap-2 bg-brand-lime text-white font-bold px-7 py-3.5 rounded-xl hover:bg-brand-darkLime transition-colors">
                <Phone size={16} /> 801-801-2193
              </a>
              <Link to="/areas-served" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
                View All Areas <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
