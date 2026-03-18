import { Link } from "wouter";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Shield, LayoutGrid, BarChart3, AlertTriangle, ArrowRight } from "lucide-react";

export default function RiskIntelligence() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-[140px] pb-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-xs tracking-[0.18em] uppercase text-primary-hover flex items-center gap-3 mb-4">
          <span className="w-4 h-px bg-primary"></span>
          Platform Features
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[0.95] tracking-tight mb-6">
          Risk <em className="not-italic bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">Intelligence</em>
        </h1>
        <p className="text-white/60 text-base leading-relaxed max-w-2xl mb-10">
          Proactive risk monitoring before it becomes a problem. Multi-factor VaR, stress testing, and real-time exposure monitoring for the most demanding firms.
        </p>
        <Button href="/contact" size="lg">Request Access</Button>
      </section>

      {/* VaR/CVaR Dashboard Section */}
      <AnimatedSection className="py-24 bg-surface-1 border-y border-border px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">VaR/CVaR Monitoring</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "VaR (99%)", value: "$4.2M", desc: "Value at Risk", icon: <Shield className="w-5 h-5 text-primary" /> },
              { label: "CVaR (99%)", value: "$6.8M", desc: "Conditional Value at Risk", icon: <AlertTriangle className="w-5 h-5 text-primary" /> },
              { label: "Margin Usage", value: "32.1%", desc: "Current leverage usage", icon: <LayoutGrid className="w-5 h-5 text-primary" /> },
              { label: "Risk Score", value: "84/100", desc: "Overall risk health", icon: <BarChart3 className="w-5 h-5 text-primary" /> },
            ].map((metric, i) => (
              <div key={i} className="bg-surface-2 border border-border p-8 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">{metric.icon}</div>
                  <span className="text-xs font-bold text-white/30 uppercase tracking-widest">{metric.label}</span>
                </div>
                <div className="text-3xl font-display font-extrabold mb-1">{metric.value}</div>
                <p className="text-white/40 text-sm">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Feature Sections */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-32 flex flex-col gap-32">
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4 text-primary-hover">Correlation Matrix</h3>
            <p className="text-white/50 leading-relaxed mb-6">
              Identify hidden dependencies across your portfolio. Our correlation engine calculates cross-asset relationships in real-time, helping you avoid unintentional concentration.
            </p>
            <ul className="space-y-3">
              {['Dynamic cross-asset correlations', 'Rolling window correlation analysis', 'Stress-adjusted correlations', 'Historical correlation shifts'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface-2 border border-border rounded-2xl aspect-video relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <LayoutGrid className="w-24 h-24 text-white/5" />
          </div>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 bg-surface-2 border border-border rounded-2xl aspect-video relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent" />
            <Shield className="w-24 h-24 text-white/5" />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-display font-bold mb-4 text-primary-hover">Stress Testing & Scenario Analysis</h3>
            <p className="text-white/50 leading-relaxed mb-6">
              Model your portfolio against historical shocks and custom future scenarios. See how your assets would perform in a 2008-style crash or a sudden rate hike.
            </p>
            <ul className="space-y-3">
              {['Historical scenario replay', 'What-if macro shock simulations', 'Factor-based stress testing', 'Portfolio sensitivity (Greeks)'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>

      {/* CTA Section */}
      <section className="py-32 px-6 sm:px-12 text-center bg-surface-1 border-t border-border">
        <h2 className="text-4xl font-display font-extrabold mb-8">Ready to manage risk with <em className="not-italic text-primary">true authority?</em></h2>
        <Button href="/contact" size="lg" className="gap-2">
          Contact Sales <ArrowRight className="w-4 h-4" />
        </Button>
      </section>
    </div>
  );
}
