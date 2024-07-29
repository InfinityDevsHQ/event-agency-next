import LogoSvg from "../svgs/logo-svg";

export default function Header() {
  return (
    <header className="w-full">
      <div className="max-w-screen-2xl fixed top-0 w-full mx-auto bg-red-400 py-5 px-12 flex items-center justify-between">
        <span>
          <LogoSvg />
        </span>
      </div>
    </header>
  );
}
