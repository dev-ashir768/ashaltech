import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactContent } from "@/components/sections/contact-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - ASHAL TECH",
  description: "Get in touch with ASHAL TECH for cybersecurity solutions and consultations.",
}

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-24">
        <ContactContent />
      </main>
      <SiteFooter />
    </div>
  )
}
