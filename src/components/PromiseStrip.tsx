import React from 'react';

export const PromiseStrip: React.FC = () => {
  return (
    <section
      id="vart-lofte"
      aria-label="Vårt löfte"
      className="bg-slate-100/90 border-b border-slate-200 py-10 sm:py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Tag & Headline */}
          <div className="lg:col-span-7">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#002B49] mb-2">
              Vårt löfte
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#002B49] leading-tight">
              Rivning av det som behövs. Utan krångel.
            </h3>
          </div>

          {/* Divider & Descriptive text */}
          <div className="lg:col-span-5 lg:border-l lg:border-slate-300 lg:pl-8">
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              En enkel, ren och respektfull process – med hänsyn till dig, ditt hem och dina grannar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
