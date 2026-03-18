import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Cases() {
  const cases = [
    {
      company: "Aldgate Capital",
      type: "Hedge Fund",
      metric: "70%",
      metricLabel: "Reduction in reporting time",
      title: "How Aldgate Capital automated their entire shadow NAV process",
      image: "bg-primary/20"
    },
    {
      company: "Meridian Wealth",
      type: "Wealth Management",
      metric: "$1.2B",
      metricLabel: "AUM migrated in 48 hours",
      title: "Consolidating 4 legacy systems into a single advisor portal",
      image: "bg-success/20"
    },
    {
      company: "Kestrel Fund",
      type: "Private Equity",
      metric: "0",
      metricLabel: "Data leaks in 3 years",
      title: "Building an impenetrable deal vault for sensitive M&A data",
      image: "bg-accent"
    },
    {
      company: "Forsyth Group",
      type: "Family Office",
      metric: "14",
      metricLabel: "Custodians normalized",
      title: "A single pane of glass for multi-generational wealth tracking",
      image: "bg-white/10"
    }
  ];

  return (
    <div className="w-full pt-10 pb-24 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-eyebrow">Customer Stories</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold mb-6">
            Proven at scale.
          </h1>
          <p className="text-lg text-white/50 max-w-2xl">
            Read how the world's most demanding financial institutions use VARKONIS to manage risk, report to LPs, and find edge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="group cursor-pointer">
              <Link href="/contact" className="block h-full bg-surface-1 border border-border rounded-2xl overflow-hidden hover:border-white/20 transition-all hover:shadow-2xl hover:-translate-y-1">
                {/* Header Graphic */}
                <div className={`h-48 ${c.image} relative overflow-hidden flex items-center justify-center`}>
                   <img src={`${import.meta.env.BASE_URL}images/case-study-1.png`} alt="Abstract graphic" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" />
                   <div className="relative z-10 text-3xl font-display font-black text-white/80 tracking-widest uppercase mix-blend-overlay">{c.company}</div>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {c.type}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold mb-6 group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  
                  <div className="bg-surface-2 rounded-lg p-4 border border-border flex items-center gap-4 mb-6">
                    <div className="text-3xl font-display font-black text-white">{c.metric}</div>
                    <div className="text-xs text-white/50 font-semibold uppercase tracking-wider">{c.metricLabel}</div>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-white/50 group-hover:text-white transition-colors">
                    Read Case Study <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
