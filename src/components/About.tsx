import React, { useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

interface AboutProps {
  onQuoteClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onQuoteClick }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-25, 25]);

  return (
    <section
      ref={sectionRef}
      id="om-oss"
      className="relative py-24 sm:py-28 bg-white border-b border-slate-200 scroll-mt-24 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Information & Presentation */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#002B49] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span>Om NEXE Rivning</span>
            </div>

            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#002B49] mb-6 leading-tight"
            >
              Behöver du hjälp med en rivning?
            </h2>

            <p className="text-lg sm:text-xl font-semibold text-[#002B49] mb-4 leading-snug">
              Ska du renovera ditt kök eller behöver du riva delar av en bostad?
            </p>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-6">
              <p>
                På NEXE RIVNING utför vi köksrivning och mindre rivningsarbeten åt företag och privatpersoner i hela Sverige.
              </p>

              {/* Visually highlighted team and parallel project capability with dynamic entrance */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative border-l-4 border-[#002B49] pl-5 py-3 my-4 bg-slate-50/90 rounded-r-lg shadow-2xs hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#002B49] shrink-0 mt-0.5" />
                  <p className="text-[#002B49] font-bold text-base sm:text-lg leading-snug">
                    Vi är ett professionellt team med lång erfarenhet, redo att ta oss an både enskilda uppdrag och flera projekt parallellt.
                  </p>
                </div>
              </motion.div>

              <p>
                Vi arbetar planerat och omsorgsfullt, med respekt för ditt hem och dina grannar. Genom god planering, tydlig kommunikation och rena, organiserade arbetsplatser minskar vi störningarna under arbetets gång.
              </p>
            </div>

            <p className="text-xs font-medium text-slate-500 tracking-wide mb-8">
              NEXE RIVNING är en del av{' '}
              <a
                href="https://nexegroup.se"
                target="_blank"
                rel="noopener noreferrer"
                translate="no"
                className="notranslate text-slate-700 hover:text-[#002B49] font-semibold underline decoration-slate-300 hover:decoration-[#002B49] underline-offset-2 transition-colors"
              >
                NEXE GROUP AB
              </a>
              .
            </p>

            <motion.button
              id="about-quote-btn"
              type="button"
              onClick={onQuoteClick}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#002B49] hover:bg-[#001D33] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002B49]"
            >
              <span>Begär en offert</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </motion.button>
          </motion.div>

          {/* Right Column: Kitchen Deconstruction Photo with interactive hotspots & parallax */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-100 aspect-4/3 sm:aspect-16/11 group">
              <motion.div style={{ y: imageY }} className="w-full h-full">
                <img
                  src={`${import.meta.env.BASE_URL}nexe-cocina-desmontaje.png`}
                  alt="NEXE RIVNING"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
