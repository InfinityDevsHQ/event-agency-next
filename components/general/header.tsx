"use client";
import { NavLinks } from "@/constants";
import LogoSvg from "../svgs/logo-svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="w-full">
      <div className="max-w-screen-2xl h-20 fixed top-0 w-full mx-auto py-5 px-12 flex items-center justify-between">
        <span>
          <LogoSvg />
        </span>
        <nav>
          <ol className="flex items-center gap-2.5 text-white text-xs font-bold">
            {NavLinks.map((link) => (
              <li key={link.id} className="relative">
                <Link href={link.link} className="inline-block p-2.5">
                  {link.name}
                </Link>
                {pathname === link.link && (
                  <div className="absolute w-full h-1.5 bg-secondary bottom-3 -z-10" />
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </header>
  );
}
