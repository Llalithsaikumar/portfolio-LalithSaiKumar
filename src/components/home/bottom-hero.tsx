"use client";
import { Code } from "lucide-react";
import { m } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/motion-variants";

const skills = [
  "Python & AI",
  "Retrieval-Augmented Generation",
  "Large Language Models",
  "FastAPI & Django",
  "PostgreSQL",
  "Docker & DevOps",
  "REST APIs",
  "ML Pipelines",
];

export default function BottomHero() {
  return (
    <section className="py-24 flex justify-center items-center px-5 lg:-px-0">
      <div className="container max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between gap-12 items-center">
          <m.div
            className="max-w-md text-center md:text-left"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <h2 className="text-3xl font-bold mb-6 text-gradient">
              Transforming Ideas Into <br />
              Digital Excellence
            </h2>
            <p className="text-muted-foreground mb-6">
              With expertise in AI/LLM engineering, RAG pipelines, FastAPI backends,
            and production ML systems, I build robust, scalable solutions.
            Every line of code is written with performance, data consistency,
            and system efficiency in mind.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {skills.map((skill, index) => (
                <m.span
                  key={skill}
                  className="px-3 py-1 bg-secondary dark:bg-accent rounded-full text-xs"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.07 }}
                >
                  {skill}
                </m.span>
              ))}
            </div>
          </m.div>

          <m.div
            className="w-full max-w-xs relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="rounded-full w-48 h-48 md:w-56 md:h-56 mx-auto bg-secondary dark:bg-accent flex items-center justify-center animate-float">
              <div className="rounded-full w-36 h-36 md:w-44 md:h-44 bg-background flex items-center justify-center relative">
                <div className="rounded-full w-24 h-24 md:w-32 md:h-32 bg-secondary dark:bg-accent flex items-center justify-center">
                  <Code className="h-12 w-12 text-foreground" />
                </div>

                {/* Orbital circles */}
                <div className="absolute inset-0 rounded-full border border-border animate-[spin_20s_linear_infinite] z-10">
                  <div className="absolute -top-2.5 -mt-1 left-1/2 -ml-1 w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div
                  className="absolute inset-0 rounded-full border border-border z-0 animate-[spin_15s_linear_infinite_reverse]"
                  style={{
                    width: "110%",
                    height: "110%",
                    top: "-5%",
                    left: "-5%",
                  }}
                >
                  <div className="absolute -top -mt-1 left-1/2 -ml-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
