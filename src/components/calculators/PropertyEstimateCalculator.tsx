import React, { useState, useMemo } from 'react';
import { Building2, ExternalLink, ArrowRight, MapPin, Sparkles, CheckCircle2, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

type PropertyType = 'flat' | 'house' | 'land' | 'commercial';
type PropertyCondition = 'new' | 'renovated' | 'good' | 'original';

export default function PropertyEstimateCalculator() {
  const [propertyType, setPropertyType] = useState<PropertyType>('flat');
  const [region, setRegion] = useState<string>('veseli');
  const [area, setArea] = useState<number>(75);
  const [condition, setCondition] = useState<PropertyCondition>('good');
  const [hasBalcony, setHasBalcony] = useState<boolean>(true);
  const [hasParking, setHasParking] = useState<boolean>(false);

  // Region base prices per m² (CZK)
  const regionRates: Record<string, { label: string; flatRate: number; houseRate: number; landRate: number }> = {
    veseli: { label: 'Veselí nad Moravou & Slovácko', flatRate: 52000, houseRate: 46000, landRate: 2800 },
    brno_mesto: { label: 'Brno-město', flatRate: 98000, houseRate: 85000, landRate: 7500 },
    brno_venkov: { label: 'Brno-venkov', flatRate: 68000, houseRate: 58000, landRate: 4200 },
    hodonin: { label: 'Hodonín a okolí', flatRate: 48000, houseRate: 42000, landRate: 2400 },
    uh_hradiste: { label: 'Uherské Hradiště a okolí', flatRate: 56000, houseRate: 49000, landRate: 3100 },
    breclav: { label: 'Břeclav a okolí', flatRate: 53000, houseRate: 47000, landRate: 2900 },
    zlin: { label: 'Zlín a okolí', flatRate: 62000, houseRate: 54000, landRate: 3600 },
    other_cz: { label: 'Ostatní lokality ČR', flatRate: 55000, houseRate: 48000, landRate: 3000 },
  };

  const conditionCoefficients: Record<PropertyCondition, { label: string; coef: number }> = {
    new: { label: 'Novostavba / Developerský projekt', coef: 1.18 },
    renovated: { label: 'Po kompletní rekonstrukci', coef: 1.08 },
    good: { label: 'Velmi dobrý udržovaný stav', coef: 0.98 },
    original: { label: 'Původní stav / Před rekonstrukcí', coef: 0.78 },
  };

  const calculation = useMemo(() => {
    const selectedRegion = regionRates[region] || regionRates.veseli;
    let baseRate = selectedRegion.flatRate;

    if (propertyType === 'house') {
      baseRate = selectedRegion.houseRate;
    } else if (propertyType === 'land') {
      baseRate = selectedRegion.landRate;
    } else if (propertyType === 'commercial') {
      baseRate = selectedRegion.flatRate * 0.9;
    }

    const condCoef = conditionCoefficients[condition].coef;
    let estimate = area * baseRate * condCoef;

    if (hasBalcony && propertyType === 'flat') {
      estimate += 120000;
    }
    if (hasParking) {
      estimate += 300000;
    }

    const minEstimate = Math.round((estimate * 0.94) / 50000) * 50000;
    const maxEstimate = Math.round((estimate * 1.06) / 50000) * 50000;
    const avgPricePerM2 = Math.round(estimate / area);

    return {
      minEstimate,
      maxEstimate,
      avgPricePerM2
    };
  }, [propertyType, region, area, condition, hasBalcony, hasParking]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('cs-CZ', {
      style: 'currency',
      currency: 'CZK',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
      {/* ZFP Reality Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-800">
        <div className="flex items-center gap-4">
          <div className="bg-white p-2.5 rounded-2xl shadow-sm flex items-center justify-center shrink-0">
            <img
              src="/logo-reality-web-2-066e7c04.webp"
              alt="ZFP Reality logo"
              className="h-7 w-auto object-contain"
              width="130"
              height="32"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-500/10 text-brand-400 text-xs font-semibold border border-brand-500/20 mb-1">
              <Sparkles className="w-3 h-3" /> ZFP Reality – Oceňování trhu
            </div>
            <h3 className="text-xl font-bold text-white">Online kalkulačka odhadu nemovitosti</h3>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400 sm:text-right">
          <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Data z realizovaných prodejů a katastru nemovitostí</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Property Type Selector */}
          <div>
            <label className="text-sm font-medium text-slate-300 block mb-2">
              Typ nemovitosti
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'flat', label: 'Byt' },
                { id: 'house', label: 'Dům' },
                { id: 'land', label: 'Pozemek' },
                { id: 'commercial', label: 'Komerční' }
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setPropertyType(t.id as PropertyType)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${
                    propertyType === t.id
                      ? 'bg-brand-500 text-slate-950 shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Region / Locality Select */}
          <div>
            <label htmlFor="property-region" className="text-sm font-medium text-slate-300 block mb-2">
              Lokalita (okres / region)
            </label>
            <div className="relative">
              <select
                id="property-region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 appearance-none cursor-pointer"
              >
                {Object.entries(regionRates).map(([key, val]) => (
                  <option key={key} value={key} className="bg-slate-900 text-white">
                    {val.label}
                  </option>
                ))}
              </select>
              <MapPin className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Area Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="property-area" className="text-sm font-medium text-slate-300">
                {propertyType === 'land' ? 'Výměra pozemku' : 'Užitná / podlahová plocha'}
              </label>
              <span className="text-xl font-extrabold text-brand-400 font-mono">
                {area} m²
              </span>
            </div>
            <input
              id="property-area"
              type="range"
              min={propertyType === 'land' ? 100 : 20}
              max={propertyType === 'land' ? 3000 : 350}
              step={propertyType === 'land' ? 25 : 5}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              aria-label="Plocha nemovitosti v metrech čtverečních"
              className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1">
              <span>{propertyType === 'land' ? '100 m²' : '20 m²'}</span>
              <span>{propertyType === 'land' ? '1 500 m²' : '150 m²'}</span>
              <span>{propertyType === 'land' ? '3 000 m²' : '350 m²'}</span>
            </div>
          </div>

          {/* Condition Selector */}
          <div>
            <label className="text-sm font-medium text-slate-300 block mb-2">
              Stav nemovitosti
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {Object.entries(conditionCoefficients).map(([key, val]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setCondition(key as PropertyCondition)}
                  className={`py-2 px-3 rounded-xl text-xs text-left font-medium border transition-all ${
                    condition === key
                      ? 'border-brand-500 bg-brand-500/10 text-brand-400 font-semibold'
                      : 'border-slate-800 bg-slate-800/60 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {val.label}
                </button>
              ))}
            </div>
          </div>

          {/* Amenities checkboxes */}
          {propertyType !== 'land' && (
            <div className="pt-2 flex flex-wrap gap-4">
              <label className="inline-flex items-center gap-2 cursor-pointer text-xs text-slate-300">
                <input
                  type="checkbox"
                  checked={hasBalcony}
                  onChange={(e) => setHasBalcony(e.target.checked)}
                  className="rounded border-slate-700 text-brand-600 focus:ring-brand-500 bg-slate-800 w-4 h-4"
                />
                <span>Balkon / terasa / lodžie</span>
              </label>

              <label className="inline-flex items-center gap-2 cursor-pointer text-xs text-slate-300">
                <input
                  type="checkbox"
                  checked={hasParking}
                  onChange={(e) => setHasParking(e.target.checked)}
                  className="rounded border-slate-700 text-brand-600 focus:ring-brand-500 bg-slate-800 w-4 h-4"
                />
                <span>Garáž / vyhrazené parkování</span>
              </label>
            </div>
          )}
        </div>

        {/* Results Column */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-slate-950/80 rounded-2xl p-6 sm:p-8 border border-slate-800/80">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Orientační tržní hodnota
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                {regionRates[region]?.label.split('&')[0].trim()}
              </span>
            </div>

            <div className="mt-5">
              <div className="text-3xl sm:text-4xl font-black text-amber-400 tracking-tight leading-tight">
                {formatCurrency(calculation.minEstimate)}
                <span className="text-slate-400 font-normal text-2xl"> až </span>
                <br className="sm:hidden" />
                {formatCurrency(calculation.maxEstimate)}
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Průměrná orientační jednotková cena: <strong className="text-white">{formatCurrency(calculation.avgPricePerM2)} / m²</strong>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Založeno na cenových mapách a reálných kupních cenách</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bezplatná konzultace makléře ZFP Reality přímo na místě</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zajištění bezpečné advokátní úschovy a smluv</span>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <Link
              to="/kontakt"
              className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/20 hover:scale-[1.02]"
            >
              Objednat přesný odhad makléře zdarma
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <a
              href="https://www.zfpreality.cz"
              target="_blank"
              rel="noreferrer noopener"
              className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs border border-white/10 transition-colors"
            >
              Kompletní nabídka na ZFP Reality
              <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-70" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800/60 text-[11px] text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>Výsledek kalkulačky slouží pouze jako statistický odhad. Přesné ocenění vyžaduje posouzení konkrétní nemovitosti.</p>
        <span className="text-slate-400 font-medium">Ve spolupráci se ZFP Reality s.r.o.</span>
      </div>
    </div>
  );
}
