import React from "react";

const stacks = [
  {
    title: "Frontend",
    icon: "/assets/frontend.png",
    description:
      "Breathing life into user interfaces with React and Next.js, styled boldly with Tailwind for modern, responsive experiences.",
    techs: ["HTML", "CSS", "React.js", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "Figma", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: "/assets/backend.png",
    description:
      "Powering applications with strong backend logic, clean APIs, and seamless data flow — built with Node.js, TypeScript, and flexible databases.",
    techs: ["Node.js", "MongoDB", "Prisma", "PostgreSQL", "Php", "Python", "Golang", "Express.js"],
  },
  {
    title: "DevOps",
    icon: "/assets/devops.png",
    description:
      "Automating builds, deployments, and scaling with CI/CD, Docker, Kubernetes, AWS, and GitOps, blending DevOps into every line of code.",
    techs: ["AWS", "Docker", "GitHub", "Render", "Railway", "Kubernetes", "CI - CD", "Vercel"],
  },
];

const TechStacks: React.FC = () => {
  return (
    <section id="tech-stacks" className="w-full bg-[#18162b] py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">
        Tech <span className="text-orange-400">Stacks</span>
      </h2>
      <h3 className="text-lg sm:text-xl font-semibold text-[#cab1b1] mb-8 text-center">
        Proficient in a wide range of modern technologies and frameworks, including but not limited to:
      </h3>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {stacks.map((stack) => (
          <div
            key={stack.title}
            className="bg-[#212936] rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-orange-400/20"
          >
            <img src={stack.icon} alt={stack.title} className="h-16 w-16 mb-4" />
            <h4 className="text-xl font-bold text-orange-400 mb-2">{stack.title}</h4>
            <p className="text-[#9ea3ae] mb-4 text-base">{stack.description}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {stack.techs.map((tech) => (
                <span
                  key={tech}
                  className="bg-orange-400/10 text-orange-400 px-3 py-1 rounded text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStacks;
