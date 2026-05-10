/**
 * Bierman Autism Centers — Proof Layer
 * Location Data: Princeton, NJ
 *
 * Source of truth for all Princeton-specific variables.
 * Consumed by LocationPage renderer and buildLocationSchema utility.
 *
 * NAP status: Confirmed from GBP listing (May 2026)
 * Address: 746 Alexander Rd, Princeton, NJ 08540
 * Phone: (267) 508-7941
 * Reviews: 2 real public GBP reviews with text, sourced May 2026
 */

import type { LocationData } from "../types";

export const princetonData: LocationData = {
  // ── Identity ──────────────────────────────────────────────────────────────
  slug: "princeton",
  displayName: "Princeton, NJ",
  entityName: "Bierman Autism Centers — Princeton",

  // ── NAP ───────────────────────────────────────────────────────────────────
  address: {
    street: "746 Alexander Rd",
    city: "Princeton",
    state: "NJ",
    zip: "08540",
    county: "Mercer County",
  },
  phone: "(267) 508-7941",
  geo: {
    lat: 40.3419,
    lng: -74.6630,
  },

  // ── URLs ──────────────────────────────────────────────────────────────────
  intakeUrl: "https://www.biermanautism.com/start-now/?loc=princeton-nj",
  gbpUrl: "https://www.google.com/maps/place/Bierman+Autism+Centers+-+Princeton",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.0!2d-74.6630!3d40.3419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s746+Alexander+Rd%2C+Princeton%2C+NJ+08540!5e0!3m2!1sen!2sus!4v1620000000004",

  // ── Hours ─────────────────────────────────────────────────────────────────
  hoursDisplay: "Monday–Friday, 8:30 AM – 6:00 PM",
  openingHours: "Mo-Fr 08:30-18:00",

  // ── Video ─────────────────────────────────────────────────────────────────
  youtubeId: "QFufx0pye4U",
  videoTitle: "Inside Our Princeton, NJ Autism Center (A Safe & Fun Tour for Parents)",
  videoDescription:
    "A parent-facing tour of the Bierman Autism Centers clinic in Princeton, New Jersey. See the therapy spaces, meet the team, and learn about ABA therapy services.",

  // ── Content ───────────────────────────────────────────────────────────────
  heroDescription:
    "Bierman Autism Centers in Princeton provides individualized ABA therapy, speech-language therapy, occupational therapy, and diagnostic evaluations for children with autism. Serving Mercer County and surrounding New Jersey communities.",
  insuranceText:
    "Bierman Princeton accepts most major insurance plans. We work with families to verify coverage and navigate the insurance process. Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others are accepted.",

  // ── Reviews ───────────────────────────────────────────────────────────────
  reviews: [
    {
      slug: "paradise",
      name: "Paradise",
      meta: "Local Guide · 147 reviews · 210 photos",
      date: "6 months ago",
      stars: 5,
      text: "This place is everything autism! Someone told us about it — we have an autistic grandson and nephew. It's not only a school; Bierman also finds different ways to involve the community through various events, whether it be a holiday or something extra for enjoyment. Thank you Bierman Team!",
      initials: "P",
      avatarColor: "#7c3aed",
    },
    {
      slug: "klassydolly",
      name: "KlassyDolly",
      meta: "11 reviews · 2 photos",
      date: "1 year ago",
      stars: 5,
      text: "My babies had so much fun at the Bierman Trunk O Treat! All the teachers got dressed up and handed out candies to all the kids! It was very sweet!",
      initials: "K",
      avatarColor: "#ea580c",
    },
    {
      slug: "bierman-parent-princeton-1",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "2024",
      stars: 5,
      text: "I can't thank the Bierman team enough. Our child was there for 4 years, beginning at age 20 months. We didn't know what ABA was at all prior to starting. Now he is thriving in public school, chattering away about his favorite dinosaurs.",
      initials: "BP",
      avatarColor: "#2563eb",
    },
    {
      slug: "bierman-parent-princeton-2",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "2024",
      stars: 5,
      text: "This place saved my son's and my family's lives. They have extremely high-quality care, communication, problem-solving, support, environment, and staff. Everything and every experience we had with Bierman was top-notch.",
      initials: "BP",
      avatarColor: "#16a34a",
    },
  ],

  // ── FAQs ──────────────────────────────────────────────────────────────────
  faqs: [
    {
      q: "Does Bierman Autism Centers in Princeton accept insurance?",
      a: "Yes. Bierman Princeton accepts most major insurance plans including Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others. Contact us to verify your specific coverage.",
    },
    {
      q: "What age groups does the Princeton center serve?",
      a: "The Princeton center serves children from early intervention age through adolescence. Services are individualized based on each child's needs and developmental stage.",
    },
    {
      q: "How do I get started with services at the Princeton location?",
      a: "The first step is completing our intake request. A member of our team will contact you to discuss your child's needs, verify insurance, and schedule an initial consultation.",
    },
    {
      q: "Where is the Bierman Autism Centers Princeton clinic located?",
      a: "The Princeton clinic is located at 746 Alexander Rd, Princeton, NJ 08540, serving families in Mercer County and surrounding areas.",
    },
    {
      q: "What is ABA therapy and how does it help children with autism?",
      a: "Applied Behavior Analysis (ABA) is a scientifically validated approach that uses structured techniques to teach skills and reduce challenging behaviors. It is individualized to each child's goals and delivered by trained therapists.",
    },
    {
      q: "Is ABA therapy available near Princeton, NJ?",
      a: "Yes. Bierman Autism Centers operates a clinic in Princeton, NJ at 746 Alexander Rd, providing ABA therapy to families in Mercer County, Somerset County, and surrounding communities including Trenton, Hamilton, and Lawrence Township.",
    },
    {
      q: "Does Bierman Princeton offer speech therapy for children with autism?",
      a: "Yes. Speech-language therapy is available at the Princeton center, delivered by licensed speech-language pathologists as part of a coordinated care plan.",
    },
    {
      q: "Does Bierman Princeton offer occupational therapy?",
      a: "Yes. Occupational therapy services are available at the Princeton location, focusing on sensory integration, fine motor skills, and daily living activities.",
    },
  ],

  // ── Nearby ────────────────────────────────────────────────────────────────
  nearby: [
    { name: "Piscataway, NJ", url: "/locations/nj/piscataway/" },
    { name: "Cranford, NJ", url: "/locations/nj/cranford/" },
    { name: "Eatontown, NJ", url: "/locations/nj/eatontown/" },
    { name: "Berkeley Heights, NJ", url: "/locations/nj/berkeley-heights/" },
    { name: "Parsippany, NJ", url: "/locations/nj/parsippany/" },
    { name: "All 33 Locations →", url: "#" },
  ],

  // ── Clinical Leadership ───────────────────────────────────────────────────
  clinicalLeadership: [
    {
      name: "Victoria Verdun",
      credentials: "Ph.D., BCBA-D, LBA",
      role: "Director of Clinical Excellence · New Jersey",
      headshot: "/manus-storage/bierman-team-victoria-verdun_4dbdee42.webp",
      tags: ["Clinical Excellence", "BCBA Supervision", "Caregiver Training", "ABA Therapy"],
    },
    {
      name: "Hillary Genovese",
      credentials: "M.A., BCBA",
      role: "Director of Services · New Jersey",
      headshot: "/manus-storage/bierman-team-hillary-genovese_19abd385.webp",
      tags: ["Service Delivery", "BCBA Supervision", "ABA Therapy", "New Jersey"],
    },
  ],

  // ── Assets ────────────────────────────────────────────────────────────────
  assets: {
    facility: "/manus-storage/bierman-autism-new-jersey-ramsey-facility-main_296feafd.webp",
    facilityAlt: "Bierman Autism Centers Princeton, NJ — clinic interior",
    videoPoster: "/manus-storage/bierman-ramsey-video-poster_28eb470d.jpg",
  },

  // ── Schema ────────────────────────────────────────────────────────────────
  schema: {
    pageUrl: "https://bierman-proof-layer.manus.space/locations/nj/princeton/",
    baseId: "https://bierman-proof-layer.manus.space/locations/nj/princeton/",
    pageTitle: "ABA Therapy in Princeton, NJ | Bierman Autism Centers",
    pageDescription:
      "Bierman Autism Centers in Princeton, NJ provides individualized ABA therapy, speech-language therapy, occupational therapy, and diagnostic evaluations for children with autism. Serving Mercer County and surrounding New Jersey communities.",
    videoUploadDate: "2023-10-19T00:00:00+00:00",
    areaServed: [
      { type: "AdministrativeArea", name: "Mercer County, NJ" },
      { type: "AdministrativeArea", name: "Somerset County, NJ" },
      { type: "City", name: "Princeton, NJ" },
      { type: "City", name: "Trenton, NJ" },
      { type: "City", name: "Hamilton, NJ" },
      { type: "City", name: "Lawrence Township, NJ" },
    ],
  },
};
