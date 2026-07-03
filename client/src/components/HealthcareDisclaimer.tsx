/**
 * HealthcareDisclaimer — Bierman Autism Centers Proof Layer
 *
 * Reusable healthcare informational disclaimer component.
 * Subtle, professional, trust-building — not fear-based.
 * Designed for footer placement and optional inline use.
 *
 * Usage:
 *   <HealthcareDisclaimer />                    // default footer variant
 *   <HealthcareDisclaimer variant="inline" />   // inline section variant
 *   <HealthcareDisclaimer variant="compact" />  // single-line compact variant
 */

interface HealthcareDisclaimerProps {
  variant?: "footer" | "inline" | "compact";
  className?: string;
}

export default function HealthcareDisclaimer({
  variant = "footer",
  className = "",
}: HealthcareDisclaimerProps) {

  if (variant === "compact") {
    return (
      <p className={`text-slate-400 text-xs leading-relaxed ${className}`}>
        Content on this site is informational only and does not constitute medical advice, diagnosis, or treatment. Consult a qualified healthcare professional for clinical guidance.
      </p>
    );
  }

  if (variant === "inline") {
    return (
      <div className={`bg-brand-teal-50 border border-brand-teal-200 rounded-xl p-4 ${className}`}>
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-brand-teal" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="10" cy="10" r="8" />
              <path d="M10 7v4M10 13h.01" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="text-brand-teal-800 text-sm font-semibold mb-1">Informational Content</p>
            <p className="text-brand-teal-700 text-sm leading-relaxed">
              The information on this page is provided for educational purposes only. It is not intended as medical advice, clinical diagnosis, or treatment guidance. Families seeking support for their child should speak directly with a qualified healthcare professional or contact Bierman Autism Centers to discuss their child's specific needs.
            </p>
            <p className="text-brand-teal text-xs mt-2">
              If you are experiencing an emergency, call 911 or your local emergency services immediately.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Default: footer variant
  return (
    <div className={`border-t border-white/10 pt-6 mt-6 ${className}`}>
      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
        <p className="text-white/50 text-xs leading-relaxed text-center">
          <span className="text-white/70 font-semibold">Healthcare Disclaimer:</span>{" "}
          Content on this site is provided for informational and educational purposes only. It does not constitute medical advice, clinical diagnosis, or treatment recommendations, and does not establish a provider-patient relationship. Families should consult qualified healthcare professionals for clinical guidance specific to their child's needs.{" "}
          <span className="text-white/40">For emergencies, call 911.</span>
        </p>
      </div>
    </div>
  );
}
