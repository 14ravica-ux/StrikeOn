import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, Shield, Clock, CheckCircle, Star, ChevronRight,
  Bug, Home as HomeIcon, Building, Zap, AlertTriangle, ArrowRight,
  Award, Users, Leaf, ThumbsUp, ChevronDown, DollarSign,
  Search, Heart, MessageCircle
} from 'lucide-react';
import { services, testimonials } from '../data';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Bug, Home: HomeIcon, Building, Zap, AlertTriangle, Shield, Star
};

/** Full FAQ data from pamphlet / Q&A materials */
const allFaqs = [
  {
    id: 'q1', category: 'Pricing & Booking',
    q: 'How much does pest control cost?',
    a: 'Pricing depends on the pest type, infestation level, and property size. We offer affordable solutions and provide a free assessment to determine the best treatment plan. Call or text us at 203-202-5533 for a customized quote.',
    icon: DollarSign,
  },
  {
    id: 'q2', category: 'Pricing & Booking',
    q: 'Do you offer free inspections?',
    a: 'Yes, we offer free initial consultations for most residential and commercial properties. Our technician will assess the issue and recommend the most effective treatment.',
    icon: Search,
  },
  {
    id: 'q3', category: 'Safety & Treatments',
    q: 'Are your treatments safe for children and pets?',
    a: 'Absolutely. We use professional-grade products and follow strict safety guidelines. We also offer eco-friendly treatment options whenever possible.',
    icon: Heart,
  },
  {
    id: 'q4', category: 'Pricing & Booking',
    q: 'How quickly can you come?',
    a: 'We offer same-day and next-day appointments whenever available. Emergency services may also be available for urgent pest situations.',
    icon: Clock,
  },
  {
    id: 'q5', category: 'Our Services',
    q: 'What pests do you treat?',
    a: 'We specialize in Mice & Rodents, Bed Bugs, Cockroaches, Ants, Spiders, Wasps & Hornets, Termites, and Preventive Pest Maintenance Programs.',
    icon: Bug,
  },
  {
    id: 'q6', category: 'Safety & Treatments',
    q: 'How long does treatment take?',
    a: 'Most residential treatments take between 30 minutes and 2 hours depending on the pest and property size. Commercial properties may require longer visits.',
    icon: Clock,
  },
  {
    id: 'q7', category: 'Guarantees',
    q: 'Will the pests come back?',
    a: 'Our goal is long-term pest elimination. We provide recommendations and preventive measures to reduce the chance of reinfestation. Maintenance plans are also available for ongoing protection.',
    icon: Shield,
  },
  {
    id: 'q8', category: 'Guarantees',
    q: 'Are you licensed and insured?',
    a: 'Yes. StrikeOn Pest Control is fully licensed and insured, giving our customers peace of mind and professional service they can trust.',
    icon: Award,
  },
  {
    id: 'q9', category: 'Safety & Treatments',
    q: 'Do I need to leave my house during treatment?',
    a: 'It depends on the treatment type. In many cases, homeowners can remain in the home. We will provide clear instructions before service begins.',
    icon: HomeIcon,
  },
  {
    id: 'q10', category: 'Pest ID',
    q: 'How do I know if I have bed bugs?',
    a: 'Common signs include: small bites on the skin, blood spots on bedding, tiny dark stains on mattresses, and live bugs near sleeping areas. Contact us for an inspection if you notice any of these signs.',
    icon: Bug,
  },
  {
    id: 'q11', category: 'Pest ID',
    q: 'How do I know if I have mice?',
    a: 'Signs of mice include: droppings, scratching noises in walls or ceilings, chewed wires or food packages, unpleasant odors, and nests or frass. We can inspect and identify entry points as part of our service.',
    icon: AlertTriangle,
  },
  {
    id: 'q12', category: 'Our Services',
    q: 'Do you provide commercial pest control?',
    a: 'Yes. We provide customized pest management programs for Restaurants, Offices, Retail Stores, Warehouses, Property Management Companies, and Industrial Facilities.',
    icon: Building,
  },
  {
    id: 'q13', category: 'Guarantees',
    q: 'Do you offer warranties or guarantees?',
    a: "We stand behind our work. Service warranties may vary depending on the pest type and treatment plan. We'll explain all warranty details before starting the job.",
    icon: CheckCircle,
  },
  {
    id: 'q14', category: 'Pricing & Booking',
    q: 'What payment methods do you accept?',
    a: 'We accept cash, debit, credit cards, and electronic transfers (Interac e-Transfer) for your convenience.',
    icon: DollarSign,
  },
  {
    id: 'q15', category: 'Pricing & Booking',
    q: 'Can I get a quote over the phone?',
    a: 'Yes. If you can describe the pest problem, property type, and location, we can often provide an estimated quote over the phone.',
    icon: MessageCircle,
  },
  {
    id: 'q16', category: 'Why StrikeOn',
    q: 'Why should I choose StrikeOn Pest Control?',
    a: 'Because we focus on: Fast Response (we act quickly to solve your pest problems), Affordable Pricing (quality service that fits your budget), Safe Treatments (eco-friendly solutions), Licensed Professionals (trained, certified, experienced experts), Excellent Customer Service, and Residential & Commercial Expertise.',
    icon: Star,
  },
];

const faqCategories = ['All', 'Pricing & Booking', 'Safety & Treatments', 'Our Services', 'Guarantees', 'Pest ID', 'Why StrikeOn'];

/** Logo watermark used as page-wide background */
function LogoWatermark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
      style={{ opacity: 0.03 }}
    >
      <img
        src="/logo.png"
        alt=""
        style={{
          width: '90vw',
          maxWidth: '900px',
          filter: 'grayscale(1) contrast(2)',
          userSelect: 'none',
        }}
      />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-brand-navy overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle, rgba(101,163,13,0.15) 1px, transparent 1px)`,
        backgroundSize: '32px 32px',
      }} />

      {/* Green top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lime via-brand-gold to-brand-lime" />

      <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-20 md:pt-20 md:pb-28">

        {/* BIG centered logo */}
        <div className="flex justify-center mb-10">
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full blur-3xl bg-brand-lime/20 scale-150" />
            <img
              src="/logo.png"
              alt="StrikeOn Pest Control"
              className="relative h-36 md:h-48 w-auto drop-shadow-2xl"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
        </div>

        {/* Tagline badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-brand-lime/20 border border-brand-lime/40 rounded-full px-5 py-2">
            <Shield size={14} className="text-brand-lime" />
            <span className="text-brand-lime text-sm font-bold tracking-widest uppercase">Your Shield Against Pests</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <div>
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Professional<br />
              <span className="text-brand-lime">Pest Control</span><br />
              You Can Trust!
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-3 font-semibold">
              🛡️ Safe. Effective. Affordable.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Licensed, insured, and eco-conscious pest control serving Regina and surrounding Saskatchewan communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="tel:2032025533"
                className="inline-flex items-center justify-center gap-2 bg-brand-lime hover:bg-brand-darkLime text-white font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-lg shadow-brand-lime/30"
              >
                <Phone size={20} /> Call 203-202-5533
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
              >
                Free Inspection <ArrowRight size={18} />
              </Link>
            </div>

            <div className="flex flex-wrap gap-5">
              {[
                { icon: Shield, label: 'Licensed & Insured' },
                { icon: Clock, label: '24/7 Emergency' },
                { icon: CheckCircle, label: 'Free Inspection' },
                { icon: Leaf, label: 'Eco-Friendly' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-gray-300 text-sm">
                  <Icon size={15} className="text-brand-lime" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '500+', label: 'Homes Protected', icon: HomeIcon },
              { value: '24/7', label: 'Emergency Service', icon: Clock },
              { value: '100%', label: 'Licensed & Insured', icon: Shield },
              { value: '5★', label: 'Customer Rating', icon: Star },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <Icon size={28} className="text-brand-lime mx-auto mb-3" />
                <div className="font-montserrat font-bold text-3xl text-white mb-1">{value}</div>
                <div className="text-gray-400 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="bg-brand-lime py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-white text-sm font-semibold">
          {[
            '✓ Saskatchewan Certified',
            '✓ Fully Licensed & Insured',
            '✓ Eco-Friendly Products',
            '✓ Same-Day Service Available',
            '✓ Free Estimates',
            '✓ 30-Day Guarantee',
          ].map(item => <span key={item}>{item}</span>)}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-brand-navy mt-2 mb-4">
            Complete Pest Control Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From bed bugs to rodents, wasps to termites — we have the expertise and products to handle any pest problem in your home or business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Bug;
            return (
              <Link
                key={service.id}
                to={service.link}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-brand-lime/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-lime/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-lime transition-colors duration-300">
                  <Icon size={22} className="text-brand-lime group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-montserrat font-semibold text-brand-navy text-lg mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{service.description}</p>
                <div className="mt-4 flex items-center text-brand-lime text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link to="/residential" className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors">
            View All Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Big logo showcase + Why Choose Us combined section */
function WhyChooseUs() {
  const reasons = [
    { icon: Award, title: 'Certified Professionals', desc: 'Ravikumar Patel is a government-certified pest applicator with deep knowledge of Saskatchewan-specific pest challenges.' },
    { icon: Shield, title: 'Licensed & Insured', desc: 'Fully licensed under Saskatchewan pesticide regulations with comprehensive liability insurance for your protection.' },
    { icon: Leaf, title: 'Eco-Friendly Options', desc: 'Low-toxicity and green pest control solutions safe for children, pets, and the environment.' },
    { icon: Clock, title: '24/7 Emergency Response', desc: "Pest emergencies don't follow a schedule. We're available around the clock for urgent situations." },
    { icon: ThumbsUp, title: '30-Day Guarantee', desc: 'If pests return within 30 days of treatment, we come back at no charge. We stand behind our work.' },
    { icon: Users, title: 'Local Saskatchewan Business', desc: 'We know the pests, the climate, and the community. Supporting a local business means faster, personalized service.' },
  ];

  return (
    <>
      {/* Big logo showcase banner */}
      <section className="relative bg-brand-navy py-16 overflow-hidden">
        {/* Large faded logo watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src="/logo.png"
            alt=""
            aria-hidden="true"
            className="w-full max-w-3xl opacity-5"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { icon: Shield, label: 'Licensed &\nCertified Professionals' },
              { icon: Leaf, label: 'Eco-Friendly &\nSafe Treatments' },
              { icon: DollarSign, label: 'Affordable\nPricing' },
              { icon: ThumbsUp, label: '100% Customer\nSatisfaction' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full border-2 border-brand-lime flex items-center justify-center">
                  <Icon size={24} className="text-brand-lime" />
                </div>
                <p className="font-semibold text-sm uppercase tracking-wide whitespace-pre-line">{label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="font-montserrat font-bold text-2xl md:text-3xl text-white">
              WHY CHOOSE <span className="text-brand-lime">STRIKEON PEST</span>?
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">Why StrikeOn</span>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-brand-navy mt-2 mb-6">
                Regina's Most Trusted<br />Pest Control Company
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We built StrikeOn on a simple promise: show up on time, do the job right, and treat every home and business like our own. As a local Saskatchewan company, we understand the specific pest pressures of our climate and community.
              </p>
              <div className="space-y-3">
                {[
                  'Government-certified pest applicator',
                  'Health Canada-registered products only',
                  'Transparent pricing — no hidden fees',
                  'Detailed service reports after every visit',
                  'Discreet, unmarked vehicles available',
                  'Bilingual service (English & Punjabi)',
                ].map(point => (
                  <div key={point} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-brand-lime shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-4">
                <Link to="/about" className="inline-flex items-center gap-2 bg-brand-lime hover:bg-brand-darkLime text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                  Meet the Team <ArrowRight size={16} />
                </Link>
                <a href="tel:2032025533" className="inline-flex items-center gap-2 border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                  <Phone size={16} /> Call Us
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reasons.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-5 bg-gray-50 rounded-2xl hover:bg-brand-navy hover:text-white group transition-all duration-300">
                  <Icon size={24} className="text-brand-lime mb-3" />
                  <h4 className="font-montserrat font-semibold text-brand-navy group-hover:text-white mb-2 transition-colors">{title}</h4>
                  <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PestProtection() {
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
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="font-montserrat font-bold text-brand-navy text-xl md:text-2xl mb-8 uppercase tracking-wide">
          We Protect Your Home & Business From:
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {pests.map(p => (
            <div key={p.label} className="flex flex-col items-center gap-2 bg-white border border-gray-100 rounded-2xl px-6 py-5 shadow-sm hover:border-brand-lime hover:shadow-md transition-all w-28">
              <span className="text-4xl">{p.emoji}</span>
              <span className="text-xs font-bold text-brand-navy uppercase tracking-wide">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 bg-brand-navy relative overflow-hidden">
      {/* Logo watermark */}
      <div className="absolute right-0 top-0 h-full flex items-center pointer-events-none opacity-5">
        <img src="/logo.png" alt="" aria-hidden="true" className="h-full w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">Customer Reviews</span>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mt-2 mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-1.5 mt-3">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-brand-gold fill-brand-gold" />)}
            <span className="text-gray-400 text-sm ml-2">5.0 average from 100+ reviews</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} className="text-brand-gold fill-brand-gold" />)}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-brand-lime rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Full FAQ section — all 16 Q&As with category tabs */
function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('q1');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? allFaqs
    : allFaqs.filter(f => f.category === activeCategory);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Faint logo watermark bottom-right */}
      <div className="absolute bottom-0 right-0 pointer-events-none opacity-[0.04]">
        <img src="/logo.png" alt="" aria-hidden="true" style={{ width: '500px', filter: 'grayscale(1)' }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">Got Questions?</span>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-brand-navy mt-2 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Everything you need to know about our pest control services. Can't find an answer? Call us at <a href="tel:2032025533" className="text-brand-lime font-semibold hover:underline">203-202-5533</a>.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {faqCategories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenId(null); }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-brand-lime text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3">
          {filtered.map((faq, idx) => {
            const Icon = faq.icon;
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-brand-lime shadow-md shadow-brand-lime/10'
                    : 'border-gray-100 shadow-sm hover:border-brand-lime/40'
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center gap-4 p-5 text-left bg-white"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-brand-lime' : 'bg-brand-lime/10'}`}>
                    <Icon size={18} className={isOpen ? 'text-white' : 'text-brand-lime'} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-brand-lime uppercase tracking-wide block mb-0.5">{faq.category}</span>
                    <span className="font-semibold text-brand-navy text-sm md:text-base">{faq.q}</span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-brand-lime shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 bg-white border-t border-brand-lime/10">
                    <div className="pl-14">
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-brand-navy rounded-3xl p-8 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none">
            <img src="/logo.png" alt="" aria-hidden="true" className="w-64" style={{ filter: 'brightness(0) invert(1)' }} />
          </div>
          <div className="relative">
            <h3 className="font-montserrat font-bold text-2xl mb-2">Still Have Questions?</h3>
            <p className="text-gray-400 mb-6">Our team is ready to help — call, text, or send us a message anytime.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:2032025533" className="inline-flex items-center justify-center gap-2 bg-brand-lime text-white font-bold px-7 py-3.5 rounded-xl hover:bg-brand-darkLime transition-colors">
                <Phone size={16} /> Call 203-202-5533
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
                Send a Message <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 bg-brand-lime relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 flex items-center justify-end pointer-events-none">
        <img src="/logo.png" alt="" aria-hidden="true" className="h-full w-auto" style={{ filter: 'brightness(0)' }} />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-4">
          Ready to Be Pest-Free?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
          Contact us today for a free inspection and quote. Same-day service available. No obligation. <strong>Don't let pests take over!</strong>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:2032025533" className="inline-flex items-center justify-center gap-2 bg-white text-brand-lime font-bold text-lg px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
            <Phone size={20} /> 203-202-5533
          </a>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-brand-navy text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-brand-navy/90 transition-colors">
            Book Free Inspection <ArrowRight size={18} />
          </Link>
        </div>
        <p className="mt-6 text-white/70 text-sm">📞 Available 24/7 · Serving Regina & Surrounding Areas · Fast Response Guaranteed</p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <LogoWatermark />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <WhyChooseUs />
      <PestProtection />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  );
}
