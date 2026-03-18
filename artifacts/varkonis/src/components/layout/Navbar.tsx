import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown, Menu, X, ArrowRight,
  Activity, ShieldAlert, BarChart3, Users, Zap, BookOpen, Layers, Terminal,
  LayoutDashboard, Brain, GitBranch, BarChart2, TrendingUp, Building2,
  Briefcase, Home, HelpCircle, Radio, FileText, Globe, BookMarked,
  Calculator, Video, ScrollText, Code, Plug, GraduationCap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[800] h-[70px] flex items-center justify-between px-4 sm:px-8 lg:px-12 transition-all duration-300",
          scrolled ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20" : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-wide hover:opacity-80 transition-opacity shrink-0">
            <div className="w-7 h-7 bg-primary flex items-center justify-center text-[0.65rem] font-black clip-diamond">V</div>
            VARKONIS
          </Link>

          <ul className="hidden lg:flex items-center h-[70px] text-[0.81rem]">
            <NavDropdown title="Platform">
              <div className="grid grid-cols-3 gap-8 p-6 w-[760px]">
                <div>
                  <div className="text-[0.62rem] tracking-[0.14em] uppercase text-white/30 font-semibold mb-3 px-2">Analytics</div>
                  <div className="flex flex-col gap-0.5">
                    <DropdownItem href="/platform/portfolio-analytics" icon={<Activity className="w-3.5 h-3.5" />} title="Portfolio Analytics" desc="Real-time cross-asset performance" />
                    <DropdownItem href="/platform/risk-intelligence" icon={<ShieldAlert className="w-3.5 h-3.5" />} title="Risk Intelligence" desc="VaR, CVaR, stress testing" />
                    <DropdownItem href="/platform/ai-insights" icon={<Brain className="w-3.5 h-3.5" />} title="AI Insights" desc="ML signals & anomaly detection" />
                  </div>
                </div>
                <div>
                  <div className="text-[0.62rem] tracking-[0.14em] uppercase text-white/30 font-semibold mb-3 px-2">Operations</div>
                  <div className="flex flex-col gap-0.5">
                    <DropdownItem href="/platform/client-reporting" icon={<BarChart3 className="w-3.5 h-3.5" />} title="Client Reporting" desc="Automated branded reports" />
                    <DropdownItem href="/platform/deal-flow-crm" icon={<GitBranch className="w-3.5 h-3.5" />} title="Deal Flow CRM" desc="Pipeline to close management" />
                    <DropdownItem href="/platform/api-integrations" icon={<Terminal className="w-3.5 h-3.5" />} title="API & Integrations" desc="Bloomberg, Refinitiv, REST" />
                  </div>
                </div>
                <div className="bg-gradient-to-br from-surface-3 to-surface-1 border border-border rounded-lg p-5 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display font-bold text-sm mb-2">The VARKONIS OS</h4>
                    <p className="text-xs text-white/50 leading-relaxed">Analytics, reporting, and operational control in a single product surface.</p>
                  </div>
                  <Link href="/market-terminal" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-hover hover:gap-2 transition-all mt-4">
                    Live Market Terminal <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </NavDropdown>

            <NavDropdown title="Solutions">
              <div className="flex flex-col p-3 w-[220px]">
                <DropdownItem href="/solutions/hedge-funds" icon={<TrendingUp className="w-3.5 h-3.5" />} title="Hedge Funds" />
                <DropdownItem href="/solutions/private-equity" icon={<Briefcase className="w-3.5 h-3.5" />} title="Private Equity" />
                <DropdownItem href="/solutions/family-offices" icon={<Home className="w-3.5 h-3.5" />} title="Family Offices" />
                <DropdownItem href="/solutions/wealth-management" icon={<BarChart2 className="w-3.5 h-3.5" />} title="Wealth Management" />
                <DropdownItem href="/solutions/ma-advisory" icon={<Building2 className="w-3.5 h-3.5" />} title="M&A Advisory" />
              </div>
            </NavDropdown>

            <NavDropdown title="Resources">
              <div className="grid grid-cols-2 gap-6 p-5 w-[520px]">
                <div>
                  <div className="text-[0.62rem] tracking-[0.14em] uppercase text-white/30 font-semibold mb-3 px-2">Learn</div>
                  <div className="flex flex-col gap-0.5">
                    <DropdownItem href="/resources" icon={<Globe className="w-3.5 h-3.5" />} title="Resource Hub" desc="All guides & research" />
                    <DropdownItem href="/resources/glossary" icon={<BookMarked className="w-3.5 h-3.5" />} title="Financial Glossary" desc="200+ institutional terms" />
                    <DropdownItem href="/resources/roi-calculator" icon={<Calculator className="w-3.5 h-3.5" />} title="ROI Calculator" desc="Estimate your savings" />
                    <DropdownItem href="/resources/webinars" icon={<Video className="w-3.5 h-3.5" />} title="Webinars" desc="Live & on-demand sessions" />
                    <DropdownItem href="/resources/whitepapers" icon={<ScrollText className="w-3.5 h-3.5" />} title="Whitepapers" desc="Institutional research" />
                  </div>
                </div>
                <div>
                  <div className="text-[0.62rem] tracking-[0.14em] uppercase text-white/30 font-semibold mb-3 px-2">Developers</div>
                  <div className="flex flex-col gap-0.5">
                    <DropdownItem href="/docs" icon={<FileText className="w-3.5 h-3.5" />} title="Documentation" desc="Complete platform docs" />
                    <DropdownItem href="/docs/getting-started" icon={<GraduationCap className="w-3.5 h-3.5" />} title="Getting Started" desc="Up in minutes" />
                    <DropdownItem href="/docs/api" icon={<Code className="w-3.5 h-3.5" />} title="API Reference" desc="Endpoints & auth" />
                    <DropdownItem href="/docs/integrations" icon={<Plug className="w-3.5 h-3.5" />} title="Integrations" desc="Bloomberg, Refinitiv & more" />
                    <DropdownItem href="/resources/changelog" icon={<Radio className="w-3.5 h-3.5" />} title="Changelog" desc="Latest releases" />
                  </div>
                </div>
              </div>
            </NavDropdown>

            <NavDropdown title="Company">
              <div className="flex flex-col p-3 w-[200px]">
                <DropdownItem href="/about" icon={<Users className="w-3.5 h-3.5" />} title="About Us" />
                <DropdownItem href="/blog" icon={<BookOpen className="w-3.5 h-3.5" />} title="Blog" />
                <DropdownItem href="/careers" icon={<Briefcase className="w-3.5 h-3.5" />} title="Careers" />
                <DropdownItem href="/contact" icon={<Zap className="w-3.5 h-3.5" />} title="Contact" />
                <DropdownItem href="/help" icon={<HelpCircle className="w-3.5 h-3.5" />} title="Help Center" />
                <DropdownItem href="/status" icon={<Radio className="w-3.5 h-3.5" />} title="System Status" />
              </div>
            </NavDropdown>

            <NavLink href="/cases">Case Studies</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/market-terminal">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                Markets
              </span>
            </NavLink>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <Link
              href="/dashboard"
              className="hidden sm:flex items-center gap-1.5 font-display text-[0.77rem] font-bold tracking-wide px-5 py-2.5 bg-primary text-white rounded-md hover:bg-primary-hover hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(79,110,247,0.4)] transition-all"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              Dashboard
            </Link>
          ) : (
            <>
              <Link href="/login" className="hidden sm:block text-[0.79rem] text-white/50 hover:text-white transition-colors px-3 py-1">
                Sign In
              </Link>
              <Link
                href="/signup"
                className="hidden sm:flex items-center justify-center font-display text-[0.77rem] font-bold tracking-wide px-5 py-2.5 bg-primary text-white rounded-md hover:bg-primary-hover hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(79,110,247,0.4)] transition-all"
              >
                Get started
              </Link>
            </>
          )}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[70px] z-[700] bg-background border-t border-border overflow-y-auto p-6 flex flex-col gap-2"
          >
            <MobileSection label="Platform">
              <MobileNavLink href="/platform">Overview</MobileNavLink>
              <MobileNavLink href="/platform/portfolio-analytics">Portfolio Analytics</MobileNavLink>
              <MobileNavLink href="/platform/risk-intelligence">Risk Intelligence</MobileNavLink>
              <MobileNavLink href="/platform/ai-insights">AI Insights</MobileNavLink>
              <MobileNavLink href="/platform/client-reporting">Client Reporting</MobileNavLink>
              <MobileNavLink href="/platform/deal-flow-crm">Deal Flow CRM</MobileNavLink>
              <MobileNavLink href="/platform/api-integrations">API & Integrations</MobileNavLink>
            </MobileSection>
            <MobileSection label="Solutions">
              <MobileNavLink href="/solutions/hedge-funds">Hedge Funds</MobileNavLink>
              <MobileNavLink href="/solutions/private-equity">Private Equity</MobileNavLink>
              <MobileNavLink href="/solutions/family-offices">Family Offices</MobileNavLink>
              <MobileNavLink href="/solutions/wealth-management">Wealth Management</MobileNavLink>
              <MobileNavLink href="/solutions/ma-advisory">M&A Advisory</MobileNavLink>
            </MobileSection>
            <MobileSection label="Resources">
              <MobileNavLink href="/resources">Resource Hub</MobileNavLink>
              <MobileNavLink href="/docs">Documentation</MobileNavLink>
              <MobileNavLink href="/market-terminal">Market Terminal</MobileNavLink>
              <MobileNavLink href="/blog">Blog</MobileNavLink>
            </MobileSection>
            <MobileSection label="Company">
              <MobileNavLink href="/about">About</MobileNavLink>
              <MobileNavLink href="/careers">Careers</MobileNavLink>
              <MobileNavLink href="/help">Help Center</MobileNavLink>
              <MobileNavLink href="/status">Status</MobileNavLink>
              <MobileNavLink href="/contact">Contact</MobileNavLink>
            </MobileSection>
            <div className="mt-4 flex flex-col gap-3 border-t border-border pt-6">
              <MobileNavLink href="/cases">Case Studies</MobileNavLink>
              <MobileNavLink href="/pricing">Pricing</MobileNavLink>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              {user ? (
                <Link href="/dashboard" className="flex items-center justify-center gap-2 font-display text-sm font-bold tracking-wide px-5 py-3 bg-primary text-white rounded-md">
                  <LayoutDashboard className="w-4 h-4" /> Dashboard
                </Link>
              ) : (
                <>
                  <Link href="/login" className="text-white/50 text-sm py-2 text-center">Sign In</Link>
                  <Link href="/signup" className="flex items-center justify-center font-display text-sm font-bold tracking-wide px-5 py-3 bg-primary text-white rounded-md">Get started free</Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `.clip-diamond { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }`}} />
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [location] = useLocation();
  const isActive = location === href;
  return (
    <li className="h-full flex items-center">
      <Link
        href={href}
        className={cn("px-3 text-[0.81rem] transition-colors whitespace-nowrap h-full flex items-center", isActive ? "text-white" : "text-white/50 hover:text-white")}
      >
        {children}
      </Link>
    </li>
  );
}

function NavDropdown({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <li className="group h-full flex items-center relative">
      <button className="px-3 text-[0.81rem] text-white/50 group-hover:text-white transition-colors h-full flex items-center gap-1">
        {title} <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
      </button>
      <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 pt-2 z-50">
        <div className="bg-surface-2 border border-border shadow-2xl rounded-b-xl overflow-hidden">
          {children}
        </div>
      </div>
    </li>
  );
}

function DropdownItem({ href, icon, title, desc }: { href: string; icon: React.ReactNode; title: string; desc?: string }) {
  return (
    <Link href={href} className="flex items-start gap-2.5 px-2 py-2 rounded-md text-white/60 hover:text-primary-hover hover:bg-accent transition-colors">
      <span className="shrink-0 mt-0.5 text-white/40">{icon}</span>
      <span>
        <span className="block text-[0.8rem] text-white/80 font-medium leading-tight">{title}</span>
        {desc && <span className="block text-[0.72rem] text-white/40 mt-0.5">{desc}</span>}
      </span>
    </Link>
  );
}

function MobileSection({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border py-2">
      <button
        className="w-full flex items-center justify-between py-2 font-display text-base font-bold text-white/70"
        onClick={() => setOpen(!open)}
      >
        {label} <ChevronDown className={cn("w-4 h-4 transition-transform", open && "rotate-180")} />
      </button>
      {open && <div className="flex flex-col gap-1 pl-2 mt-1">{children}</div>}
    </div>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block text-sm text-white/60 hover:text-white py-1.5 transition-colors">
      {children}
    </Link>
  );
}
