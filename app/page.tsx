import Events from "@/components/homepage/events";
import Hero from "@/components/homepage/hero";
import PopularCities from "@/components/homepage/popular-cities";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularCities />
      <Events />
    </>
  );
}
