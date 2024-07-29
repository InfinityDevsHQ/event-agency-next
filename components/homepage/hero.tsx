import SearchEvent from "../forms/search-event";

export default function Hero() {
  return (
    <section className="hero-bg p-2.5 flex items-center justify-center">
      <div className="p-24 pb-36 flex flex-col gap-5 text-white text-center pt-48">
        <span className="uppercase tracking-widest font-bold">VISIT TODAY</span>
        <h1 className="text-6xl font-bold leading-extra">
          An Unexpected
          <br /> City Awaits
        </h1>
        <SearchEvent />
      </div>
    </section>
  );
}
