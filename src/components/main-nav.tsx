import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function MainNav({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("hidden md:flex items-center space-x-6 text-sm font-medium", className)}>
      <Link href="/" className="transition-colors hover:text-primary">Home</Link>
      <Link href="/#about" className="transition-colors hover:text-primary text-muted-foreground">About</Link>
      <Link href="/#services" className="transition-colors hover:text-primary text-muted-foreground">Services</Link>
      <Link href="/#solutions" className="transition-colors hover:text-primary text-muted-foreground">Solutions</Link>
      <Link href="/#trainings" className="transition-colors hover:text-primary text-muted-foreground">Trainings</Link>
      <Link href="/#message" className="transition-colors hover:text-primary text-muted-foreground">Message from CEO</Link>
      <Link href="/contact" className="transition-colors hover:text-primary text-muted-foreground">Contact</Link>
    </nav>
  )
}
