import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, CheckCircle, ArrowRight, Shield, Clock, Star,
  Bug, Home as HomeIcon, Building, Zap, AlertTriangle, Leaf, Award
} from 'lucide-react';
import { residentialServices, commercialServices, faqs } from '../data';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Bug, Home: HomeIcon, Building, Zap, AlertTriangle, Shield, Star, Leaf, Award,
  UtensilsCrossed: Zap, Building2: Building, Warehouse: Building, Hospital: Shield, HomeIcon
};

interface ServicesProps {
  type: 'residential' | 'commercial';
}

const residentialProcess = [
  { step: '01', title: 'Free Inspection', desc: 'We visit your property and identify pest species, infestation severity, and entry points at no cost.' },
  { step: '02', title: 'Custom Treatment Plan', desc: 'Based on our findings, we develop a targeted treatment strategy using the most effective, safe methods.' },
  { step: '03', title: 'Professional Treatment', desc: 'Our certified applicator performs the treatment using Health Canada-registered products and professional equipment.' },
  { step: '04', title: 'Follow-Up & Guarantee', desc: "We check in after treatment and return at no charge if pests come back within 30 days. Your satisfaction is guaranteed." },
];

const commercialProcess = [
  { step: '01', title: 'Site Assessment', desc: 'Thorough inspection of your facility including loading docks, food prep areas, storage, and common areas.' },
  { step: '02', title: 'IPM Program Design', desc: 'We design an Integrated Pest Management program tailored to your industry, regulations, and schedule.' },
  { step: '03', title: 'Scheduled Service', desc: 'Regular visits (weekly, bi-weekly, or monthly) with detailed service reports for your records and compliance.' },
  { step: '04', title: 'Ongoing Monitoring', desc: 'Continuous pest monitoring, threshold alerts, and program adjustments to stay ahead of pest pressure.' },
];

export default function Services({ type }: ServicesProps) {
  const isResidential = type === 'residential';
  const serviceList = isResidential ? residentialServices : commercialServices;
  const process = isResidential ? residentialProcess : commercialProcess;

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex gap-3 mb-6">
              <Link
                to="/residential"
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${isResidential ? 'bg-brand-lime text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
              >
                Residential
              </Link>
              <Link
                to="/commercial"
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${!isResidential ? 'bg-brand-lime text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
              >
                Commercial
              </Link>
            </div>
            <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">
              {isResidential ? 'Home Protection' : 'Business Protection'}
            </span>
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-white mt-2 mb-5">
              {isResidential ? 'Residential Pest Control Services' : 'Commercial & Industrial Pest Control'}
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {isResidential
                ? 'Protect your family and home from pests with our professional residential pest control services. We identify, eliminate, and prevent infestations using safe, targeted treatments.'
                : 'Keep your business pest-free with our commercial pest management programs. We serve restaurants, hotels, warehouses, offices, and more across Regina and Saskatchewan.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:8018012193" className="inline-flex items-center justify-center gap-2 bg-brand-lime hover:bg-brand-darkLime text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
                <Phone size={18} /> Call 801-801-2193
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
                Free {isResidential ? 'Inspection' : 'Site Assessment'} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-brand-navy mb-4">
              {isResidential ? 'Home Pest Control Services' : 'Commercial Pest Services'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isResidential
                ? 'From single treatments to year-round protection plans, we have the right solution for every pest problem in your home.'
                : 'Comprehensive pest management designed around your industry requirements, inspection schedules, and operational needs.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceList.map(service => {
              const Icon = iconMap[service.icon] || Bug;
              return (
                <div key={service.id} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg border border-gray-100 hover:border-brand-lime/30 transition-all group">
                  <div className="w-14 h-14 bg-brand-navy rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-lime transition-colors">
                    <Icon size={26} className="text-brand-lime group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-montserrat font-bold text-brand-navy text-xl mb-3">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2">
                    {['Fast, effective treatments', 'Licensed professional', '30-day guarantee'].map(point => (
                      <li key={point} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle size={14} className="text-brand-lime" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">Our Process</span>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-brand-navy mt-2">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="relative text-center">
                <div className="w-16 h-16 bg-brand-lime rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <span className="font-montserrat font-bold text-white text-xl">{step}</span>
                </div>
                <h4 className="font-montserrat font-semibold text-brand-navy text-lg mb-2">{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features banner */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: Shield, title: 'Licensed & Insured', desc: 'SK Certified Pest Applicator' },
              { icon: Clock, title: '24/7 Service', desc: 'Emergency response anytime' },
              { icon: Leaf, title: 'Eco-Friendly', desc: 'Safe for family & pets' },
              { icon: Star, title: '30-Day Guarantee', desc: 'We come back if pests return' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <Icon size={32} className="text-brand-lime mx-auto mb-3" />
                <h4 className="font-montserrat font-semibold text-white mb-1">{title}</h4>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-lime">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl text-white mb-4">
            Get a Free {isResidential ? 'Home Inspection' : 'Site Assessment'}
          </h2>
          <p className="text-white/90 mb-8">
            {isResidential
              ? "Tell us about your pest problem and we'll schedule a free inspection at a time that works for you."
              : "We'll assess your facility, identify risks, and provide a custom pest management proposal — at no cost."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8018012193" className="inline-flex items-center justify-center gap-2 bg-white text-brand-lime font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors text-lg">
              <Phone size={20} /> 801-801-2193
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-brand-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-navy/90 transition-colors text-lg">
              Book Online <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
