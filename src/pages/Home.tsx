import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, Shield, Clock, CheckCircle, Star, ChevronRight,
  Bug, Home as HomeIcon, Building, Zap, AlertTriangle, ArrowRight,
  Award, Users, Leaf, ThumbsUp, ChevronDown
} from 'lucide-react';
import { services, testimonials, faqs } from '../data';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Bug, Home: HomeIcon, Building, Zap, AlertTriangle, Shield, Star
};

function HeroSection() {
  return (
    <section className="relative bg-brand-navy overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Green accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lime via-brand-gold to-brand-lime" />

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-lime/20 border border-brand-lime/30 rounded-full px-4 py-1.5 mb-6">
              <Shield size={14} className="text-brand-lime" />
              <span className="text-brand-lime text-xs font-semibold tracking-wide uppercase">Saskatchewan's Trusted Pest Experts</span>
            </div>

            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Shield<br />
              <span className="text-brand-lime">Against Pests</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Licensed, insured, and eco-conscious pest control for Regina and surrounding Saskatchewan communities. We eliminate pests — guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="tel:8018012193"
                className="inline-flex items-center justify-center gap-2 bg-brand-lime hover:bg-brand-darkLime text-white font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-lg shadow-brand-lime/30 hover:shadow-brand-lime/50"
              >
                <Phone size={20} /> Call 801-801-2193
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
              >
                Free Inspection <ArrowRight size={18} />
              </Link>
            </div>

            <div className="flex flex-wrap gap-6">
              {[
                { icon: Shield, label: 'Licensed & Insured' },
                { icon: Clock, label: '24/7 Emergency' },
                { icon: CheckCircle, label: '30-Day Guarantee' },
                { icon: Leaf, label: 'Eco-Friendly Options' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-gray-300 text-sm">
                  <Icon size={16} className="text-brand-lime" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - stat cards */}
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
          ].map(item => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
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
          <Link
            to="/residential"
            className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
          >
            View All Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: 'Certified Professionals',
      desc: 'Ravikumar Patel is a government-certified pest applicator with deep knowledge of Saskatchewan-specific pest challenges.'
    },
    {
      icon: Shield,
      title: 'Licensed & Insured',
      desc: 'Fully licensed under Saskatchewan pesticide regulations and carrying comprehensive liability insurance for your protection.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Options',
      desc: 'We offer low-toxicity and green pest control solutions that are safe for children, pets, and the environment.'
    },
    {
      icon: Clock,
      title: '24/7 Emergency Response',
      desc: "Pest emergencies don't follow a schedule. We're available around the clock for urgent situations."
    },
    {
      icon: ThumbsUp,
      title: '30-Day Guarantee',
      desc: "If pests return within 30 days of treatment, we come back at no charge. We stand behind our work."
    },
    {
      icon: Users,
      title: 'Local Saskatchewan Business',
      desc: 'We know the pests, the climate, and the community. Supporting a local business means faster, more personalized service.'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
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
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-brand-lime hover:bg-brand-darkLime text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Meet the Team <ArrowRight size={16} />
              </Link>
              <a
                href="tel:8018012193"
                className="inline-flex items-center gap-2 border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <Phone size={16} /> Call Us
              </a>
            </div>
          </div>

          {/* Right grid */}
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
  );
}

function Testimonials() {
  return (
    <section className="py-20 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4">
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

function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const preview = faqs.slice(0, 5);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">Got Questions?</span>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-brand-navy mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {preview.map(faq => (
            <div key={faq.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id ?? null)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-brand-navy pr-4">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={`text-brand-lime shrink-0 transition-transform duration-200 ${openId === faq.id ? 'rotate-180' : ''}`}
                />
              </button>
              {openId === faq.id && (
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 bg-brand-lime">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-4">
          Ready to Be Pest-Free?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
          Contact us today for a free inspection and quote. Same-day service available. No obligation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:8018012193"
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-lime font-bold text-lg px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
          >
            <Phone size={20} /> 801-801-2193
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-brand-navy text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-brand-navy/90 transition-colors"
          >
            Book Free Inspection <ArrowRight size={18} />
          </Link>
        </div>
        <p className="mt-6 text-white/70 text-sm">
          📞 Available 24/7 · Serving Regina & Surrounding Areas · Fast Response Guaranteed
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  );
}
