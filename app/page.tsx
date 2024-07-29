import Events from "@/components/homepage/events";
import FestivalInTheCity from "@/components/homepage/festival-in-the-xity";
import Hero from "@/components/homepage/hero";
import PopularCities from "@/components/homepage/popular-cities";
import TopFestivals from "@/components/homepage/top-festivals";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularCities />
      <Events />
      <FestivalInTheCity />
      <TopFestivals />
    </>
  );
}
