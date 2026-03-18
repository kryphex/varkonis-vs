import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function SLA() {
  const sections = [
    { id: "uptime", title: "Service Availability", content: "VARKONIS guarantees a Service Uptime of 99.9% during each calendar month. 'Service Uptime' means the platform is available and capable of receiving and processing data." },
    { id: "support", title: "Support Response Times", content: "For Priority 1 issues (Platform Down), we guarantee a response within 1 hour. Priority 2 issues (Major Feature Impairment) are responded to within 4 hours. Priority 3 (General Questions) within 24 hours." },
    { id: "credits", title: "Service Credits", content: "If we fail to meet the Uptime Guarantee, customers are eligible for Service Credits according to the following schedule: <99.9% = 10% credit, <99.0% = 25% credit, <95.0% = 50% credit." },
    { id: "maintenance", title: "Maintenance", content: "Scheduled maintenance will occur during off-peak hours (UTC). We will provide at least 48 hours notice for any scheduled maintenance that may result in service downtime." },
  ];

  return (
    <div className="min-h-screen pt-[140px] pb-24 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-[140px]">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-6">SLA</h4>
            <nav className="flex flex-col gap-4">
              {sections.map(s => (
                <a key={s.id} href={`#${s.id}`} className="text-sm text-white/50 hover:text-primary transition-colors">
                  {s.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="max-w-3xl">
          <AnimatedSection>
            <div className="mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">Legal</span>
              <h1 className="text-4xl sm:text-5xl font-display font-extrabold mb-4">Service Level Agreement</h1>
              <p className="text-white/40">Commitment to reliability and performance.</p>
            </div>

            <div className="prose prose-invert prose-p:text-white/60">
              {sections.map(s => (
                <section key={s.id} id={s.id} className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold mb-4 text-white font-display">{s.title}</h2>
                  <p className="leading-relaxed">{s.content}</p>
                </section>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
