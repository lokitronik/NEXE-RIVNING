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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="site-footer"
      className="bg-[#001D33] text-slate-300 py-16 border-t border-white/10"
      aria-label="Webbplatsens sidfot"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a
              href="#"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm mb-4"
              aria-label="NEXE RIVNING Startsida"
            >
              <NexeLogo variant="light" size="md" />
            </a>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-6">
              Professionell och omsorgsfull invändig rivning, köksdemontering och förberedande arbete för bostäder och kommersiella lokaler.
            </p>
            <div className="text-xs text-slate-400 font-mono">
              <span>NEXE RIVNING · Rivning med omtanke</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* NEXE Group Divisions */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              NEXE GROUP
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              NEXE RIVNING är en del av NEXE GROUP. Utforska även våra övriga divisioner:
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://lokitronik.github.io/NEXE-SANERING/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-200 hover:text-white group transition-colors"
                >
                  <span className="font-semibold text-white">NEXE SPECIALSANERING</span>
                  <span className="text-slate-400 group-hover:text-slate-200 text-xs">
                    – Specialsanering & miljö
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://lokitronik.github.io/NEXE-SOLAR/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-200 hover:text-white group transition-colors"
                >
                  <span className="font-semibold text-white">NEXE SOLAR</span>
                  <span className="text-slate-400 group-hover:text-slate-200 text-xs">
                    – Solcellsinstallationer
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} NEXE RIVNING. En del av NEXE GROUP AB. Alla rättigheter förbehållna.
          </p>
          <p className="text-slate-400">
            Invändig rivning med precision, ordning och hänsyn.
          </p>
        </div>
      </div>
    </footer>
  );
};
