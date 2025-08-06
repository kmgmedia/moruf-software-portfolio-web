import React from "react";

interface SocialLinksProps {
  className?: string;
}

const socials = [
  { name: "Email", href: "mailto:morufbadebola@gmail.com", icon: "/assets/email.svg" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/moruf-adebola/", icon: "/assets/linkedin.svg" },
  { name: "GitHub", href: "https://github.com/kmgmedia", icon: "/assets/github.svg" },
  { name: "X", href: "https://x.com/NFT_KingM", icon: "/assets/x.svg" },
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
        <img src={social.icon} alt={social.name} className="h-7 w-7" />
      </a>
    ))}
  </div>
);

export default SocialLinks;
