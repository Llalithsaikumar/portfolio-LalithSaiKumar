"use client";

import { m } from "motion/react";
import { Github, Linkedin, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";

const socialLinks = [
  {
    href: "https://github.com/Llalithsaikumar",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://linkedin.com/in/lalithsaikumar",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://leetcode.com/u/Lalithsaikumar/",
    label: "LeetCode",
    icon: Code,
  },
];

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0">
        {/* Decorative Circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-drift" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-drift-reverse" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <m.div
          className="flex flex-col items-center text-center space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Main Title */}
          <m.h1
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight"
            variants={fadeUp}
          >
            Developer. Creator. <br className="hidden sm:inline" />
            <span className="text-primary relative">
              Problem Solver.
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full"></span>
            </span>
          </m.h1>

          {/* Brief Description */}
          <m.p
            className="max-w-[700px] text-lg md:text-xl text-muted-foreground"
            variants={fadeUp}
          >
            I build RAG pipelines, LLM applications, FastAPI backends, and
            production ML systems with Python, GCP, Docker, and PostgreSQL.
          </m.p>

          {/* Tagline */}
          <m.div
            className="text-sm text-muted-foreground px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border"
            variants={fadeUp}
          >
            Turning complex problems into elegant solutions since 2022
          </m.div>

          {/* CTA Buttons */}
          <m.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            variants={fadeUp}
          >
            <m.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/projects">View My Work</Link>
              </Button>
            </m.div>
            <m.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-full px-8"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </m.div>
          </m.div>

          {/* Social Links */}
          <m.div className="flex space-x-4 mt-8" variants={fadeUp}>
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <m.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/80 backdrop-blur-sm border shadow-sm hover:bg-muted/80 transition-colors"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
              </m.a>
            ))}
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
