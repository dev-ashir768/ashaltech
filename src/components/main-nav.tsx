"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const links = [
  { href: "/",            label: "Home" },
  { href: "/about",       label: "About" },
  { href: "/services",    label: "Services" },
  { href: "/solutions",   label: "Solutions" },
  { href: "/trainings",   label: "Trainings" },
  { href: "/ceo-message", label: "Message from CEO" },
]

export function MainNav({ className }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <nav className={cn("hidden md:flex items-center space-x-1 text-sm font-medium", className)}>
      {links.map(({ href, label }) => {
        const active = isActive(href)
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "relative px-3 py-2 rounded-lg transition-colors duration-200",
              active
                ? "text-primary font-semibold"
                : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
            )}
          >
            {label}
            {/* active underline indicator */}
            {active && (
              <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-primary" />
            )}
          </Link>
        )
      })}
    </nav>
  )
}
