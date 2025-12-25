import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageContext } from '../App';
import { Language } from '../types';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'ART', to: '/art' },
  { label: 'PUBLIC', to: '/public' },
  { label: 'EDUCATION', to: '/education' },
  { label: 'TECHNOLOGY', to: '/#technology' },
  { label: 'CONTACT', to: '/contact' },
] as const;

const Header: React.FC = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [markSrc, setMarkSrc] = useState('/images/bbm-logo-mark.jpg');
  const [markFallbackTried, setMarkFallbackTried] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-4 glass-header border-b border-black/5 shadow-sm' : 'py-8'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="group flex items-center space-x-2">
          {/* Mobile: mark -> text */}
          {markSrc ? (
            <img
              src={markSrc}
              alt="BBM"
              className="h-9 w-auto md:hidden"
              onError={() => {
                if (!markFallbackTried && markSrc.endsWith('.jpg')) {
                  setMarkFallbackTried(true);
                  setMarkSrc('/images/bbm-logo-mark.png');
                  return;
                }
                setMarkSrc('');
              }}
            />
          ) : (
            <span className="md:hidden text-3xl font-display font-bold tracking-tighter text-black">BBM</span>
          )}

          {/* Desktop: mark -> text */}
          {markSrc ? (
            <img
              src={markSrc}
              alt="BBM"
              className="hidden md:block h-9 w-auto"
              onError={() => {
                if (!markFallbackTried && markSrc.endsWith('.jpg')) {
                  setMarkFallbackTried(true);
                  setMarkSrc('/images/bbm-logo-mark.png');
                  return;
                }
                setMarkSrc('');
              }}
            />
          ) : (
            <span className="hidden md:block text-4xl font-display font-bold tracking-tighter text-black">BBM</span>
          )}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <nav className="flex items-center space-x-8">
            {navItems.map((item) => (
              (() => {
                const isActive =
                  item.to === '/contact'
                    ? location.pathname === '/contact'
                    : item.to === '/#technology'
                      ? location.pathname === '/' && location.hash === '#technology'
                      : location.pathname === item.to;

                return (
              <Link
                key={item.to}
                to={item.to}
                className={`text-[12px] font-semibold tracking-widest uppercase transition-colors px-2 py-1 ${isActive ? 'text-black' : 'text-gray-400 hover:text-black'}`}
              >
                {item.label}
              </Link>
                );
              })()
            ))}
          </nav>

          <div className="w-[1px] h-4 bg-black/10 mx-2" />

          {/* Language Switcher */}
          <div className="flex items-center space-x-4">
            {(['JP', 'EN', 'TW'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-[10px] font-bold tracking-widest transition-all px-1 ${lang === l ? 'text-black border-b border-[#C9A66B]' : 'text-gray-300 hover:text-black'}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden p-2 text-[10px] font-bold tracking-[0.2em] uppercase"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[90] flex flex-col items-center justify-center space-y-8"
          >
            {navItems.map((item) => (
              <Link 
                key={item.to} 
                to={item.to} 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-4xl font-display font-bold text-black hover:text-[#C9A66B] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex space-x-6 pt-12">
              {(['JP', 'EN', 'TW'] as Language[]).map((l) => (
                <button key={l} onClick={() => { setLang(l); setMobileMenuOpen(false); }} className={`text-sm font-bold ${lang === l ? 'text-[#C9A66B]' : 'text-gray-300'}`}>
                  {l}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;