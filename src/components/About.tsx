import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-center gap-10 py-16 px-4 bg-[#18162b] w-full">
      <div className="flex-shrink-0 flex items-center justify-center">
        <img
          src="/assets/profile.png"
          alt="Moruf Adebola profile"
          className="rounded-2xl w-44 h-44 md:w-64 md:h-64 object-cover border-4 border-orange-400 shadow-lg"
        />
      </div>
      <div className="max-w-2xl text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          About <span className="text-orange-400">Me</span>
        </h2>
        <h3 className="text-xl sm:text-2xl font-bold text-[#9ea3ae] mb-4">
          Let’s get to know about me closer
        </h3>
        <p className="text-[#9ea3ae] text-base sm:text-lg md:text-xl">
          A passionate Software Developer and DevOps Engineer with a strong focus on building fast, scalable, and user-centric web applications. Specializes in JavaScript, React.js, and modern DevOps tools like Docker, Kubernetes, GitOps, and AWS to deliver clean, efficient, and maintainable code. Driven by a problem-solving mindset, Moruf thrives on turning complex challenges into simple, elegant digital solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
