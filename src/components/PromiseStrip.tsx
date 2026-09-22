import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Shield, Sparkles, CheckCircle2 } from 'lucide-react';

export const PromiseStrip: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const values = [
    { icon: Sparkles, text: 'Rent och ordnat' },
    { icon: Shield, text: 'Varsam hantering' },
    { icon: CheckCircle2, text: 'Inga dolda kostnader' },
  ];

  return (
    <section
      id="vart-lofte"
      aria-label="Vårt löfte"
      className="relative bg-slate-100/90 border-b border-slate-200 py-12 sm:py-16 overflow-hidden"
    >
      {/* Dynamic expanding border line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#002B49]/40 to-transparent origin-center"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Tag & Headline */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white border border-slate-200/80 text-[11px] font-bold uppercase tracking-[0.25em] text-[#002B49] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#002B49]" />
              <span>Vårt löfte</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#002B49] leading-tight">
              Rivning av det som behövs.{' '}
              <span className="text-[#0D3B66]">Utan krångel.</span>
            </h3>
          </motion.div>

          {/* Divider & Descriptive text + values */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 lg:border-l lg:border-slate-300 lg:pl-8 flex flex-col gap-4"
          >
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              En enkel, ren och respektfull process – med hänsyn till dig, ditt hem och dina grannar.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 rounded-full border border-slate-200 text-xs font-semibold text-[#002B49]"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#002B49]" />
                    <span>{v.text}</span>
                  </span>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
