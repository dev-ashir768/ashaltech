"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Section {
  title: string
  body: React.ReactNode
}

interface LegalContentProps {
  badge: string
  title: string
  subtitle: string
  lastUpdated: string
  sections: Section[]
}

export function LegalContent({ badge, title, subtitle, lastUpdated, sections }: LegalContentProps) {
  const [active, setActive] = React.useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(76,201,255,0.10) 0%, transparent 70%)",
          }}
        />
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              {badge}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">{title}</h1>
            <p className="text-muted-foreground text-base max-w-xl mx-auto mb-3">{subtitle}</p>
            <p className="text-muted-foreground/60 text-sm">Last updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            {sections.map((sec, i) => {
              const isOpen = active === i
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className={cn(
                    "rounded-2xl border transition-all duration-300 overflow-hidden",
                    isOpen
                      ? "border-primary/30 bg-card/80"
                      : "border-border bg-card/40 hover:border-border/70"
                  )}
                >
                  <button
                    onClick={() => setActive(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors",
                          isOpen ? "bg-primary text-[#070B2B]" : "bg-primary/10 text-primary"
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={cn("font-semibold text-base", isOpen ? "text-foreground" : "text-muted-foreground")}>
                        {sec.title}
                      </span>
                    </div>
                    <svg
                      className={cn("w-4 h-4 shrink-0 transition-transform duration-300 text-primary", isOpen && "rotate-180")}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-6"
                    >
                      <div className="w-full h-px bg-border mb-4" />
                      <div className="text-muted-foreground text-sm leading-relaxed space-y-3">
                        {sec.body}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
