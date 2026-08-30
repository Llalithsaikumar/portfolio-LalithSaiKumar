"use client";

import { m } from "motion/react";
import {
  GraduationCap,
  MapPin,
  Calendar,
  School,
} from "lucide-react";
import {
  staggerContainer,
  fadeUp,
  fadeUpSubtle,
  viewportOnce,
} from "@/lib/motion-variants";

// Education data
const education = [
  {
    id: 1,
    degree: "B.Tech in Artificial Intelligence and Data Science",
    institution: "Sree Rama Engineering College",
    location: "Tirupati, India",
    period: "Oct 2022 – Apr 2026",
  },
];

export default function Education() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
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
              Education
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              My academic background and the foundation behind my work in AI and
              data science.
            </p>
          </m.div>

          {/* Education Cards */}
          <div className="max-w-4xl mx-auto space-y-12">
            {education.map((edu, index) => (
              <m.div
                key={edu.id}
                variants={fadeUpSubtle}
                className="relative"
              >
                {/* Connecting Line */}
                {index < education.length - 1 && (
                  <div className="absolute left-[18px] top-0 lg:left-[39px] lg:top-0 bottom-[-48px] w-0.5 bg-gradient-to-b from-primary/80 to-primary/10 z-0" />
                )}

                <div className="flex gap-6">
                  {/* Timeline Icon */}
                  <div className="relative">
                    <div className=" w-10 h-10 lg:w-20 lg:h-20 rounded-2xl bg-background border-2 border-primary/20 shadow-md flex items-center justify-center z-10 relative">
                      <GraduationCap className="h-4 w-4 lg:h-8 lg:w-8 text-primary" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1">
                    <div className="bg-background rounded-2xl border shadow-md overflow-hidden">
                      {/* Header Section */}
                      <div className="bg-primary/5 p-6 border-b">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-bold">{edu.degree}</h3>
                            <div className="flex items-center text-muted-foreground mt-1">
                              <School className="h-4 w-4 mr-1.5" />
                              <span>{edu.institution}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-xs lg:text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{edu.period}</span>
                            <span className="mx-1">•</span>
                            <MapPin className="h-3.5 w-3.5 mr-0.5" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
