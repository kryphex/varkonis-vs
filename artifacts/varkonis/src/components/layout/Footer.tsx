import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-1 border-t border-border pt-20 pb-8 px-6 sm:px-12 mt-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-10 lg:gap-8 mb-16">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 font-display text-xl font-extrabold tracking-wide mb-4">
              <div className="w-8 h-8 bg-primary flex items-center justify-center text-[0.7rem] font-black clip-diamond">V</div>
              VARKONIS
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Institutional-grade intelligence for serious capital. Unifying analytics, reporting, and risk controls.
            </p>
            <form className="flex gap-2 max-w-sm" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter email for updates"
                className="bg-surface-3 border border-border rounded-md px-4 py-2 text-sm w-full focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-white text-black px-3 py-2 rounded-md hover:bg-gray-200 transition-colors shrink-0">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-4">Platform</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-white/50">
              <li><Link href="/platform" className="hover:text-white transition-colors">Overview</Link></li>
              <li><Link href="/platform/portfolio-analytics" className="hover:text-white transition-colors">Portfolio Analytics</Link></li>
              <li><Link href="/platform/risk-intelligence" className="hover:text-white transition-colors">Risk Intelligence</Link></li>
              <li><Link href="/platform/ai-insights" className="hover:text-white transition-colors">AI Insights</Link></li>
              <li><Link href="/platform/client-reporting" className="hover:text-white transition-colors">Client Reporting</Link></li>
              <li><Link href="/platform/deal-flow-crm" className="hover:text-white transition-colors">Deal Flow CRM</Link></li>
              <li><Link href="/market-terminal" className="hover:text-white transition-colors text-green-400/80">Live Markets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-4">Solutions</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-white/50">
              <li><Link href="/solutions/hedge-funds" className="hover:text-white transition-colors">Hedge Funds</Link></li>
              <li><Link href="/solutions/private-equity" className="hover:text-white transition-colors">Private Equity</Link></li>
              <li><Link href="/solutions/family-offices" className="hover:text-white transition-colors">Family Offices</Link></li>
              <li><Link href="/solutions/wealth-management" className="hover:text-white transition-colors">Wealth Management</Link></li>
              <li><Link href="/solutions/ma-advisory" className="hover:text-white transition-colors">M&A Advisory</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-4">Resources</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-white/50">
              <li><Link href="/resources" className="hover:text-white transition-colors">Resource Hub</Link></li>
              <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/resources/glossary" className="hover:text-white transition-colors">Glossary</Link></li>
              <li><Link href="/resources/roi-calculator" className="hover:text-white transition-colors">ROI Calculator</Link></li>
              <li><Link href="/resources/webinars" className="hover:text-white transition-colors">Webinars</Link></li>
              <li><Link href="/resources/whitepapers" className="hover:text-white transition-colors">Whitepapers</Link></li>
              <li><Link href="/resources/changelog" className="hover:text-white transition-colors">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-white/50">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/cases" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/status" className="hover:text-white transition-colors">System Status</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-4">Legal</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-white/50">
              <li><Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/legal/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link href="/legal/security" className="hover:text-white transition-colors">Security</Link></li>
              <li><Link href="/legal/sla" className="hover:text-white transition-colors">SLA</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} VARKONIS Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span>SOC 2 Type II</span>
            <span className="w-1 h-1 rounded-full bg-border"></span>
            <span>ISO 27001</span>
            <span className="w-1 h-1 rounded-full bg-border"></span>
            <span>GDPR Compliant</span>
            <span className="w-1 h-1 rounded-full bg-border"></span>
            <Link href="/status" className="hover:text-white/70 transition-colors flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
              All systems operational
            </Link>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `.clip-diamond { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }`}} />
    </footer>
  );
}
