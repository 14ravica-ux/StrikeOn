import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

const cities = [
  "Regina", "Moose Jaw", "White City", "Pilot Butte", 
  "Lumsden", "Emerald Park", "Balgonie", "Grand Coulee", 
  "Pense", "Indian Head", "Fort Qu'Appelle", "Weyburn"
];

export const AreasServed: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Areas We Serve</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Professional pest control services across Southern Saskatchewan.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
           <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Local Pest Experts in Your Neighborhood</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                StrikeOn Pest is proud to be a locally owned and operated business. We don't just serve these communities; we live in them. Our technicians understand the unique pest challenges of the Saskatchewan climate, from winter rodent invasions to summer wasp nests.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Whether you are in the heart of Regina or on an acreage in Lumsden, our fully equipped fleet is ready to respond quickly to your pest emergency.
              </p>
              <Button onClick={() => window.location.hash = "#quote"}>Check Availability</Button>
           </div>
           <div className="bg-slate-100 rounded-xl overflow-hidden h-80 relative shadow-xl">
             <img src="https://picsum.photos/seed/saskmap/800/600" alt="Service Map" className="w-full h-full object-cover" />
             <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow text-sm font-bold text-brand-navy">
               Serving 100km+ Radius of Regina
             </div>
           </div>
        </div>

        <h3 className="text-2xl font-bold text-brand-navy mb-8 border-b pb-4">Our Service Locations</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           {cities.map((city, idx) => (
             <Link key={idx} to="/branch-finder" className="group block bg-slate-50 p-6 rounded-lg border border-slate-200 hover:bg-brand-navy hover:border-brand-navy transition-all duration-300">
               <div className="flex items-center justify-between">
                 <div className="flex items-center">
                   <MapPin className="w-5 h-5 text-brand-lime mr-3 group-hover:text-brand-lime" />
                   <span className="font-bold text-slate-700 group-hover:text-white text-lg">{city}</span>
                 </div>
                 <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-brand-lime opacity-0 group-hover:opacity-100 transition-opacity" />
               </div>
             </Link>
           ))}
        </div>

        <div className="mt-16 bg-brand-lime/10 rounded-2xl p-8 text-center border border-brand-lime/20">
          <h3 className="text-2xl font-bold text-brand-navy mb-2">Don't see your town listed?</h3>
          <p className="text-slate-600 mb-6">We often travel further for commercial contracts and major residential infestations. Give us a call to see if we can help.</p>
          <a href="tel:306-510-0059" className="text-brand-darkLime font-black text-2xl hover:underline">
            (306) 510-0059
          </a>
        </div>
      </div>
    </div>
  );
};