"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Network,
  Settings,
  ClipboardCheck,
  Lightbulb,
  ShieldAlert,
  Scale,
  Code2,
  BookOpen,
  Video,
  Fish,
  Globe2,
  UserCog,
  ChevronRight,
  CheckCircle2,
} from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    id: "networking",
    label: "NETWORKING",
    icon: Network,
    badge: "Infrastructure",
    title: "Networking Solutions",
    description:
      "In any market scenario to be able to maintain PCs, Servers and Network installations in an effective and user-friendly manner, network and structured cabling set up is mandatory. We at ASHAL TECH are committed towards providing round the clock service and support for your critical business needs.",
    description2:
      "We believe that in customized response for each of your needs. We provide comprehensive and non-comprehensive annual maintenance contracts, covering the maintenance of your IT hardware, years after your warranty period is over.",
    offerings: {
      title: "Our Networking Services Include:",
      items: [
        "Structure Cabling",
        "Server Room Setup",
        "Network & Server Migration",
        "Network Security",
        "Network Planning & Design",
        "Network Installation & Troubleshooting",
        "Telephone Systems Implementation",
        "Office Migration",
      ],
    },
    accent: "from-sky-500 to-cyan-500",
    glowColor: "rgba(14,165,233,0.15)",
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-400",
    borderActive: "border-sky-500",
  },
  {
    id: "managed-services",
    label: "MANAGED SERVICES",
    icon: Settings,
    badge: "IT Management",
    title: "Managed IT Services",
    description:
      "ASHAL TECH's Managed Services provide comprehensive IT support and management, allowing your business to focus on core operations while we handle your technology infrastructure. Our proactive approach ensures maximum uptime and performance.",
    description2:
      "We offer a full suite of managed IT services designed to reduce operational costs, improve efficiency, and provide peace of mind with around-the-clock monitoring and support from our expert team.",
    offerings: {
      title: "Our Managed Services Include:",
      items: [
        "24/7 Infrastructure Monitoring",
        "Helpdesk & Remote Support",
        "Patch Management",
        "Backup & Disaster Recovery",
        "Performance Optimization",
        "IT Asset Management",
        "Vendor Management",
        "Monthly Reporting & Reviews",
      ],
    },
    accent: "from-blue-500 to-indigo-500",
    glowColor: "rgba(99,102,241,0.15)",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    borderActive: "border-blue-500",
  },
  {
    id: "compliance",
    label: "COMPLIANCE & AUDIT",
    icon: ClipboardCheck,
    badge: "Compliance",
    title: "Compliance & Audit Services",
    description:
      "Navigating the complex landscape of regulatory compliance can be challenging. ASHAL TECH helps your organization achieve and maintain compliance with industry standards and regulations, protecting your business from legal and financial risks.",
    description2:
      "Our experienced compliance team conducts thorough audits, identifies gaps, and provides actionable remediation plans. We ensure your security posture aligns with global standards and regulatory requirements.",
    offerings: {
      title: "Our Compliance & Audit Services Include:",
      items: [
        "ISO 27001 Compliance",
        "GDPR Compliance",
        "PCI-DSS Assessment",
        "Security Audits",
        "Risk Assessment & Management",
        "Gap Analysis",
        "Compliance Reporting",
        "Policy & Procedure Development",
      ],
    },
    accent: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16,185,129,0.15)",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    borderActive: "border-emerald-500",
  },
  {
    id: "it-consulting",
    label: "IT CONSULTING",
    icon: Lightbulb,
    badge: "Consulting",
    title: "IT Consulting Services",
    description:
      "ASHAL TECH's IT consulting services help businesses leverage technology to achieve their strategic goals. Our seasoned consultants bring deep expertise across industries to deliver solutions that drive measurable results.",
    description2:
      "From digital transformation to cloud adoption, we provide strategic guidance tailored to your unique business needs and challenges, ensuring technology investments deliver maximum value.",
    offerings: {
      title: "Our IT Consulting Services Include:",
      items: [
        "IT Strategy & Roadmap",
        "Digital Transformation",
        "Cloud Strategy & Migration",
        "IT Governance Frameworks",
        "Technology Vendor Selection",
        "Cost Optimization",
        "Business Continuity Planning",
        "IT Project Management",
      ],
    },
    accent: "from-violet-500 to-purple-500",
    glowColor: "rgba(139,92,246,0.15)",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    borderActive: "border-violet-500",
  },
  {
    id: "va-pen",
    label: "VA and PEN Testing",
    icon: ShieldAlert,
    badge: "Security Testing",
    title: "Vulnerability Assessment & Penetration Testing",
    description:
      "ASHAL TECH offers comprehensive Vulnerability Assessment and Penetration Testing (VAPT) services that help organizations identify security weaknesses before malicious actors can exploit them.",
    description2:
      "Our certified security experts simulate real-world attacks against your infrastructure, applications, and systems, providing detailed reports with prioritized remediation recommendations to strengthen your security posture.",
    offerings: {
      title: "Our VAPT Services Include:",
      items: [
        "Network Vulnerability Assessment",
        "Web Application Penetration Testing",
        "Mobile Application Testing",
        "Social Engineering Testing",
        "Red Team Exercises",
        "OWASP Top 10 Assessment",
        "Detailed Risk Reports",
        "Remediation Guidance",
      ],
    },
    accent: "from-red-500 to-orange-500",
    glowColor: "rgba(239,68,68,0.15)",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-400",
    borderActive: "border-red-500",
  },
  {
    id: "grc",
    label: "GRC",
    icon: Scale,
    badge: "Governance",
    title: "Governance, Risk & Compliance (GRC)",
    description:
      "ASHAL TECH's GRC services provide a unified approach to managing governance, risk, and compliance across your organization. We help you build a robust GRC framework that aligns IT objectives with business goals.",
    description2:
      "Our GRC solutions enable organizations to proactively identify and manage risks, maintain regulatory compliance, and establish strong governance practices that support long-term business resilience.",
    offerings: {
      title: "Our GRC Services Include:",
      items: [
        "Governance Framework Design",
        "Enterprise Risk Management",
        "Compliance Management",
        "Policy Lifecycle Management",
        "Audit & Control Management",
        "Incident & Response Management",
        "Business Continuity Management",
        "Regulatory Reporting",
      ],
    },
    accent: "from-amber-500 to-yellow-500",
    glowColor: "rgba(245,158,11,0.15)",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    borderActive: "border-amber-500",
  },
  {
    id: "open-source",
    label: "Open Source Consulting",
    icon: Code2,
    badge: "Open Source",
    title: "Open Source Consulting",
    description:
      "ASHAL TECH helps organizations leverage the power of open-source technologies to reduce costs, increase flexibility, and drive innovation. Our open-source experts guide you through selection, implementation, and ongoing support.",
    description2:
      "From Linux infrastructure to custom open-source solutions, we provide expert consultation, implementation, and training to help your team maximize the benefits of open-source technologies while minimizing risk.",
    offerings: {
      title: "Our Open Source Services Include:",
      items: [
        "Open Source Strategy Development",
        "Linux Server Administration",
        "Open Source Security Hardening",
        "Migration from Proprietary Systems",
        "Custom Open Source Development",
        "Integration & Automation",
        "Training & Knowledge Transfer",
        "Ongoing Support & Maintenance",
      ],
    },
    accent: "from-lime-500 to-green-500",
    glowColor: "rgba(132,204,22,0.15)",
    iconBg: "bg-lime-500/10",
    iconColor: "text-lime-400",
    borderActive: "border-lime-500",
  },
  {
    id: "brainy-box",
    label: "Brainy-BOX",
    icon: BookOpen,
    badge: "E-Learning",
    title: "Brainy-BOX — Learning Management System",
    description:
      "Brainy-BOX (BB-LMS) is a powerful Learning Management System developed on the open-source LAMP framework. It provides organizations with a comprehensive platform for delivering, tracking, and managing educational and training content.",
    description2:
      "Whether you're training employees on cybersecurity awareness or delivering full academic curricula, Brainy-BOX offers the tools you need to create engaging learning experiences and track learner progress effectively.",
    offerings: {
      title: "Brainy-BOX Features Include:",
      items: [
        "Course Creation & Management",
        "Student Enrollment & Tracking",
        "Assessment & Quiz Tools",
        "Reporting & Analytics Dashboard",
        "Multi-device Responsive Design",
        "Content Library Management",
        "Certification & Badge Management",
        "SCORM & xAPI Compatibility",
      ],
    },
    accent: "from-cyan-500 to-sky-500",
    glowColor: "rgba(76,201,255,0.15)",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    borderActive: "border-cyan-500",
  },
  {
    id: "brainy-vc",
    label: "Brainy-VC",
    icon: Video,
    badge: "Virtual Classroom",
    title: "Brainy-VC — Virtual Classroom",
    description:
      "Brainy-BOX Virtual Classroom (BB-VC) enables you to share your audio, slides, chat, video, and desktop with students. It provides an interactive and immersive remote learning experience that replicates the physical classroom environment.",
    description2:
      "Brainy-VC is built for educational institutions, corporate trainers, and organizations that need to deliver live training sessions at scale, with real-time collaboration tools that keep learners engaged.",
    offerings: {
      title: "Brainy-VC Features Include:",
      items: [
        "HD Video Conferencing",
        "Screen & Desktop Sharing",
        "Interactive Whiteboard",
        "Live Chat & Q&A",
        "Session Recording & Playback",
        "Breakout Rooms",
        "Attendance Tracking",
        "Multi-user Collaboration",
      ],
    },
    accent: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59,130,246,0.15)",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    borderActive: "border-blue-500",
  },
  {
    id: "brainy-ps",
    label: "Brainy-PS",
    icon: Fish,
    badge: "Security Awareness",
    title: "Brainy-PS — Phishing Simulator",
    description:
      "Brainy Phishing Simulator (Brainy-PS) is a powerful, open-source phishing framework that makes it easy to test your organization's exposure to phishing attacks. It helps identify vulnerable employees and strengthen your human firewall.",
    description2:
      "With Brainy-PS, you can launch realistic phishing campaigns, track employee responses, and automatically enroll at-risk users in targeted security awareness training — all from a single, easy-to-use platform.",
    offerings: {
      title: "Brainy-PS Features Include:",
      items: [
        "Realistic Phishing Campaign Templates",
        "Custom Email & Landing Page Builder",
        "Employee Behavior Tracking",
        "Department-level Risk Analytics",
        "Automated Training Enrollment",
        "Campaign Scheduling",
        "Detailed Reporting & Dashboards",
        "Integration with Brainy-BOX LMS",
      ],
    },
    accent: "from-orange-500 to-red-500",
    glowColor: "rgba(249,115,22,0.15)",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
    borderActive: "border-orange-500",
  },
  {
    id: "brainy-intranet",
    label: "Brainy-Intranet",
    icon: Globe2,
    badge: "Collaboration",
    title: "Brainy-Intranet — Employee Collaboration Platform",
    description:
      "Brainy-Intranet is the most trusted source of information for your employees. It is the foundation for strong team connections and collaboration, providing a centralized hub for internal communications, resources, and workflows.",
    description2:
      "Built for modern organizations, Brainy-Intranet streamlines internal communication, enables knowledge sharing, and fosters a connected workplace culture — whether your teams are in-office or distributed globally.",
    offerings: {
      title: "Brainy-Intranet Features Include:",
      items: [
        "Employee News & Announcements",
        "Document Management System",
        "Team Collaboration Spaces",
        "Internal Messaging & Notifications",
        "Knowledge Base & Wiki",
        "HR Tools & Employee Directory",
        "Project Tracking",
        "Mobile-Responsive Interface",
      ],
    },
    accent: "from-teal-500 to-emerald-500",
    glowColor: "rgba(20,184,166,0.15)",
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-400",
    borderActive: "border-teal-500",
  },
  {
    id: "virtual-ciso",
    label: "Virtual CISO Services",
    icon: UserCog,
    badge: "vCISO",
    title: "Virtual CISO (vCISO) Services",
    description:
      "ASHAL TECH's Virtual CISO (vCISO) service provides your organization with executive-level cybersecurity leadership on a flexible, cost-effective basis. Get the strategic security guidance of a seasoned CISO without the overhead of a full-time hire.",
    description2:
      "Our vCISO experts work as an extension of your team, developing and overseeing your information security program, managing risk, ensuring compliance, and communicating security posture to executive leadership and boards.",
    offerings: {
      title: "Our Virtual CISO Services Include:",
      items: [
        "Security Strategy & Roadmap",
        "Risk Assessment & Management",
        "Compliance Program Oversight",
        "Security Policy Development",
        "Incident Response Planning",
        "Security Awareness Programs",
        "Board & Executive Reporting",
        "Vendor & Third-Party Risk Management",
      ],
    },
    accent: "from-pink-500 to-rose-500",
    glowColor: "rgba(236,72,153,0.15)",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400",
    borderActive: "border-pink-500",
  },
]

export function ServicesContent() {
  const [active, setActive] = React.useState("networking")
  const service = services.find((s) => s.id === active)!

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
              <Settings className="w-4 h-4" />
              What We Offer
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Comprehensive{" "}
              <span className="text-gradient">IT & Security</span>
              <br className="hidden md:block" /> Services
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From networking infrastructure to advanced cybersecurity, ASHAL TECH delivers
              end-to-end technology services that protect and power your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Layout: Sidebar + Content */}
      <section className="pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none -z-10 transition-all duration-700"
          style={{
            background: `radial-gradient(ellipse 60% 80% at 80% 50%, ${service.glowColor} 0%, transparent 70%)`,
          }}
        />

        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Left Sidebar */}
            <aside className="lg:w-72 shrink-0">
              <div className="sticky top-24 rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden">
                <div className="p-4 border-b border-border">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                    Our Services
                  </p>
                </div>
                <nav className="p-2">
                  {services.map((s) => {
                    const Icon = s.icon
                    const isActive = s.id === active
                    return (
                      <button
                        key={s.id}
                        onClick={() => setActive(s.id)}
                        className={cn(
                          "w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-left group",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={cn(
                              "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200",
                              isActive ? s.iconBg : "bg-muted/50 group-hover:bg-muted"
                            )}
                          >
                            <Icon
                              className={cn(
                                "w-4 h-4 transition-colors duration-200",
                                isActive ? s.iconColor : "text-muted-foreground group-hover:text-foreground"
                              )}
                            />
                          </div>
                          <span className="leading-tight">{s.label}</span>
                        </div>
                        <ChevronRight
                          className={cn(
                            "w-4 h-4 shrink-0 transition-all duration-200",
                            isActive ? "opacity-100 text-primary" : "opacity-0 group-hover:opacity-50"
                          )}
                        />
                      </button>
                    )
                  })}
                </nav>
              </div>
            </aside>

            {/* Right Content */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="space-y-8"
                >
                  {/* Service Header Card */}
                  <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Icon */}
                      <div
                        className={cn(
                          "w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg",
                          service.iconBg
                        )}
                      >
                        <service.icon className={cn("w-8 h-8", service.iconColor)} />
                      </div>

                      {/* Title & Badge */}
                      <div className="flex-1">
                        <div
                          className={cn(
                            "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3",
                            service.iconBg,
                            service.iconColor
                          )}
                        >
                          <service.icon className="w-3 h-3" />
                          {service.badge}
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight mb-4">
                          {service.title}
                        </h2>
                        <div className="space-y-3">
                          <p className="text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                          <p className="text-muted-foreground leading-relaxed">
                            {service.description2}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="mt-8 pt-8 border-t border-border grid grid-cols-3 gap-4">
                      {[
                        { label: "Uptime SLA", value: "99.9%" },
                        { label: "Expert Engineers", value: "50+" },
                        { label: "Countries Served", value: "12+" },
                      ].map((stat) => (
                        <div key={stat.label} className="text-center">
                          <div
                            className={cn(
                              "text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                              service.accent
                            )}
                          >
                            {stat.value}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Offerings Card */}
                  <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-8 md:p-10">
                    <h3 className="text-xl md:text-2xl font-bold mb-6">
                      {service.offerings.title}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.offerings.items.map((item, i) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05, duration: 0.3 }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/60 transition-colors duration-200"
                        >
                          <CheckCircle2
                            className={cn("w-5 h-5 shrink-0", service.iconColor)}
                          />
                          <span className="text-sm font-medium text-foreground">{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-8">
                      <a
                        href="/contact"
                        className={cn(
                          "inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r transition-all hover:-translate-y-0.5 hover:shadow-xl",
                          service.accent
                        )}
                      >
                        Get a Free Consultation
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
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
                Ready to transform your IT infrastructure?
              </h3>
              <p className="text-muted-foreground">
                Speak with our experts and get a tailored solution for your business needs.
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
