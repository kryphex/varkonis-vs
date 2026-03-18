import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, LayoutDashboard, Briefcase, FileSpreadsheet } from "lucide-react";

export default function PrivateEquity() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-[140px] pb-24 px-6 sm:px-12 max-w-7xl mx-auto text-center lg:text-left">
        <div className="text-xs tracking-[0.18em] uppercase text-success flex items-center gap-3 mb-4 justify-center lg:justify-start font-bold">
          <span className="w-4 h-px bg-success"></span>
          Solutions for Private Equity
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[0.95] tracking-tight mb-6">
              Private Equity <em className="not-italic bg-gradient-to-r from-success to-success/60 bg-clip-text text-transparent">Intelligence</em>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-10">
              Manage your entire investment lifecycle from sourcing to exit. Centralize deal flow, portfolio monitoring, and LP reporting in one secure vault.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button href="/contact" variant="primary" size="lg">Get Started</Button>
              <Button href="/docs" variant="secondary" size="lg">Read Documentation</Button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-success/10 rounded-2xl blur-2xl group-hover:bg-success/20 transition-all duration-500 opacity-50"></div>
            <div className="relative bg-surface-1 border border-border rounded-2xl p-6 shadow-2xl overflow-hidden">
               <div className="mb-6 flex items-center justify-between border-b border-border/50 pb-4">
                  <div className="text-sm font-bold uppercase tracking-widest text-white/40">Portfolio Overview</div>
                  <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-success" />
                     <div className="w-2 h-2 rounded-full bg-white/20" />
                     <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface-2 p-4 rounded-xl border border-border/50">
                     <div className="text-xs text-white/30 uppercase font-bold mb-1">Total AUM</div>
                     <div className="text-2xl font-display font-bold text-white">$4.8B</div>
                  </div>
                  <div className="bg-surface-2 p-4 rounded-xl border border-border/50">
                     <div className="text-xs text-white/30 uppercase font-bold mb-1">Fund IRR</div>
                     <div className="text-2xl font-display font-bold text-success">24.2%</div>
                  </div>
                  <div className="bg-surface-2 p-4 rounded-xl border border-border/50 col-span-2">
                     <div className="text-xs text-white/30 uppercase font-bold mb-2">Deal Pipeline</div>
                     <div className="flex gap-2">
                        <div className="h-2 flex-grow bg-success/20 rounded-full overflow-hidden">
                           <div className="h-full bg-success w-[75%]" />
                        </div>
                        <div className="text-[10px] font-mono text-white/50">75% TARGET</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 px-6 sm:px-12 bg-surface-1/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Deal Sourcing",
                desc: "Track every lead from initial outreach to letter of intent.",
                icon: <Briefcase className="w-8 h-8 text-success" />
              },
              {
                title: "Portfolio Monitoring",
                desc: "Real-time visibility into portfolio company performance and KPIs.",
                icon: <LayoutDashboard className="w-8 h-8 text-primary" />
              },
              {
                title: "LP Reporting",
                desc: "Automated, branded investor portals and distribution tracking.",
                icon: <FileSpreadsheet className="w-8 h-8 text-accent" />
              },
              {
                title: "IRR Analytics",
                desc: "Precise fund performance metrics including IRR, MOIC, and DPI.",
                icon: <CheckCircle2 className="w-8 h-8 text-success" />
              }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="p-8 bg-surface-1 border border-border rounded-2xl flex flex-col items-center text-center group hover:border-success/20 transition-all">
                <div className="mb-6 bg-surface-2 p-4 rounded-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-8">Streamline your entire lifecycle.</h2>
            <div className="space-y-8">
               <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center shrink-0 border border-success/20 text-success font-bold font-display">01</div>
                  <div>
                     <h4 className="font-bold text-lg mb-2">Deal Pipeline Management</h4>
                     <p className="text-white/50">Customizable kanban boards, contact management, and integrated due diligence checklists for every deal stage.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 text-primary font-bold font-display">02</div>
                  <div>
                     <h4 className="font-bold text-lg mb-2">Portfolio Data Collection</h4>
                     <p className="text-white/50">Direct integration with portfolio company ERPs or simple, recurring data request workflows for quarterly financials.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20 text-accent font-bold font-display">03</div>
                  <div>
                     <h4 className="font-bold text-lg mb-2">LP Reporting Automation</h4>
                     <p className="text-white/50">Generate capital call notices, distribution letters, and comprehensive fund reports with a single click.</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="relative bg-surface-1 border border-border rounded-3xl p-1 overflow-hidden">
             <div className="aspect-[4/3] bg-surface-2 rounded-2xl overflow-hidden relative flex items-center justify-center p-8">
                <div className="w-full space-y-4">
                   <div className="flex justify-between items-end mb-4">
                      <div className="h-8 w-32 bg-white/10 rounded" />
                      <div className="h-6 w-20 bg-success/20 rounded" />
                   </div>
                   <div className="h-[2px] bg-white/5 w-full" />
                   <div className="grid grid-cols-4 gap-4 h-32 items-end">
                      <div className="bg-success/40 rounded-t h-[60%]" />
                      <div className="bg-success/30 rounded-t h-[40%]" />
                      <div className="bg-success/50 rounded-t h-[80%]" />
                      <div className="bg-success/20 rounded-t h-[30%]" />
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="h-10 bg-white/5 rounded" />
                      <div className="h-10 bg-white/5 rounded" />
                   </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-2 via-transparent to-transparent pointer-events-none" />
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 sm:px-12 max-w-5xl mx-auto">
        <div className="bg-success/10 border border-success/20 rounded-[2.5rem] p-12 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-success/20 blur-[100px] -mr-32 -mt-32" />
           <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">Unify your investment team.</h2>
           <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">Modern PE funds require modern intelligence. Get started with VARKONIS today.</p>
           <div className="flex flex-wrap gap-4 justify-center">
             <Button href="/contact" variant="primary" size="lg" className="bg-success border-success hover:bg-success/80">Request Demo</Button>
             <Button href="/pricing" variant="secondary" size="lg">Explore Plans</Button>
           </div>
        </div>
      </section>
    </div>
  );
}
