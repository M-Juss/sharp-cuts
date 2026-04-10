"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { format } from "date-fns"
import { ChevronDownIcon } from "lucide-react"
import { addMonths, startOfDay } from "date-fns"

const today = startOfDay(new Date())
const oneMonthLater = addMonths(today, 1)


export function DateTimePickerLabel( {label, icon} ) {
  const [date, setDate] = React.useState<Date>()

  return (
    <div className="grid w-full gap-2">
        <Label>{icon}{label}</Label>
        <Popover>
            <PopoverTrigger asChild>
            <Button
                variant="outline"
                data-empty={!date}
                className="
                w-full
                py-6
                px-4
                rounded-xl
                bg-gray-50
                border border-gray-400
                text-left
                font-normal
                flex items-center justify-between

                data-[empty=true]:text-muted-foreground
                data-[empty=false]:text-black

                focus:outline-none
                focus:border-orange-500
                focus:ring-2
                focus:ring-orange-500/30

                hover:bg-gray-50
                "
            >
            {date ? format(date, "PPP") : <span>Pick a date</span>}
            <ChevronDownIcon className="size-4 text-muted-foreground" />
        </Button>
        </PopoverTrigger>


        <PopoverContent className="
                p-auto
                text-black
                bg-gray-200
                border border-gray-300
                rounded-xl
                shadow-md
            "
            align="start"
            >
            <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={{ before: today, after: oneMonthLater }}

            />

        </PopoverContent>
        </Popover>
    </div>
  )
}
