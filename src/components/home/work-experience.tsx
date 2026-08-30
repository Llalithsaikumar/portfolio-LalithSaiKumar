"use client";

import { m } from "motion/react";
import {
  Briefcase,
  MapPin,
  Code,
  Calendar,
  Building,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  staggerContainer,
  fadeUp,
  fadeUpSubtle,
  viewportOnce,
} from "@/lib/motion-variants";

// Work experience data
const experiences = [
  {
    id: 1,
    title: "Open Source Contributor",
    company: "Activist (GitHub)",
    location: "Remote",
    period: "Dec 2025",
    skills: ["Backend", "Frontend", "APIs", "CI/CD", "Testing"],
    description:
      "Refactored backend and frontend modules to improve domain clarity and data consistency. Updated APIs, shared types, tests, and documentation to align with revised domain models. Collaborated with maintainers through structured pull requests, reviews, and CI fixes.",
    achievementsUrl: "https://github.com/activist-org/activist/pull/1815",
  },
  {
    id: 2,
    title: "Machine Learning Intern",
    company: "Proven Solution",
    location: "Riyadh, Saudi Arabia (Remote)",
    period: "Oct 2024 – May 2025",
    skills: ["ML Algorithms", "Inference Engine", "REST APIs", "Agile", "Team Review"],
    description:
      "Designed and tested ML algorithms achieving 85% accuracy for telemetry systems. Developed scalable inference engine reducing latency by 30 seconds. Built and debugged REST APIs in collaborative team environment. Contributed to 15+ Agile sprints and reviewed 50+ PRs.",
  },
];

export default function WorkExperience() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background Elements */}

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
              Work Experience
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              A timeline of my professional journey and the skills I&apos;ve
              developed along the way.
            </p>
          </m.div>

          {/* Experience Cards - Completely Redesigned */}
          <div className="max-w-4xl mx-auto space-y-12">
            {experiences.map((exp, index) => (
              <m.div
                key={exp.id}
                variants={fadeUpSubtle}
                className="relative"
              >
                {/* Connecting Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-[18px] top-0 lg:left-[39px] lg:top-0 bottom-[-48px] w-0.5 bg-gradient-to-b from-primary/80 to-primary/10 z-0" />
                )}

                <div className="flex gap-6">
                  {/* Timeline Icon */}
                  <div className="relative">
                    <div className=" w-10 h-10 lg:w-20 lg:h-20 rounded-2xl bg-background border-2 border-primary/20 shadow-md flex items-center justify-center z-10 relative">
                      <Briefcase className="h-4 w-4 lg:h-8 lg:w-8 text-primary" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1">
                    <div className="bg-background rounded-2xl border shadow-md overflow-hidden">
                      {/* Header Section */}
                      <div className="bg-primary/5 p-6 border-b">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            <div className="flex items-center text-muted-foreground mt-1">
                              <Building className="h-4 w-4 mr-1.5" />
                              <span>{exp.company}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-xs lg:text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{exp.period}</span>
                            <span className="mx-1">•</span>
                            <MapPin className="h-3.5 w-3.5 mr-0.5" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 space-y-4">
                        <p className="text-sm">{exp.description}</p>

                        {/* Skills */}
                        <div>
                          <h4 className="text-sm font-medium mb-2 flex items-center">
                            <Code className="h-3.5 w-3.5 mr-1.5" />
                            Technologies & Skills
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <Badge
                                key={skill}
                                variant="outline"
                                className="bg-background border-primary/20 flex items-center gap-1 rounded-full"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Achievements Button - Could link to detailed view */}
                        {exp.achievementsUrl && (
                          <div className="pt-2">
                            <m.a
                              href={exp.achievementsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary inline-flex items-center cursor-pointer"
                              whileHover={{ x: 5 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              View achievements
                              <ArrowRight className="h-3.5 w-3.5 ml-1" />
                            </m.a>
                          </div>
                        )}
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
