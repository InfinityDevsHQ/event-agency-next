import Image from "next/image";
import LogoSvgBlack from "../svgs/logo-svg-black";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary-background">
      <div className="px-4 py-12 md:px-12 md:py-24 lg:p-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 justify-between items-start lg:place-items-cente gap-4 md:gap-8 lg:gap-12 lg:h-[244px]">
          {/* Logo and Description */}
          <div className="w-full mb-6 md:mb-0 xl:w-[200px] order-1 lg:self-center">
            <LogoSvgBlack />
            <p className="text-gray-600 mt-4 max-w-52">
              Build famous city&apos;s events & festival using Grand Conference
              Theme
            </p>
          </div>

          {/* Menu */}
          <div className="order-3 md:order-2 flex justify-between col-span-2 gap-5 lg:gap-12">
            <div className="w-full mb-6 md:mb-0">
              <h3 className="font-bold text-base md:text-lg lg:text-xl mb-5">
                MENU
              </h3>
              <ul className="text-base md:text-lg lg:text-xl">
                {["About Us", "Find Events", "Contact Us", "Blog"].map(
                  (item) => (
                    <li
                      className="mb-4 hover:text-secondary transition duration-300 ease-in-out"
                      key={item}
                    >
                      <Link href="/">{item}</Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Policies */}
            <div className="w-full mb-6 md:mb-0">
              <h3 className="font-bold text-base md:text-lg lg:text-xl mb-5 h-7"></h3>
              <ul className="text-base md:text-lg lg:text-xl">
                {["Privacy Policy", "Cookie Policy", "Terms & Conditions"].map(
                  (item) => (
                    <li
                      className="mb-4 hover:text-secondary transition duration-300 ease-in-out"
                      key={item}
                    >
                      <Link href="/">{item}</Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Call to Action and App Links */}
          <div className="w-full order-2 space-y-2.5">
            <p className="font-bold text-base md:text-sm xl:text-xl w-full xl:w-[300px] text-wrap">
              Get inside the hustle. Limited seats available. Book yours now.
            </p>
            <div className="flex flex-col sm:flex-row xl:gap-2.5">
              <Link href="/">
                <Image
                  src="/assets/footer-apple.png"
                  alt="Download on the App Store"
                  className="h-12 w-36"
                  width={160}
                  height={47}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/assets/footer-google.png"
                  alt="Get it on Google Play"
                  className="h-12 w-36"
                  width={160}
                  height={47}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto my-4 sm:my-6 md:my-8 lg:my-12">
          <div className="border-t-2 border-primary-foreground"></div>
        </div>

        {/* Copyright */}
        <div className="flex justify-between text-sm md:text-base lg:text-xl text-secondary-text">
          <p>© Infinity Devs - Events</p>
          <p>All Rights Reserved - 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
