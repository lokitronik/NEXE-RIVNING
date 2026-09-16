import React from 'react';

export const Result: React.FC = () => {
  return (
    <section
      id="resultat"
      className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200"
      aria-labelledby="result-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#002B49] mb-3">
            Resultat
          </span>
          <h2
            id="result-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#002B49] mb-4"
          >
            Redo för nästa steg.
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            Du fokuserar på det nya. Vi hjälper dig att ta bort det gamla.
          </p>
        </div>

        {/* Wide Cleared Interior Photography */}
        <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-md bg-slate-100 aspect-16/9 sm:aspect-21/9 max-h-[520px]">
          <img
            src={`${import.meta.env.BASE_URL}nexe-cocina-vacia.png`}
            alt="Ett rent och färdigförberett inomhusutrymme redo för nästa steg i renoveringen"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};
