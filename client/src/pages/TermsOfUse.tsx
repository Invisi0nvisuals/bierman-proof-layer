/**
 * Bierman Autism Centers — Proof Layer
 * Terms of Use (Proof-of-Concept Draft)
 *
 * STAGING NOTICE: This is a proof-of-concept draft for the Bierman Autism Centers
 * proof-layer development environment. It is NOT a final legal document.
 * This page should be reviewed by Bierman Autism Centers and qualified legal counsel
 * before use in any production environment.
 */

import { Link } from "wouter";

const SHARED_LOGO = "/manus-storage/bierman-20th-logo_5e2e0b3c.webp";
const EFFECTIVE_DATE = "May 2026";
const CONTACT_EMAIL = "marketing@biermanautism.com";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Dev Banner */}
      <div className="bg-amber-50 border-b border-amber-200 text-amber-800 text-xs text-center py-2 px-4">
        <strong>Proof-Layer Draft:</strong> These Terms of Use are a proof-of-concept document for the Bierman development environment. They are not final legal documents and must be reviewed by qualified legal counsel before production use.
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
          <h1 className="text-3xl font-bold text-[#1a2b47] mb-2">Terms of Use</h1>
          <p className="text-slate-500 text-sm">Effective: {EFFECTIVE_DATE} · Proof-of-Concept Draft · Not a final legal document</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">

          {/* Staging Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-amber-800 text-sm font-semibold mb-1">Proof-of-Concept Notice</p>
            <p className="text-amber-700 text-sm">
              These Terms of Use apply to the Bierman Autism Centers proof-layer development environment. This environment is used for SEO architecture testing and location page development. These terms are a draft and must be reviewed by Bierman Autism Centers and qualified legal counsel before any production deployment.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-[#1a2b47] mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing this proof-layer development environment, you acknowledge that you are accessing a controlled staging environment operated by or on behalf of Bierman Autism Centers for internal development and review purposes. These terms govern your use of this environment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a2b47] mb-3">2. Informational Content — Not Medical Advice</h2>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 mb-4">
              <p className="text-teal-800 text-sm font-semibold mb-1">Healthcare Content Disclaimer</p>
              <p className="text-teal-700 text-sm">
                All content on this site is provided for <strong>informational and educational purposes only</strong>. Nothing on this site constitutes or should be construed as medical advice, clinical diagnosis, treatment recommendations, or therapeutic guidance. The information provided is general in nature and is not a substitute for professional medical evaluation, diagnosis, or treatment.
              </p>
            </div>
            <p>
              Bierman Autism Centers provides Applied Behavior Analysis (ABA) therapy and related services through licensed clinical professionals. Decisions about your child's care should be made in consultation with qualified healthcare providers, including board-certified behavior analysts (BCBAs), physicians, and other licensed professionals.
            </p>
            <p className="mt-3">
              <strong>No provider-patient relationship is created</strong> by accessing or using this website. Visiting this site, reading its content, or submitting an inquiry does not establish a clinical relationship between you and Bierman Autism Centers or any of its clinical staff.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a2b47] mb-3">3. Emergency Disclaimer</h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="text-red-800 text-sm font-semibold mb-1">Emergency Services</p>
              <p className="text-red-700 text-sm">
                If you or someone you know is experiencing a medical emergency, a behavioral crisis, or any situation requiring immediate assistance, <strong>call 911 or your local emergency services immediately</strong>. This website is not a crisis resource and cannot provide emergency support.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a2b47] mb-3">4. Permitted Use</h2>
            <p>
              This proof-layer environment is intended for review by authorized Bierman Autism Centers personnel, SEO consultants, and development partners. It is not intended for general public use and should not be shared with patients, families, or the general public without authorization from Bierman Autism Centers.
            </p>
            <p className="mt-3">
              You agree not to use this environment to collect, scrape, or harvest any information, to attempt unauthorized access to any system, or for any unlawful purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a2b47] mb-3">5. Intellectual Property</h2>
            <p>
              All content, design elements, structured data architecture, location page frameworks, schema markup systems, and related intellectual property on this proof-layer site are the property of Bierman Autism Centers or its authorized development partners. Unauthorized reproduction, distribution, or use is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a2b47] mb-3">6. External Links</h2>
            <p>
              This site contains links to third-party websites including Google Maps, YouTube, and the production Bierman Autism Centers website. These links are provided for convenience and informational purposes only. Bierman Autism Centers does not endorse, control, or assume responsibility for the content, privacy practices, or accuracy of any third-party site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a2b47] mb-3">7. Disclaimer of Warranties</h2>
            <p>
              This proof-layer environment is provided on an "as is" and "as available" basis for development and review purposes. Bierman Autism Centers makes no representations or warranties regarding the accuracy, completeness, or fitness for any particular purpose of the content in this environment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a2b47] mb-3">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Bierman Autism Centers shall not be liable for any direct, indirect, incidental, or consequential damages arising from access to or use of this proof-layer environment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a2b47] mb-3">9. Staging Limitations</h2>
            <p>
              This proof-layer environment does not represent the final production website. Location information, phone numbers, addresses, and service descriptions are provided for architectural testing purposes and should be verified against official Bierman Autism Centers records before production use. No patient data is collected in this environment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a2b47] mb-3">10. Contact</h2>
            <p>
              Questions about these terms or this proof-layer environment may be directed to:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-teal-600 hover:text-teal-700 underline">{CONTACT_EMAIL}</a>
            </p>
          </section>

        </div>

        {/* Footer nav */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap gap-4 text-sm text-slate-500">
          <Link href="/privacy-policy/" className="hover:text-teal-600 transition-colors">Privacy Policy</Link>
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
