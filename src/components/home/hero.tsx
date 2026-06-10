"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      {/* Enhanced Background Texture */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--primary-rgb) 1px, transparent 1px),
              linear-gradient(to bottom, var(--primary-rgb) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Diagonal Lines */}
        <div
          className="absolute inset-0 opacity-[0.1] dark:opacity-[0.05]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, var(--primary-rgb), var(--primary-rgb) 1px, transparent 1px, transparent 20px)`,
          }}
        />

        {/* Radial Gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

        {/* Decorative Circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center space-y-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Main Title */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight"
            variants={item}
          >
            Developer. Creator. <br className="hidden sm:inline" />
            <span className="text-primary relative">
              Problem Solver.
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full"></span>
            </span>
          </motion.h1>

          {/* Brief Description */}
          <motion.p
            className="max-w-[700px] text-lg md:text-xl text-muted-foreground"
            variants={item}
          >
            I build RAG pipelines, LLM applications, FastAPI backends, and
            production ML systems with Python, GCP, Docker, and PostgreSQL.
          </motion.p>

          {/* Tagline */}
          <motion.div
            className="text-sm text-muted-foreground px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border"
            variants={item}
          >
            Turning complex problems into elegant solutions since 2022
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            variants={item}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/projects">View My Work</Link>
              </Button>
            </motion.div>
            <motion.div
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
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div className="flex space-x-4 mt-8" variants={item}>
            <motion.a
              href="https://github.com/Llalithsaikumar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background/80 backdrop-blur-sm border shadow-sm hover:bg-muted/80 transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/lalithsaikumar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background/80 backdrop-blur-sm border shadow-sm hover:bg-muted/80 transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/Lalithsaikumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background/80 backdrop-blur-sm border shadow-sm hover:bg-muted/80 transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Code className="h-5 w-5" />
              <span className="sr-only">LeetCode</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
