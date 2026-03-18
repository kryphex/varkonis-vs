import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { LineChart, LayoutDashboard, Zap, Lock, Database, ArrowRight } from "lucide-react";

export default function Platform() {
  return (
    <div className="w-full pb-24">
      {/* Hero */}
      <section className="pt-20 pb-20 px-4 sm:px-8 lg:px-12 text-center border-b border-border bg-surface-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/platform-abstract.png')] bg-cover bg-center opacity-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-eyebrow">The OS for Finance</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold mb-6 leading-tight">
            One system.<br />Many workflows.
          </h1>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            VARKONIS unifies portfolio analytics, reporting, and operational control into a single, lightning-fast product surface.
          </p>
          <Button href="/contact" size="lg">Book Platform Walkthrough</Button>
        </div>
      </section>

      {/* Feature Deep Dives */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-24 flex flex-col gap-32">
        
        {/* Feature 1 */}
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <LineChart className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-display font-bold mb-4">Real-Time Portfolio Analytics</h2>
            <p className="text-white/50 leading-relaxed mb-6">
              Connect custodians, prime brokers, and proprietary data lakes. VARKONIS normalizes everything instantly, giving you a live, consolidated view of every position, allocation, and exposure across your entire firm.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {['Live PnL Attribution', 'Multi-currency normalisation', 'Historical performance tracking', 'Custom benchmark comparisons'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-success" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface-2 border border-border rounded-2xl aspect-video p-6 shadow-2xl flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
             <LayoutDashboard className="w-32 h-32 text-white/5" />
             <div className="absolute bottom-6 left-6 right-6 h-32 bg-surface-3 border border-border rounded-lg shadow-xl" />
             <div className="absolute top-6 right-6 w-32 h-24 bg-surface-3 border border-border rounded-lg shadow-xl" />
          </div>
        </AnimatedSection>

        {/* Feature 2 */}
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 bg-surface-2 border border-border rounded-2xl aspect-video p-6 shadow-2xl flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-success/10 to-transparent" />
             <Database className="w-32 h-32 text-white/5" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-success" />
            </div>
            <h2 className="text-3xl font-display font-bold mb-4">AI-Driven Insights</h2>
            <p className="text-white/50 leading-relaxed mb-6">
              Stop writing routine market updates. Our specialized LLMs analyze your portfolio data against global market events to auto-generate plain-language commentary, client briefs, and risk alerts.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {['Auto-generated monthly reports', 'Anomaly detection alerts', 'Natural language portfolio queries', 'Drafting assistant for advisors'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-success" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Feature 3 */}
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold mb-4">Enterprise Grade Security</h2>
            <p className="text-white/50 leading-relaxed mb-6">
              Built for institutions that cannot compromise on security. Isolated tenant infrastructure, granular RBAC, immutable audit logs, and SOC 2 Type II compliance out of the box.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {['Single Sign-On (SAML/OIDC)', 'Granular Role-Based Access Control', 'Immutable audit trails', 'VPC peering options'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/30" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface-2 border border-border rounded-2xl aspect-video p-6 shadow-2xl flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
             <Lock className="w-32 h-32 text-white/5" />
          </div>
        </AnimatedSection>

      </div>
      
      <div className="text-center mt-32">
        <Button href="/contact" size="lg" className="gap-2">
          Start Building with VARKONIS <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
