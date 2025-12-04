import React from 'react';
import { QuoteForm } from '../components/QuoteForm';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, Clock, Award, Check, Phone } from 'lucide-react';

const ServiceCard: React.FC<{ title: string; desc: string; icon: React.ReactNode; link: string }> = ({ title, desc, icon, link }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100 flex flex-col h-full group">
    <div className="w-12 h-12 bg-brand-lime/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-lime transition-colors">
      <div className="text-brand-darkLime group-hover:text-brand-navy transition-colors">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-brand-navy mb-2">{title}</h3>
    <p className="text-slate-600 mb-4 flex-grow">{desc}</p>
    <Link to={link} className="text-brand-darkLime font-bold text-sm hover:underline flex items-center">
      Learn More &rarr;
    </Link>
  </div>
);

const TestimonialCard: React.FC<{ name: string; text: string; location: string }> = ({ name, text, location }) => (
  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
    <div className="flex text-yellow-400 mb-3">
      <Star className="w-4 h-4 fill-current" />
      <Star className="w-4 h-4 fill-current" />
      <Star className="w-4 h-4 fill-current" />
      <Star className="w-4 h-4 fill-current" />
      <Star className="w-4 h-4 fill-current" />
    </div>
    <p className="text-slate-700 italic mb-4">"{text}"</p>
    <div>
      <p className="font-bold text-brand-navy">{name}</p>
      <p className="text-xs text-slate-500">{location}</p>
    </div>
  </div>
);

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-navy overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/pestcontrol/1920/1080" 
            alt="Pest Control Technician" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-white space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-lime/20 text-brand-lime text-sm font-bold mb-2 border border-brand-lime/30">
                <span className="flex h-2 w-2 rounded-full bg-brand-lime mr-2 animate-pulse"></span>
                Available 24/7 in Regina
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Your Shield Against <span className="text-brand-lime">Pests.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-lg">
                Fast, effective, and eco-friendly pest control services. We guarantee a pest-free environment for your home or business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" onClick={() => document.getElementById('quote')?.scrollIntoView({behavior: 'smooth'})}>
                  Get a Free Quote
                </Button>
                <Link to="/pest-library">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-navy w-full sm:w-auto">
                    Identify Your Pest
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-8 text-sm font-medium text-slate-400">
                <div className="flex items-center">
                  <ShieldCheck className="w-5 h-5 text-brand-lime mr-2" /> Licensed
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-brand-lime mr-2" /> Bonded
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-brand-lime mr-2" /> 4.9/5 Rating
                </div>
              </div>
            </div>

            {/* Hero Quote Form */}
            <div id="quote" className="lg:ml-auto w-full max-w-md">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-slate-100 py-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Trusted By Businesses in Saskatchewan</p>
          <div className="flex justify-center flex-wrap gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder logos */}
            <div className="h-8 w-24 bg-slate-400 rounded"></div>
            <div className="h-8 w-24 bg-slate-400 rounded"></div>
            <div className="h-8 w-24 bg-slate-400 rounded"></div>
            <div className="h-8 w-24 bg-slate-400 rounded"></div>
            <div className="h-8 w-24 bg-slate-400 rounded"></div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Comprehensive Pest Solutions</h2>
            <p className="text-slate-600">Whether you're dealing with a minor annoyance or a major infestation, StrikeOn has the expertise to handle it safely and effectively.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Residential Pest Control"
              desc="Protect your home and family from unwanted guests. We treat ants, spiders, rodents, and more with pet-safe methods."
              icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>}
              link="/residential"
            />
            <ServiceCard 
              title="Bed Bug Heat Treatments"
              desc="Our advanced heat treatment technology eliminates bed bugs at all life stages in just one visit. 100% effective guarantee."
              icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              link="/pest-library"
            />
            <ServiceCard 
              title="Commercial Extermination"
              desc="Discreet and reliable pest management for restaurants, hotels, warehouses, and offices. Compliance documentation provided."
              icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
              link="/commercial"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-brand-navy py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-navy/50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Regina Chooses StrikeOn</h2>
              <ul className="space-y-6">
                {[
                  { title: "Local Experts", desc: "We know Saskatchewan pests and how to handle them in our climate." },
                  { title: "Eco-Friendly Options", desc: "Safe for kids and pets. We prioritize sustainability." },
                  { title: "100% Satisfaction Guarantee", desc: "If pests come back between treatments, so do we—for free." },
                  { title: "Fast Response Time", desc: "Same-day service available for emergencies." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="bg-brand-lime rounded-full p-1 mt-1 mr-4 shrink-0">
                      <Check className="w-4 h-4 text-brand-navy" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                 <Link to="/about">
                   <Button variant="primary">Meet Our Team</Button>
                 </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-lime/20 rounded-xl transform rotate-3"></div>
              <img 
                src="https://picsum.photos/seed/technician/600/400" 
                alt="Technician spraying" 
                className="relative rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-navy">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Sarah Jenkins"
              location="Regina, SK"
              text="StrikeOn saved us from a nightmare bed bug situation. The technician was so polite and explained everything. Highly recommended!"
            />
            <TestimonialCard 
              name="Mike T."
              location="Moose Jaw, SK"
              text="We use them for our restaurant monthly service. Very professional, always on time, and our health inspections are perfect."
            />
            <TestimonialCard 
              name="Emily R."
              location="Pilot Butte, SK"
              text="Called at 8 AM about a wasp nest near my kids' play area. They were gone by noon. Amazing service."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-lime">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-brand-navy mb-4">Don't Let Pests Take Over</h2>
          <p className="text-brand-navy/80 text-xl mb-8 font-medium">Get a custom treatment plan today. Fast, effective, and guaranteed.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" className="shadow-xl" onClick={() => document.getElementById('quote')?.scrollIntoView({behavior: 'smooth'})}>
              Get Free Estimate
            </Button>
            <a href="tel:306-510-0059">
              <Button variant="white" size="lg" className="shadow-xl w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                (306) 510-0059
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};