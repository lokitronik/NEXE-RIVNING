import React from 'react';
import { ExternalLink, ArrowUp } from 'lucide-react';
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
      className="bg-[#001D33] text-slate-300 py-12 sm:py-16 border-t border-white/10 relative"
      aria-label="Webbplatsens sidfot"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-white/10 items-start">
          {/* Brand info */}
          <div className="md:col-span-8 flex flex-col items-start">
            <a
              href="#"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm mb-4 inline-block"
              aria-label="NEXE RIVNING Startsida"
            >
              <NexeLogo variant="light" size="sm" />
            </a>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed mb-4">
              Professionell och omsorgsfull invändig rivning, köksdemontering
              och förberedande arbete för bostäder och kommersiella lokaler i hela Sverige.
            </p>

            <div className="text-xs text-slate-400 space-y-2">
              <div>
                <a
                  href="https://nexegroup.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  translate="no"
                  className="notranslate inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors underline decoration-slate-600 hover:decoration-white underline-offset-2"
                >
                  <span>NEXE RIVNING · En del av NEXE GROUP AB</span>
                  <ExternalLink
                    className="w-3.5 h-3.5 text-slate-400"
                    aria-hidden="true"
                  />
                </a>
              </div>
              <div>
                <a
                  href="mailto:kontakt@nexegroup.se"
                  translate="no"
                  className="notranslate text-slate-300 hover:text-white transition-colors underline decoration-slate-600 hover:decoration-white underline-offset-2"
                >
                  kontakt@nexegroup.se
                </a>
              </div>
            </div>
          </div>

          {/* Navigation & Back to Top */}
          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col justify-between h-full gap-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                Snabblänkar
              </h4>

              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-xs sm:text-sm text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-all"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <motion.button
                type="button"
                onClick={scrollToTop}
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <span>Till toppen</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
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

          <p className="text-slate-500 hidden sm:block">
            Invändig rivning med precision, ordning och hänsyn.
          </p>
        </div>
      </div>
    </footer>
  );
};
