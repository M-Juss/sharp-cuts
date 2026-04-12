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

interface SelectOption {
  value: string
  label: string
}

interface SelectWithLabelProps {
  label: string
  id?: string
  variant?: "gray" | "orange" | "default"
  placeholder?: string
  icon?: React.ReactNode
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  options?: SelectOption[]
  groupLabel?: string
  name?: string
  disabled?: boolean
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
  value,
  defaultValue,
  onValueChange,
  options,
  groupLabel = "Options",
  name,
  disabled,
}: SelectWithLabelProps) {
  const resolvedOptions = options ?? [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "blueberry", label: "Blueberry" },
    { value: "grapes", label: "Grapes" },
    { value: "pineapple", label: "Pineapple" },
  ]

  return (
    <div className="grid w-full gap-2">
      <Label htmlFor={id} className="flex items-center">{icon}{label}</Label>

      <Select
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        name={name}
        disabled={disabled}
      >
        <SelectTrigger
          id={id}
          className={`w-full ${variantStyles[variant]}`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>{groupLabel}</SelectLabel>
            {resolvedOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
