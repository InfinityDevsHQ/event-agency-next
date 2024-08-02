import { Button } from "../ui/button";

export default function FestivalInTheCity() {
  return (
    <section
      className="p-2.5 bg-center text-white text-center md:text-right"
      style={{
        backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('/assets/wallpaper-2.png')`,
      }}
    >
      <div className="h-[485px] md:p-16 lg:p-24 flex flex-col items-center justify-center md:items-end md:justify-end gap-5">
        <h3 className="uppercase font-bold text-4xl md:text-5xl lg:text-6xl">
          FESTIVAL IN THE <br /> CITY
        </h3>
        <p className="text-xl font-medium text-primary">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <Button
          variant={"secondary"}
          className="lg:self-end rounded-md font-bold text-xs"
        >
          FIND OUT
        </Button>
      </div>
    </section>
  );
}
