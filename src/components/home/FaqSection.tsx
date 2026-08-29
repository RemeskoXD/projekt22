import { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../animations/ScrollReveal';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Proč řešit hypotéku nebo investice s vámi a ne přímo v bance?',
      a: 'Banka vám vždy nabídne pouze své vlastní produkty, ať už jsou na trhu výhodné, nebo ne. My jako nezávislí poradci ZFP Jagoš & Cábovi máme k dispozici kompletní portfolio všech tuzemských bank a institucí. Porovnáme pro vás desítky nabídek, vyjednáme neveřejné sazby a ušetříme vám desítky hodin obíhání poboček a statisíce korun na úrocích a poplatcích.'
    },
    {
      q: 'Kolik stojí vaše služby a jak jste odměňováni?',
      a: 'Vstupní konzultace, finanční audit, návrh strategie i sjednání hypotéky nebo investic jsou pro vás zcela bezplatné. Naše odměna je hrazena přímo finančními institucemi (bankami, fondy, pojišťovnami) na základě standardizovaných provizí, které nijak nezvyšují cenu produktu pro vás.'
    },
    {
      q: 'Jak jsou mé investice chráněny a kde jsou uloženy peníze?',
      a: 'Vaše finance nikdy neposíláte nám jako poradcům. Veškeré vklady jdou přímo na vaše osobní účty u regulovaných depozitářů, licencovaných bank a investičních fondů (např. ZFP Investments) pod přísným dohledem České národní banky (ČNB) a evropských regulátorů.'
    },
    {
      q: 'Co když už mám uzavřené smlouvy a pojistky z minulosti?',
      a: 'To je naprosto v pořádku. Provedeme nezávislou revizi vašich stávajících smluv. Zjistíme, zda nepřeplácíte na poplatcích, zda pojistná krytí stále odpovídají vaší životní situaci a kde můžete optimalizací ušetřit peníze, které lze raději přesměrovat do tvorby majetku.'
    },
    {
      q: 'Kde všude poskytujete své služby a probíhají schůzky i online?',
      a: 'Naše hlavní strukturní kancelář se nachází ve Veselí nad Moravou (Hutník 1503), působíme pravidelně také v Brně a po celé Moravě. Pro klienty z celé České republiky poskytujeme plnohodnotný servis i online přes videohovory a zabezpečenou elektronickou komunikaci.'
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 font-semibold text-xs uppercase tracking-wider mb-4 border border-brand-100">
            <HelpCircle className="w-3.5 h-3.5 mr-2" /> Často kladené otázky
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Vše, co potřebujete vědět
          </h2>
          <p className="text-lg text-slate-600">
            Odpovědi na nejčastější dotazy našich klientů před zahájením spolupráce.
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal
                key={idx}
                delay={idx * 0.06}
                direction="up"
                className="rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200 bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-bold text-slate-900 leading-snug">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-brand-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-slate-600 leading-relaxed border-t border-slate-100 pt-4 text-base">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal direction="up" delay={0.3} className="mt-12 p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-lg font-bold text-slate-900 mb-1">Máte jinou otázku?</h3>
            <p className="text-sm text-slate-600">Náš tým vám ochotně a srozumitelně vše vysvětlí.</p>
          </div>
          <Link
            to="/kontakt"
            className="inline-flex items-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-md shrink-0 hover:scale-105"
          >
            Kontaktovat poradce <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
