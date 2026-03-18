import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="w-full pt-10 pb-24 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-eyebrow">Pricing</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold mb-6">
            Transparent pricing for firms of every scale
          </h1>
          <p className="text-lg text-white/50">
            No hidden fees. No per-user traps. Just plans that grow with your firm.
          </p>
          
          <div className="mt-10 inline-flex items-center bg-surface-2 p-1 rounded-lg border border-border">
            <button 
              onClick={() => setAnnual(false)} 
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-colors ${!annual ? 'bg-surface-3 shadow-md' : 'text-white/50 hover:text-white'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setAnnual(true)} 
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-colors flex items-center gap-2 ${annual ? 'bg-surface-3 shadow-md' : 'text-white/50 hover:text-white'}`}
            >
              Annually <span className="text-[0.6rem] bg-primary text-white px-2 py-0.5 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <PricingCard 
            tier="Boutique"
            name="Starter"
            price={annual ? "$392" : "$490"}
            period={annual ? "per month · billed annually" : "per month · billed monthly"}
            features={[
              "Up to 5 team members",
              "20 client portfolios",
              "Standard reporting suite",
              "Email & chat support",
              "API access · 10k calls/mo"
            ]}
          />
          <PricingCard 
            tier="Most Popular"
            name="Growth"
            price={annual ? "$1,032" : "$1,290"}
            period={annual ? "per month · billed annually" : "per month · billed monthly"}
            features={[
              "Up to 25 team members",
              "Unlimited portfolios",
              "Full analytics suite",
              "AI-powered insights",
              "Priority 24/7 support",
              "Custom white-labeling"
            ]}
            isHot
          />
          <PricingCard 
            tier="Enterprise"
            name="Scale"
            price="Custom"
            period="tailored to your firm"
            features={[
              "Unlimited team members",
              "Dedicated infrastructure",
              "Compliance & audit tools",
              "Custom integrations",
              "Dedicated success manager"
            ]}
          />
        </div>

        <AnimatedSection>
          <div className="bg-surface-1 border border-border rounded-2xl p-8 md:p-12">
            <h3 className="font-display font-bold text-2xl mb-8">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h4 className="font-bold mb-2">Is there a free trial?</h4>
                <p className="text-sm text-white/50 leading-relaxed">Yes — all plans include a 14-day free trial with full access. No credit card required to start.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Can I switch plans later?</h4>
                <p className="text-sm text-white/50 leading-relaxed">Absolutely. You can upgrade or downgrade at any time. Changes take effect on your next billing cycle.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">How does billing work?</h4>
                <p className="text-sm text-white/50 leading-relaxed">Monthly plans are billed each month. Annual plans are billed upfront and save you 20%. All prices are in USD.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">What payment methods do you accept?</h4>
                <p className="text-sm text-white/50 leading-relaxed">We accept all major credit cards, ACH bank transfers, and wire transfers for annual enterprise plans.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

function PricingCard({ tier, name, price, period, features, isHot }: any) {
  return (
    <div className={`relative bg-surface-1 p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col ${isHot ? 'border-primary/50 shadow-primary/10 bg-surface-2' : 'border-border'}`}>
      {isHot && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-success rounded-t-2xl" />
      )}
      <div className="text-[0.65rem] tracking-widest uppercase font-bold text-white/40 mb-2">{tier}</div>
      <h3 className="text-2xl font-display font-bold mb-4">{name}</h3>
      <div className="mb-1">
        <span className={`text-5xl font-display font-extrabold ${isHot ? 'text-gradient' : ''}`}>{price}</span>
      </div>
      <div className="text-xs text-white/40 mb-8">{period}</div>
      
      <div className="w-full h-px bg-border mb-8" />
      
      <ul className="flex flex-col gap-4 mb-10 flex-grow">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex items-start gap-3 text-sm text-white/70">
            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      
      <Button variant={isHot ? 'primary' : 'secondary'} className="w-full">
        {price === 'Custom' ? 'Contact Sales' : 'Get Started'}
      </Button>
    </div>
  );
}
