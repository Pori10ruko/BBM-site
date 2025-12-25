import React, { useState, createContext, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import BackgroundCanvas from './components/BackgroundCanvas';
import Home from './pages/Home';
import Works from './pages/Works';
import WorkDetail from './pages/WorkDetail';
import Services from './pages/Services';
import Technology from './pages/Technology';
import Contact from './pages/Contact';
import Spatial2ch from './pages/Spatial2ch';
import PillarDetail from './pages/PillarDetail';
import { Language } from './types';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'JP',
  setLang: () => {},
});

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('JP');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <Router>
        <ScrollToTop />
        <div className="relative min-h-screen text-black selection:bg-[#C9A66B] selection:text-white">
          <BackgroundCanvas />
          <Header />
          <main className="relative z-10">
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Works />} />
                <Route path="/works/:id" element={<WorkDetail />} />
                <Route path="/services" element={<Services />} />
                <Route path="/spatial-2ch" element={<Spatial2ch />} />
                <Route path="/technology" element={<Technology />} />
                <Route path="/contact" element={<Contact />} />
                {/* Pillar pages */}
                <Route path="/pillar/art" element={<PillarDetail type="Art" />} />
                <Route path="/pillar/public" element={<PillarDetail type="Public" />} />
                <Route path="/pillar/education" element={<PillarDetail type="Education" />} />
              </Routes>
            </PageTransition>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageContext.Provider>
  );
};

export default App;