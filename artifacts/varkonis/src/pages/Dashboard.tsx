import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import {
  BarChart3, TrendingUp, ShieldAlert, Users, Settings, LogOut,
  Bell, Search, ArrowUpRight, ArrowDownRight, Activity, Zap,
  FileText, ChevronRight, AlertTriangle, CheckCircle2,
  Lock, Crown, ShieldCheck, LayoutDashboard
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const PORTFOLIO = [
  { name: "AAPL", sector: "Technology", value: "$2,143,800", weight: "8.7%", day: "+3.2%", up: true },
  { name: "MSFT", sector: "Technology", value: "$1,876,500", weight: "7.6%", day: "+1.9%", up: true },
  { name: "NVDA", sector: "Technology", value: "$1,542,000", weight: "6.3%", day: "+8.7%", up: true },
  { name: "BRK.B", sector: "Financials", value: "$1,230,400", weight: "5.0%", day: "-0.4%", up: false },
  { name: "JPM", sector: "Financials", value: "$987,200", weight: "4.0%", day: "+0.8%", up: true },
  { name: "GLD", sector: "Commodities", value: "$876,100", weight: "3.6%", day: "-1.1%", up: false },
];

const ALERTS = [
  { type: "risk", msg: "VaR breach threshold approaching for Tech sector", time: "2m ago" },
  { type: "ok", msg: "Q1 client report generated successfully", time: "14m ago" },
  { type: "warn", msg: "NVDA position exceeds 6% concentration limit", time: "1h ago" },
  { type: "ok", msg: "Portfolio rebalancing completed", time: "3h ago" },
];

function MiniChart({ up }: { up: boolean }) {
  const color = up ? "#1fcfa0" : "#f75a5a";
  const path = up
    ? "M0,40 C10,38 20,30 30,25 C40,20 50,22 60,18 C70,14 80,10 90,6 C95,4 100,2 100,0"
    : "M0,0 C10,2 20,8 30,12 C40,16 50,14 60,18 C70,22 80,30 90,35 C95,38 100,40 100,40";
  return (
    <svg width="60" height="24" viewBox="0 0 100 40" fill="none" preserveAspectRatio="none">
      <path d={path} stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function RoleBadge({ role }: { role: string }) {
  if (role === "admin") return (
    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-yellow-400/15 text-yellow-400 border border-yellow-400/20">
      <ShieldCheck className="w-2.5 h-2.5" /> Admin
    </span>
  );
  if (role === "paid") return (
    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20">
      <Crown className="w-2.5 h-2.5" /> Paid
    </span>
  );
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/10">
      Free
    </span>
  );
}

function LockedSection({ title }: { title: string }) {
  return (
    <div className="relative rounded-xl border border-border overflow-hidden">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
        <div className="w-10 h-10 rounded-full bg-surface-2 border border-border flex items-center justify-center mb-3">
          <Lock className="w-4.5 h-4.5 text-white/40" />
        </div>
        <p className="text-sm font-semibold text-white/70 mb-1">{title} is locked</p>
        <p className="text-xs text-white/40 mb-4 text-center max-w-[200px]">Upgrade to a paid plan to access this feature</p>
        <Link href="/pricing" className="font-display font-bold text-xs tracking-wide px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors">
          Upgrade now →
        </Link>
      </div>
      <div className="opacity-20 pointer-events-none p-5 blur-sm">
        <div className="h-32 bg-surface-2 rounded-lg" />
      </div>
    </div>
  );
}

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("Portfolio");

  const role = user?.role ?? "unpaid";
  const isPaid = role === "paid" || role === "admin";
  const isAdmin = role === "admin";

  function handleLogout() {
    logout();
    setLocation("/");
  }

  const navItems = [
    { icon: BarChart3, label: "Portfolio" },
    { icon: TrendingUp, label: "Performance", locked: !isPaid },
    { icon: ShieldAlert, label: "Risk", locked: !isPaid },
    { icon: FileText, label: "Reports", locked: !isPaid },
    { icon: Users, label: "Clients", locked: !isPaid },
    { icon: Zap, label: "AI Insights", locked: !isPaid },
    ...(isAdmin ? [{ icon: ShieldCheck, label: "Admin Panel", adminOnly: true }] : []),
  ];

  function handleNavClick(label: string) {
    if (label === "Admin Panel") {
      setLocation("/admin");
    } else {
      setActiveTab(label);
    }
  }

  return (
    <div className="min-h-screen bg-background flex" style={{ fontFamily: "'Manrope', sans-serif" }}>
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-[220px] bg-surface-1 border-r border-border">
        <div className="p-5 border-b border-border">
          <Link href="/" className="flex items-center gap-2 font-display text-base font-extrabold tracking-wide">
            <div className="w-6 h-6 bg-primary flex items-center justify-center text-[0.6rem] font-black clip-diamond">V</div>
            VARKONIS
          </Link>
        </div>

        <nav className="flex-1 p-3 space-y-0.5">
          {navItems.map(({ icon: Icon, label, locked, adminOnly }) => (
            <button
              key={label}
              onClick={() => !locked && handleNavClick(label)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                activeTab === label && !adminOnly
                  ? "bg-primary/15 text-primary font-semibold"
                  : adminOnly
                    ? "text-yellow-400/80 hover:text-yellow-400 hover:bg-yellow-400/10"
                    : locked
                      ? "text-white/20 cursor-not-allowed"
                      : "text-white/50 hover:text-white hover:bg-surface-2"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="flex-1 text-left">{label}</span>
              {locked && <Lock className="w-3 h-3 opacity-40" />}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-border">
          {/* Role badge */}
          <div className="px-3 py-2 mb-1">
            <RoleBadge role={role} />
          </div>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/50 hover:text-white hover:bg-surface-2 transition-colors">
            <Settings className="w-4 h-4" />
            Settings
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/50 hover:text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="h-[60px] border-b border-border flex items-center justify-between px-6 bg-surface-1/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-surface-2 border border-border rounded-lg px-3 py-1.5 text-sm text-white/40 w-[240px]">
              <Search className="w-3.5 h-3.5" />
              <span>Search positions, reports...</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {isAdmin && (
              <Link href="/admin" className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-yellow-400/80 hover:text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-3 py-1.5 rounded-lg transition-colors">
                <ShieldCheck className="w-3.5 h-3.5" /> Admin Panel
              </Link>
            )}
            <button className="relative text-white/40 hover:text-white transition-colors">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-400 rounded-full" />
            </button>
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary">
                {user?.name?.[0]?.toUpperCase() ?? "U"}
              </div>
              <div className="hidden sm:block">
                <div className="flex items-center gap-1.5">
                  <div className="text-xs font-semibold text-white">{user?.name}</div>
                  <RoleBadge role={role} />
                </div>
                {user?.firm && <div className="text-[10px] text-white/40">{user.firm}</div>}
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard body */}
        <main className="flex-1 p-6 overflow-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>

            {/* Unpaid banner */}
            {!isPaid && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-5 flex items-center justify-between gap-4 bg-gradient-to-r from-primary/15 to-primary/5 border border-primary/25 rounded-xl px-5 py-3.5"
              >
                <div className="flex items-center gap-3">
                  <Crown className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-white">You're on the Free plan</p>
                    <p className="text-xs text-white/50">Upgrade to unlock Risk Intelligence, AI Insights, Client Reports, and more.</p>
                  </div>
                </div>
                <Link href="/pricing" className="shrink-0 font-display font-bold text-xs tracking-wide px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors whitespace-nowrap">
                  Upgrade → 
                </Link>
              </motion.div>
            )}

            {/* Welcome */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h1 className="font-display text-2xl font-extrabold text-white">
                  Good morning, {user?.name?.split(" ")[0] ?? "there"}.
                </h1>
                <p className="text-white/40 text-sm mt-0.5">
                  {isAdmin ? "Platform admin view — all systems nominal." : isPaid ? "Here's your full portfolio overview." : "Here's your free portfolio overview."}
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs text-white/30 bg-surface-2 border border-border rounded-lg px-3 py-1.5">
                <Activity className="w-3.5 h-3.5 text-[#1fcfa0]" />
                Live · Updated just now
              </div>
            </div>

            {/* Metric cards — always visible */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { label: "Total AUM", value: "$24.6M", change: "+4.8%", up: true, sub: "vs last month" },
                { label: "YTD Return", value: "+18.3%", change: "+7.1pp", up: true, sub: "vs 11.2% benchmark" },
                { label: "Sharpe Ratio", value: isPaid ? "0.94" : "—", change: isPaid ? "+0.13" : "Paid only", up: true, sub: "12-month rolling", locked: !isPaid },
                { label: "Max Drawdown", value: isPaid ? "-4.2%" : "—", change: isPaid ? "+1.1%" : "Paid only", up: true, sub: "improved vs prior", locked: !isPaid },
              ].map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className={`bg-surface-1 border rounded-xl p-4 relative overflow-hidden ${m.locked ? "border-border/50" : "border-border"}`}
                >
                  {m.locked && (
                    <div className="absolute top-2 right-2">
                      <Lock className="w-3 h-3 text-white/20" />
                    </div>
                  )}
                  <div className="text-[0.6rem] tracking-[0.12em] uppercase text-white/30 font-semibold mb-2">{m.label}</div>
                  <div className={`font-display text-2xl font-extrabold mb-1 ${m.locked ? "text-white/20" : "text-white"}`}>{m.value}</div>
                  <div className={`flex items-center gap-1 text-xs font-semibold ${m.locked ? "text-white/20" : m.up ? "text-[#1fcfa0]" : "text-[#f75a5a]"}`}>
                    {!m.locked && (m.up ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />)}
                    {m.change}
                    <span className="text-white/30 font-normal ml-1">{m.sub}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Portfolio table — always visible */}
              <div className="lg:col-span-2 bg-surface-1 border border-border rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                  <h2 className="font-display font-bold text-sm text-white">Top Holdings</h2>
                  <button className="text-xs text-primary hover:text-primary-hover flex items-center gap-1 transition-colors">
                    View all <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
                <div>
                  <div className="grid grid-cols-5 px-5 py-2.5 text-[0.62rem] tracking-[0.1em] uppercase text-white/30 font-semibold border-b border-border">
                    <span className="col-span-2">Asset</span>
                    <span className="text-right">Value</span>
                    <span className="text-right">Weight</span>
                    <span className="text-right">1D %</span>
                  </div>
                  {PORTFOLIO.slice(0, isPaid ? 6 : 3).map((row, i) => (
                    <motion.div
                      key={row.name}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="grid grid-cols-5 px-5 py-3 text-sm border-b border-border last:border-0 hover:bg-surface-2 transition-colors cursor-default"
                    >
                      <div className="col-span-2">
                        <div className="font-semibold text-white">{row.name}</div>
                        <div className="text-[0.68rem] text-white/30">{row.sector}</div>
                      </div>
                      <div className="text-right text-white/80 self-center">{row.value}</div>
                      <div className="text-right text-white/50 self-center">{row.weight}</div>
                      <div className={`text-right font-semibold self-center ${row.up ? "text-[#1fcfa0]" : "text-[#f75a5a]"}`}>{row.day}</div>
                    </motion.div>
                  ))}
                  {!isPaid && (
                    <div className="px-5 py-3 text-center text-xs text-white/30 border-t border-border flex items-center justify-center gap-2">
                      <Lock className="w-3 h-3" />
                      {PORTFOLIO.length - 3} more holdings — upgrade to view all
                    </div>
                  )}
                </div>
              </div>

              {/* Alerts */}
              <div className="bg-surface-1 border border-border rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                  <h2 className="font-display font-bold text-sm text-white">Activity & Alerts</h2>
                  <span className="text-xs bg-red-500/15 text-red-400 border border-red-500/20 rounded-full px-2 py-0.5 font-semibold">1 new</span>
                </div>
                <div className="p-4 space-y-3">
                  {ALERTS.slice(0, isPaid ? 4 : 2).map((alert, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5 shrink-0">
                        {alert.type === "ok" && <CheckCircle2 className="w-4 h-4 text-[#1fcfa0]" />}
                        {alert.type === "warn" && <AlertTriangle className="w-4 h-4 text-yellow-400" />}
                        {alert.type === "risk" && <ShieldAlert className="w-4 h-4 text-red-400" />}
                      </div>
                      <div>
                        <p className="text-xs text-white/70 leading-relaxed">{alert.msg}</p>
                        <p className="text-[10px] text-white/30 mt-0.5">{alert.time}</p>
                      </div>
                    </motion.div>
                  ))}
                  {!isPaid && (
                    <div className="flex items-center gap-2 text-xs text-white/20 pt-1">
                      <Lock className="w-3 h-3" /> More alerts on paid plans
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Paid-only sections */}
            {isPaid ? (
              <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-surface-1 border border-border rounded-xl p-5">
                  <h3 className="font-display font-bold text-sm text-white mb-3">Risk Monitor</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Portfolio VaR (95%)", val: "$284,000", bar: 58, color: "bg-yellow-400" },
                      { label: "Tech Concentration", val: "22.6%", bar: 73, color: "bg-red-400" },
                      { label: "Beta vs S&P 500", val: "1.14", bar: 57, color: "bg-primary" },
                      { label: "Liquidity Coverage", val: "94.2%", bar: 94, color: "bg-[#1fcfa0]" },
                    ].map(({ label, val, bar, color }) => (
                      <div key={label}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-white/50">{label}</span>
                          <span className="text-white font-semibold">{val}</span>
                        </div>
                        <div className="h-1.5 bg-surface-3 rounded-full overflow-hidden">
                          <div className={`h-full ${color} rounded-full`} style={{ width: `${bar}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-surface-1 border border-border rounded-xl p-5">
                  <h3 className="font-display font-bold text-sm text-white mb-3">AI Insights</h3>
                  <div className="space-y-2.5">
                    {[
                      { label: "Earnings momentum", signal: "Bullish", color: "text-[#1fcfa0]" },
                      { label: "Macro regime", signal: "Stagflation risk", color: "text-yellow-400" },
                      { label: "Sector rotation", signal: "Tech → Energy", color: "text-primary" },
                      { label: "Vol regime", signal: "Elevated VIX", color: "text-red-400" },
                    ].map(({ label, signal, color }) => (
                      <div key={label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                        <span className="text-xs text-white/50">{label}</span>
                        <span className={`text-xs font-semibold ${color}`}>{signal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <LockedSection title="Risk Monitor" />
                <LockedSection title="AI Insights" />
              </div>
            )}

            {/* Plan / upgrade banner */}
            <div className={`mt-5 rounded-xl px-5 py-4 flex items-center justify-between border ${
              isAdmin ? "bg-yellow-400/5 border-yellow-400/20" :
              isPaid ? "bg-[#1fcfa0]/5 border-[#1fcfa0]/20" :
              "bg-primary/10 border-primary/20"
            }`}>
              <div className="flex items-center gap-3">
                {isAdmin && <ShieldCheck className="w-5 h-5 text-yellow-400" />}
                {isPaid && !isAdmin && <Crown className="w-5 h-5 text-[#1fcfa0]" />}
                {!isPaid && <Crown className="w-5 h-5 text-primary" />}
                <div>
                  <div className={`text-xs font-semibold uppercase tracking-wide mb-0.5 ${isAdmin ? "text-yellow-400" : isPaid ? "text-[#1fcfa0]" : "text-primary"}`}>
                    {isAdmin ? "Admin Account" : isPaid ? `${user?.plan?.charAt(0).toUpperCase()}${user?.plan?.slice(1)} Plan — Full Access` : "Free Plan"}
                  </div>
                  <p className="text-sm text-white/60">
                    {isAdmin
                      ? "You have full platform and admin access. Manage users in the Admin Panel."
                      : isPaid
                        ? "All features unlocked — risk intelligence, AI insights, unlimited portfolios."
                        : "Upgrade to unlock unlimited portfolios, risk monitoring, AI insights, and client reporting."}
                  </p>
                </div>
              </div>
              {isAdmin && (
                <Link href="/admin" className="shrink-0 font-display font-bold text-xs tracking-wide px-4 py-2 bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 rounded-lg hover:bg-yellow-400/30 transition-colors">
                  Admin Panel →
                </Link>
              )}
              {!isPaid && (
                <Link href="/pricing" className="shrink-0 font-display font-bold text-xs tracking-wide px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors">
                  Upgrade →
                </Link>
              )}
            </div>
          </motion.div>
        </main>
      </div>

      <style dangerouslySetInnerHTML={{__html: `.clip-diamond { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }`}} />
    </div>
  );
}
