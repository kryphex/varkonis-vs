import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Play, CheckCircle2, Shield, BrainCircuit, Users, BarChart3, LineChart, Terminal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { DashboardMock } from "@/components/DashboardMock";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [activeServiceTab, setActiveServiceTab] = useState<'start' | 'grow' | 'scale'>('start');

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden px-4 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[url('/images/hero-glow.png')] bg-cover bg-center opacity-30 mix-blend-screen pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-eyebrow">Platform Overview</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.05] mb-6">
              Authority of<br />
              <span className="text-gradient">Great Significance.</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-lg mb-10">
              VARKONIS delivers institutional-grade financial analytics, risk intelligence, and consulting tools — empowering firms that handle serious capital to make faster, sharper decisions.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact" size="lg" className="gap-2">
                Get in touch <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/platform" variant="ghost" size="lg" className="gap-2">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                  <Play className="w-3 h-3 fill-current" />
                </div>
                Watch demo
              </Button>
            </div>

            <div className="mt-16 lg:mt-24">
              <span className="text-[0.67rem] tracking-[0.14em] uppercase text-white/30 font-semibold mb-4 block">Trusted by industry leaders</span>
              <div className="flex flex-wrap items-center gap-4">
                {['Kestrel Fund', 'Meridian Wealth', 'Aldgate Capital', 'Forsyth Group'].map(logo => (
                  <div key={logo} className="px-4 py-2 bg-surface-2 border border-border rounded text-[0.7rem] font-display font-bold tracking-widest text-white/30 hover:text-white/70 hover:border-white/20 transition-all cursor-default">
                    {logo.toUpperCase()}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="relative lg:h-[600px] flex items-center justify-center lg:justify-end">
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full max-w-md mx-auto" />
            <DashboardMock />
          </div>
        </div>
      </section>

      {/* PLATFORM FEATURES */}
      <AnimatedSection className="py-24 bg-surface-1 border-y border-border px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-eyebrow">Platform</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Capital decisions are hard.<br/>Finding the right platform shouldn't be.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <LineChart className="w-6 h-6 text-primary" />, title: "Portfolio Analytics", desc: "Live portfolio positions, allocations, PnL attribution across all accounts connected in real-time." },
              { icon: <Shield className="w-6 h-6 text-primary" />, title: "Risk Intelligence", desc: "Multi-factor VaR, stress testing, scenario analysis, and tail-risk monitoring before they hit." },
              { icon: <BrainCircuit className="w-6 h-6 text-primary" />, title: "AI Insights", desc: "Machine learning surfaces hidden patterns, flags anomalies, and auto-generates advisor commentary." },
              { icon: <BarChart3 className="w-6 h-6 text-primary" />, title: "Client Reporting", desc: "Launch white-labeled, AI-written, regulation-compliant client reports that build immense trust." },
              { icon: <Users className="w-6 h-6 text-primary" />, title: "Deal Flow CRM", desc: "Track mandates from origination to close with shared pipeline and milestone tracking." },
              { icon: <Terminal className="w-6 h-6 text-primary" />, title: "Enterprise API", desc: "REST & WebSocket APIs with 99.99% SLA and dedicated isolated infrastructure." }
            ].map((feat, i) => (
              <div key={i} className="bg-surface-2 border border-border p-8 rounded-xl hover:bg-surface-3 transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* SERVICES TABS */}
      <AnimatedSection className="py-32 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-eyebrow">Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 max-w-3xl">
              Tailored support from first data connection to long-term scale
            </h2>
            <p className="text-lg text-white/50 max-w-2xl">
              Great financial decisions don't happen by accident. VARKONIS helps firms grow through smart analytics, robust risk tools, and scalable operations from day one.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-10 border-b border-border pb-4">
            {(['start', 'grow', 'scale'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveServiceTab(tab)}
                className={`px-6 py-3 font-semibold text-sm rounded-t-lg transition-colors relative ${activeServiceTab === tab ? 'text-white' : 'text-white/40 hover:text-white/80'}`}
              >
                {tab === 'start' ? 'Getting Started' : tab === 'grow' ? 'Grow' : 'Scale'}
                {activeServiceTab === tab && (
                  <motion.div layoutId="activetab" className="absolute bottom-[-17px] left-0 right-0 h-[2px] bg-primary" />
                )}
              </button>
            ))}
          </div>

          <div className="min-h-[300px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeServiceTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 absolute inset-0"
              >
                {activeServiceTab === 'start' && [
                  { title: "Portfolio Analytics", desc: "Connect all your data sources and get a consolidated real-time view of every position." },
                  { title: "Client Reporting", desc: "White-labeled, AI-written, regulation-compliant client reports that convert." },
                  { title: "Onboarding Sprint", desc: "Go from zero to live dashboards in under 24 hours with guided setup." }
                ].map((c, i) => <ServiceCard key={i} {...c} />)}
                
                {activeServiceTab === 'grow' && [
                  { title: "Risk Intelligence", desc: "Multi-factor VaR, stress testing, and tail-risk analysis to surface threats." },
                  { title: "AI-Powered Insights", desc: "Machine learning surfaces hidden patterns and auto-generates plain-language commentary." },
                  { title: "Deal Flow CRM", desc: "Track mandates from origination to close with shared pipeline and NDA management." }
                ].map((c, i) => <ServiceCard key={i} {...c} />)}
                
                {activeServiceTab === 'scale' && [
                  { title: "Team Collaboration", desc: "Role-based access, audit trails, and shared workspaces." },
                  { title: "Enterprise API", desc: "Direct programmatic access to all platform functions and normalized data." },
                  { title: "Compliance Suite", desc: "Automated checks, pre-trade rules, and immutable audit logs for regulators." }
                ].map((c, i) => <ServiceCard key={i} {...c} />)}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </AnimatedSection>

      {/* TESTIMONIALS */}
      <AnimatedSection className="py-24 bg-surface-1 border-y border-border px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-eyebrow">Client Voices</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">5.0 is our average — from firms that demand the best</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="We cut reporting time by 70% in the first month. The AI commentary is indistinguishable from our own analysts."
              name="James Harlow"
              title="CIO, Aldgate Capital"
            />
            <TestimonialCard 
              quote="The risk dashboard alone justified the cost. We caught a tail-risk position that would have cost us millions."
              name="Sarah Chen"
              title="Portfolio Manager, Kestrel Fund"
            />
            <TestimonialCard 
              quote="Implementation was flawless. Live dashboards in under 24 hours, exactly as promised."
              name="Marcus Reid"
              title="Managing Director, Meridian Wealth"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-32 px-4 sm:px-8 lg:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[100px]" />
        <div className="relative z-10">
          <h2 className="text-5xl sm:text-6xl font-display font-extrabold mb-10">
            Ready to act with<br />
            <em className="text-gradient not-italic">true authority?</em>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">Book a Demo</Button>
            <Button href="/pricing" variant="secondary" size="lg">View Pricing</Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

function ServiceCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="bg-surface-2 border border-border p-8 rounded-xl flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
      <div className="w-10 h-10 rounded bg-surface-3 flex items-center justify-center mb-6">
        <CheckCircle2 className="w-5 h-5 text-primary" />
      </div>
      <h4 className="text-lg font-bold mb-3">{title}</h4>
      <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">{desc}</p>
      <Link href="/platform" className="text-primary hover:text-primary-hover text-sm font-semibold flex items-center gap-1 w-fit">
        Explore <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  );
}

function TestimonialCard({ quote, name, title }: { quote: string, name: string, title: string }) {
  return (
    <div className="bg-background border border-border p-8 rounded-xl flex flex-col relative">
      <div className="text-primary text-6xl font-display absolute top-4 left-6 opacity-20">"</div>
      <p className="text-lg text-white/80 leading-relaxed mb-8 relative z-10">"{quote}"</p>
      <div className="mt-auto pt-6 border-t border-border flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-surface-3 flex items-center justify-center font-display font-bold text-sm">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-bold text-sm">{name}</div>
          <div className="text-xs text-white/40">{title}</div>
        </div>
      </div>
    </div>
  );
}
