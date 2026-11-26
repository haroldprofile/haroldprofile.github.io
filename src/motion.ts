import type { Variants } from 'motion/react';

const ease = [0.16, 1, 0.3, 1] as const;

/** Spread onto a <motion.section> for fade + slide-in when it scrolls into view. */
export const REVEAL = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease },
  viewport: { once: true, amount: 'some' },
} as const;

export const VIEWPORT = { once: true, amount: 0.15 } as const;

/** Card variant; `custom` = index gives a capped stagger (max 3 steps) per row. */
export const ITEM: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease, delay: (i % 4) * 0.07 },
  }),
};
