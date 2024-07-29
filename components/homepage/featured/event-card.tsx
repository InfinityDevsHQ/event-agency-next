import { Calendar, MapPin, Ticket } from "lucide-react";
import Image from "next/image";

export default function EventCard() {
  return (
    <article className="flex flex-col gap-5 text-secondary-foreground">
      <div className="flex items-center justify-center">
        <Image
          src={"/assets/events/event-1.png"}
          alt="Event"
          width={358}
          height={222}
          className="rounded-custom"
        />
      </div>
      <div className="flex flex-col gap-5 max-w-max">
        <h4 className="font-bold text-2xl">Mid-Autumn Festival</h4>
        <div className="flex items-center gap-2.5">
          <Calendar height={14} width={14} />
          <p>December 10</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <MapPin width={14} height={14} />
            <p>Milan</p>
          </div>
          <div className="flex items-center gap-2.5">
            <Ticket width={14} height={14} />
            <p>
              <strong>Free</strong>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
