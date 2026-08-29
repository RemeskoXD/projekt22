import { motion } from 'motion/react';
import { Home, TrendingUp, ShieldCheck, Baby, Calculator, PiggyBank, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AmbientBackground from '../components/animations/AmbientBackground';
import ScrollReveal from '../components/animations/ScrollReveal';

export default function Services() {
  const [investAmount, setInvestAmount] = useState(100000);
  const [monthlyDeposit, setMonthlyDeposit] = useState(5000);
  const [years, setYears] = useState(20);
  const interestRate = 0.06; // 6% annual return for illustration

  // Calculate future value (Compound interest)
  const calculateFutureValue = () => {
    const monthlyRate = interestRate / 12;
    const months = years * 12;
    
    // Future value of initial amount
    const fvInitial = investAmount * Math.pow(1 + monthlyRate, months);
    
    // Future value of monthly deposits
    const fvDeposits = monthlyDeposit * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    
    return Math.round(fvInitial + fvDeposits);
  };

  const totalInvested = investAmount + (monthlyDeposit * 12 * years);
  const futureValue = calculateFutureValue();
  const profit = futureValue - totalInvested;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'CZK', maximumFractionDigits: 0 }).format(value);
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Bydlení a hypotéky",
        "provider": {
          "@type": "FinancialService",
          "name": "ZFP Jagoš & Cábovi"
        },
        "description": "Nezávislé srovnání hypotečních úvěrů, refinancování a kompletní vyřízení na míru."
      },
      {
        "@type": "Service",
        "name": "Investice a zhodnocení majetku",
        "provider": {
          "@type": "FinancialService",
          "name": "ZFP Jagoš & Cábovi"
        },
        "description": "Tvorba dlouhodobých investičních portfolií, pravidelné i jednorázové investice, ochrana před inflací."
      },
      {
        "@type": "Service",
        "name": "Zajištění příjmů a ochrana rodiny",
        "provider": {
          "@type": "FinancialService",
          "name": "ZFP Jagoš & Cábovi"
        },
        "description": "Komplexní pojistná ochrana při nečekaných životních situacích a výpadku příjmů."
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <SEO 
        title="Finanční služby a investiční kalkulačka"
        description="Hypotéky s nejvýhodnějším úrokem, investiční strategie na míru a ochrana rodinných financí. Vypočítejte si zhodnocení na naší investiční kalkulačce."
        canonical="/sluzby"
        schema={servicesSchema}
      />
      
      {/* Header */}
      <section className="bg-slate-900 py-24 lg:py-32 border-b border-slate-800 text-white relative overflow-hidden">
        <AmbientBackground variant="hero" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 font-semibold text-xs uppercase tracking-wider mb-6 border border-brand-500/20 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 mr-2" /> Komplexní finanční plánování
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Naše <span className="bg-gradient-to-r from-brand-400 to-amber-300 bg-clip-text text-transparent">služby</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Poskytujeme komplexní finanční plánování. Pomůžeme vám zorientovat se na trhu a vybrat to nejlepší řešení pro vaši životní situaci.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 relative overflow-hidden">
        <AmbientBackground variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-32">
            
            {/* Hypoteky */}
            <div id="hypoteky" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mb-8 shadow-xs border border-brand-100">
                  <Home className="w-8 h-8 text-brand-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Bydlení a hypotéky</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Vlastní bydlení je jedním z nejdůležitějších životních kroků. Spolupracujeme se všemi bankami na trhu a díky našim objemům dokážeme vyjednat lepší podmínky, než kdybyste do banky šli sami.
                </p>
                <ul className="space-y-4 text-slate-700 mb-8">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-3 shrink-0 mt-0.5 font-bold text-sm">✓</div>
                    <span>Nezávislé srovnání hypotečních nabídek napříč celým trhem.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-3 shrink-0 mt-0.5 font-bold text-sm">✓</div>
                    <span>Kompletní vyřízení veškeré administrativy a komunikace s bankou.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-3 shrink-0 mt-0.5 font-bold text-sm">✓</div>
                    <span>Refinancování a konsolidace stávajících úvěrů s nižší splátkou.</span>
                  </li>
                </ul>
                <Link to="/kontakt" className="inline-flex items-center text-brand-600 font-semibold hover:text-brand-700 group">
                  Nezávazně konzultovat hypotéku <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.15} className="bg-slate-100 rounded-3xl aspect-square lg:aspect-[4/3] overflow-hidden shadow-xl group">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" 
                  alt="Moderní rodinný dům – financování hypotéky" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  loading="lazy" 
                  width="800" 
                  height="600" 
                />
              </ScrollReveal>
            </div>

            {/* Investice */}
            <div id="investice" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left" className="order-2 lg:order-1 bg-slate-100 rounded-3xl aspect-square lg:aspect-[4/3] overflow-hidden shadow-xl group">
                <img 
                  src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=800" 
                  alt="Investice a správa finančního majetku" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  loading="lazy" 
                  width="800" 
                  height="600" 
                />
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.15} className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mb-8 shadow-xs border border-brand-100">
                  <TrendingUp className="w-8 h-8 text-brand-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Investice a zhodnocení majetku</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Peníze, které leží na běžném účtu, ztrácejí svou hodnotu kvůli inflaci. Pomůžeme vám nastavit investiční strategii tak, aby vaše peníze stabilně a bezpečně pracovaly pro vás.
                </p>
                <ul className="space-y-4 text-slate-700 mb-8">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-3 shrink-0 mt-0.5 font-bold text-sm">✓</div>
                    <span>Tvorba dlouhodobých investičních portfolií na míru vašim cílům.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-3 shrink-0 mt-0.5 font-bold text-sm">✓</div>
                    <span>Pravidelné i jednorázové investování již od menších částek.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-3 shrink-0 mt-0.5 font-bold text-sm">✓</div>
                    <span>Diverzifikace napříč nemovitostními fondy, akciemi a drahými kovy.</span>
                  </li>
                </ul>
                <a href="#kalkulacka" className="inline-flex items-center text-brand-600 font-semibold hover:text-brand-700 group">
                  Spočítat výnos na kalkulačce <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </ScrollReveal>
            </div>

            {/* Zajisteni prijmu */}
            <div id="zajisteni" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mb-8 shadow-xs border border-brand-100">
                  <ShieldCheck className="w-8 h-8 text-brand-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Zajištění příjmů a ochrana rodiny</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Život přináší i nečekané momenty. Správně nastavené životní pojištění ochrání vás i vaši rodinu před finančním výpadkem v případě nemoci, úrazu nebo invalidity.
                </p>
                <ul className="space-y-4 text-slate-700 mb-8">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-3 shrink-0 mt-0.5 font-bold text-sm">✓</div>
                    <span>Analýza rizik bez zbytečného přeplácení za nepotřebná připojištění.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-3 shrink-0 mt-0.5 font-bold text-sm">✓</div>
                    <span>Garance finanční jistoty rodiny i při výpadku hlavního příjmu.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-3 shrink-0 mt-0.5 font-bold text-sm">✓</div>
                    <span>Pomoc s řešením a asistencí při pojistných událostech.</span>
                  </li>
                </ul>
                <Link to="/kontakt" className="inline-flex items-center text-brand-600 font-semibold hover:text-brand-700 group">
                  Zkontrolovat své pojistné smlouvy <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.15} className="bg-slate-100 rounded-3xl aspect-square lg:aspect-[4/3] overflow-hidden shadow-xl group">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" 
                  alt="Finanční jistota a ochrana rodiny" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  loading="lazy" 
                  width="800" 
                  height="600" 
                />
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="kalkulacka" className="py-24 bg-slate-900 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Calculator className="w-12 h-12 text-brand-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Investiční kalkulačka</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Podívejte se, jak by mohly vaše peníze pracovat v čase. (Výpočet uvažuje s orientačním zhodnocením 6 % p.a.)
            </p>
          </div>

          <div className="bg-slate-800 rounded-3xl p-8 lg:p-12 border border-slate-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Controls */}
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-medium text-slate-300">Počáteční vklad</label>
                    <span className="font-bold text-white">{formatCurrency(investAmount)}</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" max="1000000" step="10000"
                    value={investAmount} 
                    onChange={(e) => setInvestAmount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-medium text-slate-300">Pravidelná měsíční úložka</label>
                    <span className="font-bold text-white">{formatCurrency(monthlyDeposit)}</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" max="50000" step="500"
                    value={monthlyDeposit} 
                    onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-medium text-slate-300">Doba investování</label>
                    <span className="font-bold text-white">{years} let</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" max="40" step="1"
                    value={years} 
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                  />
                </div>
              </div>

              {/* Results */}
              <div className="flex flex-col justify-center bg-slate-900 rounded-2xl p-8 border border-slate-700">
                <div className="mb-8">
                  <p className="text-slate-400 text-sm mb-1">Očekávaná hodnota portfolia</p>
                  <p className="text-4xl lg:text-5xl font-bold text-brand-400">{formatCurrency(futureValue)}</p>
                </div>
                
                <div className="space-y-4 pt-8 border-t border-slate-800">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Celkem vloženo:</span>
                    <span className="font-medium text-white">{formatCurrency(totalInvested)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Čistý zisk z úroků:</span>
                    <span className="font-medium text-brand-400">+{formatCurrency(profit)}</span>
                  </div>
                </div>
                
                <p className="text-xs text-slate-500 mt-8">
                  Upozornění: Minulá výkonnost nezaručuje budoucí výnosy. Jedná se o ilustrativní příklad nezohledňující poplatky a inflaci.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
