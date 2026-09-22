import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRight, SlidersHorizontal } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

interface ResultProps {
  onQuoteClick: () => void;
}

export const Result: React.FC<ResultProps> = ({ onQuoteClick }) => {
  const shouldReduceMotion = useReducedMotion();
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
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

  return (
    <section
      id="infor-nasta-steg"
      className="py-24 sm:py-28 bg-slate-50 border-b border-slate-200 scroll-mt-24 overflow-hidden"
      aria-labelledby="result-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Interactive Before/After Transformation Visualizer */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#002B49]" />
                <span>Dra reglaget för att jämföra</span>
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
                  Före rivning
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
                  Efter rivning
                </button>
              </div>
            </div>

            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
              className="relative rounded-xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 aspect-4/3 sm:aspect-16/11 select-none cursor-ew-resize group"
            >
              {/* After image (Ready clean room) - Base layer */}
              <img
                src={`${import.meta.env.BASE_URL}nexe-cocina-vacia.png`}
                alt="NEXE RIVNING"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              />

              {/* Before image (Deconstruction in progress) - Clipped top layer */}
              <div
                className={`absolute inset-0 overflow-hidden pointer-events-none ${
                  isDragging ? '' : 'transition-all duration-300 ease-out'
                }`}
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}nexe-cocina-desmontaje.png`}
                  alt="NEXE RIVNING"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                  style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
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

          {/* Right Column: Heading, Text & Contact CTA */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-[0.2em] text-[#002B49] mb-4">
              <span>Inför nästa steg</span>
            </div>

            <h2
              id="result-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#002B49] mb-6 leading-tight"
            >
              Utrymme redo för ditt nya projekt.
            </h2>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                Vi tar hand om rivningen och förbereder utrymmet så att du kan gå vidare med din renovering.
              </p>
              <div className="p-4 rounded-lg bg-white border border-slate-200 shadow-2xs">
                <p className="font-semibold text-[#002B49]">
                  Du fokuserar på framtiden. Vi tar hand om det som måste bort.
                </p>
              </div>
            </div>

            <motion.button
              id="result-contact-btn"
              type="button"
              onClick={onQuoteClick}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#002B49] hover:bg-[#001D33] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002B49]"
            >
              <span>Berätta om ditt projekt</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
