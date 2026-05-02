import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { CoreValuesSection } from "@/components/sections/values"
import { ServicesSection } from "@/components/sections/services"
import { OpenSocSection } from "@/components/sections/opensoc"
import { TeamSection } from "@/components/sections/team"
import { ClientsSection } from "@/components/sections/clients"
import { CtaSection } from "@/components/sections/cta"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Alternating black / base-dark sections */}
        <HeroSection />          {/* bg-background  (#070B2B) */}
        <AboutSection />         {/* bg-[#0b0e14]   (black)   */}
        <CoreValuesSection />    {/* bg-background  (base)    */}
        <ServicesSection />      {/* bg-[#0b0e14]   (black)   */}
        <OpenSocSection />       {/* bg-background  (base)    */}
        <TeamSection />          {/* bg-[#0b0e14]   (black)   */}
        <ClientsSection />       {/* bg-background  (base)    */}
        <CtaSection />           {/* bg-[#0b0e14]   (black)   */}
      </main>
      <SiteFooter />
    </div>
  )
}
