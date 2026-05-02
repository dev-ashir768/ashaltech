import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LegalContent } from "@/components/sections/legal-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - ASHAL TECH",
  description: "Learn how ASHAL TECH collects, uses, and protects your personal information.",
}

const sections = [
  {
    title: "Introduction",
    body: (
      <>
        <p>
          ASHAL TECH (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, disclose, and safeguard your
          information when you visit our website ashaltech.com or use our services.
        </p>
        <p>
          Please read this policy carefully. If you disagree with its terms, please
          discontinue use of our site. We reserve the right to make changes to this policy
          at any time and for any reason.
        </p>
      </>
    ),
  },
  {
    title: "Information We Collect",
    body: (
      <>
        <p>We may collect information about you in a variety of ways:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong className="text-foreground">Personal Data:</strong> Name, email address, phone number, company name, and job title that you voluntarily provide when contacting us or filling out forms.</li>
          <li><strong className="text-foreground">Usage Data:</strong> Information automatically collected when you visit our site — IP address, browser type, operating system, referring URLs, and pages visited.</li>
          <li><strong className="text-foreground">Cookies & Tracking:</strong> We use cookies and similar tracking technologies to monitor activity on our site and hold certain information to improve your experience.</li>
        </ul>
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Respond to your inquiries and provide requested services</li>
          <li>Send administrative information such as updates and security alerts</li>
          <li>Send marketing communications (you may opt out at any time)</li>
          <li>Improve our website and service offerings</li>
          <li>Monitor and analyze usage and trends to improve your experience</li>
          <li>Comply with legal obligations and enforce our agreements</li>
        </ul>
      </>
    ),
  },
  {
    title: "Data Protection & Security",
    body: (
      <>
        <p>
          We implement administrative, technical, and physical security measures to protect
          your personal information. While we take reasonable steps to secure your data,
          no electronic transmission over the Internet or information storage technology
          can be guaranteed to be 100% secure.
        </p>
        <p>
          All data is handled by trained personnel and access is restricted on a need-to-know
          basis. We do not sell, trade, or otherwise transfer your personally identifiable
          information to outside parties without your consent, except as described in this policy.
        </p>
      </>
    ),
  },
  {
    title: "Data Retention",
    body: (
      <p>
        We retain your personal data only for as long as necessary to fulfill the purposes
        outlined in this Privacy Policy, unless a longer retention period is required or
        permitted by law. When your data is no longer needed, we will securely delete or
        anonymize it.
      </p>
    ),
  },
  {
    title: "Third-Party Services",
    body: (
      <>
        <p>
          Our website may contain links to third-party websites. We are not responsible for
          the privacy practices or the content of those sites. We encourage you to review
          the privacy policies of any third-party sites you visit.
        </p>
        <p>
          We may use third-party service providers (such as Google reCAPTCHA, Google Maps,
          and analytics platforms) that collect, monitor, and analyze data to improve our
          service. These providers have their own privacy policies.
        </p>
      </>
    ),
  },
  {
    title: "Cookies Policy",
    body: (
      <>
        <p>
          We use cookies to enhance your browsing experience. Cookies are small files stored
          on your device that help us remember your preferences and understand how you use
          our site.
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong className="text-foreground">Essential Cookies:</strong> Required for the site to function properly.</li>
          <li><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with our site.</li>
          <li><strong className="text-foreground">Session Storage:</strong> Used for popup dismiss state (cleared when browser is closed).</li>
        </ul>
        <p className="mt-2">You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
      </>
    ),
  },
  {
    title: "Your Rights",
    body: (
      <>
        <p>Depending on your location, you may have the following rights regarding your data:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>The right to access personal data we hold about you</li>
          <li>The right to request correction of inaccurate data</li>
          <li>The right to request deletion of your personal data</li>
          <li>The right to object to or restrict processing of your data</li>
          <li>The right to data portability</li>
          <li>The right to withdraw consent at any time</li>
        </ul>
        <p className="mt-2">To exercise any of these rights, please contact us at <strong className="text-foreground">info@ashaltech.com</strong>.</p>
      </>
    ),
  },
  {
    title: "Contact Us",
    body: (
      <>
        <p>
          If you have questions or concerns about this Privacy Policy or our data practices,
          please contact us:
        </p>
        <ul className="list-none space-y-1 mt-2">
          <li>📧 <strong className="text-foreground">info@ashaltech.com</strong></li>
          <li>📍 Dubai Silicon Oasis, DDP, Building A2, Dubai, UAE</li>
          <li>📍 Johar Town, Lahore, Punjab, Pakistan</li>
        </ul>
      </>
    ),
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-24">
        <LegalContent
          badge="🔒 Legal"
          title="Privacy Policy"
          subtitle="Your privacy is important to us. This policy explains how we handle your data with care and transparency."
          lastUpdated="January 1, 2025"
          sections={sections}
        />
      </main>
      <SiteFooter />
    </div>
  )
}
