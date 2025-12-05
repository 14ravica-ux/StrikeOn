import React from 'react';
import { QuoteForm } from '../components/QuoteForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We are here to help. Reach out for quotes, questions, or emergency service.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12">
         {/* Contact Info Side */}
         <div className="space-y-12">
            <div>
               <h2 className="text-2xl font-bold text-brand-navy mb-6">Get In Touch</h2>
               <div className="space-y-6">
                 <div className="flex items-start">
                   <div className="w-12 h-12 bg-brand-lime/20 rounded-full flex items-center justify-center text-brand-darkLime shrink-0 mr-4">
                     <Phone className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="font-bold text-brand-navy">Phone</h3>
                     <p className="text-slate-600 text-sm mb-1">24/7 Emergency Service Available</p>
                     <a href="tel:306-510-0059" className="text-xl font-bold text-brand-lime hover:underline">(306) 510-0059</a>
                   </div>
                 </div>

                 <div className="flex items-start">
                   <div className="w-12 h-12 bg-brand-lime/20 rounded-full flex items-center justify-center text-brand-darkLime shrink-0 mr-4">
                     <Mail className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="font-bold text-brand-navy">Email</h3>
                     <p className="text-slate-600 text-sm mb-1">For general inquiries and quotes</p>
                     <a href="mailto:info@strikeonpest.ca" className="text-lg font-medium text-slate-800 hover:text-brand-lime transition-colors">info@strikeonpest.ca</a>
                   </div>
                 </div>

                 <div className="flex items-start">
                   <div className="w-12 h-12 bg-brand-lime/20 rounded-full flex items-center justify-center text-brand-darkLime shrink-0 mr-4">
                     <MapPin className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="font-bold text-brand-navy">Head Office</h3>
                     <p className="text-slate-600 text-sm mb-1">Serving Regina & Area</p>
                     <address className="not-italic text-slate-800">
                       123 Industrial Drive<br/>
                       Regina, Saskatchewan<br/>
                       S4P 3Y2
                     </address>
                   </div>
                 </div>

                 <div className="flex items-start">
                   <div className="w-12 h-12 bg-brand-lime/20 rounded-full flex items-center justify-center text-brand-darkLime shrink-0 mr-4">
                     <Clock className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="font-bold text-brand-navy">Office Hours</h3>
                     <ul className="text-slate-600 text-sm space-y-1 mt-1">
                       <li className="flex justify-between w-40"><span>Mon - Fri:</span> <span className="font-medium text-slate-900">7:00 AM - 8:00 PM</span></li>
                       <li className="flex justify-between w-40"><span>Saturday:</span> <span className="font-medium text-slate-900">8:00 AM - 6:00 PM</span></li>
                       <li className="flex justify-between w-40"><span>Sunday:</span> <span className="font-medium text-slate-900">Closed</span></li>
                     </ul>
                   </div>
                 </div>
               </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-200 h-64 rounded-xl overflow-hidden shadow-inner relative group">
               <img src="https://loremflickr.com/800/400/map,city" alt="Map Location" className="w-full h-full object-cover opacity-80" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <button className="bg-white text-brand-navy font-bold py-2 px-6 rounded-full shadow-lg hover:scale-105 transition-transform">
                   Get Directions
                 </button>
               </div>
            </div>
         </div>

         {/* Form Side */}
         <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-lg">
            <h2 className="text-2xl font-bold text-brand-navy mb-2">Send Us a Message</h2>
            <p className="text-slate-600 mb-6">Fill out the form below and we will get back to you within 15 minutes.</p>
            <QuoteForm />
         </div>
      </div>
    </div>
  );
};