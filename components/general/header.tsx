"use client";
import { NavLinks } from "@/constants";
import LogoSvg from "../svgs/logo-svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="w-full">
      <div
        id="header"
        className="max-w-screen-2xl h-20 fixed top-0 w-full mx-auto py-5 px-4 md:px-12 flex items-center justify-between"
      >
        <Link href="/">
          <LogoSvg />
        </Link>
        <nav>
          <ol className="hidden md:flex items-center gap-2.5 text-white text-xs font-bold">
            {NavLinks.map((link) => (
              <li key={link.id} className="relative">
                <Link
                  href={link.link}
                  className="inline-block p-2.5 hover:text-secondary transform duration-300 ease-in-out"
                >
                  {link.name}
                </Link>
                {pathname === link.link && (
                  <div className="absolute w-full h-1.5 bg-secondary bottom-3 -z-10" />
                )}
              </li>
            ))}
          </ol>
        </nav>
        <Link
          href="/"
          className="hidden md:block px-6 py-2 bg-secondary rounded-md text-xs font-bold hover:bg-secondary/90 hover:text-white transform duration-300 ease-in-out"
        >
          Create Event
        </Link>
        {/* <MenuIcon color="white" className="mt-2" /> */}
        {/* <XIcon color="white" className="mt-2" /> */}
      </div>
    </header>
  );
}
