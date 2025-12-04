import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { PestLibrary } from './pages/PestLibrary';
import { BranchFinder } from './pages/BranchFinder';
import { Blog } from './pages/Blog';
import { About } from './pages/About';
import { HelpfulVideos } from './pages/HelpfulVideos';
import { Downloads } from './pages/Downloads';
import { Contact } from './pages/Contact';
import { AreasServed } from './pages/AreasServed';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

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
    </Router>
  );
};

export default App;