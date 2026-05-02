"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ShieldCheck,
  Lock,
  Fish,
  ClipboardList,
  Award,
  ChevronDown,
  GraduationCap,
  ChevronRight,
  CheckCircle2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const trainings = [
  {
    id: "security-awareness",
    icon: ShieldCheck,
    title: "Security Awareness Training",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    accent: "from-cyan-500 to-sky-500",
    description:
      "Many of the employees are honest with their work but don't know about the best practices to secure their data. For those employees, ASHAL TECH delivers the most helpful awareness sessions that are conducted by our experts.",
    description2:
      "With the help of ASHAL TECH's awareness training programs, workers and employees get to know the best security practices, and they can build positive behavior towards their work.",
    highlights: [
      "Phishing & Social Engineering Awareness",
      "Password Security Best Practices",
      "Safe Internet & Email Usage",
      "Incident Reporting Procedures",
    ],
  },
  {
    id: "data-privacy",
    icon: Lock,
    title: "Data Privacy Training",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    accent: "from-blue-500 to-indigo-500",
    description:
      "Data privacy is a fundamental right and a business necessity. ASHAL TECH's Data Privacy Training equips your team with the knowledge to handle sensitive data responsibly and in compliance with global regulations like GDPR.",
    description2:
      "Our training covers data classification, secure handling procedures, regulatory requirements, and breach response — helping your organization build a culture of privacy from the ground up.",
    highlights: [
      "GDPR & Data Protection Regulations",
      "Data Classification & Handling",
      "Privacy by Design Principles",
      "Data Breach Response Procedures",
    ],
  },
  {
    id: "anti-phishing",
    icon: Fish,
    title: "Anti-Phishing Training",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10",
    accent: "from-orange-500 to-red-500",
    description:
      "Phishing attacks account for the majority of data breaches worldwide. ASHAL TECH's Anti-Phishing Training empowers employees to identify and report phishing attempts before they cause harm.",
    description2:
      "Using simulated phishing campaigns and real-world examples, we train your staff to recognize suspicious emails, links, and attachments — building a resilient human firewall for your organization.",
    highlights: [
      "Identifying Phishing Emails & Links",
      "Spear Phishing & Whaling Attacks",
      "Simulated Phishing Campaigns",
      "Reporting & Response Protocols",
    ],
  },
  {
    id: "compliance",
    icon: ClipboardList,
    title: "Compliance Training",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    accent: "from-emerald-500 to-teal-500",
    description:
      "Staying compliant with industry regulations is critical for avoiding legal penalties and protecting your reputation. ASHAL TECH delivers practical compliance training aligned with major regulatory frameworks.",
    description2:
      "Our compliance programs cover ISO 27001, PCI-DSS, HIPAA, and GDPR, ensuring your staff understands their roles and responsibilities in maintaining your organization's compliance posture.",
    highlights: [
      "ISO 27001 / 27002 Compliance",
      "PCI-DSS & Financial Regulations",
      "HIPAA Healthcare Compliance",
      "Internal Audit Readiness",
    ],
  },
  {
    id: "certificate",
    icon: Award,
    title: "Certificate Training",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
    accent: "from-violet-500 to-purple-500",
    description:
      "ASHAL TECH offers industry-recognized certification training programs that prepare your IT and security professionals for globally accepted credentials, boosting both individual and organizational capability.",
    description2:
      "From ethical hacking to cloud security, our expert instructors deliver structured certification courses with hands-on labs, exam preparation, and ongoing support to ensure your team succeeds.",
    highlights: [
      "CEH — Certified Ethical Hacker",
      "CISSP — Information Security",
      "CompTIA Security+ & Network+",
      "ISO 27001 Lead Auditor / Implementer",
    ],
  },
]

export function TrainingsContent() {
  const [openId, setOpenId] = React.useState<string>("security-awareness")

  const activeTraining = trainings.find((t) => t.id === openId)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(76,201,255,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              Professional Training
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Build a{" "}
              <span className="text-gradient">Security-First</span>
              <br className="hidden md:block" /> Culture
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              ASHAL TECH's training programs empower your workforce with the knowledge and
              skills to defend against modern cyber threats — from awareness to certification.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Split Layout */}
      <section className="pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none -z-10 transition-all duration-700"
          style={{
            background: activeTraining
              ? `radial-gradient(ellipse 60% 80% at 20% 50%, ${
                  activeTraining.id === "security-awareness"
                    ? "rgba(14,165,233,0.10)"
                    : activeTraining.id === "data-privacy"
                    ? "rgba(99,102,241,0.10)"
                    : activeTraining.id === "anti-phishing"
                    ? "rgba(249,115,22,0.10)"
                    : activeTraining.id === "compliance"
                    ? "rgba(16,185,129,0.10)"
                    : "rgba(139,92,246,0.10)"
                } 0%, transparent 70%)`
              : "none",
          }}
        />

        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Left — Sticky Image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-28"
            >
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/hacker_cyber.png"
                  alt="Cybersecurity Training"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-xl bg-card/80 backdrop-blur-md border border-border p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Expert-Led Training</div>
                      <div className="text-xs text-muted-foreground">Certified instructors with real-world experience</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { value: "500+", label: "Professionals Trained" },
                  { value: "5", label: "Training Programs" },
                  { value: "12+", label: "Countries Reached" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-border bg-card/50 p-3 text-center">
                    <div className="text-xl font-bold text-gradient">{s.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Accordion */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              {trainings.map((training, idx) => {
                const Icon = training.icon
                const isOpen = openId === training.id
                return (
                  <motion.div
                    key={training.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.07, duration: 0.4 }}
                    className={cn(
                      "rounded-2xl border transition-all duration-300 overflow-hidden",
                      isOpen
                        ? "border-primary/30 bg-card/80 shadow-xl"
                        : "border-border bg-card/40 hover:border-border/80 hover:bg-card/60"
                    )}
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => setOpenId(isOpen ? "" : training.id)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300",
                            isOpen ? training.iconBg : "bg-muted/50"
                          )}
                        >
                          <Icon
                            className={cn(
                              "w-5 h-5 transition-colors duration-300",
                              isOpen ? training.iconColor : "text-muted-foreground"
                            )}
                          />
                        </div>
                        <span
                          className={cn(
                            "font-semibold text-base transition-colors duration-300",
                            isOpen ? "text-foreground" : "text-muted-foreground"
                          )}
                        >
                          {training.title}
                        </span>
                      </div>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 shrink-0 transition-transform duration-300",
                          isOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                        )}
                      />
                    </button>

                    {/* Accordion Body */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="body"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 space-y-4">
                            <div className="w-full h-px bg-border" />
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {training.description}
                            </p>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {training.description2}
                            </p>

                            {/* Highlights */}
                            <div className="grid sm:grid-cols-2 gap-2 pt-1">
                              {training.highlights.map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                  <CheckCircle2 className={cn("w-4 h-4 shrink-0", training.iconColor)} />
                                  <span className="text-xs text-foreground">{item}</span>
                                </div>
                              ))}
                            </div>

                            <a
                              href="/contact"
                              className={cn(
                                "inline-flex items-center gap-2 mt-2 px-6 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r transition-all hover:-translate-y-0.5 hover:shadow-lg",
                                training.accent
                              )}
                            >
                              Learn More
                              <ChevronRight className="w-4 h-4" />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8">
          <div className="rounded-2xl border border-primary/20 bg-card/40 backdrop-blur-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Ready to train your team?
              </h3>
              <p className="text-muted-foreground">
                Get in touch to discuss a custom training program tailored to your organization.
              </p>
            </div>
            <a
              href="/contact"
              className="shrink-0 flex items-center gap-2 px-8 py-4 rounded-xl bg-primary-gradient text-[#070B2B] font-bold text-sm hover:-translate-y-0.5 transition-all glow-cyan shadow-[0_0_20px_rgba(83,200,255,0.4)]"
            >
              Contact Us Today
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
