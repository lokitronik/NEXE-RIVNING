import React, { useState } from 'react';
import { Send, AlertCircle, Check } from 'lucide-react';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    projectDescription: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submittedStatus, setSubmittedStatus] = useState<boolean>(false);
  const [copiedSummary, setCopiedSummary] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Vänligen ange ditt namn.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Vänligen ange din e-postadress.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Ange en giltig e-postadress.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Vänligen ange ditt telefonnummer.';
    }
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Beskriv gärna vad du behöver hjälp med.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    // As per requirement: Do not simulate a successful fake server transmission.
    // Show clear, honest feedback to the user about their input.
    setSubmittedStatus(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCopySummary = () => {
    const summaryText = `Namn: ${formData.name}\nE-post: ${formData.email}\nTelefon: ${formData.phone}\nProjekt: ${formData.projectDescription}`;
    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 3000);
  };

  return (
    <section
      id="kontakt"
      className="bg-[#002B49] text-white py-20 sm:py-28 border-t border-[#001D33] scroll-mt-16"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Closing Statement */}
          <div className="lg:col-span-5">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-slate-300 mb-4">
              Kontakt
            </span>
            <h2
              id="contact-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight"
            >
              Har du ett projekt på gång?
            </h2>
            <p className="text-slate-200 text-lg sm:text-xl leading-relaxed mb-8">
              Berätta vad du behöver hjälp med, så tar vi nästa steg tillsammans.
            </p>
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300">
              <p className="leading-relaxed">
                Fyll i formuläret med dina uppgifter och en kort beskrivning av ditt projekt så återkommer vi så snart som möjligt.
              </p>
            </div>
          </div>

          {/* Right Column: Clean, Honest Contact Form */}
          <div className="lg:col-span-7 bg-[#001D33] p-7 sm:p-10 rounded-xl border border-white/10 shadow-2xl">
            {submittedStatus ? (
              <div
                id="contact-submitted-notice"
                className="space-y-6"
                role="status"
                aria-live="polite"
              >
                <div className="p-4 rounded-lg bg-white/10 border border-white/20">
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    Sammanställning av din förfrågan
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Formulärets uppgifter har validerats. Eftersom detta är en förhandsvisning utan ansluten e-postserver kan du kopiera uppgifterna nedan för att skicka dem direkt.
                  </p>
                  <div className="bg-black/25 p-4 rounded-md text-xs font-mono text-slate-200 space-y-1.5 border border-white/10">
                    <div>
                      <span className="text-slate-400">Namn:</span> {formData.name}
                    </div>
                    <div>
                      <span className="text-slate-400">E-post:</span> {formData.email}
                    </div>
                    <div>
                      <span className="text-slate-400">Telefon:</span> {formData.phone}
                    </div>
                    <div>
                      <span className="text-slate-400">Beskrivning:</span>{' '}
                      {formData.projectDescription}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-[#002B49] text-xs font-bold uppercase tracking-wider rounded-md hover:bg-slate-100 transition-colors"
                  >
                    {copiedSummary ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                        <span>Kopierat!</span>
                      </>
                    ) : (
                      <span>Kopiera sammanställning</span>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setSubmittedStatus(false)}
                    className="inline-flex items-center justify-center px-5 py-3 border border-white/20 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
                  >
                    Redigera uppgifter
                  </button>
                </div>
              </div>
            ) : (
              <form
                id="inquiry-form"
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
              >
                {/* Namn */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2"
                  >
                    Namn
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 border ${
                      errors.name ? 'border-red-400' : 'border-white/20'
                    } rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white transition-colors text-sm`}
                    placeholder="Ditt för- och efternamn"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-300 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* E-post and Telefon in 2 columns on larger screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2"
                    >
                      E-post
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/10 border ${
                        errors.email ? 'border-red-400' : 'border-white/20'
                      } rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white transition-colors text-sm`}
                      placeholder="din.epost@exempel.se"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-300 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2"
                    >
                      Telefon
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/10 border ${
                        errors.phone ? 'border-red-400' : 'border-white/20'
                      } rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white transition-colors text-sm`}
                      placeholder="Ditt telefonnummer"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-300 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Beskriv ditt projekt */}
                <div>
                  <label
                    htmlFor="contact-description"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2"
                  >
                    Beskriv ditt projekt
                  </label>
                  <textarea
                    id="contact-description"
                    name="projectDescription"
                    rows={4}
                    value={formData.projectDescription}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 border ${
                      errors.projectDescription ? 'border-red-400' : 'border-white/20'
                    } rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white transition-colors text-sm resize-none`}
                    placeholder="Beskriv vad som ska rivas eller förberedas, bostadstyp och eventuella särskilda önskemål..."
                  />
                  {errors.projectDescription && (
                    <p className="mt-1.5 text-xs text-red-300 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.projectDescription}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white text-[#002B49] hover:bg-slate-100 font-display text-xs font-bold uppercase tracking-wider rounded-md transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <span>Skicka förfrågan</span>
                    <Send className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
