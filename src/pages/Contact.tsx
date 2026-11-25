import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertTriangle } from 'lucide-react';

const pestTypes = [
  'Bed Bugs', 'Mice / Rats', 'Cockroaches', 'Ants', 'Wasps & Hornets',
  'Spiders', 'Termites', 'Commercial Pest Control', 'Preventive Program', 'Other / Not Sure'
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', postal: '', pestType: '', message: '', urgency: 'normal'
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim() || !/^[\d\s\-\(\)\+]{7,15}$/.test(form.phone)) e.phone = 'Valid phone number required';
    if (!form.pestType) e.pestType = 'Please select a pest type';
    if (!form.postal.trim()) e.postal = 'Postal code required';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-brand-lime/10 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={32} className="text-brand-lime" />
          </div>
          <h2 className="font-montserrat font-bold text-2xl text-brand-navy mb-3">Request Received!</h2>
          <p className="text-gray-500 mb-6">
            Thank you, <strong>{form.name}</strong>! Ravi will contact you within <strong>1–2 hours</strong> (often sooner). For immediate help, call directly:
          </p>
          <a href="tel:2032025533" className="inline-flex items-center justify-center gap-2 bg-brand-lime text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-darkLime transition-colors text-lg w-full">
            <Phone size={20} /> 203-202-5533
          </a>
          <p className="mt-4 text-xs text-gray-400">Available 24/7 for emergencies</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">Get in Touch</span>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-white mt-2 mb-4">
            Free Inspection & Quote
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Tell us about your pest problem and we'll respond within 1–2 hours. Same-day service available for urgent situations.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="font-montserrat font-bold text-2xl text-brand-navy mb-6">Contact Information</h2>
              </div>

              {[
                {
                  icon: Phone,
                  title: 'Call or Text',
                  primary: '203-202-5533',
                  secondary: '24/7 Emergency Line',
                  href: 'tel:2032025533'
                },
                {
                  icon: Mail,
                  title: 'Email Us',
                  primary: 'ravi@strikeonpest.com',
                  secondary: 'Response within 2 hours',
                  href: 'mailto:ravi@strikeonpest.com'
                },
                {
                  icon: MapPin,
                  title: 'Office Address',
                  primary: '4822 Queen St.',
                  secondary: 'Regina, SK S4S 6V8',
                  href: null
                },
                {
                  icon: Clock,
                  title: 'Hours of Operation',
                  primary: 'Mon–Sat: 7am – 8pm',
                  secondary: 'Emergency: 24/7',
                  href: null
                }
              ].map(({ icon: Icon, title, primary, secondary, href }) => (
                <div key={title} className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm">
                  <div className="w-11 h-11 bg-brand-lime/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-brand-lime" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">{title}</p>
                    {href ? (
                      <a href={href} className="font-semibold text-brand-navy hover:text-brand-lime transition-colors">{primary}</a>
                    ) : (
                      <p className="font-semibold text-brand-navy">{primary}</p>
                    )}
                    <p className="text-gray-500 text-sm">{secondary}</p>
                  </div>
                </div>
              ))}

              <div className="bg-brand-navy text-white p-5 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle size={18} className="text-brand-gold" />
                  <span className="font-semibold">Emergency Service</span>
                </div>
                <p className="text-gray-300 text-sm mb-3">Wasp nest? Rodent discovered? Bed bugs found? We offer same-day emergency response.</p>
                <a href="tel:2032025533" className="inline-flex items-center gap-2 bg-brand-lime text-white font-bold px-5 py-2.5 rounded-lg hover:bg-brand-darkLime transition-colors w-full justify-center">
                  <Phone size={16} /> Call Now
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-sm p-8 md:p-10">
                <h2 className="font-montserrat font-bold text-2xl text-brand-navy mb-2">Request a Free Inspection</h2>
                <p className="text-gray-500 text-sm mb-7">Fill out the form and we'll contact you within 1–2 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Urgency */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">How urgent is this?</label>
                    <div className="flex gap-3">
                      {[
                        { value: 'emergency', label: '🚨 Emergency', desc: 'Need help today' },
                        { value: 'soon', label: '⚡ Soon', desc: 'Within a few days' },
                        { value: 'normal', label: '📅 Planning', desc: "I'm planning ahead" },
                      ].map(opt => (
                        <label key={opt.value} className={`flex-1 cursor-pointer border-2 rounded-xl p-3 text-center transition-all ${form.urgency === opt.value ? 'border-brand-lime bg-brand-lime/5' : 'border-gray-100 hover:border-gray-200'}`}>
                          <input type="radio" name="urgency" value={opt.value} checked={form.urgency === opt.value} onChange={e => setForm(f => ({ ...f, urgency: e.target.value }))} className="sr-only" />
                          <div className="text-sm font-semibold text-brand-navy">{opt.label}</div>
                          <div className="text-xs text-gray-400">{opt.desc}</div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Grid fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Your name"
                        className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-colors ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-brand-lime'}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        placeholder="306-555-0000"
                        className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-colors ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-brand-lime'}`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="you@example.com"
                        className="w-full border border-gray-200 focus:border-brand-lime rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Postal Code *</label>
                      <input
                        type="text"
                        value={form.postal}
                        onChange={e => setForm(f => ({ ...f, postal: e.target.value }))}
                        placeholder="S4S 6V8"
                        className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-colors ${errors.postal ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-brand-lime'}`}
                      />
                      {errors.postal && <p className="text-red-500 text-xs mt-1">{errors.postal}</p>}
                    </div>
                  </div>

                  {/* Pest type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Type of Pest Problem *</label>
                    <select
                      value={form.pestType}
                      onChange={e => setForm(f => ({ ...f, pestType: e.target.value }))}
                      className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-colors ${errors.pestType ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-brand-lime'}`}
                    >
                      <option value="">Select a pest type...</option>
                      {pestTypes.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                    {errors.pestType && <p className="text-red-500 text-xs mt-1">{errors.pestType}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Additional Details</label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      rows={4}
                      placeholder="Describe the problem — where you've seen pests, how long it's been happening, any other details..."
                      className="w-full border border-gray-200 focus:border-brand-lime rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-brand-lime hover:bg-brand-darkLime text-white font-bold py-4 rounded-xl transition-colors text-lg shadow-lg shadow-brand-lime/30"
                  >
                    <Send size={18} /> Send My Request
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    We'll contact you within 1–2 hours. Your information is kept private and never sold.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-gray-200 h-72 flex items-center justify-center">
        <div className="text-center">
          <MapPin size={40} className="text-brand-navy mx-auto mb-3" />
          <p className="font-montserrat font-semibold text-brand-navy text-lg">4822 Queen St., Regina, SK S4S 6V8</p>
          <a
            href="https://maps.google.com/?q=4822+Queen+St+Regina+SK"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-brand-lime font-semibold text-sm hover:underline"
          >
            Get Directions ↗
          </a>
        </div>
      </section>
    </>
  );
}
