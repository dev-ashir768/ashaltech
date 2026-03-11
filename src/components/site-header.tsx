"use client"

import * as React from "react"
import Link from "next/link"
import { ShieldAlert } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MobileNav />
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
              <ShieldAlert className="h-6 w-6 text-primary" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight hidden sm:inline-block">
              ASHAL TECH
            </span>
          </Link>
        </div>

        <MainNav />

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden md:block">
            <Link href="/#contact">
              <Button variant="primary-glow" className="rounded-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
