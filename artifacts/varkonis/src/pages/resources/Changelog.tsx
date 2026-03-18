import { Link } from "wouter";
import { Terminal, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

const CHANGELOG = [
  {
    version: "v2.4",
    date: "May 15, 2024",
    title: "AI Risk Attribution & Webhooks",
    features: [
      "New AI-powered risk attribution module for multi-asset portfolios.",
      "Enhanced webhook engine with support for Slack and Microsoft Teams.",
      "Real-time volatility surface visualization for options traders.",
      "Improved performance for large dataset rendering in Market Terminal."
    ]
  },
  {
    version: "v2.3",
    date: "April 02, 2024",
    title: "Enterprise API Refresh",
    features: [
      "Complete overhaul of the REST API with improved rate limiting.",
      "New Python and TypeScript SDKs released to public beta.",
      "Support for OIDC and custom SAML 2.0 identity providers.",
      "Custom branding options for client-facing PDF reports."
    ]
  },
  {
    version: "v2.2",
    date: "February 14, 2024",
    title: "Private Equity Module",
    features: [
      "Launch of the Private Equity deal flow management suite.",
      "Automated IRR and DPI calculation engine for GP reporting.",
      "Enhanced security with hardware-based 2FA support.",
      "Global search performance improved by 40%."
    ]
  },
  {
    version: "v2.1",
    date: "December 05, 2023",
    title: "Macro Calendar & Insights",
    features: [
      "Integrated global economic calendar in the Market Terminal.",
      "Daily AI-generated market briefing sent to mobile app.",
      "Support for FX and Commodities in the Risk Intelligence module.",
      "New audit logs for compliance teams."
    ]
  },
  {
    version: "v2.0",
    date: "October 10, 2023",
    title: "VARKONIS 2.0",
    features: [
      "Complete platform redesign with the new Syne font-display system.",
      "New modular dashboard architecture allowing custom layout saving.",
      "First launch of the AI Insights pattern detection engine.",
      "Consolidated multi-asset view for complex family offices."
    ]
  }
];

export default function Changelog() {
  return (
    <div className="min-h-screen bg-background text-white font-manrope">
      {/* Hero Section */}
      <section className="pt-[140px] pb-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-xs tracking-[0.18em] uppercase text-primary-hover flex items-center gap-3 mb-4 font-bold">
          <span className="w-4 h-px bg-primary"></span>
          Product Updates
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[0.95] tracking-tight mb-6">
          Stay Updated with <em className="not-italic text-gradient">VARKONIS evolution.</em>
        </h1>
        <p className="text-white/60 text-base leading-relaxed max-w-2xl">
          Track every improvement, feature release, and architectural upgrade as we continue to build the most powerful financial platform in the industry.
        </p>
      </section>

      {/* Changelog Timeline */}
      <section className="pb-32 px-6 sm:px-12 max-w-4xl mx-auto">
        <div className="space-y-16">
          {CHANGELOG.map((release, i) => (
            <div key={release.version} className="relative pl-12 sm:pl-20 group">
              {/* Vertical Line */}
              {i !== CHANGELOG.length - 1 && (
                <div className="absolute left-[23px] sm:left-[39px] top-10 bottom-[-64px] w-px bg-border group-hover:bg-primary/30 transition-colors"></div>
              )}
              
              {/* Version Badge */}
              <div className="absolute left-0 top-0 w-12 h-12 sm:w-20 sm:h-20 bg-surface-1 border border-border rounded-xl flex flex-col items-center justify-center group-hover:border-primary/50 transition-colors z-10">
                <span className="text-[10px] sm:text-xs font-bold text-primary mb-0.5">{release.version}</span>
                <span className="text-[8px] sm:text-[10px] font-bold text-white/30 uppercase tracking-wider">{release.date.split(',')[1].trim()}</span>
              </div>

              <div className="bg-surface-1 border border-border rounded-xl p-8 group-hover:bg-surface-2 transition-colors">
                <div className="text-xs text-white/40 mb-2 font-bold uppercase tracking-wider">{release.date}</div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold mb-6 text-white">{release.title}</h3>
                
                <ul className="space-y-4">
                  {release.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-white/70 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-surface-1 border-t border-border px-6 sm:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="font-display font-extrabold text-3xl mb-6">Want a feature we haven't built yet?</h2>
          <p className="text-white/60 mb-10">We prioritize our roadmap based on client feedback. Get in touch with our product team.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-3 rounded-lg transition-colors">
            Contact Product Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
