"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Facebook,
  ShieldCheck,
  Clock,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ReCAPTCHA from "react-google-recaptcha";

const offices = [
  {
    country: "United Arab Emirates",
    flag: "🇦🇪",
    address: "Dubai Silicon Oasis, DDP, Building A2",
    city: "Dubai, UAE",
    phone: "+971 50 123 4567",
    email: "info.uae@ashaltech.com",
    color: "from-cyan-500/20 to-sky-500/10",
    border: "border-cyan-500/20",
    icon: "text-cyan-400",
  },
  {
    country: "Pakistan",
    flag: "🇵🇰",
    address: "Johar Town, Lahore",
    city: "Lahore, Pakistan",
    phone: "+92 300 123 4567",
    email: "info.pk@ashaltech.com",
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/20",
    icon: "text-emerald-400",
  },
];

const highlights = [
  {
    icon: Clock,
    title: "Quick Response",
    desc: "We reply within 24 hours",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Experts",
    desc: "200+ elite teams served",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: MessageSquare,
    title: "Free Consultation",
    desc: "No obligation, just help",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

export function ContactContent() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [recaptchaToken, setRecaptchaToken] = React.useState<string | null>(
    null,
  );
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recaptchaToken) return;
    setSubmitted(true);
  };

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
              <Mail className="w-4 h-4" />
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Let&apos;s Build Something{" "}
              <span className="text-gradient">Secure Together</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind or need a consultation? Our security
              experts are ready to help you protect and future-proof your
              business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="pb-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid sm:grid-cols-3 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card/50"
              >
                <div className={cn("p-3 rounded-xl shrink-0", h.bg)}>
                  <h.icon className={cn("w-5 h-5", h.color)} />
                </div>
                <div>
                  <div className="font-semibold text-sm">{h.title}</div>
                  <div className="text-xs text-muted-foreground">{h.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main: Form + Info */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 md:p-10 shadow-xl">
                <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground text-sm mb-8">
                  Fill in the form below and we&apos;ll get back to you as soon
                  as possible.
                </p>

                {submitted ? (
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
                      Thank you for reaching out. Our team will get back to you
                      within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setRecaptchaToken(null);
                        recaptchaRef.current?.reset();
                        setForm({
                          name: "",
                          email: "",
                          phone: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="text-primary text-sm underline underline-offset-4 hover:text-primary/80"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium" htmlFor="name">
                          Full Name <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full h-11 px-4 rounded-xl bg-input border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium" htmlFor="email">
                          Email Address{" "}
                          <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full h-11 px-4 rounded-xl bg-input border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium" htmlFor="phone">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full h-11 px-4 rounded-xl bg-input border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label
                          className="text-sm font-medium"
                          htmlFor="subject"
                        >
                          Subject <span className="text-destructive">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full h-11 px-4 rounded-xl bg-input border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-all"
                        >
                          <option value="" disabled>
                            Select a topic
                          </option>
                          <option value="security">
                            IT Security Solutions
                          </option>
                          <option value="infrastructure">
                            IT Infrastructure
                          </option>
                          <option value="healthcare">
                            Healthcare Solutions
                          </option>
                          <option value="training">
                            Trainings & Certifications
                          </option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium" htmlFor="message">
                        Message <span className="text-destructive">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or question..."
                        className="w-full px-4 py-3 rounded-xl bg-input border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-all resize-none"
                      />
                    </div>

                    {/* Google reCAPTCHA */}
                    <div className="flex justify-center">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={
                          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ??
                          "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        }
                        theme="dark"
                        onChange={(token) => setRecaptchaToken(token)}
                        onExpired={() => setRecaptchaToken(null)}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={!recaptchaToken}
                      className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-primary-gradient text-[#070B2B] font-bold text-sm hover:-translate-y-0.5 transition-all glow-cyan shadow-[0_0_20px_rgba(83,200,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Info sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="lg:col-span-2 space-y-6"
            >
              {offices.map((office) => (
                <div
                  key={office.country}
                  className={cn(
                    "rounded-2xl border p-6 bg-gradient-to-br",
                    office.border,
                    office.color,
                  )}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-2xl">{office.flag}</span>
                    <div>
                      <div className="font-bold text-sm">{office.country}</div>
                      <div className="text-xs text-muted-foreground">
                        {office.city}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin
                        className={cn("w-4 h-4 mt-0.5 shrink-0", office.icon)}
                      />
                      <span className="text-sm text-muted-foreground">
                        {office.address}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className={cn("w-4 h-4 shrink-0", office.icon)} />
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className={cn("w-4 h-4 shrink-0", office.icon)} />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {/* Social links */}
              <div className="rounded-2xl border border-border bg-card/50 p-6">
                <h3 className="font-semibold text-sm mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, label: "LinkedIn", href: "#" },
                    { icon: Twitter, label: "Twitter", href: "#" },
                    { icon: Facebook, label: "Facebook", href: "#" },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick note */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 flex gap-4">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  All communications are encrypted and confidential. Your data
                  is never shared with third parties.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
