import { Link } from "wouter";
import { 
  BookOpen, Code, Terminal, Layers, ArrowRight, 
  Search, Zap, CheckCircle2, Globe, Cpu, 
  MessageSquare, Shield, ShieldCheck, Database
} from "lucide-react";

const DOC_CATEGORIES = [
  {
    title: "Getting Started",
    desc: "The essential guide to setting up your first portfolio and connecting data sources.",
    icon: <Zap className="w-5 h-5 text-primary" />,
    link: "/docs/getting-started",
    items: ["Quickstart Guide", "Account Setup", "Core Concepts", "Dashboard Basics"]
  },
  {
    title: "API Reference",
    desc: "Complete documentation for our REST and WebSocket APIs with multi-language SDKs.",
    icon: <Terminal className="w-5 h-5 text-primary" />,
    link: "/docs/api",
    items: ["Authentication", "Rate Limits", "Endpoint Index", "SDKs (Python/JS)"]
  },
  {
    title: "Integrations",
    desc: "Pre-built connectors for Bloomberg, Refinitiv, Salesforce, and enterprise data warehouses.",
    icon: <Layers className="w-5 h-5 text-primary" />,
    link: "/docs/integrations",
    items: ["Bloomberg Setup", "Salesforce Sync", "Data Connectors", "Webhook Engine"]
  },
];

export default function Docs() {
  return (
    <div className="min-h-screen bg-background text-white font-manrope">
      {/* Hero Section */}
      <section className="pt-[140px] pb-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-xs tracking-[0.18em] uppercase text-primary-hover flex items-center gap-3 mb-4 font-bold">
          <span className="w-4 h-px bg-primary"></span>
          Documentation
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[0.95] tracking-tight mb-6">
          VARKONIS Platform <em className="not-italic text-gradient">Knowledge Base.</em>
        </h1>
        <p className="text-white/60 text-base leading-relaxed max-w-2xl mb-12">
          Everything from simple onboarding guides to complex technical references for the VARKONIS institutional analytics platform.
        </p>

        <div className="relative max-w-2xl group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search the documentation..." 
            className="w-full bg-surface-1 border border-border rounded-xl pl-12 pr-6 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all shadow-xl"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
            <kbd className="px-1.5 py-0.5 bg-surface-2 border border-border rounded text-[10px] text-white/40 font-bold uppercase tracking-widest font-manrope">⌘</kbd>
            <kbd className="px-1.5 py-0.5 bg-surface-2 border border-border rounded text-[10px] text-white/40 font-bold uppercase tracking-widest font-manrope">K</kbd>
          </div>
        </div>
      </section>

      {/* Doc Categories Grid */}
      <section className="pb-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOC_CATEGORIES.map((cat, i) => (
            <div key={i} className="flex flex-col bg-surface-1 border border-border rounded-2xl p-8 hover:bg-surface-2 transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-8 flex-grow">{cat.desc}</p>
              
              <ul className="space-y-3 mb-10">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs font-bold text-white/30 hover:text-white transition-colors cursor-pointer group/item">
                    <ArrowRight className="w-3 h-3 text-primary opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href={cat.link} className="inline-flex items-center gap-2 bg-surface-2 border border-border hover:bg-primary hover:border-primary text-white font-bold px-6 py-3 rounded-lg transition-all text-xs">
                Explore Documentation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-24 bg-surface-1 border-y border-border px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl">Built for <span className="text-gradient">Engineers & Analysts.</span></h2>
            <p className="text-white/60 leading-relaxed max-w-lg">
              We provide the most robust financial API in the industry, designed by engineers who understand the requirements of high-frequency and low-latency systems.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <ShieldCheck className="w-5 h-5 text-primary" />, title: "Secure by Design", desc: "SAML 2.0, OAuth, and RBAC support." },
                { icon: <Globe className="w-5 h-5 text-primary" />, title: "Global Reach", desc: "Endpoints optimized for global nodes." },
                { icon: <Database className="w-5 h-5 text-primary" />, title: "Data Integrity", desc: "Immutable audit logs for every sync." },
                { icon: <Cpu className="w-5 h-5 text-primary" />, title: "Low Latency", desc: "99.99% uptime with <50ms API response." },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-3 font-bold text-sm">{item.icon} {item.title}</div>
                  <p className="text-[11px] text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-2 border border-border rounded-2xl p-6 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/30"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/30"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/30"></div>
              </div>
              <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest uppercase">Quickstart.py</div>
            </div>
            <div className="font-mono text-sm leading-relaxed space-y-1 text-white/70 overflow-x-auto pb-4">
              <div><span className="text-primary">import</span> varkonis</div>
              <div>&nbsp;</div>
              <div><span className="text-white/40"># Initialize the client</span></div>
              <div>client = varkonis.<span className="text-[#1fcfa0]">Client</span>(api_key=<span className="text-yellow-400">"VAR_PROD_10293"</span>)</div>
              <div>&nbsp;</div>
              <div><span className="text-white/40"># Fetch portfolio analytics</span></div>
              <div>portfolio = client.portfolios.<span className="text-[#1fcfa0]">get</span>(<span className="text-yellow-400">"GLOBAL_EQUITY"</span>)</div>
              <div>risk_stats = portfolio.<span className="text-[#1fcfa0]">get_risk_metrics</span>(model=<span className="text-yellow-400">"VaR_99_1D"</span>)</div>
              <div>&nbsp;</div>
              <div><span className="text-white/40"># Output results</span></div>
              <div><span className="text-primary">print</span>(<span className="text-yellow-400">f"Current VaR: {'{risk_stats.value}'}"</span>)</div>
            </div>
            <div className="pt-4 mt-2 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">VARKONIS Python SDK v2.4.1</span>
              <button className="text-[10px] font-bold text-primary hover:underline">Copy snippet</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 sm:px-12 text-center max-w-4xl mx-auto">
        <MessageSquare className="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 className="font-display font-extrabold text-3xl mb-6">Can't find what you're looking for?</h2>
        <p className="text-white/60 mb-10 max-w-lg mx-auto">Our support engineering team is available 24/7 to help you with technical integration and architecture questions.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-3 rounded-lg transition-colors">
            Contact Technical Support <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/help" className="inline-flex items-center gap-2 bg-surface-2 border border-border text-white hover:text-white/80 font-bold px-8 py-3 rounded-lg transition-colors">
            Visit Help Center
          </Link>
        </div>
      </section>
    </div>
  );
}
