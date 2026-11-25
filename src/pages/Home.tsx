import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, Shield, Clock, CheckCircle, Star, ChevronRight,
  Bug, Home as HomeIcon, Building, Zap, AlertTriangle, ArrowRight,
  Award, Users, Leaf, ThumbsUp, ChevronDown, DollarSign,
  MapPin, Menu, X
} from 'lucide-react';
import { services, testimonials, areasServed } from '../data';

/* ─── STICKY CALL BAR (mobile) ─── */
function StickyCallBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a href="tel:2032025533"
        className="flex items-center justify-center gap-3 bg-brand-lime text-white font-black text-lg py-4 shadow-2xl active:bg-brand-darkLime">
        <Phone size={22} className="animate-pulse" />
        Call Now — 203-202-5533
      </a>
    </div>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative bg-brand-navy overflow-hidden">
      {/* subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '48px 48px' }} />

      <div className="relative max-w-7xl mx-auto px-4 pt-14 pb-0">
        <div className="grid lg:grid-cols-2 gap-10 items-end">

          {/* LEFT */}
          <div className="pb-14 lg:pb-20">
            {/* trust pill */}
            <div className="inline-flex items-center gap-2 bg-brand-lime/20 border border-brand-lime/40 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-brand-lime rounded-full animate-pulse" />
              <span className="text-brand-lime font-bold text-xs uppercase tracking-widest">Regina's Trusted Pest Experts</span>
            </div>

            <h1 className="font-montserrat font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-5" style={{ textWrap: 'balance' }}>
              Professional<br />
              <span className="text-brand-lime">Pest Control</span><br />
              You Can Trust.
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              Licensed, insured, and ready same-day. We eliminate mice, bed bugs, cockroaches, wasps, and more — fast and guaranteed.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a href="tel:2032025533"
                className="flex items-center justify-center gap-2.5 bg-brand-lime hover:bg-brand-darkLime text-white font-black text-lg px-7 py-4 rounded-xl transition-all shadow-lg shadow-brand-lime/30 hover:shadow-brand-lime/50 hover:-translate-y-0.5">
                <Phone size={20} />
                Call 203-202-5533
              </a>
              <Link to="/contact"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-lg px-7 py-4 rounded-xl transition-all">
                Free Inspection <ArrowRight size={18} />
              </Link>
            </div>

            {/* trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                '✓ Licensed & Insured',
                '✓ Same-Day Service',
                '✓ 30-Day Guarantee',
                '✓ Free Inspection',
              ].map(b => (
                <span key={b} className="text-gray-400 text-sm font-semibold">{b}</span>
              ))}
            </div>
          </div>

          {/* RIGHT — flyer image flush to bottom */}
          <div className="relative flex justify-center lg:justify-end items-end">
            {/* licensed badge */}
            <div className="absolute top-6 right-4 z-10 bg-brand-lime rounded-full w-20 h-20 flex flex-col items-center justify-center text-center shadow-xl border-4 border-white/20">
              <Shield size={16} className="text-white mb-0.5" />
              <p className="text-white font-black text-[9px] leading-tight uppercase">Licensed<br />&amp; Insured</p>
              <CheckCircle size={12} className="text-white mt-0.5" />
            </div>
            <img
              src="/flyer.jpg"
              alt="StrikeOn certified pest control technician serving Regina SK"
              className="w-full max-w-sm lg:max-w-none lg:w-[90%] object-cover object-top rounded-t-2xl"
              style={{ maxHeight: '520px' }}
            />
          </div>
        </div>
      </div>

      {/* lime bottom stripe */}
      <div className="h-1.5 bg-brand-lime" />
    </section>
  );
}

/* ─── SOCIAL PROOF BAR ─── */
function ProofBar() {
  const items = [
    { icon: Star, label: '5-Star Rated', sub: '100+ Reviews' },
    { icon: Shield, label: 'Licensed & Insured', sub: 'SK Certified' },
    { icon: Clock, label: 'Same-Day Available', sub: '24/7 Emergency' },
    { icon: CheckCircle, label: '30-Day Guarantee', sub: 'We Come Back Free' },
  ];
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
          {items.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3 py-4 px-4 md:px-6">
              <div className="w-10 h-10 bg-brand-lime/10 rounded-lg flex items-center justify-center shrink-0">
                <Icon size={18} className="text-brand-lime" />
              </div>
              <div>
                <p className="font-bold text-brand-navy text-sm leading-tight">{label}</p>
                <p className="text-gray-400 text-xs">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PEST ICONS ─── */
function PestSection() {
  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-brand-lime font-bold text-xs uppercase tracking-widest mb-2">Complete Coverage</p>
        <h2 className="font-montserrat font-black text-brand-navy text-3xl md:text-4xl mb-3">
          We Protect You From Every Pest
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-10">
          From bed bugs to rodents, spiders to termites — one call gets you a licensed technician and a plan.
        </p>
        <img
          src="/pest-icons.png"
          alt="Pest control for Rodents, Bed Bugs, Cockroaches, Termites, Ants, Spiders in Regina SK"
          className="mx-auto max-w-2xl w-full"
        />
        <div className="mt-8">
          <a href="tel:2032025533"
            className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-lime text-white font-bold px-7 py-3.5 rounded-xl transition-colors text-sm">
            <Phone size={16} /> Call for Free Assessment
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ─── */
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Bug, Home: HomeIcon, Building, Zap, AlertTriangle, Shield, Star
};

function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-brand-lime font-bold text-xs uppercase tracking-widest mb-2">What We Do</p>
          <h2 className="font-montserrat font-black text-brand-navy text-3xl md:text-4xl mb-3">
            Complete Pest Control Solutions
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Residential, commercial, and emergency pest services — all backed by our 30-day guarantee.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc) => {
            const Icon = iconMap[svc.icon] || Bug;
            return (
              <Link key={svc.id} to={svc.link}
                className="group relative bg-gray-50 hover:bg-brand-navy rounded-2xl p-6 border-2 border-transparent hover:border-brand-lime transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-brand-lime/10 group-hover:bg-brand-lime rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon size={22} className="text-brand-lime group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-montserrat font-bold text-brand-navy group-hover:text-white text-base mb-2 transition-colors">{svc.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed transition-colors line-clamp-3">{svc.description}</p>
                <div className="flex items-center gap-1 mt-4 text-brand-lime text-xs font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ChevronRight size={14} />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link to="/residential"
            className="inline-flex items-center gap-2 border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-bold px-8 py-3.5 rounded-xl transition-colors">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ─── */
function HowItWorks() {
  const steps = [
    { n: '01', title: 'Call or Book Online', desc: 'Reach us at 203-202-5533 or fill out our form. We respond fast — same-day available.' },
    { n: '02', title: 'Free Inspection', desc: 'Our licensed technician assesses your property, identifies the pest, and recommends a plan.' },
    { n: '03', title: 'Treatment', desc: 'Safe, targeted treatment using Health Canada-approved products. Most jobs done in 1–2 hours.' },
    { n: '04', title: '30-Day Guarantee', desc: 'If pests return within 30 days, we come back — free of charge, no questions asked.' },
  ];
  return (
    <section className="bg-brand-navy py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-brand-lime font-bold text-xs uppercase tracking-widest mb-2">Our Process</p>
          <h2 className="font-montserrat font-black text-white text-3xl md:text-4xl">
            How It Works
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-brand-lime/20 z-0" style={{ width: 'calc(100% - 48px)', left: '48px' }} />
              )}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full border-2 border-brand-lime flex items-center justify-center mb-4 bg-brand-navy">
                  <span className="font-montserrat font-black text-brand-lime text-lg">{s.n}</span>
                </div>
                <h3 className="font-montserrat font-bold text-white text-base mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WHY STRIKEON ─── */
function WhyUs() {
  const reasons = [
    { icon: Clock, title: 'Fast Response', desc: 'Same-day and emergency appointments available across Regina and surrounding areas.' },
    { icon: DollarSign, title: 'Transparent Pricing', desc: 'Free estimates, no hidden fees. Know your cost before we start.' },
    { icon: Leaf, title: 'Safe Treatments', desc: 'Health Canada-registered products. Eco-friendly options available. Safe for kids and pets.' },
    { icon: Award, title: 'SK Licensed', desc: 'Government-certified pest applicator. Fully insured and compliant.' },
    { icon: ThumbsUp, title: '30-Day Guarantee', desc: 'We come back free within 30 days if any pest returns. Period.' },
    { icon: Building, title: 'Residential & Commercial', desc: 'From single homes to restaurants, warehouses, and apartment buildings.' },
  ];
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0">
            <p className="text-brand-lime font-bold text-xs uppercase tracking-widest mb-2">Why StrikeOn</p>
            <h2 className="font-montserrat font-black text-brand-navy text-3xl md:text-4xl mb-5" style={{ textWrap: 'balance' }}>
              Your Shield Against Pests in Regina, SK
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              We're a local Saskatchewan company — not a franchise. That means faster response, honest pricing, and a technician who actually knows Regina's pest seasons and conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:2032025533"
                className="flex items-center justify-center gap-2 bg-brand-lime hover:bg-brand-darkLime text-white font-black px-6 py-3.5 rounded-xl transition-colors">
                <Phone size={16} /> 203-202-5533
              </a>
              <Link to="/about"
                className="flex items-center justify-center gap-2 border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-bold px-6 py-3.5 rounded-xl transition-colors">
                About Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-5 border border-gray-100 hover:border-brand-lime hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-brand-lime/10 rounded-lg flex items-center justify-center mb-3">
                  <Icon size={18} className="text-brand-lime" />
                </div>
                <h4 className="font-bold text-brand-navy text-sm mb-1">{title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-brand-lime font-bold text-xs uppercase tracking-widest mb-2">Real Customers</p>
          <h2 className="font-montserrat font-black text-brand-navy text-3xl md:text-4xl mb-3">
            What Regina Homeowners Say
          </h2>
          <div className="flex justify-center items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
            </div>
            <span className="text-gray-400 text-sm font-medium">5.0 · 100+ Google Reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map(t => (
            <div key={t.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-brand-lime transition-colors">
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-9 h-9 bg-brand-navy rounded-full flex items-center justify-center text-white font-black text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-brand-navy text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs flex items-center gap-1"><MapPin size={10} />{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICE AREAS (Local SEO) ─── */
function ServiceAreas() {
  return (
    <section className="bg-brand-navy py-14">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-brand-lime font-bold text-xs uppercase tracking-widest mb-2">Local Coverage</p>
        <h2 className="font-montserrat font-black text-white text-3xl md:text-4xl mb-3">
          Serving Regina &amp; Surrounding Saskatchewan
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          We cover Regina and all surrounding communities. Not sure if we service your area? Just call.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {areasServed.map(area => (
            <span key={area}
              className="bg-white/5 border border-white/10 hover:border-brand-lime text-gray-300 hover:text-white text-sm font-medium px-4 py-1.5 rounded-full transition-colors cursor-default">
              {area}
            </span>
          ))}
        </div>
        <a href="tel:2032025533"
          className="inline-flex items-center gap-2 bg-brand-lime hover:bg-brand-darkLime text-white font-black px-8 py-4 rounded-xl transition-colors text-lg">
          <Phone size={20} /> Call 203-202-5533
        </a>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
const faqs = [
  { q: 'How much does pest control cost?', a: 'Pricing depends on the pest type, severity, and property size. We offer transparent, upfront quotes — no surprise fees. Call 203-202-5533 for a free estimate.' },
  { q: 'Do you offer a guarantee?', a: 'Yes. Most treatments include a 30-day warranty. If pests return within that period, we come back at no extra charge.' },
  { q: 'Are your treatments safe for kids and pets?', a: 'Absolutely. We use Health Canada-registered products applied by a certified professional. We also offer eco-friendly options and always advise on re-entry times.' },
  { q: 'How quickly can you respond?', a: 'We offer same-day service when available, and 24/7 emergency response for urgent situations like wasp nests or large infestations.' },
  { q: 'Are you licensed and insured?', a: 'Yes. StrikeOn is fully licensed by the Government of Saskatchewan and carries comprehensive liability insurance.' },
  { q: 'Do you serve areas outside Regina?', a: 'Yes — we cover Moose Jaw, Weyburn, White City, Pilot Butte, Estevan, and many other Saskatchewan communities. Call to confirm your area.' },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-brand-lime font-bold text-xs uppercase tracking-widest mb-2">Common Questions</p>
          <h2 className="font-montserrat font-black text-brand-navy text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className={`rounded-xl border-2 overflow-hidden transition-all ${open === i ? 'border-brand-lime' : 'border-gray-200 bg-white'}`}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white">
                <span className="font-bold text-brand-navy text-sm pr-2">{f.q}</span>
                <ChevronDown size={18} className={`text-brand-lime shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 bg-white border-t border-gray-100">
                  <p className="text-gray-600 text-sm leading-relaxed pt-3">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-8">
          Still have questions?{' '}
          <a href="tel:2032025533" className="text-brand-lime font-bold hover:underline">Call 203-202-5533</a>
          {' '}— we're happy to help.
        </p>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─── */
function FinalCTA() {
  return (
    <section className="bg-brand-lime py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-montserrat font-black text-white text-3xl md:text-5xl mb-4" style={{ textWrap: 'balance' }}>
          Don't Let Pests Take Over.
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Free inspection. Same-day service. 30-day guarantee. Serving Regina and all of southern Saskatchewan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:2032025533"
            className="flex items-center justify-center gap-3 bg-brand-navy text-white font-black text-xl px-8 py-5 rounded-xl hover:bg-opacity-90 transition-all shadow-xl">
            <Phone size={24} /> 203-202-5533
          </a>
          <Link to="/contact"
            className="flex items-center justify-center gap-2 bg-white text-brand-navy font-black text-lg px-8 py-5 rounded-xl hover:bg-gray-100 transition-all shadow-xl">
            Book Free Inspection <ArrowRight size={20} />
          </Link>
        </div>
        <p className="text-white/60 text-sm mt-6 flex items-center justify-center gap-4 flex-wrap">
          <span>✓ No obligation</span>
          <span>✓ Upfront pricing</span>
          <span>✓ Licensed &amp; insured</span>
          <span>✓ 30-day guarantee</span>
        </p>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <>
      <StickyCallBar />
      <Hero />
      <ProofBar />
      <PestSection />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <FinalCTA />
    </>
  );
}
