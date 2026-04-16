"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  ArrowRight,
  Clock,
} from "lucide-react"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"

const offices = [
  {
    country: "UAE Office",
    address: "Dubai Silicon Oasis, DDP, Building A2, Dubai, United Arab Emirates",
    phone: "+971 50 123 4567",
    email: "info.uae@ashaltech.com",
    hours: "Sun – Thu: 9:00 AM – 6:00 PM GST",
  },
  {
    country: "Pakistan Office",
    address: "Johar Town, Lahore, Punjab, Pakistan",
    phone: "+92 300 123 4567",
    email: "info.pk@ashaltech.com",
    hours: "Mon – Fri: 9:00 AM – 6:00 PM PKT",
  },
]

const services = [
  "ISO Consultancy",
  "VA & Penetration Testing",
  "GRC Consultancy",
  "Open Source Consultancy",
  "Trainings & Certifications",
  "Other / General Inquiry",
]

export function ContactSection() {
  const [submitted, setSubmitted] = React.useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Section id="contact" className="bg-secondary/5">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary w-fit mx-auto mb-6">
          <MessageSquare className="w-4 h-4" />
          <span className="text-sm font-medium">Get In Touch</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-4">
          Let&apos;s Secure Your{" "}
          <span className="text-gradient">Digital Future</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Have a security concern or want to explore our services? Our team of
          experts is ready to assist you around the clock.
        </p>
      </motion.div>

      {/* Main grid */}
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        {/* Left — Office Info */}
        <div className="lg:col-span-2 space-y-6">
          {offices.map((office, idx) => (
            <motion.div
              key={office.country}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative overflow-hidden rounded-3xl bg-card border border-border p-6 md:p-8 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(76,201,255,0.08)] transition-all duration-300"
            >
              {/* subtle glow */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-primary/10 rounded-full blur-[60px]" />
              <div className="relative z-10 space-y-4">
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  {office.country}
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">
                      {office.address}
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <a
                      href={`tel:${office.phone.replace(/\s/g, "")}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {office.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {office.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-muted-foreground">{office.hours}</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Response time badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex items-center gap-4 rounded-3xl bg-primary/10 border border-primary/20 px-6 py-4"
          >
            <div className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)] shrink-0" />
            <p className="text-sm text-foreground font-medium">
              Average response time:{" "}
              <span className="text-primary font-semibold">under 2 hours</span>
            </p>
          </motion.div>
        </div>

        {/* Right — Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3 relative overflow-hidden rounded-3xl bg-card border border-border p-8 md:p-10 shadow-lg"
        >
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />

          {submitted ? (
            <div className="relative z-10 flex flex-col items-center justify-center text-center py-16 space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30">
                <Send className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-heading">
                Message Sent!
              </h3>
              <p className="text-muted-foreground max-w-sm">
                Thank you for reaching out. Our team will get back to you within
                2 business hours.
              </p>
              <Button
                variant="secondary-glow"
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="relative z-10 space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold font-heading mb-1">
                  Send Us a Message
                </h3>
                <p className="text-sm text-muted-foreground">
                  Fill in the form and we&apos;ll be in touch shortly.
                </p>
              </div>

              {/* Name + Company */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="name">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="company">
                    Company / Organisation
                  </label>
                  <input
                    id="company"
                    name="company"
                    placeholder="Acme Corp"
                    className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors"
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="email">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 234 567 8900"
                    className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors"
                  />
                </div>
              </div>

              {/* Service */}
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="service">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select a service…</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="message">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your security needs or any questions you have…"
                  className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary-glow"
                size="lg"
                className="w-full group"
              >
                Send Message
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  )
}
