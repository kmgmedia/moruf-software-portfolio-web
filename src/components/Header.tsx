import React from "react";
import Image from "next/image";

interface HeaderProps {}

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="w-full flex items-center justify-between px-90 py-4 bg-transparent fixed top-6 left-0 z-50 backdrop-blur-md">
      {/* Logo on the left */}
      <a href="#home" className="flex items-center gap-3">
        <Image
          src="/assets/kmgmediaogo564.png"
          alt="Logo"
          height={32}
          width={128}
          className="w-auto"
        />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => {
          const isContact = link.name === "Contact";
          return (
            <a
              key={link.name}
              href={link.href}
              className={`${
                isContact
                  ? "border-2 border-[#9ea3ae] text-[#9ea3ae] rounded-full px-4 py-1.5 hover:bg-orange-400 hover:text-black transition-all"
                  : "text-[#9ea3ae] hover:text-white"
              } font-medium`}
            >
              {link.name}
            </a>
          );
        })}
      </nav>

      {/* Mobile menu hamburger icon + logo on small screens */}
      <div className="md:hidden flex items-center gap-4">
        <a href="#home" className="flex items-center">
          <Image
            src="/assets/kmgmediaogo564.png"
            alt="Logo"
            height={32}
            width={128}
            className="w-auto"
          />
        </a>
        <button
          className="text-white focus:outline-none"
          aria-label="Open menu"
        >
          <svg
            width="48"
            height="48"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;