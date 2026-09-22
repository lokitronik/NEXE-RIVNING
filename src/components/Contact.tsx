import React, { useState, useEffect } from 'react';
import { Send, AlertCircle, Check, Mail } from 'lucide-react';
import type { ContactFormData } from '../types';

interface ContactProps {
  prefilledService?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    projectDescription: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submittedStatus, setSubmittedStatus] = useState<boolean>(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        projectDescription: `Hej! Jag är intresserad av offert för: ${prefilledService}. `,
      }));
    }
  }, [prefilledService]);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError('');
    if (!validate()) return;

    setIsSending(true);

    try {
      // Usar FormData nativo sin librerías externas
      const formPayload = new FormData();
      formPayload.append('name', formData.name.trim());
      formPayload.append('email', formData.email.trim());
      formPayload.append('phone', formData.phone.trim());
      formPayload.append('message', formData.projectDescription.trim());
      formPayload.append('_subject', 'Ny förfrågan – NEXE RIVNING');

      const response = await fetch('https://formspree.io/f/xkjgrjkb', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formPayload,
      });

      if (response.ok) {
        setSubmittedStatus(true);
      } else {
        setSubmitError('failed');
      }
    } catch {
      setSubmitError('network');
    } finally {
      setIsSending(false);
    }
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

  return (
    <section
      id="kontakt"
      className="bg-[#002B49] text-white py-20 sm:py-28 border-t border-[#001D33] scroll-mt-24"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
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
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300 space-y-4">
              <p className="leading-relaxed">
                Fyll i formuläret med dina uppgifter och en kort beskrivning av ditt projekt så återkommer vi så snart som möjligt.
              </p>
              <div className="pt-3 border-t border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                  <span className="text-slate-400">E-post:</span>
                  <a
                    href="mailto:kontakt@nexegroup.se"
                    translate="no"
                    className="notranslate text-white hover:underline underline-offset-2 font-medium"
                  >
                    kontakt@nexegroup.se
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#001D33] p-7 sm:p-10 rounded-xl border border-white/10 shadow-2xl">
            {submittedStatus ? (
              <div role="status" aria-live="polite" className="space-y-6">
                <div className="p-4 rounded-lg bg-white/10 border border-white/20">
                  <Check className="w-7 h-7 text-emerald-400 mb-3" aria-hidden="true" />
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    Tack för din förfrågan!
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Din förfrågan har skickats. Vi återkommer så snart som möjligt. Vid frågor når du oss på{' '}
                    <a
                      href="mailto:kontakt@nexegroup.se"
                      translate="no"
                      className="notranslate text-white underline underline-offset-2 font-medium"
                    >
                      kontakt@nexegroup.se
                    </a>.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setFormData({ name: '', email: '', phone: '', projectDescription: '' });
                    setErrors({});
                    setSubmitError('');
                    setSubmittedStatus(false);
                  }}
                  className="inline-flex items-center justify-center px-5 py-3 border border-white/20 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
                >
                  Skicka en ny förfrågan
                </button>
              </div>
            ) : (
              <form
                id="inquiry-form"
                onSubmit={handleSubmit}
                aria-busy={isSending}
                noValidate
                className="space-y-5"
              >
                <fieldset disabled={isSending} className="space-y-5 min-w-0 border-0 p-0 m-0">
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

                  <div className="pt-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSending}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white text-[#002B49] hover:bg-slate-100 font-display text-xs font-bold uppercase tracking-wider rounded-md transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <span>{isSending ? 'Skickar…' : 'Skicka förfrågan'}</span>
                      <Send className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </fieldset>
                {submitError && (
                  <p role="alert" className="p-4 rounded-md border border-red-400/40 bg-red-400/10 text-sm text-red-200">
                    {submitError === 'network' ? (
                      <>
                        Nätverksfel. Kontrollera din anslutning eller mejla{' '}
                        <a
                          href="mailto:kontakt@nexegroup.se"
                          translate="no"
                          className="notranslate underline underline-offset-2 font-medium text-white"
                        >
                          kontakt@nexegroup.se
                        </a>.
                      </>
                    ) : (
                      <>
                        Förfrågan kunde inte skickas. Försök igen eller mejla direkt till{' '}
                        <a
                          href="mailto:kontakt@nexegroup.se"
                          translate="no"
                          className="notranslate underline underline-offset-2 font-medium text-white"
                        >
                          kontakt@nexegroup.se
                        </a>.
                      </>
                    )}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
