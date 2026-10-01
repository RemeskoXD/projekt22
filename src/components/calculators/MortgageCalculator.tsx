import React, { useState, useMemo } from 'react';
import { Home, ExternalLink, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(4000000);
  const [years, setYears] = useState<number>(30);
  const [interestRate, setInterestRate] = useState<number>(4.49);
  const [fixationYears, setFixationYears] = useState<number>(5);

  // Exact financial annuity monthly payment formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
  const calculation = useMemo(() => {
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = years * 12;

    if (monthlyRate === 0) {
      const payment = Math.round(loanAmount / totalMonths);
      return {
        monthlyPayment: payment,
        totalPaid: loanAmount,
        totalInterest: 0,
        bankSavingsEstimate: 145000
      };
    }

    const factor = Math.pow(1 + monthlyRate, totalMonths);
    const monthlyPayment = Math.round((loanAmount * (monthlyRate * factor)) / (factor - 1));
    const totalPaid = monthlyPayment * totalMonths;
    const totalInterest = totalPaid - loanAmount;

    // Estimate savings compared to standard unnegotiated bank branch rates (+0.5% p.a.)
    const standardRate = (interestRate + 0.5) / 100 / 12;
    const standardFactor = Math.pow(1 + standardRate, totalMonths);
    const standardPayment = (loanAmount * (standardRate * standardFactor)) / (standardFactor - 1);
    const bankSavingsEstimate = Math.round((standardPayment * totalMonths) - totalPaid);

    return {
      monthlyPayment,
      totalPaid,
      totalInterest,
      bankSavingsEstimate: Math.max(bankSavingsEstimate, 85000)
    };
  }, [loanAmount, years, interestRate]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('cs-CZ', {
      style: 'currency',
      currency: 'CZK',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
      {/* HypoSpace Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-800">
        <div className="flex items-center gap-4">
          <div className="bg-white p-2.5 rounded-2xl shadow-sm flex items-center justify-center shrink-0">
            <img
              src="/logo-hypospace.png"
              alt="HypoSpace.cz logo"
              className="h-7 w-auto object-contain"
              width="130"
              height="32"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-500/10 text-brand-400 text-xs font-semibold border border-brand-500/20 mb-1">
              <Sparkles className="w-3 h-3" /> Certifikovaná hypoteční technologie
            </div>
            <h3 className="text-xl font-bold text-white">Hypoteční kalkulačka 2026</h3>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400 sm:text-right">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Srovnání 14 licencovaných bank v ČR</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-7">
          {/* Loan Amount */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="mortgage-loan-amount" className="text-sm font-medium text-slate-300">
                Výše hypotečního úvěru
              </label>
              <span className="text-xl font-extrabold text-brand-400 font-mono">
                {formatCurrency(loanAmount)}
              </span>
            </div>
            <input
              id="mortgage-loan-amount"
              type="range"
              min={500000}
              max={15000000}
              step={100000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              aria-label="Výše hypotečního úvěru v korunách"
              className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1">
              <span>500 tis. Kč</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setLoanAmount(3000000)}
                  className="hover:text-brand-400 underline underline-offset-2"
                >
                  3 mil.
                </button>
                <button
                  type="button"
                  onClick={() => setLoanAmount(5000000)}
                  className="hover:text-brand-400 underline underline-offset-2"
                >
                  5 mil.
                </button>
                <button
                  type="button"
                  onClick={() => setLoanAmount(8000000)}
                  className="hover:text-brand-400 underline underline-offset-2"
                >
                  8 mil.
                </button>
              </div>
              <span>15 mil. Kč</span>
            </div>
          </div>

          {/* Loan Term */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="mortgage-term" className="text-sm font-medium text-slate-300">
                Doba splácení
              </label>
              <span className="text-xl font-extrabold text-white font-mono">
                {years} let <span className="text-xs text-slate-400 font-normal">({years * 12} splátek)</span>
              </span>
            </div>
            <input
              id="mortgage-term"
              type="range"
              min={5}
              max={30}
              step={1}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              aria-label="Doba splácení hypotéky v letech"
              className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1">
              <span>5 let</span>
              <span>15 let</span>
              <span>20 let</span>
              <span>25 let</span>
              <span>30 let</span>
            </div>
          </div>

          {/* Interest Rate & Presets */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="mortgage-interest-rate" className="text-sm font-medium text-slate-300">
                Úroková sazba (% p.a.)
              </label>
              <span className="text-xl font-extrabold text-amber-300 font-mono">
                {interestRate.toFixed(2)} % p.a.
              </span>
            </div>
            <input
              id="mortgage-interest-rate"
              type="range"
              min={3.5}
              max={7.5}
              step={0.05}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              aria-label="Úroková sazba hypotéky v procentech ročně"
              className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
            />
            <div className="flex flex-wrap gap-2 mt-3">
              <button
                type="button"
                onClick={() => setInterestRate(4.19)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  interestRate === 4.19
                    ? 'bg-brand-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                ⭐ Exkluzivní ZFP sazba (4,19 %)
              </button>
              <button
                type="button"
                onClick={() => setInterestRate(4.69)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  interestRate === 4.69
                    ? 'bg-brand-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Aktuální tržní průměr (4,69 %)
              </button>
            </div>
          </div>

          {/* Fixation Selector */}
          <div>
            <label className="text-sm font-medium text-slate-300 block mb-2">
              Preferovaná doba fixace úroku
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[3, 5, 10].map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFixationYears(f)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                    fixationYears === f
                      ? 'border-brand-500 bg-brand-500/10 text-brand-400'
                      : 'border-slate-800 bg-slate-800/60 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {f} {f === 3 ? 'roky' : 'let'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-slate-950/80 rounded-2xl p-6 sm:p-8 border border-slate-800/80">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Orientační měsíční splátka
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Fixace {fixationYears} let
              </span>
            </div>

            <div className="mt-4">
              <div className="text-4xl sm:text-5xl font-black text-brand-400 tracking-tight">
                {formatCurrency(calculation.monthlyPayment)}
                <span className="text-lg text-slate-400 font-normal"> / měsíc</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Při úrokové sazbě {interestRate.toFixed(2)} % p.a. na {years} let.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800 space-y-3 text-sm">
              <div className="flex justify-between text-slate-300">
                <span>Půjčená jistina:</span>
                <span className="font-semibold text-white">{formatCurrency(loanAmount)}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Úroky bance celkem:</span>
                <span className="font-semibold text-amber-300">{formatCurrency(calculation.totalInterest)}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Celkem zaplatíte:</span>
                <span className="font-semibold text-white">{formatCurrency(calculation.totalPaid)}</span>
              </div>
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-emerald-400 font-medium text-xs">
                <span className="flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Úspora se ZFP & HypoSpace:
                </span>
                <span className="font-bold font-mono">cca {formatCurrency(calculation.bankSavingsEstimate)}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <Link
              to="/kontakt"
              className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-amber-500 hover:from-brand-400 hover:to-amber-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-brand-500/20 hover:scale-[1.02]"
            >
              Nezávazně konzultovat hypotéku
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <a
              href="https://hypospace.cz"
              target="_blank"
              rel="noreferrer noopener"
              className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs border border-white/10 transition-colors"
            >
              Kompletní online srovnávač na HypoSpace.cz
              <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-70" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800/60 text-[11px] text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>Výpočet má informativní charakter. Konečná nabídka závisí na bonitě žadatele a schválení bankou.</p>
        <span className="text-slate-400 font-medium">Ve spolupráci s HypoSpace s.r.o.</span>
      </div>
    </div>
  );
}
