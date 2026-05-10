/*
 * Bierman Autism Centers — Proof Layer
 * Ramsey, NJ Location Page — Visual Redesign v3
 *
 * Design: Warm pediatric healthcare — family-centered, light, and welcoming
 * - Warm off-white / light aqua backgrounds (no heavy dark navy dominance)
 * - Soft teal (#0d9488) brand accent
 * - Warm orange (#f97316) CTA
 * - Navy (#1a2b47) used sparingly for headings and footer only
 * - Rounded cards, generous whitespace, playful-but-polished SVG icons
 *
 * PROOF LAYER — NOT PRODUCTION
 * noindex, nofollow | No tracking | No live forms | No patient data
 *
 * DISMISSIBLE NOTICES:
 * - Top banner: sessionStorage key "pl_banner_dismissed"
 * - Video notice: sessionStorage key "pl_video_notice_dismissed"
 * - Reviews notice: sessionStorage key "pl_reviews_notice_dismissed"
 *
 * PREVIEW MODE:
 * ?preview=clean hides all proof-layer banners and inline notices.
 * noindex/nofollow and all safety guardrails remain active in all modes.
 * Review cards in clean mode show neutral skeleton architecture (no fake text).
 */
import { useState, useEffect } from "react";

// All image assets — normalized and served from Manus CDN
// Source: biermanautism.com/wp-content/uploads/ (read-only download, no hotlinks)
// Generated: Speech-Language Therapy + Diagnostic Evaluation cards (AI-generated, Bierman style reference)

const TRUST_BADGES = [
  { src: "/manus-storage/bierman-trust-group-of-year-2022_866c3645.webp", alt: "Group of the Year 2022 Award" },
  { src: "/manus-storage/bierman-trust-bacb-ace-provider_f1995271.webp", alt: "BACB ACE Authorized Continuing Education Provider" },
  { src: "/manus-storage/bierman-trust-casp-member_7cc1f427.webp", alt: "CASP — Council of Autism Service Providers Member" },
];

// Insurance logos — normalized 320x112 artboard, served from Manus CDN
// Source: biermanautism.com/wp-content/uploads/ (read-only download, no hotlinks)
const INSURANCE_LOGOS = [
  { src: "/manus-storage/bierman-insurance-aetna_f6d238ed.webp", alt: "Aetna health insurance — accepted at Bierman Autism Centers Ramsey" },
  { src: "/manus-storage/bierman-insurance-ambetter_34baba91.webp", alt: "Ambetter health insurance — accepted at Bierman Autism Centers Ramsey" },
  { src: "/manus-storage/bierman-insurance-carelon_4a70fbdd.webp", alt: "Carelon health insurance — accepted at Bierman Autism Centers Ramsey" },
  { src: "/manus-storage/bierman-insurance-cigna_1c21165d.webp", alt: "Cigna health insurance — accepted at Bierman Autism Centers Ramsey" },
  { src: "/manus-storage/bierman-insurance-compsych_657fa980.webp", alt: "ComPsych health insurance — accepted at Bierman Autism Centers Ramsey" },
  { src: "/manus-storage/bierman-insurance-meritain-health_bc730b51.webp", alt: "Meritain Health insurance — accepted at Bierman Autism Centers Ramsey" },
  { src: "/manus-storage/bierman-insurance-surest_3872fe70.webp", alt: "Surest health insurance — accepted at Bierman Autism Centers Ramsey" },
  { src: "/manus-storage/bierman-insurance-umr_9c11ff1b.webp", alt: "UMR health insurance — accepted at Bierman Autism Centers Ramsey" },
  { src: "/manus-storage/bierman-insurance-united-healthcare_0b5b310b.webp", alt: "United Healthcare — accepted at Bierman Autism Centers Ramsey" },
];

const ASSETS = {
  logo: "/manus-storage/bierman-logo-anniversary-20_3f19246b.webp",
  facility: "/manus-storage/bierman-autism-new-jersey-ramsey-facility-main_296feafd.webp",
  speechTherapy: "/manus-storage/bierman-autism-speech-therapy-room_5813b4e7.jpg",
  mascot: "/manus-storage/bierman-brand-nj-penguin-accent_64e9cbdd.webp",  // NJ-specific Pilot the Penguin
  insurance: "/manus-storage/bierman-autism-insurance-horizon-bcbs-new-jersey_8162212b.webp",
  videoPoster: "/manus-storage/bierman-ramsey-video-poster_28eb470d.jpg",
  video: "/manus-storage/bierman-ramsey-aba-therapy-overview_e3501ef2.mp4",
  // Clinical leadership headshots — public Bierman team images; pilot use only; final production use requires Bierman approval
  hillaryGenovese: "/manus-storage/bierman-team-hillary-genovese_19abd385.webp",
  victoriaVerdun: "/manus-storage/bierman-team-victoria-verdun_4dbdee42.webp",
  // Theme card images — AI-generated, Bierman-style, uploaded to CDN May 2026
  themeBcbaGuidance: "/manus-storage/theme-card-bcba-guidance_f4421e19.png",
  themeFamilyPartnership: "/manus-storage/theme-card-family-partnership_7fd858a1.png",
  themeProgressFocused: "/manus-storage/theme-card-progress-focused_1582d40e.png",
  // GBP review cards — generated clean cards (no Google UI chrome), sourced from public GBP reviews May 2026
  reviewAmbar: "/manus-storage/review-card-ambar-arias_177ebd2e.png",
  reviewMargarita: "/manus-storage/review-card-margarita-morales_daa459c7.png",
  reviewAnthony: "/manus-storage/review-card-anthony-siciliano_3154ff04.png",
  reviewSohayb: "/manus-storage/review-card-sohayb-stiti_2dcabb38.png",
  reviewKim: "/manus-storage/review-card-kim-sedlacek_cebe096c.png",
  reviewNancy: "/manus-storage/review-card-nancy-passano_8e1e75d6.png",
};

const LOCATION = {
  name: "Ramsey, NJ",
  address: "500 N Franklin Tpke, Ste 203",
  city: "Ramsey",
  state: "NJ",
  zip: "07446",
  phone: "(201) 596-8104",
  county: "Bergen County",
  intakeUrl: "https://www.biermanautism.com/start-now/?loc=ramsey-nj",
  gbpUrl: "https://www.google.com/maps/place/Bierman+Autism+Centers+-+Ramsey",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.5!2d-74.1441!3d41.0579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s500+N+Franklin+Tpke%2C+Ramsey%2C+NJ+07446!5e0!3m2!1sen!2sus!4v1620000000000",
};

const NEARBY = [
  { name: "Piscataway, NJ", url: "/locations/nj/piscataway/" },
  { name: "West Orange, NJ", url: "#" },
  { name: "Princeton, NJ", url: "#" },
  { name: "Cranford, NJ", url: "#" },
  { name: "Parsippany, NJ", url: "#" },
  { name: "All 33 Locations →", url: "#" },
];

// SVG icons — consistent, playful, no emoji
const IconABA = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="24" cy="24" r="22" fill="#ccfbf1" />
    <path d="M16 32c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="24" cy="18" r="5" stroke="#0d9488" strokeWidth="2.5"/>
    <path d="M20 26l-4 6M28 26l4 6" stroke="#0d9488" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconSpeech = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="24" cy="24" r="22" fill="#ccfbf1" />
    <path d="M14 20c0-5.523 4.477-10 10-10s10 4.477 10 10c0 4.418-2.86 8.166-6.857 9.497L26 34h-4l-.857-4.503C17.146 28.166 14 24.418 14 20z" stroke="#0d9488" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M20 20h8M20 24h5" stroke="#0d9488" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconOT = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="24" cy="24" r="22" fill="#ccfbf1" />
    <path d="M18 28c0-3.314 2.686-6 6-6s6 2.686 6 6v4H18v-4z" stroke="#0d9488" strokeWidth="2.5" strokeLinejoin="round"/>
    <circle cx="24" cy="18" r="3.5" stroke="#0d9488" strokeWidth="2.5"/>
    <path d="M14 36h20" stroke="#0d9488" strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 28h2M32 28h2" stroke="#0d9488" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconDiag = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="24" cy="24" r="22" fill="#ccfbf1" />
    <rect x="14" y="13" width="20" height="24" rx="3" stroke="#0d9488" strokeWidth="2.5"/>
    <path d="M19 20h10M19 25h10M19 30h6" stroke="#0d9488" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="5" fill="#ccfbf1" stroke="#f97316" strokeWidth="2"/>
    <path d="M32 30v4M30 32h4" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SERVICES = [
  {
    title: "ABA Therapy",
    desc: "Applied Behavior Analysis — individualized, evidence-based therapy designed to build communication, social, and daily living skills.",
    icon: <IconABA />,
    img: "/manus-storage/bierman-service-aba-therapy-card_d7ddabc1.webp",
    link: "#",
  },
  {
    title: "Speech-Language Therapy",
    desc: "Targeted speech and language support to help children communicate more effectively and confidently.",
    icon: <IconSpeech />,
    img: "https://d2xsxph8kpxj0f.cloudfront.net/91389010/QxDhxTcSVFBCVe6sC7dKv5/bierman-service-speech-language-therapy-card-U56PgjdAJCh3qfqqeXDCyK.webp",
    link: "#",
  },
  {
    title: "Occupational Therapy",
    desc: "Sensory integration, fine motor skills, and daily living activities to support independence and engagement.",
    icon: <IconOT />,
    img: "/manus-storage/bierman-service-occupational-therapy-card_2cffd7a2.webp",
    link: "#",
  },
  {
    title: "Diagnostic Evaluation",
    desc: "Comprehensive autism diagnostic evaluations by licensed clinicians, with results and recommendations for families.",
    icon: <IconDiag />,
    img: "https://d2xsxph8kpxj0f.cloudfront.net/91389010/QxDhxTcSVFBCVe6sC7dKv5/bierman-service-diagnostic-evaluation-card-7MEyR3pXUm3dwqH5E9PnMK.webp",
    link: "#",
  },
];

const FAQS = [
  {
    q: "Does Bierman Autism Centers in Ramsey accept insurance?",
    a: "Yes. Bierman Ramsey accepts most major insurance plans including Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others. Contact us to verify your specific coverage.",
  },
  {
    q: "What age groups does the Ramsey center serve?",
    a: "The Ramsey center serves children from early intervention age through adolescence. Services are individualized based on each child's needs and developmental stage.",
  },
  {
    q: "How do I get started with services at the Ramsey location?",
    a: "The first step is completing our intake request. A member of our team will contact you to discuss your child's needs, verify insurance, and schedule an initial consultation.",
  },
  {
    q: "Where is the Bierman Autism Centers Ramsey clinic located?",
    a: "The Ramsey clinic is located at 500 N Franklin Tpke, Suite 203, Ramsey, NJ 07446, serving families in Bergen County and surrounding areas.",
  },
  {
    q: "What is ABA therapy and how does it help children with autism?",
    a: "Applied Behavior Analysis (ABA) is a scientifically validated approach that uses structured techniques to teach skills and reduce challenging behaviors. It is individualized to each child's goals and delivered by trained therapists.",
  },
  {
    q: "Is ABA therapy available near Ramsey, NJ?",
    a: "Yes. Bierman Autism Centers operates a clinic in Ramsey, NJ at 500 N Franklin Tpke, Ste 203, providing ABA therapy to families in Bergen County, Passaic County, and surrounding communities including Mahwah, Ridgewood, and Paramus.",
  },
  {
    q: "Does Bierman Ramsey offer speech therapy for children with autism?",
    a: "Yes. Speech-language therapy is available at the Ramsey location. Bierman's speech-language services support children in developing communication skills, including verbal language and social communication.",
  },
  {
    q: "Does Bierman Ramsey offer occupational therapy for children with autism?",
    a: "Yes. Occupational therapy is available at the Ramsey clinic. Services focus on fine motor skills, sensory processing, and building daily living independence in a supportive environment.",
  },
  {
    q: "Does Bierman Ramsey offer diagnostic evaluations for autism?",
    a: "Yes. Bierman Ramsey offers comprehensive diagnostic evaluations to help families understand their child's developmental profile and determine appropriate next steps for support and therapy.",
  },
  {
    q: "Does Bierman serve families in Bergen County?",
    a: "Yes. The Ramsey clinic is located in Bergen County and serves families throughout Bergen County, Passaic County, and surrounding New Jersey communities including Mahwah, Ridgewood, Paramus, and nearby towns.",
  },
  {
    q: "How do I start autism services near me in Ramsey, NJ?",
    a: "Contact the Ramsey center directly or submit an intake request online. A member of our team will reach out to discuss your child's needs, verify insurance coverage, and guide you through next steps.",
  },
  {
    q: "Does Bierman offer caregiver training resources?",
    a: "Yes. Bierman offers caregiver training resources to help families support communication, daily routines, independence, and behavior management at home. These resources are designed to extend the impact of therapy beyond the clinic.",
  },
  {
    q: "What is ASD?",
    a: "ASD stands for Autism Spectrum Disorder. It describes a range of developmental differences that can affect communication, social interaction, behavior, and learning. Every child on the spectrum has unique strengths and support needs.",
  },
  {
    q: "What is Level 1 autism?",
    a: "Level 1 autism, formerly referred to as Asperger's syndrome, describes individuals who require some support. GSC data indicates strong search demand around this topic, reflecting that many families are seeking clarity about what Level 1 autism means for their child.",
  },
  {
    q: "Can autism be cured?",
    a: "Autism is not something to cure. Support focuses on helping each child build communication skills, independence, and confidence over time. ABA therapy, speech therapy, and occupational therapy can all play a meaningful role in a child's development.",
  },
  {
    q: "How can ABA therapy support communication and independence?",
    a: "ABA therapy uses individualized goals and structured support to help children build communication, daily living, social, and learning skills. Programs are tailored to each child's developmental profile and delivered by trained, BCBA-supervised therapists.",
  },
];

// ─── GBP Review Data ──────────────────────────────────────────────────────────
// Source: Google Business Profile — public reviews, Bierman Autism Centers — Ramsey, NJ
// Sourced May 2026. Used for proof-layer review purposes only.
const GBP_REVIEWS = [
  {
    slug: "ambar-arias",
    name: "Ambar Arias",
    meta: "Local Guide · 31 reviews",
    date: "8 weeks ago",
    stars: 5,
    text: "If I could give this center 10 stars, I would!! My son has been here for a little over a year, and I am beyond thankful for all the help he has received. I would like to thank all of the therapists, aides, and clinical directors who contributed to my son's progress and positive evolution. I would highly recommend this center to anyone who is looking to get their child more support with therapies. It has personally been one of the best decisions I've made for my son's ADS journey.",
    initials: "AA",
    avatarColor: "#ea580c",
    theme: "progress",
  },
  {
    slug: "sohayb-stiti",
    name: "Sohayb Stiti",
    meta: "Local Guide · 17 reviews",
    date: "13 weeks ago",
    stars: 5,
    text: "I would like to express my gratitude to Dr. Catherine Lark, who was incredibly helpful during our son's assessment. She was professional, kind, and very knowledgeable. She took the time to explain everything clearly and truly listened to our concerns as parents. We felt supported and confident throughout the process.",
    initials: "SS",
    avatarColor: "#7c3aed",
    theme: "clinical",
  },
  {
    slug: "kim-sedlacek",
    name: "Kim Sedlacek",
    meta: "Local Guide · 13 reviews",
    date: "41 weeks ago",
    stars: 5,
    text: "The Practice Manager, Kelsey, and all the Behavior Technicians are very knowledgeable and caring. They are making a huge difference for the children they serve.",
    initials: "KS",
    avatarColor: "#0d9488",
    theme: "staff",
  },
  {
    slug: "margarita-morales",
    name: "Margarita Morales",
    meta: "6 reviews",
    date: "8 weeks ago",
    stars: 5,
    text: "Staff was great! Nice experience! Thank you",
    initials: "MM",
    avatarColor: "#2563eb",
    theme: "environment",
  },
  {
    slug: "anthony-siciliano",
    name: "Anthony Siciliano",
    meta: "Local Guide · 33 reviews",
    date: "8 weeks ago",
    stars: 5,
    text: "Went here for a public event — nice, clean center and friendly staff :)",
    initials: "AS",
    avatarColor: "#16a34a",
    theme: "environment",
  },
  {
    slug: "nancy-passano",
    name: "Nancy Passano",
    meta: "5 reviews",
    date: "Mar 10, 2025",
    stars: 5,
    text: "Amazing experience at the Reptile Encounter — our son loved seeing and touching all the reptiles. Such a great family event!",
    initials: "NP",
    avatarColor: "#db2777",
    theme: "community",
  },
];

const TRUNCATE_THRESHOLD = 160;

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < count ? "#f59e0b" : "none"}
          stroke={i < count ? "#f59e0b" : "#d1d5db"}
          strokeWidth="1.5"
          className="w-4 h-4"
          aria-hidden="true"
        >
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

function GBPReviewCard({ review }: { review: typeof GBP_REVIEWS[0] }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > TRUNCATE_THRESHOLD;
  const displayText = isLong && !expanded
    ? review.text.slice(0, TRUNCATE_THRESHOLD).trimEnd() + "\u2026"
    : review.text;

  return (
    <article
      className="flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-6"
    >
      {/* Avatar + Name row */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 select-none"
          style={{ backgroundColor: review.avatarColor }}
          aria-hidden="true"
        >
          {review.initials}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-[#1a2b47] text-sm leading-tight truncate">
            {review.name}
          </p>
          <p className="text-slate-400 text-xs mt-0.5 truncate">{review.meta}</p>
        </div>
      </div>

      {/* Stars + date */}
      <div className="flex items-center gap-3 mb-4">
        <div>
          <StarRating count={review.stars} />
        </div>
        <span className="text-slate-400 text-xs">{review.date}</span>
      </div>

      {/* Review text — grows to fill available space */}
      <div className="flex-1">
        <blockquote className="text-slate-600 text-sm leading-relaxed">
          {displayText}
        </blockquote>
        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-teal-600 text-xs font-semibold hover:text-teal-700 focus:outline-none focus:underline transition-colors"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-slate-100">
        <GoogleBadge />
      </div>
    </article>
  );
}

function GBPReviewGrid() {
  return (
    <div className="space-y-5">

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {GBP_REVIEWS.map((r) => (
          <GBPReviewCard key={r.slug} review={r} />
        ))}
      </div>
    </div>
  );
}

// Dismiss button — subtle, accessible, keyboard-focusable
function DismissBtn({ onDismiss, label = "Dismiss notice" }: { onDismiss: () => void; label?: string }) {
  return (
    <button
      type="button"
      onClick={onDismiss}
      aria-label={label}
      className="ml-3 flex-shrink-0 text-current opacity-50 hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-current rounded transition-opacity"
      style={{ lineHeight: 1 }}
    >
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M3 3l10 10M13 3L3 13" />
      </svg>
    </button>
  );
}

export default function Home() {
  // --- Preview mode: ?preview=clean ---
  const [isCleanPreview, setIsCleanPreview] = useState(false);

  // --- Dismissible notice state (sessionStorage-backed) ---
  const [bannerVisible, setBannerVisible] = useState(true);
  const [videoNoticeVisible, setVideoNoticeVisible] = useState(true);
  const [reviewsNoticeVisible, setReviewsNoticeVisible] = useState(true);
  const [phoneNoticeVisible, setPhoneNoticeVisible] = useState(true);
  const [hoursNoticeVisible, setHoursNoticeVisible] = useState(true);
  const [visitCardNoticeVisible, setVisitCardNoticeVisible] = useState(true);
  // Piscataway NAP discrepancy flag — for future Piscataway build reference
  // Directions report: 200 Centennial Ave, Piscataway, NJ 08854 / (732) 426-5470
  // Matrix v3 previously used: 280 Centennial Avenue, Piscataway, NJ 08854 / (732) 479-7225
  // Status: Needs confirmation from Bierman before Piscataway build

  useEffect(() => {
    // Detect ?preview=clean
    const params = new URLSearchParams(window.location.search);
    if (params.get("preview") === "clean") {
      setIsCleanPreview(true);
      // In clean mode, suppress all notices automatically
      setBannerVisible(false);
      setVideoNoticeVisible(false);
      setReviewsNoticeVisible(false);
      return;
    }
    // Restore dismissed state from sessionStorage
    if (sessionStorage.getItem("pl_banner_dismissed") === "1") setBannerVisible(false);
    if (sessionStorage.getItem("pl_video_notice_dismissed") === "1") setVideoNoticeVisible(false);
    if (sessionStorage.getItem("pl_reviews_notice_dismissed") === "1") setReviewsNoticeVisible(false);
    if (sessionStorage.getItem("pl_phone_notice_dismissed") === "1") setPhoneNoticeVisible(false);
    if (sessionStorage.getItem("pl_hours_notice_dismissed") === "1") setHoursNoticeVisible(false);
    if (sessionStorage.getItem("pl_visit_card_dismissed") === "1") setVisitCardNoticeVisible(false);
  }, []);

  const dismissBanner = () => {
    setBannerVisible(false);
    sessionStorage.setItem("pl_banner_dismissed", "1");
  };
  const dismissVideoNotice = () => {
    setVideoNoticeVisible(false);
    sessionStorage.setItem("pl_video_notice_dismissed", "1");
  };
  const dismissReviewsNotice = () => {
    setReviewsNoticeVisible(false);
    sessionStorage.setItem("pl_reviews_notice_dismissed", "1");
  };
  const dismissPhoneNotice = () => {
    setPhoneNoticeVisible(false);
    sessionStorage.setItem("pl_phone_notice_dismissed", "1");
  };
  const dismissHoursNotice = () => {
    setHoursNoticeVisible(false);
    sessionStorage.setItem("pl_hours_notice_dismissed", "1");
  };
  const dismissVisitCardNotice = () => {
    setVisitCardNoticeVisible(false);
    sessionStorage.setItem("pl_visit_card_dismissed", "1");
  };

  // Nav top offset: 32px when banner visible, 0 when hidden
  const navTop = bannerVisible ? "32px" : "0px";

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Proof Layer Banner — dismissible, sessionStorage-backed */}
      {bannerVisible && (
        <div className="bg-slate-100 border-b border-slate-200 text-slate-500 py-1.5 px-4 text-xs font-medium sticky top-0 z-50 flex items-center justify-center gap-2">
          <span>Proof Layer · Development Review Environment · noindex · nofollow · No tracking · No patient data</span>
          <DismissBtn onDismiss={dismissBanner} />
        </div>
      )}

      {/* Navigation — lighter treatment */}
      <nav className="bg-white border-b border-slate-200 z-40 shadow-sm" style={{ position: "sticky", top: navTop }}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={ASSETS.logo} alt="Bierman Autism Centers 20th Anniversary" className="h-10 w-auto" />
            <div className="hidden md:flex items-center gap-2">
              <span className="text-slate-300 text-sm">|</span>
              <span className="text-slate-500 text-sm">Ramsey, New Jersey</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href={`tel:${LOCATION.phone}`} className="hidden md:block text-slate-600 hover:text-teal-700 text-sm font-medium transition-colors">
              {LOCATION.phone}
            </a>
            <a
              href={LOCATION.intakeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors shadow-sm"
            >
              Request Services
            </a>
          </div>
        </div>
      </nav>

      {/* Hero — warm light gradient, no heavy navy */}
      <section
        className="py-16 md:py-24"
        style={{ background: "linear-gradient(135deg, #f0fdfa 0%, #e0f7f4 40%, #fef9f0 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3" aria-hidden="true"><path d="M8 1a5 5 0 100 10A5 5 0 008 1zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM8 14a1 1 0 100-2 1 1 0 000 2z"/></svg>
                Ramsey, New Jersey
              </span>
              <span className="text-slate-400 text-xs">Bergen County</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5 text-[#1a2b47]">
              ABA Therapy in<br />Ramsey, New Jersey
            </h1>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Bierman Autism Centers in Ramsey provides individualized ABA therapy, speech-language therapy, occupational therapy, and diagnostic evaluations for children with autism. Serving Bergen County and surrounding New Jersey communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={LOCATION.intakeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-colors text-center shadow-md"
              >
                Request Services in Ramsey
              </a>
              <a
                href={`tel:${LOCATION.phone}`}
                className="border-2 border-teal-300 hover:border-teal-500 bg-white hover:bg-teal-50 text-teal-700 font-semibold px-8 py-4 rounded-2xl text-lg transition-colors text-center"
              >
                {LOCATION.phone}
              </a>
            </div>
            {/* GBP-Verified NAP Card — clean, light */}
            <div className="bg-white border border-teal-200 rounded-2xl p-5 inline-block shadow-sm">
              <div className="flex items-start gap-3">
                <div className="bg-teal-100 rounded-full p-1.5 mt-0.5">
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-teal-600" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M13 6.5a5 5 0 11-10 0 5 5 0 0110 0z"/><path d="M6 6.5l1.5 1.5L10 4.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <div className="text-teal-700 text-xs font-bold uppercase tracking-widest mb-1">GBP Verified Location</div>
                  <div className="text-[#1a2b47] font-semibold text-sm">Bierman Autism Centers — Ramsey</div>
                  <div className="text-slate-500 text-sm">{LOCATION.address}, {LOCATION.city}, {LOCATION.state} {LOCATION.zip}</div>
                  <div className="text-slate-500 text-sm">{LOCATION.phone}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar — soft teal, not heavy */}
      <section className="bg-teal-600 text-white py-3.5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-3 text-sm font-medium">
            {["✓ Evidence-Based ABA Therapy", "✓ Insurance Accepted", "✓ BCBA-Supervised Programs", "✓ 20 Years of Experience", "✓ Serving Bergen County"].map((item) => (
              <span key={item} className="text-white/90">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Credential Badges — BACB ACE, CASP, Group of Year */}
      <section className="bg-white border-b border-slate-100 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.alt} className="flex items-center justify-center" style={{ height: "64px" }}>
                <img
                  src={badge.src}
                  alt={badge.alt}
                  style={{ maxHeight: "56px", width: "auto", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section — image as major visual anchor */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image — prominent, rounded, soft shadow */}
            <div className="order-1 md:order-none">
              <div className="relative">
                <img
                  src={ASSETS.facility}
                  alt="Modern and welcoming interior of the Bierman Autism Centers clinic in Ramsey, New Jersey — this is the place your child will visit"
                  className="rounded-3xl shadow-2xl w-full object-cover"
                  style={{ minHeight: "320px", maxHeight: "480px" }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                {/* Polished fallback — never shows broken icon */}
                <div
                  className="rounded-3xl bg-gradient-to-br from-teal-50 to-aqua-100 items-center justify-center hidden"
                  style={{ minHeight: "320px", background: "linear-gradient(135deg, #e0f7f4, #f0fdfa)" }}
                >
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🏥</div>
                    <div className="text-teal-700 font-semibold">Ramsey Clinic Photo</div>
                    <div className="text-slate-400 text-sm mt-1">Image pending upload confirmation</div>
                  </div>
                </div>
                {/* Floating mascot badge */}
                <div className="absolute -bottom-5 -right-4 bg-white rounded-2xl shadow-lg p-3 flex items-center gap-2 border border-teal-100">
                  <img src={ASSETS.mascot} alt="Pilot the Penguin mascot" className="h-12 w-auto" />
                  <div>
                    <div className="text-[#1a2b47] font-semibold text-xs">Pilot the Penguin</div>
                    <div className="text-slate-400 text-xs">Bierman's friendly guide</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">Our Ramsey Clinic</div>
              <h2 className="text-3xl font-bold text-[#1a2b47] mb-4">A Welcoming Environment for Every Child</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our Ramsey center is designed to be a safe, engaging, and supportive space for children and families. Every aspect of our clinic — from the therapy rooms to the waiting areas — is built with the needs of children with autism in mind.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our clinical team includes Board Certified Behavior Analysts (BCBAs), Registered Behavior Technicians (RBTs), speech-language pathologists, and occupational therapists working collaboratively on each child's individualized plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={LOCATION.intakeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-center text-sm"
                >
                  Request Services in Ramsey
                </a>
                <a
                  href={`tel:${LOCATION.phone}`}
                  className="border border-teal-300 hover:bg-teal-50 text-teal-700 font-semibold px-6 py-3 rounded-xl transition-colors text-center text-sm"
                >
                  {LOCATION.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services — consistent SVG icons, playful-professional */}
      <section className="py-16" style={{ background: "linear-gradient(180deg, #f8fffe 0%, #f0fdfa 100%)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">Services at Ramsey</div>
            <h2 className="text-3xl font-bold text-[#1a2b47]">Comprehensive Autism Support Services</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">Each service is individualized to your child's goals and delivered by licensed, experienced clinicians.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc) => (
              <div key={svc.title} className="bg-white border border-teal-100 rounded-3xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                {/* Top visual — real photo if available, else icon block */}
                {svc.img ? (
                  <div className="relative">
                    <img src={svc.img} alt={svc.title} className="w-full h-40 object-cover" />
                    <div className="absolute top-3 left-3 bg-white/90 rounded-xl p-1.5 shadow-sm">
                      {svc.icon}
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-40 flex flex-col items-center justify-center gap-2" style={{ background: "linear-gradient(135deg, #f0fdfa, #e0f7f4)" }}>
                    {svc.icon}
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-bold text-[#1a2b47] text-base mb-2">{svc.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <a href={svc.link} className="text-teal-600 font-semibold text-sm hover:text-teal-800 transition-colors inline-flex items-center gap-1">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance — all 10 logos normalized, served from Manus CDN, no hotlinks */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">Insurance & Coverage</div>
            <h2 className="text-2xl font-bold text-[#1a2b47]">We Accept Most Major Insurance Plans</h2>
          </div>
          {/* Logo grid — consistent badge style, uniform height */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {/* Horizon BCBS NJ — from original CDN asset */}
            <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-200 flex items-center justify-center" style={{ minWidth: "120px", height: "64px" }}>
              <img
                src={ASSETS.insurance}
                alt="Horizon Blue Cross Blue Shield New Jersey — accepted at Bierman Autism Centers Ramsey"
                style={{ maxWidth: "100%", maxHeight: "40px", width: "auto", height: "auto", objectFit: "contain" }}
              />
            </div>
            {/* All other payer logos — normalized 320x112 artboard */}
            {INSURANCE_LOGOS.map((logo) => (
              <div
                key={logo.alt}
                className="bg-white rounded-xl p-3 shadow-sm border border-slate-200 flex items-center justify-center"
                style={{ minWidth: "120px", height: "64px" }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ maxWidth: "100%", maxHeight: "40px", width: "auto", height: "auto", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-xs mt-5">
            Payer list pending final confirmation with Bierman marketing team before production use.{" "}
            <a href={LOCATION.intakeUrl} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-medium">
              Verify your coverage →
            </a>
          </p>
        </div>
      </section>

      {/* Map + Location Details */}
      <section className="py-16" style={{ background: "linear-gradient(180deg, #fef9f0 0%, #fff 100%)" }}>
        <div className="max-w-6xl mx-auto px-4">

          {/* Plan Your Visit card — above the 2-col grid */}
          <div className="mb-10 bg-teal-50 border border-teal-100 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-shrink-0 bg-teal-100 rounded-xl p-3">
              <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 text-teal-600" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M16 3a9 9 0 019 9c0 6-9 17-9 17S7 18 7 12a9 9 0 019-9z"/>
                <circle cx="16" cy="12" r="3"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-teal-700 text-xs font-bold uppercase tracking-widest mb-1">Plan Your Visit</div>
              <p className="text-[#1a2b47] font-semibold text-sm mb-2">
                Planning a visit to the Ramsey center? Use the directions link below for the confirmed address and suite information before your appointment or tour.
              </p>
              <div className="text-slate-600 text-sm space-y-1 mb-3">
                <div><span className="font-medium text-[#1a2b47]">Address:</span> {LOCATION.address}, {LOCATION.city}, {LOCATION.state} {LOCATION.zip}</div>
                <div><span className="font-medium text-[#1a2b47]">Suite:</span> Suite 203 — enter through the main building entrance</div>
                {!isCleanPreview && visitCardNoticeVisible ? (
                  <div className="flex items-start gap-1.5 bg-amber-50 border border-amber-200 rounded-lg px-2.5 py-1.5 mt-1">
                    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3 text-amber-500 flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <circle cx="6" cy="6" r="5"/><path d="M6 4v2.5M6 8v.3" strokeLinecap="round"/>
                    </svg>
                    <span className="text-amber-700 text-xs flex-1">Parking / arrival details to be confirmed by Bierman. Nearby landmark details pending client confirmation.</span>
                    <DismissBtn onDismiss={dismissVisitCardNotice} label="Dismiss visit card notice" />
                  </div>
                ) : (
                  <div className="text-slate-400 text-xs">Parking and landmark details pending Bierman confirmation.</div>
                )}
              </div>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(LOCATION.address + ", " + LOCATION.city + ", " + LOCATION.state + " " + LOCATION.zip)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors shadow-sm"
              >
                Get Directions to Ramsey →
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">Location & Directions</div>
              <h2 className="text-3xl font-bold text-[#1a2b47] mb-6">Find Our Ramsey Clinic</h2>
              <div className="space-y-5 mb-8">
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-teal-600" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z"/>
                        <circle cx="10" cy="8" r="2"/>
                      </svg>
                    ),
                    label: "Address",
                    content: <>{LOCATION.address}<br />{LOCATION.city}, {LOCATION.state} {LOCATION.zip}</>,
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-teal-600" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <path d="M3 5a2 2 0 012-2h2l2 4-1.5 1.5a11 11 0 005 5L14 12l4 2v2a2 2 0 01-2 2C7.163 18 2 12.837 2 7a2 2 0 012-2z"/>
                      </svg>
                    ),
                    label: "Phone",
                    content: (
                      <>
                        <a href={`tel:${LOCATION.phone}`} className="text-teal-600 hover:underline">{LOCATION.phone}</a>
                        <div className="text-slate-400 text-xs mt-0.5">Phone number pending client NAP confirmation</div>
                        {/* DATA FLAG: GBP phone discrepancy — DO NOT change proof-layer NAP until confirmed */}
                        {/* Gemini GBP Report (May 2026) listed: (201) 308-3735 */}
                        {/* Matrix/proof-layer NAP uses: (201) 596-8104 */}
                        {/* Status: Needs confirmation from Bierman before production */}
                        {!isCleanPreview && phoneNoticeVisible && (
                          <div className="mt-1.5 inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-lg px-2.5 py-1">
                            <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3 text-amber-500 flex-shrink-0" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                              <circle cx="6" cy="6" r="5"/><path d="M6 4v2.5M6 8v.3" strokeLinecap="round"/>
                            </svg>
                            <span className="text-amber-700 text-xs">
                          NAP discrepancy — 3 phone values observed across sources:<br />
                          Proof-layer NAP: (201) 596-8104 · GBP review report: (201) 308-3735 · Directions report: (201) 928-5245<br />
                          Confirm correct number with Bierman before production.
                        </span>
                            <DismissBtn onDismiss={dismissPhoneNotice} label="Dismiss phone discrepancy notice" />
                          </div>
                        )}
                      </>
                    ),
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-teal-600" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <circle cx="10" cy="10" r="8"/>
                        <path d="M10 6v4l3 2" strokeLinecap="round"/>
                      </svg>
                    ),
                    label: "Hours",
                    content: (
                      <>
                        <span className="text-slate-600">Monday – Friday: 8:00 AM – 6:00 PM</span>
                        <div className="text-slate-400 text-xs mt-0.5">Hours pending client confirmation</div>
                        {!isCleanPreview && hoursNoticeVisible && (
                          <div className="mt-1 inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-lg px-2.5 py-1">
                            <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3 text-amber-500 flex-shrink-0" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                              <circle cx="6" cy="6" r="5"/><path d="M6 4v2.5M6 8v.3" strokeLinecap="round"/>
                            </svg>
                            <span className="text-amber-700 text-xs">Hours pending Bierman confirmation before production</span>
                            <DismissBtn onDismiss={dismissHoursNotice} label="Dismiss hours notice" />
                          </div>
                        )}
                      </>
                    ),
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-teal-600" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <rect x="2" y="4" width="16" height="12" rx="2"/>
                        <path d="M2 8h16M7 4v4M13 4v4"/>
                      </svg>
                    ),
                    label: "Service Area",
                    content: <span className="text-slate-600">Bergen County, Passaic County, and surrounding NJ communities</span>,
                  },
                ].map(({ icon, label, content }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="bg-teal-50 rounded-xl p-2 mt-0.5 flex-shrink-0">{icon}</div>
                    <div>
                      <div className="font-semibold text-[#1a2b47] text-sm">{label}</div>
                      <div className="text-sm mt-0.5">{content}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(LOCATION.address + ", " + LOCATION.city + ", " + LOCATION.state + " " + LOCATION.zip)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm"
              >
                Get Directions →
              </a>
            </div>
            {/* Map with designed fallback */}
            <div>
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100" style={{ height: "380px" }}>
                <iframe
                  src={LOCATION.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="eager"
                  title="Bierman Autism Centers Ramsey NJ location map"
                  aria-label="Map showing location of Bierman Autism Centers in Ramsey, New Jersey"
                  onError={(e) => {
                    const iframe = e.currentTarget;
                    iframe.style.display = "none";
                  }}
                />
              </div>
              {/* Designed map fallback card — shown if iframe fails */}
              <div
                id="map-fallback"
                className="rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-8 text-center hidden"
                style={{ height: "380px", display: "none" }}
              >
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <div className="bg-teal-100 rounded-full p-4">
                    <svg viewBox="0 0 32 32" fill="none" className="w-10 h-10 text-teal-600" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <path d="M16 3a9 9 0 019 9c0 6-9 17-9 17S7 18 7 12a9 9 0 019-9z"/>
                      <circle cx="16" cy="12" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-[#1a2b47] text-lg">Bierman Autism Centers — Ramsey</div>
                    <div className="text-slate-500 text-sm mt-1">{LOCATION.address}</div>
                    <div className="text-slate-500 text-sm">{LOCATION.city}, {LOCATION.state} {LOCATION.zip}</div>
                  </div>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(LOCATION.address + ", " + LOCATION.city + ", " + LOCATION.state + " " + LOCATION.zip)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
              <p className="text-slate-400 text-xs mt-2 text-center">Confirm coordinates match GBP-verified address before production</p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started — warm aqua, not heavy navy */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-teal-200 text-sm font-bold uppercase tracking-widest mb-2">Getting Started</div>
            <h2 className="text-3xl font-bold text-white">How to Begin Services at Ramsey</h2>
            <p className="text-teal-100/80 mt-3 max-w-2xl mx-auto">Our intake process is designed to be straightforward and supportive for families.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Submit a Request", desc: "Complete our intake request form. A team member will contact you within 1–2 business days." },
              { step: "02", title: "Insurance Verification", desc: "We verify your insurance coverage and explain your benefits before any commitment." },
              { step: "03", title: "Initial Consultation", desc: "Meet with our clinical team to discuss your child's needs and goals." },
              { step: "04", title: "Begin Services", desc: "Your child's individualized program begins with ongoing family collaboration." },
            ].map((item) => (
              <div key={item.step} className="bg-white/15 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                <div className="text-orange-300 font-bold text-3xl mb-3 font-mono">{item.step}</div>
                <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="text-teal-100/80 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={LOCATION.intakeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-2xl text-lg transition-colors inline-block shadow-lg"
            >
              Start the Process →
            </a>
          </div>
        </div>
      </section>

      {/* Video Section — lighter frame, intentional poster, calm label */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">See ABA Therapy in Action</div>
          <h2 className="text-3xl font-bold text-[#1a2b47] mb-3">See ABA Therapy at Bierman Ramsey</h2>
          <p className="text-slate-500 mb-8">A parent-facing tour of our Ramsey, NJ clinic — what families can expect when they visit.</p>
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200" style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              src="https://www.youtube.com/embed/dhHxU3o0p0o"
              title="Inside Our Ramsey, NJ Autism Center (A Safe & Fun Tour for Parents)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              aria-label="YouTube video: Inside Our Ramsey, NJ Autism Center — a parent-facing tour"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
            />
          </div>
          {videoNoticeVisible && (
            <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-5 py-2.5">
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-amber-500 flex-shrink-0" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="8" cy="8" r="7"/><path d="M8 5v3M8 11v.5" strokeLinecap="round"/>
              </svg>
              <p className="text-amber-700 text-sm">
                Video usage rights and identifiable-person review required before production use.
              </p>
              <DismissBtn onDismiss={dismissVideoNotice} label="Dismiss video notice" />
            </div>
          )}
        </div>
      </section>

      {/* Review Themes — Format B: "Themes of Care" module */}
      {/* Source: Gemini GBP Review Evidence Report (May 2026) */}
      {/* No fake reviewer names, no star ratings, no direct GBP quotes, no child-specific details */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-4">
            <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">What Families Value</div>
            <h2 className="text-3xl font-bold text-[#1a2b47]">What Families Value at Ramsey</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
              Public review evidence and Bierman testimonial themes suggest families value supportive communication, BCBA guidance, and a child-centered environment. Final review copy should be reviewed and approved by Bierman before production use.
            </p>
          </div>

          {/* Dismissible source notice */}
          {!isCleanPreview && reviewsNoticeVisible && (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-3 text-center mb-8 max-w-2xl mx-auto flex items-center justify-center gap-2">
              <p className="text-slate-500 text-sm">
                Review themes are based on public review evidence and Bierman testimonial patterns. Final review copy requires Bierman approval before production use.
              </p>
              <DismissBtn onDismiss={dismissReviewsNotice} label="Dismiss review themes notice" />
            </div>
          )}
          {!isCleanPreview && !reviewsNoticeVisible && (
            <div className="mb-8" />
          )}

          {/* 3 Theme Card Images — cards have padding/rounded corners baked in; neutral container only */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-2xl shadow-sm bg-transparent">
              <img
                src={ASSETS.themeBcbaGuidance}
                alt="Supportive BCBA Guidance — families value hands-on clinical team communication at Bierman Ramsey"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm bg-transparent">
              <img
                src={ASSETS.themeFamilyPartnership}
                alt="Family Partnership — parents highlight clear communication and feeling known by the Bierman care team"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm bg-transparent">
              <img
                src={ASSETS.themeProgressFocused}
                alt="Progress-Focused Support — individualized goals and steady progress at Bierman Autism Centers Ramsey NJ"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Source attribution — always visible, not dismissible */}
          <p className="text-center text-slate-400 text-xs mt-8">
            Themes derived from public GBP review evidence and Bierman corporate testimonials.
            Source: Gemini GBP Review Evidence Report, May 2026.
          </p>

          {/* Real GBP Reviews — 6 public Google reviews, HTML/CSS native cards, sourced May 2026 */}
          <div className="mt-14">
            <div className="text-center mb-10">
              <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">Google Reviews</div>
              <h3 className="text-2xl font-bold text-[#1a2b47]">What Families Are Saying</h3>
              <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
                Real reviews from families at Bierman Autism Centers — Ramsey, NJ.
              </p>
            </div>
            <GBPReviewGrid />
            <p className="text-center text-slate-400 text-xs mt-8">
              Reviews sourced from Google Business Profile — public. Displayed for proof-layer review purposes.
            </p>
          </div>
        </div>
      </section>

      {/* Education to Action — GSC opportunity: connect informational intent to local service pages */}
      <section className="py-20 border-t border-slate-100" style={{ background: "linear-gradient(180deg, #f8fffe 0%, #ffffff 100%)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <div className="inline-block bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Parent Resource Pathway</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b47] leading-tight">Understanding Autism Support Near Ramsey</h2>
            <p className="text-slate-500 mt-4 text-base leading-relaxed">
              Families often start with questions before they start services. These resources connect common questions to local support available in Bergen County.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {[
              {
                title: "What is ASD?",
                copy: "ASD describes developmental differences affecting communication, social interaction, behavior, and learning. Every child's support needs are unique.",
                accent: "#0d9488",
                bg: "#f0fdfa",
                url: "https://www.biermanautism.com/autism-101/",
                linkLabel: "Autism 101",
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
                    <circle cx="20" cy="20" r="18" fill="#ccfbf1"/>
                    <path d="M20 12a6 6 0 100 12 6 6 0 000-12z" stroke="#0d9488" strokeWidth="2"/>
                    <path d="M20 18v4M20 15.5v.5" stroke="#0d9488" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "What is Level 1 Autism?",
                copy: "Level 1 autism describes individuals who benefit from some support. Families searching this topic are often seeking clarity on next steps.",
                accent: "#0d9488",
                bg: "#f0fdfa",
                url: "https://www.biermanautism.com/resources/blog/autism-level-1/",
                linkLabel: "Level 1 Autism Guide",
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
                    <circle cx="20" cy="20" r="18" fill="#ccfbf1"/>
                    <path d="M14 28l6-14 6 14M16 23h8" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: "ASD vs. Autism",
                copy: "ASD is the current clinical term. 'Autism' is widely used in everyday language. Both refer to the same spectrum of developmental differences.",
                accent: "#0d9488",
                bg: "#f0fdfa",
                url: "https://www.biermanautism.com/resources/blog/asd-vs-autism/",
                linkLabel: "ASD vs Autism",
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
                    <circle cx="20" cy="20" r="18" fill="#ccfbf1"/>
                    <path d="M12 20h16M20 13l7 7-7 7" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: "Can autism be cured?",
                copy: "Support focuses on helping each child build skills, independence, communication, and confidence — not on 'curing' autism.",
                accent: "#0d9488",
                bg: "#f0fdfa",
                url: "https://www.biermanautism.com/autism-101/can-autism-be-cured/",
                linkLabel: "Learn More",
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
                    <circle cx="20" cy="20" r="18" fill="#ccfbf1"/>
                    <path d="M13 23l4-4 3 3 7-7" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: "How ABA supports communication",
                copy: "ABA therapy uses individualized goals and structured support to help children build communication, daily living, social, and learning skills.",
                accent: "#0d9488",
                bg: "#f0fdfa",
                url: "https://www.biermanautism.com/aba-therapy-services/",
                linkLabel: "ABA Therapy Services",
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
                    <circle cx="20" cy="20" r="18" fill="#ccfbf1"/>
                    <path d="M12 16h16v8a2 2 0 01-2 2H14l-3 3v-3a2 2 0 01-1-2v-6a2 2 0 012-2z" stroke="#0d9488" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M16 21h8" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "When to ask about support",
                copy: "Families often seek guidance when they have questions about communication, behavior, routines, or developmental milestones. Starting the conversation early matters.",
                accent: "#0d9488",
                bg: "#f0fdfa",
                url: LOCATION.intakeUrl,
                linkLabel: "Start in Ramsey",
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
                    <circle cx="20" cy="20" r="18" fill="#ccfbf1"/>
                    <circle cx="20" cy="20" r="7" stroke="#0d9488" strokeWidth="2"/>
                    <path d="M20 17v3l2 2" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
            ].map((card) => (
              <div key={card.title} className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-3">
                <div className="flex items-center gap-3 mb-1">
                  {card.icon}
                  <h3 className="font-bold text-[#1a2b47] text-sm leading-snug">{card.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{card.copy}</p>
                <a
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-teal-600 font-semibold text-xs hover:text-teal-800 transition-colors mt-1"
                >
                  {card.linkLabel} <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
          {/* Resource strip */}
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
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                className="text-teal-700 text-xs font-medium hover:underline underline-offset-2">
                {link.label}
              </a>
            ))}
            <span className="text-slate-200 mx-1">|</span>
            <p className="text-slate-400 text-xs">All URLs link to existing biermanautism.com content. Confirm before production use.</p>
          </div>
        </div>
      </section>

      {/* Support for Families at Home — Caregiver Training section */}
      {/* GSC opportunity: caregiver training topics show demand around at-home support, functional communication, building independence, behavior support */}
      <section className="py-20 border-t border-slate-100" style={{ background: "linear-gradient(135deg, #f0fdfa 0%, #ecfdf5 50%, #f8fffe 100%)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left: heading + CTA */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="inline-block bg-white border border-teal-200 text-teal-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Caregiver Support</div>
              <h2 className="text-3xl font-bold text-[#1a2b47] leading-tight mb-4">Support for Families at Home</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Care does not stop when a child leaves the clinic. Bierman's caregiver training resources help families understand communication, daily routines, independence, and behavior support.
              </p>
              <a
                href="https://www.biermanautism.com/resources/caregiver-training/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-colors shadow-sm"
              >
                Caregiver Training Resources <span aria-hidden="true">→</span>
              </a>
            </div>
            {/* Right: 4 topic cards */}
            <div className="flex-1 grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Functional Communication",
                  copy: "Support children in expressing needs, building communication routines, and reducing frustration at home.",
                  color: "#0d9488",
                  lightBg: "#ccfbf1",
                  icon: (
                    <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7" aria-hidden="true">
                      <path d="M6 10h24v12a2 2 0 01-2 2H10l-5 5v-5a2 2 0 01-1-2V12a2 2 0 012-2z" stroke="#0d9488" strokeWidth="2" strokeLinejoin="round" fill="#ccfbf1"/>
                      <path d="M12 18h12" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  title: "Building Independence",
                  copy: "Support daily living skills, routines, and independence outside the therapy setting.",
                  color: "#0d9488",
                  lightBg: "#ccfbf1",
                  icon: (
                    <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7" aria-hidden="true">
                      <circle cx="18" cy="18" r="14" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2"/>
                      <path d="M18 12v6l4 2" stroke="#0d9488" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  title: "Managing Behaviors at Home",
                  copy: "Understand behavior, create supportive routines, and work alongside your child's care team.",
                  color: "#0d9488",
                  lightBg: "#ccfbf1",
                  icon: (
                    <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7" aria-hidden="true">
                      <circle cx="18" cy="18" r="14" fill="#ccfbf1"/>
                      <path d="M11 21l4-4 3 3 7-7" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                },
                {
                  title: "School & Routine Transitions",
                  copy: "Navigate transitions between therapy, school, and home routines with guidance from Bierman's clinical team.",
                  color: "#0d9488",
                  lightBg: "#ccfbf1",
                  icon: (
                    <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7" aria-hidden="true">
                      <circle cx="18" cy="18" r="14" fill="#ccfbf1"/>
                      <path d="M12 22l6-8 6 8" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 22h6" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                },
              ].map((card) => (
                <div key={card.title} className="bg-white rounded-2xl p-5 shadow-sm border border-white hover:shadow-md transition-all duration-200 flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-0.5">{card.icon}</div>
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

      {/* Clinical Leadership — Victoria Verdun, Ph.D., BCBA-D, LBA + Hillary Genovese, M.A., BCBA */}
      {/* ASSET APPROVAL NOTE: Public Bierman team images used in pilot; final production use requires Bierman approval */}
      {/* Do not imply they are the Ramsey clinic directors — NJ regional role only */}
      <section className="py-20 bg-[#1a2b47]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left: heading */}
            <div className="lg:w-96 flex-shrink-0">
              <div className="inline-block bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">New Jersey Clinical Leadership</div>
              <h2 className="text-3xl font-bold text-white leading-tight mb-4">The Team Behind Your Child's Care</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Bierman's New Jersey centers are supported by experienced clinical leaders who guide care quality, staff development, and family-centered service delivery across the region.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <img src={ASSETS.mascot} alt="Pilot the Penguin — Bierman mascot" className="w-10 h-10 object-contain" />
                <span className="text-teal-300 text-xs font-medium">Bierman Autism Centers · New Jersey</span>
              </div>
            </div>
            {/* Right: portrait cards */}
            <div className="flex-1 grid sm:grid-cols-2 gap-6">
              {[
                {
                  name: "Victoria Verdun",
                  credentials: "Ph.D., BCBA-D, LBA",
                  title: "Director of Clinical Excellence",
                  region: "New Jersey",
                  photo: ASSETS.victoriaVerdun,
                  alt: "Victoria Verdun, Ph.D., BCBA-D, LBA — Director of Clinical Excellence, New Jersey, Bierman Autism Centers",
                  tags: ["Clinical Excellence", "BCBA Supervision", "Caregiver Training", "ABA Therapy"],
                },
                {
                  name: "Hillary Genovese",
                  credentials: "M.A., BCBA",
                  title: "Director of Services",
                  region: "New Jersey",
                  photo: ASSETS.hillaryGenovese,
                  alt: "Hillary Genovese, M.A., BCBA — Director of Services, New Jersey, Bierman Autism Centers",
                  tags: ["Service Delivery", "BCBA Supervision", "ABA Therapy", "New Jersey"],
                },
              ].map((person) => (
                <div key={person.name} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/8 transition-all duration-200">
                  {/* Portrait */}
                  <div className="relative">
                    <img
                      src={person.photo}
                      alt={person.alt}
                      className="w-full aspect-square object-cover object-top"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b47]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <div className="text-white font-bold text-base leading-tight">{person.name}</div>
                      <div className="text-teal-300 text-xs font-semibold">{person.credentials}</div>
                    </div>
                  </div>
                  {/* Details */}
                  <div className="p-5">
                    <div className="text-slate-300 text-sm font-semibold mb-1">{person.title}</div>
                    <div className="text-slate-400 text-xs mb-4">{person.region}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {person.tags.map((tag: string) => (
                        <span key={tag} className="bg-teal-500/15 border border-teal-400/20 text-teal-300 text-xs px-2.5 py-0.5 rounded-full">{tag}</span>
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
            <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">Other New Jersey Locations</div>
            <h2 className="text-2xl font-bold text-[#1a2b47]">More Bierman Centers Near You</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {NEARBY.map((loc) => (
              <a
                key={loc.name}
                href={loc.url}
                className="bg-white border border-teal-200 hover:border-teal-400 hover:bg-teal-50 text-[#1a2b47] font-medium px-5 py-2.5 rounded-xl text-sm transition-colors shadow-sm"
              >
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
            <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">FAQ</div>
            <h2 className="text-3xl font-bold text-[#1a2b47]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details key={i} className="border border-slate-200 rounded-2xl overflow-hidden group bg-white hover:border-teal-200 transition-colors">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-[#1a2b47] hover:bg-teal-50/50 transition-colors list-none text-sm">
                  {faq.q}
                  <span className="text-teal-500 ml-4 flex-shrink-0 text-xl group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4 text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — warm teal, not dark navy */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #f0fdfa 0%, #e0f7f4 50%, #fef9f0 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a2b47]">Ready to Get Started in Ramsey?</h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step toward individualized autism support for your child. Our Ramsey team is here to guide your family through every stage of the process.
          </p>
          <a
            href={LOCATION.intakeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-12 py-5 rounded-2xl text-xl transition-colors inline-block shadow-lg"
          >
            Request Services in Ramsey →
          </a>
          <p className="text-slate-400 text-xs mt-5">
            CTA routes to existing production intake system — production intake untouched by this proof layer.
          </p>
        </div>
      </section>

      {/* Footer — navy retained for brand anchor, but lighter */}
      <footer className="bg-[#1a2b47] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src={ASSETS.logo} alt="Bierman Autism Centers 20th Anniversary" className="h-12 w-auto mb-4" />
              <p className="text-white/60 text-sm leading-relaxed">
                Bierman Autism Centers provides evidence-based ABA therapy and autism support services across 33 verified locations.
              </p>
            </div>
            <div>
              <div className="font-bold text-white mb-3">Ramsey Location</div>
              <div className="text-white/60 text-sm space-y-1">
                <div>{LOCATION.address}</div>
                <div>{LOCATION.city}, {LOCATION.state} {LOCATION.zip}</div>
                <div><a href={`tel:${LOCATION.phone}`} className="hover:text-white transition-colors">{LOCATION.phone}</a></div>
                <div className="text-white/40 text-xs mt-2">GBP Verified · Bergen County</div>
              </div>
            </div>
            <div>
              <div className="font-bold text-white mb-3">Services</div>
              <div className="text-white/60 text-sm space-y-1">
                {SERVICES.map((s) => <div key={s.title}>{s.title}</div>)}
              </div>
            </div>
          </div>
          {/* Proof-layer notice — calmer, smaller, less alarming */}
          <div className="border-t border-white/10 pt-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <p className="text-white/40 text-xs leading-relaxed">
                <strong className="text-white/60">Proof Layer:</strong> Production-safe development environment for Bierman Autism Centers. noindex · nofollow · No tracking · No patient data collected. Does not affect the live production website. Recommended client URL: <span className="text-white/50">pilot.biermanautism.com/locations/new-jersey/ramsey/</span> — pending DNS approval.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile sticky action row — 3 high-intent CTAs, visible only on small screens */}
      {/* Wayfinding behavior is a high-intent local action. Sticky row reduces friction for mobile visitors. */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-slate-200 shadow-lg">
        <div className="flex items-stretch">
          <a
            href={LOCATION.intakeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center gap-0.5 py-3 bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold transition-colors"
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M10 2a8 8 0 100 16A8 8 0 0010 2z"/>
              <path d="M10 7v6M7 10h6" strokeLinecap="round"/>
            </svg>
            Request Services
          </a>
          <a
            href={`tel:${LOCATION.phone}`}
            className="flex-1 flex flex-col items-center justify-center gap-0.5 py-3 bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold transition-colors border-x border-teal-700"
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M3 5a2 2 0 012-2h2l2 4-1.5 1.5a11 11 0 005 5L14 12l4 2v2a2 2 0 01-2 2C7.163 18 2 12.837 2 7a2 2 0 012-2z"/>
            </svg>
            Call
          </a>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(LOCATION.address + ", " + LOCATION.city + ", " + LOCATION.state + " " + LOCATION.zip)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center gap-0.5 py-3 bg-slate-700 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z"/>
              <circle cx="10" cy="8" r="2"/>
            </svg>
            Directions
          </a>
        </div>
        {/* Proof-layer note — mobile sticky CTA is a UX pattern test, not a live form */}
        {!isCleanPreview && (
          <div className="bg-slate-50 border-t border-slate-100 text-center text-slate-400 text-xs py-1">
            Mobile CTA row — proof-layer UX test · No tracking
          </div>
        )}
      </div>

      {/* Mobile sticky row spacer — prevents footer from being hidden behind sticky bar */}
      <div className="h-16 md:hidden" aria-hidden="true" />

    </div>
  );
}
