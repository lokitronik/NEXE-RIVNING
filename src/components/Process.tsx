import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ProcessStep } from '../types';

export const Process: React.FC = () => {
  const commitments = [
    'Vi skyddar golv, trapphus och gemensamma utrymmen.',
    'Vi arbetar på ett kontrollerat och organiserat sätt.',
    'Vi vidtar åtgärder för att begränsa damm och buller.',
    'Vi respekterar överenskomna arbetstider och tar hänsyn till omgivningen.',
    'Vi lämnar arbetsplatsen ren och redo för fortsatt arbete.',
  ];

  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Genomgång',
      description:
        'Vi går igenom vad som ska tas bort, vad som ska bevaras och hur arbetet ska genomföras.',
    },
    {
      number: '02',
      title: 'Skydd och rivning',
      description:
        'Vi skyddar berörda ytor och genomför rivningen metodiskt enligt överenskommelsen.',
    },
    {
      number: '03',
      title: 'Avslut och överlämning',
      description:
        'Vi städar arbetsområdet och går igenom resultatet tillsammans med dig.',
    },
  ];

  return (
    <section
      id="sa-arbetar-vi"
      className="py-20 sm:py-24 bg-white border-b border-slate-200 scroll-mt-24"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Text & Commitments + Corridor Protection Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
          {/* Left Column: Heading, Intro & Commitments List */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#002B49] mb-3">
              Vårt arbetssätt
            </span>
            <h2
              id="process-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#002B49] mb-6 leading-tight"
            >
              Vi arbetar med respekt.
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              Vi vet att en rivning kan skapa ljud, damm och störningar. Därför planerar vi varje uppdrag noggrant för att begränsa påverkan på ditt hem och dina grannar. Vi genomför arbetet på ett kontrollerat och hänsynsfullt sätt.
            </p>

            {/* Checkmark List of Commitments */}
            <ul className="space-y-3.5 w-full">
              {commitments.map((commitment) => (
                <li key={commitment} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#002B49]/10 text-[#002B49] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                  </div>
                  <span className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
                    {commitment}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Protected Corridor Photography */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-md bg-slate-100 aspect-4/3 sm:aspect-16/11">
              <img
                src={`${import.meta.env.BASE_URL}nexe-pasillo-protegido.png`}
                alt="Skyddade golv och ytor under pågående arbete"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Bottom Row: 3 Compact Steps */}
        <div className="pt-10 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-4 p-5 rounded-lg bg-slate-50 border border-slate-200/80"
              >
                <div className="shrink-0 w-10 h-10 rounded-md bg-[#002B49] text-white font-display font-bold text-sm flex items-center justify-center shadow-xs">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-[#002B49] mb-1 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
