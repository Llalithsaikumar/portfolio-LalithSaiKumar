"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { text: "Home", href: "/" },
    { text: "Projects", href: "/projects" },
    { text: "Blog", href: "/blog" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-5 left-0 right-0 z-50 transition-all duration-300"
      )}
    >
      <div
        className={cn(
          "w-[90%] lg:w-[90%]  mx-auto transition-all duration-500 ease-in-out",
          scrolled ? "w-[90%] lg:w-[60%]" : ""
        )}
      >
        <nav
          className={cn(
            "flex items-center justify-between",
            "rounded-2xl px-4 py-2",
            "bg-background/90 backdrop-blur-lg",
            "border border-primary/5 dark:border-primary/10",
            "shadow-[0_5px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_5px_30px_rgba(255,255,255,0.02)]"
          )}
        >
          <Link
            href="/"
            className="text-lg font-bold relative group flex items-center gap-2"
          >
            <Avatar className="w-8 h-8">
              <AvatarImage
                src="/assets/profile.webp"
                alt="Avatar"
                className="rounded-full object-cover"
              />
              <AvatarFallback>LS</AvatarFallback>
            </Avatar>
            Lalith Sai Kumar
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 ">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover-underline text-sm font-medium relative group"
              >
                {item.text}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </nav>
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <m.div
              className="md:hidden overflow-hidden"
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="mt-2 flex flex-col space-y-4 rounded-xl bg-background/90 backdrop-blur-lg p-4 border border-primary/5 dark:border-primary/10 shadow-lg">
                {navItems.map((item, index) => (
                  <m.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.05 * index }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover-underline text-sm font-medium py-2 block"
                    >
                      {item.text}
                    </Link>
                  </m.div>
                ))}
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
