"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, ChevronRight, Home, Info, Briefcase, Lightbulb, GraduationCap, MessageSquare, Phone } from "lucide-react"

import Image from "next/image"

import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/solutions", label: "Solutions", icon: Lightbulb },
  { href: "/trainings", label: "Trainings", icon: GraduationCap },
  { href: "/ceo-message", label: "Message from CEO", icon: MessageSquare },
]

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "md:hidden rounded-xl hover:bg-primary/20 hover:text-primary transition-all")}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </SheetTrigger>
      
      <SheetContent side="left" className="w-[320px] sm:w-100 bg-[#0b0e14] border-r border-[#1a2235] p-0 flex flex-col">
        {/* Header / Brand */}
        <div className="p-6 border-b border-[#1a2235] flex justify-center">
          <Image 
            src="/images/logo.png" 
            alt="ASHAL TECH Logo" 
            width={180} 
            height={60} 
            className="object-contain h-12 w-auto"
          />
        </div>

        {/* Scrollable Navigation */}
        <div className="flex-1 overflow-y-auto py-6 px-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setOpen(false)} 
                  className="group flex items-center justify-between p-4 rounded-2xl hover:bg-[#151b2b] transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-[#1a2235] p-2.5 rounded-xl group-hover:bg-sky-500 group-hover:text-white text-gray-400 transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                      {link.label}
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Footer CTA */}
        <div className="p-6 border-t border-[#1a2235] bg-[#0b0e14]/50 backdrop-blur-lg">
          <Link href="/contact" onClick={() => setOpen(false)} className="block w-full">
            <Button size="lg" className="w-full rounded-full bg-linear-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-[0_4px_20px_rgba(14,165,233,0.3)] border-0 py-6 h-auto text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Contact Us Now
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
