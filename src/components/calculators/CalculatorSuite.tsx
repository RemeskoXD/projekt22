import React, { useState } from 'react';
import { Home, TrendingUp, Building2, Calculator, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import MortgageCalculator from './MortgageCalculator';
import InvestmentCalculator from './InvestmentCalculator';
import PropertyEstimateCalculator from './PropertyEstimateCalculator';

export type CalculatorTab = 'mortgage' | 'investment' | 'property';

interface CalculatorSuiteProps {
  defaultTab?: CalculatorTab;
  className?: string;
}

export default function CalculatorSuite({ defaultTab = 'mortgage', className = '' }: CalculatorSuiteProps) {
  const [activeTab, setActiveTab] = useState<CalculatorTab>(defaultTab);

  const tabs = [
    {
      id: 'mortgage' as const,
      label: 'Hypotéky & Bydlení',
      badge: 'HypoSpace.cz',
      icon: Home,
      description: 'Srovnání měsíčních splátek a sazeb všech bank na trhu'
    },
    {
      id: 'investment' as const,
      label: 'Investice & Majetek',
      badge: 'ZFP Investments',
      icon: TrendingUp,
      description: 'Modelování zhodnocení úspor a složeného úročení'
    },
    {
      id: 'property' as const,
      label: 'Odhad nemovitosti',
      badge: 'ZFP Reality',
      icon: Building2,
      description: 'Orientační tržní ocenění bytů, domů a pozemků'
    }
  ];

  return (
    <div className={`w-full ${className}`}>
      {/* Top Section Intro */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 font-semibold text-xs uppercase tracking-wider mb-4 border border-brand-500/20 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 mr-2" /> Interaktivní online nástroje
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Spočítejte si své možnosti <span className="bg-gradient-to-r from-brand-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">předem</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Využijte ověřené kalkulačky našich specializovaných projektů HypoSpace.cz, ZFP Investments a ZFP Reality pro okamžitý přehled.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="flex justify-center mb-8">
        <div className="bg-slate-950 p-1.5 rounded-2xl border border-slate-800 flex flex-wrap sm:flex-nowrap gap-1.5 max-w-3xl w-full shadow-xl">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 relative ${
                  isActive
                    ? 'text-slate-950 shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCalculatorTab"
                    className="absolute inset-0 bg-gradient-to-r from-brand-400 via-amber-300 to-amber-400 rounded-xl"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{tab.label}</span>
                  <span
                    className={`hidden md:inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider ${
                      isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {tab.badge}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content with AnimatePresence */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {activeTab === 'mortgage' && (
            <motion.div
              key="mortgage"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <MortgageCalculator />
            </motion.div>
          )}

          {activeTab === 'investment' && (
            <motion.div
              key="investment"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <InvestmentCalculator />
            </motion.div>
          )}

          {activeTab === 'property' && (
            <motion.div
              key="property"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <PropertyEstimateCalculator />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
