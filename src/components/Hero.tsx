import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-[100vh] pt-32 pb-16 px-4 text-center bg-[#020021] w-full relative"
    >
      {/* Background blur */}
      <div className="absolute inset-0 flex justify-end">
        <div className="absolute left-1/4 top-1/4 w-[300px] h-[300px] bg-white/20 rounded-full blur-[110px] z-0"></div>
      </div>

      {/* Intro */}
      <div className="flex flex-col items-center mb-4 z-10">
        <Image
          src="/assets/Ellipse 133.png"
          alt="Decorative Ellipse"
          width={128}
          height={128}
          className="w-24 h-24 md:w-32 md:h-32 mb-2 object-contain"
        />
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mt-2">
          Hey, I’m <span className="text-orange-400">Moruf Adebola</span>
        </h1>
      </div>

      {/* Subtitle */}
      <h2 className="text-lg sm:text-2xl md:text-2xl font-bold text-[#9ea3ae] mb-2 z-10">
        Software Engineer with DevOps Experience
      </h2>

      {/* Paragraph */}
      <p className="max-w-3xl text-[#9ea3ae] text-base sm:text-lg md:text-xl mb-10 z-10">
        Crafting Clean Code for Real-World Solutions, merging development with
        DevOps to ship powerful products that are clean, tested, and
        production-ready.
      </p>

      {/* Resume Button */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-bold px-8 py-3 rounded-lg text-base uppercase tracking-widest transition-colors shadow-lg z-10"
      >
        View Resume
        <Image
          src="/assets/arrowrighticon.png"
          alt="Resume Icon"
          width={24}
          height={24}
        />
      </a>
    </section>
  );
};

export default Hero;
