"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { HeartHandshake, Users, Zap, TrendingUp } from "lucide-react"
import { Section } from "@/components/section"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    title: "Customer Focused",
    desc: "We prioritize your specific security needs, designing tailored strategies to ensure your business remains protected and resilient.",
    icon: <HeartHandshake className="w-8 h-8 text-sky-400" />
  },
  {
    title: "Achieving Together",
    desc: "Collaboration is at our core. We partner seamlessly with your internal teams to build a secure, united front.",
    icon: <Users className="w-8 h-8 text-sky-400" />
  },
  {
    title: "Proactive",
    desc: "We don't wait for threats to strike. Our proactive defense mechanisms hunt vulnerabilities before they are exploited.",
    icon: <Zap className="w-8 h-8 text-sky-400" />
  },
  {
    title: "Engaged To Perform",
    desc: "High performance is our standard. Our elite professionals are continually engaged in mastering the latest cyber intelligence.",
    icon: <TrendingUp className="w-8 h-8 text-sky-400" />
  }
]

export function CoreValuesSection() {
  return (
    <Section id="values" className="bg-background/95">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Our <span className="text-gradient">Core Values</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          The pillars that guide our commitment to excellence and unyielding security for our clients.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((val, idx) => (
          <motion.div
            key={val.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="flex"
          >
            <Card className="flex-1 bg-card hover:bg-secondary/30 transition-colors border-border/40 hover:border-sky-500/50 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-[50px] group-hover:bg-sky-500/20 transition-all opacity-0 group-hover:opacity-100" />
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4 h-full relative z-10">
                <div className="p-4 rounded-full bg-background border border-border group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_15px_rgba(125,220,255,0.3)]">
                  {val.icon}
                </div>
                <h3 className="text-xl font-semibold font-heading group-hover:text-primary transition-colors">{val.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {val.desc}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
