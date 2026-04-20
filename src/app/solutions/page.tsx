import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SolutionsContent } from "@/components/sections/solutions-content"
import { ClientsSection } from "@/components/sections/clients"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Solutions - ASHAL TECH",
  description: "Explore our IT Security, IT Infrastructure, and Healthcare Solutions.",
}

export default function SolutionsPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-24">
        <SolutionsContent />
        <ClientsSection />
      </main>
      <SiteFooter />
    </div>
  )
}
