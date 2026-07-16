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
        className={`group section-card grid grid-cols-1 items-center gap-6 rounded-[32px] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-accent/35 sm:gap-8 sm:p-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:p-8 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        <div className="relative overflow-hidden rounded-[24px] border border-border/70 bg-paper-surface-2/70 p-2.5 sm:p-3">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,169,110,0.14),transparent_48%)]" />
          <div className="relative aspect-[16/11] overflow-hidden rounded-[18px] bg-paper-surface-2/50">
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
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="font-display text-[1.4rem] font-normal tracking-tight text-ink sm:text-[1.7rem]">
            {project.name}
          </h3>
          <p className="mt-1.5 font-display text-[14px] italic text-accent">
            {project.tagline}
          </p>
          <p className="mt-4 text-[15px] leading-8 text-ink-muted sm:text-[15.5px]">
            {project.description}
          </p>

          <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 text-[12px] font-medium uppercase tracking-[0.2em] text-accent">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {project.impact}
          </div>

          <ul className="mt-6 space-y-2.5">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[13px] leading-7 text-ink-muted">
                <CheckIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border/70 bg-paper-surface px-3 py-1.5 text-[11.5px] font-medium uppercase tracking-[0.16em] text-ink-muted transition-colors duration-300 group-hover:border-accent/40 group-hover:text-ink"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-[13px] font-medium text-paper shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-ink"
              >
                Live Demo
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-paper-surface/70 px-4 py-2.5 text-[13px] font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                GitHub
              </a>
            )}
            <a
              href={`#case-${project.slug}`}
              className="inline-flex items-center gap-1.5 px-2 py-2.5 text-[13px] font-medium text-ink-muted underline decoration-accent/50 decoration-2 underline-offset-4 transition-colors hover:text-accent"
            >
              Read the case study
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}