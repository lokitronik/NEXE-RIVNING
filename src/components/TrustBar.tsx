import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles, Check } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export const TrustBar: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const commitments = [
    {
      id: 'protect-home',
      title: 'Vi skyddar ditt hem',
      detail: 'Täckning av golv och skydd av ytor',
      icon: ShieldCheck,
    },
    {
      id: 'respect-neighbors',
      title: 'Vi tar hänsyn till dina grannar',
      detail: 'Tydliga tider och minimerat buller',
      icon: HeartHandshake,
    },
    {
      id: 'clean-orderly',
      title: 'Vi arbetar rent och ordnat',
      detail: 'Städad arbetsplats och källsortering',
      icon: Sparkles,
    },
  ];

  return (
    <section
      id="trust-commitments"
      aria-label="Våra åtaganden"
      className="relative bg-[#002B49] text-white py-9 sm:py-12 border-y border-[#001D33] overflow-hidden"
    >
      {/* Decorative subtle ambient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.01 }}
                className={`group flex items-center justify-start md:justify-center gap-4 py-3 px-4 rounded-xl transition-all duration-300 hover:bg-white/5 ${
                  index !== commitments.length - 1
                    ? 'md:border-r md:border-white/15'
                    : ''
                }`}
              >
                <div className="relative shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/15 text-slate-100 group-hover:bg-white/20 group-hover:border-white/30 group-hover:scale-105 transition-all duration-300">
                  <Icon className="w-5 h-5 stroke-[1.8] transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500/90 text-white flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-slate-100 transition-colors">
                    {item.title}
                  </span>
                  <span className="text-xs text-slate-300/80 font-medium transition-colors group-hover:text-slate-200">
                    {item.detail}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
