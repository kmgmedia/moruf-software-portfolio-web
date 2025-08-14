"use client";
import React, { useState } from "react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between px-12 py-6 bg-transparent fixed top-0 left-0 z-30 backdrop-blur-md">
      {/* Logo */}
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
      <nav className="hidden md:flex gap-10 items-center">
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

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            // Close Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center py-6 gap-10 md:hidden">
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
                } font-medium text-lg`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
