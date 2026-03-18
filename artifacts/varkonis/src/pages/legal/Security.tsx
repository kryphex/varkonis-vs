import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Shield, Lock, Eye, FileCheck } from "lucide-react";

export default function Security() {
  const sections = [
    { 
      id: "infrastructure", 
      title: "Infrastructure Security", 
      icon: Shield,
      content: "VARKONIS is hosted on enterprise-grade cloud infrastructure with multiple layers of physical and logical security. Our data centers are SOC 2 Type II, ISO 27001, and PCI-DSS compliant." 
    },
    { 
      id: "data", 
      title: "Data Encryption", 
      icon: Lock,
      content: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256. We employ hardware security modules (HSMs) for key management and rotate keys regularly." 
    },
    { 
      id: "access", 
      title: "Access Control", 
      icon: Eye,
      content: "We implement strict least-privilege access controls. All employee access requires multi-factor authentication (MFA) and is logged and audited in real-time." 
    },
    { 
      id: "compliance", 
      title: "Compliance & Audits", 
      icon: FileCheck,
      content: "We undergo regular third-party security audits and penetration testing. Our platform is built to help customers comply with SEC, FINRA, and GDPR requirements." 
    },
  ];

  return (
    <div className="min-h-screen pt-[140px] pb-24 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-[140px]">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-6">Security</h4>
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">Legal & Security</span>
              <h1 className="text-4xl sm:text-5xl font-display font-extrabold mb-4">Security Practices</h1>
              <p className="text-white/40">Ensuring the safety of your institutional data.</p>
            </div>

            <div className="prose prose-invert prose-p:text-white/60 mb-16">
              <p className="text-lg leading-relaxed">
                Security is not a feature at VARKONIS; it's the foundation of everything we build. We understand the sensitivity of financial data and employ institutional-grade security measures to protect it.
              </p>
            </div>

            <div className="flex flex-col gap-12">
              {sections.map(s => (
                <section key={s.id} id={s.id} className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <s.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-white font-display">{s.title}</h2>
                  </div>
                  <p className="leading-relaxed text-white/60 pl-16">{s.content}</p>
                </section>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
