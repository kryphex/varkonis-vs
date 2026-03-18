import { Link } from "wouter";
import { 
  CheckCircle2, ArrowRight, Zap, Globe, 
  ShieldCheck, Database, Cpu, Layers, 
  Shield, BarChart3, Users, MessageSquare 
} from "lucide-react";

const CONNECTORS = [
  {
    name: "Bloomberg B-PIPE",
    category: "Data & Market",
    desc: "Seamlessly stream real-time pricing and reference data from Bloomberg terminals and B-PIPE endpoints.",
    icon: <Globe className="w-6 h-6 text-primary" />,
    status: "Native Support"
  },
  {
    name: "Refinitiv Eikon",
    category: "Data & Market",
    desc: "Connect your Refinitiv workspace to VARKONIS for high-fidelity historical data and real-time quotes.",
    icon: <Database className="w-6 h-6 text-primary" />,
    status: "Native Support"
  },
  {
    name: "Salesforce CRM",
    category: "Business Ops",
    desc: "Sync client holdings, deal pipelines, and institutional relationships directly into the VARKONIS CRM.",
    icon: <Users className="w-6 h-6 text-primary" />,
    status: "Native Support"
  },
  {
    name: "Slack / Teams",
    category: "Collaboration",
    desc: "Automated risk alerts, portfolio summaries, and AI-insights delivered to your team's workspace.",
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
    status: "Webhook Ready"
  },
  {
    name: "Databricks",
    category: "Infrastructure",
    desc: "Export normalized analytics and risk metrics into your enterprise data lake for custom modeling.",
    icon: <Cpu className="w-6 h-6 text-primary" />,
    status: "SDK Integration"
  },
  {
    name: "Charles River",
    category: "Trading",
    desc: "Bidirectional sync for pre-trade compliance checks and post-trade allocation analysis.",
    icon: <Layers className="w-6 h-6 text-primary" />,
    status: "Native Support"
  },
];

export default function Integrations() {
  return (
    <div className="min-h-screen bg-background text-white font-manrope">
      {/* Hero Section */}
      <section className="pt-[140px] pb-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-xs tracking-[0.18em] uppercase text-primary-hover flex items-center gap-3 mb-4 font-bold">
          <span className="w-4 h-px bg-primary"></span>
          Ecosystem
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[0.95] tracking-tight mb-6">
          VARKONIS <em className="not-italic text-gradient">Integration Hub.</em>
        </h1>
        <p className="text-white/60 text-base leading-relaxed max-w-2xl">
          Connect your existing financial stack to VARKONIS and create a unified command center for all your portfolio data and risk intelligence.
        </p>
      </section>

      {/* Integration Grid */}
      <section className="pb-32 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONNECTORS.map((conn, i) => (
            <div key={i} className="bg-surface-1 border border-border p-8 rounded-2xl hover:bg-surface-2 transition-all group flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {conn.icon}
                </div>
                <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest border border-white/10 px-2 py-1 rounded">{conn.status}</span>
              </div>
              <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{conn.category}</div>
              <h3 className="text-xl font-bold mb-4">{conn.name}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-8 flex-grow">{conn.desc}</p>
              
              <button className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-primary transition-colors">
                View Setup Guide <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Connectors Section */}
      <section className="py-24 bg-surface-1 border-y border-border px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl mb-6">Build your <span className="text-gradient">Custom Connectors.</span></h2>
            <p className="text-white/60 mb-8 leading-relaxed max-w-lg">
              Our SDKs and generic Webhook engine allow you to build custom integrations for proprietary internal systems or third-party tools not yet in our catalog.
            </p>
            <div className="space-y-4">
              {[
                { icon: <CheckCircle2 className="w-5 h-5 text-primary" />, text: "Standardized JSON data normalization" },
                { icon: <CheckCircle2 className="w-5 h-5 text-primary" />, text: "Secure OAuth2 and mTLS authentication support" },
                { icon: <CheckCircle2 className="w-5 h-5 text-primary" />, text: "Automated retry logic and health monitoring" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-sm text-white/80">
                  {item.icon}
                  {item.text}
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/5 blur-[80px] group-hover:scale-125 transition-transform duration-700"></div>
            <div className="bg-surface-2 border border-border p-8 rounded-2xl relative shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary/30"></div>
                  <div className="w-3 h-3 rounded-full bg-primary/30"></div>
                  <div className="w-3 h-3 rounded-full bg-primary/30"></div>
                </div>
                <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">webhook-config.json</div>
              </div>
              <div className="font-mono text-xs text-white/70 space-y-2 overflow-x-auto pb-4">
                <div>{'{'}</div>
                <div>&nbsp;&nbsp;<span className="text-primary">"name"</span>: <span className="text-yellow-400">"Internal_Risk_Sync"</span>,</div>
                <div>&nbsp;&nbsp;<span className="text-primary">"type"</span>: <span className="text-yellow-400">"webhook"</span>,</div>
                <div>&nbsp;&nbsp;<span className="text-primary">"endpoint"</span>: <span className="text-yellow-400">"https://risk.firm.com/v1/update"</span>,</div>
                <div>&nbsp;&nbsp;<span className="text-primary">"events"</span>: [<span className="text-yellow-400">"portfolio.updated"</span>, <span className="text-yellow-400">"risk.breach"</span>],</div>
                <div>&nbsp;&nbsp;<span className="text-primary">"auth"</span>: {'{'} <span className="text-primary">"type"</span>: <span className="text-yellow-400">"bearer"</span> {'}'}</div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 sm:px-12 text-center max-w-4xl mx-auto">
        <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 className="font-display font-extrabold text-3xl mb-6">Can't find your stack?</h2>
        <p className="text-white/60 mb-10 max-w-lg mx-auto">We are constantly adding new connectors to our library. Reach out to our engineering team to request a priority integration.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-3 rounded-lg transition-colors">
            Request an Integration <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/docs/api" className="inline-flex items-center gap-2 bg-surface-2 border border-border text-white hover:text-white/80 font-bold px-8 py-3 rounded-lg transition-colors">
            View API Documentation
          </Link>
        </div>
      </section>
    </div>
  );
}
