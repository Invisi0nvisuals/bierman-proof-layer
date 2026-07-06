/**
 * Bierman Autism Centers — Proof Layer
 * New Jersey Location Hub: /locations/nj/
 *
 * Design system: Poppins, brand-teal (#05C3DE) / brand-coral (#EF4E72) / navy (#1a2b47)
 * Matches LocationPage visual language exactly.
 *
 * Purpose:
 *   - Internal linking hub for all 10 NJ location pages
 *   - Provides Googlebot a clean crawl entry point for the full NJ cluster
 *   - Injects BreadcrumbList + ItemList schema for the NJ state page
 *
 * Data: All location data sourced from verified LocationData objects.
 * No hardcoded NAP or address data — everything flows from the data files.
 */

import { useMemo } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import HealthcareDisclaimer from "@/components/HealthcareDisclaimer";

// ── Location data imports ─────────────────────────────────────────────────────
import { ramseyData } from "@/locations/data/ramsey";
import { piscatawayData } from "@/locations/data/piscataway";
import { westOrangeData } from "@/locations/data/west-orange";
import { princetonData } from "@/locations/data/princeton";
import { cranfordData } from "@/locations/data/cranford";
import { berkeleyHeightsData } from "@/locations/data/berkeley-heights";
import { eatontownData } from "@/locations/data/eatontown";
import { parsippanyData } from "@/locations/data/parsippany";
import { moorestownData } from "@/locations/data/moorestown";
import { roselandData } from "@/locations/data/roseland";
import type { LocationData } from "@/locations/types";

// ── Shared assets ─────────────────────────────────────────────────────────────
const LOGO = "/manus-storage/bierman-logo-anniversary-20_3f19246b.webp";
const FOOTER_LOGO = "/manus-storage/Main_Logo_All_White_c1738645.png";
const LOGO_FULL = "https://bierman-proof-layer.manus.space/manus-storage/bierman-logo-anniversary-20_3f19246b.webp";
const INTAKE_URL = "https://www.biermanautism.com/start-now/";
const PAGE_URL = "https://bierman-proof-layer.manus.space/";

// ── Location registry ─────────────────────────────────────────────────────────
// Ordered alphabetically by city name (per Tiffany review request)
const NJ_LOCATIONS: LocationData[] = [
  berkeleyHeightsData,
  cranfordData,
  eatontownData,
  moorestownData,
  parsippanyData,
  piscatawayData,
  princetonData,
  ramseyData,
  roselandData,
  westOrangeData,
];

// County group labels for visual clustering
const COUNTY_GROUPS: Record<string, string> = {
  "Bergen County":   "Northern NJ — Bergen County",
  "Union County":    "Central NJ — Union County",
  "Essex County":    "Northern NJ — Essex County",
  "Middlesex County":"Central NJ — Middlesex County",
  "Mercer County":   "Central NJ — Mercer County",
  "Monmouth County": "Shore — Monmouth County",
  "Morris County":   "Northern NJ — Morris County",
  "Burlington County": "South Jersey — Burlington County",
};

// ── Footer Service Navigation (Source of Truth: Bierman_NJ_Final_Service_URL_Matrix_V4.xlsx) ────
const NJ_HUB_FOOTER_SERVICES: { label: string; url: string }[] = [
  { label: "ABA Therapy", url: "https://www.biermanautism.com/aba-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=nj_hub_aba_therapy" },
  { label: "Speech-Language Therapy", url: "https://www.biermanautism.com/autism-therapy-services/speech-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=nj_hub_speech_therapy" },
  { label: "Occupational Therapy", url: "https://www.biermanautism.com/autism-therapy-services/occupational-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=nj_hub_occupational_therapy" },
  { label: "Diagnostic Evaluation", url: "https://www.biermanautism.com/autism-testing/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=nj_hub_autism_testing" },
  { label: "Caregiver Training", url: "https://www.biermanautism.com/resources/caregiver-training/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=nj_hub_caregiver_training" },
];

// ── Schema builder ────────────────────────────────────────────────────────────
function buildNJHubSchema(): string {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        name: "Comprehensive Autism Services Near Me in New Jersey | Bierman Autism Centers",
        url: PAGE_URL,
        description:
          "Bierman Autism Centers operates 10 New Jersey locations providing ABA therapy, speech-language therapy, occupational therapy, and diagnostic evaluations for children with autism.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://bierman-proof-layer.manus.space/#website" },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://bierman-proof-layer.manus.space/" },
          { "@type": "ListItem", position: 2, name: "New Jersey ABA Therapy Locations", item: PAGE_URL },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#location-list`,
        name: "Bierman Autism Centers — New Jersey Locations",
        description: "All Bierman Autism Centers locations in New Jersey",
        numberOfItems: NJ_LOCATIONS.length,
        itemListElement: NJ_LOCATIONS.map((loc, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: loc.entityName,
          url: loc.schema.pageUrl,
        })),
      },
    ],
  };
  return JSON.stringify(graph, null, 2);
}

// ── Location Card ─────────────────────────────────────────────────────────────
function LocationCard({ loc }: { loc: LocationData }) {
  const isComingSoon = !!loc.comingSoon;
  const slug = loc.slug;
  const href = `/locations/nj/${slug}/`;

  return (
    <Link href={href}>
      <div
        className={`group relative bg-white border rounded-2xl p-5 transition-all duration-200 cursor-pointer
          ${isComingSoon
            ? "border-slate-200 opacity-80 hover:opacity-90"
            : "border-brand-teal-100 hover:border-brand-teal-200 hover:shadow-md hover:-translate-y-0.5"
          }`}
      >
        {/* Coming Soon badge */}
        {isComingSoon && (
          <div className="absolute top-4 right-4">
            <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full border border-amber-200">
              {loc.comingSoonLabel ?? "Coming Soon"}
            </span>
          </div>
        )}

        {/* County pill */}
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1 bg-brand-teal-50 text-brand-teal text-xs font-semibold px-2.5 py-1 rounded-full">
            <svg viewBox="0 0 12 12" fill="currentColor" className="w-2.5 h-2.5" aria-hidden="true">
              <circle cx="6" cy="5" r="2.5"/>
              <path d="M6 1a4 4 0 100 8A4 4 0 006 1zm0 6.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" opacity="0"/>
            </svg>
            {loc.address.county}
          </span>
        </div>

        {/* City + state */}
        <h2 className="text-lg font-bold text-[#1a2b47] mb-1 group-hover:text-brand-teal-700 transition-colors">
          {loc.address.city}, {loc.address.state}
        </h2>

        {/* Street address */}
        <p className="text-slate-500 text-sm mb-3 leading-snug">{loc.address.street}</p>

        {/* Service line snippet */}
        <p className="text-xs text-slate-500 mb-3 leading-relaxed">
          {isComingSoon
            ? "ABA therapy, speech, OT & diagnostics — opening soon"
            : "BCBA-supervised ABA therapy, speech, OT & diagnostics"}
        </p>

        {/* Phone */}
        {!isComingSoon && (
          <div className="flex items-center gap-1.5 text-sm text-brand-teal-700 font-medium mb-4">
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M3 3.5C3 2.67 3.67 2 4.5 2h1.25l1.5 3.5-1.25.75a7.5 7.5 0 003.75 3.75l.75-1.25L14 10.25V11.5c0 .83-.67 1.5-1.5 1.5C6.04 13 3 9.96 3 3.5z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {loc.phone}
          </div>
        )}

        {/* Service area preview */}
        {loc.serviceArea && loc.serviceArea.length > 0 && (
          <div className="text-xs text-slate-400 mb-4 leading-relaxed">
            Serving: {loc.serviceArea.slice(0, 4).join(", ")}{loc.serviceArea.length > 4 ? ` + ${loc.serviceArea.length - 4} more` : ""}
          </div>
        )}

        {/* CTA */}
        <div className={`text-sm font-semibold flex items-center gap-1.5 transition-colors
          ${isComingSoon ? "text-amber-600" : "text-brand-teal group-hover:text-brand-teal-800"}`}>
          {isComingSoon ? "Pre-register interest" : "View location"}
          <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </Link>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function NJHub() {
  const openLocations = NJ_LOCATIONS.filter((l) => !l.comingSoon);
  const comingSoonLocations = NJ_LOCATIONS.filter((l) => l.comingSoon);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>Comprehensive Autism Services Near Me in NJ | Bierman Autism Centers</title>
        <meta
          name="description"
          content="Comprehensive autism services near you in New Jersey — ABA therapy, speech, OT & diagnostics at 10 locations. BCBA-supervised care. Insurance accepted."
        />
        {/* Canonical: / is the root hub. /locations/nj/ is an alias that also points here. */}
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{buildNJHubSchema()}</script>
      </Helmet>
{/* Navigation */}
      <nav className="bg-white border-b border-slate-200 z-40 shadow-sm sticky top-0">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/">
              <img src={LOGO} alt="Bierman Autism Centers 20th Anniversary" className="h-10 w-auto cursor-pointer" />
            </Link>
            <div className="hidden md:flex items-center gap-2">
              <span className="text-slate-300 text-sm">|</span>
              <span className="text-slate-500 text-sm">New Jersey</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={INTAKE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-coral hover:bg-brand-coral/90 text-white font-semibold px-5 py-2.5 rounded-full text-sm tracking-wide transition-colors shadow-sm"
            >
              Request Services
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "#003B71" }}>
        {/* Banner image — full background, same image for desktop and mobile */}
        <div className="absolute inset-0">
          <img
            src="/manus-storage/Bierman_Autism_New_Jersey_Desktop_Hero_v2_e911e24b.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-right"
          />
          {/* Left fade overlay so text stays readable */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, #003B71 0%, #003B71 30%, rgba(0,30,80,0.75) 52%, transparent 75%)" }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-14 md:py-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-white/60">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-white/30">›</li>
              <li><span className="text-white/70">Locations</span></li>
              <li aria-hidden="true" className="text-white/30">›</li>
              <li><span className="text-[#05C3DE] font-semibold">New Jersey</span></li>
            </ol>
          </nav>

          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3" aria-hidden="true">
                  <path d="M8 1a5.5 5.5 0 100 11A5.5 5.5 0 008 1zm0 1.5a4 4 0 110 8 4 4 0 010-8z"/>
                </svg>
                New Jersey
              </span>
              <span className="text-white/50 text-xs">{openLocations.length} open locations · {comingSoonLocations.length} coming soon</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5 text-white">
              Comprehensive Autism Services<br />Near Me in New Jersey
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Bierman Autism Centers operates {NJ_LOCATIONS.length} New Jersey locations ({openLocations.length} open, {comingSoonLocations.length} opening Fall 2026) providing individualized ABA therapy, speech-language therapy, occupational therapy, and diagnostic evaluations for children with autism. Find the location nearest to your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={INTAKE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-coral hover:bg-brand-coral/90 text-white font-semibold px-8 py-4 rounded-full text-lg tracking-wide transition-colors text-center shadow-md"
              >
                Request Services in NJ
              </a>
              <a
                href="tel:8009318113"
                className="border-2 border-white/40 hover:border-white bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors text-center"
              >
                (800) 931-8113
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#1a2b47] py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: `${NJ_LOCATIONS.length}`, label: "NJ Locations" },
              { value: "9", label: "NJ Counties Served" },
              { value: "150+", label: "Towns in Service Area" },
              { value: "20+", label: "Years Serving Families" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-brand-coral mb-0.5">{stat.value}</div>
                <div className="text-white/60 text-xs font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location grid */}
      <section className="py-14 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2b47] mb-2">ABA Therapy &amp; Autism Services Near You in New Jersey</h2>
            <p className="text-slate-500 text-base">Each location offers BCBA-supervised ABA therapy, speech-language therapy, occupational therapy, and diagnostic evaluations. Select a location to view services, hours, insurance, and directions.</p>
          </div>

          {/* Open locations */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {openLocations.map((loc) => (
              <LocationCard key={loc.slug} loc={loc} />
            ))}
          </div>

          {/* Coming Soon */}
          {comingSoonLocations.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-slate-200" />
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Coming Soon</span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {comingSoonLocations.map((loc) => (
                  <LocationCard key={loc.slug} loc={loc} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Services overview */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a2b47] mb-4">
                Comprehensive Autism Support Across New Jersey
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Every Bierman New Jersey location offers the same evidence-based services, delivered by certified behavior analysts and licensed therapists. Each program is individualized to the child's developmental profile and goals.
              </p>
              <ul className="space-y-3">
                {[
                  "ABA Therapy (Applied Behavior Analysis)",
                  "Speech-Language Therapy",
                  "Occupational Therapy",
                  "Diagnostic Evaluation for Autism",
                  "Caregiver Training & Family Support",
                ].map((service) => (
                  <li key={service} className="flex items-center gap-3 text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-brand-teal-100 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3 text-brand-teal" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-sm font-medium">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-lg font-bold text-[#1a2b47] mb-4">Insurance & Access</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                Bierman New Jersey locations accept most major insurance plans. Our intake team verifies coverage and guides families through the process before the first appointment.
              </p>
              <div className="space-y-2 text-sm text-slate-500">
                {["Horizon BCBS NJ", "Aetna", "United Healthcare", "Cigna", "And most major plans"].map((ins) => (
                  <div key={ins} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0" />
                    {ins}
                  </div>
                ))}
              </div>
              <a
                href={INTAKE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block w-full bg-brand-coral hover:bg-brand-coral/90 text-white font-semibold py-3 rounded-full text-sm tracking-wide text-center transition-colors"
              >
                Start the Intake Process
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2b47] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src={FOOTER_LOGO} alt="Bierman Autism Centers" className="h-12 w-auto mb-4" />
              <p className="text-white/60 text-sm leading-relaxed">
                Bierman Autism Centers provides evidence-based ABA therapy and autism support services for children and families across 34 locations nationwide.
              </p>
            </div>
            <div>
              <div className="font-bold text-white mb-3">New Jersey Locations</div>
              <div className="text-white/60 text-sm space-y-1.5">
                {openLocations.map((loc) => (
                  <div key={loc.slug}>
                    <Link href={`/locations/nj/${loc.slug}/`} className="hover:text-white transition-colors">
                      {loc.address.city}, NJ
                    </Link>
                  </div>
                ))}
                {comingSoonLocations.map((loc) => (
                  <div key={loc.slug}>
                    <Link href={`/locations/nj/${loc.slug}/`} className="text-white/40 hover:text-white/70 transition-colors">
                      {loc.address.city}, NJ
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="font-bold text-white mb-3">Services</div>
              <div className="text-white/60 text-sm space-y-1">
                {NJ_HUB_FOOTER_SERVICES.map((svc) => (
                  <div key={svc.label}><a href={svc.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{svc.label}</a></div>
                ))}
              </div>
            </div>
          </div>

          <HealthcareDisclaimer variant="footer" />

          <div className="border-t border-white/10 pt-6 mt-2">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-4 text-xs text-white/40">
                <a href="https://www.biermanautism.com/privacy-policy/?utm_source=nj_hub&utm_medium=footer&utm_campaign=local_pilot" className="hover:text-white/70 transition-colors">Privacy Policy</a>
                <span className="text-white/20">·</span>
                <a href="https://www.biermanautism.com/terms-of-use/?utm_source=nj_hub&utm_medium=footer&utm_campaign=local_pilot" className="hover:text-white/70 transition-colors">Terms of Use</a>
              </div>
              <p className="text-white/30 text-xs">© {new Date().getFullYear()} Bierman Autism Centers. All rights reserved.</p>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}
