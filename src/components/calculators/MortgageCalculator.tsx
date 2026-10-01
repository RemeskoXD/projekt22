import React, { useEffect, useRef, useState } from 'react';
import { Home, ExternalLink, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Building, RefreshCw, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

declare global {
  interface Window {
    HypoSpaceCalculatorSales?: {
      render: (target: string | HTMLElement) => void;
      init?: () => void;
      getTemplate?: () => string;
      getStyles?: () => string;
    };
  }
}

export default function MortgageCalculator() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const SCRIPT_URL = 'https://hypospace.cz/wp-content/cache/autoptimize/js/autoptimize_single_aeda9edc180772cf0aecb84bd262ff35.js';
    const SCRIPT_ID = 'hypospace-sales-calculator-script';

    const renderWidget = () => {
      try {
        const target = document.getElementById('hypospace-calculator-sales');
        if (target && window.HypoSpaceCalculatorSales?.render) {
          // If the widget is not already rendered inside target
          if (!target.querySelector('.mort-calc')) {
            window.HypoSpaceCalculatorSales.render(target);
          }
          setLoaded(true);
        }
      } catch (err) {
        console.error('Error rendering HypoSpace calculator:', err);
        setError(true);
      }
    };

    // If script is already loaded and ready
    if (window.HypoSpaceCalculatorSales) {
      // Small timeout to allow DOM element to be fully attached
      const timer = setTimeout(renderWidget, 50);
      return () => clearTimeout(timer);
    }

    // Check if script tag already exists in DOM
    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = SCRIPT_URL;
      script.defer = true;
      script.async = true;
      script.onload = () => {
        setTimeout(renderWidget, 100);
      };
      script.onerror = (e) => {
        console.error('Failed to load HypoSpace widget script:', e);
        setError(true);
      };
      document.body.appendChild(script);
    } else {
      // Script tag exists, poll briefly until global is defined
      const interval = setInterval(() => {
        if (window.HypoSpaceCalculatorSales) {
          clearInterval(interval);
          renderWidget();
        }
      }, 80);

      const timeout = setTimeout(() => {
        clearInterval(interval);
        if (!window.HypoSpaceCalculatorSales) {
          setError(true);
        }
      }, 6000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, []);

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
      {/* HypoSpace Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-800">
        <div className="flex items-center gap-4">
          <div className="bg-white px-3.5 py-2 rounded-2xl shadow-sm flex items-center justify-center shrink-0">
            <picture>
              <source srcSet="/logo-hypospace-trimmed.webp" type="image/webp" />
              <img
                src="/logo-hypospace-trimmed.png"
                alt="HypoSpace.cz logo"
                className="h-7 sm:h-7.5 w-auto object-contain"
                width="160"
                height="26"
              />
            </picture>
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-500/10 text-brand-400 text-xs font-semibold border border-brand-500/20 mb-1">
              <Sparkles className="w-3 h-3" /> Oficiální integrovaná kalkulačka
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Hypoteční kalkulačka HypoSpace.cz</h3>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400 sm:text-right">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Přímé napojení na bankovní sazby 2026</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* HypoSpace Widget Container */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-slate-200 text-slate-900 min-h-[580px] flex flex-col justify-center">
          {/* Target Element for HypoSpace shortcode */}
          <div id="hypospace-calculator-sales" ref={containerRef} className="w-full">
            {!loaded && !error && (
              <div className="py-24 text-center text-slate-500">
                <RefreshCw className="w-9 h-9 animate-spin mx-auto mb-4 text-brand-600" />
                <p className="text-base font-semibold text-slate-800">Načítám hypoteční kalkulačku HypoSpace...</p>
                <p className="text-xs text-slate-500 mt-1">Stahuji aktuální úrokové sazby všech bank v ČR</p>
              </div>
            )}

            {error && (
              <div className="py-16 text-center text-slate-600">
                <p className="text-base font-semibold text-slate-900 mb-2">
                  Kalkulačku se nepodařilo načíst (může jít o blokování třetích stran nebo výpadek sítě).
                </p>
                <p className="text-sm text-slate-500 mb-6">
                  Můžete přejít přímo na hlavní portál HypoSpace.cz nebo nás kontaktovat.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://hypospace.cz"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-brand-600 text-white font-bold text-sm shadow hover:bg-brand-700"
                  >
                    Otevřít HypoSpace.cz <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-slate-100 text-slate-800 font-bold text-sm hover:bg-slate-200"
                  >
                    Sjednat konzultaci
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Benefits & ZFP Advisory Sidebar */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-slate-950/80 rounded-2xl p-6 sm:p-8 border border-slate-800/80 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-brand-400 font-bold block mb-2">
              Proč řešit hypotéku s námi
            </span>
            <h4 className="text-2xl font-extrabold text-white leading-tight mb-4">
              ZFP Jagoš & partneři + HypoSpace.cz
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Nezávisle propojujeme technologii online srovnání HypoSpace s osobním servisem a vyjednávací silou skupiny ZFP Group.
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 border-t border-slate-800 pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">14 bank na jednom místě</strong>
                  <span className="text-slate-400 text-xs">Ušetříte týdny obíhání poboček. Vidíte přesné srovnání nabídek.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Neveřejné slevy ze sazeb</strong>
                  <span className="text-slate-400 text-xs">Díky stamilionovým objemům máme přístup k individuálním slevám.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Odhad nemovitosti zdarma</strong>
                  <span className="text-slate-400 text-xs">U vybraných bank vyjednáme odhad nemovitosti bez poplatku.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Kompletní servis a katastr</strong>
                  <span className="text-slate-400 text-xs">Pohlídáme čerpání úvěru, zástavní smlouvy i podání na katastr nemovitostí.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 space-y-3">
            <Link
              to="/kontakt"
              className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-amber-500 hover:from-brand-400 hover:to-amber-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-brand-500/20 hover:scale-[1.02]"
            >
              Nezávazná konzultace s naším specialistou
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <a
              href="https://hypospace.cz"
              target="_blank"
              rel="noreferrer noopener"
              className="w-full inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs border border-white/10 transition-colors"
            >
              Navštívit portál HypoSpace.cz
              <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-70" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-slate-800/60 text-[11px] text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>Integrovaný widget HypoSpace Sales Calculator. Data jsou zabezpečena a odesílána v souladu s GDPR.</p>
        <span className="text-slate-400 font-medium">Oficiální partner HypoSpace s.r.o.</span>
      </div>
    </div>
  );
}
