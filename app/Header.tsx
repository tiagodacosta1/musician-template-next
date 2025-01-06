"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-8">
      {/* Logo Section */}
      <Link href="/" aria-label="Home">
        <div className="font-merriweather tracking-widest cursor-pointer">
          <span className="text-sm xl:text-lg text-[#4b6043] uppercase">
            Sophia
          </span>
          <span className="text-sm xl:text-xl text-[#658354] font-bold uppercase">
            Renard
          </span>
          <span className="text-xs xl:text-base uppercase text-[#658354]">
            Cellist
          </span>
        </div>
      </Link>

      {/* Menu button for small screens */}
      <button
        className="xl:hidden text-[#658354] focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <FaTimes className="text-3xl text-[#4b6043]" />
        ) : (
          <FaBars className="text-3xl text-[#4b6043]" />
        )}
      </button>

      {/* Navigation */}
      <nav
        ref={menuRef}
        className={`${
          isMenuOpen ? "block" : "hidden"
        } xl:block space-y-4 xl:space-y-0 xl:space-x-4 absolute top-full left-0 w-full bg-white p-8 xl:p-0 xl:relative xl:w-auto`}
      >
        <Link
          href="/biography"
          className="block xl:inline-block text-[#4b6043] hover:text-[#658354] uppercase tracking-wider text-center xl:text-left font-montserrat"
        >
          Biography
        </Link>
        <Link
          href="/concerts"
          className="block xl:inline-block text-[#4b6043] hover:text-[#658354] uppercase tracking-wider text-center xl:text-left font-montserrat"
        >
          Concerts
        </Link>
        <Link
          href="/discography"
          className="block xl:inline-block text-[#4b6043] hover:text-[#658354] uppercase tracking-wider text-center xl:text-left font-montserrat"
        >
          Discography
        </Link>
        <Link
          href="/scores"
          className="block xl:inline-block text-[#4b6043] hover:text-[#658354] uppercase tracking-wider text-center xl:text-left font-montserrat"
        >
          Scores
        </Link>
        <Link
          href="/gallery"
          className="block xl:inline-block text-[#4b6043] hover:text-[#658354] uppercase tracking-wider text-center xl:text-left font-montserrat"
        >
          Gallery
        </Link>
        <Link
          href="/videos"
          className="block xl:inline-block text-[#4b6043] hover:text-[#658354] uppercase tracking-wider text-center xl:text-left font-montserrat"
        >
          Videos
        </Link>
        <Link
          href="/contact"
          className="block xl:inline-block text-[#4b6043] hover:text-[#658354] uppercase tracking-wider text-center xl:text-left font-montserrat"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
