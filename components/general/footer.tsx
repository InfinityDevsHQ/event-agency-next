import React from "react";
import LogoSvgBlack from "../svgs/logo-svg-black";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-slate-200">
      <div className="px-4 py-12 md:px-12 md:py-24">
        <div className="flex flex-wrap justify-between items-start">
          {/* Logo and Description */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <LogoSvgBlack />
            <p className="text-gray-600 mt-4 max-w-52">
              Build famous city&apos;s events & festival using Grand Conference
              Theme
            </p>
          </div>

          {/* Menu */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold text-base md:text-lg lg:text-xl mb-4">
              MENU
            </h3>
            <ul className="text-base md:text-lg lg:text-xl">
              {["About Us", "Find Events", "Contact Us", "Blog"].map((item) => (
                <li className="mb-2" key={item}>
                  <Link href="/">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <ul className="text-base md:text-lg lg:text-xl">
              {["Privacy Policy", "Cookie Policy", "Terms & Conditions"].map(
                (item) => (
                  <li className="mb-2" key={item}>
                    <Link href="/">{item}</Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Call to Action and App Links */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <p className="font-bold mb-4 text-base md:text-lg lg:text-xl">
              Get inside the hustle. Limited seats available. Book yours now.
            </p>
            <div className="flex space-x-4">
              <Link href="/">
                <Image
                  src="/assets/footer-apple.png"
                  alt="Download on the App Store"
                  className="h-10"
                  width={120}
                  height={40}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/assets/footer-google.png"
                  alt="Get it on Google Play"
                  className="h-10"
                  width={120}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 md:pt-12 border-t border-gray-300 flex justify-between text-sm md:text-base lg:text-xl text-gray-600">
          <p>© Infinity Devs - Events</p>
          <p>All Rights Reserved - 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
