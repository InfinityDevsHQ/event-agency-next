import { SpotlightEvents } from "@/constants";
import EventCard from "./featured/event-card";

export default function TopFestivals() {
  return (
    <section className="px-4 py-12 md:px-12 md:py-24">
      <div className="flex flex-col flex-gap gap-4">
        <div className="flex flex-col gap-2 text-secondary-foreground">
          <h2 className="font-bold text-4xl md:text-5xl">
            Explore To Festivals
          </h2>
          <p className="font-medium text-xl md:text-2xl">
            Discover more of the activities with our curated event collections
          </p>
        </div>
        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
          {SpotlightEvents.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              ticket_price={event.ticket_price}
              title={event.title}
              date={event.date}
              img_url={event.img_url}
              location={event.location}
              blackEffect
            />
          ))}
        </div>
      </div>
    </section>
  );
}
