import { Search, Compass, CheckCircle2, RefreshCw, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../animations/ScrollReveal';

export default function ProcessRoadmap() {
  const steps = [
    {
      number: '01',
      title: 'Vstupní diagnostika & cíle',
      desc: 'Nezávazně si sedneme u kávy nebo online. Zmapujeme vaši aktuální finanční situaci, plány na bydlení, investice a rodinné priority.',
      icon: Search,
      badge: 'ZDARMA'
    },
    {
      number: '02',
      title: 'Nezávislá analýza trhu',
      desc: 'Porovnáme nabídky všech bank, pojišťoven a investičních fondů na trhu. Vybereme řešení, které je matematicky i lidsky nejvýhodnější.',
      icon: Compass,
      badge: 'OBJEKTIVNÍ'
    },
    {
      number: '03',
      title: 'Vyjednání podmínek a realizace',
      desc: 'Díky objemům skupiny ZFP Group vyjednáme neveřejné úrokové sazby a slevy na poplatcích. Veškerou byrokracii vyřídíme za vás.',
      icon: CheckCircle2,
      badge: 'BEZ STRESU'
    },
    {
      number: '04',
      title: 'Dlouhodobý servis a dohled',
      desc: 'Finanční plán žije s vámi. Pravidelně kontrolujeme vývoj sazeb, refinancování a růst investic, abyste z peněz měli stále maximum.',
      icon: RefreshCw,
      badge: 'TRVALÁ PÉČE'
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-widest text-brand-400 uppercase mb-3 block">Jednoduchý a transparentní postup</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Jak probíhá <span className="bg-gradient-to-r from-brand-400 to-amber-300 bg-clip-text text-transparent">naše spolupráce</span>
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Žádné skryté háčky, žádný nátlak. Od prvního rozhovoru až po dlouhodobou péči o váš rodinný majetek přesně víte, na čem jste.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <ScrollReveal
              key={step.number}
              delay={idx * 0.12}
              direction="up"
              className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-8 border border-slate-700/80 hover:border-brand-400/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 relative"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl font-extrabold text-brand-400/30 group-hover:text-brand-400 transition-colors font-mono">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">
                    {step.badge}
                  </span>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-slate-700/60 border border-slate-600 flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                  <step.icon className="w-7 h-7 text-brand-400 group-hover:text-slate-950 transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">{step.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.3} className="mt-16 text-center">
          <Link
            to="/kontakt"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-2xl text-slate-950 bg-gradient-to-r from-brand-400 to-amber-400 hover:from-brand-300 hover:to-amber-300 transition-all shadow-xl shadow-brand-500/20 hover:scale-105"
          >
            Domluvit nezávazný 1. krok
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
