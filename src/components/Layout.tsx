import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, ChevronDown, Shield, Clock, Star } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Services', path: '/residential',
    children: [
      { label: 'Residential Services', path: '/residential' },
      { label: 'Commercial Services', path: '/commercial' },
    ]
  },
  { label: 'Pest Library', path: '/pest-library' },
  { label: 'Areas Served', path: '/areas-served' },
  { label: 'Blog', path: '/blog' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top bar */}
      <div className="bg-brand-navy text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:8018012193" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
              <Phone size={13} /> <span>801-801-2193</span>
            </a>
            <a href="mailto:ravi@strikeonpest.com" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
              <Mail size={13} /> <span>ravi@strikeonpest.com</span>
            </a>
            <span className="flex items-center gap-1.5 text-gray-300">
              <MapPin size={13} /> <span>4822 Queen St., Regina, SK</span>
            </span>
          </div>
          <div className="flex items-center gap-6 text-gray-300">
            <span className="flex items-center gap-1.5"><Shield size={13} className="text-brand-lime" /> Licensed & Insured</span>
            <span className="flex items-center gap-1.5"><Clock size={13} className="text-brand-lime" /> 24/7 Service</span>
            <span className="flex items-center gap-1.5"><Star size={13} className="text-brand-gold" /> Free Inspection</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'}`}>
        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="StrikeOn Pest Control" className="h-12 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-brand-lime hover:bg-gray-50 transition-colors"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    {link.label} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {link.children.map(child => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-3 text-sm text-gray-700 hover:text-brand-navy hover:bg-brand-lime/10 first:rounded-t-xl last:rounded-b-xl transition-colors"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-brand-lime bg-brand-lime/10' : 'text-gray-700 hover:text-brand-lime hover:bg-gray-50'}`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:8018012193"
              className="flex items-center gap-2 bg-brand-lime hover:bg-brand-darkLime text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors"
            >
              <Phone size={15} /> Call Now
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors"
            >
              Free Inspection
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map(link =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      {link.label} <ChevronDown size={14} className={servicesOpen ? 'rotate-180' : ''} />
                    </button>
                    {servicesOpen && (
                      <div className="pl-4 mt-1 flex flex-col gap-1">
                        {link.children.map(child => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-lime hover:bg-gray-50 rounded-lg"
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? 'text-brand-lime bg-brand-lime/10' : 'text-gray-700 hover:text-brand-lime hover:bg-gray-50'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
              <div className="pt-3 mt-3 border-t border-gray-100 flex flex-col gap-2">
                <a href="tel:8018012193" className="flex items-center justify-center gap-2 bg-brand-lime text-white font-semibold py-3 rounded-lg text-sm">
                  <Phone size={15} /> Call 801-801-2193
                </a>
                <Link to="/contact" className="flex items-center justify-center gap-2 bg-brand-navy text-white font-semibold py-3 rounded-lg text-sm">
                  Book Free Inspection
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="StrikeOn Pest Control" className="h-14 w-auto brightness-0 invert" />
                <div>
                  <span className="font-montserrat font-bold text-white text-lg leading-tight block" style={{display:'none'}}>StrikeOn</span>
                  <span className="text-xs text-brand-lime font-semibold leading-none block" style={{display:'none'}}>PEST CONTROL</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Your Shield Against Pests. Licensed, insured, and proudly serving Regina and surrounding Saskatchewan communities.
              </p>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-brand-gold fill-brand-gold" />)}
                <span className="text-sm text-gray-400 ml-1">5-Star Rated</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-montserrat font-semibold text-white mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {['Bed Bug Control', 'Rodent Control', 'Cockroach Elimination', 'Ant Control', 'Wasp & Hornet Removal', 'Spider Control', 'Termite Treatment', 'Preventive Programs'].map(s => (
                  <li key={s}><Link to="/residential" className="hover:text-brand-lime transition-colors">{s}</Link></li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-montserrat font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {[
                  { label: 'About Us', path: '/about' },
                  { label: 'Blog & Tips', path: '/blog' },
                  { label: 'Pest Library', path: '/pest-library' },
                  { label: 'Areas Served', path: '/areas-served' },
                  { label: 'Helpful Videos', path: '/helpful-videos' },
                  { label: 'Free Downloads', path: '/downloads' },
                  { label: 'Contact Us', path: '/contact' },
                ].map(l => (
                  <li key={l.path}><Link to={l.path} className="hover:text-brand-lime transition-colors">{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-montserrat font-semibold text-white mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2.5">
                  <Phone size={15} className="text-brand-lime mt-0.5 shrink-0" />
                  <div>
                    <a href="tel:8018012193" className="hover:text-brand-lime transition-colors">801-801-2193</a>
                    <p className="text-xs text-gray-500">24/7 Emergency Line</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail size={15} className="text-brand-lime mt-0.5 shrink-0" />
                  <a href="mailto:ravi@strikeonpest.com" className="hover:text-brand-lime transition-colors">ravi@strikeonpest.com</a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin size={15} className="text-brand-lime mt-0.5 shrink-0" />
                  <span>4822 Queen St.,<br />Regina, SK S4S 6V8</span>
                </li>
              </ul>
              <div className="mt-5 p-3 bg-brand-lime/10 rounded-lg border border-brand-lime/20">
                <p className="text-xs text-brand-lime font-semibold">LICENSED & INSURED</p>
                <p className="text-xs text-gray-400 mt-0.5">Saskatchewan Certified Pest Applicator</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} StrikeOn Pest Control. All rights reserved. | Regina, Saskatchewan</p>
            <p>Owner: <span className="text-gray-400">Ravikumar Patel, Certified Pest Applicator</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
