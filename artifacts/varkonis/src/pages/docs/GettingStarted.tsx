import { Link } from "wouter";
import { 
  CheckCircle2, ArrowRight, Zap, Play, 
  Terminal, ShieldCheck, Globe, Database, 
  Cpu, LayoutDashboard, Settings, UserPlus 
} from "lucide-react";

const STEPS = [
  {
    title: "Account Setup",
    desc: "Create your institutional profile and set up role-based access for your team members.",
    icon: <UserPlus className="w-5 h-5 text-primary" />,
    items: ["Verify firm identity", "Set up SAML/SSO", "Define user roles", "Configure API keys"]
  },
  {
    title: "Connect Data",
    desc: "Sync your portfolios from custodians, brokers, or internal data warehouses.",
    icon: <Database className="w-5 h-5 text-primary" />,
    items: ["Bloomberg B-PIPE sync", "Refinitiv data feed", "Salesforce CRM link", "Custom CSV/Excel upload"]
  },
  {
    title: "Define Models",
    desc: "Configure risk models, benchmark indices, and custom performance attribution factors.",
    icon: <Settings className="w-5 h-5 text-primary" />,
    items: ["Select VaR parameters", "Define factor exposures", "Set up stress tests", "Link benchmark indices"]
  },
  {
    title: "Go Live",
    desc: "Access real-time dashboards and start generating AI-powered insights and reports.",
    icon: <LayoutDashboard className="w-5 h-5 text-primary" />,
    items: ["Verify data integrity", "Launch Market Terminal", "Set up automated reporting", "Enable AI insights"]
  },
];

export default function GettingStarted() {
  return (
    <div className="min-h-screen bg-background text-white font-manrope">
      {/* Hero Section */}
      <section className="pt-[140px] pb-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-xs tracking-[0.18em] uppercase text-primary-hover flex items-center gap-3 mb-4 font-bold">
          <span className="w-4 h-px bg-primary"></span>
          Onboarding Guide
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[0.95] tracking-tight mb-6">
          The VARKONIS <em className="not-italic text-gradient">Onboarding Sprint.</em>
        </h1>
        <p className="text-white/60 text-base leading-relaxed max-w-2xl">
          Follow this step-by-step guide to go from zero to a fully operational institutional analytics platform in under 24 hours.
        </p>
      </section>

      {/* Steps Section */}
      <section className="pb-32 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
          
          {STEPS.map((step, i) => (
            <div key={i} className={`flex flex-col gap-6 relative ${i % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:pt-24'}`}>
              <div className="absolute top-0 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-surface-1 border border-border text-primary font-display font-extrabold text-sm z-10 shadow-xl"
                   style={{ left: i % 2 === 0 ? 'calc(100% + 48px - 20px)' : 'calc(0% - 48px - 20px)' }}>
                {i + 1}
              </div>

              <div className="bg-surface-1 border border-border rounded-2xl p-8 hover:bg-surface-2 transition-all group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-display font-extrabold mb-4">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-8">{step.desc}</p>
                
                <ul className="space-y-4">
                  {step.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 font-bold text-xs text-white/30">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Code Snippet Section */}
      <section className="py-24 bg-surface-1 border-y border-border px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl mb-6">Built for <span className="text-gradient">Quick Integration.</span></h2>
            <p className="text-white/60 mb-8 leading-relaxed max-w-lg">
              Every feature on our platform is available via API, allowing your developers to integrate VARKONIS data directly into your existing proprietary systems and workflows.
            </p>
            <div className="space-y-6">
              {[
                { title: "SLA Guaranteed", desc: "99.99% uptime for all API endpoints." },
                { title: "Standardized Data", desc: "Cleaned, normalized data across all custodians." },
                { title: "Auto-Scaling", desc: "Infrastructure that scales with your AUM growth." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <div>
                    <div className="text-sm font-bold">{item.title}</div>
                    <div className="text-[11px] text-white/40">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-2 border border-border rounded-2xl p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] -mr-32 -mt-32"></div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#f75a5a]/20"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400/20"></div>
                <div className="w-3 h-3 rounded-full bg-[#1fcfa0]/20"></div>
              </div>
              <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Initialization.js</div>
            </div>
            <div className="font-mono text-xs leading-relaxed space-y-2 text-white/80 overflow-x-auto pb-4">
              <div><span className="text-primary">const</span> {'{'} Varkonis {'}'} = <span className="text-[#1fcfa0]">require</span>(<span className="text-yellow-400">'@varkonis/sdk'</span>);</div>
              <div>&nbsp;</div>
              <div><span className="text-white/40">// Configure client</span></div>
              <div><span className="text-primary">const</span> client = <span className="text-primary">new</span> <span className="text-[#1fcfa0]">Varkonis</span>({'{'}</div>
              <div>&nbsp;&nbsp;apiKey: <span className="text-yellow-400">'VAR_123456_ABC'</span>,</div>
              <div>&nbsp;&nbsp;environment: <span className="text-yellow-400">'production'</span></div>
              <div>{'}'});</div>
              <div>&nbsp;</div>
              <div><span className="text-white/40">// Auto-sync all connected portfolios</span></div>
              <div><span className="text-primary">await</span> client.data.<span className="text-[#1fcfa0]">syncAll</span>();</div>
              <div>&nbsp;</div>
              <div><span className="text-white/40">// Webhook confirmation</span></div>
              <div>client.<span className="text-[#1fcfa0]">on</span>(<span className="text-yellow-400">'sync:complete'</span>, (data) ={'>'} {'{'}</div>
              <div>&nbsp;&nbsp;console.<span className="text-[#1fcfa0]">log</span>(<span className="text-yellow-400">`Successfully synced {'${data.count}'} positions`</span>);</div>
              <div>{'}'});</div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">Node.js SDK v2.0.4</span>
              <button className="text-[9px] font-bold text-primary hover:underline">Copy Code</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 sm:px-12 text-center max-w-4xl mx-auto">
        <Play className="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 className="font-display font-extrabold text-3xl mb-6">Want a personalized walkthrough?</h2>
        <p className="text-white/60 mb-10 max-w-lg mx-auto">Our client success team can guide you and your engineers through the entire setup process in a private workshop.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-3 rounded-lg transition-colors">
            Book Guided Onboarding <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/platform" className="inline-flex items-center gap-2 bg-surface-2 border border-border text-white hover:text-white/80 font-bold px-8 py-3 rounded-lg transition-colors">
            Explore Platform Features
          </Link>
        </div>
      </section>
    </div>
  );
}
