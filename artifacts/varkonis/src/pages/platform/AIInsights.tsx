import { Link } from "wouter";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { BrainCircuit, Bell, Search, Zap, ArrowRight, MessageSquare } from "lucide-react";

export default function AIInsights() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-[140px] pb-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-xs tracking-[0.18em] uppercase text-primary-hover flex items-center gap-3 mb-4">
          <span className="w-4 h-px bg-primary"></span>
          Platform Features
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[0.95] tracking-tight mb-6">
          AI <em className="not-italic bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">Insights</em>
        </h1>
        <p className="text-white/60 text-base leading-relaxed max-w-2xl mb-10">
          Machine-learned signals across 2M+ data points. Our specialized LLMs and predictive models help you surface hidden patterns before they become obvious to the market.
        </p>
        <Button href="/contact" size="lg">Request Access</Button>
      </section>

      {/* AI Dashboard Section */}
      <AnimatedSection className="py-24 bg-surface-1 border-y border-border px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">Intelligent Signal Detection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Daily Signals", value: "142", desc: "AI-generated opportunities", icon: <Zap className="w-5 h-5 text-primary" /> },
              { label: "Anomaly Score", value: "Very Low", desc: "Portfolio health signal", icon: <Bell className="w-5 h-5 text-primary" /> },
              { label: "Data Points", value: "2.4M", desc: "Analyzed per second", icon: <BrainCircuit className="w-5 h-5 text-primary" /> },
              { label: "Query Speed", value: "<100ms", desc: "Natural language processing", icon: <MessageSquare className="w-5 h-5 text-primary" /> },
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
            <h3 className="text-2xl font-display font-bold mb-4 text-primary-hover">AI-Powered Alerts</h3>
            <p className="text-white/50 leading-relaxed mb-6">
              Our models monitor global markets and your portfolio around the clock. Get proactive alerts on sentiment shifts, volatility spikes, and emerging macro trends that specifically impact your holdings.
            </p>
            <ul className="space-y-3">
              {['Smart volatility thresholds', 'Sentiment analysis across news sources', 'Macro event impact prediction', 'Correlated asset risk alerts'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface-2 border border-border rounded-2xl aspect-video relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <Bell className="w-24 h-24 text-white/5" />
          </div>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 bg-surface-2 border border-border rounded-2xl aspect-video relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent" />
            <MessageSquare className="w-24 h-24 text-white/5" />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-display font-bold mb-4 text-primary-hover">Natural Language Queries</h3>
            <p className="text-white/50 leading-relaxed mb-6">
              Ask your portfolio questions in plain English. No more complex SQL queries or manual spreadsheet filtering. Our AI understands financial context and returns accurate data in seconds.
            </p>
            <ul className="space-y-3">
              {['"What is our exposure to EU tech?"', '"Show me assets with >3% dividend yield"', '"Draft a summary of Q3 performance"', '"How does a 1% rate hike affect us?"'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70 font-mono italic">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>

      {/* CTA Section */}
      <section className="py-32 px-6 sm:px-12 text-center bg-surface-1 border-t border-border">
        <h2 className="text-4xl font-display font-extrabold mb-8">Ready for AI-powered <em className="not-italic text-primary">alpha?</em></h2>
        <Button href="/contact" size="lg" className="gap-2">
          Contact Sales <ArrowRight className="w-4 h-4" />
        </Button>
      </section>
    </div>
  );
}
