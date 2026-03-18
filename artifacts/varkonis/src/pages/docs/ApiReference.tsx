import { Link } from "wouter";
import { 
  Terminal, ArrowRight, Zap, Code, 
  ShieldCheck, Globe, Database, Cpu, 
  CheckCircle2, Layers, Shield, BarChart3 
} from "lucide-react";

const ENDPOINTS = [
  { method: "GET", path: "/v2/portfolios", desc: "List all connected portfolios with basic metrics." },
  { method: "GET", path: "/v2/portfolios/:id", desc: "Retrieve detailed analytics and holdings for a portfolio." },
  { method: "POST", path: "/v2/risk/calculate", desc: "Trigger a custom risk model calculation (VaR/CVaR)." },
  { method: "GET", path: "/v2/market/quotes", desc: "Real-time pricing for 40,000+ global assets." },
  { method: "POST", path: "/v2/reports/generate", desc: "Asynchronously generate a white-labeled PDF report." },
  { method: "GET", path: "/v2/integrations/status", desc: "Health check for all active data connectors." },
];

export default function ApiReference() {
  return (
    <div className="min-h-screen bg-background text-white font-manrope">
      {/* Hero Section */}
      <section className="pt-[140px] pb-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-xs tracking-[0.18em] uppercase text-primary-hover flex items-center gap-3 mb-4 font-bold">
          <span className="w-4 h-px bg-primary"></span>
          Developer Reference
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[0.95] tracking-tight mb-6">
          VARKONIS <em className="not-italic text-gradient">Enterprise API.</em>
        </h1>
        <p className="text-white/60 text-base leading-relaxed max-w-2xl">
          REST & WebSocket APIs designed for developers building low-latency financial systems and institutional analytics dashboards.
        </p>
      </section>

      {/* Core Docs Section */}
      <section className="pb-32 px-6 sm:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sidebar Nav */}
        <div className="lg:col-span-3 space-y-12">
          <div>
            <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-6">Introduction</h4>
            <ul className="space-y-4">
              {['Getting Started', 'Authentication', 'Rate Limits', 'Pagination', 'Error Handling'].map(item => (
                <li key={item} className="text-xs font-bold text-white/60 hover:text-primary transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-6">Resources</h4>
            <ul className="space-y-4">
              {['Portfolios', 'Risk Analytics', 'Market Data', 'Reports', 'Team Admin', 'Integrations'].map(item => (
                <li key={item} className="text-xs font-bold text-white/60 hover:text-primary transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-surface-1 border border-border rounded-xl">
            <h5 className="text-xs font-bold mb-4">Latest Version</h5>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-0.5 bg-primary/20 text-primary border border-primary/30 rounded text-[9px] font-bold">v2.4.1</span>
              <span className="text-[9px] text-white/30 font-bold uppercase tracking-widest">Released May 2024</span>
            </div>
            <button className="text-[10px] font-bold text-primary hover:underline">Full Changelog →</button>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-9 space-y-24">
          {/* Authentication Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-display font-extrabold">Authentication</h2>
            </div>
            <p className="text-white/60 leading-relaxed mb-8 max-w-2xl">
              All API requests require a Bearer token passed in the Authorization header. Institutional clients can generate long-lived API keys in the platform settings, while user-specific tokens can be generated via OIDC flows.
            </p>
            <div className="bg-surface-2 border border-border rounded-xl p-6 font-mono text-xs leading-relaxed overflow-x-auto">
              <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Example Request Header</span>
              </div>
              <div className="text-white/70">
                <span className="text-primary">GET</span> /v2/portfolios <span className="text-white/40">HTTP/1.1</span><br />
                <span className="text-primary">Host:</span> api.varkonis.com<br />
                <span className="text-primary">Authorization:</span> <span className="text-yellow-400">Bearer VAR_PROD_10293_ABCDEF</span><br />
                <span className="text-primary">Accept:</span> application/json
              </div>
            </div>
          </div>

          {/* Rate Limits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-surface-1 border border-border rounded-2xl group hover:bg-surface-2 transition-all">
              <h3 className="text-xl font-bold mb-4">Institutional Limits</h3>
              <p className="text-xs text-white/50 leading-relaxed mb-6">Standard institutional tier supports 5,000 requests per minute across all user accounts. High-frequency traders can request custom limits up to 100k RPM.</p>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Tier: Scale Plan</span>
              </div>
            </div>
            <div className="p-8 bg-surface-1 border border-border rounded-2xl group hover:bg-surface-2 transition-all">
              <h3 className="text-xl font-bold mb-4">WebSocket Limits</h3>
              <p className="text-xs text-white/50 leading-relaxed mb-6">Real-time market data streaming supports up to 1,000 concurrent symbol subscriptions per institutional connection.</p>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Tier: Enterprise</span>
              </div>
            </div>
          </div>

          {/* Endpoints Table */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <Layers className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-display font-extrabold text-white">Core Endpoints</h2>
            </div>
            <div className="bg-surface-1 border border-border rounded-2xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-surface-2 border-b border-border text-[10px] font-bold uppercase tracking-widest text-white/30">
                  <tr>
                    <th className="px-6 py-4">Method & Path</th>
                    <th className="px-6 py-4">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {ENDPOINTS.map((e, i) => (
                    <tr key={i} className="group hover:bg-surface-2 transition-colors cursor-pointer">
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            e.method === 'GET' ? 'bg-blue-500/10 text-blue-400' : 'bg-green-500/10 text-green-400'
                          }`}>{e.method}</span>
                          <span className="text-sm font-mono font-bold text-white group-hover:text-primary transition-colors">{e.path}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <p className="text-xs text-white/50">{e.desc}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-surface-1 border-t border-border px-6 sm:px-12 text-center max-w-4xl mx-auto">
        <Code className="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 className="font-display font-extrabold text-3xl mb-6">Need custom API architecture help?</h2>
        <p className="text-white/60 mb-10 max-w-lg mx-auto">Our developer relations team can assist you in building highly-available integrations and custom plugins for your enterprise stack.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-3 rounded-lg transition-colors">
            Contact Dev Support <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/docs/integrations" className="inline-flex items-center gap-2 bg-surface-2 border border-border text-white hover:text-white/80 font-bold px-8 py-3 rounded-lg transition-colors">
            View Integrations Catalog
          </Link>
        </div>
      </section>
    </div>
  );
}
