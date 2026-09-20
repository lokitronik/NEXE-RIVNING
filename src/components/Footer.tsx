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
    const target = document.querySelector(href);

    if (target) {
      e.preventDefault();
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
        <div className="flex flex-col md:flex-row md:justify-between gap-8 pb-8 border-b border-white/10">
          <div className="flex flex-col items-start">
            <a
              href="#"
              className="mb-4 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="NEXE RIVNING startsida"
            >
              <NexeLogo variant="light" size="sm" />
            </a>

            <p className="text-xs sm:text-sm text-slate-400">
              NEXE RIVNING är en del av{' '}
              <a
                href="https://lokitronik.github.io/NEXE-GROUP-AB/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors underline decoration-slate-600 underline-offset-4"
              >
                NEXE GROUP AB
                <ExternalLink
                  className="w-3 h-3"
                  aria-hidden="true"
                />
              </a>
              .
            </p>
          </div>

          <nav aria-label="Sidfotsnavigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
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
          </nav>
        </div>

        <div className="pt-5 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} NEXE GROUP AB.
            Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};
