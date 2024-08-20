import { Button } from "../ui/button";

export default function FestivalInTheCity() {
  return (
    <section
      className="p-2.5 bg-center text-white text-center md:text-right bg-cover bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('/assets/wallpaper-2.png')`,
      }}
    >
      <div className="md:h-80 lg:h-[494.11px] px-6 py-24 md:p-16 lg:p-24 flex flex-col items-center justify-center md:items-end md:justify-end gap-5">
        <h3 className="uppercase font-bold text-4xl md:text-5xl lg:text-6xl">
          FESTIVAL IN THE <br /> CITY
        </h3>
        <p className="text-xl font-medium text-primary">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <Button
          type="button"
          variant={"secondary"}
          className="lg:self-end rounded-md font-bold text-xs lg:w-[196px] px-6 py-3"
        >
          FIND OUT
        </Button>
      </div>
    </section>
  );
}
