import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Link } from "wouter";

export default function Blog() {
  const posts = [
    { date: "Oct 24, 2024", title: "Engineering our real-time portfolio pricing engine", cat: "Engineering" },
    { date: "Oct 12, 2024", title: "Why we chose Rust for our risk analytics microservices", cat: "Architecture" },
    { date: "Sep 28, 2024", title: "Product Update: Introducing customizable LP portals", cat: "Product" },
    { date: "Sep 15, 2024", title: "Navigating SEC compliance with automated audit trails", cat: "Compliance" },
    { date: "Aug 30, 2024", title: "How to effectively prompt LLMs for financial commentary", cat: "AI & ML" },
  ];

  return (
    <div className="w-full pt-10 pb-24 px-4 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 border-b border-border pb-10">
          <span className="text-eyebrow">Engineering & Updates</span>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold mb-6">
            The VARKONIS Blog
          </h1>
          <p className="text-lg text-white/50">
            Deep dives into financial engineering, platform architecture, and product updates.
          </p>
        </div>

        <div className="flex flex-col gap-0">
          {posts.map((post, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <Link href="#" className="flex flex-col sm:flex-row sm:items-center justify-between py-8 border-b border-border/50 group hover:bg-white/[0.02] -mx-4 px-4 rounded-lg transition-colors">
                <div>
                  <div className="flex items-center gap-3 mb-2 text-xs">
                    <span className="text-primary font-bold tracking-widest uppercase">{post.cat}</span>
                    <span className="text-white/30">•</span>
                    <span className="text-white/40">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{post.title}</h3>
                </div>
                <div className="hidden sm:block text-white/30 group-hover:translate-x-2 transition-all group-hover:text-white">
                  →
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
