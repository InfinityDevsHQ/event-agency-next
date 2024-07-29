import { SpotlightEvents } from "@/constants";
import EventCard from "./featured/event-card";

export default function TopFestivals() {
  return (
    <section className="py-24 px-12">
      <div className="flex flex-col flex-gap gap-5">
        <div className="flex flex-col gap-5 text-secondary-foreground">
          <h2 className="font-bold text-5xl">Explore To Festivals</h2>
          <p className="font-medium text-2xl">
            Discover more of the activities with our curated event collections
          </p>
        </div>
        <div className="grid justify-center lg:grid-cols-3 gap-5">
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
