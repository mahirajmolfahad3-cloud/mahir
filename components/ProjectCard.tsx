import type { Project } from "@/lib/data";
import { ArrowUpRight, GithubIcon, CheckIcon } from "./icons";
import { Reveal } from "./Reveal";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <Reveal>
      <article
        className={`grid grid-cols-1 items-center gap-10 rounded-[24px] border border-border bg-paper-surface p-6 shadow-soft transition-shadow hover:shadow-soft-lg sm:p-8 lg:grid-cols-2 lg:gap-16 ${reversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
      >
        <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[18px] border border-border bg-paper-surface-2">
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h3 className="font-display text-[1.7rem] font-normal tracking-tight text-ink">
            {project.name}
          </h3>
          <p className="mt-1 font-display text-[14.5px] italic text-accent">
            {project.tagline}
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
            {project.description}
          </p>

          <ul className="mt-5 space-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-ink-muted">
                <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-paper-surface-2 px-3 py-1 text-[12px] text-ink-muted"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-[13px] text-paper transition-transform hover:-translate-y-0.5"
              >
                Live Demo
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2.5 text-[13px] text-ink transition-colors hover:border-sage"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                GitHub
              </a>
            )}
            <a
              href={`#case-${project.slug}`}
              className="inline-flex items-center gap-1.5 px-2 py-2.5 text-[13px] text-ink-muted underline decoration-sage/50 decoration-2 underline-offset-4 transition-colors hover:text-accent"
            >
              Read the case study
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

