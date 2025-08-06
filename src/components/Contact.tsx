import React from "react";

const contacts = [
  {
    name: "Email",
    value: "morufbadebola@gmail.com",
    href: "mailto:morufbadebola@gmail.com",
    icon: "/assets/email.svg",
  },
  {
    name: "LinkedIn",
    value: "moruf-adebola",
    href: "https://www.linkedin.com/in/moruf-adebola/",
    icon: "/assets/linkedin.svg",
  },
  {
    name: "GitHub",
    value: "kmgmedia",
    href: "https://github.com/kmgmedia",
    icon: "/assets/github.svg",
  },
  {
    name: "X",
    value: "NFT_KingM",
    href: "https://x.com/NFT_KingM",
    icon: "/assets/x.svg",
  },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full bg-[#18162b] py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">
        Get in <span className="text-orange-400">Touch</span>
      </h2>
      <h3 className="text-lg sm:text-xl font-semibold text-[#cab1b1] mb-8 text-center">
        Open to projects, collabs, or even just a friendly chat—hit me up anytime!
      </h3>
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#212936] rounded-xl shadow-lg p-6 flex flex-col items-center border border-orange-400/20 hover:bg-orange-400/10 transition-colors"
          >
            <img src={contact.icon} alt={contact.name} className="h-10 w-10 mb-3" />
            <span className="text-orange-400 font-bold text-lg mb-1">{contact.name}</span>
            <span className="text-white text-base break-all">{contact.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
