import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicesContent } from "@/components/sections/services-content"
import { ClientsSection } from "@/components/sections/clients"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services - ASHAL TECH",
  description:
    "Explore ASHAL TECH's full range of IT and cybersecurity services including Networking, Managed Services, Compliance, VA & PEN Testing, GRC, and more.",
}

export default function ServicesPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-24">
        <ServicesContent />
        <ClientsSection />
      </main>
      <SiteFooter />
    </div>
  )
}
