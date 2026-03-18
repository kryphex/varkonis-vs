import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import {
  ShieldCheck, Users, Crown, LogOut, BarChart3,
  Search, ChevronDown, Check, X, MoreVertical,
  TrendingUp, Activity, Settings, UserCog,
  ArrowUpRight, ArrowDownRight
} from "lucide-react";
import { useAuth, type User, type UserRole } from "@/context/AuthContext";

const PLAN_LABELS: Record<string, string> = { starter: "Starter", growth: "Growth", scale: "Scale" };
const ROLE_COLORS: Record<UserRole, string> = {
  admin: "bg-yellow-400/15 text-yellow-400 border-yellow-400/20",
  paid: "bg-primary/15 text-primary border-primary/20",
  unpaid: "bg-white/5 text-white/40 border-white/10",
};
const PLAN_COLORS: Record<string, string> = {
  starter: "bg-white/5 text-white/40",
  growth: "bg-primary/10 text-primary",
  scale: "bg-yellow-400/10 text-yellow-400",
};

function RoleDropdown({ user, onUpdate }: { user: User; onUpdate: (id: string, role: UserRole) => void }) {
  const [open, setOpen] = useState(false);
  const roles: UserRole[] = ["unpaid", "paid", "admin"];
  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${ROLE_COLORS[user.role]}`}
      >
        {user.role === "admin" && <ShieldCheck className="w-2.5 h-2.5" />}
        {user.role === "paid" && <Crown className="w-2.5 h-2.5" />}
        {user.role}
        <ChevronDown className="w-2.5 h-2.5" />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 z-50 bg-surface-2 border border-border rounded-lg shadow-xl overflow-hidden min-w-[120px]">
          {roles.map((r) => (
            <button
              key={r}
              onClick={() => { onUpdate(user.id, r); setOpen(false); }}
              className={`w-full flex items-center justify-between gap-2 px-3 py-2 text-xs transition-colors hover:bg-surface-3 ${r === user.role ? "text-white" : "text-white/50"}`}
            >
              <span className="capitalize">{r}</span>
              {r === user.role && <Check className="w-3 h-3 text-primary" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function PlanDropdown({ user, onUpdate }: { user: User; onUpdate: (id: string, plan: User["plan"]) => void }) {
  const [open, setOpen] = useState(false);
  const plans: User["plan"][] = ["starter", "growth", "scale"];
  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded ${PLAN_COLORS[user.plan]}`}
      >
        {PLAN_LABELS[user.plan]}
        <ChevronDown className="w-2.5 h-2.5" />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 z-50 bg-surface-2 border border-border rounded-lg shadow-xl overflow-hidden min-w-[100px]">
          {plans.map((p) => (
            <button
              key={p}
              onClick={() => { onUpdate(user.id, p); setOpen(false); }}
              className={`w-full flex items-center justify-between gap-2 px-3 py-2 text-xs transition-colors hover:bg-surface-3 ${p === user.plan ? "text-white" : "text-white/50"}`}
            >
              <span className="capitalize">{p}</span>
              {p === user.plan && <Check className="w-3 h-3 text-primary" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AdminPanel() {
  const { user, logout, getAllUsers, updateUserRole, updateUserPlan } = useAuth();
  const [, setLocation] = useLocation();
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState<UserRole | "all">("all");
  const [allUsers, setAllUsers] = useState<User[]>(() => getAllUsers());

  function refresh() {
    setAllUsers(getAllUsers());
  }

  function handleRoleUpdate(id: string, role: UserRole) {
    updateUserRole(id, role);
    refresh();
  }

  function handlePlanUpdate(id: string, plan: User["plan"]) {
    updateUserPlan(id, plan);
    refresh();
  }

  function handleLogout() {
    logout();
    setLocation("/");
  }

  const filtered = allUsers.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      (u.firm ?? "").toLowerCase().includes(search.toLowerCase());
    const matchesRole = filterRole === "all" || u.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const stats = {
    total: allUsers.length,
    unpaid: allUsers.filter((u) => u.role === "unpaid").length,
    paid: allUsers.filter((u) => u.role === "paid").length,
    admin: allUsers.filter((u) => u.role === "admin").length,
  };

  const navItems = [
    { icon: BarChart3, label: "Portfolio", href: "/dashboard" },
    { icon: TrendingUp, label: "Performance", href: "/dashboard" },
    { icon: ShieldCheck, label: "Admin Panel", href: "/admin", active: true },
    { icon: Settings, label: "Settings", href: "/dashboard" },
  ];

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
          {navItems.map(({ icon: Icon, label, href, active }) => (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                active
                  ? "bg-yellow-400/10 text-yellow-400 font-semibold border border-yellow-400/20"
                  : "text-white/50 hover:text-white hover:bg-surface-2"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-border">
          <div className="px-3 py-2 mb-1">
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-yellow-400/15 text-yellow-400 border border-yellow-400/20">
              <ShieldCheck className="w-2.5 h-2.5" /> Admin
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/50 hover:text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="h-[60px] border-b border-border flex items-center justify-between px-6 bg-surface-1/50 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-yellow-400" />
            <span className="font-display font-bold text-sm text-white">Admin Panel</span>
            <span className="text-xs text-white/30 ml-2">— Platform Administration</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center text-xs font-bold text-yellow-400">
              {user?.name?.[0]?.toUpperCase() ?? "A"}
            </div>
            <div className="hidden sm:block text-xs font-semibold text-white">{user?.name}</div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>

            {/* Page header */}
            <div className="mb-6">
              <h1 className="font-display text-2xl font-extrabold text-white mb-1">User Management</h1>
              <p className="text-white/40 text-sm">Manage roles and subscriptions for all registered accounts.</p>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { label: "Total Users", value: stats.total, icon: Users, color: "text-primary", bg: "bg-primary/10" },
                { label: "Free Accounts", value: stats.unpaid, icon: UserCog, color: "text-white/50", bg: "bg-white/5" },
                { label: "Paid Accounts", value: stats.paid, icon: Crown, color: "text-primary", bg: "bg-primary/10" },
                { label: "Admins", value: stats.admin, icon: ShieldCheck, color: "text-yellow-400", bg: "bg-yellow-400/10" },
              ].map(({ label, value, icon: Icon, color, bg }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="bg-surface-1 border border-border rounded-xl p-4 flex items-center gap-4"
                >
                  <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-4.5 h-4.5 ${color}`} />
                  </div>
                  <div>
                    <div className={`font-display text-2xl font-extrabold ${color}`}>{value}</div>
                    <div className="text-[0.65rem] text-white/30 uppercase tracking-wider font-semibold">{label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Filters */}
            <div className="bg-surface-1 border border-border rounded-xl overflow-hidden">
              <div className="flex flex-wrap items-center gap-3 px-5 py-3.5 border-b border-border">
                <div className="flex items-center gap-2 bg-surface-2 border border-border rounded-lg px-3 py-1.5 text-sm text-white/40 flex-1 min-w-[200px]">
                  <Search className="w-3.5 h-3.5 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search by name, email, or firm..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-transparent w-full text-white focus:outline-none text-sm placeholder:text-white/30"
                  />
                  {search && (
                    <button onClick={() => setSearch("")} className="hover:text-white transition-colors">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
                <div className="flex gap-1.5">
                  {(["all", "unpaid", "paid", "admin"] as const).map((r) => (
                    <button
                      key={r}
                      onClick={() => setFilterRole(r)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors capitalize ${
                        filterRole === r
                          ? r === "admin" ? "bg-yellow-400/15 text-yellow-400 border border-yellow-400/20"
                          : r === "paid" ? "bg-primary/15 text-primary border border-primary/20"
                          : r === "unpaid" ? "bg-white/10 text-white border border-white/15"
                          : "bg-surface-2 text-white border border-border"
                          : "text-white/40 hover:text-white hover:bg-surface-2 border border-transparent"
                      }`}
                    >
                      {r === "all" ? `All (${stats.total})` : r === "unpaid" ? `Free (${stats.unpaid})` : r === "paid" ? `Paid (${stats.paid})` : `Admin (${stats.admin})`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Users table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left px-5 py-3 text-[0.62rem] tracking-[0.1em] uppercase text-white/30 font-semibold">User</th>
                      <th className="text-left px-4 py-3 text-[0.62rem] tracking-[0.1em] uppercase text-white/30 font-semibold">Firm</th>
                      <th className="text-left px-4 py-3 text-[0.62rem] tracking-[0.1em] uppercase text-white/30 font-semibold">Role</th>
                      <th className="text-left px-4 py-3 text-[0.62rem] tracking-[0.1em] uppercase text-white/30 font-semibold">Plan</th>
                      <th className="text-left px-4 py-3 text-[0.62rem] tracking-[0.1em] uppercase text-white/30 font-semibold">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.length === 0 && (
                      <tr>
                        <td colSpan={5} className="text-center py-12 text-white/30 text-sm">
                          No users match your search.
                        </td>
                      </tr>
                    )}
                    {filtered.map((u, i) => (
                      <motion.tr
                        key={u.id}
                        initial={{ opacity: 0, x: -4 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.03 * i }}
                        className="border-b border-border last:border-0 hover:bg-surface-2/50 transition-colors"
                      >
                        <td className="px-5 py-3.5">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                              u.role === "admin" ? "bg-yellow-400/20 text-yellow-400" :
                              u.role === "paid" ? "bg-primary/20 text-primary" :
                              "bg-surface-3 text-white/40"
                            }`}>
                              {u.name[0]?.toUpperCase()}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                                {u.name}
                                {u.id === user?.id && (
                                  <span className="text-[10px] text-white/30 font-normal">(you)</span>
                                )}
                              </div>
                              <div className="text-xs text-white/40">{u.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3.5 text-sm text-white/50">{u.firm ?? "—"}</td>
                        <td className="px-4 py-3.5">
                          <RoleDropdown user={u} onUpdate={handleRoleUpdate} />
                        </td>
                        <td className="px-4 py-3.5">
                          <PlanDropdown user={u} onUpdate={handlePlanUpdate} />
                        </td>
                        <td className="px-4 py-3.5 text-xs text-white/40">
                          {new Date(u.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="px-5 py-3 border-t border-border flex items-center justify-between text-xs text-white/30">
                <span>Showing {filtered.length} of {allUsers.length} users</span>
                <span>Changes take effect immediately</span>
              </div>
            </div>

            {/* Quick reference */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                {
                  role: "Free (Unpaid)",
                  color: "border-white/10",
                  badge: "bg-white/5 text-white/40",
                  items: ["Top 3 holdings only", "2 activity alerts", "No Risk Monitor", "No AI Insights", "No Reports"],
                },
                {
                  role: "Paid",
                  color: "border-primary/20",
                  badge: "bg-primary/10 text-primary",
                  items: ["All 6 holdings", "Full activity feed", "Risk Monitor", "AI Insights", "Client Reports"],
                },
                {
                  role: "Admin",
                  color: "border-yellow-400/20",
                  badge: "bg-yellow-400/10 text-yellow-400",
                  items: ["Everything in Paid", "Admin Panel access", "User role management", "Plan upgrades/downgrades", "Platform-wide view"],
                },
              ].map(({ role, color, badge, items }) => (
                <div key={role} className={`bg-surface-1 border rounded-xl p-4 ${color}`}>
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-3 ${badge}`}>{role}</span>
                  <ul className="space-y-1.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-white/50">
                        <span className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </main>
      </div>

      <style dangerouslySetInnerHTML={{__html: `.clip-diamond { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }`}} />
    </div>
  );
}
