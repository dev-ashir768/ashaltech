"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ShieldCheck, Shield, Lock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import Link from "next/link"

export function HeroSection() {
  return (
    <Section className="min-h-[90vh] flex items-center pt-32 pb-20 lg:pt-40 lg:pb-32" innerClassName="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none -z-10 dark:bg-sky-500/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none -z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary w-fit">
          <ShieldCheck className="w-5 h-5" />
          <span className="text-sm font-medium">Secured by 200+ elite teams</span>
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
          Emergent <br className="hidden lg:block" />
          <span className="text-gradient">Security Solutions</span>
        </h1>
        
        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
          Defend your digital frontier with confidence. We deliver zero-compromise business protection, advanced threat intelligence, and proactive cyber defense tailored for the modern enterprise.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link href="/#services">
            <Button variant="primary-glow" size="xl" className="w-full sm:w-auto group">
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/#contact">
            <Button variant="secondary-glow" size="xl" className="w-full sm:w-auto">
              Consult With Us
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Visuals */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative h-[400px] lg:h-[600px] w-full hidden sm:block"
      >
        {/* Abstract Cyber Visual built with glowing elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-primary/30 rounded-full border-dashed"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 border border-sky-400/20 rounded-full border-solid"
            />
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-12 bg-primary/10 rounded-full blur-xl"
            />
            
            <div className="absolute inset-0 flex items-center justify-center -translate-y-4">
              <Shield className="w-32 h-32 text-primary drop-shadow-[0_0_15px_rgba(76,201,255,0.8)]" />
              <Lock className="absolute w-12 h-12 text-background mt-2" />
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 right-0 bg-background/80 backdrop-blur-md border border-border p-4 rounded-xl shadow-lg flex items-center gap-3"
            >
              <div className="w-3 h-3 rounded-full bg-green-500 glow-cyan" />
              <span className="text-sm font-medium">Monitoring Active</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-8 -left-8 bg-background/80 backdrop-blur-md border border-border p-4 rounded-xl shadow-lg flex flex-col gap-1"
            >
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Threats Blocked</span>
              <span className="text-xl font-bold font-heading text-primary">2.4M+</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
