import React from "react";
import Image from "next/image";

const contacts = [
  {
    name: "Email",
    value: "morufbadebola@gmail.com",
    href: "mailto:morufbadebola@gmail.com",
    icon: "/assets/email-icon23.png",
  },
  {
    name: "LinkedIn",
    value: "moruf-adebola",
    href: "https://www.linkedin.com/in/moruf-adebola/",
    icon: "/assets/linkedin-icon1.png",
  },
  {
    name: "GitHub",
    value: "kmgmedia",
    href: "https://github.com/kmgmedia",
    icon: "/assets/github-icon1.png",
  },
  {
    name: "X (Twitter)",
    value: "NFT_KingM",
    href: "https://x.com/NFT_KingM",
    icon: "/assets/x-icon1.png",
  },
];

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full bg-[#020021] py-16 px-4 flex flex-col items-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
        Get in <span className="text-orange-400">Touch</span>
      </h2>
      <div className="bg-[#0B0A0F] max-w-10xl rounded-xl shadow-lg p-8 flex flex-col items-center border border-[#212936]">
        <h3 className="text-lg sm:text-xl font-medium text-[#cab1b1] mb-8 text-center">
          Open to projects, collabs, or even just a friendly chat — hit me up
          anytime!
        </h3>

        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#212936] rounded-xl shadow-lg p-7 flex items-center border border-orange-400/20 hover:bg-orange-400/10 transition-colors text-center"
            >
              <Image
                src={contact.icon}
                alt={`${contact.name} icon`}
                width={40}
                height={40}
                className="mr-3"
              />
              <div className="flex flex-col">
                <span className="text-orange-400 font-bold text-lg flex items-start">
                  {contact.name}
                </span>
                <span className="text-white text-base break-words">
                  {contact.value}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
