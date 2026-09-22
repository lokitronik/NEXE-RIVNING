import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { About } from './components/About';
import { PromiseStrip } from './components/PromiseStrip';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Result } from './components/Result';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [showFloatingAction, setShowFloatingAction] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingAction(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    }
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // If contact name input exists, focus it smoothly
      setTimeout(() => {
        const nameInput = document.getElementById('contact-name');
        if (nameInput) {
          nameInput.focus();
        }
      }, 500);
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('tjanster');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-[#002B49] selection:text-white relative">
      {/* 1. Top Navbar with scroll progress & spy */}
      <Navbar onQuoteClick={() => scrollToContact()} />

      <main className="flex-1">
        {/* 2. Hero Section with kinetic typography & parallax photo */}
        <Hero
          onQuoteClick={() => scrollToContact()}
          onServicesClick={scrollToServices}
        />

        {/* 3. Strip of Three Commitments */}
        <TrustBar />

        {/* 4. Presentation: Om NEXE Rivning with interactive inspection hotspots */}
        <About onQuoteClick={() => scrollToContact()} />

        {/* 5. Vårt löfte Strip */}
        <PromiseStrip />

        {/* 6. Four Services & Content for Companies and Individuals with interactive quote triggers */}
        <Services onSelectService={(service) => scrollToContact(service)} />

        {/* 7. How We Work: Vi arbetar med respekt, interactive 3-step timeline */}
        <Process />

        {/* 8. Space Ready for Next Step: Interactive Before/After visualizer */}
        <Result onQuoteClick={() => scrollToContact()} />

        {/* 9. Contact Section with real-time feedback */}
        <Contact prefilledService={selectedService} />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Floating Quick Action Pill on Scroll */}
      <AnimatePresence>
        {showFloatingAction && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-2"
          >
            <button
              type="button"
              onClick={() => scrollToContact()}
              className="inline-flex items-center gap-2 px-4 py-3 bg-[#002B49] hover:bg-[#001D33] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-xl hover:shadow-2xl border border-white/20 transition-all hover:scale-103"
              aria-label="Snabbkontakt för offert"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Begär offert</span>
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              className="w-11 h-11 bg-white hover:bg-slate-100 text-[#002B49] rounded-full shadow-lg border border-slate-200 flex items-center justify-center transition-all hover:scale-105"
              aria-label="Till toppen av sidan"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
