import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutProps {
  onQuoteClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onQuoteClick }) => {
  return (
    <section
      id="om-oss"
      className="py-20 sm:py-24 bg-white border-b border-slate-200 scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Information & Presentation */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#002B49] mb-3">
              Om NEXE Rivning
            </span>
            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#002B49] mb-6 leading-tight"
            >
              Behöver du hjälp med en rivning?
            </h2>

            <p className="text-lg sm:text-xl font-semibold text-[#002B49] mb-4 leading-snug">
              Ska du renovera ditt kök eller behöver du riva delar av en bostad?
            </p>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-6">
              <p>
                På NEXE RIVNING utför vi köksrivning och mindre rivningsarbeten åt företag och privatpersoner i hela Sverige.
              </p>

              {/* Visually highlighted team and parallel project capability */}
              <div className="border-l-2 border-[#002B49] pl-4 py-1.5 my-3 bg-slate-50 rounded-r-md">
                <p className="text-[#002B49] font-bold text-base sm:text-lg leading-snug">
                  Vi är ett professionellt team med lång erfarenhet, redo att ta oss an både enskilda uppdrag och flera projekt parallellt.
                </p>
              </div>

              <p>
                Vi arbetar planerat och omsorgsfullt, med respekt för ditt hem och dina grannar. Genom god planering, tydlig kommunikation och rena, organiserade arbetsplatser minskar vi störningarna under arbetets gång.
              </p>
            </div>

            <p className="text-xs font-medium text-slate-500 tracking-wide mb-8">
              NEXE RIVNING är en del av{' '}
              <a
                href="https://nexegroup.se"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-[#002B49] underline decoration-slate-300 underline-offset-2 transition-colors"
              >
                NEXE GROUP AB
              </a>
              .
            </p>

            <button
              id="about-quote-btn"
              type="button"
              onClick={onQuoteClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#002B49] hover:bg-[#001D33] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002B49]"
            >
              <span>Begär en offert</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Right Column: Kitchen Deconstruction Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-md bg-slate-100 aspect-4/3 sm:aspect-16/11">
              <img
                src={`${import.meta.env.BASE_URL}nexe-cocina-desmontaje.png`}
                alt="Demontering av köksinredning inför renovering"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
