import { SpotlightEvents } from "@/constants";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import EventCard from "./featured/event-card";

export default function Events() {
  return (
    <section className="px-4 py-12 md:px-12 md:py-24">
      <div className="flex flex-col flex-gap gap-4">
        <div className="flex flex-col gap-2 text-secondary-foreground">
          <h2 className="font-bold text-4xl md:text-5xl">
            2024 Spotlight Events
          </h2>
          <p className="font-medium text-lg md:text-2xl">
            Discover more of the activities with our curated event collections
          </p>
        </div>
        <Carousel>
          <CarouselContent>
            {SpotlightEvents.map((event) => (
              <CarouselItem
                className="mx-auto lg:basis-[32%] gap-5"
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
