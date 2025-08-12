import React from "react";
import Image from "next/image";

const testimonial = {
  quote:
    "Working with Moruf was a game-changer. We needed a high-performing digital solution, and he delivered beyond expectations. His focus on simplicity, performance, and user experience stood out. Professional, detail-oriented, and truly reliable—highly recommended!",
  author: "-Matthew",
  icon: "/assets/quote-icon.png",
};

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="w-full bg-[#020021]  py-10 px-4 flex flex-col items-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">
        <span className="text-orange-400">Testimonials</span>
      </h2>
      <h3 className="text-lg sm:text-xl font-semibold text-[#cab1b1] mb-4 text-center">
        What clients say about working with me
      </h3>
      <div className="relative max-w-5xl rounded-xl shadow-lg p-4 flex flex-col items-end">
        <Image
          src={testimonial.icon}
          alt="Quote"
          height={64}
          width={64}
          className="mb-4 opacity-90"
        />

        <p className="text-[#9ea3ae] text-lg sm:text-xl mb-6 text-start font-medium">
          {testimonial.quote}
        </p>
        <span className="text-orange-400 font-bold text-lg">
          {testimonial.author}
        </span>
      </div>
    </section>
  );
};

export default Testimonials;
