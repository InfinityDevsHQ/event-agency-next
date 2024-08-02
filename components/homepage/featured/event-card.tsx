import { Calendar, MapPin, Ticket } from "lucide-react";
import Image from "next/image";

export default function EventCard({
  img_url,
  ticket_price,
  title,
  location,
  date,
  blackEffect = false,
}: SpotlightEvent) {
  return (
    <article className="flex flex-col gap-5 text-secondary-foreground">
      <div>
        <div className="max-w-max relative">
          <Image
            src={img_url}
            alt="Event"
            width={400}
            height={222}
            className="rounded-custom w-full lg:min-w-[450px]"
          />
          <div className="bg-black/40 absolute top-0 w-full h-full rounded-custom"></div>
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:gap-4 max-w-max">
        <h4 className="font-bold text-2xl">{title}</h4>
        <div className="flex items-center gap-1.5 md:gap-2.5">
          <Calendar height={14} width={14} />
          <p>{date}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 md:gap-2.5">
            <MapPin width={14} height={14} />
            <p>{location}</p>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2.5">
            <Ticket width={14} height={14} />
            <p>
              <strong>{ticket_price ? `$ ${ticket_price}` : "Free"}</strong>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
