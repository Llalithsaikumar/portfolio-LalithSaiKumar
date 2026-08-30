"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  const transitionTimeout = useRef<number | undefined>(undefined);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    return () => window.clearTimeout(transitionTimeout.current);
  }, []);

  const toggleTheme = () => {
    // Enable the global color cross-fade only for the duration of the switch
    const root = window.document.documentElement;
    root.classList.add("theme-transition");
    window.clearTimeout(transitionTimeout.current);
    transitionTimeout.current = window.setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 400);

    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (!mounted) return;
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full w-9 h-9 transition-transform hover:scale-110"
        aria-label="Toggle theme"
        disabled
      >
        <Moon className="h-4 w-4 transition-opacity opacity-50" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full w-9 h-9 transition-transform hover:scale-110"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <m.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="inline-flex"
        >
          {theme === "light" ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </m.span>
      </AnimatePresence>
    </Button>
  );
}
