import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, Shield, Clock, CheckCircle, Star, ChevronRight,
  Bug, Home as HomeIcon, Building, Zap, AlertTriangle, ArrowRight,
  Award, Users, Leaf, ThumbsUp, ChevronDown, DollarSign,
  Search, Heart, MessageCircle, MapPin
} from 'lucide-react';
import { services, testimonials } from '../data';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Bug, Home: HomeIcon, Building, Zap, AlertTriangle, Shield, Star
};

const allFaqs = [
  { id: 'q1', category: 'Pricing & Booking', q: 'How much does pest control cost?', a: 'Pricing depends on the pest type, infestation level, and property size. We offer affordable solutions and provide a free assessment. Call or text 203-202-5533 for a customized quote.', icon: DollarSign },
  { id: 'q2', category: 'Pricing & Booking', q: 'Do you offer free inspections?', a: 'Yes, we offer free initial consultations for most residential and commercial properties. Our technician will assess the issue and recommend the most effective treatment.', icon: Search },
  { id: 'q3', category: 'Safety & Treatments', q: 'Are your treatments safe for children and pets?', a: 'Absolutely. We use professional-grade products and follow strict safety guidelines. We also offer eco-friendly treatment options whenever possible.', icon: Heart },
  { id: 'q4', category: 'Pricing & Booking', q: 'How quickly can you come?', a: 'We offer same-day and next-day appointments whenever available. Emergency services may also be available for urgent pest situations.', icon: Clock },
  { id: 'q5', category: 'Our Services', q: 'What pests do you treat?', a: 'We specialize in Mice & Rodents, Bed Bugs, Cockroaches, Ants, Spiders, Wasps & Hornets, Termites, and Preventive Pest Maintenance Programs.', icon: Bug },
  { id: 'q6', category: 'Safety & Treatments', q: 'How long does treatment take?', a: 'Most residential treatments take between 30 minutes and 2 hours depending on the pest and property size.', icon: Clock },
  { id: 'q7', category: 'Guarantees', q: 'Will the pests come back?', a: 'Our goal is long-term pest elimination. We provide recommendations and preventive measures to reduce reinfestation. Maintenance plans are available for ongoing protection.', icon: Shield },
  { id: 'q8', category: 'Guarantees', q: 'Are you licensed and insured?', a: 'Yes. StrikeOn Pest Control is fully licensed and insured, giving our customers peace of mind and professional service they can trust.', icon: Award },
  { id: 'q9', category: 'Safety & Treatments', q: 'Do I need to leave my house during treatment?', a: 'It depends on the treatment type. In many cases, homeowners can remain in the home. We will provide clear instructions before service begins.', icon: HomeIcon },
  { id: 'q10', category: 'Pest ID', q: 'How do I know if I have bed bugs?', a: 'Common signs: small bites on skin, blood spots on bedding, tiny dark stains on mattresses, and live bugs near sleeping areas. Contact us for an inspection.', icon: Bug },
  { id: 'q11', category: 'Pest ID', q: 'How do I know if I have mice?', a: 'Signs of mice: droppings, scratching noises in walls, chewed wires or food packages, unpleasant odors, and nests. We can inspect and identify entry points.', icon: AlertTriangle },
  { id: 'q12', category: 'Our Services', q: 'Do you provide commercial pest control?', a: 'Yes. We provide customized pest management programs for Restaurants, Offices, Retail Stores, Warehouses, Property Management Companies, and Industrial Facilities.', icon: Building },
  { id: 'q13', category: 'Guarantees', q: 'Do you offer warranties or guarantees?', a: "We stand behind our work. Service warranties vary by pest type and treatment plan. We'll explain all warranty details before starting the job.", icon: CheckCircle },
  { id: 'q14', category: 'Pricing & Booking', q: 'What payment methods do you accept?', a: 'We accept cash, debit, credit cards, and electronic transfers (Interac e-Transfer) for your convenience.', icon: DollarSign },
  { id: 'q15', category: 'Pricing & Booking', q: 'Can I get a quote over the phone?', a: 'Yes. If you can describe the pest problem, property type, and location, we can often provide an estimated quote over the phone.', icon: MessageCircle },
  { id: 'q16', category: 'Why StrikeOn', q: 'Why should I choose StrikeOn Pest Control?', a: 'Because we focus on: Fast Response, Affordable Pricing, Safe & Eco-Friendly Treatments, Licensed Professionals, Excellent Customer Service, and Residential & Commercial Expertise.', icon: Star },
];

const faqCategories = ['All', 'Pricing & Booking', 'Safety & Treatments', 'Our Services', 'Guarantees', 'Pest ID', 'Why StrikeOn'];

/* ─────────────────────────────────────────────
   HERO — mirrors the flyer: logo top-left,
   bold headline left, technician image right,
   service checklist, navy box bottom-right
───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Top green accent line */}
      <div className="h-1.5 bg-gradient-to-r from-brand-lime via-brand-gold to-brand-lime w-full" />

      <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col justify-between pr-0 lg:pr-8">
            {/* Logo + tagline */}
            <div className="flex items-center gap-4 mb-6">
              <img src="/logo.png" alt="StrikeOn Pest Control" className="h-20 md:h-24 w-auto" />
              <div className="border-l-2 border-gray-200 pl-4">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Canadian</p>
                <p className="font-montserrat font-bold text-brand-navy text-sm">Pest Control Company</p>
              </div>
            </div>

            {/* Tagline banner */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-brand-lime" />
              <span className="font-bold text-brand-navy text-sm tracking-widest uppercase">Your Shield Against Pests</span>
              <div className="flex-1 h-px bg-brand-lime" />
            </div>

            {/* Main headline */}
            <h1 className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl text-brand-navy leading-none mb-4 uppercase">
              Professional<br />
              <span className="text-brand-lime">Pest Control</span><br />
              You Can Trust!
            </h1>

            {/* Sub-banner */}
            <div className="bg-brand-lime text-white font-black text-lg md:text-xl px-5 py-2.5 inline-block mb-5 tracking-wider uppercase">
              Safe. Effective. Affordable.
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-brand-navy font-semibold mb-6">
              <MapPin size={16} className="text-brand-lime" />
              <span>Serving Regina &amp; Surrounding Areas</span>
            </div>

            {/* Pest icons image */}
            <div className="mb-6">
              <p className="font-montserrat font-bold text-brand-lime uppercase tracking-wide text-sm mb-3">We Protect You From:</p>
              <img src="/pest-icons.png" alt="Rodents, Bed Bugs, Cockroaches, Termites, Ants, Spiders" className="w-full max-w-sm" />
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:2032025533"
                className="flex-1 flex items-center justify-center gap-2 bg-brand-lime hover:bg-brand-darkLime text-white font-black text-lg px-6 py-4 transition-all shadow-lg">
                <Phone size={20} /> Call Now
              </a>
              <Link to="/contact"
                className="flex-1 flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-navy/90 text-white font-black text-lg px-6 py-4 transition-all">
                Free Inspection <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="relative mt-8 lg:mt-0 flex flex-col">
            {/* Flyer / tech image */}
            <div className="relative flex-1 rounded-2xl overflow-hidden bg-gray-100 min-h-72">
              <img
                src="/flyer.jpg"
                alt="StrikeOn Professional Pest Control Technician"
                className="w-full h-full object-cover object-top"
                style={{ maxHeight: '520px' }}
              />
              {/* Licensed badge overlay */}
              <div className="absolute top-4 right-4 bg-brand-navy border-4 border-brand-lime rounded-full w-24 h-24 flex flex-col items-center justify-center text-center shadow-xl">
                <Shield size={18} className="text-brand-lime mb-1" />
                <p className="text-white font-black text-xs leading-tight uppercase">Licensed<br />&amp; Insured</p>
                <CheckCircle size={14} className="text-brand-lime mt-1" />
              </div>
            </div>

            {/* Fast/Reliable box — matches flyer navy box */}
            <div className="bg-brand-navy rounded-xl p-5 mt-4">
              <p className="font-montserrat font-black text-white text-xl text-center mb-1 uppercase">Fast, Reliable</p>
              <p className="font-montserrat font-black text-brand-lime text-lg text-center mb-4 uppercase">&amp; Effective Solutions</p>
              <div className="grid grid-cols-3 gap-3 text-center text-white">
                {[
                  { icon: Clock, label: '24/7\nService' },
                  { icon: HomeIcon, label: 'Residential\n& Commercial' },
                  { icon: Leaf, label: 'Eco-Friendly\nSolutions' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full border-2 border-brand-lime flex items-center justify-center">
                      <Icon size={20} className="text-brand-lime" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wide whitespace-pre-line leading-tight">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom green accent */}
      <div className="h-1 bg-brand-lime w-full" />
    </section>
  );
}

/* ─── WHY CHOOSE — green bar matching flyer ─── */
function WhyChooseBar() {
  return (
    <section className="bg-brand-lime py-5">
      <div className="max-w-7xl mx-auto px-4">
        <p className="font-montserrat font-black text-white text-center text-lg uppercase tracking-widest mb-5">
          Why Choose StrikeOn Pest?
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Shield, label: 'Licensed &\nCertified Professionals' },
            { icon: Leaf, label: 'Eco-Friendly &\nSafe Treatments' },
            { icon: DollarSign, label: 'Affordable\nPricing' },
            { icon: ThumbsUp, label: '100% Customer\nSatisfaction' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
              <Icon size={22} className="text-white shrink-0" />
              <p className="text-white font-bold text-xs uppercase tracking-wide whitespace-pre-line leading-tight">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PEST GRID — circular icons like flyer ─── */
function PestGrid() {
  const pests = [
    { label: 'Rodents', emoji: '🐀' },
    { label: 'Bed Bugs', emoji: '🪲' },
    { label: 'Cockroaches', emoji: '🪳' },
    { label: 'Termites', emoji: '🐛' },
    { label: 'Ants', emoji: '🐜' },
    { label: 'Spiders', emoji: '🕷️' },
    { label: 'Wasps', emoji: '🐝' },
    { label: 'Hornets', emoji: '🐞' },
  ];
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="font-montserrat font-black text-brand-navy text-xl md:text-2xl mb-8 uppercase tracking-wide">
          We Protect Your Home &amp; Business From:
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {pests.map(p => (
            <div key={p.label} className="flex flex-col items-center gap-2">
              {/* Circle — mirrors the flyer's round pest icons */}
              <div className="w-20 h-20 rounded-full border-4 border-brand-navy bg-gray-50 flex items-center justify-center hover:border-brand-lime hover:bg-brand-lime/5 transition-all shadow-sm">
                <span className="text-4xl">{p.emoji}</span>
              </div>
              <span className="text-xs font-black text-brand-navy uppercase tracking-wider">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES SECTION ─── */
function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-brand-lime font-bold text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="font-montserrat font-black text-3xl md:text-4xl text-brand-navy mt-2 mb-3 uppercase">
            Complete Pest Control Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From bed bugs to rodents, wasps to termites — we eliminate any pest problem in your home or business.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Bug;
            return (
              <Link key={service.id} to={service.link}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border-2 border-transparent hover:border-brand-lime transition-all duration-300">
                <div className="w-14 h-14 bg-brand-navy rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-lime transition-colors duration-300">
                  <Icon size={24} className="text-brand-lime group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-montserrat font-bold text-brand-navy text-base mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{service.description}</p>
                <div className="mt-4 flex items-center text-brand-lime text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wide">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </div>
              </Link>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Link to="/residential"
            className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-lime text-white font-bold px-8 py-3.5 rounded-xl transition-colors uppercase tracking-wide">
            View All Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── WHY CHOOSE DETAIL + logo watermark ─── */
function WhyChooseDetail() {
  const reasons = [
    { icon: Clock, title: 'Fast Response', desc: 'We act quickly to solve your pest problems. Same-day service when possible.' },
    { icon: DollarSign, title: 'Affordable Pricing', desc: 'Quality service that fits your budget. Free estimates, no hidden fees.' },
    { icon: Leaf, title: 'Safe Treatments', desc: 'Eco-friendly & safe for children and pets. Health Canada-registered products only.' },
    { icon: Award, title: 'Licensed Professionals', desc: 'Government-certified pest applicator. Trained, certified, and experienced.' },
    { icon: Users, title: 'Excellent Customer Service', desc: 'We care about our customers and get the job done right, every time.' },
    { icon: Building, title: 'Residential & Commercial', desc: 'Solutions for homes, businesses, and industries of all sizes.' },
  ];
  return (
    <section className="py-16 bg-brand-navy relative overflow-hidden">
      {/* Logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <img src="/logo.png" alt="" className="w-3/4 max-w-2xl opacity-[0.04]" style={{ filter: 'brightness(0) invert(1)' }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-brand-lime font-bold text-sm uppercase tracking-widest">Why StrikeOn</span>
          <h2 className="font-montserrat font-black text-3xl md:text-4xl text-white mt-2 uppercase">
            Our Mission Is Simple
          </h2>
          <p className="text-brand-lime font-black text-xl md:text-2xl mt-2 uppercase tracking-wide">
            Protect Your Home &amp; Business From Pests.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-brand-lime/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-brand-lime/10 group-hover:bg-brand-lime flex items-center justify-center mb-4 transition-colors">
                <Icon size={22} className="text-brand-lime group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-montserrat font-bold text-white mb-2 uppercase tracking-wide text-sm">{title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:2032025533"
            className="inline-flex items-center justify-center gap-2 bg-brand-lime hover:bg-brand-darkLime text-white font-black px-8 py-4 rounded-xl transition-colors uppercase tracking-wide">
            <Phone size={18} /> Call 203-202-5533
          </a>
          <Link to="/about"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-xl transition-colors">
            About Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-brand-lime font-bold text-sm uppercase tracking-widest">Customer Reviews</span>
          <h2 className="font-montserrat font-black text-3xl md:text-4xl text-brand-navy mt-2 uppercase">
            What Our Customers Say
          </h2>
          <div className="flex justify-center gap-1 mt-3">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-brand-gold fill-brand-gold" />)}
            <span className="text-gray-400 text-sm ml-2">5.0 · 100+ reviews</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map(t => (
            <div key={t.id} className="bg-gray-50 border-2 border-gray-100 hover:border-brand-lime rounded-2xl p-6 transition-all">
              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={13} className="text-brand-gold fill-brand-gold" />)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-navy rounded-full flex items-center justify-center text-white font-black text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-brand-navy font-bold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ — full 16 Q&A with tabs ─── */
function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('q1');
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? allFaqs : allFaqs.filter(f => f.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none opacity-[0.04]" aria-hidden="true">
        <img src="/logo.png" alt="" style={{ width: '400px', filter: 'grayscale(1)' }} />
      </div>
      <div className="relative max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-brand-lime font-bold text-sm uppercase tracking-widest">Got Questions?</span>
          <h2 className="font-montserrat font-black text-3xl md:text-4xl text-brand-navy mt-2 uppercase">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Everything you need to know. Can't find an answer?{' '}
            <a href="tel:2032025533" className="text-brand-lime font-bold hover:underline">Call 203-202-5533</a>.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {faqCategories.map(cat => (
            <button key={cat} onClick={() => { setActiveCategory(cat); setOpenId(null); }}
              className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wide transition-all ${activeCategory === cat ? 'bg-brand-lime text-white shadow-md' : 'bg-white border-2 border-gray-200 text-gray-600 hover:border-brand-lime'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {filtered.map((faq) => {
            const Icon = faq.icon;
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className={`rounded-xl border-2 overflow-hidden transition-all ${isOpen ? 'border-brand-lime shadow-lg shadow-brand-lime/10' : 'border-gray-200 bg-white hover:border-brand-lime/50'}`}>
                <button onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center gap-4 p-4 text-left bg-white">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-brand-lime' : 'bg-brand-navy'}`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-black text-brand-lime uppercase tracking-widest block mb-0.5">{faq.category}</span>
                    <span className="font-bold text-brand-navy text-sm">{faq.q}</span>
                  </div>
                  <ChevronDown size={18} className={`text-brand-lime shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 bg-white border-t-2 border-brand-lime/10">
                    <div className="pl-14 pt-3">
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ bottom CTA */}
        <div className="mt-10 bg-brand-navy rounded-2xl p-7 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06] flex items-center justify-center pointer-events-none" aria-hidden="true">
            <img src="/logo.png" alt="" className="w-56" style={{ filter: 'brightness(0) invert(1)' }} />
          </div>
          <div className="relative">
            <h3 className="font-montserrat font-black text-white text-xl uppercase mb-2">Still Have Questions?</h3>
            <p className="text-gray-400 text-sm mb-5">Our team is ready — call, text, or message us anytime.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:2032025533" className="inline-flex items-center justify-center gap-2 bg-brand-lime text-white font-black px-6 py-3 rounded-xl hover:bg-brand-darkLime transition-colors uppercase">
                <Phone size={16} /> Call 203-202-5533
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                Send a Message <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── BOTTOM CTA — matches flyer bottom bar ─── */
function CTASection() {
  return (
    <section className="bg-brand-navy relative overflow-hidden">
      {/* Logo watermark */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none select-none" aria-hidden="true">
        <img src="/logo.png" alt="" className="h-full opacity-[0.05]" style={{ filter: 'brightness(0) invert(1)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {/* Left — call CTA */}
          <div className="py-10 px-6 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
              <div className="w-10 h-10 bg-brand-lime rounded-full flex items-center justify-center">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white font-black text-sm uppercase tracking-widest">Call or Text Now for a</p>
                <p className="text-brand-lime font-black text-xl uppercase tracking-wide">Free Inspection!</p>
              </div>
            </div>
            <a href="tel:2032025533"
              className="font-montserrat font-black text-white text-5xl md:text-6xl tracking-tight hover:text-brand-lime transition-colors block mt-4">
              203 202 5533
            </a>
            <p className="text-gray-400 text-sm mt-3">www.strikeonpest.com</p>
          </div>

          {/* Right — don't let pests */}
          <div className="py-10 px-6">
            <p className="font-montserrat font-black text-brand-lime text-xl uppercase tracking-wide mb-1">Don't Let Pests Take Over!</p>
            <p className="text-white text-sm mb-6">We're here to protect what matters most.</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: HomeIcon, label: 'Protect\nYour Home' },
                { icon: Users, label: 'Keep Your\nFamily Safe' },
                { icon: Building, label: 'Protect\nYour Business' },
                { icon: Shield, label: 'Trusted\nLocal Service' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3 py-3">
                  <div className="w-9 h-9 bg-brand-lime/20 rounded-full flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-brand-lime" />
                  </div>
                  <p className="text-white font-bold text-xs uppercase tracking-wide whitespace-pre-line leading-tight">{label}</p>
                </div>
              ))}
            </div>
            <Link to="/contact"
              className="mt-5 w-full flex items-center justify-center gap-2 bg-brand-lime hover:bg-brand-darkLime text-white font-black py-3.5 rounded-xl transition-colors uppercase tracking-wide">
              Book Free Inspection <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-brand-lime py-3 text-center">
        <p className="text-white font-black text-sm uppercase tracking-widest">Protecting What Matters Most</p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseBar />
      <PestGrid />
      <ServicesSection />
      <WhyChooseDetail />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  );
}
