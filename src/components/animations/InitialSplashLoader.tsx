import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface InitialSplashLoaderProps {
  children: React.ReactNode;
}

export default function InitialSplashLoader({ children }: InitialSplashLoaderProps) {
  const [shouldShow, setShouldShow] = useState<boolean>(false);
  const [loadingComplete, setLoadingComplete] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    try {
      const todayStr = new Date().toISOString().split('T')[0];
      const lastVisitDate = localStorage.getItem('zfp_daily_splash_visit');

      if (lastVisitDate !== todayStr) {
        // First visit of the day
        setShouldShow(true);
        localStorage.setItem('zfp_daily_splash_visit', todayStr);

        // Animate progress smoothly
        const interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval);
              setTimeout(() => setLoadingComplete(true), 350);
              return 100;
            }
            const increment = Math.random() * 25 + 15;
            return Math.min(prev + increment, 100);
          });
        }, 180);

        return () => clearInterval(interval);
      } else {
        // Already visited today
        setShouldShow(false);
        setLoadingComplete(true);
      }
    } catch {
      // Fallback for SSR / private browsing
      setShouldShow(false);
      setLoadingComplete(true);
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {shouldShow && !loadingComplete && (
          <motion.div
            key="splash-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center select-none overflow-hidden"
            aria-hidden="true"
          >
            {/* Ambient Aurora Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-brand-600/25 via-amber-500/20 to-transparent blur-[140px] animate-pulse" />
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:28px_28px] opacity-30" />
            </div>

            {/* Central Badge & Logo Reveal */}
            <div className="relative z-10 flex flex-col items-center text-center px-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative mb-6"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-brand-500 via-amber-400 to-orange-600 shadow-[0_0_40px_rgba(230,83,0,0.4)]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center">
                    <img
                      src="/logo-jagos-partneri.jpg"
                      alt="ZFP Jagoš & partneři"
                      className="w-full h-full object-cover"
                      width="128"
                      height="128"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Title & Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1.5 font-sans" role="heading" aria-level={2}>
                  ZFP <span className="bg-gradient-to-r from-brand-400 to-amber-300 bg-clip-text text-transparent">Jagoš & partneři</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 tracking-widest uppercase font-medium">
                  Komplexní finanční plánování
                </p>
              </motion.div>

              {/* Progress Line */}
              <div className="w-48 sm:w-56 h-1 bg-slate-800 rounded-full overflow-hidden relative shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-500 to-amber-400 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>

              <span className="text-[11px] font-mono text-slate-500 mt-3 tracking-wider">
                {Math.round(progress)}%
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className={shouldShow && !loadingComplete ? 'pointer-events-none opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        {children}
      </div>
    </>
  );
}
