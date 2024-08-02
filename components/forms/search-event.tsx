"use client";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { SelectTrigger, SelectValue } from "@/components/ui/select";
import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function SearchEvent() {
  const [date, setDate] = React.useState<Date>();

  return (
    <form className="p-3 md:p-5 rounded-xl bg-primary flex flex-col md:flex-row items-center gap-2.5 min-w-[300px] sm:min-w-[550px] md:min-w-[750px] xl:w-[1080px]">
      <Input
        className="p-2.5 rounded-md border-primary-foreground font-medium text-xs text-primary-foreground placeholder:font-medium placeholder:text-xs placeholder:text-primary-foreground"
        placeholder="Search Event"
      />
      <Select>
        <SelectTrigger className="p-2.5 rounded-md border-primary-foreground font-medium text-xs text-primary-foreground placeholder:font-medium placeholder:text-xs placeholder:text-primary-foreground">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
      </Select>
      <Select>
        <SelectTrigger className="p-2.5 rounded-md border-primary-foreground font-medium text-xs text-primary-foreground placeholder:font-medium placeholder:text-xs placeholder:text-primary-foreground">
          <SelectValue placeholder="Select Location" />
        </SelectTrigger>
      </Select>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "p-2.5 rounded-md border-primary-foreground font-medium text-xs text-primary-foreground placeholder:font-medium placeholder:text-xs placeholder:text-primary-foreground",
              !date && "text-primary-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <Button variant={"secondary"} className="text-xs font-bold">
        Search
      </Button>
    </form>
  );
}
