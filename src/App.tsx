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
  const scrollToContact = () => {
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

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-[#002B49] selection:text-white">
      {/* 1. Top Navbar */}
      <Navbar onQuoteClick={scrollToContact} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onQuoteClick={scrollToContact}
          onServicesClick={scrollToServices}
        />

        {/* 3. Strip of Three Commitments */}
        <TrustBar />

        {/* 4. Presentation: Om NEXE Rivning */}
        <About onQuoteClick={scrollToContact} />

        {/* 5. Vårt löfte Strip */}
        <PromiseStrip />

        {/* 6. Four Services & Content for Companies and Individuals */}
        <Services />

        {/* 7. How We Work: Vi arbetar med respekt, Photo, Commitments & 3 Steps */}
        <Process />

        {/* 8. Space Ready for Next Step: Utrymme redo för ditt nya projekt */}
        <Result onQuoteClick={scrollToContact} />

        {/* 9. Contact Section */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
