import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ResultProps {
  onQuoteClick: () => void;
}

export const Result: React.FC<ResultProps> = ({ onQuoteClick }) => {
  return (
    <section
      id="infor-nasta-steg"
      className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-24"
      aria-labelledby="result-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Cleared Space Photo */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-md bg-slate-100 aspect-4/3 sm:aspect-16/11">
              <img
                src={`${import.meta.env.BASE_URL}nexe-cocina-vacia.png`}
                alt="Ett rent och färdigförberett inomhusutrymme redo för nästa steg i renoveringen"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Heading, Text & Contact CTA */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#002B49] mb-3">
              Inför nästa steg
            </span>
            <h2
              id="result-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#002B49] mb-6 leading-tight"
            >
              Utrymme redo för ditt nya projekt.
            </h2>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                Vi tar hand om rivningen och förbereder utrymmet så att du kan gå vidare med din renovering.
              </p>
              <p className="font-semibold text-[#002B49]">
                Du fokuserar på framtiden. Vi tar hand om det som måste bort.
              </p>
            </div>

            <button
              id="result-contact-btn"
              type="button"
              onClick={onQuoteClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#002B49] hover:bg-[#001D33] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002B49]"
            >
              <span>Berätta om ditt projekt</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
