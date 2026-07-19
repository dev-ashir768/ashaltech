"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Quote, Award, Shield, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const certifications = [
  "SABSA SCF", "CISLO", "CIISSA", "CIDRE", "CIISRM", "CIPTC",
  "CIVA", "CIPTE", "CIEH", "CIISSM", "CIISSO", "CIISMS-LA",
  "CIISMS-LI", "RHCT Trainer",
]

const consultantCerts = [
  "ISO 27001:2013 – LA",
  "ISO 9001:2015-LA",
  "ISO 20000-1:2011-",
  "BCM 22301-LA",
]

const paragraphs = [
  "It would not be wrong to say that data security, Internet security, and cyber resilience are the key support of the digital economy. They help individuals and businesses to protect their information data and personal information from any threats and breaches by giving surety to keep the information confidential with honesty and with the availability (the CIA triad) of information. Without the support of these vital three pillars, we will drop the importance and value of global data security. Hence, data security, Internet security, and cyber resilience are the key elements to protect data from threats and breaches as the number of hackers is increasing day by day.",
  "ASHAL TECH was founded in 2012 to meet the challenges and become a reliable security consulting and training company. We are always available to provide our matchless services to the government and private sectors as well as to individuals of course. More than this, ASHAL TECH aims to build new and innovative Internet security solutions that assist the businesses of every sector. Moreover, we are glad to serve the military organizations to help in their work on the Internet and information security.",
  "The security of the Internet is everyone's duty, and everyone is responsible for that. Therefore, we expand our services to communicate with you online via our ASHAL TECH website. We want everyone to work with us with the same objective in mind and can cooperate with us on topics of common interest so that we can efficiently improve information security together and provide guaranteed support for commercial and non-profit organizations in this online world.",
  "We are full of expectations for the future of ASHAL technology and wish to open up new business opportunities to provide you with A to Z services of cyber-security.",
]

export function CeoContent() {
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
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>›</span>
              <span className="text-primary">Message from CEO</span>
            </div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Leadership
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Message from <span className="text-gradient">CEO</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A vision for a more secure digital future — from our Founder & CEO.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content — Split Layout */}
      <section className="pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          style={{
            background:
              "radial-gradient(ellipse 50% 70% at 80% 30%, rgba(76,201,255,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

            {/* Left — CEO Photo + Card */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 lg:sticky lg:top-28 space-y-5"
            >
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl aspect-[3/4]">
                <Image
                  src="/images/hacker_cyber.png"
                  alt="Abbas J. — Founder & CEO"
                  fill
                  className="object-cover object-center"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                {/* Name plate inside image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="rounded-xl bg-card/80 backdrop-blur-md border border-border p-4">
                    <div className="text-xl font-bold">Abbas J.</div>
                    <div className="text-primary text-sm font-semibold">Founder & CEO</div>
                  </div>
                </div>
              </div>

              {/* Certifications card */}
              <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="font-bold text-sm">Certifications</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <span
                      key={cert}
                      className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                    >
                      {cert}
                    </span>
                  ))}
                </div>

                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground font-medium mb-2">Consultant:</p>
                  <div className="space-y-1">
                    {consultantCerts.map((c) => (
                      <div key={c} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        <span className="text-xs text-muted-foreground">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — CEO Message */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3 space-y-8"
            >
              {/* Header */}
              <div className="space-y-2">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest">
                  A Dynamic & Inspiring Security Services Provider
                </p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  CEO Message:
                </h2>
                <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500" />
              </div>

              {/* Message paragraphs */}
              <div className="space-y-5">
                {paragraphs.map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    className={cn(
                      "leading-relaxed",
                      i === 0
                        ? "text-foreground"
                        : "text-muted-foreground",
                      // Bold "ASHAL TECH" in second paragraph handled via JSX below
                    )}
                  >
                    {i === 1 ? (
                      <>
                        <span className="font-bold text-foreground">ASHAL TECH</span>
                        {para.replace("ASHAL TECH", "")}
                      </>
                    ) : para}
                  </motion.p>
                ))}
              </div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="relative rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8"
              >
                <Quote className="w-8 h-8 text-primary/30 mb-3" />
                <p className="italic text-muted-foreground leading-relaxed">
                  &ldquo;Get Our State-Of-The-Art Security Solutions And Take Your Business To The
                  New Heights Of Success Without Any Security Threats &amp; Breaches.&rdquo;
                </p>
                <div className="absolute bottom-0 right-0 w-24 h-24 rounded-2xl bg-primary/5 -z-10" />
              </motion.div>

              {/* Signature */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.5 }}
                className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 flex items-center gap-5"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-sky-500/20 border border-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-gradient">A</span>
                </div>
                <div>
                  <div className="text-xl font-bold">Abbas J.</div>
                  <div className="text-primary font-semibold text-sm">Founder & CEO</div>
                  <div className="text-muted-foreground text-xs mt-0.5">ASHAL TECH</div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95, duration: 0.5 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary-gradient text-[#070B2B] font-bold text-sm hover:-translate-y-0.5 transition-all glow-cyan shadow-[0_0_20px_rgba(83,200,255,0.4)]"
                >
                  Connect With Our Team
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
