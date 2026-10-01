import React, { useState, useMemo } from 'react';
import { TrendingUp, ExternalLink, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, PiggyBank } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InvestmentCalculator() {
  const [investAmount, setInvestAmount] = useState<number>(100000);
  const [monthlyDeposit, setMonthlyDeposit] = useState<number>(5000);
  const [years, setYears] = useState<number>(20);
  const [strategy, setStrategy] = useState<'conservative' | 'balanced' | 'dynamic'>('balanced');

  const strategies = {
    conservative: { label: 'Konzervativní (Dluhopisy & Pokladna)', rate: 0.04, color: 'text-blue-400' },
    balanced: { label: 'Vyvážená (ZFP Investments fondy)', rate: 0.065, color: 'text-brand-400' },
    dynamic: { label: 'Dynamická (Globální ETF & Akcie)', rate: 0.085, color: 'text-emerald-400' },
  };

  const calculation = useMemo(() => {
    const interestRate = strategies[strategy].rate;
    const monthlyRate = interestRate / 12;
    const months = years * 12;

    const fvInitial = investAmount * Math.pow(1 + monthlyRate, months);
    const fvDeposits = monthlyDeposit * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

    const futureValue = Math.round(fvInitial + fvDeposits);
    const totalInvested = investAmount + (monthlyDeposit * 12 * years);
    const profit = futureValue - totalInvested;

    return {
      futureValue,
      totalInvested,
      profit,
      interestRate: interestRate * 100
    };
  }, [investAmount, monthlyDeposit, years, strategy]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('cs-CZ', {
      style: 'currency',
      currency: 'CZK',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
      {/* ZFP Investments Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-800">
        <div className="flex items-center gap-4">
          <div className="bg-white p-2.5 rounded-2xl shadow-sm flex items-center justify-center shrink-0">
            <img
              src="/logo-investments-web-4a0d5d9c.webp"
              alt="ZFP Investments logo"
              className="h-7 w-auto object-contain"
              width="130"
              height="32"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-500/10 text-brand-400 text-xs font-semibold border border-brand-500/20 mb-1">
              <Sparkles className="w-3 h-3" /> ZFP Investments – Správa kapitálu
            </div>
            <h3 className="text-xl font-bold text-white">Investiční kalkulačka složeného úročení</h3>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400 sm:text-right">
          <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Realitní fondy a globální kapitálové trhy</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-7">
          {/* Strategy Select */}
          <div>
            <label className="text-sm font-medium text-slate-300 block mb-2">
              Typ investiční strategie
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {(['conservative', 'balanced', 'dynamic'] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setStrategy(s)}
                  className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                    strategy === s
                      ? 'border-brand-500 bg-brand-500/10 text-brand-400 shadow-md'
                      : 'border-slate-800 bg-slate-800/60 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div>{s === 'conservative' ? 'Konzervativní' : s === 'balanced' ? 'Vyvážená' : 'Dynamická'}</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                    ~{(strategies[s].rate * 100).toFixed(1)} % p.a.
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Initial Deposit */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="inv-initial-amount" className="text-sm font-medium text-slate-300">
                Počáteční jednorázový vklad
              </label>
              <span className="text-xl font-extrabold text-white font-mono">
                {formatCurrency(investAmount)}
              </span>
            </div>
            <input
              id="inv-initial-amount"
              type="range"
              min={0}
              max={2000000}
              step={10000}
              value={investAmount}
              onChange={(e) => setInvestAmount(Number(e.target.value))}
              aria-label="Počáteční vklad v korunách"
              className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1">
              <span>0 Kč</span>
              <span>500 tis.</span>
              <span>1 mil.</span>
              <span>2 mil. Kč</span>
            </div>
          </div>

          {/* Monthly Deposit */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="inv-monthly-deposit" className="text-sm font-medium text-slate-300">
                Pravidelná měsíční úložka
              </label>
              <span className="text-xl font-extrabold text-brand-400 font-mono">
                {formatCurrency(monthlyDeposit)} <span className="text-xs text-slate-400 font-normal">/ měs.</span>
              </span>
            </div>
            <input
              id="inv-monthly-deposit"
              type="range"
              min={1000}
              max={50000}
              step={500}
              value={monthlyDeposit}
              onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
              aria-label="Měsíční úložka v korunách"
              className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1">
              <span>1 000 Kč</span>
              <span>10 000 Kč</span>
              <span>25 000 Kč</span>
              <span>50 000 Kč</span>
            </div>
          </div>

          {/* Years */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="inv-years" className="text-sm font-medium text-slate-300">
                Investiční horizont
              </label>
              <span className="text-xl font-extrabold text-amber-300 font-mono">
                {years} let
              </span>
            </div>
            <input
              id="inv-years"
              type="range"
              min={3}
              max={40}
              step={1}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              aria-label="Doba investování v letech"
              className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1">
              <span>3 roky</span>
              <span>10 let</span>
              <span>20 let</span>
              <span>30 let</span>
              <span>40 let</span>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-slate-950/80 rounded-2xl p-6 sm:p-8 border border-slate-800/80">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Očekávaná budoucí hodnota
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-brand-500/10 text-brand-400 border border-brand-500/20">
                Zhodnocení ~{calculation.interestRate.toFixed(1)} % p.a.
              </span>
            </div>

            <div className="mt-5">
              <div className="text-4xl sm:text-5xl font-black text-brand-400 tracking-tight">
                {formatCurrency(calculation.futureValue)}
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Při horizontu {years} let a pravidelné úložce {formatCurrency(monthlyDeposit)} měsíčně.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800 space-y-3 text-sm">
              <div className="flex justify-between text-slate-300">
                <span>Vloženo ze svých peněz:</span>
                <span className="font-semibold text-white">{formatCurrency(calculation.totalInvested)}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Čistý výnos ze složeného úročení:</span>
                <span className="font-semibold text-emerald-400">+{formatCurrency(calculation.profit)}</span>
              </div>
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-brand-400 font-medium text-xs">
                <span className="flex items-center">
                  <Sparkles className="w-3.5 h-3.5 mr-1" /> Zisk tvoří:
                </span>
                <span className="font-bold font-mono">
                  {Math.round((calculation.profit / calculation.futureValue) * 100)} % celkového majetku
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <Link
              to="/kontakt"
              className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-amber-500 hover:from-brand-400 hover:to-amber-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-brand-500/20 hover:scale-[1.02]"
            >
              Sestavit investiční strategii na míru
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <a
              href="https://zfpinvestments.com"
              target="_blank"
              rel="noreferrer noopener"
              className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs border border-white/10 transition-colors"
            >
              Více o realitním fondu ZFP Investments
              <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-70" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800/60 text-[11px] text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>Minulá výkonnost nezaručuje budoucí výnosy. Výpočet je modelový příklad a nezahrnuje případné poplatky ani daně.</p>
        <span className="text-slate-400 font-medium">Ve spolupráci se ZFP Investments, investiční společnost, a.s.</span>
      </div>
    </div>
  );
}
