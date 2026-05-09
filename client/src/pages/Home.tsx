/**
 * Bierman Autism Centers — Proof Layer
 * Ramsey, NJ Location Page
 *
 * Design: Clean healthcare trust architecture
 * - Dark navy (#1a2b47) primary brand
 * - Teal (#0d9488) accent
 * - Orange (#f97316) CTA
 * - White/light gray backgrounds for sections
 *
 * PROOF LAYER — NOT PRODUCTION
 * noindex, nofollow | No tracking | No live forms | No patient data
 */

const ASSETS = {
  logo: "/manus-storage/bierman-logo-anniversary-20_3f19246b.webp",
  facility: "/manus-storage/bierman-autism-new-jersey-ramsey-facility-main_296feafd.webp",
  speechTherapy: "/manus-storage/bierman-autism-speech-therapy-room_5813b4e7.jpg",
  mascot: "/manus-storage/bierman-autism-pilot-mascot-standing_ab2e5cf1.webp",
  insurance: "/manus-storage/bierman-autism-insurance-horizon-bcbs-new-jersey_8162212b.webp",
  videoPoster: "/manus-storage/bierman-ramsey-video-poster_28eb470d.jpg",
  video: "/manus-storage/bierman-ramsey-aba-therapy-overview_e3501ef2.mp4",
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
  { name: "Piscataway, NJ", url: "#" },
  { name: "West Orange, NJ", url: "#" },
  { name: "Princeton, NJ", url: "#" },
  { name: "Cranford, NJ", url: "#" },
  { name: "Parsippany, NJ", url: "#" },
  { name: "All 33 Locations →", url: "#" },
];

const SERVICES = [
  {
    title: "ABA Therapy",
    desc: "Applied Behavior Analysis — individualized, evidence-based therapy designed to build communication, social, and daily living skills.",
    img: null,
    link: "#",
  },
  {
    title: "Speech-Language Therapy",
    desc: "Targeted speech and language support to help children communicate more effectively and confidently.",
    img: ASSETS.speechTherapy,
    link: "#",
  },
  {
    title: "Occupational Therapy",
    desc: "Sensory integration, fine motor skills, and daily living activities to support independence and engagement.",
    img: null,
    link: "#",
  },
  {
    title: "Diagnostic Evaluation",
    desc: "Comprehensive autism diagnostic evaluations by licensed clinicians, with results and recommendations for families.",
    img: null,
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
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Proof Layer Banner */}
      <div className="bg-amber-500 text-amber-950 text-center py-2 px-4 text-sm font-semibold tracking-wide sticky top-0 z-50">
        ⚠ PROOF LAYER — Development Review Environment | Not the live production site | noindex · nofollow · No tracking · No patient data
      </div>

      {/* Navigation */}
      <nav className="bg-[#1a2b47] sticky top-[36px] z-40 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={ASSETS.logo} alt="Bierman Autism Centers 20th Anniversary" className="h-10 w-auto" />
            <div className="hidden md:block">
              <span className="text-white/60 text-sm">|</span>
              <span className="text-white/80 text-sm ml-3">Ramsey, New Jersey</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href={`tel:${LOCATION.phone}`} className="hidden md:block text-white/80 hover:text-white text-sm transition-colors">
              {LOCATION.phone}
            </a>
            <a
              href={LOCATION.intakeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Request Services
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#1a2b47] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-teal-400 text-sm font-medium">📍 Ramsey, New Jersey</span>
              <span className="text-white/40">·</span>
              <span className="text-teal-400 text-sm">Bergen County</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              ABA Therapy in Ramsey, New Jersey
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Bierman Autism Centers in Ramsey provides individualized ABA therapy, speech-language therapy, occupational therapy, and diagnostic evaluations for children with autism. Serving Bergen County and surrounding New Jersey communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={LOCATION.intakeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors text-center"
              >
                Request Services in Ramsey
              </a>
              <a
                href={`tel:${LOCATION.phone}`}
                className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors text-center"
              >
                {LOCATION.phone}
              </a>
            </div>
            {/* GBP-Verified NAP Card */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-5 inline-block">
              <div className="flex items-start gap-3">
                <span className="text-teal-400 text-xl mt-0.5">✓</span>
                <div>
                  <div className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-1">GBP Verified Location</div>
                  <div className="text-white font-semibold">Bierman Autism Centers — Ramsey</div>
                  <div className="text-white/70 text-sm">{LOCATION.address}, {LOCATION.city}, {LOCATION.state} {LOCATION.zip}</div>
                  <div className="text-white/70 text-sm">{LOCATION.phone}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-teal-700 text-white py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm font-medium">
            {["✓ Evidence-Based ABA Therapy", "✓ Insurance Accepted", "✓ BCBA-Supervised Programs", "✓ 20 Years of Experience", "✓ Serving Bergen County"].map((item) => (
              <span key={item} className="text-white/90">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={ASSETS.facility}
                alt="Modern and welcoming interior of the Bierman Autism Centers clinic in Ramsey, New Jersey"
                className="rounded-2xl shadow-xl w-full object-cover"
                style={{ maxHeight: "400px" }}
              />
            </div>
            <div>
              <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">Our Ramsey Clinic</div>
              <h2 className="text-3xl font-bold text-[#1a2b47] mb-4">A Welcoming Environment for Every Child</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Ramsey center is designed to be a safe, engaging, and supportive space for children and families. Every aspect of our clinic — from the therapy rooms to the waiting areas — is built with the needs of children with autism in mind.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our clinical team in Ramsey includes Board Certified Behavior Analysts (BCBAs), Registered Behavior Technicians (RBTs), speech-language pathologists, and occupational therapists working collaboratively on each child's individualized plan.
              </p>
              <div className="flex items-center gap-4">
                <img src={ASSETS.mascot} alt="Pilot the Penguin, the Bierman Autism Centers mascot" className="h-16 w-auto" />
                <div>
                  <div className="font-semibold text-[#1a2b47]">Pilot the Penguin</div>
                  <div className="text-gray-500 text-sm">Bierman's mascot — a friendly guide for every child's journey</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">Services at Ramsey</div>
            <h2 className="text-3xl font-bold text-[#1a2b47]">Comprehensive Autism Support Services</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">Each service is individualized to your child's goals and delivered by licensed, experienced clinicians.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc) => (
              <div key={svc.title} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                {svc.img ? (
                  <img src={svc.img} alt={svc.title} className="w-full h-40 object-cover" />
                ) : (
                  <div className="w-full h-40 bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center">
                    <span className="text-4xl">{svc.title === "ABA Therapy" ? "🧩" : svc.title === "Occupational Therapy" ? "🖐" : "🔬"}</span>
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-bold text-[#1a2b47] text-lg mb-2">{svc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <a href={svc.link} className="text-teal-600 font-semibold text-sm hover:text-teal-800 transition-colors">Learn more →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">Insurance & Coverage</div>
            <h2 className="text-2xl font-bold text-[#1a2b47]">We Accept Most Major Insurance Plans</h2>
            <p className="text-gray-500 text-sm mt-2">Insurance logo display — final approved logos to be confirmed with Bierman marketing team before production use.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border-2 border-teal-200">
              <img src={ASSETS.insurance} alt="Horizon Blue Cross Blue Shield New Jersey logo" className="h-10 w-auto" />
            </div>
            {["Aetna", "United Healthcare", "Cigna", "Carelon", "Ambetter", "UMR", "ComPsych", "Meritain", "Surest"].map((ins) => (
              <div key={ins} className="bg-white rounded-xl px-5 py-3 shadow-sm border border-gray-200">
                <span className="text-gray-700 font-medium text-sm">{ins}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Don't see your plan? <a href={LOCATION.intakeUrl} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-medium">Contact us to verify your coverage →</a>
          </p>
        </div>
      </section>

      {/* Map + Location Details */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">Location & Directions</div>
              <h2 className="text-3xl font-bold text-[#1a2b47] mb-6">Find Our Ramsey Clinic</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 text-lg mt-0.5">📍</span>
                  <div>
                    <div className="font-semibold text-[#1a2b47]">Address</div>
                    <div className="text-gray-600">{LOCATION.address}<br />{LOCATION.city}, {LOCATION.state} {LOCATION.zip}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 text-lg mt-0.5">📞</span>
                  <div>
                    <div className="font-semibold text-[#1a2b47]">Phone</div>
                    <a href={`tel:${LOCATION.phone}`} className="text-teal-600 hover:underline">{LOCATION.phone}</a>
                    <div className="text-gray-400 text-xs mt-1">Phone number pending client NAP confirmation</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 text-lg mt-0.5">🕐</span>
                  <div>
                    <div className="font-semibold text-[#1a2b47]">Hours</div>
                    <div className="text-gray-600">Monday – Friday: 8:00 AM – 6:00 PM</div>
                    <div className="text-gray-400 text-xs mt-1">Hours pending client confirmation</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 text-lg mt-0.5">🗺</span>
                  <div>
                    <div className="font-semibold text-[#1a2b47]">Service Area</div>
                    <div className="text-gray-600">Bergen County, Passaic County, and surrounding NJ communities</div>
                  </div>
                </div>
              </div>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(LOCATION.address + ", " + LOCATION.city + ", " + LOCATION.state + " " + LOCATION.zip)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1a2b47] hover:bg-[#243d63] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Get Directions →
              </a>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200" style={{ height: "380px" }}>
                <iframe
                  src={LOCATION.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="eager"
                  title="Bierman Autism Centers Ramsey NJ location map"
                  aria-label="Map showing location of Bierman Autism Centers in Ramsey, New Jersey"
                />
              </div>
              <p className="text-gray-400 text-xs mt-2 text-center">Map embed — confirm coordinates match GBP-verified address before production</p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 bg-[#1a2b47] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-teal-400 text-sm font-bold uppercase tracking-widest mb-2">Getting Started</div>
            <h2 className="text-3xl font-bold">How to Begin Services at Ramsey</h2>
            <p className="text-white/70 mt-3 max-w-2xl mx-auto">Our intake process is designed to be straightforward and supportive for families.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Submit a Request", desc: "Complete our intake request form. A team member will contact you within 1–2 business days." },
              { step: "02", title: "Insurance Verification", desc: "We verify your insurance coverage and explain your benefits before any commitment." },
              { step: "03", title: "Initial Consultation", desc: "Meet with our clinical team to discuss your child's needs and goals." },
              { step: "04", title: "Begin Services", desc: "Your child's individualized program begins with ongoing family collaboration." },
            ].map((item) => (
              <div key={item.step} className="bg-white/10 rounded-2xl p-6">
                <div className="text-teal-400 font-bold text-3xl mb-3">{item.step}</div>
                <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={LOCATION.intakeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors inline-block"
            >
              Start the Process →
            </a>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-teal-400 text-sm font-bold uppercase tracking-widest mb-2">See ABA Therapy in Action</div>
          <h2 className="text-3xl font-bold text-white mb-4">ABA Therapy at Bierman Ramsey</h2>
          <p className="text-gray-400 mb-8">Watch how our team works with children in a supportive, structured environment.</p>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <video
              src={ASSETS.video}
              poster={ASSETS.videoPoster}
              controls
              muted
              preload="none"
              playsInline
              aria-label="ABA therapy overview at Bierman Autism Centers Ramsey, New Jersey"
              style={{ width: "100%", display: "block" }}
            />
          </div>
          <div className="mt-4 bg-amber-900/40 border border-amber-600/40 rounded-xl px-6 py-3 inline-block">
            <p className="text-amber-300 text-sm font-medium">
              ⚠ Video asset — usage rights and identifiable people review required before production use.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-4">
            <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">Family Reviews</div>
            <h2 className="text-3xl font-bold text-[#1a2b47]">What Families Say About Ramsey</h2>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-6 py-3 text-center mb-8">
            <p className="text-amber-700 text-sm font-medium">
              Example local review module — live GBP reviews to be reviewed and approved before production use.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "The team at Bierman Ramsey has been incredible. Our son has made more progress in six months than we saw in the previous two years.", author: "Parent, Bergen County", rating: 5 },
              { text: "From the first call to the first session, every step was handled with care and professionalism. We finally feel supported.", author: "Parent, Ramsey NJ", rating: 5 },
              { text: "The BCBAs here truly understand our daughter. The individualized approach makes all the difference.", author: "Parent, Passaic County", rating: 5 },
            ].map((review, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <div className="text-amber-400 text-xl mb-3">{"★".repeat(review.rating)}</div>
                <p className="text-gray-700 leading-relaxed mb-4 italic">"{review.text}"</p>
                <div className="text-gray-500 text-sm font-medium">— {review.author}</div>
                <div className="mt-3 bg-red-50 border border-red-200 rounded-lg px-3 py-1.5 text-xs text-red-600 font-semibold">
                  EXAMPLE LAYOUT — NOT A REAL REVIEW
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Locations */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
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
                className="bg-white border border-gray-200 hover:border-teal-400 hover:bg-teal-50 text-[#1a2b47] font-medium px-5 py-2.5 rounded-xl text-sm transition-colors"
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
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-[#1a2b47] hover:bg-gray-50 transition-colors list-none">
                  {faq.q}
                  <span className="text-teal-600 ml-4 flex-shrink-0 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started in Ramsey?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step toward individualized autism support for your child. Our Ramsey team is here to guide your family through every stage of the process.
          </p>
          <a
            href={LOCATION.intakeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-12 py-5 rounded-xl text-xl transition-colors inline-block shadow-lg"
          >
            Request Services in Ramsey →
          </a>
          <p className="text-white/50 text-sm mt-6">
            CTA routes to existing production intake system — production intake untouched by this proof layer.
          </p>
        </div>
      </section>

      {/* Footer */}
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
          <div className="border-t border-white/10 pt-6">
            <div className="bg-amber-900/30 border border-amber-600/30 rounded-xl p-4 text-center">
              <p className="text-amber-300 text-xs leading-relaxed">
                <strong>PROOF LAYER NOTICE:</strong> This page is a production-safe proof environment demonstrating the recommended location page architecture for Bierman Autism Centers. It is hosted on a development URL, is set to noindex/nofollow, contains no tracking scripts, collects no patient data, and does not affect the live production website at biermanautism.com. The recommended client-owned URL for this page would be pilot.biermanautism.com/locations/new-jersey/ramsey/ — pending Bierman DNS approval. No DNS changes have been made.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
