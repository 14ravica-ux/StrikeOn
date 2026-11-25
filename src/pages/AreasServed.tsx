import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, CheckCircle, ArrowRight, Clock } from 'lucide-react';
import { areasServed } from '../data';

const areaDetails = [
  {
    city: 'Regina',
    isMain: true,
    desc: 'Our home base and primary service area. Full service availability — same-day response for most requests.',
    postalPrefixes: ['S4P', 'S4R', 'S4S', 'S4T', 'S4V', 'S4W', 'S4X', 'S4Y', 'S4Z'],
    responseTime: 'Same Day'
  },
  {
    city: 'Moose Jaw',
    isMain: false,
    desc: 'Full service available. Located 75km west of Regina.',
    postalPrefixes: ['S6H', 'S6J', 'S6K'],
    responseTime: '1–2 Days'
  },
  {
    city: 'Weyburn',
    isMain: false,
    desc: 'Full service available. Located 110km southeast of Regina.',
    postalPrefixes: ['S4H'],
    responseTime: '1–2 Days'
  },
  {
    city: 'Estevan',
    isMain: false,
    desc: 'Service available on scheduled visits.',
    postalPrefixes: ['S4A'],
    responseTime: '2–3 Days'
  },
  {
    city: 'White City',
    isMain: false,
    desc: 'Regina suburb — same-day service often available.',
    postalPrefixes: ['S4L'],
    responseTime: 'Same Day'
  },
  {
    city: 'Pilot Butte',
    isMain: false,
    desc: 'Regina suburb — same-day service often available.',
    postalPrefixes: ['S0G'],
    responseTime: 'Same Day'
  },
];

export default function AreasServed() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">Service Coverage</span>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-white mt-2 mb-5">
            Areas We Serve
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            StrikeOn Pest Control proudly serves Regina and communities across southern Saskatchewan. Not sure if we cover your area? Call us — we'll make it work.
          </p>
        </div>
      </section>

      {/* Map placeholder + area list */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Area cards */}
            <div className="lg:col-span-2">
              <h2 className="font-montserrat font-bold text-2xl text-brand-navy mb-6">Service Areas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {areaDetails.map(area => (
                  <div key={area.city} className={`bg-white rounded-2xl p-6 shadow-sm border ${area.isMain ? 'border-brand-lime' : 'border-gray-100'} hover:shadow-md transition-shadow`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-brand-lime" />
                        <h3 className="font-montserrat font-bold text-brand-navy text-lg">{area.city}</h3>
                      </div>
                      {area.isMain && (
                        <span className="bg-brand-lime text-white text-xs font-bold px-2.5 py-1 rounded-full">Main Office</span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm mb-4">{area.desc}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock size={14} className="text-brand-lime" />
                      <span className="text-gray-600 font-medium">Typical response:</span>
                      <span className="text-brand-navy font-semibold">{area.responseTime}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Full list */}
              <div className="mt-8 bg-white rounded-2xl p-7 shadow-sm">
                <h3 className="font-montserrat font-semibold text-brand-navy text-lg mb-4">All Service Communities</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {areasServed.map(area => (
                    <div key={area} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={13} className="text-brand-lime shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm text-gray-400">
                  Don't see your community? We may still be able to help. Call us at <a href="tel:2032025533" className="text-brand-lime font-semibold">203-202-5533</a> to confirm service to your area.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-brand-navy rounded-2xl p-6 text-white">
                <h3 className="font-montserrat font-semibold text-lg mb-3">Can't Find Your Area?</h3>
                <p className="text-gray-300 text-sm mb-5">We serve communities beyond this list. Give us a call and we'll confirm availability for your location.</p>
                <a href="tel:2032025533" className="flex items-center gap-2 bg-brand-lime text-white font-bold px-5 py-3 rounded-xl hover:bg-brand-darkLime transition-colors w-full justify-center">
                  <Phone size={16} /> 203-202-5533
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-montserrat font-semibold text-brand-navy text-lg mb-4">Service Area Features</h3>
                <ul className="space-y-3">
                  {[
                    'Free inspection for all service areas',
                    'Same-day emergency service in Regina',
                    'Scheduled visits for rural areas',
                    'Commercial programs province-wide',
                    'Multi-unit property programs',
                    'No travel surcharge for Regina',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle size={15} className="text-brand-lime mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-lime rounded-2xl p-6 text-white">
                <h3 className="font-montserrat font-semibold text-lg mb-2">Book a Free Inspection</h3>
                <p className="text-white/80 text-sm mb-4">No commitment required. We'll assess your pest situation and give you an honest quote.</p>
                <Link to="/contact" className="flex items-center justify-center gap-2 bg-white text-brand-lime font-bold px-5 py-3 rounded-xl hover:bg-gray-100 transition-colors w-full text-sm">
                  Request Inspection <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
