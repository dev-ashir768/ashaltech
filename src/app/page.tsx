import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { CoreValuesSection } from "@/components/sections/values"
import { ServicesSection } from "@/components/sections/services"
import { OpenSocSection } from "@/components/sections/opensoc"
import { ClientsSection } from "@/components/sections/clients"
import { CtaSection } from "@/components/sections/cta"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <CoreValuesSection />
        <ServicesSection />
        <OpenSocSection />
        <ClientsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
