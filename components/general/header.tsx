"use client";
import LogoSvg from "../svgs/logo-svg";
import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLinks } from "@/constants";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setActiveLink(id);
  };

  const handleMouseLeave = () => {
    setActiveLink(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="mx-auto relative z-30">
      <div
        id="header"
        className={`max-w-screen-2xl h-20 fixed top-0 w-screen mx-auto py-5 px-4 md:px-8 lg:px-14 lg:pt-7 lg:pb-5 flex items-center justify-between
        
        transition-colors duration-300 ${
          scrolled ? "bg-white bg-opacity-20" : "bg-transparent"
        }`}
      >
        <Link href="/" className="lg:w-[200px] lg:h-[35.89px]">
          <span className="sr-only">Company Logo</span>
          <LogoSvg />
        </Link>
        <nav>
          <ul className="hidden md:flex items-center lg:gap-2.5 text-white text-xs font-bold">
            {NavLinks.map((link) => (
              <li
                key={link.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.id)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.link}
                  className="inline-block p-2.5 transform duration-300 ease-in-out relative"
                >
                  {link.name}
                  {activeLink === link.id && (
                    <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-[95%] h-[6px] w-full bg-secondary -z-10"></div>
                  )}
                </Link>
                {/* {pathname === link.link && (
                  <div className="absolute w-full h-1.5 bg-secondary bottom-3 -z-10" />
                )} */}
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/"
          className="hidden md:block px-6 py-2 lg:py-3 bg-secondary rounded-md text-xs font-bold hover:bg-secondary/90 text-white transform duration-300 ease-in-out"
        >
          Create Event
        </Link>
        {/* Mobile Nav */}
        <button
          className="mt-5 md:mt-0 md:hidden"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XIcon color="white" /> : <MenuIcon color="white" />}
        </button>
      </div>

      <div
        className={`w-full pt-12 py-8 bg-black/80 text-white md:hidden h-dvh mt-20 z-20 ${
          isOpen ? "fixed" : "hidden"
        }`}
      >
        <ul className="flex flex-col pl-8 gap-10 justify-between">
          {NavLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.link}
                className="mb-1.5 hover:text-secondary pb-1 font-semibold uppercase hover:text-inverted transition duration-300 ease-in-out"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/"
              className="px-6 py-2 bg-secondary rounded-md text-xs font-bold hover:bg-secondary/90 hover:text-white transform duration-300 ease-in-out"
            >
              Create Event
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
