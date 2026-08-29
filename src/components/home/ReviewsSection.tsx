import { Star, CheckCircle, Quote, Sparkles } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';

export default function ReviewsSection() {
  const testimonials = [
    {
      name: 'Ing. Tomáš Horák',
      role: 'Podnikatel, Brno',
      service: 'Komplexní investiční portfolio',
      text: 'S týmem pana Jagoše spolupracuji přes 6 let. Pomohli mi restrukturalizovat volné firemní i osobní prostředky a ochránit je před vysokou inflací. Vážím si zejména jejich otevřenosti a faktu, že mi nikdy netlačí žádný produkt, který by pro mě neměl jednoznačný smysl.',
      rating: 5
    },
    {
      name: 'Lucie a Marek Dvořákovi',
      role: 'Mladá rodina, Uherské Hradiště',
      service: 'Hypotéka a pojištění na dům',
      text: 'Když jsme kupovali dům, v naší bance nám nabídli vysoký úrok a složité podmínky. Tým ZFP Jagoš & Cábovi nám porovnal celý trh, vyjednal o 0,8 % nižší sazbu a ušetřil nám na celkové splátce stovky tisíc. Veškerou administrativu s katastrem a bankou vyřešili za nás.',
      rating: 5
    },
    {
      name: 'Mgr. Radka Veselá',
      role: 'Lékařka, Veselí nad Moravou',
      service: 'Zabezpečení příjmů a ZFP Gold',
      text: 'Oceňuji lidský a kultivovaný přístup. Všechny finanční pojmy a investiční strategie mi srozumitelně vysvětlili bez zbytečného odborného žargonu. Mám konečně pocit, že moje finance mají jasný řád a rodina je v bezpečí.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 font-semibold text-xs uppercase tracking-wider mb-4 border border-brand-100">
            <Sparkles className="w-3.5 h-3.5 mr-2" /> Zkušenosti klientů
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Co o nás říkají naši klienti
          </h2>
          <p className="text-lg text-slate-600">
            Dlouhodobá důvěra a spokojenost více než 12 500 rodin a podnikatelů je naším největším závazkem.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 0.1}
              direction="up"
              className="bg-white p-8 rounded-3xl border border-slate-200/80 hover:border-brand-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    <CheckCircle className="w-3 h-3 mr-1" /> Ověřený klient
                  </span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <h3 className="font-bold text-slate-900 text-base">{review.name}</h3>
                <p className="text-xs text-slate-500">{review.role}</p>
                <span className="inline-block mt-2 text-[11px] font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md">
                  {review.service}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
