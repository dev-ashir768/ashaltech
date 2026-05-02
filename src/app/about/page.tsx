import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AboutContent } from "@/components/sections/about-content"
import { ClientsSection } from "@/components/sections/clients"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - ASHAL TECH",
  description:
    "Learn about ASHAL TECH — a leading IT security service provider committed to delivering cutting-edge cybersecurity solutions since 2012.",
}

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-24">
        <AboutContent />
        <ClientsSection />
      </main>
      <SiteFooter />
    </div>
  )
}
