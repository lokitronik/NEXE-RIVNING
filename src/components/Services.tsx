import React, { useState } from 'react';
import { Utensils, Hammer, Ruler, Trash2, Building2, User, ArrowRight, Check } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { ServiceItem } from '../types';

interface ExtendedServiceItem extends ServiceItem {
  features: string[];
}

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const services: ExtendedServiceItem[] = [
    {
      id: 'kitchen-demolition',
      number: '01',
      title: 'Rivning av kök',
      description:
        'Demontering av köksinredning inför renovering eller installation av ett nytt kök.',
      iconName: 'kitchen',
      features: ['Varsam skåpnedmontering', 'Frånkoppling & skydd av installationer', 'Städat underlag för snickare'],
    },
    {
      id: 'minor-demolition',
      number: '02',
      title: 'Mindre rivningar',
      description:
        'Rivning av skåp, väggar, golv, tak och andra invändiga delar, utifrån projektets förutsättningar och överenskommen omfattning.',
      iconName: 'demolition',
      features: ['Lättare icke-bärande innerväggar', 'Golv- & klinkerrivning', 'Garderob & fast inredning'],
    },
    {
      id: 'renovation-prep',
      number: '03',
      title: 'Förberedelser inför renovering',
      description:
        'Vi förbereder och lämnar ytorna redo för nästa steg i ditt renoveringsprojekt.',
      iconName: 'prep',
      features: ['Ytrensning & friläggning', 'Dammtätning mot övriga rum', 'Inspektion & överlämning'],
    },
    {
      id: 'waste-management',
      number: '04',
      title: 'Bortforsling och avfallshantering',
      description:
        'Vi ombesörjer bortforsling av rivningsmaterial och korrekt sortering och hantering av avfall enligt överenskommelse.',
      iconName: 'waste',
      features: ['Säckning & bärhjälp', 'Miljösorterad återvinning', 'Inga kvarlämnade rester'],
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

  const handleCardAction = (title: string) => {
    if (onSelectService) {
      onSelectService(title);
    } else {
      const contact = document.getElementById('kontakt');
      if (contact) contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="tjanster"
      className="py-24 sm:py-28 bg-slate-50 border-b border-slate-200 scroll-mt-24"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-[0.2em] text-[#002B49] mb-3">
            <span>Våra tjänster</span>
          </div>
          <h2
            id="services-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#002B49]"
          >
            Tjänster anpassade för dina behov
          </h2>
        </div>

        {/* 4 Responsive Interactive Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {services.map((service, index) => {
            const isHovered = hoveredCard === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={shouldReduceMotion ? {} : { y: -6 }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative bg-white rounded-xl p-7 border transition-all duration-300 flex flex-col justify-between shadow-xs ${
                  isHovered
                    ? 'border-[#002B49] shadow-xl ring-1 ring-[#002B49]/10'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Top row: Number and icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display text-sm font-bold text-slate-400 group-hover:text-[#002B49] transition-colors">
                      {service.number}
                    </span>
                    <div className="w-11 h-11 rounded-lg bg-slate-50 border border-slate-200 text-[#002B49] flex items-center justify-center group-hover:bg-[#002B49] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-display text-xl font-bold text-[#002B49] mb-3 tracking-tight group-hover:text-[#0D3B66] transition-colors">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Mini feature points */}
                  <div className="space-y-2 pt-4 border-t border-slate-100 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Action button */}
                <button
                  type="button"
                  onClick={() => handleCardAction(service.title)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-slate-50 group-hover:bg-[#002B49] text-[#002B49] group-hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-200"
                >
                  <span>Begär offert</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Integrated Section: För företag och För privatpersoner with interactive presence */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: För företag */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={shouldReduceMotion ? {} : { y: -4 }}
            className="group bg-white rounded-xl border border-slate-200 p-8 shadow-xs hover:border-[#002B49]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#002B49]/10 text-[#002B49] flex items-center justify-center shrink-0 group-hover:bg-[#002B49] group-hover:text-white transition-colors">
                  <Building2 className="w-5 h-5 stroke-[2]" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">B2B Partnerskap</span>
                  <h3 className="font-display text-xl font-bold text-[#002B49]">
                    För företag
                  </h3>
                </div>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Vi samarbetar med byggföretag, renoveringsföretag och installatörer som behöver stöd i sina projekt. Vi kan hjälpa till med både enskilda uppdrag och flera projekt parallellt.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleCardAction('Företagssamarbete')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#002B49] hover:text-[#0D3B66] group/btn"
            >
              <span>Diskutera företagssamarbete</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </motion.div>

          {/* Card 2: För privatpersoner */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={shouldReduceMotion ? {} : { y: -4 }}
            className="group bg-white rounded-xl border border-slate-200 p-8 shadow-xs hover:border-[#002B49]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#002B49]/10 text-[#002B49] flex items-center justify-center shrink-0 group-hover:bg-[#002B49] group-hover:text-white transition-colors">
                  <User className="w-5 h-5 stroke-[2]" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Hem & Bostad</span>
                  <h3 className="font-display text-xl font-bold text-[#002B49]">
                    För privatpersoner
                  </h3>
                </div>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                För dig som vill renovera ditt hem och behöver professionell hjälp med de tunga och mer komplicerade delarna av rivningsarbetet. Tryggt, rent och pålitligt.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleCardAction('Privat köksrivning')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#002B49] hover:text-[#0D3B66] group/btn"
            >
              <span>Få offert för ditt hem</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
