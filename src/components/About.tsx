import React from "react";
import Image from "next/image";

const stacks = [
  {
    title: "Frontend Development",
    icon: "/assets/x-avatar.png",
    description:
      "Breathing life into user interfaces with React and Next.js, styled boldly with Tailwind for modern, responsive experiences.",
  },
  {
    title: "Backend Development",
    icon: "/assets/x-avatare.png",
    description:
      "Powering applications with strong backend logic, clean APIs, and seamless data flow — built with Node.js, TypeScript, and flexible databases.",
  },
  {
    title: "DevOps Experience",
    icon: "/assets/frame-13896ty.png",
    description:
      "Automating builds, deployments, and scaling with CI/CD, Docker, Kubernetes, AWS, and GitOps, blending DevOps into every line of code.",
  },
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-8 py-0 px-4 bg-[#020021] w-full"
    >
      {/* Tech Stacks Title at the top center */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          About <span className="text-orange-400">Me</span>
        </h2>
      </div>

      {/* About Me and Image Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-20">
        {/* About Me Text */}
        <div className="max-w-2xl text-center md:text-left">
          <h3 className="text-4xl sm:text-6xl font-bold text-[#9ea3ae] mb-4">
            Let’s get to know about me closer
          </h3>
          <p className="text-[#9ea3ae] text-base sm:text-lg md:text-xl">
            A passionate Software Developer and DevOps Engineer with a strong
            focus on building fast, scalable, and user-centric web applications.
            Specializes in JavaScript, React.js, and modern DevOps tools like
            Docker, Kubernetes, GitOps, and AWS to deliver clean, efficient, and
            maintainable code. Driven by a problem-solving mindset, Moruf
            thrives on turning complex challenges into simple, elegant digital
            solutions.
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <Image
            src="/assets/morufimg2.png"
            alt="Moruf Adebola profile"
            width={300}
            height={300}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Tech Stacks Cards */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-18 mt-10">
        {stacks.map((stack) => (
          <div
            key={stack.title}
            className="bg-[#212936] rounded-xl shadow-lg p-6 flex flex-col items-start text-left border border-orange-400/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:border-orange-400/60 hover:ring-2 hover:ring-orange-400/30 hover:bg-[#242b3d]"
          >
            <Image
              src={stack.icon}
              alt={stack.title}
              width={56}
              height={56}
              className="mb-4 object-contain"
            />
            <h4 className="text-xl font-bold text-orange-400 mb-2">
              {stack.title}
            </h4>
            <p className="text-[#9ea3ae] mb-4 text-base">{stack.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
