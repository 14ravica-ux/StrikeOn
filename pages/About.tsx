import React from 'react';
import { QuoteForm } from '../components/QuoteForm';
import { Shield, Users, Target, Award, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-brand-navy py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About StrikeOn Pest</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Your local experts dedicated to keeping Regina homes and businesses safe, healthy, and pest-free.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Intro */}
          <section>
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              At StrikeOn Pest, we believe that effective pest control shouldn't come at the cost of your safety or the environment. 
              Our mission is to provide industry-leading pest management solutions that are tough on pests but safe for families, pets, and our community.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              We combine advanced technology, integrated pest management (IPM) strategies, and deep local knowledge to solve pest problems at their source, preventing them from coming back.
            </p>
          </section>

          {/* Values Grid */}
          <section className="grid sm:grid-cols-2 gap-6">
             <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="w-12 h-12 bg-brand-lime/20 rounded-full flex items-center justify-center mb-4">
                   <Shield className="w-6 h-6 text-brand-darkLime" />
                </div>
                <h3 className="font-bold text-brand-navy text-lg mb-2">Safety First</h3>
                <p className="text-slate-600 text-sm">We strictly adhere to safety protocols to protect your loved ones and property during every treatment.</p>
             </div>
             <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="w-12 h-12 bg-brand-lime/20 rounded-full flex items-center justify-center mb-4">
                   <Target className="w-6 h-6 text-brand-darkLime" />
                </div>
                <h3 className="font-bold text-brand-navy text-lg mb-2">Precision Solutions</h3>
                <p className="text-slate-600 text-sm">We don't just spray and pray. We identify the root cause and apply targeted treatments for maximum effectiveness.</p>
             </div>
             <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="w-12 h-12 bg-brand-lime/20 rounded-full flex items-center justify-center mb-4">
                   <Users className="w-6 h-6 text-brand-darkLime" />
                </div>
                <h3 className="font-bold text-brand-navy text-lg mb-2">Customer Focused</h3>
                <p className="text-slate-600 text-sm">We pride ourselves on transparent communication, fair pricing, and reliable service you can count on.</p>
             </div>
             <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="w-12 h-12 bg-brand-lime/20 rounded-full flex items-center justify-center mb-4">
                   <Award className="w-6 h-6 text-brand-darkLime" />
                </div>
                <h3 className="font-bold text-brand-navy text-lg mb-2">Certified Experts</h3>
                <p className="text-slate-600 text-sm">Our technicians are fully licensed, insured, and continuously trained on the latest industry standards.</p>
             </div>
          </section>

          {/* Why Choose Us List */}
          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Why Neighbors Choose StrikeOn</h2>
            <ul className="space-y-4">
               {[
                 "Locally owned and operated in Regina",
                 "Fast response times for emergencies",
                 "Eco-friendly and pet-safe options available",
                 "Discreet unmarked vehicles upon request",
                 "100% Satisfaction Guarantee"
               ].map((item, i) => (
                 <li key={i} className="flex items-center">
                   <CheckCircle className="w-5 h-5 text-brand-lime mr-3 shrink-0" />
                   <span className="text-slate-700 font-medium">{item}</span>
                 </li>
               ))}
            </ul>
          </section>
        </div>

        {/* Sidebar */}
        <div>
          <div className="sticky top-24">
            <div className="bg-brand-navy text-white p-6 rounded-t-lg">
               <h3 className="text-xl font-bold">Contact Us Today</h3>
               <p className="text-slate-300 text-sm mt-2">
                 Ready to get started? Fill out the form below or give us a call.
               </p>
            </div>
            <div className="border-x border-b border-slate-200 rounded-b-lg p-0 overflow-hidden shadow-lg bg-white">
               <QuoteForm />
            </div>
            
            <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200 text-center">
               <p className="font-bold text-brand-navy mb-2">Prefer to talk?</p>
               <a href="tel:306-510-0059" className="text-2xl font-black text-brand-lime hover:text-brand-darkLime transition-colors">
                 (306) 510-0059
               </a>
               <p className="text-xs text-slate-500 mt-2">Available Mon-Sat: 7am - 8pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
