import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Shield, MapPin, Clock, Facebook, Instagram, Twitter, Mail, ChevronDown } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [resourceMenuOpen, setResourceMenuOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setResourceMenuOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setResourceMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar - Desktop Only */}
      <div className="hidden md:block bg-brand-navy text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-brand-lime" /> Regina, SK & Surrounding Areas</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-brand-lime" /> Mon-Sat: 7am - 8pm</span>
          </div>
          <div className="font-bold flex items-center">
            <span className="mr-2">24/7 Emergency:</span>
            <a href="tel:306-510-0059" className="text-brand-lime hover:underline">(306) 510-0059</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Lockup */}
          <Link to="/" className="flex items-center gap-3 group">
             {/* Logo Icon - Placeholder for user's uploaded logo */}
             <img 
               src="https://placehold.co/100x100/0f172a/84cc16?text=S&font=montserrat" 
               alt="StrikeOn Pest Control" 
               className="h-12 w-auto object-contain group-hover:scale-105 transition-transform" 
             />
             
             {/* Text Branding */}
             <div className="flex flex-col justify-center">
                <div className="flex items-baseline leading-none">
                  <span className="font-montserrat font-black text-2xl text-brand-navy tracking-tight group-hover:text-brand-lime transition-colors">STRIKEON</span>
                  <span className="font-montserrat font-bold text-2xl text-brand-navy ml-1">PEST</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.15em] text-slate-500 font-bold leading-none mt-1 hidden sm:block">Pest Control Company</span>
             </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex space-x-6 items-center">
            <Link to="/residential" className="text-slate-700 hover:text-brand-lime font-semibold transition-colors text-sm xl:text-base">Residential</Link>
            <Link to="/commercial" className="text-slate-700 hover:text-brand-lime font-semibold transition-colors text-sm xl:text-base">Commercial</Link>
            
            {/* Resources Dropdown */}
            <div className="relative group" ref={dropdownRef}>
              <button 
                className="flex items-center text-slate-700 hover:text-brand-lime font-semibold transition-colors text-sm xl:text-base focus:outline-none"
                onClick={() => setResourceMenuOpen(!resourceMenuOpen)}
                onMouseEnter={() => setResourceMenuOpen(true)}
              >
                Resources <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {resourceMenuOpen && (
                <div 
                  className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-xl border border-slate-100 overflow-hidden z-50 animate-fade-in-up"
                  onMouseLeave={() => setResourceMenuOpen(false)}
                >
                  <Link to="/pest-library" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-lime transition-colors">Pest Library</Link>
                  <Link to="/helpful-videos" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-lime transition-colors">Helpful Videos</Link>
                  <Link to="/downloads" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-lime transition-colors">Downloads & Prep Sheets</Link>
                  <Link to="/blog" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-lime transition-colors">Blog & Tips</Link>
                </div>
              )}
            </div>

            <Link to="/areas-served" className="text-slate-700 hover:text-brand-lime font-semibold transition-colors text-sm xl:text-base">Areas Served</Link>
            <Link to="/about" className="text-slate-700 hover:text-brand-lime font-semibold transition-colors text-sm xl:text-base">About Us</Link>
            <Link to="/contact" className="text-slate-700 hover:text-brand-lime font-semibold transition-colors text-sm xl:text-base">Contact</Link>
            <Button size="sm" onClick={() => window.location.hash = "#quote"}>Get A Quote</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-brand-navy hover:bg-slate-100 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/residential" className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-lime rounded-md">Residential Services</Link>
            <Link to="/commercial" className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-lime rounded-md">Commercial Services</Link>
            <Link to="/areas-served" className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-lime rounded-md">Areas Served</Link>
            <Link to="/about" className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-lime rounded-md">About Us</Link>
            <Link to="/contact" className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-lime rounded-md">Contact Us</Link>
            
            <div className="border-t border-slate-100 my-2 pt-2">
              <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Resources</p>
              <Link to="/pest-library" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-brand-lime">Pest Library</Link>
              <Link to="/helpful-videos" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-brand-lime">Helpful Videos</Link>
              <Link to="/downloads" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-brand-lime">Downloads</Link>
              <Link to="/blog" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-brand-lime">Blog</Link>
            </div>

            <div className="pt-4 px-3">
              <Button fullWidth onClick={() => {
                setIsOpen(false);
                window.location.hash = "#quote";
              }}>
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center mb-4 gap-2">
              <Shield className="w-8 h-8 text-white" />
              <div className="flex flex-col">
                <span className="text-xl font-black font-montserrat leading-none">STRIKEON</span>
                <span className="text-sm font-bold text-brand-lime tracking-widest leading-none">PEST</span>
              </div>
            </div>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              Your shield against pests in Saskatchewan. We provide safe, effective, and eco-friendly pest control solutions for homes and businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-brand-lime transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-brand-lime transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-brand-lime transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-lime">Services</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link to="/residential" className="hover:text-white transition-colors">Residential Pest Control</Link></li>
              <li><Link to="/commercial" className="hover:text-white transition-colors">Commercial Extermination</Link></li>
              <li><Link to="/pest-library" className="hover:text-white transition-colors">Bed Bug Heat Treatment</Link></li>
              <li><Link to="/pest-library" className="hover:text-white transition-colors">Rodent Removal</Link></li>
              <li><Link to="/areas-served" className="hover:text-white transition-colors">Areas Served</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-lime">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-lime shrink-0" />
                <span>123 Industrial Drive,<br />Regina, SK S4P 3Y2</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brand-lime shrink-0" />
                <a href="tel:306-510-0059" className="hover:text-white">306-510-0059</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brand-lime shrink-0" />
                <a href="mailto:info@strikeonpest.ca" className="hover:text-white">info@strikeonpest.ca</a>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-lime">Certifications</h3>
            <div className="grid grid-cols-3 gap-2">
               {/* Placeholders for certification logos */}
               <div className="bg-white/10 h-12 rounded flex items-center justify-center text-xs text-center text-slate-400 p-1">CPMA Member</div>
               <div className="bg-white/10 h-12 rounded flex items-center justify-center text-xs text-center text-slate-400 p-1">Bonded</div>
               <div className="bg-white/10 h-12 rounded flex items-center justify-center text-xs text-center text-slate-400 p-1">Insured</div>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Pest Management Licence #12345
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} StrikeOn Pest Control. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const StickyMobileCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-40 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] border-t border-gray-200 p-3 flex gap-3">
       <a href="tel:306-510-0059" className="flex-1 bg-brand-navy text-white font-bold py-3 rounded-md flex items-center justify-center shadow">
          <Phone className="w-5 h-5 mr-2" />
          Call Now
       </a>
       <button onClick={() => window.location.hash = "#quote"} className="flex-1 bg-brand-lime text-brand-navy font-bold py-3 rounded-md shadow">
          Get Quote
       </button>
    </div>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};