"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { CheckCircle2, FileSearch, ShieldAlert, Cpu } from "lucide-react"
import { Section } from "@/components/section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    title: "Compliance & Audit",
    icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
    desc: "Rigorous standards alignment and robust auditing to ensure perfect compliance."
  },
  {
    title: "VA & Pen Test",
    icon: <ShieldAlert className="w-6 h-6 text-primary" />,
    desc: "Vulnerability Assessments and Penetration Testing to find flaws before attackers do."
  },
  {
    title: "GRC Consulting",
    icon: <FileSearch className="w-6 h-6 text-primary" />,
    desc: "Governance, Risk management, and Compliance frameworks tailored for you."
  },
  {
    title: "Open Source Tech",
    icon: <Cpu className="w-6 h-6 text-primary" />,
    desc: "Secure adoption of open-source security intelligence and platforms."
  }
]

export function AboutSection() {
  return (
    <Section id="about" className="bg-secondary/30 relative">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />
      
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold"
        >
          Trusted Advisor for <span className="text-gradient">Businesses</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground leading-relaxed"
        >
          ASHAL TECH is a globally-famed group of experts in information security and technology. We are dedicated to providing visibility, innovation, and uncompromising protection to leading enterprises around the world.
        </motion.p>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <Link href="/#services">
            <Button variant="outline" className="rounded-full mt-4">
              Discover Our Expertise
            </Button>
          </Link>
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {features.map((feat, idx) => (
          <motion.div
            key={feat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <Card className="bg-card hover:-translate-y-2 transition-transform duration-300 border-border/50 hover:border-primary/50 shadow-md hover:shadow-[0_0_30px_rgba(47,91,255,0.15)] h-full">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-semibold font-heading">{feat.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feat.desc}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
