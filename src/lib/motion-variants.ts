import type { Variants } from "motion/react";

// Shared easing curve — a gentle ease-out used across the site.
export const easeOutSoft = [0.21, 0.47, 0.32, 0.98] as const;

// Parent wrapper that staggers its children's reveal.
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

// Standard reveal: fade in while rising and un-blurring.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easeOutSoft },
  },
};

// Softer variant for cards inside an already-revealed section.
export const fadeUpSubtle: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutSoft },
  },
};

// Default viewport config: animate once, when ~20% of the element is visible.
export const viewportOnce = { once: true, amount: 0.2 } as const;
