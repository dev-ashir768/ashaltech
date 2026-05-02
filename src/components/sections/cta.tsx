"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Award, Quote } from "lucide-react"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CtaSection() {
  return (
    <Section className="bg-[#0b0e14]">
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Left Card - Quote & CTA */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="relative overflow-hidden rounded-4xl bg-card p-10 md:p-14 border border-border shadow-lg"
        >
          {/* Subtle glow background */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
          
          <div className="relative z-10 h-full flex flex-col justify-between space-y-8">
            <div>
              <Quote className="w-12 h-12 text-primary/30 mb-6" />
              <h3 className="text-2xl md:text-4xl font-bold font-heading leading-tight mb-4">
                "Cybersecurity isn't just an IT expense. <br />
                <span className="text-gradient">It's a business investment.</span>"
              </h3>
              <p className="text-muted-foreground text-lg">
                Protect your intellectual property, safeguard customer trust, and ensure operational continuity with our top-tier defense programs.
              </p>
            </div>
            
            <div className="pt-4">
              <Link href="/contact">
                <Button variant="primary-glow" size="xl" className="group">
                  Contact Us Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Card - Certification */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="relative overflow-hidden rounded-4xl bg-card p-10 md:p-14 border border-border shadow-lg"
        >
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-sky-500/10 rounded-full blur-[100px]" />

          <div className="relative z-10 h-full flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-primary/10 border border-primary/20 w-fit">
                <Award className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold font-heading">
                Premium Training & Certification
              </h3>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Elevate your team's capability with rigorous security training. We provide specialized, globally recognized certifications including 
                <span className="font-semibold text-foreground"> Mile2 </span>
                to ensure your personnel are your strongest defense.
              </p>
            </div>

            <div className="pt-4">
              <Link href="/trainings">
                <Button variant="secondary-glow" size="xl" className="group">
                  Learn More About Trainings
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  )
}
