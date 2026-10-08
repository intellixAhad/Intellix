import projectData from "@/data/projectData";
import Reveal from "../motions/reveal";
import Badge from "../common/Badge";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import ProjectCard from "../common/ProjectCard";

const ProjectSection = () => {
  return (
    <section id="projects" className="p-[46px_clamp(20px,5vw,64px)_46px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-10">
        <div className="flex flex-wrap items-end justify-between gap-2 md:gap-4">
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <Reveal y={12}>
              <Badge label="recent projects" />
            </Reveal>
            <Reveal delay={0.1}>
              <SectionTitle title="A look at what we've been building." />
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Button title="view all project" link="/projects" variant="primary" />
          </Reveal>
        </div>

        <Reveal delay={0.2} className="grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.slice(0, 3).map((projectData) => (
            <ProjectCard key={projectData.title} category={projectData.category} title={projectData.title} description={projectData.description} liveUrl={projectData.liveUrl} image={projectData.image} />
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default ProjectSection;
