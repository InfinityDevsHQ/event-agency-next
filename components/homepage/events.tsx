import { SpotlightEvents } from "@/constants";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import EventCard from "./featured/event-card";

export default function Events() {
  return (
    <section className="px-4 py-12 md:py-24 md:px-12 lg:px-12 lg:py-24">
      <div className="flex flex-col flex-gap gap-4 md:gap-5">
        <div className="flex flex-col gap-2 md:gap-5 text-secondary-foreground">
          <h2 className="font-bold text-4xl md:text-5xl">
            2024 Spotlight Events
          </h2>
          <p className="font-medium text-lg md:text-xl">
            Discover more of the activities with our curated event collections
          </p>
        </div>
        <Carousel>
          <CarouselContent>
            {SpotlightEvents.map((event) => (
              <CarouselItem
                className="mx-auto sm:basis-1/2 lg:basis-1/3 xl:basis-[31%] prevent-select"
                key={event.id}
              >
                <EventCard
                  img_url={event.img_url}
                  title={event.title}
                  ticket_price={event.ticket_price}
                  location={event.location}
                  id={event.id}
                  date={event.date}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
