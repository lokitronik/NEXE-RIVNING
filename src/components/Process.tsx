import React, { useState, useRef, useEffect, useCallback } from 'react';
import { CheckCircle2, Shield, ArrowRight, Sparkles, Layers, SlidersHorizontal } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { ProcessStep } from '../types';

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  // Before / After protection visualizer state
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleMove = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleEnd]);

  const commitments = [
    { text: 'Vi skyddar golv, trapphus och gemensamma utrymmen.', tag: 'Täckningsskydd' },
    { text: 'Vi arbetar på ett kontrollerat och organiserat sätt.', tag: 'Metodiskt' },
    { text: 'Vi vidtar åtgärder för att begränsa damm och buller.', tag: 'Dammspärr' },
    { text: 'Vi respekterar överenskomna arbetstider och tar hänsyn till omgivningen.', tag: 'Grannhänsyn' },
    { text: 'Vi lämnar arbetsplatsen ren och redo för fortsatt arbete.', tag: 'Slutstädning' },
  ];

  const steps: (ProcessStep & { details: string })[] = [
    {
      number: '01',
      title: 'Genomgång',
      description:
        'Vi går igenom vad som ska tas bort, vad som ska bevaras och hur arbetet ska genomföras.',
      details: 'Tydlig planering minskar missförstånd och garanterar att installationer som ska sparas skyddas till 100%.',
    },
    {
      number: '02',
      title: 'Skydd och rivning',
      description:
        'Vi skyddar berörda ytor och genomför rivningen metodiskt enligt överenskommelsen.',
      details: 'Vi täcker passager och använder professionella verktyg för att minimera vibrationer och dammspridning.',
    },
    {
      number: '03',
      title: 'Avslut och överlämning',
      description:
        'Vi städar arbetsområdet och går igenom resultatet tillsammans med dig.',
      details: 'Ytorna lämnas dammsugna och förberedda så att elektriker och köksmontörer kan sätta igång direkt.',
    },
  ];

  return (
    <section
      ref={containerRef}
      id="sa-arbetar-vi"
      className="py-24 sm:py-28 bg-white border-b border-slate-200 scroll-mt-24 overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Text & Commitments + Corridor Protection Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
          {/* Left Column: Heading, Intro & Commitments List */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#002B49] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span>Vårt arbetssätt</span>
            </div>

            <h2
              id="process-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#002B49] mb-6 leading-tight"
            >
              Vi arbetar med respekt.
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              Vi vet att en rivning kan skapa ljud, damm och störningar. Därför planerar vi varje uppdrag noggrant för att begränsa påverkan på ditt hem och dina grannar. Vi genomför arbetet på ett kontrollerat och hänsynsfullt sätt.
            </p>

            {/* Interactive Checkmark List of Commitments */}
            <div className="space-y-3 w-full">
              {commitments.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: shouldReduceMotion ? 0 : index * 0.08, duration: 0.4 }}
                  whileHover={shouldReduceMotion ? {} : { x: 4 }}
                  className="group flex items-center justify-between p-3 rounded-lg bg-slate-50/70 hover:bg-slate-100/90 border border-slate-200/70 transition-all cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#002B49]/10 text-[#002B49] flex items-center justify-center shrink-0 group-hover:bg-[#002B49] group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                    </div>
                    <span className="text-slate-700 text-sm font-medium leading-relaxed group-hover:text-[#002B49] transition-colors">
                      {item.text}
                    </span>
                  </div>
                  <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white text-slate-500 border border-slate-200">
                    {item.tag}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: 2-Phase Interactive Corridor Protection Visualizer */}
          <div className="lg:col-span-6 relative">
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#002B49]" />
                <span>Dra för att jämföra skyddsåtgärder</span>
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setSliderPosition(85)}
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded border transition-colors cursor-pointer ${
                    sliderPosition > 50
                      ? 'bg-[#002B49] text-white border-[#002B49]'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-[#002B49]'
                  }`}
                >
                  Före (utan skydd)
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPosition(15)}
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded border transition-colors cursor-pointer ${
                    sliderPosition <= 50
                      ? 'bg-[#002B49] text-white border-[#002B49]'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-[#002B49]'
                  }`}
                >
                  Efter (med skydd)
                </button>
              </div>
            </div>

            <div
              ref={sliderRef}
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
              className="relative rounded-xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 aspect-4/3 sm:aspect-16/11 select-none cursor-ew-resize group"
            >
              {/* After image (Täckta golv & dammspärr / Tapar) - Base layer */}
              <img
                src={`${import.meta.env.BASE_URL}tapar.jpg`}
                alt="Efter skyddstäckning – NEXE RIVNING"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('nexe-pasillo-protegido.png')) {
                    target.src = `${import.meta.env.BASE_URL}nexe-pasillo-protegido.png`;
                  }
                }}
              />

              {/* Before image (Utan skyddstäckning / Sin tapar) - Clipped top layer */}
              <div
                className={`absolute inset-0 overflow-hidden pointer-events-none ${
                  isDragging ? '' : 'transition-all duration-300 ease-out'
                }`}
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}sin-tapar.png`}
                  alt="Före skyddstäckning – NEXE RIVNING"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                  style={{ width: sliderRef.current ? `${sliderRef.current.clientWidth}px` : '100%' }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('tapar.jpg') && !target.src.includes('nexe-pasillo-protegido.png')) {
                      target.src = `${import.meta.env.BASE_URL}tapar.jpg`;
                    }
                  }}
                />
              </div>

              {/* Draggable Divider Handle */}
              <div
                className={`absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none ${
                  isDragging ? '' : 'transition-all duration-300 ease-out'
                }`}
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#002B49] text-white border-2 border-white shadow-xl flex items-center justify-center">
                  <SlidersHorizontal className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: 3 Connected Interactive Steps */}
        <div className="pt-10 border-t border-slate-200">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#002B49] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#002B49]" />
              <span>Vår 3-stegs metodik</span>
            </h3>
            <span className="text-xs font-semibold text-slate-500 hidden sm:inline-block">
              Från första kontakt till städat resultat
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Visual connecting line for md and up */}
            <div
              className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[2px] bg-slate-200 -z-0"
              aria-hidden="true"
            />

            {steps.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: shouldReduceMotion ? 0 : idx * 0.15, duration: 0.5 }}
                  onClick={() => setActiveStepIndex(idx)}
                  whileHover={shouldReduceMotion ? {} : { y: -4 }}
                  className={`relative z-10 cursor-pointer p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#002B49] shadow-lg ring-1 ring-[#002B49]/20'
                      : 'bg-slate-50/80 border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  <div>
                    {/* Top step icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`shrink-0 w-11 h-11 rounded-lg font-display font-bold text-sm flex items-center justify-center transition-colors shadow-xs ${
                          isSelected
                            ? 'bg-[#002B49] text-white'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {step.number}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Steg {idx + 1} av 3
                      </span>
                    </div>

                    <h4 className="font-display text-xl font-bold text-[#002B49] mb-2 tracking-tight">
                      {step.title}
                    </h4>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Expandable detail hint */}
                  <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
                    {step.details}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
