"use client";

import { useEffect, useRef } from "react";
import { m } from "motion/react";

// Tracks whether the app has already completed its first client render.
let hasLoadedOnce = false;

// Re-mounts on every route change, giving each page a soft entrance.
// The very first load (including SSR markup) skips the animation so content
// is visible before JavaScript hydrates — only client-side navigations animate.
export default function Template({ children }: { children: React.ReactNode }) {
  const isFirstLoad = useRef(!hasLoadedOnce).current;

  useEffect(() => {
    hasLoadedOnce = true;
  }, []);

  return (
    <m.div
      initial={isFirstLoad ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </m.div>
  );
}
