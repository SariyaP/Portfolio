import Link from "next/link";
import Container from "@/src/components/Container";
import Button from "@/src/components/Button";
import ProjectCard from "@/src/components/ProjectCard";
import ProjectImage from "@/src/components/ProjectImage";
import { getAllProjects } from "@/src/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home"
};

export default function HomePage() {
  const projects = getAllProjects();

  return (
    <Container className="space-y-16">
      <section className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div className="space-y-5">
          <p className="section-kicker">Portfolio</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            SARIYA PUNPRANG
          </h1>
          <p className="text-lg text-ink/70">
            UX/UI Designer with a frontend development background, enabling effective collaboration and practical design decisions.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/projects">View case studies</Button>
            <Button href="/about" variant="outline">
              About & Contact
            </Button>
          </div>
        </div>
        <div className="panel overflow-hidden">
          <ProjectImage
            src="/my-pic.png"
            alt="Sariya Punprang portrait"
            className="h-full w-full object-cover"
            priority
            unoptimized
          />
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="section-title">Featured case studies</h2>
          <Link href="/projects" className="text-sm font-semibold text-accent link-underline">
            View all projects →
          </Link>
        </div>
        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </Container>
  );
}
