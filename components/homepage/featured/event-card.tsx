import { Calendar, MapPin, Ticket } from "lucide-react";
import Image from "next/image";

export default function EventCard({
  img_url,
  ticket_price,
  title,
  location,
  date,
}: SpotlightEvent) {
  return (
    <article className="flex flex-col gap-5 text-secondary-foreground">
      <Image
        src={img_url}
        alt="Event"
        width={358}
        height={222}
        className="rounded-custom"
      />
      <div className="flex flex-col gap-5 max-w-max">
        <h4 className="font-bold text-2xl">{title}</h4>
        <div className="flex items-center gap-2.5">
          <Calendar height={14} width={14} />
          <p>{date}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <MapPin width={14} height={14} />
            <p>{location}</p>
          </div>
          <div className="flex items-center gap-2.5">
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
