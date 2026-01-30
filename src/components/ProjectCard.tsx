import type { Project } from "@/src/data/projects";
import ProjectImage from "@/src/components/ProjectImage";
import Button from "@/src/components/Button";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group grid gap-6 rounded-3xl border border-accent/20 bg-white/90 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg md:grid-cols-[1.2fr_1fr]">
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-accent/70">{project.date}</p>
          <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
          <p className="text-sm text-ink/70">{project.role}</p>
        </div>
        <p className="text-sm text-ink/70">{project.summary}</p>
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
        <ul className="space-y-2 text-sm text-ink/70">
          {project.bullets.slice(0, 2).map((bullet) => (
            <li key={bullet}>• {bullet}</li>
          ))}
        </ul>
        <Button href={`/projects/${project.slug}`} variant="outline">
          Read case study
        </Button>
      </div>
      <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-accentSoft/30">
        <ProjectImage
          src={`/projects/${project.slug}/cover.png`}
          alt={`${project.title} cover`}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </div>
    </article>
  );
}
