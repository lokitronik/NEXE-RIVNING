import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Linkedin, Instagram } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { NexeLogo } from './NexeLogo';

interface NavbarProps {
  onQuoteClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navLinks = [
    { label: 'Om oss', href: '#om-oss', id: 'om-oss' },
    { label: 'Tjänster', href: '#tjanster', id: 'tjanster' },
    { label: 'Så arbetar vi', href: '#sa-arbetar-vi', id: 'sa-arbetar-vi' },
    { label: 'Kontakt', href: '#kontakt', id: 'kontakt' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section spy
  useEffect(() => {
    const sectionIds = ['hero-section', 'om-oss', 'tjanster', 'sa-arbetar-vi', 'kontakt'];
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'hero-section') {
            setActiveSection('');
          } else {
            setActiveSection(entry.target.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0.1,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5 sm:py-3'
          : 'bg-white/95 backdrop-blur-xs border-b border-slate-200/60 py-3.5 sm:py-4.5'
      }`}
    >
      {/* Dynamic top scroll progress bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#002B49] via-[#0D3B66] to-[#CBD5E1] origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          {/* Brand Logo with gentle hover pulse */}
          <motion.a
            href="#"
            id="brand-home-link"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002B49] rounded-sm py-1 shrink-0"
            aria-label="NEXE RIVNING Startsida"
          >
            <NexeLogo variant="dark" size="md" />
          </motion.a>

          {/* Desktop Navigation */}
          <nav
            id="desktop-navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-100/70 p-1 rounded-full border border-slate-200/60"
            aria-label="Huvudnavigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative text-xs lg:text-sm font-semibold px-3.5 py-1.5 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002B49] ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 hover:text-[#002B49]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[#002B49] rounded-full shadow-xs"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Header Action Button (visible on md and up) */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {/* Social Profiles: LinkedIn & Instagram */}
            <div className="inline-flex items-center gap-1.5 ml-0.5">
              <a
                href="https://www.linkedin.com/company/nexe-group-ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="notranslate inline-flex items-center justify-center p-2 rounded-full border border-slate-200/90 bg-slate-50/90 hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/40 text-slate-600 hover:text-[#0A66C2] transition-all duration-200 shadow-xs hover:shadow-sm"
                translate="no"
                aria-label="Besök NEXE GROUP AB på LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 shrink-0" />
              </a>

              <a
                href="https://www.instagram.com/nexegroupab"
                target="_blank"
                rel="noopener noreferrer"
                className="notranslate inline-flex items-center justify-center p-2 rounded-full border border-slate-200/90 bg-slate-50/90 hover:bg-pink-500/10 hover:border-pink-500/40 text-slate-600 hover:text-pink-600 transition-all duration-200 shadow-xs hover:shadow-sm"
                translate="no"
                aria-label="Besök NEXE GROUP AB på Instagram"
                title="Instagram"
              >
                <Instagram className="w-4 h-4 shrink-0" />
              </a>
            </div>

            <motion.button
              id="header-quote-btn"
              type="button"
              onClick={onQuoteClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#002B49] hover:bg-[#001D33] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#002B49] overflow-hidden"
            >
              {/* Subtle hover shimmer */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <span className="relative z-10">Begär en offert</span>
              <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <motion.button
              id="mobile-menu-toggle"
              type="button"
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#002B49] hover:bg-slate-100 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002B49]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Stäng meny' : 'Öppna meny'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-container"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden overflow-hidden bg-white/98 backdrop-blur-lg border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 mt-2 space-y-3"
          >
            <nav className="flex flex-col space-y-1" aria-label="Mobil navigation">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.2 }}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold rounded-md transition-colors ${
                      isActive
                        ? 'bg-[#002B49] text-white'
                        : 'text-slate-800 hover:text-[#002B49] hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </motion.a>
                );
              })}
            </nav>
            <div className="pt-2 border-t border-slate-100 space-y-3">
              <motion.button
                id="mobile-quote-btn"
                type="button"
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onQuoteClick();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#002B49] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors shadow-sm"
              >
                <span>Begär en offert</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </motion.button>

              <div className="flex items-center justify-center gap-2 pt-2 border-t border-slate-100">
                <span className="text-xs text-slate-400 mr-1">Följ oss:</span>
                <a
                  href="https://www.linkedin.com/company/nexe-group-ab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="notranslate inline-flex items-center justify-center p-2 rounded-full border border-slate-200/90 bg-slate-50/90 hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/40 text-slate-600 hover:text-[#0A66C2] transition-all duration-200 shadow-xs hover:shadow-sm"
                  translate="no"
                  aria-label="Besök NEXE GROUP AB på LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 shrink-0" />
                </a>

                <a
                  href="https://www.instagram.com/nexegroupab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="notranslate inline-flex items-center justify-center p-2 rounded-full border border-slate-200/90 bg-slate-50/90 hover:bg-pink-500/10 hover:border-pink-500/40 text-slate-600 hover:text-pink-600 transition-all duration-200 shadow-xs hover:shadow-sm"
                  translate="no"
                  aria-label="Besök NEXE GROUP AB på Instagram"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
