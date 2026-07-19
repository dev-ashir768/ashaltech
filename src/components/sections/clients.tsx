"use client"

import * as React from "react"
import { Section } from "@/components/section"

// Placeholder logo data - in real app would use next/image
const clients = [
  { id: 1, name: "Global Bank" },
  { id: 2, name: "TechCorp" },
  { id: 3, name: "HealthPlus" },
  { id: 4, name: "SecureNet" },
  { id: 5, name: "DefenseSys" },
  { id: 6, name: "AeroSpace" },
]

export function ClientsSection() {
  return (
    <Section className="py-14 bg-background/95 border-y border-border">
      <div className="text-center mb-12">
        <h3 className="text-xl md:text-2xl font-bold text-muted-foreground font-heading uppercase tracking-widest">
          Our Esteemed Clients
        </h3>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-[slide_30s_linear_infinite] whitespace-nowrap group-hover:pause">
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <div 
              key={`${client.id}-${idx}`}
              className="flex items-center justify-center w-48 md:w-64 px-8 mx-4 h-24 rounded-2xl bg-secondary/30 border border-border/40 hover:bg-secondary hover:border-primary/30 transition-all cursor-pointer group/logo"
            >
              <div className="font-heading font-bold text-xl md:text-2xl text-muted-foreground/50 group-hover/logo:text-foreground transition-colors mix-blend-luminosity opacity-40 group-hover/logo:opacity-100 group-hover/logo:mix-blend-normal">
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
        .pause { animation-play-state: paused; }
      `}} />
    </Section>
  )
}
