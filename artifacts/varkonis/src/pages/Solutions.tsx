import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Layers, PieChart, Briefcase, Landmark } from "lucide-react";

export default function Solutions() {
  return (
    <div className="w-full pt-10 pb-24 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-eyebrow">Solutions</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold mb-6">
            Engineered for your specific mandate
          </h1>
          <p className="text-lg text-white/50">
            Different capital structures require different tools. VARKONIS configures specifically to the operational models of leading financial institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SolutionCard 
            icon={<PieChart className="w-8 h-8 text-primary" />}
            title="Hedge Funds"
            desc="Real-time multi-asset class analytics, advanced risk modeling (VaR, stress testing), and seamless prime broker integrations."
            features={['Live position monitoring', 'Complex derivatives pricing', 'Automated shadow NAV']}
          />
          <SolutionCard 
            icon={<Briefcase className="w-8 h-8 text-success" />}
            title="Private Equity"
            desc="Track deal flow from origination to exit. Centralize NDA management, diligence models, and LP reporting in one secure vault."
            features={['Deal pipeline CRM', 'Automated capital calls', 'Fund performance metrics (IRR/MOIC)']}
          />
          <SolutionCard 
            icon={<Landmark className="w-8 h-8 text-[#febc2e]" />}
            title="Family Offices"
            desc="Consolidate fragmented wealth across multiple managers and asset classes into a single, cohesive dashboard."
            features={['Multi-custodian aggregation', 'Estate planning views', 'Private investment tracking']}
          />
          <SolutionCard 
            icon={<Layers className="w-8 h-8 text-[#7b94ff]" />}
            title="Wealth Management"
            desc="Empower advisors with AI-generated portfolio commentary and white-labeled client reports that build immense trust."
            features={['Advisor dashboard', 'AI client briefs', 'Regulation-compliant reporting']}
          />
        </div>

        <AnimatedSection className="mt-24 bg-primary/10 border border-primary/20 rounded-2xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-success/5 pointer-events-none" />
          <h3 className="text-3xl font-display font-bold mb-4 relative z-10">Don't see your specific use case?</h3>
          <p className="text-white/60 mb-8 max-w-xl mx-auto relative z-10">Our Enterprise API and custom configuration engine allow us to adapt VARKONIS to almost any institutional workflow.</p>
          <Button href="/contact" variant="primary" className="relative z-10">Speak to Solutions Engineering</Button>
        </AnimatedSection>
      </div>
    </div>
  );
}

function SolutionCard({ icon, title, desc, features }: any) {
  return (
    <AnimatedSection className="bg-surface-1 border border-border p-8 rounded-2xl hover:border-white/10 transition-colors flex flex-col h-full">
      <div className="w-16 h-16 bg-surface-2 rounded-xl flex items-center justify-center mb-6 border border-border">
        {icon}
      </div>
      <h3 className="text-2xl font-display font-bold mb-4">{title}</h3>
      <p className="text-white/50 leading-relaxed mb-8 flex-grow">{desc}</p>
      
      <div className="bg-surface-2 rounded-lg p-5 border border-border/50 mb-8">
        <div className="text-[0.65rem] uppercase tracking-widest text-white/30 font-bold mb-3">Key Capabilities</div>
        <ul className="flex flex-col gap-2">
          {features.map((f: string, i: number) => (
            <li key={i} className="text-sm text-white/70 flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-white/40" /> {f}
            </li>
          ))}
        </ul>
      </div>

      <Button href="/contact" variant="secondary" className="w-full justify-between group">
        Explore Solution <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </AnimatedSection>
  );
}
