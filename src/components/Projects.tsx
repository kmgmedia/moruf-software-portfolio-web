"use client";
import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Byway Backend (GitHub Action)",
    description:
      "End-to-End REST API – A Complete Backend Solution with Review Management, User Roles & Access Control.",
    details:
      "This is the Node.js backend for the Byway web product review platform, built using Express.js. It serves as the core API layer powering features like product listings, user-submitted reviews, and seamless frontend communication.Includes config for MongoDB and env setup, controllers for API logic, middleware for validation/auth, models for Mongoose schemas, and routes for API endpoints.",
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
      "A robust and intuitive eCommerce frontend designed to deliver seamless product discovery, secure checkout, and real-time inventory visibility. Users can explore products by category, manage their shopping carts, track orders, and complete payments with ease. Built with a focus on user flow, performance, and trust, the project leverages Bootstrap for responsive design, Sass for efficient CSS structuring, and vanilla JavaScript for smooth interactivity. ",
    techs: [
      "HTML",
      "CSS/Sass",
      "Node.js",
      "JavaScript",
      "MongoDB",
      "Bootstrap",
    ],
    live: "https://byc-website-pi.vercel.app/",
    github: "https://github.com/kmgmedia/BYC-Website",
  },
  {
    title: "GPT-3 Frontend",
    description:
      "Conversational Intelligence Interface – Chatbot UI Powered by GPT-3.",
    details: `
Fast, accessible frontend bridging users and GPT-3 with smooth inputs, real-time flow, and a crisp, device-friendly layout.

Crafted using HTML, CSS (Sass), and JavaScript, the UI leverages async JavaScript functions for API calls, dynamic DOM updates, and stateful conversation threads.

Key Interactions:
- Typing indicators and smooth loading animations mimic real chat behavior.
- Auto-scroll and real-time message rendering enhance user engagement.
  `,
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
    title: "Project Tracker (Dashboard App)",
    description: "Live data. Smooth workflow. Seamless on any device.",
    details:
      "A sleek, fully responsive dashboard built with React, TypeScript, Tailwind CSS, and Supabase, delivering secure authentication, lightning-fast performance, and real-time data syncing. Designed with a clean, modern UI, it adapts seamlessly to any device and empowers users with live insights and smooth interactions.",

    techs: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "JavaScript",
      "Express.js",
      "Supabase",
      "GitHub Action",
      "Sonner",
      "Vercel",
    ],
    live: "https://dashboard-auth-full-stack.vercel.app/",
    github: "https://github.com/kmgmedia/dashboard-auth-full-stack",
  },
  {
    title: "Byc (eCommerce Web)",
    description: "Reimagining Online Retail – A Complete Shopping Experience.",
    details:
      "A robust and intuitive eCommerce frontend designed to deliver seamless product discovery, secure checkout, and real-time inventory visibility. Users can explore products by category, manage their shopping carts, track orders, and complete payments with ease. Built with a focus on user flow, performance, and trust, the project leverages Bootstrap for responsive design, Sass for efficient CSS structuring, and vanilla JavaScript for smooth interactivity. ",

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
      className="w-full bg-[#020021] py-30 px-4 flex flex-col items-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">
        Select <span className="text-orange-400">Projects</span>
      </h2>
      <h3 className="text-lg sm:text-xl font-semibold text-[#cab1b1] mb-12 text-center">
        Handpicked projects reflecting my journey in tech and design.
      </h3>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-16">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#212936] max-w-6xl rounded-xl shadow-lg p-8 flex flex-col items-start border border-orange-400/20"
          >
            <h4 className="text-xl font-bold text-orange-400 mb-2">
              {project.title}
            </h4>
            <p className="text-[#9ea3ae] mb-3 text-base font-semibold">
              {project.description}
            </p>
            <p className="text-[#9ea3ae] mb-6 text-sm">{project.details}</p>
            <div className="flex flex-wrap gap-2 mb-12">
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
                className="inline-flex items-center gap-2 border border-orange-400 text-orange-400 font-bold px-4 py-2 rounded-md text-xs uppercase tracking-widest transition-colors shadow"
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
