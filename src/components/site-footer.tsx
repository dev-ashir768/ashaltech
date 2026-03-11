import * as React from "react"
import Link from "next/link"
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
  ShieldAlert
} from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-background border-t border-border overflow-hidden relative">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1/2 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
                <ShieldAlert className="h-6 w-6 text-primary" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight hidden sm:inline-block">
                ASHAL TECH
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Globally-famed experts in information security and technology. We protect your business with enterprise-grade solutions and proactive defense strategies.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors text-muted-foreground">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors text-muted-foreground">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors text-muted-foreground">
                <Facebook className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-lg">Services</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">ISO Consultancy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">VA & Pen Test</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Open Source Consultancy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">GRC Consultancy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Trainings & Certifications</Link></li>
            </ul>
          </div>

          {/* UAE Contact Info */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-lg">UAE Office</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Dubai Silicon Oasis, DDP, Building A2, Dubai, United Arab Emirates
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">+971 50 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">info.uae@ashaltech.com</span>
              </li>
            </ul>
          </div>

          {/* Pakistan Contact Info */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-lg">Pakistan Office</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Johar Town, Lahore, Punjab, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">+92 300 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">info.pk@ashaltech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ASHAL TECH. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
