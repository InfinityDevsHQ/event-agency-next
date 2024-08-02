import SearchEvent from "../forms/search-event";

export default function Hero() {
  return (
    <section className="hero-bg px-4 py-4 flex items-center justify-center">
      <div className="md:p-24 md:pb-36 flex flex-col gap-2 md:gap-3 text-white text-center pt-36 md:pt-48">
        <span className="uppercase tracking-widest font-bold lg:tracking-[0.5em]">
          VISIT TODAY
        </span>
        <h1 className="text-4xl lg:text-6xl font-bold md:leading-extra mb-4 md:mb-1">
          An Unexpected
          <br /> City Awaits
        </h1>
        <SearchEvent />
      </div>
    </section>
  );
}
