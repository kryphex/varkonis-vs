import { Link } from "wouter";
import { FileText, Download, ArrowRight, Zap, Globe, Shield, BarChart3, Users } from "lucide-react";

const WHITEPAPERS = [
  {
    title: "The Case for Real-Time Risk Monitoring in Private Markets",
    date: "April 2024",
    category: "Institutional Risk",
    desc: "A deep-dive into how real-time analytics can mitigate illiquidity risks in complex PE and VC portfolios.",
    pages: 24,
    size: "4.2 MB",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "AI-Driven Attribution: Moving Beyond Traditional Performance Metrics",
    date: "March 2024",
    category: "AI & Analytics",
    desc: "How machine learning models surface alpha opportunities and factor exposures that manual analysis misses.",
    pages: 18,
    size: "3.1 MB",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Scaling Family Office Operations: A Unified Data Framework",
    date: "February 2024",
    category: "Operations",
    desc: "Best practices for multi-asset consolidation, estate planning, and reporting for complex global family offices.",
    pages: 32,
    size: "5.8 MB",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "The Modern RIA: Building a Scalable Advice Engine",
    date: "January 2024",
    category: "Strategy",
    desc: "How technology transforms the advisory practice from manual reporting to proactive risk-based client partnership.",
    pages: 21,
    size: "3.5 MB",
    img: "https://images.unsplash.com/photo-1454165833767-027eeef1593e?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Whitepapers() {
  return (
    <div className="min-h-screen bg-background text-white font-manrope">
      {/* Hero Section */}
      <section className="pt-[140px] pb-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-xs tracking-[0.18em] uppercase text-primary-hover flex items-center gap-3 mb-4 font-bold">
          <span className="w-4 h-px bg-primary"></span>
          Institutional Research
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[0.95] tracking-tight mb-6">
          Research for the <em className="not-italic text-gradient">Modern Allocator.</em>
        </h1>
        <p className="text-white/60 text-base leading-relaxed max-w-2xl">
          Deep dives into the methodologies, technologies, and market trends shaping the future of institutional asset management.
        </p>
      </section>

      {/* Featured Whitepaper */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto mb-24">
        <div className="bg-surface-1 border border-border rounded-2xl overflow-hidden flex flex-col lg:flex-row items-center gap-12 group">
          <div className="lg:w-1/2 aspect-square lg:aspect-video relative overflow-hidden order-2 lg:order-1">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" alt="Featured Research" />
            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
              <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded font-display font-extrabold uppercase text-xs tracking-widest text-white">Featured Research</div>
            </div>
          </div>
          <div className="lg:w-1/2 p-12 order-1 lg:order-2">
            <div className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">New Release · April 2024</div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold mb-6 group-hover:text-primary transition-colors leading-tight">Quantifying the 'AI Premium' in Private Equity Analytics</h2>
            <p className="text-white/60 mb-10 leading-relaxed">
              Our latest study explores how early adopters of AI-driven risk models are outperforming peers in transaction speed, valuation precision, and tail-risk mitigation across global PE markets.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <button className="bg-primary hover:bg-primary-hover text-white font-bold px-8 py-3 rounded-lg transition-colors flex items-center gap-2">
                Download PDF <Download className="w-4 h-4" />
              </button>
              <div className="text-xs font-bold text-white/30 uppercase tracking-widest">42 Pages · 6.8 MB · PDF</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Grid */}
      <section className="pb-32 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {WHITEPAPERS.map((paper, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-8 items-start group">
              <div className="w-full sm:w-48 aspect-[3/4] bg-surface-1 border border-border rounded-lg overflow-hidden shrink-0 relative">
                <img src={paper.img} className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" alt={paper.title} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-primary/20">
                  <Download className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1 py-2">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{paper.category}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20"></span>
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{paper.date}</span>
                </div>
                <h3 className="text-xl font-display font-extrabold mb-4 group-hover:text-primary transition-colors leading-tight">{paper.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-6">{paper.desc}</p>
                <div className="flex items-center gap-6">
                  <button className="text-xs font-bold text-white hover:text-primary transition-colors flex items-center gap-2">
                    Download <Download className="w-3.5 h-3.5" />
                  </button>
                  <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{paper.pages} Pages · {paper.size}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resource Footer */}
      <section className="py-24 bg-surface-1 border-y border-border px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <Globe className="w-12 h-12 text-primary mb-6" />
              <h4 className="text-lg font-bold mb-4">Global Reach</h4>
              <p className="text-xs text-white/50 leading-relaxed">Our research covers 40+ markets and 12,000+ asset classes globally.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="w-12 h-12 text-primary mb-6" />
              <h4 className="text-lg font-bold mb-4">Trusted Data</h4>
              <p className="text-xs text-white/50 leading-relaxed">Methodologies vetted by independent risk consultants and top-tier audit firms.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <BarChart3 className="w-12 h-12 text-primary mb-6" />
              <h4 className="text-lg font-bold mb-4">Actionable Alpha</h4>
              <p className="text-xs text-white/50 leading-relaxed">Signals designed to be integrated directly into institutional investment workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-32 px-6 sm:px-12 text-center max-w-4xl mx-auto">
        <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl mb-6">Get the latest research first</h2>
        <p className="text-white/60 mb-10 max-w-2xl mx-auto">Join 4,000+ institutional allocators receiving our bi-monthly deep-dives on the future of financial technology.</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="work@firm.com" 
            className="flex-1 bg-surface-2 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/50" 
          />
          <button className="bg-primary hover:bg-primary-hover text-white font-bold px-8 py-3 rounded-lg transition-colors whitespace-nowrap">Subscribe</button>
        </div>
      </section>
    </div>
  );
}
