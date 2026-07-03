"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Code, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Llalithsaikumar",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/lalithsaikumar",
      label: "LinkedIn",
    },
    {
      icon: <Code className="h-5 w-5" />,
      href: "https://leetcode.com/u/Lalithsaikumar/",
      label: "LeetCode",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:l.lalithsaikumar@gmail.com",
      label: "Email",
    },
  ];

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <motion.div
            className="font-heading text-xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/">Lalith Sai Kumar</Link>
          </motion.div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <motion.div
                key={link.label}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* GitHub Sponsor Button */}
          <div className="flex justify-center items-center py-2">
            <motion.a
              href="https://github.com/sponsors/Llalithsaikumar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#db61a2] hover:bg-[#db61a2]/90 rounded-md shadow-sm transition-all border border-[#db61a2]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="h-3.5 w-3.5 fill-current text-white animate-pulse" />
              <span>Sponsor</span>
            </motion.a>
          </div>

          {/* Copyright */}
          <motion.div
            className="text-sm text-muted-foreground flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span>© {currentYear} Lekkala Lalith Sai Kumar. Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: 1,
              }}
              className="inline-flex mx-1"
            >
              <Heart className="h-4 w-4 text-red-500" />
            </motion.div>
            <span>and Next.js</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
