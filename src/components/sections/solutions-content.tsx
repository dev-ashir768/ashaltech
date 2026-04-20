"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Shield,
  Server,
  HeartPulse,
  ChevronRight,
  CheckCircle2,
  Wifi,
  Lock,
  Eye,
  Database,
  Cloud,
  Activity,
  Cpu,
} from "lucide-react"
import { cn } from "@/lib/utils"

const solutions = [
  {
    id: "security",
    label: "IT SECURITY SOLUTIONS",
    icon: Shield,
    hero: {
      badge: "Cybersecurity",
      title: "Get Advanced IT Security Solutions To Secure Your Business",
      description:
        "Security is a matter of grave importance nowadays, no matter what field we are discussing. Every business wants its information to be secure and well protected. If you are one of them who wants to protect their business, ASHAL TECH is there for you.",
      description2:
        "With our personalized security solutions, we help you keep all of your computer data safe and protected. The solutions we offer in this regard include data security, internet security, wireless network security, PC protection, spy protection as well as virus removal.",
    },
    offer: {
      title: "What Do We Offer Here To Ensure Your Business Security?",
      subtitle: "You can avail of the following types of services from our firm:",
      items: [
        "Firewall Systems",
        "Anti-Virus & Anti-SPAM Solutions",
        "Data Protection Systems",
        "Data Security & Theft Prevention",
        "Wireless Security",
        "Unified Threat Management",
        "Penetration Testing",
        "Security Operation Center (SOC)",
        "Security Incident Event Management System (SIEM)",
        "Information Security Awareness Training",
      ],
    },
    accent: "from-cyan-500 to-sky-500",
    glowColor: "rgba(76,201,255,0.15)",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    decorIcons: [Lock, Eye, Wifi],
  },
  {
    id: "infrastructure",
    label: "IT INFRASTRUCTURE",
    icon: Server,
    hero: {
      badge: "Infrastructure",
      title: "IT Infrastructure Solutions",
      description:
        "ASHAL TECH provides you with extensive and budget-friendly infrastructure solutions that are greatly helpful in managing your business activities in accordance with the requirements and achievement of the goals you have set.",
      description2:
        "No matter whether you have IT infrastructure, software, server, network, data storage, or other IT hardware needs, we provide you with top-class solutions. With the help of our IT solutions, all of your business tasks will be regularized and problems will be fixed by our team of experts.",
    },
    offer: {
      title: "A Wide Range Of Services That Include In Our IT Infrastructure Solutions:",
      subtitle: "Comprehensive infrastructure services tailored to your business needs:",
      items: [
        "Data Center",
        "Server Solutions",
        "Network Solutions",
        "Data Storage Solutions",
        "Backup & Data Protection",
        "Disaster Recovery Solutions",
        "Virtualization",
        "VPN Connectivity Solutions",
      ],
    },
    accent: "from-blue-500 to-indigo-500",
    glowColor: "rgba(99,102,241,0.15)",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    decorIcons: [Database, Cloud, Cpu],
  },
  {
    id: "healthcare",
    label: "HEALTHCARE SOLUTIONS",
    icon: HeartPulse,
    hero: {
      badge: "Healthcare",
      title: "Healthcare Solutions",
      description:
        "As the healthcare industry is evolving day by day, so the challenges are also increasing with time. Therefore, it has become necessary for it to keep itself improving and up-to-date to face the challenges.",
      description2:
        "A minor mistake in the field of healthcare may have disastrous outcomes. That's why one needs to be careful while dealing with this type of industry. IT plays a key role in handling the newly emerging challenges of the healthcare industry. ASHAL TECH provides a reliable option when it comes to getting the safest healthcare security solutions.",
    },
    offer: {
      title: "OUR HEALTHCARE SOLUTIONS INCLUDE:",
      subtitle: "Cutting-edge technology solutions designed for the healthcare sector:",
      items: [
        "Robotic Dispensing Systems",
        "Pharmacy Workflow Systems",
        "Pharmacy Management Software",
        "Nurse Call Systems",
        "Patient Management Software",
      ],
    },
    accent: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16,185,129,0.15)",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    decorIcons: [Activity, HeartPulse, Database],
  },
]

export function SolutionsContent() {
  const [active, setActive] = React.useState("security")
  const solution = solutions.find((s) => s.id === active)!

  return (
    <>
      {/* Page Hero */}
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
              <Shield className="w-4 h-4" />
              Our Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Tailored Solutions for{" "}
              <span className="text-gradient">Every Industry</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From enterprise cybersecurity to healthcare IT, we deliver specialized solutions
              that protect and empower your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Selector */}
      <section className="sticky top-20 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex gap-0 overflow-x-auto scrollbar-none">
            {solutions.map((s) => {
              const Icon = s.icon
              const isActive = s.id === active
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={cn(
                    "relative flex items-center gap-2 px-5 py-4 text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-200 border-b-2 -mb-px",
                    isActive
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted"
                  )}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {s.label}
                  {isActive && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute inset-0 bg-primary/5 rounded-t-md"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none -z-10 transition-all duration-700"
          style={{
            background: `radial-gradient(ellipse 60% 80% at 80% 50%, ${solution.glowColor} 0%, transparent 70%)`,
          }}
        />

        <div className="container mx-auto px-4 md:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start"
            >
              {/* Left: description */}
              <div className="lg:col-span-3 space-y-8">
                {/* Badge */}
                <div
                  className={cn(
                    "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold",
                    solution.iconBg,
                    solution.iconColor
                  )}
                >
                  <solution.icon className="w-3.5 h-3.5" />
                  {solution.hero.badge}
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                  {solution.hero.title}
                </h2>

                <div className="space-y-4">
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {solution.hero.description}
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {solution.hero.description2}
                  </p>
                </div>

                {/* Decorative stat row */}
                <div className="flex flex-wrap gap-4 pt-2">
                  {[
                    { label: "Uptime Guarantee", value: "99.9%" },
                    { label: "Expert Engineers", value: "50+" },
                    { label: "Countries Served", value: "12+" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex-1 min-w-[100px] p-4 rounded-xl bg-card border border-border text-center"
                    >
                      <div
                        className={cn(
                          "text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                          solution.accent
                        )}
                      >
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: services list card */}
              <div className="lg:col-span-2">
                <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 md:p-8 shadow-xl">
                  <h3 className="text-lg md:text-xl font-bold mb-2">{solution.offer.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{solution.offer.subtitle}</p>

                  <ul className="space-y-3">
                    {solution.offer.items.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2
                          className={cn("w-5 h-5 shrink-0 mt-0.5", solution.iconColor)}
                        />
                        <span className="text-sm text-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <a
                      href="/contact"
                      className={cn(
                        "flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r transition-all hover:-translate-y-0.5 hover:shadow-lg",
                        solution.accent
                      )}
                    >
                      Get a Free Consultation
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA band */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8">
          <div className="rounded-2xl border border-primary/20 bg-card/40 backdrop-blur-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Ready to secure your business?
              </h3>
              <p className="text-muted-foreground">
                Speak with our experts and get a tailored solution for your needs.
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
