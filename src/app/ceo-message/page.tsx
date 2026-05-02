import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CeoContent } from "@/components/sections/ceo-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Message from CEO - ASHAL TECH",
  description:
    "A message from Abbas J., Founder & CEO of ASHAL TECH — sharing his vision for cybersecurity and a safer digital future.",
}

export default function CeoMessagePage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-24">
        <CeoContent />
      </main>
      <SiteFooter />
    </div>
  )
}
