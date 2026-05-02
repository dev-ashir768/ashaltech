import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean
  innerClassName?: string
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, container = true, innerClassName, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-14 md:py-20 relative overflow-hidden", className)}
        {...props}
      >
        {container ? (
          <div className={cn("container mx-auto px-4 md:px-8 relative z-10", innerClassName)}>
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    )
  }
)
Section.displayName = "Section"
