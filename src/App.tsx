import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Result } from './components/Result';
import { About } from './components/About';
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
      {/* Top Navbar */}
      <Navbar onQuoteClick={scrollToContact} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onQuoteClick={scrollToContact}
          onServicesClick={scrollToServices}
        />

        {/* Trust Bar Commitments */}
        <TrustBar />

        {/* Services Section */}
        <Services />

        {/* How We Work (Process) */}
        <Process />

        {/* Result Section */}
        <Result />

        {/* About NEXE Rivning */}
        <About />

        {/* Contact & Quote Request */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

