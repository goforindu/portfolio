import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="bg-[#1e293b] rounded-xl shadow-md p-6 space-y-4 hover:shadow-xl transition-all">
      <h2 className="text-xl font-semibold text-white">{project.title}</h2>
      <p className="text-gray-300 text-sm">{project.description}</p>
      <Image
        src={project.project_img}
        alt={project.title}
        width={500}
        height={500}
        className="w-full  rounded-md"
      />
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech: string, i: number) => (
          <Badge key={i} className="bg-green-700 text-white text-xs">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="flex gap-4 pt-2">
        {project.liveUrl && (
          <Button
            asChild
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </Button>
        )}
        {project.githubUrl && (
          <Button
            asChild
            className="bg-red-400 hover:bg-red-600 text-white border border-red-600 transition"
          >
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
