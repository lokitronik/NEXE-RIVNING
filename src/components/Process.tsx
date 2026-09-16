import React from 'react';
import { ProcessStep } from '../types';

export const Process: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Genomgång',
      description: 'Vi går igenom vad som ska tas bort och vad som ska bevaras.',
    },
    {
      number: '02',
      title: 'Skydd och rivning',
      description:
        'Vi skyddar berörda ytor och genomför arbetet metodiskt, med hänsyn till omgivningen.',
    },
    {
      number: '03',
      title: 'Avslut och överlämning',
      description:
        'Vi städar arbetsområdet och går igenom resultatet tillsammans med dig.',
    },
  ];

  return (
    <section
      id="sa-arbetar-vi"
      className="py-20 sm:py-28 bg-white border-b border-slate-200 scroll-mt-16"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#002B49] mb-3">
            Vårt arbetssätt
          </span>
          <h2
            id="process-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#002B49]"
          >
            Ett genomtänkt arbete, från start till klart.
          </h2>
        </div>

        {/* 2-Column Layout: Photography + 3 Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Floor & Passageway Protection Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-md bg-slate-100 aspect-4/3 sm:aspect-16/11">
              <img
                src={`${import.meta.env.BASE_URL}nexe-cocina-desmontaje.png`}
                alt="Demontering av köksinredning och förberedande rivningsarbete"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs px-4 py-2.5 rounded-md border border-slate-200/80 shadow-xs">
                <p className="text-xs font-medium text-slate-700">
                  Demontering av stommar och metodiskt förberedande arbete
                </p>
              </div>
            </div>
          </div>

          {/* 3 Steps */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-8 sm:gap-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-5 sm:gap-6 group"
              >
                {/* Step Number Circle */}
                <div className="shrink-0 w-12 h-12 rounded-lg bg-slate-100 border border-slate-200/80 text-[#002B49] font-display font-bold text-base flex items-center justify-center group-hover:bg-[#002B49] group-hover:text-white transition-colors duration-200">
                  {step.number}
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3 className="font-display text-xl font-bold text-[#002B49] mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
