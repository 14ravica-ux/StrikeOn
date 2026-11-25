import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Shield, Award, Leaf, Clock, CheckCircle, Users, ArrowRight, Star } from 'lucide-react';

const values = [
  { icon: Shield, title: 'Integrity', desc: "We're honest about what you need — and what you don't. No upselling, no scare tactics." },
  { icon: Award, title: 'Expertise', desc: 'Certified, trained, and continuously learning to stay ahead of the latest pest control science.' },
  { icon: Leaf, title: 'Responsibility', desc: "We use the safest effective products and follow strict environmental guidelines on every job." },
  { icon: Users, title: 'Community', desc: 'As a local Saskatchewan business, we care about the communities we serve and the families in them.' },
];

const certifications = [
  'Saskatchewan Certified Pest Applicator',
  'Licensed under SK Pest Control Products Act',
  'Health Canada Registered Pesticide User',
  'Fully Liability Insured',
  'IPM-Trained Professional',
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">Our Story</span>
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-white mt-2 mb-5">
              About StrikeOn Pest Control
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              A locally owned, Saskatchewan-licensed pest control company built on the belief that every family deserves to feel safe and comfortable in their home — without worrying about what's living in the walls.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Profile card */}
            <div className="bg-gray-50 rounded-3xl p-8 text-center">
              <div className="w-28 h-28 rounded-full bg-brand-navy mx-auto mb-5 flex items-center justify-center">
                <span className="font-montserrat font-bold text-5xl text-brand-lime">R</span>
              </div>
              <h3 className="font-montserrat font-bold text-brand-navy text-2xl mb-1">Ravikumar Patel</h3>
              <p className="text-brand-lime font-semibold mb-4">Owner & Certified Pest Applicator</p>
              <div className="flex items-center justify-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-brand-gold fill-brand-gold" />)}
              </div>
              <div className="text-left space-y-3">
                {certifications.map(cert => (
                  <div key={cert} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle size={15} className="text-brand-lime mt-0.5 shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
              <a href="tel:2032025533" className="mt-6 inline-flex items-center gap-2 bg-brand-lime text-white font-bold px-6 py-3 rounded-xl hover:bg-brand-darkLime transition-colors w-full justify-center">
                <Phone size={16} /> 203-202-5533
              </a>
            </div>

            {/* Text */}
            <div>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-brand-navy mb-5">
                Why I Started StrikeOn
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Hi, I'm Ravi — the owner and certified pest applicator behind StrikeOn Pest Control. I started this business because I saw a gap in the Regina pest control market: homeowners and businesses deserved a licensed, professional, and honest service provider who would treat them fairly.
                </p>
                <p>
                  Too many pest control calls I heard about involved technicians who weren't certified, used products incorrectly, or applied unnecessary treatments to inflate bills. I wanted to change that.
                </p>
                <p>
                  StrikeOn is built on expertise and integrity. Every treatment I perform follows Health Canada guidelines and Saskatchewan pesticide regulations. I use the right product at the right rate — nothing more, nothing less.
                </p>
                <p>
                  Whether it's a family dealing with a bed bug nightmare or a restaurant needing a reliable commercial program, I approach every job with the same care I would want for my own home.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-5">
                {[
                  { value: '500+', label: 'Properties Treated' },
                  { value: '5★', label: 'Average Rating' },
                  { value: '30 Day', label: 'Service Guarantee' },
                  { value: '24/7', label: 'Emergency Available' },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-gray-50 rounded-2xl p-4 text-center">
                    <div className="font-montserrat font-bold text-brand-lime text-2xl">{value}</div>
                    <div className="text-gray-500 text-sm mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">What Drives Us</span>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-brand-navy mt-2">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-brand-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={26} className="text-brand-lime" />
                </div>
                <h4 className="font-montserrat font-bold text-brand-navy text-lg mb-2">{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-4">Our Commitment to You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Transparent Pricing',
                desc: "We quote before we start, and there are no surprise charges on your invoice. The price you're quoted is the price you pay."
              },
              {
                icon: Clock,
                title: 'On-Time, Every Time',
                desc: "We respect your time. If we can't make our scheduled window, we'll call you in advance — not after you've waited."
              },
              {
                icon: Award,
                title: '30-Day Guarantee',
                desc: "If the pests come back within 30 days of treatment, we return at no charge. Period. We stand behind our work."
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <Icon size={28} className="text-brand-lime mb-4" />
                <h4 className="font-montserrat font-semibold text-white text-lg mb-2">{title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-brand-lime">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl text-white mb-4">Ready to Work with Us?</h2>
          <p className="text-white/90 mb-7">Get your free inspection today. No commitment, no pressure — just honest advice from a certified professional.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:2032025533" className="inline-flex items-center justify-center gap-2 bg-white text-brand-lime font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors text-lg">
              <Phone size={20} /> 203-202-5533
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-brand-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-navy/90 transition-colors text-lg">
              Book Free Inspection <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
