import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-[#0f172a] text-white">
      <h1 className="text-4xl font-bold text-green-400 text-center mb-12">
        Projects
      </h1>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </main>
  );
}
