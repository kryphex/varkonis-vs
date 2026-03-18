import { Link } from "wouter";
import { 
  BookOpen, Code, Terminal, Layers, ArrowRight, 
  FileText, Globe, Zap, BarChart3, Calculator, 
  MessageSquare, Users, Shield, Briefcase
} from "lucide-react";

const RESOURCE_CARDS = [
  {
    title: "Product Changelog",
    desc: "Stay updated with the latest platform features and improvements.",
    icon: <Terminal className="w-5 h-5 text-primary" />,
    link: "/resources/changelog"
  },
  {
    title: "Financial Glossary",
    desc: "A comprehensive guide to financial terms used across the VARKONIS platform.",
    icon: <BookOpen className="w-5 h-5 text-primary" />,
    link: "/resources/glossary"
  },
  {
    title: "ROI Calculator",
    desc: "Estimate potential cost savings and efficiency gains with VARKONIS.",
    icon: <Calculator className="w-5 h-5 text-primary" />,
    link: "/resources/roi-calculator"
  },
  {
    title: "Webinar Library",
    desc: "Watch deep-dives into risk management, analytics, and platform best practices.",
    icon: <Globe className="w-5 h-5 text-primary" />,
    link: "/resources/webinars"
  },
  {
    title: "Research & Whitepapers",
    desc: "Institutional research on market trends, risk factors, and AI in finance.",
    icon: <FileText className="w-5 h-5 text-primary" />,
    link: "/resources/whitepapers"
  },
];

const FEATURED_ARTICLES = [
  {
    title: "The Future of Risk: Moving Beyond Traditional VaR",
    category: "Research",
    date: "May 12, 2024",
    image: "https://images.unsplash.com/photo-1611974714851-eb605161882b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "How AI is Reshaping Institutional Portfolio Management",
    category: "Insights",
    date: "May 08, 2024",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Optimizing Multi-Asset Workflows for the Modern Fund",
    category: "Strategy",
    date: "April 29, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  }
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-background text-white font-manrope">
      {/* Hero Section */}
      <section className="pt-[140px] pb-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-xs tracking-[0.18em] uppercase text-primary-hover flex items-center gap-3 mb-4 font-bold">
          <span className="w-4 h-px bg-primary"></span>
          Knowledge Hub
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[0.95] tracking-tight mb-6">
          Everything you need to <em className="not-italic text-gradient">Master the Market.</em>
        </h1>
        <p className="text-white/60 text-base leading-relaxed max-w-2xl">
          Deep dives, tools, and technical documentation to help your firm leverage the full power of the VARKONIS platform.
        </p>
      </section>

      {/* Resource Cards Grid */}
      <section className="pb-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCE_CARDS.map((card, i) => (
            <Link key={i} href={card.link}>
              <div className="bg-surface-1 border border-border p-8 rounded-xl hover:bg-surface-2 transition-all cursor-pointer group h-full flex flex-col">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">{card.desc}</p>
                <div className="flex items-center gap-2 text-primary font-bold text-xs group-hover:gap-3 transition-all">
                  Explore Resource <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
          {/* Documentation Card (External/Featured) */}
          <Link href="/docs">
            <div className="bg-primary/5 border border-primary/20 p-8 rounded-xl hover:bg-primary/10 transition-all cursor-pointer group h-full flex flex-col">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Developer Docs</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">Full API references, integration guides, and SDK documentation for engineers.</p>
              <div className="flex items-center gap-2 text-primary font-bold text-xs">
                Visit Documentation <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-24 bg-surface-1 border-y border-border px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs tracking-[0.18em] uppercase text-primary-hover mb-4 font-bold">Featured Insights</div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl">Latest from <span className="text-gradient">Our Research Team.</span></h2>
            </div>
            <button className="text-sm font-bold text-white/40 hover:text-white transition-colors">View all insights →</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_ARTICLES.map((article, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                  <img src={article.image} alt={article.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">{article.category}</div>
                </div>
                <div className="text-xs text-white/40 mb-2 font-bold uppercase tracking-wider">{article.date}</div>
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">{article.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-32 px-6 sm:px-12 text-center max-w-4xl mx-auto">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl mb-6">Stay ahead of the curve</h2>
        <p className="text-white/60 mb-10">Get our weekly brief on institutional risk, market trends, and platform updates delivered to your inbox.</p>
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
