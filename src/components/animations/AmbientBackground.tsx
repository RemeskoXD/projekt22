import { motion, useScroll, useTransform, useSpring } from 'motion/react';

interface AmbientBackgroundProps {
  variant?: 'dark' | 'light' | 'hero';
}

export default function AmbientBackground({ variant = 'hero' }: AmbientBackgroundProps) {
  const { scrollY } = useScroll();

  // Smooth springs for scroll-driven parallax
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 45,
    damping: 20,
    mass: 0.8
  });

  // Parallax transformations for background layers
  const orb1Y = useTransform(smoothScrollY, [0, 2000], [0, 350]);
  const orb1Rotate = useTransform(smoothScrollY, [0, 2000], [0, 120]);
  const orb2Y = useTransform(smoothScrollY, [0, 2000], [0, -250]);
  const orb2Scale = useTransform(smoothScrollY, [0, 1000], [1, 1.25]);
  const orb3Y = useTransform(smoothScrollY, [0, 2000], [0, 450]);
  const gridY = useTransform(smoothScrollY, [0, 2000], [0, 150]);

  if (variant === 'light') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        {/* Soft golden orb */}
        <motion.div
          style={{ y: orb1Y, rotate: orb1Rotate }}
          className="absolute -top-32 right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-brand-300/20 via-amber-200/15 to-transparent blur-3xl will-change-transform"
        />
        {/* Soft amber orb */}
        <motion.div
          style={{ y: orb2Y, scale: orb2Scale }}
          className="absolute top-[40%] -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-brand-400/10 via-amber-300/10 to-transparent blur-3xl will-change-transform"
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none" aria-hidden="true">
      {/* Animated Subtle Grid Pattern */}
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-40 will-change-transform"
      />

      {/* Main Orange Glowing Orb */}
      <motion.div
        style={{ y: orb1Y, rotate: orb1Rotate }}
        className="absolute -top-40 left-[15%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-brand-500/25 via-amber-500/15 to-transparent blur-[120px] will-change-transform"
      />

      {/* Secondary Deep Amber / Indigo Orb */}
      <motion.div
        style={{ y: orb2Y, scale: orb2Scale }}
        className="absolute top-[35%] right-[-5%] w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-brand-600/20 via-orange-500/10 to-transparent blur-[140px] will-change-transform"
      />

      {/* Subtle Floating Highlight Orb */}
      <motion.div
        style={{ y: orb3Y }}
        className="absolute top-[70%] left-[25%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-amber-400/15 via-brand-500/10 to-transparent blur-[110px] will-change-transform"
      />

      {/* Ambient Moving Light Wave */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-900" />
    </div>
  );
}
