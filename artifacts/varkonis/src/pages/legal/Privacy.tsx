import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function Privacy() {
  const sections = [
    { id: "collection", title: "Data Collection", content: "We collect information you provide directly to us, such as when you create or modify your account, request customer support, or communicate with us. This information may include: name, email, company name, and job title." },
    { id: "usage", title: "Use of Information", content: "We use the information we collect to provide, maintain, and improve our services, such as to process transactions, send technical notices, updates, security alerts, and support and administrative messages." },
    { id: "sharing", title: "Sharing of Information", content: "We do not share your personal information with third parties except as described in this policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf." },
    { id: "security", title: "Security", content: "VARKONIS takes reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction." },
    { id: "choices", title: "Your Choices", content: "You may update, correct or delete information about you at any time by logging into your online account or emailing us at privacy@varkonis.io." },
  ];

  return (
    <div className="min-h-screen pt-[140px] pb-24 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-[140px]">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-6">Privacy Policy</h4>
            <nav className="flex flex-col gap-4">
              {sections.map(s => (
                <a key={s.id} href={`#${s.id}`} className="text-sm text-white/50 hover:text-primary transition-colors">
                  {s.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <div className="max-w-3xl">
          <AnimatedSection>
            <div className="mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">Legal</span>
              <h1 className="text-4xl sm:text-5xl font-display font-extrabold mb-4">Privacy Policy</h1>
              <p className="text-white/40">Last updated: October 24, 2024</p>
            </div>

            <div className="prose prose-invert prose-p:text-white/60 prose-headings:text-white prose-headings:font-display">
              <p className="text-lg leading-relaxed mb-12">
                At VARKONIS, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
              </p>

              {sections.map(s => (
                <section key={s.id} id={s.id} className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold mb-4">{s.title}</h2>
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
