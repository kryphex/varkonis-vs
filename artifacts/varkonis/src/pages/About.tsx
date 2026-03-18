import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function About() {
  const timeline = [
    { year: "2019", title: "Founded", desc: "Started in a small office in NYC with a vision to modernize institutional finance." },
    { year: "2020", title: "First institutional client", desc: "A top-tier hedge fund adopts our core analytics engine." },
    { year: "2021", title: "Series A", desc: "Raised $25M to scale our engineering team and platform capabilities." },
    { year: "2022", title: "100 clients", desc: "Reaching a major milestone of 100 institutional investment firms." },
    { year: "2023", title: "AI module launch", desc: "Introduced advanced machine learning signals to the platform." },
    { year: "2024", title: "Global expansion", desc: "Opened offices in London, Singapore, and Tokyo." },
  ];

  const values = [
    { title: "Transparency", desc: "Open algorithms and clear data lineage for every metric." },
    { title: "Speed", desc: "Real-time processing for instant decision-making." },
    { title: "Precision", desc: "Institutional-grade accuracy in every calculation." },
    { title: "Security", desc: "Enterprise-level protection for your most sensitive data." },
    { title: "Partnership", desc: "We win when our clients win. Deep integration with your team." },
    { title: "Innovation", desc: "Constantly pushing the boundaries of financial technology." },
  ];

  const team = [
    { name: "Sarah Chen", role: "CEO", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
    { name: "Marcus Webb", role: "CTO", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus" },
    { name: "Priya Sharma", role: "CPO", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya" },
  ];

  const stats = [
    { label: "AUM monitored", value: "$180B+" },
    { label: "Clients", value: "340+" },
    { label: "Uptime", value: "99.99%" },
    { label: "Global offices", value: "4" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-[140px] pb-24 px-6 sm:px-12 max-w-7xl mx-auto text-center">
        <div className="text-xs tracking-[0.18em] uppercase text-primary flex items-center justify-center gap-3 mb-4">
          <span className="w-4 h-px bg-primary"></span>
          Our Story
          <span className="w-4 h-px bg-primary"></span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[0.95] tracking-tight mb-6">
          Built by <em className="not-italic bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">operators</em>, for operators
        </h1>
        <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto">
          VARKONIS was founded by a team of quantitative researchers and software engineers who were tired of the fragmented, legacy tools used in institutional finance. We're building the unified platform we always wished we had.
        </p>
      </section>

      {/* Stats */}
      <section className="py-20 bg-surface-1 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-display font-bold mb-16 text-center">Our Journey</h2>
        <div className="relative border-l border-border ml-4 sm:ml-0 sm:left-1/2">
          {timeline.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className={`mb-12 relative ${i % 2 === 0 ? 'sm:text-right sm:pr-12 sm:left-[-50%]' : 'sm:pl-12 sm:left-0'}`}>
              <div className="absolute top-0 w-4 h-4 rounded-full bg-primary border-4 border-background -left-[9px] sm:left-auto sm:right-[-9px] translate-y-1" style={{ left: i % 2 === 0 ? undefined : '-9px', right: i % 2 === 0 ? '-9px' : undefined }}></div>
              <div className="text-primary font-display font-bold text-xl mb-1">{item.year}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-white/50 text-sm max-w-md ml-auto mr-0">{item.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface-2">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <h2 className="text-3xl font-display font-bold mb-16 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={i} delay={i * 0.05} className="p-8 bg-surface-1 border border-border rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{value.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-display font-bold mb-16 text-center">Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <div key={i} className="text-center group">
              <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-2xl border border-border group-hover:border-primary transition-colors">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
