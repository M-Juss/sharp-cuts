import * as React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InputWithLabelProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  variant?: "gray" | "orange" | "default"
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

export const InputWithLabel = React.forwardRef<
  HTMLInputElement,
  InputWithLabelProps
>(({ label, id, icon, className, variant = "default", ...props }, ref) => {

  const appliedClasses = `${variantStyles[variant]} ${className ?? ""}`
  
  return (
    <div className="grid w-full gap-2">
      <Label htmlFor={id}>{icon}{label}</Label>
      <Input ref={ref} id={id} {...props} className={appliedClasses} />
    </div>
  )
})

InputWithLabel.displayName = "InputWithLabel"