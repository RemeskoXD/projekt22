import { Award, Shield, Building2, CheckCircle, Scale } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';

export default function TrustBadges() {
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
      title: '30+ let tradice ZFP',
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
    <section className="py-12 bg-slate-950 border-b border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred, idx) => (
            <ScrollReveal
              key={cred.title}
              delay={idx * 0.08}
              direction="up"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
                <cred.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">{cred.title}</h4>
                <p className="text-xs text-slate-400 leading-snug">{cred.subtitle}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
