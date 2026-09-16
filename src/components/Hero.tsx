import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onQuoteClick: () => void;
  onServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick, onServicesClick }) => {
  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 bg-white overflow-hidden border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#002B49]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#002B49]">
                NEXE RIVNING
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#002B49] leading-[1.1] mb-6">
              Rivning med omtanke.
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mb-8">
              Vi hjälper privatpersoner och företag med köksrivning, mindre rivningsarbeten och förberedelser inför renovering.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-primary-quote-btn"
                type="button"
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#002B49] hover:bg-[#001D33] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002B49]"
              >
                <span>Begär en offert</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                id="hero-secondary-services-btn"
                type="button"
                onClick={onServicesClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-100 hover:bg-slate-200/80 text-[#002B49] border border-slate-200 text-xs font-bold uppercase tracking-wider rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002B49]"
              >
                <span>Se våra tjänster</span>
                <ChevronDown className="w-4 h-4 text-slate-500" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Column: Clean Interior Kitchen Deconstruction Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden shadow-lg border border-slate-200 bg-slate-100 aspect-4/3 sm:aspect-16/11">
              <img
                src={`${import.meta.env.BASE_URL}nexe-operario.png`}
                alt="Operatör från NEXE RIVNING demonterar köksinredning med skyddsutrustning"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle navy gradient vignette applied purely at the edge where text borders */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-slate-900/10 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
