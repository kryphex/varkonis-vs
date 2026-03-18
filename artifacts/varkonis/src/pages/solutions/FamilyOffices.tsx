import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, LayoutDashboard, Briefcase, FileSpreadsheet, Landmark, UserCheck, ShieldCheck, PieChart } from "lucide-react";

export default function FamilyOffices() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-[140px] pb-24 px-6 sm:px-12 max-w-7xl mx-auto text-center lg:text-left">
        <div className="text-xs tracking-[0.18em] uppercase text-[#febc2e] flex items-center gap-3 mb-4 justify-center lg:justify-start font-bold">
          <span className="w-4 h-px bg-[#febc2e]"></span>
          Solutions for Family Offices
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[0.95] tracking-tight mb-6">
              Family Office <em className="not-italic bg-gradient-to-r from-[#febc2e] to-[#febc2e]/60 bg-clip-text text-transparent">Command Center</em>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-10">
              Consolidate fragmented wealth across multiple managers and asset classes into a single, cohesive dashboard. Unified visibility for multi-generational wealth tracking.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button href="/contact" variant="primary" size="lg" className="bg-[#febc2e] border-[#febc2e] text-black hover:bg-[#febc2e]/90">Get Started</Button>
              <Button href="/docs" variant="secondary" size="lg">Read Documentation</Button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#febc2e]/10 rounded-2xl blur-2xl group-hover:bg-[#febc2e]/20 transition-all duration-500 opacity-50"></div>
            <div className="relative bg-surface-1 border border-border rounded-2xl p-8 shadow-2xl overflow-hidden">
               <div className="flex justify-between items-center mb-10">
                  <div className="w-12 h-12 rounded-full bg-surface-2 border border-border flex items-center justify-center">
                     <Landmark className="w-6 h-6 text-[#febc2e]" />
                  </div>
                  <div className="text-right">
                     <div className="text-xs text-white/30 uppercase font-bold">Total Wealth</div>
                     <div className="text-2xl font-display font-bold text-white">$1.24B</div>
                  </div>
               </div>
               <div className="space-y-4">
                  {[
                    { label: "Equities", val: "42%", color: "bg-[#febc2e]" },
                    { label: "Private Equity", val: "28%", color: "bg-primary" },
                    { label: "Real Estate", val: "20%", color: "bg-success" },
                    { label: "Cash/Other", val: "10%", color: "bg-white/20" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                       <div className="w-24 text-xs font-bold text-white/40 uppercase tracking-tighter">{item.label}</div>
                       <div className="flex-grow h-2 bg-white/5 rounded-full overflow-hidden">
                          <div className={`h-full ${item.color}`} style={{ width: item.val }} />
                       </div>
                       <div className="w-10 text-xs font-mono text-white/60 text-right">{item.val}</div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 px-6 sm:px-12 bg-surface-1/50 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Sophisticated wealth management, simplified.</h2>
            <p className="text-white/50 max-w-2xl mx-auto">VARKONIS handles the complexity so you can focus on the legacy.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Multi-Custodian Aggregation",
                desc: "Automatically sync data from over 200+ global custodians and prime brokers.",
                icon: <PieChart className="w-6 h-6 text-[#febc2e]" />
              },
              {
                title: "Estate & Tax Overlay",
                desc: "Visualize wealth through the lens of legal entities, trusts, and tax jurisdictions.",
                icon: <ShieldCheck className="w-6 h-6 text-primary" />
              },
              {
                title: "Concierge Support",
                desc: "Dedicated solutions engineers to handle complex data onboarding and custom reporting.",
                icon: <UserCheck className="w-6 h-6 text-success" />
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
            <h2 className="text-3xl font-display font-bold mb-8">Unmatched Visibility</h2>
            <ul className="space-y-6">
              {[
                "Consolidated balance sheets across all asset classes",
                "Private investment tracking (drawdowns, distributions)",
                "Customizable LP style reporting for family members",
                "Real-time liquidity and cash flow forecasting",
                "Document vault for legal and estate planning",
                "Entity-level accounting and performance attribution"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#febc2e] shrink-0 mt-0.5" />
                  <span className="text-lg text-white/70">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface-2 border border-border rounded-2xl p-1 relative overflow-hidden">
             <div className="bg-surface-1 p-8 rounded-xl border border-border/50">
                <h3 className="text-xl font-bold mb-6">Wealth Projection</h3>
                <div className="h-64 flex items-center justify-center border-b border-border/50 mb-4">
                   <div className="relative w-full h-full">
                      <svg viewBox="0 0 400 200" className="w-full h-full stroke-primary fill-none stroke-2">
                         <path d="M0,180 Q100,160 200,100 T400,20" />
                         <path d="M0,180 Q100,170 200,140 T400,100" className="stroke-[#febc2e]" />
                      </svg>
                   </div>
                </div>
                <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-white/30">
                   <span>2024</span>
                   <span>2034 (Estimated)</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 sm:px-12 max-w-5xl mx-auto text-center">
        <div className="bg-[#febc2e]/10 border border-[#febc2e]/20 rounded-3xl p-12">
          <h2 className="text-3xl font-display font-bold mb-6">Preserve and grow your legacy.</h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">Experience the power of a modern family office command center.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg" className="bg-[#febc2e] border-[#febc2e] text-black hover:bg-[#febc2e]/90">Request Demo</Button>
            <Button href="/cases" variant="secondary" size="lg">Read Case Studies</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
