import React from 'react';
import { QuoteForm } from '../components/QuoteForm';
import { Check, Shield, Home, Building } from 'lucide-react';

interface ServicesProps {
  type: 'residential' | 'commercial';
}

export const Services: React.FC<ServicesProps> = ({ type }) => {
  const isResidential = type === 'residential';
  
  const title = isResidential ? "Residential Pest Control" : "Commercial Pest Management";
  const subtitle = isResidential 
    ? "Keep your home safe and comfortable for your family."
    : "Protect your brand reputation and comply with health regulations.";
  
  const features = isResidential 
    ? ["Ant Control", "Rodent Exclusion", "Bed Bug Heat Treatment", "Spider Removal", "Wasp Nest Removal", "Seasonal Protection Plans"]
    : ["Restaurant & Food Service", "Warehousing & Logistics", "Property Management", "Healthcare Facilities", "Retail Stores", "Audit Compliance Support"];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-brand-navy py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex justify-center items-center w-16 h-16 bg-brand-lime rounded-full mb-6 text-brand-navy">
             {isResidential ? <Home className="w-8 h-8" /> : <Building className="w-8 h-8" />}
          </div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">{subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">
              {isResidential ? "Your Home is Your Sanctuary" : "Business Protection You Can Trust"}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              {isResidential 
                ? "At StrikeOn Pest, we understand that pests in your home are more than just a nuisance—they can pose serious health risks and cause structural damage. Our residential pest control services are designed to be tough on pests but safe for your family and pets."
                : "A single pest sighting can ruin a business's reputation. StrikeOn Pest provides discreet, proactive commercial pest control tailored to your industry. We help you meet health codes, pass audits, and keep your customers and employees safe."
              }
            </p>
            <p className="text-slate-600 leading-relaxed">
              We use Integrated Pest Management (IPM) techniques, focusing on prevention and exclusion first, using chemicals only when necessary and in targeted applications.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold text-brand-navy mb-6">Our {isResidential ? 'Home' : 'Business'} Services Include:</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center">
                  <Check className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brand-navy">How It Works</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Inspection", desc: "We identify the pest and the source of the problem." },
                { step: "02", title: "Treatment", desc: "Customized plan using eco-friendly methods." },
                { step: "03", title: "Prevention", desc: "We seal entry points to stop them coming back." }
              ].map((item, idx) => (
                <div key={idx} className="relative pl-4 border-l-2 border-brand-lime">
                  <span className="text-4xl font-black text-slate-100 absolute -top-4 -left-2 -z-10">{item.step}</span>
                  <h4 className="font-bold text-brand-navy text-lg">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <QuoteForm isCompact />
          
          <div className="bg-brand-navy text-white p-6 rounded-lg shadow-lg">
            <Shield className="w-10 h-10 text-brand-lime mb-4" />
            <h3 className="text-xl font-bold mb-2">The StrikeOn Guarantee</h3>
            <p className="text-slate-300 text-sm mb-4">
              If pests return between scheduled treatments, we'll return at no extra cost to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};