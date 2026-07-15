import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { CaseStudies } from "@/components/CaseStudies";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeaturedProjects />
        <CaseStudies />
        <Services />
        <TechStack />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
