/**
 * Bierman Autism Centers — Proof Layer
 * Privacy Policy (Proof-of-Concept Draft)
 *
 * STAGING NOTICE: This is a proof-of-concept draft for the Bierman Autism Centers
 * proof-layer development environment. It is NOT a final legal document.
 * This page should be reviewed by Bierman Autism Centers and qualified legal counsel
 * before use in any production environment.
 *
 * Design: Navy (#1a2b47) header, teal (#0d9488) accents, white body — matches proof-layer system.
 */

import { Link } from "wouter";

const SHARED_LOGO = "/manus-storage/bierman-20th-logo_5e2e0b3c.webp";
const EFFECTIVE_DATE = "May 2026";
const CONTACT_EMAIL = "marketing@biermanautism.com";
const SITE_URL = "https://bierman-proof-layer.manus.space";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Dev Banner */}
      <div className="bg-amber-50 border-b border-amber-200 text-amber-800 text-xs text-center py-2 px-4">
        <strong>Proof-Layer Draft:</strong> This Privacy Policy is a proof-of-concept document for the Bierman development environment. It is not a final legal document and must be reviewed by qualified legal counsel before production use.
      </div>

      {/* Header */}
      <header className="bg-[#1a2b47] text-white py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/locations/nj/ramsey/">
            <img src={SHARED_LOGO} alt="Bierman Autism Centers" className="h-10 w-auto cursor-pointer" />
          </Link>
          <Link href="/locations/nj/ramsey/" className="text-white/70 hover:text-white text-sm transition-colors">
            ← Back to Location Pages
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="inline-block bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Legal
          </div>
          <h1 className="text-3xl font-bold text-[#1a2b47] mb-2">Privacy Policy</h1>
          <p className="text-slate-500 text-sm">Effective: {EFFECTIVE_DATE} · Proof-of-Concept Draft · Not a final legal document</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">

          {/* Staging Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-amber-800 text-sm font-semibold mb-1">Proof-of-Concept Notice</p>
            <p className="text-amber-700 text-sm">
              This Privacy Policy applies to the Bierman Autism Centers proof-layer development environment located at <span className="font-mono text-xs">{SITE_URL}</span>. This environment is used for SEO architecture testing, schema validation, and location page development. It is <strong>not</strong> the production Bierman Autism Centers website. This document is a draft and must be reviewed by Bierman Autism Centers and qualified legal counsel before any production deployment.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-[#1a2b47] mb-3">1. About This Environment</h2>
            <p>
              This proof-layer site is a controlled development environment operated by or on behalf of Bierman Autism Centers for the purpose of testing location page architecture, structured data (JSON-LD schema), rich results eligibility, and local SEO infrastructure. It is not a patient-facing or consumer-facing production website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a2b47] mb-3">2. No Patient Data Collected</h2>
            <p>
              This proof-layer environment does <strong>not</strong> collect, store, transmit, or process any protected health information (PHI), personally identifiable information (PII), or patient data of any kind. No intake forms, registration forms, or appointment request forms are active in this environment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a2b47] mb-3">3. No Cookies or Tracking</h2>
            <p>
              This proof-layer environment does <strong>not</strong> use cookies, analytics pixels, session tracking, behavioral tracking, advertising retargeting, or any third-party tracking tools. Specifically:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-3 text-slate-600">
              <li>No Google Analytics (UA or GA4)</li>
              <li>No Google Tag Manager</li>
              <li>No Meta Pixel or Facebook tracking</li>
              <li>No Google Ads conversion tracking</li>
              <li>No Bing UET or Microsoft Clarity</li>
              <li>No CallRail or call tracking scripts</li>
              <li>No Birdeye, Podium, or reputation management scripts</li>
              <li>No session replay or heatmap tools</li>
            </ul>
            <p className="mt-3">
              The production Bierman Autism Centers website (<a href="https://www.biermanautism.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline">biermanautism.com</a>) may use analytics, cookies, and tracking tools governed by its own Privacy Policy. This proof-layer environment is separate from and does not affect the production website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a2b47] mb-3">4. Informational Content Only</h2>
            <p>
              All content on this proof-layer site is informational and educational in nature. It describes the services offered by Bierman Autism Centers at various locations. Nothing on this site constitutes medical advice, diagnosis, treatment recommendations, or the establishment of a provider-patient relationship. Families seeking clinical guidance should contact Bierman Autism Centers directly or consult a qualified healthcare professional.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a2b47] mb-3">5. External Links</h2>
            <p>
              This site may contain links to third-party websites, including the production Bierman Autism Centers website, Google Maps, YouTube, and other resources. These external sites are governed by their own privacy policies. We are not responsible for the privacy practices of any third-party site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a2b47] mb-3">6. Future Production Environment</h2>
            <p>
              When this architecture is deployed to a production environment, the applicable privacy policy will be updated to reflect:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-3 text-slate-600">
              <li>Active analytics tools and cookie usage</li>
              <li>Any forms collecting personal information</li>
              <li>Call tracking and lead management tools</li>
              <li>HIPAA-sensitive data handling practices</li>
              <li>User rights under applicable state privacy laws (CCPA/CPRA, etc.)</li>
              <li>Data retention and deletion policies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a2b47] mb-3">7. Contact</h2>
            <p>
              Questions about this proof-layer environment or its privacy posture may be directed to:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-teal-600 hover:text-teal-700 underline">{CONTACT_EMAIL}</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a2b47] mb-3">8. Changes to This Policy</h2>
            <p>
              This draft policy may be updated as the proof-layer architecture evolves. The effective date at the top of this page reflects the most recent revision. This document has no legal force until reviewed and approved by Bierman Autism Centers and qualified legal counsel.
            </p>
          </section>

        </div>

        {/* Footer nav */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap gap-4 text-sm text-slate-500">
          <Link href="/terms-of-use/" className="hover:text-teal-600 transition-colors">Terms of Use</Link>
          <span>·</span>
          <Link href="/accessibility/" className="hover:text-teal-600 transition-colors">Accessibility</Link>
          <span>·</span>
          <Link href="/locations/nj/ramsey/" className="hover:text-teal-600 transition-colors">Back to Location Pages</Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a2b47] text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Bierman Autism Centers. All rights reserved. · Proof-layer environment: no patient data collected, no cookies or tracking active.
          </p>
        </div>
      </footer>
    </div>
  );
}
