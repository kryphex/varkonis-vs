import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Link } from "wouter";

export default function Careers() {
  const roles = [
    { title: "Sr. Engineer - Backend", team: "Engineering", location: "Remote / NYC", type: "Full-time" },
    { title: "Frontend Engineer", team: "Engineering", location: "Remote / London", type: "Full-time" },
    { title: "ML Engineer", team: "Data Science", location: "Remote / SF", type: "Full-time" },
    { title: "Product Designer", team: "Product", location: "Remote", type: "Full-time" },
    { title: "Sales Engineer", team: "Sales", location: "NYC", type: "Full-time" },
    { title: "Customer Success", team: "Operations", location: "Remote", type: "Full-time" },
  ];

  const perks = [
    { title: "Remote-first", desc: "Work from anywhere in the world, or join one of our global hubs." },
    { title: "Equity", desc: "Everyone is an owner at VARKONIS. Competitive stock option plans." },
    { title: "Health", desc: "Comprehensive health, dental, and vision coverage for you and your family." },
    { title: "L&D Budget", desc: "$3,000 annual budget for books, courses, and conferences." },
    { title: "Team Offsites", desc: "Twice-yearly global gatherings in inspiring locations." },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-[140px] pb-24 px-6 sm:px-12 max-w-7xl mx-auto text-center">
        <div className="text-xs tracking-[0.18em] uppercase text-primary flex items-center justify-center gap-3 mb-4">
          <span className="w-4 h-px bg-primary"></span>
          Careers
          <span className="w-4 h-px bg-primary"></span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[0.95] tracking-tight mb-6">
          Join the <em className="not-italic bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">future</em> of finance
        </h1>
        <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          We're looking for world-class engineers, designers, and operators to help us build the next generation of financial infrastructure.
        </p>
        <Button size="lg">View Open Roles</Button>
      </section>

      {/* Open Roles */}
      <section className="py-24 px-6 sm:px-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-display font-bold mb-12">Open Roles</h2>
        <div className="flex flex-col gap-4">
          {roles.map((role, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <Link href="#" className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-surface-1 border border-border rounded-xl hover:border-primary transition-colors group">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{role.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-white/40 uppercase tracking-widest font-semibold">
                    <span>{role.team}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                    <span>{role.location}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                    <span>{role.type}</span>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 text-primary font-bold flex items-center gap-2">
                  Apply Now <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Culture/Perks */}
      <section className="py-24 bg-surface-2 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <h2 className="text-3xl font-display font-bold mb-16 text-center">Why VARKONIS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {/* Icon placeholder */}
                  <div className="w-6 h-6 border-2 border-current rounded-sm"></div>
                </div>
                <h3 className="text-xl font-bold text-white">{perk.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 sm:px-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-display font-bold mb-6">Don't see a fit?</h2>
        <p className="text-white/60 mb-10">
          We're always looking for exceptional talent. If you're passionate about what we're building, get in touch anyway.
        </p>
        <Button variant="outline" size="lg">General Application</Button>
      </section>
    </div>
  );
}
