import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  className?: string;
  viewportMargin?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  distance = 30,
  duration = 0.6,
  className = '',
  viewportMargin = '-60px',
  ...props
}: ScrollRevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance };
      case 'down':
        return { opacity: 0, y: -distance };
      case 'left':
        return { opacity: 0, x: distance };
      case 'right':
        return { opacity: 0, x: -distance };
      case 'none':
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: viewportMargin as any }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
