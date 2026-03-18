import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, Quote } from "lucide-react";
import { Link } from "wouter";

export default function KestrelFund() {
  const metrics = [
    { label: "Improved risk-adjusted returns", value: "31%" },
    { label: "New LP relationships", value: "18" },
    { label: "EM Markets Tracked", value: "45+" }
  ];

  return (
    <div className="min-h-screen pt-[140px] pb-24 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="mb-20">
        <div className="text-xs tracking-[0.18em] uppercase text-success flex items-center gap-3 mb-6 font-bold">
          <span className="w-4 h-px bg-success"></span>
          Case Study
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[0.95] tracking-tight mb-8">
              Kestrel Emerging Markets Fund: <em className="not-italic bg-gradient-to-r from-success to-success/60 bg-clip-text text-transparent">Closing the EM Gap</em>
            </h1>
            <div className="flex items-center gap-4 py-4 px-6 bg-surface-1 border border-border rounded-xl w-fit">
               <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center font-display font-black text-success italic">KF</div>
               <div>
                  <div className="text-sm font-bold">Kestrel Emerging Markets Fund</div>
                  <div className="text-xs text-white/40 font-semibold uppercase tracking-widest">Hedge Fund • $680M AUM • Singapore</div>
               </div>
            </div>
          </div>
          <div className="hidden lg:block">
             <div className="aspect-video bg-surface-1 border border-border rounded-2xl overflow-hidden relative">
                <img src={`${import.meta.env.BASE_URL}images/platform-abstract.png`} alt="Kestrel Fund" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
             </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((m, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="bg-surface-1 border border-border p-8 rounded-2xl text-center">
              <div className="text-4xl sm:text-5xl font-display font-black text-white mb-2">{m.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/40">{m.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="grid lg:grid-cols-3 gap-16 mb-20">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-2xl font-display font-bold mb-6">The Challenge</h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Kestrel Fund faced significant data gaps in emerging markets and substantial FX exposure blind spots. Their legacy systems struggled to integrate local market data feeds and lacked sophisticated currency risk modeling.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold mb-6">The Solution</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              VARKONIS provided custom data connectors to integrate local EM data feeds and implemented the AI Insights module to surface subtle signals. We also built a real-time FX risk dashboard to monitor exposures across their multi-currency portfolio.
            </p>
            <ul className="space-y-4">
               {[
                 "Custom EM data connectors",
                 "AI-driven signal detection",
                 "Real-time FX exposure monitoring",
                 "Integrated compliance and trade auditing"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-white/80">
                   <div className="w-1.5 h-1.5 rounded-full bg-success" />
                   {item}
                 </li>
               ))}
            </ul>
          </div>
        </div>
        <div className="space-y-12">
           <div className="bg-success/10 border border-success/20 p-8 rounded-3xl relative overflow-hidden group">
              <Quote className="w-12 h-12 text-success/20 absolute -top-2 -left-2" />
              <p className="text-lg italic font-medium mb-6 relative z-10">
                "VARKONIS's AI module has given us an edge in EM markets that we simply didn't have before. The transparency into our FX risk has been a game-changer."
              </p>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-success/20" />
                 <div>
                    <div className="font-bold">Head of Risk</div>
                    <div className="text-xs text-white/40">Kestrel Fund</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Next Case Study */}
      <section className="pt-20 border-t border-border">
         <Link href="/cases/meridian-wealth" className="group block">
            <div className="text-xs font-bold text-white/40 uppercase mb-4 group-hover:text-primary transition-colors">Next Case Study</div>
            <div className="flex items-center justify-between">
               <h3 className="text-3xl font-display font-bold group-hover:translate-x-2 transition-transform">Meridian Wealth Management</h3>
               <ArrowRight className="w-8 h-8 group-hover:text-primary group-hover:translate-x-2 transition-all" />
            </div>
         </Link>
      </section>
    </div>
  );
}
