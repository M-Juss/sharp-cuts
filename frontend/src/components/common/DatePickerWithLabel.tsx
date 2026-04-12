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

interface DateTimePickerLabelProps {
  id?: string
  label: string
  icon?: React.ReactNode
  value?: Date
  defaultValue?: Date
  onChange?: (date: Date | undefined) => void
  placeholder?: string
}

export function DateTimePickerLabel({
  id,
  label,
  icon,
  value,
  defaultValue,
  onChange,
  placeholder = "Pick a date",
}: DateTimePickerLabelProps) {
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(
    defaultValue
  )

  const isControlled = typeof onChange === "function"
  const selectedDate = isControlled ? value : internalDate

  const handleSelect = (date: Date | undefined) => {
    if (!isControlled) {
      setInternalDate(date)
    }
    onChange?.(date)
  }

  return (
    <div className="grid w-full gap-2">
        <Label htmlFor={id}>{icon}{label}</Label>
        <Popover>
            <PopoverTrigger asChild>
            <Button
                id={id}
                variant="outline"
                data-empty={!selectedDate}
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
            {selectedDate ? format(selectedDate, "PPP") : <span>{placeholder}</span>}
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
            selected={selectedDate}
            onSelect={handleSelect}
            disabled={{ before: today, after: oneMonthLater }}

            />

        </PopoverContent>
        </Popover>
    </div>
  )
}
