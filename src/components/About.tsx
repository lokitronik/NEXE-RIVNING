import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const principles = [
    {
      title: 'Strukturerat genomförande',
      description:
        'Vi planerar varje moment för att minimera onödig påverkan och säkerställa ett metodiskt arbetsflöde.',
    },
    {
      title: 'Hänsyn till omgivningen',
      description:
        'Vi respekterar ditt hem, trapphus och dina grannar genom anpassade arbetstider och skyddade ytor.',
    },
    {
      title: 'Klara förutsättningar',
      description:
        'Tydlig dialog från första genomgång till slutstädning så att du alltid vet vad som förväntas.',
    },
  ];

  return (
    <section
      id="om-oss"
      className="py-20 sm:py-28 bg-white border-b border-slate-200 scroll-mt-16"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#002B49] mb-3">
              Om NEXE Rivning
            </span>
            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#002B49] mb-6 leading-tight"
            >
              En del av NEXE-familjen med fokus på omtanke.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              NEXE RIVNING är specialiserade på invändig rivning, köksdemontering och förberedande åtgärder inför renovering för både privatpersoner och företag.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Vi förenar gediget hantverkskunnande med stor respekt för den befintliga bostaden och människorna runt omkring.
            </p>
          </div>

          {/* Right Column: Key Principles */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-slate-50 rounded-lg p-6 sm:p-8 border border-slate-200/80">
              <h3 className="font-display text-xl font-bold text-[#002B49] mb-6">
                Våra grundprinciper
              </h3>
              <div className="space-y-6">
                {principles.map((principle) => (
                  <div key={principle.title} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#002B49]/10 text-[#002B49] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 stroke-[2.2]" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-[#002B49] mb-1">
                        {principle.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
