import SearchEvent from "../forms/search-event";

export default function Hero() {
  return (
    <section className="hero-bg p-2.5 flex items-center justify-center mx-auto overflow-hidden">
      <div className="p-4 pt-36 sm:px-8 md:px-4 md:pb-36 md:pt-48 lg:px-24 lg:pb-24 lg:pt-52 flex flex-col gap-2 md:gap-3 lg:gap-5 text-white text-center">
        <span className="uppercase tracking-widest font-bold lg:tracking-[0.5em]">
          VISIT TODAY
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-[64px] font-bold md:leading-extra">
          An Unexpected
          <br /> City Awaits
        </h1>
        <SearchEvent />
      </div>
    </section>
  );
}
