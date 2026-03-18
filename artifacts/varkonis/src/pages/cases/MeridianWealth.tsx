import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, Quote } from "lucide-react";
import { Link } from "wouter";

export default function MeridianWealth() {
  const metrics = [
    { label: "AUA Growth without headcount", value: "3x" },
    { label: "Compliance Score", value: "99.8%" },
    { label: "Client Retention", value: "98.5%" }
  ];

  return (
    <div className="min-h-screen pt-[140px] pb-24 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="mb-20">
        <div className="text-xs tracking-[0.18em] uppercase text-[#7b94ff] flex items-center gap-3 mb-6 font-bold">
          <span className="w-4 h-px bg-[#7b94ff]"></span>
          Case Study
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[0.95] tracking-tight mb-8">
              Meridian Wealth: <em className="not-italic bg-gradient-to-r from-[#7b94ff] to-[#7b94ff]/60 bg-clip-text text-transparent">Scaling with AI</em>
            </h1>
            <div className="flex items-center gap-4 py-4 px-6 bg-surface-1 border border-border rounded-xl w-fit">
               <div className="w-10 h-10 bg-[#7b94ff]/20 rounded-full flex items-center justify-center font-display font-black text-[#7b94ff] italic">MW</div>
               <div>
                  <div className="text-sm font-bold">Meridian Wealth Management</div>
                  <div className="text-xs text-white/40 font-semibold uppercase tracking-widest">Wealth Management • $4.2B AUA • USA</div>
               </div>
            </div>
          </div>
          <div className="hidden lg:block">
             <div className="aspect-video bg-surface-1 border border-border rounded-2xl overflow-hidden relative">
                <img src={`${import.meta.env.BASE_URL}images/platform-abstract.png`} alt="Meridian Wealth" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" />
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
              Meridian Wealth Management was struggling to scale their operations without significantly increasing headcount. Their compliance burden was growing, and advisors were spending too much time on manual reporting instead of client relationships.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold mb-6">The Solution</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              VARKONIS implemented a unified Client Reporting and CRM platform with automated compliance monitoring. Our AI-driven reporting engine now generates personalized client reports in minutes, and the compliance module proactively flags potential issues.
            </p>
            <ul className="space-y-4">
               {[
                 "Automated, white-labeled reporting",
                 "AI-powered portfolio commentary",
                 "Integrated compliance monitoring",
                 "Client portal for 24/7 access"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-white/80">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#7b94ff]" />
                   {item}
                 </li>
               ))}
            </ul>
          </div>
        </div>
        <div className="space-y-12">
           <div className="bg-[#7b94ff]/10 border border-[#7b94ff]/20 p-8 rounded-3xl relative overflow-hidden group">
              <Quote className="w-12 h-12 text-[#7b94ff]/20 absolute -top-2 -left-2" />
              <p className="text-lg italic font-medium mb-6 relative z-10">
                "VARKONIS has been instrumental in our growth. We've tripled our AUA without adding a single person to our operations team. It's simply remarkable."
              </p>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-[#7b94ff]/20" />
                 <div>
                    <div className="font-bold">CEO</div>
                    <div className="text-xs text-white/40">Meridian Wealth Management</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Next Case Study */}
      <section className="pt-20 border-t border-border">
         <Link href="/cases/verimont-advisory" className="group block">
            <div className="text-xs font-bold text-white/40 uppercase mb-4 group-hover:text-primary transition-colors">Next Case Study</div>
            <div className="flex items-center justify-between">
               <h3 className="text-3xl font-display font-bold group-hover:translate-x-2 transition-transform">Verimont Advisory Group</h3>
               <ArrowRight className="w-8 h-8 group-hover:text-primary group-hover:translate-x-2 transition-all" />
            </div>
         </Link>
      </section>
    </div>
  );
}
