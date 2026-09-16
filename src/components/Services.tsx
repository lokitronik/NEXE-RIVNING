import React from 'react';
import { Utensils, Hammer, Ruler, Trash2, Building2, User } from 'lucide-react';
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
        'Rivning av skåp, väggar, golv, tak och andra invändiga delar, utifrån projektets förutsättningar och överenskommen omfattning.',
      iconName: 'demolition',
    },
    {
      id: 'renovation-prep',
      number: '03',
      title: 'Förberedelser inför renovering',
      description:
        'Vi förbereder och lämnar ytorna redo för nästa steg i ditt renoveringsprojekt.',
      iconName: 'prep',
    },
    {
      id: 'waste-management',
      number: '04',
      title: 'Bortforsling och avfallshantering',
      description:
        'Vi ombesörjer bortforsling av rivningsmaterial och korrekt sortering och hantering av avfall enligt överenskommelse.',
      iconName: 'waste',
    },
  ];

  const getServiceIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'kitchen':
        return <Utensils className="w-5 h-5 stroke-[1.8]" aria-hidden="true" />;
      case 'demolition':
        return <Hammer className="w-5 h-5 stroke-[1.8]" aria-hidden="true" />;
      case 'prep':
        return <Ruler className="w-5 h-5 stroke-[1.8]" aria-hidden="true" />;
      case 'waste':
        return <Trash2 className="w-5 h-5 stroke-[1.8]" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="tjanster"
      className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-24"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#002B49] mb-3">
            Våra tjänster
          </span>
          <h2
            id="services-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#002B49]"
          >
            Tjänster
          </h2>
        </div>

        {/* 4 Clean Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg p-7 border border-slate-200 shadow-xs hover:border-[#002B49]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-start"
            >
              {/* Top row: Number and icon */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-sm font-bold text-slate-400">
                  {service.number}
                </span>
                <div className="w-10 h-10 rounded-md bg-slate-50 border border-slate-200 text-[#002B49] flex items-center justify-center">
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
          ))}
        </div>

        {/* Integrated Section: För företag och För privatpersoner */}
        <div className="bg-white rounded-lg border border-slate-200 p-8 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Column 1: För företag */}
            <div className="flex flex-col items-start pr-0 md:pr-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-md bg-[#002B49]/10 text-[#002B49] flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4 stroke-[2]" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#002B49]">
                  För företag
                </h3>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Vi samarbetar med byggföretag, renoveringsföretag och installatörer som behöver stöd i sina projekt. Vi kan hjälpa till med både enskilda uppdrag och flera projekt parallellt.
              </p>
            </div>

            {/* Column 2: För privatpersoner */}
            <div className="flex flex-col items-start pt-6 md:pt-0 md:pl-8 lg:pl-12">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-md bg-[#002B49]/10 text-[#002B49] flex items-center justify-center shrink-0">
                  <User className="w-4 h-4 stroke-[2]" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#002B49]">
                  För privatpersoner
                </h3>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                För dig som vill renovera ditt hem och behöver professionell hjälp med de tunga och mer komplicerade delarna av rivningsarbetet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
