import CityCard from "./featured/city-card";

export default function PopularCities() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-12">
      <div className="flex flex-col flex-gap gap-4">
        <div className="flex flex-col gap-2 text-secondary-foreground">
          <h2 className="font-bold text-4xl md:text-5xl">Popular cities</h2>
          <p className="font-medium text-xl md:text-2xl">
            Book these events for a close-up look at the city.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <CityCard imgUrl="/assets/cities/city-1.png" cityName="Florence" />
          <CityCard imgUrl="/assets/cities/city-2.png" cityName="Rome" />
          <CityCard imgUrl="/assets/cities/city-3.png" cityName="Milan" />
          <CityCard imgUrl="/assets/cities/city-4.png" cityName="Venice" />
        </div>
      </div>
    </section>
  );
}
