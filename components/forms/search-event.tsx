"use client";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem } from "../ui/select";
import { SelectTrigger, SelectValue } from "../ui/select";
import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "../../lib/utils";

export default function SearchEvent() {
  const [date, setDate] = React.useState<Date>();

  return (
    <form className="p-3 md:p-5 rounded-xl bg-primary grid sm:grid-cols-2 md:grid-cols-5 items-center gap-2.5 min-w-[300px] sm:min-w-[550px] md:min-w-[750px] xl:w-[1250px]">
      <Input
        className="p-2.5 rounded-md border-primary-foreground font-medium text-xs text-primary-foreground placeholder:font-medium placeholder:text-xs placeholder:text-primary-foreground focus-visible:ring-1"
        placeholder="Search Event"
      />
      <Select>
        <SelectTrigger className="p-2.5 rounded-md border-primary-foreground font-medium text-xs text-primary-foreground placeholder:font-medium placeholder:text-xs placeholder:text-primary-foreground">
          <SelectValue placeholder="Select Category" />
          <SelectContent>
            <SelectItem value="Option 1">Mid-Autumn Festival</SelectItem>
            <SelectItem value="Option 2">Santa Ana Winter Village</SelectItem>
            <SelectItem value="Option 3">Brew at the Zoo</SelectItem>
          </SelectContent>
        </SelectTrigger>
      </Select>
      <Select>
        <SelectTrigger className="p-2.5 rounded-md border-primary-foreground font-medium text-xs text-primary-foreground placeholder:font-medium placeholder:text-xs placeholder:text-primary-foreground">
          <SelectValue placeholder="Select Location" />
          <SelectContent>
            <SelectItem value="Option 1">Rome</SelectItem>
            <SelectItem value="Option 2">Milan</SelectItem>
            <SelectItem value="Option 3">Italy</SelectItem>
          </SelectContent>
        </SelectTrigger>
      </Select>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "p-2.5 rounded-md border-primary-foreground font-medium text-xs text-primary-foreground placeholder:font-medium placeholder:text-xs placeholder:text-primary-foreground justify-between",
              !date && "text-primary-foreground"
            )}
          >
            {date ? format(date, "PPP") : <span>Pick a date</span>}
            <CalendarIcon className="h-6 w-6 opacity-50 border-l border-black/30 pl-2" />
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

      <Button
        variant={"secondary"}
        className="text-xs font-bold lg:px-6 lg:py-3 text-white hover:bg-secondary/90 col-span-2 md:col-span-1 w-1/2 md:w-full place-self-center"
      >
        Search
      </Button>
    </form>
  );
}
