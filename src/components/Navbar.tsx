import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NexeLogo } from './NexeLogo';

interface NavbarProps {
  onQuoteClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tjänster', href: '#tjanster' },
    { label: 'Så arbetar vi', href: '#sa-arbetar-vi' },
    { label: 'Om oss', href: '#om-oss' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
          : 'bg-white border-b border-slate-200 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#"
            id="brand-home-link"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002B49] rounded-sm py-1"
            aria-label="NEXE RIVNING Startsida"
          >
            <NexeLogo variant="dark" size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav
            id="desktop-navigation"
            className="hidden md:flex items-center gap-8"
            aria-label="Huvudnavigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-slate-700 hover:text-[#002B49] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#002B49] hover:after:w-full after:transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002B49] rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Button (Desktop) */}
          <div className="hidden sm:flex items-center">
            <button
              id="header-quote-btn"
              type="button"
              onClick={onQuoteClick}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#002B49] hover:bg-[#001D33] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#002B49]"
            >
              <span>Begär en offert</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle"
              type="button"
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
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-container"
          className="sm:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-4 pb-6 mt-3 space-y-4"
        >
          <nav className="flex flex-col space-y-2" aria-label="Mobil navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2.5 text-base font-medium text-slate-800 hover:text-[#002B49] hover:bg-slate-50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-100">
            <button
              id="mobile-quote-btn"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onQuoteClick();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#002B49] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-sm"
            >
              <span>Begär en offert</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
