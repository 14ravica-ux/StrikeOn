import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import Layout from './src/components/Layout';
import Home from './src/pages/Home';
import Services from './src/pages/Services';
import PestLibrary from './src/pages/PestLibrary';
import BranchFinder from './src/pages/BranchFinder';
import Blog from './src/pages/Blog';
import About from './src/pages/About';
import HelpfulVideos from './src/pages/HelpfulVideos';
import Downloads from './src/pages/Downloads';
import Contact from './src/pages/Contact';
import AreasServed from './src/pages/AreasServed';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/** Sticky mobile call + text bar */
function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="flex border-t border-white/10">
        <a
          href="tel:8018012193"
          className="flex-1 flex items-center justify-center gap-2 bg-brand-lime text-white font-bold py-4 text-base"
        >
          <Phone size={18} /> Call Now
        </a>
        <a
          href="sms:8018012193"
          className="flex-1 flex items-center justify-center gap-2 bg-brand-navy text-white font-bold py-4 text-base border-l border-white/10"
        >
          <span>💬</span> Text Us
        </a>
      </div>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/residential" element={<Services type="residential" />} />
          <Route path="/commercial" element={<Services type="commercial" />} />
          <Route path="/pest-library" element={<PestLibrary />} />
          <Route path="/branch-finder" element={<BranchFinder />} />
          <Route path="/areas-served" element={<AreasServed />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/helpful-videos" element={<HelpfulVideos />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
      <MobileCallBar />
    </Router>
  );
};

export default App;