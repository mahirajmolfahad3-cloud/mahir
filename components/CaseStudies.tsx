"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import { ChevronDown } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const FIELDS: { key: "problem" | "solution" | "challenges" | "outcome"; label: string }[] = [
  { key: "problem", label: "The problem" },
  { key: "solution", label: "The solution" },
  { key: "challenges", label: "What was tricky" },
  { key: "outcome", label: "How it turned out" },
];

export function CaseStudies() {
  const [openSlug, setOpenSlug] = useState<string>(projects[0].slug);

  return (
    <section id="case-studies" className="section-shell">
      <div className="section-inner">
        <SectionHeading
          eyebrow="A closer look"
          title="The thinking behind a few of these"
          description="Not just what shipped, but the reasoning that got us there — written the way I'd explain it over coffee."
        />

        <div className="mt-14 space-y-4">
          {projects.map((project) => {
            const isOpen = openSlug === project.slug;
            return (
              <div
                key={project.slug}
                id={`case-${project.slug}`}
                className="section-card scroll-mt-24 overflow-hidden rounded-[24px]"
              >
                <button
                  onClick={() => setOpenSlug(isOpen ? "" : project.slug)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left transition-all duration-300 hover:bg-paper-surface/70 sm:px-8"
                >
                  <div>
                    <span className="font-display text-[13.5px] italic text-accent">
                      Case study
                    </span>
                    <h3 className="mt-1 font-display text-xl font-normal text-ink sm:text-2xl">
                      {project.name}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-ink-muted transition-transform duration-500 ${isOpen ? "rotate-180 text-accent" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-8 sm:px-8 sm:pb-10">
                    <div className="mb-8 aspect-[21/9] w-full overflow-hidden rounded-[18px] border border-border bg-paper-surface-2 shadow-soft">
                      <img
                        src={project.image}
                        alt={`${project.name} case study screenshot`}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                      {FIELDS.map((field) => (
                        <Reveal key={field.key}>
                          <h4 className="font-display text-[14px] italic text-accent">
                            {field.label}
                          </h4>
                          <p className="mt-2 text-[14.5px] leading-relaxed text-ink-muted">
                            {project.caseStudy[field.key]}
                          </p>
                        </Reveal>
                      ))}
                    </div>

                    <div className="mt-8">
                      <h4 className="font-display text-[14px] italic text-accent">
                        Built with
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-border/70 bg-paper-surface-2 px-3 py-1.5 text-[12px] text-ink-muted"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

