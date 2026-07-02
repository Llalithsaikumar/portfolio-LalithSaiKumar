import BottomHero from "@/components/home/bottom-hero";
import ContactSection from "@/components/home/contact-section";
import Education from "@/components/home/education";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import WorkExperience from "@/components/home/work-experience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lalith Sai Kumar - AI/LLM Engineer",
  description: "Lalith Sai Kumar is an AI/LLM engineer building RAG pipelines, FastAPI backends, production ML systems, and cloud-native AI applications.",
};

export default function Home() {
  return (
    <>
      <main className="w-full lg:w-[90%] mx-auto flex flex-col justify-center items-center">
        <Hero />
        <WorkExperience />
        <Education />
        <Projects />
        <BottomHero />
        <ContactSection />
      </main>
    </>
  );
}
