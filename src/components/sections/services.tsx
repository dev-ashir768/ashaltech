"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Headphones } from "lucide-react"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Brainy-BOX",
    desc: "Brainy-Box Learning Management System (BB-LMS) has been developed on the open-source LAMP framework consisting of Linux (operating system)"
  },
  {
    title: "Brainy-VC",
    desc: "Brainy-Box Virtual Classroom (BB-VC) enables you to share your audio, slides, chat, video, and desktop with students."
  },
  {
    title: "Brainy-PS",
    desc: "Brainy Phishing Simulator (Brainy-PS) Is A Powerful, Open-Source Phishing Framework That Makes It Easy To Test Your Organization's Exposure To Phishing."
  },
  {
    title: "Brainy-Intranet",
    desc: "Brainy-Intranet is the most trusted source of information for your employees. It is the foundation for strong team connections and collaborations."
  }
]

export function ServicesSection() {
  return (
    <Section id="services" className="bg-[#0b0e14] relative py-24">
      <div className="absolute inset-0 bg-linear-to-r from-blue-900/10 to-transparent pointer-events-none" />
      
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start relative z-10 max-w-7xl mx-auto">
        
        {/* Left Content Side */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Our Latest, Most Demanding <br className="hidden md:block" />
              Services
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              ASHAL TECH is proud of offering matchless services for IT security consultancy, training,
              and certifications, Wi-Fi hotspot solutions, incident response, security operations, and
              remediation processes.
            </p>
          </motion.div>

          {/* Services List */}
          <div className="space-y-8">
            {services.map((svc, idx) => (
              <motion.div 
                key={svc.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex gap-6 group"
              >
                {/* Icon Container with glowing effect on hover */}
                <div className="mt-1 w-14 h-14 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]">
                  <Headphones className="w-6 h-6" />
                </div>
                
                {/* Text Content */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{svc.title}</h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
                    {svc.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="pt-6"
          >
            <Link href="/services">
              <Button 
                size="lg" 
                className="rounded-full bg-linear-to-r from-sky-400 to-sky-600 hover:from-sky-300 hover:to-sky-500 text-white font-semibold shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition-all duration-300 px-8 py-6 text-lg"
              >
                View All Services
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Right Visual Side - Bento Grid Style Images */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-3 lg:gap-6 h-auto"
        >
          {/* Vertical Hacker Image (Left) */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group border border-blue-900/50 hover:border-blue-500/50 transition-colors duration-500 row-span-2 shadow-xl hover:shadow-[0_0_30px_rgba(0,100,255,0.3)] h-[400px] md:h-full">
            <Image 
              src="/images/hacker_cyber.png" 
              alt="Cybersecurity Services" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Cyber Overlay effect */}
            <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors duration-500 mix-blend-overlay" />
          </div>

          {/* Square Fingerprint Image (Top Right) */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group border border-sky-900/50 hover:border-sky-500/50 transition-colors duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(0,200,255,0.3)] h-full min-h-[190px] md:min-h-[300px] lg:min-h-[350px]">
            <Image 
              src="/images/fingerprint_cyber.png" 
              alt="Advanced Security Authentication" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-sky-500/10 group-hover:bg-transparent transition-colors duration-500 mix-blend-overlay" />
          </div>

          {/* Square Ethernet Image (Bottom Right) */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group border border-purple-900/50 hover:border-purple-500/50 transition-colors duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(150,0,255,0.3)] h-full min-h-[190px] md:min-h-[300px] lg:min-h-[350px]">
            <Image 
              src="/images/ethernet_cyber.png" 
              alt="Network Security infrastructure" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-transparent transition-colors duration-500 mix-blend-overlay" />
          </div>
        </motion.div>

      </div>
    </Section>
  )
}
