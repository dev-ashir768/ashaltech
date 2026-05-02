"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  Shield,
  Target,
  Eye,
  CheckCircle2,
  TrendingUp,
  Users,
  Award,
  ChevronRight,
  Send,
  ShieldCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import ReCAPTCHA from "react-google-recaptcha"

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "500+", label: "Clients Served" },
  { value: "50+", label: "Expert Engineers" },
  { value: "12+", label: "Countries" },
]

const helpPoints = [
  "To enhance the real-time visibility and performance",
  "To reduce the chances of litigation to a remarkable extent to make all the activities simple and free from problems",
  "To synchronize the relationships between the participants of an organization to boost the working",
  "To help the firms in the quick and effective adoption of ITIL for a better management framework",
  "To improve customer satisfaction and retention to increase contract renewals",
]

const values = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "We operate with complete transparency and honesty in every engagement.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    desc: "Constantly evolving our approach to stay ahead of emerging cyber threats.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Users,
    title: "Partnership",
    desc: "We work as an extension of your team, not just an outside vendor.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Delivering best-in-class security solutions that exceed expectations.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
]

function ConsultForm() {
  const [form, setForm] = React.useState({
    name: "", email: "", phone: "", subject: "", message: "",
  })
  const [submitted, setSubmitted] = React.useState(false)
  const [recaptchaToken, setRecaptchaToken] = React.useState<string | null>(null)
  const recaptchaRef = React.useRef<ReCAPTCHA>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!recaptchaToken) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 space-y-4"
      >
        <div className="mx-auto w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center">
          <ShieldCheck className="w-8 h-8 text-cyan-400" />
        </div>
        <h3 className="text-xl font-bold">Message Received!</h3>
        <p className="text-muted-foreground text-sm max-w-sm mx-auto">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false)
            setRecaptchaToken(null)
            recaptchaRef.current?.reset()
            setForm({ name: "", email: "", phone: "", subject: "", message: "" })
          }}
          className="text-primary text-sm underline underline-offset-4 hover:text-primary/80"
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          name="name" type="text" required value={form.name} onChange={handleChange}
          placeholder="Your Name"
          className="w-full h-11 px-4 rounded-xl bg-input border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-all"
        />
        <input
          name="email" type="email" required value={form.email} onChange={handleChange}
          placeholder="Your Email"
          className="w-full h-11 px-4 rounded-xl bg-input border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-all"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          name="phone" type="tel" value={form.phone} onChange={handleChange}
          placeholder="Your Phone"
          className="w-full h-11 px-4 rounded-xl bg-input border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-all"
        />
        <input
          name="subject" type="text" required value={form.subject} onChange={handleChange}
          placeholder="Your Subject"
          className="w-full h-11 px-4 rounded-xl bg-input border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-all"
        />
      </div>
      <textarea
        name="message" required rows={5} value={form.message} onChange={handleChange}
        placeholder="How can we Help?"
        className="w-full px-4 py-3 rounded-xl bg-input border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-all resize-none"
      />
      <div className="flex justify-start">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
          theme="dark"
          onChange={(token) => setRecaptchaToken(token)}
          onExpired={() => setRecaptchaToken(null)}
        />
      </div>
      <button
        type="submit"
        disabled={!recaptchaToken}
        className="flex items-center gap-2 px-8 h-12 rounded-xl bg-primary-gradient text-[#070B2B] font-bold text-sm hover:-translate-y-0.5 transition-all glow-cyan shadow-[0_0_20px_rgba(83,200,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        <Send className="w-4 h-4" />
        Send Message
      </button>
    </form>
  )
}

export function AboutContent() {
  return (
    <>
      {/* Hero / Page Banner */}
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
              <span className="text-primary">About</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">About</h1>

            {/* Tagline banner */}
            <div className="relative max-w-2xl mx-auto rounded-2xl border border-primary/30 bg-primary/5 backdrop-blur-sm px-8 py-6">
              <div className="absolute -top-px left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <p className="text-xl md:text-2xl font-bold text-gradient">
                IT Security Specialists With A Dynamic Approach
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                Your Trusted Partner In Every Information Security Problem
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Description */}
      <section className="pb-16 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              ASHAL TECHNOLOGIES
            </motion.h2>
            {[
              "Being a well-established and well-reputed service provider in the field of IT security, ASHAL TECH is determined to provide all businesses with dependable security solutions at competitive rates. The foundation of this firm was led in 2012. Our dedicated teams of highly qualified and certified individuals put their best knowledge and expertise to offer top-notch security solutions that fit every client's unique needs and preferences.",
              "At ASHAL TECH, we implement an advanced yet simplified approach for the management of security infrastructure and deliver high-end security services solutions to eliminate the need for a variety of stand-alone and bolt-on security devices.",
              "Our next-generation security systems and solutions will help you run your business in a more protected and secure way. Our state-of-the-art security technologies are matchless in the industry in terms of intelligence, performance, and deployment, effectively making you able to detect, analyze, fix, and prevent all cyber and internal security threats.",
              "This is what makes ASHAL TECH an industry's leading IT security service provider who can serve you the best beyond your expectations.",
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="text-muted-foreground leading-relaxed"
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 max-w-3xl mx-auto">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card/60 p-6 text-center"
              >
                <div className="text-3xl font-bold text-gradient">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#0b0e14] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-blue-900/10 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-0 max-w-5xl mx-auto">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-cyan-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">OUR MISSION</h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                We, being a reliable IT security service provider, are committed to providing our
                clients with exceptionally good and effective security solutions which would
                certainly help them in achieving the long-term goals in their business. Hence,
                providing unique and satisfactory services to the customers is our goal.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 md:p-14"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">OUR VISION</h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                We aim to become a trustworthy, competent, and dynamic security solutions
                provider through our comprehensive portfolio of cutting-edge security products,
                services, and solutions for our valued clients of various types of industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Do We Help */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(76,201,255,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                How Do We Help Our Customers?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We help the business firms and industries in modifying all their business
                activities and processes in line with their set of goals, which are as follows:
              </p>
              <ul className="space-y-3">
                {helpPoints.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-gradient text-[#070B2B] font-bold text-sm hover:-translate-y-0.5 transition-all glow-cyan shadow-[0_0_20px_rgba(83,200,255,0.4)]"
              >
                Get Started
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/opensoc_bg.png"
                  alt="SOC Service Catalogue"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#0b0e14] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Core Values</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", v.bg)}>
                    <Icon className={cn("w-6 h-6", v.color)} />
                  </div>
                  <h3 className="font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Consult With Us */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(76,201,255,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Consult With Us</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              ASHAL TECH is the fast-growing All-in-one service provider to meet all the security
              needs of your business. We provide top-notch security services, solutions, and
              training through our best-in-class delivery processes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-8 md:p-10 shadow-xl"
          >
            <ConsultForm />
          </motion.div>
        </div>
      </section>
    </>
  )
}
