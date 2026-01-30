import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/src/components/Container";
import ProjectImage from "@/src/components/ProjectImage";
import Button from "@/src/components/Button";
import { getAllProjects, getProjectBySlug } from "@/src/data/projects";

const screenshotMap: Record<string, string[]> = {
  "ku-work": [
    "screenshot-1.png",
    "screenshot-2.png",
    "screenshot-3.png",
    "screenshot-4.png"
  ],
  "weather-laundry": [
    "screenshot-1.png",
    "screenshot-2.png",
    "screenshot-3.png",
    "screenshot-4.png"
  ],
  "personalised-pantry": [
    "screenshot-1.png",
    "screenshot-2.png",
    "screenshot-3.png",
    "screenshot-4.png"
  ]
};

type ProjectPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const screenshots = screenshotMap[project.slug] ?? ["cover.png"];

  return (
    <Container className="space-y-12">
      <header className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div className="space-y-4">
          <p className="section-kicker">Case Study</p>
          <h1 className="text-4xl font-semibold md:text-5xl">{project.title}</h1>
          <p className="text-lg text-ink/70">{project.role}</p>
          <div className="flex flex-wrap gap-3">
            <Button href="/projects" variant="outline">
              Back to projects
            </Button>
          </div>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-transparent">
          <ProjectImage
            src={`/projects/${project.slug}/cover.png`}
            alt={`${project.title} cover`}
            className="h-full w-full object-contain p-4"
            priority
          />
        </div>
      </header>

      <section className="space-y-6">
        <h2 className="section-title">Overview</h2>
        <div className="grid gap-6 rounded-3xl border border-accent/20 bg-white/90 p-6 md:grid-cols-3">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.2em] text-accent/70">Role</p>
            <p className="text-sm font-semibold">{project.role}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.2em] text-accent/70">Timeline</p>
            <p className="text-sm font-semibold">{project.date}</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-accent/70">Tools</p>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-accent/20 bg-accentSoft/40 px-3 py-1 text-xs text-ink/70"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="section-title">Problem</h2>
        <p className="text-lg text-ink/70">{project.summary}</p>
      </section>

      <section className="space-y-4">
        <h2 className="section-title">What I did</h2>
        <ul className="space-y-3 text-lg text-ink/70">
          {project.bullets.map((bullet) => (
            <li key={bullet}>• {bullet}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="section-title">Screenshots</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {screenshots.map((file) => (
            <div key={file} className="aspect-[16/9] overflow-hidden rounded-3xl bg-accentSoft/30">
              <ProjectImage
                src={`/projects/${project.slug}/${file}`}
                alt={`${project.title} ${file.replace(".png", "")}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
