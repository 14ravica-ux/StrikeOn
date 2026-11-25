import React from 'react';
import { Link } from 'react-router-dom';
import { Download, FileText, File, Phone, ArrowRight, Shield } from 'lucide-react';
import { downloads } from '../data';

export default function Downloads() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">Free Resources</span>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-white mt-2 mb-5">
            Free Downloads
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Helpful checklists, guides, and templates from StrikeOn Pest Control — free for homeowners and businesses in Saskatchewan.
          </p>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Featured booklet */}
          {downloads.filter(d => d.url).map(item => (
            <div key={item.id} className="mb-8 bg-gradient-to-r from-brand-navy to-[#044064] rounded-2xl p-7 md:p-10 flex flex-col md:flex-row items-center gap-7 shadow-lg border border-brand-lime/20">
              <div className="w-16 h-16 bg-brand-lime rounded-2xl flex items-center justify-center shrink-0">
                <FileText size={32} className="text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="text-brand-lime text-xs font-bold uppercase tracking-widest">⭐ Featured Download</span>
                <h3 className="font-montserrat font-bold text-white text-xl md:text-2xl mt-1 mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
              <a
                href={item.url}
                download
                className="shrink-0 inline-flex items-center gap-2 bg-brand-lime hover:bg-brand-darkLime text-white font-bold px-7 py-3.5 rounded-xl transition-colors text-sm whitespace-nowrap"
              >
                <Download size={16} /> Download PDF
              </a>
            </div>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.filter(d => !d.url).map(item => (
              <div key={item.id} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-lime/30 transition-all group">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-brand-lime/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-lime transition-colors">
                    {item.type === 'PDF'
                      ? <FileText size={22} className="text-brand-lime group-hover:text-white transition-colors" />
                      : <File size={22} className="text-brand-lime group-hover:text-white transition-colors" />
                    }
                  </div>
                  <div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${item.type === 'PDF' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                      {item.type}
                    </span>
                    <span className="text-xs text-gray-400 ml-2">{item.fileSize}</span>
                  </div>
                </div>

                <h3 className="font-montserrat font-bold text-brand-navy text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.description}</p>

                <button className="w-full flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-lime text-white font-semibold py-3 rounded-xl transition-colors text-sm">
                  <Download size={16} /> Download Free
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-brand-navy rounded-3xl p-8 md:p-10 text-center text-white">
            <Shield size={36} className="text-brand-lime mx-auto mb-4" />
            <h3 className="font-montserrat font-bold text-2xl mb-3">Need a Custom Resource?</h3>
            <p className="text-gray-300 max-w-xl mx-auto mb-6">
              If you're a property manager, restaurant owner, or business looking for custom pest management documentation, contact us. We can create service agreements, inspection logs, and program summaries for your records.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:2032025533" className="inline-flex items-center justify-center gap-2 bg-brand-lime text-white font-bold px-7 py-3.5 rounded-xl hover:bg-brand-darkLime transition-colors">
                <Phone size={16} /> 203-202-5533
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
