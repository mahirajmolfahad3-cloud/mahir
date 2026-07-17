"use client";

import { useState } from "react";
import type { Project } from "@/lib/data";
import { ArrowUpRight, GithubIcon, CheckIcon } from "./icons";
import { Reveal } from "./Reveal";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;
  const [imgError, setImgError] = useState(false);

  return (
    <Reveal>
      <article
        className={`section-card grid grid-cols-1 items-center gap-6 rounded-[20px] p-4 sm:p-6 lg:grid-cols-[1fr_1fr] lg:gap-10 lg:p-8 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        <div className="relative overflow-hidden rounded-[12px] border border-border/60 bg-paper-surface-2">
          <div className="aspect-[16/11]">
            {imgError ? (
              <div className="flex h-full w-full items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-ink-muted">
                  <svg className="h-8 w-8 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                  <span className="text-[11px] font-medium">Preview unavailable</span>
                </div>
              </div>
            ) : (
              <img
                src={project.image}
                alt={`${project.name} screenshot`}
                loading="lazy"
                onError={() => setImgError(true)}
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="font-display text-[1.2rem] sm:text-[1.4rem] font-normal tracking-tight text-ink">
            {project.name}
          </h3>
          <p className="mt-1.5 font-display text-[13.5px] italic text-accent">
            {project.tagline}
          </p>
          <p className="mt-3 text-[14.5px] leading-[1.75] text-ink-muted sm:text-[15px]">
            {project.description}
          </p>

          <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {project.impact}
          </div>

          <ul className="mt-5 space-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[13px] leading-6 text-ink-muted">
                <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-paper-surface px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-muted"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-[13px] font-medium text-paper transition-colors hover:bg-accent hover:text-ink"
              >
                Live Demo
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper-surface px-4 py-2.5 text-[13px] font-medium text-ink transition-colors hover:border-accent hover:bg-accent/10"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                GitHub
              </a>
            )}
            <a
              href={`#case-${project.slug}`}
              className="inline-flex items-center gap-1.5 px-2 py-2.5 text-[13px] font-medium text-ink-muted underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent"
            >
              Read the case study
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}