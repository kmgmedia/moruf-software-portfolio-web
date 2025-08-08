import React from "react";
import Image from "next/image";

interface SocialLinksProps {
  className?: string;
}

const socials = [
  {
    name: "Email",
    href: "mailto:morufbadebola@gmail.com",
    icon: "/assets/email-icon.png",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/moruf-adebola/",
    icon: "/assets/x-avatare.png",
  },
  {
    name: "GitHub",
    href: "https://github.com/kmgmedia",
    icon: "/assets/github-icon.png",
  },
  { name: "X", href: "https://x.com/NFT_KingM", icon: "/assets/x-avatare.png" },
];

const SocialLinks: React.FC<SocialLinksProps> = ({ className = "" }) => (
  <div className={`flex gap-4 items-center ${className}`}>
    {socials.map((social) => (
      <a
        key={social.name}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.name}
        className="hover:scale-110 transition-transform"
      >
        <Image src={social.icon} alt={social.name} width={28} height={28} />
      </a>
    ))}
  </div>
);

export default SocialLinks;
