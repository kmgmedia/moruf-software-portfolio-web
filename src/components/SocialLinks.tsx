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
    icon: "/assets/linkedin-icon.png",
  },
  {
    name: "X",
    href: "https://x.com/NFT_KingM",
    icon: "/assets/x-icon.png",
  },
  {
    name: "GitHub",
    href: "https://github.com/kmgmedia",
    icon: "/assets/github-icon.png",
  },
];

const SocialLinks: React.FC<SocialLinksProps> = ({ className = "" }) => (
  <div className={`flex flex-col gap-12 ${className}`}>
    {/* Top Section */}
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-64">
      {/* Logo */}
      <a href="#home" className="flex items-center gap-3">
        <Image
          src="/assets/kmgmediaogo564.png"
          alt="Logo"
          height={72}
          width={328}
          className="w-auto max-w-[200px] sm:max-w-[250px]"
        />
      </a>

      {/* Address */}
      <h2 className="flex flex-col text-lg sm:text-2xl font-bold text-white">
        Olivedele 101, SA <span>Johannesburg</span>
      </h2>

      {/* Contact + Social Icons */}
      <div>
        <h2 className="text-lg sm:text-2xl font-bold text-white mb-3">
          +27 64 205 7309
        </h2>
        <div className="flex gap-4 flex-wrap">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="hover:scale-110 transition-transform"
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={28}
                height={28}
              />
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
      © 2025. kmgmedia. All rights reserved.
    </div>
  </div>
);

export default SocialLinks;
