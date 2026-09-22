import React, { useRef } from 'react';
import { ArrowRight, ChevronDown, CheckCircle, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

interface HeroProps {
  onQuoteClick: () => void;
  onServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick, onServicesClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax subtle shifts for image and decorative elements
  const imageY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 60]);
  const imageScale = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [1, 1] : [1, 1.05]);

  // Stagger variants for text entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      id="hero-section"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-36 bg-white overflow-hidden border-b border-slate-200"
    >
      {/* Subtle architectural grid backdrop giving depth */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#002b4908_1px,transparent_1px),linear-gradient(to_bottom,#002b4908_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Text & CTAs with kinetic staggered entrance */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col items-start z-10"
          >
            {/* Tag with pulse indicator */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 shadow-2xs mb-6 group hover:border-[#002B49]/40 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#002B49] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#002B49]" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#002B49]">
                NEXE RIVNING · SVERIGE
              </span>
            </motion.div>

            {/* Headline with high contrast & architectural boldness */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#002B49] leading-[1.08] mb-6"
            >
              Rivning med{' '}
              <span className="relative inline-block text-[#002B49]">
                omtanke.
                {/* Dynamic animated line accent under 'omtanke' */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 -bottom-1.5 w-full h-[3px] bg-gradient-to-r from-[#002B49] to-[#0D3B66] origin-left rounded-full"
                  aria-hidden="true"
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mb-8"
            >
              Vi hjälper privatpersoner och företag med köksrivning, mindre rivningsarbeten och förberedelser inför renovering.
            </motion.p>

            {/* Buttons with micro-interactions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8"
            >
              <motion.button
                id="hero-primary-quote-btn"
                type="button"
                onClick={onQuoteClick}
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#002B49] hover:bg-[#001D33] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002B49] overflow-hidden"
              >
                {/* Shimmer sweep effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                <span className="relative z-10">Begär en offert</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden="true" />
              </motion.button>

              <motion.button
                id="hero-secondary-services-btn"
                type="button"
                onClick={onServicesClick}
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-100 hover:bg-slate-200/80 text-[#002B49] border border-slate-200 text-xs font-bold uppercase tracking-wider rounded-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002B49]"
              >
                <span>Se våra tjänster</span>
                <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
              </motion.button>
            </motion.div>

            {/* Quick trust micro-indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-semibold text-slate-500 pt-2 border-t border-slate-200/60"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                <span>Omsorgsfull demontering</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                <span>Fasta & tydliga offerter</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                <span>Städat & förberett</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Clean Interior Kitchen Deconstruction Photography with dynamic presence */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Precision corner marks framing the photo */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#002B49]/40 z-20 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#002B49]/40 z-20 pointer-events-none" />

            <div className="relative rounded-xl overflow-hidden shadow-xl border border-slate-200/90 bg-slate-100 aspect-4/3 sm:aspect-16/11 group">
              <motion.div style={{ y: imageY, scale: imageScale }} className="w-full h-full">
                <img
                  src={`${import.meta.env.BASE_URL}nexe-operario.png`}
                  alt="NEXE RIVNING"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
