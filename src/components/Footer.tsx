import React from 'react';
import { ExternalLink, ArrowUp, Linkedin, Instagram } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { NexeLogo } from './NexeLogo';

export const Footer: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const navLinks = [
    { label: 'Om oss', href: '#om-oss' },
    { label: 'Tjänster', href: '#tjanster' },
    { label: 'Så arbetar vi', href: '#sa-arbetar-vi' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="site-footer"
      className="bg-[#001D33] text-slate-300 py-6 sm:py-7 border-t border-white/10 relative"
      aria-label="Webbplatsens sidfot"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Main single-tier row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & parent company */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs text-slate-400">
            <a
              href="#"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm inline-block"
              aria-label="NEXE RIVNING Startsida"
            >
              <NexeLogo variant="light" size="sm" />
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <a
              href="https://nexegroup.se"
              target="_blank"
              rel="noopener noreferrer"
              translate="no"
              className="notranslate inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors underline decoration-slate-600 hover:decoration-white underline-offset-2"
            >
              <span>NEXE RIVNING · En del av NEXE GROUP AB</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
            </a>
          </div>

          {/* Quick nav links */}
          <nav className="flex items-center gap-4 sm:gap-6 text-xs" aria-label="Sidfotsnavigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials & Back to top button */}
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/company/nexe-group-ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="notranslate inline-flex items-center justify-center p-2 rounded-full border border-white/10 bg-white/5 hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/50 text-slate-300 hover:text-[#0A66C2] transition-all duration-200 shadow-xs hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]"
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
              className="notranslate inline-flex items-center justify-center p-2 rounded-full border border-white/10 bg-white/5 hover:bg-pink-500/20 hover:border-pink-500/50 text-slate-300 hover:text-pink-400 transition-all duration-200 shadow-xs hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
              translate="no"
              aria-label="Besök NEXE GROUP AB på Instagram"
              title="Instagram"
            >
              <Instagram className="w-4 h-4 shrink-0" />
            </a>

            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors ml-1"
              aria-label="Till toppen"
            >
              <span>Till toppen</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>

        {/* Compact bottom bar */}
        <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} NEXE RIVNING. En del av{' '}
            <a
              href="https://nexegroup.se"
              target="_blank"
              rel="noopener noreferrer"
              translate="no"
              className="notranslate text-slate-300 hover:text-white underline decoration-slate-600 underline-offset-2"
            >
              NEXE GROUP AB
            </a>
            . Alla rättigheter förbehållna.
          </p>

          <a
            href="mailto:kontakt@nexegroup.se"
            translate="no"
            className="notranslate text-slate-300 hover:text-white transition-colors underline decoration-slate-600 hover:decoration-white underline-offset-2"
          >
            kontakt@nexegroup.se
          </a>
        </div>
      </div>
    </footer>
  );
};
