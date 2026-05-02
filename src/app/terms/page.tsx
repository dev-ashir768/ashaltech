import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LegalContent } from "@/components/sections/legal-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions - ASHAL TECH",
  description: "Read the terms and conditions governing your use of ASHAL TECH's website and services.",
}

const sections = [
  {
    title: "Acceptance of Terms",
    body: (
      <>
        <p>
          By accessing or using the ASHAL TECH website (ashaltech.com) or any of our
          services, you agree to be bound by these Terms and Conditions and our Privacy
          Policy. If you do not agree to these terms, please do not use our website or
          services.
        </p>
        <p>
          We reserve the right to modify these terms at any time. Continued use of the
          site after changes are posted constitutes your acceptance of the revised terms.
        </p>
      </>
    ),
  },
  {
    title: "Use of Our Website",
    body: (
      <>
        <p>You agree to use our website only for lawful purposes and in a manner that does not:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Infringe the rights of any other person or entity</li>
          <li>Transmit any unsolicited or unauthorized advertising material</li>
          <li>Attempt to gain unauthorized access to any part of our systems</li>
          <li>Introduce malware, viruses, or other malicious code</li>
          <li>Scrape, harvest, or collect data from our site without prior written consent</li>
          <li>Impersonate ASHAL TECH or any of its employees or representatives</li>
        </ul>
      </>
    ),
  },
  {
    title: "Our Services",
    body: (
      <p>
        ASHAL TECH provides IT security consulting, penetration testing, compliance audits,
        managed services, cybersecurity training, and related technology services. All services
        are subject to separate service agreements and statements of work. These Terms govern
        your general use of our website and do not replace any formal service contract.
      </p>
    ),
  },
  {
    title: "Intellectual Property",
    body: (
      <>
        <p>
          All content on this website — including text, graphics, logos, icons, images,
          audio clips, and software — is the property of ASHAL TECH or its content
          suppliers and is protected by applicable intellectual property laws.
        </p>
        <p>
          You may not reproduce, distribute, modify, create derivative works from, publicly
          display, or exploit any content on this site without our prior written permission.
        </p>
      </>
    ),
  },
  {
    title: "Disclaimer of Warranties",
    body: (
      <>
        <p>
          Our website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis
          without any warranties of any kind, either express or implied, including but not
          limited to implied warranties of merchantability, fitness for a particular purpose,
          or non-infringement.
        </p>
        <p>
          ASHAL TECH does not warrant that the website will be uninterrupted, error-free,
          or free of viruses or other harmful components.
        </p>
      </>
    ),
  },
  {
    title: "Limitation of Liability",
    body: (
      <p>
        To the fullest extent permitted by applicable law, ASHAL TECH shall not be liable
        for any indirect, incidental, special, consequential, or punitive damages — including
        loss of profits, data, goodwill, or other intangible losses — arising from your use
        of (or inability to use) the website or any services described herein, even if we have
        been advised of the possibility of such damages.
      </p>
    ),
  },
  {
    title: "Third-Party Links",
    body: (
      <p>
        Our website may contain links to third-party websites. These links are provided for
        your convenience only. ASHAL TECH has no control over the content of those sites and
        accepts no responsibility for them or for any loss or damage that may arise from your
        use of them. Accessing any linked website is at your own risk.
      </p>
    ),
  },
  {
    title: "Privacy Policy",
    body: (
      <p>
        Your use of our website is also governed by our Privacy Policy, which is incorporated
        into these Terms by reference. Please review our Privacy Policy to understand our
        practices regarding the collection and use of your information.
      </p>
    ),
  },
  {
    title: "Governing Law & Jurisdiction",
    body: (
      <p>
        These Terms and Conditions shall be governed by and construed in accordance with the
        laws of the United Arab Emirates. Any dispute arising from or relating to these terms
        shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE, without
        prejudice to our right to seek relief in any other jurisdiction.
      </p>
    ),
  },
  {
    title: "Contact Us",
    body: (
      <>
        <p>If you have any questions about these Terms and Conditions, please contact us:</p>
        <ul className="list-none space-y-1 mt-2">
          <li>📧 <strong className="text-foreground">info@ashaltech.com</strong></li>
          <li>📍 Dubai Silicon Oasis, DDP, Building A2, Dubai, UAE</li>
          <li>📍 Johar Town, Lahore, Punjab, Pakistan</li>
        </ul>
      </>
    ),
  },
]

export default function TermsPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-24">
        <LegalContent
          badge="📋 Legal"
          title="Terms & Conditions"
          subtitle="Please read these terms carefully before using our website or engaging our services."
          lastUpdated="January 1, 2025"
          sections={sections}
        />
      </main>
      <SiteFooter />
    </div>
  )
}
