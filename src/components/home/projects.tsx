"use client";

import { m } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  staggerContainer,
  fadeUp,
  fadeUpSubtle,
  viewportOnce,
} from "@/lib/motion-variants";

// Project data
const projects = [
  {
    id: "financial-analytics",
    title: "Financial Analytics Platform",
    description:
      "Serverless backend platform ingesting live stock data for 150+ NSE-listed stocks with PostgreSQL schemas, external API integration, and hash-based caching reducing API calls by 70-80%. Handles 1K+ daily data updates with ownership-based access control.",
    image:
      "/assets/thumbnails/financial-analytics-platform/finsight-hero.webp",
    tags: ["PostgreSQL", "REST APIs", "Serverless Functions", "Supabase"],
    github: "https://github.com/Llalithsaikumar",
    live: "https://www.fin-sight.live/",
  },
  {
    id: "ai-copilot-console",
    title: "AI Copilot Console",
    description:
      "Developer-focused AI console for coordinating chat, tool calls, and workspace context in a clean web interface. Deployed on Vercel with a responsive command-center experience for building and testing AI-assisted workflows.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800",
    tags: ["React", "TypeScript", "AI Workflows", "Vercel"],
    github: "https://github.com/Llalithsaikumar/AI-Copilot-Console",
    live: "https://ai-copilot-console.vercel.app/",
  },
  {
    id: "ai-campus-chatbot",
    title: "AI Campus Chatbot",
    description:
      "A full-stack, privacy-first chat assistant for campus information with RAG and locally-hosted Gemma2:2b model. Features real-time chat UI, custom knowledge base, and runs entirely offline.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800",
    tags: ["Python", "Flask", "Ollama", "FAISS"],
    github: "https://github.com/Llalithsaikumar/AI-ChatBot-with-Gemma2",
  },
];

export default function Projects() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="space-y-12"
        >
          {/* Section Header */}
          <m.div variants={fadeUp} className="space-y-4 text-center">
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl">
              Featured Projects
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              A selection of my recent work. Each project is unique and solves
              specific problems.
            </p>
          </m.div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <m.div key={project.id} variants={fadeUpSubtle}>
                <ProjectCard project={project} />
              </m.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-8">
            <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <m.div
      className="group relative overflow-hidden rounded-xl border bg-background shadow-md transition-shadow hover:shadow-lg h-full"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Creative card design with diagonal split */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 z-0" />
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] z-0" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/5 rounded-tr-[50px] z-0" />

      {/* Project Image with creative overlay */}
      <div className="aspect-video overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={600}
          height={400}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Floating badge */}
        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium z-20 border">
          {project.tags[0]}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4 relative z-10">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <m.div
            className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center"
            whileHover={{ rotate: 360 }}
          >
            <ExternalLink className="h-4 w-4" />
          </m.div>
        </div>
        <p className="text-sm text-muted-foreground">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(1).map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="bg-background border-primary/20 flex items-center gap-1"
            >
              <Code className="h-3 w-3" />
              {tag}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          {project.github && (
            <m.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-4 w-4 mr-1" />
              GitHub
            </m.a>
          )}
          {project.live && (
            <m.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Live Demo
            </m.a>
          )}
        </div>
      </div>

      {/* View Details Link */}
      <Link href={`/projects/${project.id}`} className="absolute inset-0">
        <span className="sr-only">View {project.title} details</span>
      </Link>
    </m.div>
  );
}
