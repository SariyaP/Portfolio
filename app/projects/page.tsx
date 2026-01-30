import Container from "@/src/components/Container";
import ProjectCard from "@/src/components/ProjectCard";
import { getAllProjects } from "@/src/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <Container className="space-y-10">
      <header className="space-y-3">
        <p className="section-kicker">Projects</p>
        <h1 className="text-4xl font-semibold md:text-5xl">Case studies</h1>
        <p className="max-w-2xl text-lg text-ink/70">
          A selection of UX/UI and frontend projects focused on thoughtful interfaces, strong
          visual systems, and pragmatic delivery.
        </p>
      </header>
      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}
