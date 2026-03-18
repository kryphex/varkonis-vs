import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, UserCircle2, BrainCircuit, ShieldCheck, RefreshCw } from "lucide-react";

export default function WealthManagement() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-[140px] pb-24 px-6 sm:px-12 max-w-7xl mx-auto text-center lg:text-left">
        <div className="text-xs tracking-[0.18em] uppercase text-[#7b94ff] flex items-center gap-3 mb-4 justify-center lg:justify-start font-bold">
          <span className="w-4 h-px bg-[#7b94ff]"></span>
          Solutions for Wealth Managers
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[0.95] tracking-tight mb-6">
              Wealth Management <em className="not-italic bg-gradient-to-r from-[#7b94ff] to-[#7b94ff]/60 bg-clip-text text-transparent">Platform</em>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-10">
              Empower advisors with AI-generated portfolio commentary and white-labeled client reports that build immense trust. Scale your advisory practice intelligently.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button href="/contact" variant="primary" size="lg" className="bg-[#7b94ff] border-[#7b94ff] hover:bg-[#7b94ff]/90">Get Started</Button>
              <Button href="/docs" variant="secondary" size="lg">Read Documentation</Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative bg-surface-1 border border-border rounded-2xl p-6 shadow-2xl space-y-6">
               <div className="flex items-center gap-4 border-b border-border/50 pb-4">
                  <div className="w-10 h-10 rounded-full bg-surface-2 flex items-center justify-center">
                     <UserCircle2 className="w-6 h-6 text-[#7b94ff]" />
                  </div>
                  <div>
                     <div className="text-xs text-white/40 font-bold uppercase">Client Profile</div>
                     <div className="text-sm font-bold">High Net Worth Individual</div>
                  </div>
               </div>
               <div className="space-y-2">
                  <div className="text-[10px] text-white/30 uppercase font-bold">AI Client Summary</div>
                  <p className="text-xs text-white/60 leading-relaxed bg-surface-2 p-3 rounded-lg italic">
                    "Portfolio risk has decreased by 12% following the recent rebalance. Recommended action: Consider tax-loss harvesting in domestic equities."
                  </p>
               </div>
               <div className="flex gap-2">
                  <div className="flex-grow h-8 bg-primary/10 border border-primary/20 rounded-md flex items-center justify-center text-[10px] font-bold text-primary">SEND REPORT</div>
                  <div className="flex-grow h-8 bg-success/10 border border-success/20 rounded-md flex items-center justify-center text-[10px] font-bold text-success">APPROVE TRADES</div>
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
                title: "Client Portal",
                desc: "White-labeled dashboards that give clients a 360° view of their wealth.",
                icon: <UserCircle2 className="w-8 h-8 text-[#7b94ff]" />
              },
              {
                title: "AI Insights",
                desc: "Automated commentary and portfolio analysis powered by ML.",
                icon: <BrainCircuit className="w-8 h-8 text-primary" />
              },
              {
                title: "Compliance Tools",
                desc: "Integrated regulation-compliant reporting and activity tracking.",
                icon: <ShieldCheck className="w-8 h-8 text-success" />
              },
              {
                title: "Auto-Rebalancing",
                desc: "Intelligent trade execution and model portfolio management.",
                icon: <RefreshCw className="w-8 h-8 text-accent" />
              }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="p-8 bg-surface-1 border border-border rounded-2xl group hover:border-[#7b94ff]/20 transition-all">
                <div className="mb-6 bg-surface-2 p-4 rounded-xl inline-block">{item.icon}</div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold mb-8">Build deeper trust with every interaction.</h2>
            <ul className="space-y-6">
              {[
                "Branded client reports generated in minutes",
                "Advanced model portfolio management tools",
                "Integrated CRM and communication history",
                "Automated compliance and trade auditing",
                "Multi-asset class performance reporting",
                "Custom client alert engine"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#7b94ff] shrink-0 mt-0.5" />
                  <span className="text-lg text-white/70">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-[#7b94ff]/5 blur-3xl -z-10" />
            <div className="bg-surface-1 border border-border rounded-3xl p-10 overflow-hidden">
               <div className="flex items-center justify-between mb-8">
                  <div className="text-lg font-bold">Advisor Dashboard</div>
                  <div className="text-xs font-bold text-white/30 uppercase">Today's Priority</div>
               </div>
               <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-surface-2 p-4 rounded-xl border border-border/50 flex items-center justify-between">
                       <div className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <div className="text-sm font-semibold">Client Meeting: John Smith</div>
                       </div>
                       <div className="text-[10px] font-mono text-white/40">10:00 AM</div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 sm:px-12 max-w-5xl mx-auto text-center">
        <div className="bg-[#7b94ff]/10 border border-[#7b94ff]/20 rounded-[2rem] p-12">
          <h2 className="text-3xl font-display font-bold mb-6">Scale your impact.</h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">VARKONIS gives you the tools to manage more AUM without losing the personal touch.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg" className="bg-[#7b94ff] border-[#7b94ff] hover:bg-[#7b94ff]/90">Request Demo</Button>
            <Button href="/solutions" variant="secondary" size="lg">Explore Solutions</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
