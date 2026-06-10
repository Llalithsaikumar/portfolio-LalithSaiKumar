import { notFound } from "next/navigation";
import { projectsData } from "@/utilities/data";
import ProjectDetail from "@/components/projects/project-details";
import { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export const metadata: Metadata = {
  title: "Project Details | Lalith Sai Kumar",
  description: "Detailed view of project built by Lalith Sai Kumar",
};
export default async function ProjectDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-[90%] flex flex-col justify-center items-center mx-auto">
      <ProjectDetail project={project} />
    </div>
  );
}
