import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function Cookies() {
  const sections = [
    { id: "what", title: "What are cookies?", content: "Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site." },
    { id: "how", title: "How we use cookies", content: "VARKONIS uses cookies to improve your experience on our platform, to analyze how our services are used, and to assist in our marketing efforts." },
    { id: "types", title: "Types of cookies we use", content: "We use essential cookies for security and authentication, functional cookies to remember your preferences, and analytical cookies to understand how visitors interact with our website." },
    { id: "control", title: "Controlling cookies", content: "Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.aboutcookies.org." },
  ];

  return (
    <div className="min-h-screen pt-[140px] pb-24 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-[140px]">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-6">Cookie Policy</h4>
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
              <h1 className="text-4xl sm:text-5xl font-display font-extrabold mb-4">Cookie Policy</h1>
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
