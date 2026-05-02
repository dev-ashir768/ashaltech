import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TrainingsContent } from "@/components/sections/trainings-content"
import { ClientsSection } from "@/components/sections/clients"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trainings - ASHAL TECH",
  description:
    "ASHAL TECH offers expert-led cybersecurity training programs including Security Awareness, Anti-Phishing, Compliance, Data Privacy, and Certificate Training.",
}

export default function TrainingsPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-24">
        <TrainingsContent />
        <ClientsSection />
      </main>
      <SiteFooter />
    </div>
  )
}
