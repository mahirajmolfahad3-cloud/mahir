import { projects } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects() {
  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="A few things I've enjoyed building"
          description="Each project started as a real problem someone was quietly working around. Here's what came out of sitting with it."
        />

        <div className="mt-14 space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
