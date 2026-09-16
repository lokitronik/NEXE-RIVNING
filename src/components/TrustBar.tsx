import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const commitments = [
    {
      id: 'protect-home',
      title: 'Vi skyddar ditt hem',
      icon: ShieldCheck,
    },
    {
      id: 'respect-neighbors',
      title: 'Vi tar hänsyn till dina grannar',
      icon: HeartHandshake,
    },
    {
      id: 'clean-orderly',
      title: 'Vi arbetar rent och ordnat',
      icon: Sparkles,
    },
  ];

  return (
    <section
      id="trust-commitments"
      aria-label="Våra åtaganden"
      className="bg-[#002B49] text-white py-8 sm:py-10 border-y border-[#001D33]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`flex items-center justify-start md:justify-center gap-4 py-2 ${
                  index !== commitments.length - 1
                    ? 'md:border-r md:border-white/15'
                    : ''
                }`}
              >
                <div className="shrink-0 w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center border border-white/15 text-slate-100">
                  <Icon className="w-5 h-5 stroke-[1.75]" aria-hidden="true" />
                </div>
                <span className="font-display text-base sm:text-lg font-medium tracking-tight text-white">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
