import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

interface SelectWithLabelProps {
  label: string
  id?: string
  variant?: "gray" | "orange" | "default"
  placeholder?: string
  icon?: React.ReactNode
}

const variantStyles: Record<string, string> = {
  gray: `
    border border-gray-400 py-6 bg-gray-50 rounded-xl
    focus:outline-none
    focus:border-orange-500
    focus:ring-2
    focus:ring-orange-500/30
  `,
  orange: `
    border border-orange-400 py-6 bg-orange-50 rounded-xl
    focus:outline-none
    focus:border-orange-600
    focus:ring-2
    focus:ring-orange-600/30
  `,
  default: `
    border border-gray-300 py-2 rounded-md
    focus:outline-none
    focus:border-blue-500
    focus:ring-2
    focus:ring-blue-500/30
  `,
}

export function SelectWithLabel({
  label,
  id,
  variant = "default",
  placeholder = "Select an option",
  icon,
}: SelectWithLabelProps) {
  return (
    <div className="grid w-full gap-2">
      <Label htmlFor={id} className="flex items-center">{icon}{label}</Label>

      <Select>
        <SelectTrigger
          id={id}
          className={`w-full ${variantStyles[variant]}`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
