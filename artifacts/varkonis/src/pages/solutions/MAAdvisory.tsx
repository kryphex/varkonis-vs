import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, Search, Database, FileText, Workflow } from "lucide-react";

export default function MAAdvisory() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-[140px] pb-24 px-6 sm:px-12 max-w-7xl mx-auto text-center lg:text-left">
        <div className="text-xs tracking-[0.18em] uppercase text-primary flex items-center gap-3 mb-4 justify-center lg:justify-start font-bold">
          <span className="w-4 h-px bg-primary"></span>
          Solutions for M&A Advisory
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[0.95] tracking-tight mb-6">
              M&A Advisory <em className="not-italic bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Suite</em>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-10">
              Intelligence for deal makers. Track comparable transactions, screen targets, and manage due diligence workflows with institutional precision.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button href="/contact" variant="primary" size="lg">Get Started</Button>
              <Button href="/docs" variant="secondary" size="lg">Read Documentation</Button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-3xl group-hover:bg-primary/20 transition-all duration-500 opacity-50"></div>
            <div className="relative bg-surface-1 border border-border rounded-2xl p-8 shadow-2xl overflow-hidden">
               <div className="flex items-center gap-4 mb-8">
                  <div className="bg-surface-2 p-3 rounded-xl border border-border/50">
                     <Search className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-grow bg-surface-2 h-10 rounded-lg border border-border/50 flex items-center px-4 text-white/30 text-xs">Target screening...</div>
               </div>
               <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-surface-2 rounded-xl border border-border/50">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-white/5" />
                          <div className="text-sm font-bold">Acme Corp v. Global Industries</div>
                       </div>
                       <div className="text-xs text-primary font-mono font-bold">$1.2B</div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 px-6 sm:px-12 bg-surface-1/50 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Comparable Deals",
                desc: "Access a proprietary database of historical transactions and valuations.",
                icon: <Database className="w-8 h-8 text-primary" />
              },
              {
                title: "Target Screening",
                desc: "Identify potential acquisition targets based on custom financial criteria.",
                icon: <Search className="w-8 h-8 text-success" />
              },
              {
                title: "Due Diligence",
                desc: "Integrated workflow tools for managing data rooms and document review.",
                icon: <Workflow className="w-8 h-8 text-accent" />
              },
              {
                title: "Valuation Models",
                desc: "Pre-built, dynamic templates for DCF, LBO, and merger analytics.",
                icon: <FileText className="w-8 h-8 text-primary" />
              }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="p-8 bg-surface-1 border border-border rounded-2xl group hover:border-primary/20 transition-all">
                <div className="mb-6 bg-surface-2 p-4 rounded-xl inline-block group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold mb-8">Intelligence for every deal stage.</h2>
            <ul className="space-y-6">
              {[
                "Proprietary transaction database",
                "Advanced target identification and filtering",
                "Due diligence progress tracking",
                "Dynamic merger and acquisition models",
                "Pitchbook-ready visuals and data exports",
                "Secure data room management"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-lg text-white/70">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface-2 border border-border rounded-2xl p-10 overflow-hidden relative">
             <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 blur-3xl -ml-16 -mt-16" />
             <h3 className="text-xl font-bold mb-6">Deal Pipeline</h3>
             <div className="space-y-6">
                {[
                  { label: "Sourcing", val: "85%", color: "bg-primary" },
                  { label: "Diligence", val: "45%", color: "bg-success" },
                  { label: "Closing", val: "20%", color: "bg-accent" }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                     <div className="flex justify-between text-xs font-bold text-white/40 uppercase">
                        <span>{item.label}</span>
                        <span>{item.val}</span>
                     </div>
                     <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color}`} style={{ width: item.val }} />
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 sm:px-12 max-w-5xl mx-auto text-center">
        <div className="bg-primary/10 border border-primary/20 rounded-[2.5rem] p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -mr-32 -mt-32" />
          <h2 className="text-3xl font-display font-bold mb-6">Accelerate your deal cycle.</h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">VARKONIS provides the intelligence you need to make better investment decisions.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">Request Demo</Button>
            <Button href="/pricing" variant="secondary" size="lg">Explore Plans</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
