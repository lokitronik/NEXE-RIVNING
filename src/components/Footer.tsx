import React from 'react';
import { ExternalLink } from 'lucide-react';
import { NexeLogo } from './NexeLogo';

export const Footer: React.FC = () => {
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

  return (
    <footer
      id="site-footer"
      className="bg-[#001D33] text-slate-300 py-10 sm:py-12 border-t border-white/10"
      aria-label="Webbplatsens sidfot"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-8 border-b border-white/10 items-start">
          {/* Brand info */}
          <div className="md:col-span-8 flex flex-col items-start">
            <a
              href="#"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm mb-3"
              aria-label="NEXE RIVNING Startsida"
            >
              <NexeLogo variant="light" size="sm" />
            </a>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed mb-3">
              Professionell och omsorgsfull invändig rivning, köksdemontering
              och förberedande arbete för bostäder och kommersiella lokaler.
            </p>

            <div className="text-xs text-slate-400 space-y-1.5">
              <div>
                <a
                  href="https://nexegroup.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors underline decoration-slate-600 underline-offset-2"
                >
                  <span>NEXE RIVNING · En del av NEXE GROUP AB</span>
                  <ExternalLink
                    className="w-3 h-3 text-slate-400"
                    aria-hidden="true"
                  />
                </a>
              </div>
              <div>
                <a
                  href="mailto:kontakt@nexegroup.se"
                  className="text-slate-300 hover:text-white transition-colors underline decoration-slate-600 underline-offset-2"
                >
                  kontakt@nexegroup.se
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-3">
              Navigation
            </h4>

            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} NEXE RIVNING. En del av{' '}
            <a
              href="https://nexegroup.se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white underline decoration-slate-600 underline-offset-2"
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
