import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Search, BookOpen, CreditCard, Database, Shield, Code, FileText, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Help() {
  const categories = [
    { title: "Getting Started", icon: BookOpen, count: 12 },
    { title: "Account & Billing", icon: CreditCard, count: 8 },
    { title: "Data & Integrations", icon: Database, count: 24 },
    { title: "Security", icon: Shield, count: 6 },
    { title: "API Reference", icon: Code, count: 15 },
    { title: "Reporting", icon: FileText, count: 10 },
  ];

  const popularArticles = [
    "Setting up your first portfolio",
    "Connecting Bloomberg Data License",
    "Understanding VaR methodology in VARKONIS",
    "Configuring white-labeled LP portals",
    "Using the Excel Add-in",
    "Managing team permissions and SSO",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero with Search */}
      <section className="pt-[140px] pb-24 px-6 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl mb-8">How can we help?</h1>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search for articles, guides, and more..." 
              className="w-full bg-surface-1 border border-border rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="p-8 bg-surface-1 border border-border rounded-xl hover:border-primary transition-colors cursor-pointer group">
                <cat.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2 text-white">{cat.title}</h3>
                <p className="text-white/40 text-sm font-semibold tracking-wider uppercase">{cat.count} Articles</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Popular Articles & Support */}
      <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-display font-bold mb-8">Popular Articles</h2>
            <div className="flex flex-col divide-y divide-border">
              {popularArticles.map((article, i) => (
                <a key={i} href="#" className="py-4 flex items-center justify-between group">
                  <span className="text-white/70 group-hover:text-white transition-colors">{article}</span>
                  <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>
          <div className="bg-surface-2 p-10 rounded-2xl border border-border h-fit">
            <h2 className="text-2xl font-display font-bold mb-4">Still need help?</h2>
            <p className="text-white/50 mb-8 leading-relaxed">
              Our support engineers are available 24/7 for Enterprise customers. Whether it's a technical issue or a feature request, we're here to assist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1">Contact Support</Button>
              <Button variant="outline" className="flex-1">Platform Status</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
