import { Award, Shield, Building2, CheckCircle, Scale } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';
import { calculateYearsSince, ZFP_GROUP_START_DATE } from '../../utils/dateUtils';

export default function TrustBadges() {
  const zfpYears = calculateYearsSince(ZFP_GROUP_START_DATE);

  const credentials = [
    {
      title: 'Titul EFA & PFP',
      subtitle: 'European Financial Advisor & poradce finančního plánování',
      icon: Award
    },
    {
      title: 'Registrace ČNB',
      subtitle: 'Činnost pod přísnou regulací České národní banky',
      icon: Shield
    },
    {
      title: `${zfpYears}+ let tradice ZFP`,
      subtitle: 'Stabilní zázemí jedné z největších finančních skupin',
      icon: Building2
    },
    {
      title: '100% Nezávislost',
      subtitle: 'Výběr z celého trhu bez vazby na jedinou banku',
      icon: Scale
    }
  ];

  return (
    <section className="py-10 sm:py-12 bg-slate-950 border-b border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {credentials.map((cred, idx) => (
            <ScrollReveal
              key={cred.title}
              delay={idx * 0.06}
              direction="up"
              className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:border-brand-500/30 hover:bg-white/[0.07] transition-all duration-300 group hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center shrink-0 group-hover:bg-brand-500/20 group-hover:border-brand-500/40 group-hover:scale-105 transition-all">
                <cred.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm group-hover:text-brand-300 transition-colors">{cred.title}</h4>
                <p className="text-xs text-slate-400 leading-snug mt-0.5">{cred.subtitle}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
