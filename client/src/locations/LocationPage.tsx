/*
 * Bierman Autism Centers — Proof Layer
 * Generic Location Page Renderer
 *
 * Design: Warm pediatric healthcare — family-centered, light, and welcoming
 * - Warm off-white / light aqua backgrounds (no heavy dark navy dominance)
 * - Soft teal (#05C3DE) brand accent
 * - Warm orange (#EF4E72) CTA
 * - Navy (#1a2b47) used sparingly for headings and footer only
 * - Rounded cards, generous whitespace, playful-but-polished SVG icons
 *
 * PROOF LAYER — NOT PRODUCTION
 * Pre-launch review environment | Crawling Enabled | No tracking | No live forms | No patient data
 *
 * USAGE:
 *   import { LocationPage } from "@/locations/LocationPage";
 *   import { ramseyData } from "@/locations/data/ramsey";
 *   <LocationPage data={ramseyData} />
 *
 * To add a new location:
 *   1. Create client/src/locations/data/{slug}.ts
 *   2. Export a LocationData object
 *   3. Add a route in App.tsx: <Route path="/locations/nj/{slug}/" component={() => <LocationPage data={myData} />} />
 *   4. Done — no other files need to change.
 */

import { useState, useMemo, useEffect } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { PILOT_VIDEO } from "./types";
import type { LocationData, LocationReview, LocationFaq } from "./types";
import HealthcareDisclaimer from "@/components/HealthcareDisclaimer";
import { buildLocationSchema } from "./schema";

// ─── Shared static assets (same for all NJ locations) ────────────────────────

const TRUST_BADGES = [
  { src: "/manus-storage/bierman-trust-group-of-year-2022_866c3645.webp", alt: "Group of the Year 2022 Award" },
  { src: "/manus-storage/bierman-trust-bacb-ace-provider_f1995271.webp", alt: "BACB ACE Authorized Continuing Education Provider" },
  { src: "/manus-storage/bierman-trust-casp-member_7cc1f427.webp", alt: "CASP — Council of Autism Service Providers Member" },
];

// Insurance logos: Official transparent PNGs from BAC Assets Google Drive
// Governance: BAC Pilot Design System & Asset Governance v3, Section 3A
const INSURANCE_LOGOS = [
  { src: "/manus-storage/Aetna_0c4a36d1.png", alt: "Aetna health insurance — accepted at Bierman Autism Centers" },
  { src: "/manus-storage/Ambetter_a83f1a1d.png", alt: "Ambetter health insurance — accepted at Bierman Autism Centers" },
  { src: "/manus-storage/Carelon_f51ccee7.png", alt: "Carelon health insurance — accepted at Bierman Autism Centers" },
  { src: "/manus-storage/Cigna_a8c484fc.png", alt: "Cigna health insurance — accepted at Bierman Autism Centers" },
  { src: "/manus-storage/ComPsych_1964165a.png", alt: "ComPsych health insurance — accepted at Bierman Autism Centers" },
  { src: "/manus-storage/Meritain_Health_5e00cc81.png", alt: "Meritain Health insurance — accepted at Bierman Autism Centers" },
  { src: "/manus-storage/Surest_84ec0683.png", alt: "Surest health insurance — accepted at Bierman Autism Centers" },
  { src: "/manus-storage/UMR_9b626be4.png", alt: "UMR health insurance — accepted at Bierman Autism Centers" },
  { src: "/manus-storage/UnitedHealthcare_de9ce2b5.png", alt: "United Healthcare — accepted at Bierman Autism Centers" },
];

const SHARED_ASSETS = {
  logo: "/manus-storage/bierman-logo-anniversary-20_3f19246b.webp",
  footerLogo: "/manus-storage/Main_Logo_All_White_c1738645.png",
  mascot: "/manus-storage/bierman-brand-nj-penguin-accent_64e9cbdd.webp",
  insurance: "/manus-storage/Horizon_BCBS_New_Jersey_b44b4bea.png",
  themeBcbaGuidance: "/manus-storage/SupportiveBCBAGuidance_6bffed7f.png",
  themeFamilyPartnership: "/manus-storage/FamilyPartnership_0efd3934.png",
  themeProgressFocused: "/manus-storage/Progress-FocusedSupport_20321a51.png",
};

const STANDARD_SERVICES = [
  {
    slug: "aba-therapy",
    title: "ABA Therapy",
    desc: "Applied Behavior Analysis — individualized, evidence-based therapy designed to build communication, social, and daily living skills.",
    img: "/manus-storage/ABA-Therapy-Bierman-Autism_0e3cca4a.webp",
    alt: "Bierman therapist supporting a child during an ABA therapy activity",
  },
  {
    slug: "speech-therapy",
    title: "Speech-Language Therapy",
    desc: "Targeted speech and language support to help children communicate more effectively and confidently.",
    img: "/manus-storage/Speech-Language-Therapy-Bierman-Autism_4e584cfb.webp",
    alt: "Bierman speech-language pathologist working with a child during a communication activity",
  },
  {
    slug: "occupational-therapy",
    title: "Occupational Therapy",
    desc: "Sensory integration, fine motor skills, and daily living activities to support independence and engagement.",
    img: "/manus-storage/Occupational-Therapy-Bierman-Autism_65cc6b55.webp",
    alt: "Bierman clinician supporting a child during an occupational therapy activity",
  },
  {
    slug: "diagnostic-evaluation",
    title: "Diagnostic Evaluation",
    desc: "Comprehensive autism diagnostic evaluations by licensed clinicians, with results and recommendations for families.",
    img: "/manus-storage/Diagnostic-Evaluation-Bierman-Autism_338899cf.webp",
    alt: "Bierman clinician using a tablet during a child-focused assessment activity",
  },
];

// ─── Service Card Destination URLs (Source of Truth: Bierman_NJ_Service_URL_Matrix_v3.1.xlsx) ───
// All 4 service cards link out: ABA, Speech, OT, and Diagnostic Evaluation.
// ABA links use /aba-therapy-services/; Diagnostic uses /autism-testing/; both with location-specific utm_content.

const SERVICE_CARD_URLS: Record<string, Record<string, string>> = {
  "berkeley-heights": {
    "aba-therapy": "https://www.biermanautism.com/aba-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=berkeley-heights_aba_therapy",
    "speech-therapy": "https://www.biermanautism.com/location/berkeley-heights-nj/speech-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=berkeley-heights_speech_therapy",
    "occupational-therapy": "https://www.biermanautism.com/location/berkeley-heights-nj/occupational-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=berkeley-heights_occupational_therapy",
    "diagnostic-evaluation": "https://www.biermanautism.com/autism-testing/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=berkeley-heights_autism_testing",
  },
  cranford: {
    "aba-therapy": "https://www.biermanautism.com/aba-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=cranford_aba_therapy",
    "speech-therapy": "https://www.biermanautism.com/location/cranford-nj/speech-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=cranford_speech_therapy",
    "occupational-therapy": "https://www.biermanautism.com/location/cranford-nj/occupational-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=cranford_occupational_therapy",
    "diagnostic-evaluation": "https://www.biermanautism.com/autism-testing/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=cranford_autism_testing",
  },
  eatontown: {
    "aba-therapy": "https://www.biermanautism.com/aba-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=eatontown_aba_therapy",
    "speech-therapy": "https://www.biermanautism.com/location/eatontown-nj/speech-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=eatontown_speech_therapy",
    "occupational-therapy": "https://www.biermanautism.com/location/eatontown-nj/occupational-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=eatontown_occupational_therapy",
    "diagnostic-evaluation": "https://www.biermanautism.com/autism-testing/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=eatontown_autism_testing",
  },
  moorestown: {
    "aba-therapy": "https://www.biermanautism.com/aba-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=moorestown_aba_therapy",
    "speech-therapy": "https://www.biermanautism.com/location/moorestown-nj/speech-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=moorestown_speech_therapy",
    "occupational-therapy": "https://www.biermanautism.com/location/moorestown-nj/occupational-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=moorestown_occupational_therapy",
    "diagnostic-evaluation": "https://www.biermanautism.com/autism-testing/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=moorestown_autism_testing",
  },
  parsippany: {
    "aba-therapy": "https://www.biermanautism.com/aba-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=parsippany_aba_therapy",
    "speech-therapy": "https://www.biermanautism.com/location/parsippany-nj/speech-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=parsippany_speech_therapy",
    "occupational-therapy": "https://www.biermanautism.com/location/parsippany-nj/occupational-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=parsippany_occupational_therapy",
    "diagnostic-evaluation": "https://www.biermanautism.com/autism-testing/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=parsippany_autism_testing",
  },
  piscataway: {
    "aba-therapy": "https://www.biermanautism.com/aba-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=piscataway_aba_therapy",
    "speech-therapy": "https://www.biermanautism.com/location/piscataway/speech-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=piscataway_speech_therapy",
    "occupational-therapy": "https://www.biermanautism.com/location/piscataway/occupational-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=piscataway_occupational_therapy",
    "diagnostic-evaluation": "https://www.biermanautism.com/autism-testing/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=piscataway_autism_testing",
  },
  princeton: {
    "aba-therapy": "https://www.biermanautism.com/aba-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=princeton_aba_therapy",
    "speech-therapy": "https://www.biermanautism.com/location/princeton-nj/speech-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=princeton_speech_therapy",
    "occupational-therapy": "https://www.biermanautism.com/location/princeton-nj/occupational-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=princeton_occupational_therapy",
    "diagnostic-evaluation": "https://www.biermanautism.com/autism-testing/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=princeton_autism_testing",
  },
  ramsey: {
    "aba-therapy": "https://www.biermanautism.com/aba-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=ramsey_aba_therapy",
    "speech-therapy": "https://www.biermanautism.com/location/ramsey/speech-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=ramsey_speech_therapy",
    "occupational-therapy": "https://www.biermanautism.com/location/ramsey/occupational-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=ramsey_occupational_therapy",
    "diagnostic-evaluation": "https://www.biermanautism.com/autism-testing/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=ramsey_autism_testing",
  },
  roseland: {
    "aba-therapy": "https://www.biermanautism.com/aba-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=roseland_aba_therapy",
    "speech-therapy": "https://www.biermanautism.com/location/roseland-nj/speech-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=roseland_speech_therapy",
    "occupational-therapy": "https://www.biermanautism.com/location/roseland-nj/occupational-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=roseland_occupational_therapy",
    "diagnostic-evaluation": "https://www.biermanautism.com/autism-testing/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=roseland_autism_testing",
  },
  "west-orange": {
    "aba-therapy": "https://www.biermanautism.com/aba-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=west-orange_aba_therapy",
    "speech-therapy": "https://www.biermanautism.com/location/west-orange-nj/speech-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=west-orange_speech_therapy",
    "occupational-therapy": "https://www.biermanautism.com/location/west-orange-nj/occupational-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=west-orange_occupational_therapy",
    "diagnostic-evaluation": "https://www.biermanautism.com/autism-testing/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=west-orange_autism_testing",
  },
};

// ─── Footer Service Navigation URLs (Source of Truth: Bierman_NJ_Final_Service_URL_Matrix_V4.xlsx) ───
// All 5 services linked in footer: ABA, Speech, OT, Diagnostic Evaluation, Caregiver Training.
// URLs use the V4 matrix values exactly as provided.

interface FooterServiceLink {
  label: string;
  url: string;
}

const FOOTER_SERVICE_URLS: Record<string, FooterServiceLink[]> = {
  "berkeley-heights": [
    { label: "ABA Therapy", url: "https://www.biermanautism.com/aba-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=berkeley-heights_aba_therapy" },
    { label: "Speech-Language Therapy", url: "https://www.biermanautism.com/location/berkeley-heights-nj/speech-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=berkeley-heights_speech_therapy" },
    { label: "Occupational Therapy", url: "https://www.biermanautism.com/location/berkeley-heights-nj/occupational-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=berkeley-heights_occupational_therapy" },
    { label: "Diagnostic Evaluation", url: "https://www.biermanautism.com/autism-testing/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=berkeley-heights_autism_testing" },
    { label: "Caregiver Training", url: "https://www.biermanautism.com/resources/caregiver-training/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=berkeley-heights_caregiver_training" },
  ],
  cranford: [
    { label: "ABA Therapy", url: "https://www.biermanautism.com/aba-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=cranford_aba_therapy" },
    { label: "Speech-Language Therapy", url: "https://www.biermanautism.com/location/cranford-nj/speech-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=cranford_speech_therapy" },
    { label: "Occupational Therapy", url: "https://www.biermanautism.com/location/cranford-nj/occupational-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=cranford_occupational_therapy" },
    { label: "Diagnostic Evaluation", url: "https://www.biermanautism.com/autism-testing/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=cranford_autism_testing" },
    { label: "Caregiver Training", url: "https://www.biermanautism.com/resources/caregiver-training/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=cranford_caregiver_training" },
  ],
  eatontown: [
    { label: "ABA Therapy", url: "https://www.biermanautism.com/aba-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=eatontown_aba_therapy" },
    { label: "Speech-Language Therapy", url: "https://www.biermanautism.com/location/eatontown-nj/speech-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=eatontown_speech_therapy" },
    { label: "Occupational Therapy", url: "https://www.biermanautism.com/location/eatontown-nj/occupational-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=eatontown_occupational_therapy" },
    { label: "Diagnostic Evaluation", url: "https://www.biermanautism.com/autism-testing/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=eatontown_autism_testing" },
    { label: "Caregiver Training", url: "https://www.biermanautism.com/resources/caregiver-training/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=eatontown_caregiver_training" },
  ],
  moorestown: [
    { label: "ABA Therapy", url: "https://www.biermanautism.com/aba-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=moorestown_aba_therapy" },
    { label: "Speech-Language Therapy", url: "https://www.biermanautism.com/location/moorestown-nj/speech-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=moorestown_speech_therapy" },
    { label: "Occupational Therapy", url: "https://www.biermanautism.com/location/moorestown-nj/occupational-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=moorestown_occupational_therapy" },
    { label: "Diagnostic Evaluation", url: "https://www.biermanautism.com/autism-testing/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=moorestown_autism_testing" },
    { label: "Caregiver Training", url: "https://www.biermanautism.com/resources/caregiver-training/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=moorestown_caregiver_training" },
  ],
  parsippany: [
    { label: "ABA Therapy", url: "https://www.biermanautism.com/aba-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=parsippany_aba_therapy" },
    { label: "Speech-Language Therapy", url: "https://www.biermanautism.com/location/parsippany-nj/speech-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=parsippany_speech_therapy" },
    { label: "Occupational Therapy", url: "https://www.biermanautism.com/location/parsippany-nj/occupational-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=parsippany_occupational_therapy" },
    { label: "Diagnostic Evaluation", url: "https://www.biermanautism.com/autism-testing/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=parsippany_autism_testing" },
    { label: "Caregiver Training", url: "https://www.biermanautism.com/resources/caregiver-training/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=parsippany_caregiver_training" },
  ],
  piscataway: [
    { label: "ABA Therapy", url: "https://www.biermanautism.com/aba-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=piscataway_aba_therapy" },
    { label: "Speech-Language Therapy", url: "https://www.biermanautism.com/location/piscataway-nj/speech-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=piscataway_speech_therapy" },
    { label: "Occupational Therapy", url: "https://www.biermanautism.com/location/piscataway-nj/occupational-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=piscataway_occupational_therapy" },
    { label: "Diagnostic Evaluation", url: "https://www.biermanautism.com/autism-testing/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=piscataway_autism_testing" },
    { label: "Caregiver Training", url: "https://www.biermanautism.com/resources/caregiver-training/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=piscataway_caregiver_training" },
  ],
  princeton: [
    { label: "ABA Therapy", url: "https://www.biermanautism.com/aba-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=princeton_aba_therapy" },
    { label: "Speech-Language Therapy", url: "https://www.biermanautism.com/location/princeton-nj/speech-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=princeton_speech_therapy" },
    { label: "Occupational Therapy", url: "https://www.biermanautism.com/location/princeton-nj/occupational-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=princeton_occupational_therapy" },
    { label: "Diagnostic Evaluation", url: "https://www.biermanautism.com/autism-testing/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=princeton_autism_testing" },
    { label: "Caregiver Training", url: "https://www.biermanautism.com/resources/caregiver-training/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=princeton_caregiver_training" },
  ],
  ramsey: [
    { label: "ABA Therapy", url: "https://www.biermanautism.com/aba-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=ramsey_aba_therapy" },
    { label: "Speech-Language Therapy", url: "https://www.biermanautism.com/location/ramsey-nj/speech-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=ramsey_speech_therapy" },
    { label: "Occupational Therapy", url: "https://www.biermanautism.com/location/ramsey-nj/occupational-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=ramsey_occupational_therapy" },
    { label: "Diagnostic Evaluation", url: "https://www.biermanautism.com/autism-testing/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=ramsey_autism_testing" },
    { label: "Caregiver Training", url: "https://www.biermanautism.com/resources/caregiver-training/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=ramsey_caregiver_training" },
  ],
  roseland: [
    { label: "ABA Therapy", url: "https://www.biermanautism.com/aba-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=roseland_aba_therapy" },
    { label: "Speech-Language Therapy", url: "https://www.biermanautism.com/location/roseland-nj/speech-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=roseland_speech_therapy" },
    { label: "Occupational Therapy", url: "https://www.biermanautism.com/location/roseland-nj/occupational-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=roseland_occupational_therapy" },
    { label: "Diagnostic Evaluation", url: "https://www.biermanautism.com/autism-testing/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=roseland_autism_testing" },
    { label: "Caregiver Training", url: "https://www.biermanautism.com/resources/caregiver-training/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=roseland_caregiver_training" },
  ],
  "west-orange": [
    { label: "ABA Therapy", url: "https://www.biermanautism.com/aba-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=west-orange_aba_therapy" },
    { label: "Speech-Language Therapy", url: "https://www.biermanautism.com/location/west-orange-nj/speech-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=west-orange_speech_therapy" },
    { label: "Occupational Therapy", url: "https://www.biermanautism.com/location/west-orange-nj/occupational-therapy/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=west-orange_occupational_therapy" },
    { label: "Diagnostic Evaluation", url: "https://www.biermanautism.com/autism-testing/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=west-orange_autism_testing" },
    { label: "Caregiver Training", url: "https://www.biermanautism.com/resources/caregiver-training/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=west-orange_caregiver_training" },
  ],
  // Fallback for NJ Hub (no location-specific UTM)
  "_default": [
    { label: "ABA Therapy", url: "https://www.biermanautism.com/aba-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=nj_hub_aba_therapy" },
    { label: "Speech-Language Therapy", url: "https://www.biermanautism.com/autism-therapy-services/speech-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=nj_hub_speech_therapy" },
    { label: "Occupational Therapy", url: "https://www.biermanautism.com/autism-therapy-services/occupational-therapy-services/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=nj_hub_occupational_therapy" },
    { label: "Diagnostic Evaluation", url: "https://www.biermanautism.com/autism-testing/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=nj_hub_autism_testing" },
    { label: "Caregiver Training", url: "https://www.biermanautism.com/resources/caregiver-training/?utm_source=nj_pilot&utm_medium=service_card&utm_campaign=local_service_navigation&utm_content=nj_hub_caregiver_training" },
  ],
};

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function IconABA() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#ccfbf1" />
      <path d="M16 32c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#05C3DE" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="24" cy="18" r="5" stroke="#05C3DE" strokeWidth="2.5"/>
      <path d="M20 26l-4 6M28 26l4 6" stroke="#05C3DE" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function IconSpeech() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#ccfbf1" />
      <path d="M14 20c0-5.523 4.477-10 10-10s10 4.477 10 10c0 4.418-2.86 8.166-6.857 9.497L26 34h-4l-.857-4.503C17.146 28.166 14 24.418 14 20z" stroke="#05C3DE" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M20 20h8M20 24h5" stroke="#05C3DE" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function IconOT() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#ccfbf1" />
      <path d="M18 28c0-3.314 2.686-6 6-6s6 2.686 6 6v4H18v-4z" stroke="#05C3DE" strokeWidth="2.5" strokeLinejoin="round"/>
      <circle cx="24" cy="18" r="3.5" stroke="#05C3DE" strokeWidth="2.5"/>
      <path d="M14 36h20" stroke="#05C3DE" strokeWidth="2" strokeLinecap="round"/>
      <path d="M14 28h2M32 28h2" stroke="#05C3DE" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function IconDiag() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#ccfbf1" />
      <rect x="14" y="13" width="20" height="24" rx="3" stroke="#05C3DE" strokeWidth="2.5"/>
      <path d="M19 20h10M19 25h10M19 30h6" stroke="#05C3DE" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="32" cy="32" r="5" fill="#ccfbf1" stroke="#EF4E72" strokeWidth="2"/>
      <path d="M32 30v4M30 32h4" stroke="#EF4E72" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill={i < count ? "#f59e0b" : "none"} stroke={i < count ? "#f59e0b" : "#d1d5db"} strokeWidth="1.5" className="w-4 h-4" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleBadge() {
  return (
    <div className="flex items-center gap-1.5">
      <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
      <span className="text-slate-400 text-xs">Posted on Google</span>
    </div>
  );
}

function DismissBtn({ onDismiss, label = "Dismiss notice" }: { onDismiss: () => void; label?: string }) {
  return (
    <button type="button" onClick={onDismiss} aria-label={label} className="ml-3 flex-shrink-0 text-current opacity-50 hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-current rounded transition-opacity" style={{ lineHeight: 1 }}>
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M3 3l10 10M13 3L3 13" />
      </svg>
    </button>
  );
}

const TRUNCATE_THRESHOLD = 160;

/** Format reviewer name as "First Name + Last Initial." for privacy consistency */
function formatReviewerName(name: string): string {
  // Already truncated (e.g., "Maria S.") or single word / pseudonym — return as-is
  if (name.includes(".") || !name.includes(" ") || name === "Bierman Parent") return name;
  const parts = name.trim().split(/\s+/);
  if (parts.length < 2) return name;
  const firstName = parts[0];
  const lastInitial = parts[parts.length - 1][0];
  return `${firstName} ${lastInitial}.`;
}

function GBPReviewCard({ review }: { review: LocationReview }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > TRUNCATE_THRESHOLD;
  const displayText = isLong && !expanded ? review.text.slice(0, TRUNCATE_THRESHOLD).trimEnd() + "\u2026" : review.text;

  return (
    <article className="flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 select-none" style={{ backgroundColor: review.avatarColor }} aria-hidden="true">
          {review.initials}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-[#1a2b47] text-sm leading-tight truncate">{formatReviewerName(review.name)}</p>
          <p className="text-slate-400 text-xs mt-0.5 truncate">{review.meta}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 mb-4">
        <StarRating count={review.stars} />
        <span className="text-slate-400 text-xs">{review.date}</span>
      </div>
      <div className="flex-1">
        <blockquote className="text-slate-600 text-sm leading-relaxed">{displayText}</blockquote>
        {isLong && (
          <button type="button" onClick={() => setExpanded(!expanded)} className="mt-2 text-brand-teal text-xs font-semibold hover:text-brand-teal-700 focus:outline-none focus:underline transition-colors">
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>
      <div className="mt-5 pt-4 border-t border-slate-100">
        <GoogleBadge />
      </div>
    </article>
  );
}

function FAQItem({ faq, index }: { faq: LocationFaq; index: number }) {
  return (
    <details key={index} className="border border-slate-200 rounded-2xl overflow-hidden group bg-white hover:border-brand-teal-200 transition-colors">
      <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-[#1a2b47] hover:bg-brand-teal-50/50 transition-colors list-none text-sm">
        {faq.q}
        <span className="text-brand-teal ml-4 flex-shrink-0 text-xl group-open:rotate-45 transition-transform duration-200">+</span>
      </summary>
      <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4 text-sm">
        {faq.a}
      </div>
    </details>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

interface LocationPageProps {
  data: LocationData;
}

export function LocationPage({ data }: LocationPageProps) {
  const { address, phone, intakeUrl, gbpUrl, mapEmbedUrl, youtubeId, displayName, entityName, heroDescription, insuranceText, reviews, faqs, nearby, clinicalLeadership, assets } = data;
  const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${address.street}, ${address.city}, ${address.state} ${address.zip}`)}`;

  // Scroll to top on route change (fixes SPA mid-page landing)
  useEffect(() => { window.scrollTo(0, 0); }, [data]);

  // Build per-route JSON-LD schema — memoized so it only recomputes when data changes
  const schemaJson = useMemo(() => buildLocationSchema(data), [data]);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Per-route JSON-LD schema — injected dynamically so only this location's schema is present */}
      <Helmet>
        <title>{data.schema.pageTitle}</title>
        <meta name="description" content={data.schema.pageDescription} />
        <link rel="canonical" href={data.schema.pageUrl} />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="US-NJ" />
        <meta name="geo.placename" content={data.address.city} />
        <script type="application/ld+json">{schemaJson}</script>
      </Helmet>

      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 z-40 shadow-sm" style={{ position: "sticky", top: "0px" }}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/"><img src={SHARED_ASSETS.logo} alt="Bierman Autism Centers 20th Anniversary" className="h-10 w-auto" /></Link>
            <div className="hidden md:flex items-center gap-2">
              <span className="text-slate-300 text-sm">|</span>
              <span className="text-slate-500 text-sm">{address.city}, {address.state}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href={`tel:${phone}`} className="hidden md:block text-slate-600 hover:text-brand-teal-700 text-sm font-medium transition-colors">{phone}</a>
            <a href={intakeUrl} target="_blank" rel="noopener noreferrer" className="bg-brand-coral hover:bg-brand-coral/90 text-white font-semibold px-5 py-2.5 rounded-full text-sm tracking-wide transition-colors shadow-sm">
              Request Services
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={assets.heroImage ? { background: "#e8f6fb" } : { background: "linear-gradient(135deg, #f0fdfa 0%, #e0f7f4 40%, #fef9f0 100%)" }}
      >
        {assets.heroImage && (
          <div className="absolute inset-0">
            <img
              src={assets.heroImage}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-right"
            />
            {/* Left fade so text stays readable */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(232,246,251,1) 0%, rgba(232,246,251,0.92) 35%, rgba(232,246,251,0.4) 60%, transparent 80%)" }} />
          </div>
        )}
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-brand-teal-100 text-brand-teal-700 text-xs font-semibold px-3 py-1 rounded-full">
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3" aria-hidden="true"><path d="M8 1a5 5 0 100 10A5 5 0 008 1zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM8 14a1 1 0 100-2 1 1 0 000 2z"/></svg>
                {address.city}, {address.state}
              </span>
              <span className="text-slate-400 text-xs">{address.county}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5 text-[#1a2b47]">
              ABA Therapy in<br />{address.city}, {address.state === "NJ" ? "New Jersey" : address.state}
            </h1>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">{heroDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href={intakeUrl} target="_blank" rel="noopener noreferrer" className="bg-brand-coral hover:bg-brand-coral/90 text-white font-semibold px-8 py-4 rounded-full text-lg tracking-wide transition-colors text-center shadow-md">
                Request Services in {address.city}
              </a>
              <a href={`tel:${phone}`} className="border-2 border-brand-teal-200 hover:border-brand-teal bg-white hover:bg-brand-teal-50 text-brand-teal-700 font-semibold px-8 py-4 rounded-full text-lg transition-colors text-center">
                {phone}
              </a>
            </div>
            {/* GBP NAP Card */}
            <div className="bg-white border border-brand-teal-200 rounded-2xl p-5 inline-block shadow-sm">
              <div className="flex items-start gap-3">
                <div className="bg-brand-teal-100 rounded-full p-1.5 mt-0.5">
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-brand-teal" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M13 6.5a5 5 0 11-10 0 5 5 0 0110 0z"/><path d="M6 6.5l1.5 1.5L10 4.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <div className="text-brand-teal-700 text-xs font-bold uppercase tracking-widest mb-1">Verified Bierman Location</div>
                  <div className="text-[#1a2b47] font-semibold text-sm">{entityName}</div>
                  <div className="text-slate-500 text-sm">{address.street}, {address.city}, {address.state} {address.zip}</div>
                  <div className="text-slate-500 text-sm">{phone}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-teal text-white py-3.5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-3 text-sm font-medium">
            {["✓ Evidence-Based ABA Therapy", "✓ Insurance Accepted", "✓ BCBA-Supervised Programs", "✓ 20 Years of Experience", `✓ Serving ${address.county}`].map((item) => (
              <span key={item} className="text-white/90">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Credential Badges */}
      <section className="bg-white border-b border-slate-100 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.alt} className="flex items-center justify-center" style={{ height: "64px" }}>
                <img src={badge.src} alt={badge.alt} style={{ maxHeight: "56px", width: "auto", objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-none">
              <div className="relative">
                <img
                  src={assets.facility}
                  alt={assets.facilityAlt ?? `Bierman Autism Centers ${address.city}, ${address.state} — clinic interior`}
                  className="rounded-3xl shadow-2xl w-full object-cover"
                  style={{ minHeight: "320px", maxHeight: "480px" }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div className="rounded-3xl bg-gradient-to-br from-brand-teal-50 to-aqua-100 items-center justify-center hidden" style={{ minHeight: "320px", background: "linear-gradient(135deg, #e0f7f4, #f0fdfa)" }}>
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🏥</div>
                    <div className="text-brand-teal-700 font-semibold">{address.city} Clinic Photo</div>
                    <div className="text-slate-400 text-sm mt-1">Image pending upload confirmation</div>
                  </div>
                </div>
                <div className="absolute -bottom-5 -right-4 bg-white rounded-2xl shadow-lg p-3 flex items-center gap-2 border border-brand-teal-100">
                  <img src={SHARED_ASSETS.mascot} alt="Pilot the Penguin mascot" className="h-12 w-auto" />
                  <div>
                    <div className="text-[#1a2b47] font-semibold text-xs">Pilot the Penguin</div>
                    <div className="text-slate-400 text-xs">Bierman's friendly guide</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-brand-teal text-sm font-bold uppercase tracking-widest mb-2">Our {address.city} Clinic</div>
              <h2 className="text-3xl font-bold text-[#1a2b47] mb-4">A Welcoming Environment for Every Child</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our {address.city} center is designed to be a safe, engaging, and supportive space for children and families. Every aspect of our clinic — from the therapy rooms to the waiting areas — is built with the needs of children with autism in mind.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our clinical team includes Board Certified Behavior Analysts (BCBAs), Registered Behavior Technicians (RBTs), speech-language pathologists, and occupational therapists working collaboratively on each child's individualized plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={intakeUrl} target="_blank" rel="noopener noreferrer" className="bg-brand-coral hover:bg-brand-coral/90 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-center text-sm">
                  Request Services in {address.city}
                </a>
                <a href={`tel:${phone}`} className="border border-brand-teal-200 hover:bg-brand-teal-50 text-brand-teal-700 font-semibold px-6 py-3 rounded-full transition-colors text-center text-sm">
                  {phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16" style={{ background: "linear-gradient(180deg, #f8fffe 0%, #f0fdfa 100%)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-brand-teal text-sm font-bold uppercase tracking-widest mb-2">Services at {address.city}</div>
            <h2 className="text-3xl font-bold text-[#1a2b47]">Comprehensive Autism Support Services</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">Each service is individualized to your child's goals and delivered by licensed, experienced clinicians.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STANDARD_SERVICES.map((svc) => {
              const cardUrl = SERVICE_CARD_URLS[data.slug]?.[svc.slug];
              const cardContent = (
                <>
                  {svc.img && (
                    <img src={svc.img} alt={svc.alt ?? svc.title} className="w-full h-40 object-cover" />
                  )}
                  <div className="p-5">
                    <h3 className="font-bold text-[#1a2b47] text-base mb-2">{svc.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
                    {cardUrl && (
                      <span className="inline-flex items-center gap-1 text-brand-teal text-xs font-semibold mt-3">
                        Learn more <span aria-hidden="true">&rarr;</span>
                      </span>
                    )}
                  </div>
                </>
              );
              return cardUrl ? (
                <a
                  id={svc.slug}
                  key={svc.title}
                  href={cardUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-brand-teal-100 rounded-3xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 block"
                >
                  {cardContent}
                </a>
              ) : (
                <div id={svc.slug} key={svc.title} className="bg-white border border-brand-teal-100 rounded-3xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                  {cardContent}
                </div>
              );
            })}
          </div>
          <p className="text-center text-slate-400 text-xs mt-6">Service availability varies by location. Contact our Intake Team to confirm the services currently available at your preferred center.</p>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-brand-teal text-sm font-bold uppercase tracking-widest mb-2">Insurance</div>
              <h2 className="text-3xl font-bold text-[#1a2b47] mb-4">Insurance Accepted at {address.city}</h2>
              <p className="text-slate-600 leading-relaxed mb-6">{insuranceText}</p>
              <img src={SHARED_ASSETS.insurance} alt="Horizon BCBS NJ — accepted at Bierman Autism Centers" className="rounded-2xl shadow-sm w-full max-w-xs object-contain" style={{ maxHeight: "80px" }} />
            </div>
            <div>
              <div className="grid grid-cols-3 gap-4">
                {INSURANCE_LOGOS.map((logo) => (
                  <div key={logo.alt} className="bg-slate-50 rounded-xl p-3 flex items-center justify-center border border-slate-100" style={{ height: "72px" }}>
                    <img src={logo.src} alt={logo.alt.replace("Bierman Autism Centers", `Bierman Autism Centers ${address.city}`)} className="max-h-10 w-auto object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-brand-teal text-sm font-bold uppercase tracking-widest mb-2">Location & Directions</div>
              <h2 className="text-3xl font-bold text-[#1a2b47] mb-4">Find Us in {address.city}</h2>
              <div className="bg-white border border-brand-teal-100 rounded-2xl p-6 shadow-sm mb-6">
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z"/><circle cx="10" cy="8" r="2"/></svg>
                    <div>
                      <div className="font-semibold text-[#1a2b47]">{entityName}</div>
                      <div className="text-slate-500">{address.street}</div>
                      <div className="text-slate-500">{address.city}, {address.state} {address.zip}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-brand-teal flex-shrink-0" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M3 5a2 2 0 012-2h2l2 4-1.5 1.5a11 11 0 005 5L14 12l4 2v2a2 2 0 01-2 2C7.163 18 2 12.837 2 7a2 2 0 012-2z"/></svg>
                    <a href={`tel:${phone}`} className="text-brand-teal-700 font-semibold hover:underline">{phone}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-brand-teal flex-shrink-0" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="10" cy="10" r="8"/><path d="M10 6v4l3 3" strokeLinecap="round"/></svg>
                    <span className="text-slate-600">{data.hoursDisplay}</span>
                  </div>
                </div>
              </div>
              <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-teal hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors shadow-sm">
                Get Directions →
              </a>
            </div>
            <div>
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100" style={{ height: "380px" }}>
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Bierman Autism Centers ${address.city} ${address.state} location map`}
                  aria-label={`Map showing location of Bierman Autism Centers in ${address.city}, ${address.state}`}
                />
              </div>
              <a href={gbpUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-teal-700 hover:text-brand-teal-800 text-sm font-medium mt-3 transition-colors">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #05C3DE 0%, #0f766e 100%)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-brand-teal-200 text-sm font-bold uppercase tracking-widest mb-2">Getting Started</div>
            <h2 className="text-3xl font-bold text-white">How to Begin Services at {address.city}</h2>
            <p className="text-brand-teal-100/80 mt-3 max-w-2xl mx-auto">Our intake process is designed to be straightforward and supportive for families.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Submit a Request", desc: "Complete our intake request form. A team member will contact you within 1–2 business days." },
              { step: "02", title: "Insurance Verification", desc: "We verify your insurance coverage and explain your benefits before any commitment." },
              { step: "03", title: "Initial Consultation", desc: "Meet with our clinical team to discuss your child's needs and goals." },
              { step: "04", title: "Begin Services", desc: "Your child's individualized program begins with ongoing family collaboration." },
            ].map((item) => (
              <div key={item.step} className="bg-white/15 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                <div className="text-brand-coral font-bold text-3xl mb-3 font-mono">{item.step}</div>
                <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="text-brand-teal-100/80 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={intakeUrl} target="_blank" rel="noopener noreferrer" className="bg-brand-coral hover:bg-brand-coral/90 text-white font-semibold px-10 py-4 rounded-full text-lg tracking-wide transition-colors inline-block shadow-lg">
              Start the Process →
            </a>
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-brand-teal text-sm font-bold uppercase tracking-widest mb-2">SAFETY &amp; SECURITY</div>
            <h2 className="text-3xl font-bold text-[#1a2b47] mb-4">Safety Systems Designed to Give Families Peace of Mind</h2>
            <p className="text-slate-500 max-w-3xl mx-auto text-base leading-relaxed">
              Families deserve to feel confident that their child's care is supported by secure access, prepared teams, thoughtful clinical safeguards, and clear communication.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              { icon: "🔒", title: "Secure Access", desc: "Electronic access control and visitor check-in procedures help ensure that only authorized individuals enter the center." },
              { icon: "✅", title: "Verified Pick-Up", desc: "A strict pick-up verification process helps ensure children are released only to approved caregivers." },
              { icon: "📹", title: "Recorded Oversight", desc: "Secure, recorded video surveillance in key areas adds transparency and supports the ability to review and respond to concerns." },
              { icon: "🩺", title: "Prepared Teams", desc: "Team members receive CPR, First Aid, and Safety-Care training within their first two weeks, with ongoing training throughout their careers." },
              { icon: "🧼", title: "Health &amp; Hygiene", desc: "Cleaning and infection-prevention practices help keep centers healthy and ready for learning." },
              { icon: "🚨", title: "Emergency Readiness", desc: "Teams regularly practice safety drills and follow established emergency response procedures." },
              { icon: "🔍", title: "Screened Staff", desc: "Team members complete pre-employment screening and clearance processes." },
              { icon: "💙", title: "Clinical Safety Practices", desc: "Evidence-based, compassionate care supports each learner in a secure, well-structured setting." },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#1a2b47] text-sm mb-2" dangerouslySetInnerHTML={{ __html: item.title }} />
                <p className="text-slate-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm max-w-2xl mx-auto italic">
            Safety isn't just a protocol. It's a promise. Every layer of protection is designed to support each child's well-being, progress, and family peace of mind.
          </p>
        </div>
      </section>

      {/* Video Section — Family Outcomes */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-brand-teal text-sm font-bold uppercase tracking-widest mb-2">FAMILY OUTCOMES</div>
          <h2 className="text-3xl font-bold text-[#1a2b47] mb-3">Progress You Can See</h2>
          <p className="text-slate-500 mb-8 max-w-2xl mx-auto">See how Bierman's individualized approach helps children build skills, confidence, and greater independence—with families supported at every step.</p>
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200" style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              src={PILOT_VIDEO.embedUrl}
              title={PILOT_VIDEO.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              aria-label={`YouTube video: ${PILOT_VIDEO.title}`}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
            />
          </div>
        </div>
      </section>

      {/* Review Themes */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-4">
            <div className="text-brand-teal text-sm font-bold uppercase tracking-widest mb-2">WHAT FAMILIES VALUE</div>
            <h2 className="text-3xl font-bold text-[#1a2b47]">{data.comingSoon ? "What Families Value About Bierman" : `What Families Value at ${address.city}`}</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
              {data.comingSoon
                ? "Families often highlight clear communication, supportive clinical guidance, and welcoming environments centered around each child."
                : "Families often highlight clear communication, supportive clinical guidance, and a welcoming environment centered around their child."}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: SHARED_ASSETS.themeBcbaGuidance, alt: `Supportive BCBA Guidance — families value hands-on clinical team communication at Bierman ${address.city}` },
              { src: SHARED_ASSETS.themeFamilyPartnership, alt: `Family Partnership — parents highlight clear communication and feeling known by the Bierman care team` },
              { src: SHARED_ASSETS.themeProgressFocused, alt: `Progress-Focused Support — individualized goals and steady progress at Bierman Autism Centers ${address.city} ${address.state}` },
            ].map((card) => (
              <div key={card.alt} className="overflow-hidden rounded-2xl shadow-sm bg-transparent">
                <img src={card.src} alt={card.alt} className="w-full h-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
{/* Real GBP Reviews */}
          <div className="mt-14">
            <div className="text-center mb-10">
              <div className="text-brand-teal text-sm font-bold uppercase tracking-widest mb-2">Google Reviews</div>
              <h3 className="text-2xl font-bold text-[#1a2b47]">What Families Are Saying</h3>
              <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">Real reviews from families at {entityName}.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviews.map((r) => <GBPReviewCard key={r.slug} review={r} />)}
            </div>
</div>
        </div>
      </section>

      {/* Education to Action */}
      <section className="py-20 border-t border-slate-100" style={{ background: "linear-gradient(180deg, #f8fffe 0%, #ffffff 100%)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <div className="inline-block bg-brand-teal-50 border border-brand-teal-200 text-brand-teal-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Parent Resource Pathway</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b47] leading-tight">Understanding Autism Support Near {address.city}</h2>
            <p className="text-slate-500 mt-4 text-base leading-relaxed">
              Families often start with questions before they start services. These resources connect common questions to local support available in {address.county}.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {[
              { title: "What is ABA Therapy?", copy: "ABA therapy uses structured, evidence-based techniques to build communication, social, and daily living skills in children with autism.", url: "https://www.biermanautism.com/aba-therapy-services/", linkLabel: "Learn about ABA →", icon: <IconABA /> },
              { title: "What is ASD?", copy: "Autism Spectrum Disorder (ASD) describes a range of developmental differences. Understanding your child's profile is the first step toward the right support.", url: "https://www.biermanautism.com/autism-101/", linkLabel: "Autism 101 →", icon: <IconDiag /> },
              { title: "What is Level 1 Autism?", copy: "Level 1 autism (formerly Asperger's) describes individuals who require some support. Many families search for clarity on what this means for their child.", url: "https://www.biermanautism.com/resources/blog/autism-level-1/", linkLabel: "Level 1 Autism →", icon: <IconSpeech /> },
              { title: "Can Autism Be Cured?", copy: "Autism is not something to cure. Support focuses on helping each child build skills, independence, and confidence over time.", url: "https://www.biermanautism.com/autism-101/can-autism-be-cured/", linkLabel: "Read more →", icon: <IconOT /> },
              { title: "Caregiver Training", copy: "Bierman offers caregiver training resources to help families support communication, daily routines, and behavior management at home.", url: "https://www.biermanautism.com/resources/caregiver-training/", linkLabel: "Caregiver resources →", icon: <IconABA /> },
              { title: "ASD vs Autism", copy: "Many families ask whether ASD and autism are the same thing. This resource explains the terminology and what it means for your child's care.", url: "https://www.biermanautism.com/resources/blog/asd-vs-autism/", linkLabel: "ASD vs Autism →", icon: <IconDiag /> },
            ].map((card) => (
              <div key={card.title} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col gap-2">
                <div className="flex items-center gap-3 mb-1">
                  {card.icon}
                  <h3 className="font-bold text-[#1a2b47] text-sm leading-snug">{card.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{card.copy}</p>
                <a href={card.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-brand-teal font-semibold text-xs hover:text-brand-teal-800 transition-colors mt-1">
                  {card.linkLabel} <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-100">
            <span className="text-slate-400 text-xs font-semibold uppercase tracking-wide mr-1">Quick links:</span>
            {[
              { label: "Autism 101", url: "https://www.biermanautism.com/autism-101/" },
              { label: "Level 1 Autism", url: "https://www.biermanautism.com/resources/blog/autism-level-1/" },
              { label: "ASD vs Autism", url: "https://www.biermanautism.com/resources/blog/asd-vs-autism/" },
              { label: "Can Autism Be Cured?", url: "https://www.biermanautism.com/autism-101/can-autism-be-cured/" },
              { label: "Caregiver Training", url: "https://www.biermanautism.com/resources/caregiver-training/" },
              { label: "ABA Therapy Services", url: "https://www.biermanautism.com/aba-therapy-services/" },
            ].map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="text-brand-teal-700 text-xs font-medium hover:underline underline-offset-2">{link.label}</a>
            ))}
            <span className="text-slate-200 mx-1">|</span>
</div>
        </div>
      </section>

      {/* Caregiver Training */}
      <section className="py-20 border-t border-slate-100" style={{ background: "linear-gradient(135deg, #f0fdfa 0%, #ecfdf5 50%, #f8fffe 100%)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-80 flex-shrink-0">
              <div className="inline-block bg-white border border-brand-teal-200 text-brand-teal-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Caregiver Support</div>
              <h2 className="text-3xl font-bold text-[#1a2b47] leading-tight mb-4">Support for Families at Home</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">Care does not stop when a child leaves the clinic. Bierman's caregiver training resources help families understand communication, daily routines, independence, and behavior support.</p>
              <a href="https://www.biermanautism.com/resources/caregiver-training/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-teal hover:bg-teal-700 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-colors shadow-sm">
                Caregiver Training Resources <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="flex-1 grid sm:grid-cols-2 gap-4">
              {[
                { title: "Functional Communication", copy: "Support children in expressing needs, building communication routines, and reducing frustration at home." },
                { title: "Building Independence", copy: "Support daily living skills, routines, and independence outside the therapy setting." },
                { title: "Managing Behaviors at Home", copy: "Understand behavior, create supportive routines, and work alongside your child's care team." },
                { title: "School & Routine Transitions", copy: "Navigate transitions between therapy, school, and home routines with guidance from Bierman's clinical team." },
              ].map((card) => (
                <div key={card.title} className="bg-white rounded-2xl p-5 shadow-sm border border-white hover:shadow-md transition-all duration-200 flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7" aria-hidden="true"><circle cx="18" cy="18" r="14" fill="#ccfbf1" stroke="#05C3DE" strokeWidth="2"/><path d="M11 21l4-4 3 3 7-7" stroke="#05C3DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a2b47] text-sm mb-1">{card.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{card.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Leadership */}
      <section className="py-20 bg-[#1a2b47]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-96 flex-shrink-0">
              <div className="inline-block bg-brand-teal-500/20 border border-teal-400/30 text-brand-teal-200 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">New Jersey Clinical Leadership</div>
              <h2 className="text-3xl font-bold text-white leading-tight mb-4">The Team Behind Your Child's Care</h2>
              <p className="text-slate-300 text-sm leading-relaxed">Bierman's New Jersey centers are supported by experienced clinical leaders who guide care quality, staff development, and family-centered service delivery across the region.</p>
              <div className="mt-6 flex items-center gap-2">
                <img src={SHARED_ASSETS.mascot} alt="Pilot the Penguin — Bierman mascot" className="w-10 h-10 object-contain" />
                <span className="text-brand-teal-200 text-xs font-medium">Bierman Autism Centers · New Jersey</span>
              </div>
            </div>
            <div className="flex-1 grid sm:grid-cols-2 gap-6">
              {clinicalLeadership.map((person) => (
                <div key={person.name} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/8 transition-all duration-200">
                  <div className="relative">
                    <img src={person.headshot} alt={`${person.name}, ${person.credentials} — ${person.role}, Bierman Autism Centers`} className="w-full aspect-square object-cover object-top" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b47]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <div className="text-white font-bold text-base leading-tight">{person.name}</div>
                      <div className="text-brand-teal-200 text-xs font-semibold">{person.credentials}</div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-slate-300 text-sm font-semibold mb-1">{person.role.split(" · ")[0]}</div>
                    <div className="text-slate-400 text-xs mb-4">{person.role.split(" · ")[1] ?? "New Jersey"}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {person.tags.map((tag) => (
                        <span key={tag} className="bg-brand-teal-500/15 border border-teal-400/20 text-brand-teal-200 text-xs px-2.5 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Locations */}
      <section className="py-12 border-y border-slate-100" style={{ background: "linear-gradient(180deg, #f8fffe 0%, #f0fdfa 100%)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="text-brand-teal text-sm font-bold uppercase tracking-widest mb-2">Other New Jersey Locations</div>
            <h2 className="text-2xl font-bold text-[#1a2b47]">More Bierman Centers Near You</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {nearby.map((loc) => (
              <a key={loc.name} href={loc.url} className="bg-white border border-brand-teal-200 hover:border-teal-400 hover:bg-brand-teal-50 text-[#1a2b47] font-medium px-5 py-2.5 rounded-xl text-sm transition-colors shadow-sm">
                📍 {loc.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-brand-teal text-sm font-bold uppercase tracking-widest mb-2">FAQ</div>
            <h2 className="text-3xl font-bold text-[#1a2b47]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #f0fdfa 0%, #e0f7f4 50%, #fef9f0 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a2b47]">Ready to Get Started in {address.city}?</h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step toward individualized autism support for your child. Our {address.city} team is here to guide your family through every stage of the process.
          </p>
          <a href={intakeUrl} target="_blank" rel="noopener noreferrer" className="bg-brand-coral hover:bg-brand-coral/90 text-white font-semibold px-12 py-5 rounded-full text-xl tracking-wide transition-colors inline-block shadow-lg">
            Request Services in {address.city} →
          </a>
</div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2b47] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src={SHARED_ASSETS.footerLogo} alt="Bierman Autism Centers" className="h-12 w-auto mb-4" />
              <p className="text-white/60 text-sm leading-relaxed">Bierman Autism Centers provides evidence-based ABA therapy and autism support services for children and families across 34 locations nationwide.</p>
            </div>
            <div>
              <div className="font-bold text-white mb-3">{address.city} Location</div>
              <div className="text-white/60 text-sm space-y-1">
                <div>{address.street}</div>
                <div>{address.city}, {address.state} {address.zip}</div>
                <div><a href={`tel:${phone}`} className="hover:text-white transition-colors">{phone}</a></div>
                <div className="text-white/40 text-xs mt-2">Verified Bierman Location · {address.county}</div>
              </div>
            </div>
            <div>
              <div className="font-bold text-white mb-3">Services</div>
              <div className="text-white/60 text-sm space-y-1">
                {(FOOTER_SERVICE_URLS[data.slug] || FOOTER_SERVICE_URLS["_default"]).map((svc) => (
                  <div key={svc.label}><a href={svc.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{svc.label}</a></div>
                ))}
              </div>
            </div>
          </div>
          {/* Healthcare Disclaimer */}
          <HealthcareDisclaimer variant="footer" />

          {/* Legal trust row */}
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

      {/* Mobile sticky action row */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-slate-200 shadow-lg">
        <div className="flex items-stretch">
          <a href={intakeUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center gap-0.5 py-3 bg-brand-coral hover:bg-brand-coral/90 text-white text-xs font-semibold transition-colors">
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M10 2a8 8 0 100 16A8 8 0 0010 2z"/><path d="M10 7v6M7 10h6" strokeLinecap="round"/></svg>
            Request Services
          </a>
          <a href={`tel:${phone}`} className="flex-1 flex flex-col items-center justify-center gap-0.5 py-3 bg-brand-teal hover:bg-teal-700 text-white text-xs font-semibold transition-colors border-x border-teal-700">
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M3 5a2 2 0 012-2h2l2 4-1.5 1.5a11 11 0 005 5L14 12l4 2v2a2 2 0 01-2 2C7.163 18 2 12.837 2 7a2 2 0 012-2z"/></svg>
            Call
          </a>
          <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center gap-0.5 py-3 bg-slate-700 hover:bg-slate-800 text-white text-xs font-semibold transition-colors">
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z"/><circle cx="10" cy="8" r="2"/></svg>
            Directions
          </a>
        </div>
      </div>

      {/* Mobile sticky row spacer */}
      <div className="h-16 md:hidden" aria-hidden="true" />

    </div>
  );
}
