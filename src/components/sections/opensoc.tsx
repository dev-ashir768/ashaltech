"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function OpenSocSection() {
  return (
    <Section id="opensoc" className="bg-background/95 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-4xl border border-sky-500/20 shadow-[-10px_10px_30px_rgba(0,0,0,0.5)] bg-linear-to-br from-[#0a192f]/90 to-[#020c1b]/95 max-w-7xl mx-auto h-auto min-h-[500px] flex items-center"
      >
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/opensoc_bg.png" 
            alt="OpenSOC Background" 
            fill 
            className="object-cover opacity-60 mix-blend-screen scale-105 hover:scale-100 transition-transform duration-[10s] ease-in-out"
          />
          {/* Gradients to fade left side so text is readable */}
          <div className="absolute inset-0 bg-linear-to-r from-[#020617] via-[#020617]/80 to-transparent"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 p-8 md:p-16 lg:p-24 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Developing An Influential Security Operation Center
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
          >
            The Open Security Operations Center (OpenSOC) is a big data security analytics
            platform that can employ and monitor the network traffic and data breach of computers
            in the data center. OpenSOC is extensible and designed for large-scale operations.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link href="/#contact">
              <Button 
                size="lg" 
                className="rounded-full bg-linear-to-r from-sky-400 to-sky-600 hover:from-sky-300 hover:to-sky-500 text-white font-semibold shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition-all duration-300 px-8 py-6 text-lg"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  )
}
