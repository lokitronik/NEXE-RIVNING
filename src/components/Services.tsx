import React from 'react';
import { Hammer, Utensils, Ruler, Trash2 } from 'lucide-react';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'kitchen-demolition',
      number: '01',
      title: 'Rivning av kök',
      description:
        'Demontering av köksinredning inför renovering eller installation av ett nytt kök.',
      iconName: 'kitchen',
    },
    {
      id: 'minor-demolition',
      number: '02',
      title: 'Mindre rivningar',
      description:
        'Avgränsade rivningsarbeten inomhus, anpassade efter projektets omfattning och förutsättningar.',
      iconName: 'demolition',
    },
    {
      id: 'renovation-prep',
      number: '03',
      title: 'Förberedelser inför renovering',
      description:
        'Vi förbereder utrymmet inför nästa steg i renoveringen.',
      iconName: 'prep',
    },
    {
      id: 'waste-management',
      number: '04',
      title: 'Bortforsling och avfallshantering',
      description:
        'Bortforsling av rivningsmaterial och sortering enligt överenskommelse.',
      iconName: 'waste',
    },
  ];

  const getServiceIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'kitchen':
        return <Utensils className="w-6 h-6 stroke-[1.75]" aria-hidden="true" />;
      case 'demolition':
        return <Hammer className="w-6 h-6 stroke-[1.75]" aria-hidden="true" />;
      case 'prep':
        return <Ruler className="w-6 h-6 stroke-[1.75]" aria-hidden="true" />;
      case 'waste':
        return <Trash2 className="w-6 h-6 stroke-[1.75]" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="tjanster"
      className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200 scroll-mt-16"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#002B49] mb-3">
            För privatpersoner och företag
          </span>
          <h2
            id="services-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#002B49]"
          >
            Vad behöver du hjälp med?
          </h2>
        </div>

        {/* 4 Balanced Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg p-7 border border-slate-200/90 shadow-xs hover:border-[#002B49]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header row: Number and linear icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display text-sm font-bold text-slate-400">
                    {service.number}
                  </span>
                  <div className="w-11 h-11 rounded-md bg-slate-50 border border-slate-200/80 text-[#002B49] flex items-center justify-center">
                    {getServiceIcon(service.iconName)}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-display text-xl font-bold text-[#002B49] mb-3 tracking-tight">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#002B49] uppercase tracking-wider">
                <span>Professionellt utförande</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
