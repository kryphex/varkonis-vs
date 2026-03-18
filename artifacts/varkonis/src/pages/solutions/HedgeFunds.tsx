import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, BarChart3, ShieldAlert, Zap } from "lucide-react";

export default function HedgeFunds() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-[140px] pb-24 px-6 sm:px-12 max-w-7xl mx-auto text-center lg:text-left">
        <div className="text-xs tracking-[0.18em] uppercase text-primary flex items-center gap-3 mb-4 justify-center lg:justify-start font-bold">
          <span className="w-4 h-px bg-primary"></span>
          Solutions for Hedge Funds
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[0.95] tracking-tight mb-6">
              Built for <em className="not-italic bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Hedge Funds</em>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-10">
              Alpha generation analytics with institutional-grade infrastructure. Real-time multi-asset class analytics, advanced risk modeling, and seamless prime broker integrations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button href="/contact" variant="primary" size="lg">Get Started</Button>
              <Button href="/docs" variant="secondary" size="lg">Read Documentation</Button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl group-hover:bg-primary/30 transition-all duration-500 opacity-50"></div>
            <div className="relative bg-surface-1 border border-border rounded-2xl p-6 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <div className="text-sm font-bold uppercase tracking-widest text-white/40">Real-time Performance</div>
                <div className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">LIVE SYNC</div>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-12 bg-surface-2 rounded-lg border border-border/50 flex items-center px-4 gap-4 animate-pulse">
                    <div className="w-8 h-8 rounded bg-primary/20" />
                    <div className="flex-grow space-y-2">
                      <div className="h-2 bg-white/10 rounded w-1/3" />
                      <div className="h-2 bg-white/5 rounded w-1/2" />
                    </div>
                    <div className="w-16 h-2 bg-success/20 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Grid */}
      <section className="py-24 px-6 sm:px-12 bg-surface-1/50 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Eliminate Operational Friction</h2>
            <p className="text-white/50 max-w-2xl">Modern funds shouldn't be held back by legacy bottlenecks.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Data Silos",
                desc: "Fragmented data across prime brokers, custodians, and internal spreadsheets leads to errors.",
                icon: <ShieldAlert className="w-6 h-6 text-primary" />
              },
              {
                title: "Reporting Latency",
                desc: "Days of manual effort to produce shadow NAV and investor reports every month.",
                icon: <Zap className="w-6 h-6 text-success" />
              },
              {
                title: "Inflexible Risk Tools",
                desc: "Legacy risk systems that can't handle complex derivatives or custom stress tests.",
                icon: <BarChart3 className="w-6 h-6 text-accent" />
              }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="p-8 bg-surface-1 border border-border rounded-2xl hover:border-white/20 transition-all">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold mb-8">Institutional Capabilities</h2>
            <ul className="space-y-6">
              {[
                "Live position monitoring across all asset classes",
                "Complex derivatives pricing and Greeks tracking",
                "Automated shadow NAV and reconciliation",
                "Advanced VaR, CVaR and custom stress testing",
                "Multi-PB data aggregation and normalization",
                "Investor-ready portal with white-labeling"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-lg text-white/70">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface-2 border border-border rounded-2xl p-10 relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-all" />
             <h3 className="text-2xl font-bold mb-6">Risk Intelligence</h3>
             <div className="space-y-6">
                <div className="h-[200px] flex items-end gap-2 border-b border-border/50 pb-2">
                   {[40, 70, 45, 90, 65, 80, 50, 85, 60, 95].map((h, i) => (
                      <div key={i} style={{ height: `${h}%` }} className="flex-grow bg-primary/20 border-t-2 border-primary rounded-t-sm" />
                   ))}
                </div>
                <div className="flex justify-between text-xs font-mono text-white/30 uppercase tracking-widest">
                   <span>VaR (99%)</span>
                   <span className="text-success">$14.2M (-2.1%)</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 sm:px-12 max-w-5xl mx-auto text-center">
        <AnimatedSection className="bg-primary/10 border border-primary/20 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          <h2 className="text-3xl font-display font-bold mb-6">Ready to scale your alpha?</h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">Join the world's leading hedge funds who trust VARKONIS for their operational edge.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">Request Demo</Button>
            <Button href="/pricing" variant="secondary" size="lg">View Pricing</Button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
