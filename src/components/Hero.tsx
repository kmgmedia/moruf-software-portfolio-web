import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-[100vh] pt-32 pb-16 px-4 text-center bg-[#020021] w-full"
    >
      <div className="flex flex-col items-center mb-4">
        <Image
          src="/assets/Ellipse 133.png"
          alt="Decorative Ellipse"
          width={128} // adjust if needed
          height={128} // adjust if needed
          className="w-24 h-24 md:w-32 md:h-32 mb-2 object-contain"
        />
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mt-2">
          Hey, I’m <span className="text-orange-400">Moruf Adebola</span>
        </h1>
      </div>

      <h2 className="text-lg sm:text-2xl md:text-2xl font-bold text-[#9ea3ae] mb-2">
        Software Engineer with DevOps Experience
      </h2>

      <p className="max-w-3xl text-[#9ea3ae] text-base sm:text-lg md:text-xl mb-10">
        Crafting Clean Code for Real-World Solutions, merging development with
        DevOps to ship powerful products that are clean, tested, and
        production-ready.
      </p>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-bold px-8 py-3 rounded-lg text-base uppercase tracking-widest transition-colors shadow-lg"
      >
        View Resume
        <Image
          src="/assets/arrowrighticon.png"
          alt="Resume Icon"
          width={24} // same as w-5
          height={24} // same as h-5
        />
      </a>
    </section>
  );
};

export default Hero;
