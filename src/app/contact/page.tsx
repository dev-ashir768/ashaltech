import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactSection } from "@/components/sections/contact"

export const metadata = {
  title: "Contact Us | ASHAL TECH",
  description:
    "Get in touch with ASHAL TECH. Our cybersecurity experts are ready to help protect your business.",
}

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-24">
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
