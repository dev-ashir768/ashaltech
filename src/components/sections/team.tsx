"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail, Shield } from "lucide-react"
import { Section } from "@/components/section"
import { cn } from "@/lib/utils"

const team = [
  {
    name: "Abbas J.",
    role: "Founder & CEO",
    bio: "20+ years in cybersecurity. SABSA SCF, CISSP, ISO 27001 LA. Leads ASHAL TECH's vision for next-gen security.",
    initials: "AJ",
    gradient: "from-cyan-500 to-sky-600",
    glow: "rgba(14,165,233,0.4)",
    linkedin: "#",
    twitter: "#",
    email: "ceo@ashaltech.com",
  },
  {
    name: "Sarah M.",
    role: "Chief Technology Officer",
    bio: "Cloud security architect with deep expertise in zero-trust frameworks and enterprise infrastructure.",
    initials: "SM",
    gradient: "from-violet-500 to-purple-600",
    glow: "rgba(139,92,246,0.4)",
    linkedin: "#",
    twitter: "#",
    email: "cto@ashaltech.com",
  },
  {
    name: "Ahmed K.",
    role: "Head of Security Operations",
    bio: "SOC specialist with hands-on SIEM, threat hunting, and incident response experience across 50+ deployments.",
    initials: "AK",
    gradient: "from-blue-500 to-indigo-600",
    glow: "rgba(99,102,241,0.4)",
    linkedin: "#",
    twitter: "#",
    email: "soc@ashaltech.com",
  },
  {
    name: "Lina R.",
    role: "Lead Penetration Tester",
    bio: "CEH, OSCP certified. Specialises in red team exercises, web app pen testing, and social engineering assessments.",
    initials: "LR",
    gradient: "from-rose-500 to-pink-600",
    glow: "rgba(244,63,94,0.4)",
    linkedin: "#",
    twitter: "#",
    email: "pentest@ashaltech.com",
  },
  {
    name: "Omar F.",
    role: "Cloud Security Architect",
    bio: "AWS & Azure certified. Designs and deploys secure cloud environments with IaC, DevSecOps, and CSPM tooling.",
    initials: "OF",
    gradient: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.4)",
    linkedin: "#",
    twitter: "#",
    email: "cloud@ashaltech.com",
  },
  {
    name: "Nadia T.",
    role: "GRC & Compliance Manager",
    bio: "ISO 27001 & PCI-DSS lead auditor. Drives governance frameworks and regulatory compliance for global clients.",
    initials: "NT",
    gradient: "from-amber-500 to-orange-600",
    glow: "rgba(245,158,11,0.4)",
    linkedin: "#",
    twitter: "#",
    email: "grc@ashaltech.com",
  },
]

export function TeamSection() {
  return (
    <Section id="team" className="bg-[#0b0e14]">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(76,201,255,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Header */}
      <div className="text-center mb-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-5">
            <Shield className="w-4 h-4" />
            The People Behind the Shield
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-gradient">Expert Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A diverse group of certified security professionals committed to protecting
            your business from every angle.
          </p>
        </motion.div>
      </div>

      {/* Team Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {team.map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <div className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 hover:shadow-[0_0_30px_rgba(76,201,255,0.08)] h-full flex flex-col">
              {/* Avatar */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={cn(
                    "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center shrink-0 text-white font-bold text-xl shadow-lg transition-transform duration-300 group-hover:scale-105",
                    member.gradient
                  )}
                  style={{ boxShadow: `0 0 20px ${member.glow}` }}
                >
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">{member.name}</h3>
                  <p
                    className={cn(
                      "text-sm font-semibold bg-gradient-to-r bg-clip-text text-transparent mt-0.5",
                      member.gradient
                    )}
                  >
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-border mb-4" />

              {/* Bio */}
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {member.bio}
              </p>

              {/* Social links */}
              <div className="flex items-center gap-2 mt-5 pt-4 border-t border-border">
                {[
                  { icon: Linkedin, href: member.linkedin, label: "LinkedIn" },
                  { icon: Twitter, href: member.twitter, label: "Twitter" },
                  { icon: Mail, href: `mailto:${member.email}`, label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-8 h-8 rounded-lg bg-secondary/60 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
