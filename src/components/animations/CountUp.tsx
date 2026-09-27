import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'motion/react';

interface CountUpProps {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
}

export default function CountUp({
  to,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
  decimals = 0
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  // Format target number immediately so SSR/crawlers and initial render show real data instead of "0"
  const formattedFinal = new Intl.NumberFormat('cs-CZ', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(to);

  const [displayValue, setDisplayValue] = useState(formattedFinal);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    // Start counter animation smoothly from 0 to final target
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Smooth exponential ease-out
      onUpdate: (latest) => {
        const formatted = new Intl.NumberFormat('cs-CZ', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals
        }).format(latest);
        setDisplayValue(formatted);
      }
    });

    return () => controls.stop();
  }, [isInView, to, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
