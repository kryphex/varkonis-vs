import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function Terms() {
  const sections = [
    { id: "acceptance", title: "Acceptance of Terms", content: "By accessing or using the VARKONIS platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site." },
    { id: "license", title: "Use License", content: "Permission is granted to temporarily access the materials on VARKONIS's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title." },
    { id: "disclaimer", title: "Disclaimer", content: "The materials on VARKONIS's website are provided on an 'as is' basis. VARKONIS makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability." },
    { id: "limitations", title: "Limitations", content: "In no event shall VARKONIS or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on VARKONIS's website." },
  ];

  return (
    <div className="min-h-screen pt-[140px] pb-24 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-[140px]">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-6">Terms of Service</h4>
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
              <h1 className="text-4xl sm:text-5xl font-display font-extrabold mb-4">Terms of Service</h1>
              <p className="text-white/40">Last updated: October 24, 2024</p>
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
