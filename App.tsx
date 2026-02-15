
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Agenda from './pages/Agenda';
import ExCo from './pages/ExCo';
import WordMaster from './pages/WordMaster';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Minutes from './pages/Minutes';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

// Placeholder page for Testimonials
const TestimonialsPlaceholder = () => (
  <div className="py-20 text-center bg-gray-50 min-h-screen">
    <h1 className="text-4xl font-bold text-[#004165]">Testimonials</h1>
    <p className="mt-4 text-gray-500">Complete list of our member journeys coming soon!</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/minutes" element={<Minutes />} />
            <Route path="/exco" element={<ExCo />} />
            <Route path="/word-master" element={<WordMaster />} />
            <Route path="/testimonials" element={<TestimonialsPlaceholder />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
