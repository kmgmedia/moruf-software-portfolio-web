"use client";
import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Byway Backend (GitHub Action)",
    description:
      "End-to-End REST API – A Complete Backend Solution with Review Management, User Roles & Access Control.",
    details:
      "Node.js backend for the Byway web product review platform, built using Express.js. Features product listings, user-submitted reviews, and seamless frontend communication.",
    techs: [
      "MongoDB",
      "Node.js",
      "Express.js",
      "Mongoose",
      "Postman",
      "GitHub Action",
      "Vercel",
    ],
    live: "#",
    github: "#",
  },
  {
    title: "Byc (eCommerce Web)",
    description: "Reimagining Online Retail – A Complete Shopping Experience.",
    details:
      "A robust and intuitive eCommerce frontend designed for seamless product discovery, secure checkout, and real-time inventory visibility.",
    techs: [
      "HTML",
      "CSS/Sass",
      "Node.js",
      "JavaScript",
      "MongoDB",
      "Bootstrap",
    ],
    live: "#",
    github: "#",
  },
  {
    title: "GPT-3 Frontend",
    description:
      "Conversational Intelligence Interface – Chatbot UI Powered by GPT-3.",
    details:
      "Fast, accessible frontend bridging users and GPT-3 with smooth inputs, real-time flow, and a crisp, device-friendly layout.",
    techs: [
      "HTML",
      "CSS/Sass",
      "Node.js",
      "JavaScript",
      "MongoDB",
      "Bootstrap",
    ],
    live: "#",
    github: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="w-full bg-[#020021] py-16 px-4 flex flex-col items-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">
        Select <span className="text-orange-400">Projects</span>
      </h2>
      <h3 className="text-lg sm:text-xl font-semibold text-[#cab1b1] mb-8 text-center">
        Handpicked projects reflecting my journey in tech and design.
      </h3>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#212936] rounded-xl shadow-lg p-8 flex flex-col items-start border border-orange-400/20"
          >
            <h4 className="text-xl font-bold text-orange-400 mb-2">
              {project.title}
            </h4>
            <p className="text-[#9ea3ae] mb-2 text-base font-semibold">
              {project.description}
            </p>
            <p className="text-[#9ea3ae] mb-4 text-sm">{project.details}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="bg-orange-400/10 text-orange-400 px-3 py-1 rounded text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-auto">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-bold px-4 py-2 rounded-md text-xs uppercase tracking-widest transition-colors shadow"
              >
                Live Demo
                <Image
                  src="/assets/external_link.png"
                  alt="Live Demo"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-orange-400 text-orange-400 font-bold px-4 py-2 rounded-md text-xs uppercase tracking-widest transition-colors shadow hover:bg-orange-400 hover:text-white"
              >
                GitHub
                <Image
                  src="/assets/github.png"
                  alt="GitHub"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
