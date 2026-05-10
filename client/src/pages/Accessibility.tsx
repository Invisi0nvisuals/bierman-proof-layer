/**
 * Bierman Autism Centers — Proof Layer
 * Accessibility Statement (Proof-of-Concept Draft)
 *
 * STAGING NOTICE: This is a proof-of-concept draft for the Bierman Autism Centers
 * proof-layer development environment. It is NOT a final accessibility statement.
 * This page should be reviewed by Bierman Autism Centers before production use.
 */

import { Link } from "wouter";

const SHARED_LOGO = "/manus-storage/bierman-20th-logo_5e2e0b3c.webp";
const EFFECTIVE_DATE = "May 2026";
const CONTACT_EMAIL = "marketing@biermanautism.com";

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Dev Banner */}
      <div className="bg-amber-50 border-b border-amber-200 text-amber-800 text-xs text-center py-2 px-4">
        <strong>Proof-Layer Draft:</strong> This Accessibility Statement is a proof-of-concept document. It must be reviewed and validated before production use.
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
            Accessibility
          </div>
          <h1 className="text-3xl font-bold text-[#1a2b47] mb-2">Accessibility Statement</h1>
          <p className="text-slate-500 text-sm">Effective: {EFFECTIVE_DATE} · Proof-of-Concept Draft</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#1a2b47] mb-3">Our Commitment</h2>
            <p>
              Bierman Autism Centers is committed to ensuring that our digital presence is accessible to all individuals, including those with disabilities. We strive to meet or exceed the requirements of the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA and Section 508 of the Rehabilitation Act.
            </p>
            <p className="mt-3">
              This commitment reflects our broader mission to serve children with autism and their families — a community for whom accessible, clear, and inclusive communication is especially important.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a2b47] mb-3">Proof-Layer Environment</h2>
            <p>
              This proof-layer development environment has been built with accessibility in mind, including:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-3 text-slate-600">
              <li>Semantic HTML5 structure with appropriate heading hierarchy</li>
              <li>ARIA labels on interactive elements</li>
              <li>Sufficient color contrast ratios for text and UI elements</li>
              <li>Keyboard-navigable interactive components</li>
              <li>Descriptive alt text on all meaningful images</li>
              <li>Mobile-responsive layout for users on assistive devices</li>
              <li>No auto-playing audio or video content</li>
              <li>External links labeled with context for screen reader users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a2b47] mb-3">Known Limitations</h2>
            <p>
              This proof-layer environment is under active development. Some areas may not yet meet full WCAG 2.1 AA compliance. Known areas under review include:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-3 text-slate-600">
              <li>YouTube video embeds: captions depend on YouTube's auto-caption system; manual captions are not yet added</li>
              <li>Google Maps embeds: keyboard navigation within the map iframe may be limited</li>
              <li>FAQ accordion components: focus management is implemented but may need further testing with screen readers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a2b47] mb-3">Feedback and Assistance</h2>
            <p>
              If you experience any difficulty accessing content on this site, or if you have suggestions for improving accessibility, please contact us:
            </p>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 mt-4">
              <p className="text-teal-800 text-sm">
                <strong>Email:</strong>{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-teal-600 hover:text-teal-700 underline">{CONTACT_EMAIL}</a>
              </p>
              <p className="text-teal-700 text-sm mt-2">
                We aim to respond to accessibility feedback within 5 business days. If you need content in an alternative format, please let us know and we will make every reasonable effort to accommodate your request.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a2b47] mb-3">Third-Party Content</h2>
            <p>
              This site embeds content from third-party providers including YouTube and Google Maps. While we make every effort to select accessible third-party tools, we cannot guarantee the accessibility of content or interfaces provided by external parties. We encourage users to contact those providers directly with accessibility concerns related to their platforms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a2b47] mb-3">Ongoing Improvement</h2>
            <p>
              Accessibility is an ongoing effort. We regularly review our digital properties and work to address identified barriers. This statement will be updated as improvements are made and as the proof-layer architecture evolves toward production deployment.
            </p>
          </section>

        </div>

        {/* Footer nav */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap gap-4 text-sm text-slate-500">
          <Link href="/privacy-policy/" className="hover:text-teal-600 transition-colors">Privacy Policy</Link>
          <span>·</span>
          <Link href="/terms-of-use/" className="hover:text-teal-600 transition-colors">Terms of Use</Link>
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
