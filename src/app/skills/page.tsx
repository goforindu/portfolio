const frontendSkills = [
  { name: "HTML", icon: "/icons/html5.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "React.js", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextdotjs.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
  { name: "Redux", icon: "/icons/redux.svg" },
  { name: "ReactBootstrap", icon: "/icons/reactbootstrap.svg" },
];

const backendSkills = [
  { name: "Node.js", icon: "/icons/nodedotjs.svg" },
  { name: "Express", icon: "/icons/express.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
];

const toolsSkills = [
  { name: "Git", icon: "/icons/git.svg" },
  { name: "GitHub", icon: "/icons/github.svg" },
  { name: "Postman", icon: "/icons/postman.svg" },
  { name: "VS Code", icon: "/icons/vscode.svg" },
];

const SkillGroup = ({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; icon: string }[];
}) => (
  <div className="w-full mb-12">
    <h3 className="text-2xl text-green-300 font-semibold mb-6 text-center">
      {title}
    </h3>

    {/* Responsive Grid with Centering */}
    <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 w-full  p-6 rounded-xl">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center justify-center bg-green-100 p-4 rounded-full hover:bg-white/ transition-colors duration-300 ease-in-out"
        >
          <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
        </div>
      ))}
    </div>
  </div>
);

export default function SkillPage() {
  return (
    <section className="min-h-screen py-16 px-6 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-green-400">
          My Tech Stack
        </h2>

        <SkillGroup title="Frontend Development" skills={frontendSkills} />
        <SkillGroup title="Backend Development" skills={backendSkills} />
        <SkillGroup title="Tools & Platforms" skills={toolsSkills} />
      </div>
    </section>
  );
}
