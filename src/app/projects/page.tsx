import Projects from "@/components/projects/project-comp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Lalith Sai Kumar",
  description: "Projects built by Lalith Sai Kumar - AI/LLM Engineer",
};

const ProjectsPage = () => {
  return (
    <div className="mx-auto w-[90%] flex flex-col justify-center items-center">
      <Projects />
    </div>
  );
};

export default ProjectsPage;
