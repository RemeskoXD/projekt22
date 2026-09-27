import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('zfp_cookie_consent');
      if (!consent) {
        // Small delay so it does not distract immediately on first paint
        const timer = setTimeout(() => setIsVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage access fallback
      setIsVisible(false);
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem('zfp_cookie_consent', 'accepted');
    } catch {}
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    try {
      localStorage.setItem('zfp_cookie_consent', 'essential_only');
    } catch {}
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          aria-label="Nastavení souborů cookies"
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-slate-950/95 backdrop-blur-md text-white p-5 rounded-2xl shadow-2xl border border-slate-800"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0 text-brand-400">
              <Cookie className="w-5 h-5" />
            </div>
            <div className="flex-1 text-xs text-slate-300 leading-relaxed">
              <p className="font-semibold text-sm text-white mb-1">
                Soubory cookies a ochrana soukromí
              </p>
              <p>
                Tento web používá nezbytné technické soubory cookies a anonymizované analytické nástroje k zajištění bezpečného chodu a měření návštěvnosti.{' '}
                <Link
                  to="/ochrana-osobnich-udaju"
                  className="text-brand-400 hover:text-brand-300 underline font-medium"
                >
                  Více informací
                </Link>
                .
              </p>
            </div>
            <button
              onClick={handleAcceptEssential}
              aria-label="Zavřít lištu cookies"
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap sm:flex-nowrap gap-2 text-xs font-semibold">
            <button
              onClick={handleAcceptAll}
              className="w-full sm:w-auto flex-1 py-2 px-3 rounded-lg bg-brand-600 hover:bg-brand-500 text-white transition-colors text-center shadow-sm"
            >
              Rozumím a přijmout
            </button>
            <button
              onClick={handleAcceptEssential}
              className="w-full sm:w-auto py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors text-center"
            >
              Pouze nezbytné
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
