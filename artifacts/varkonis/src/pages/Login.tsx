import { useState, FormEvent } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Eye, EyeOff, ArrowRight, AlertCircle, ShieldCheck, Crown, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const DEMO_ACCOUNTS = [
  { label: "Admin", email: "admin@varkonis.com", password: "Admin@123", icon: ShieldCheck, color: "text-yellow-400 border-yellow-400/30 hover:bg-yellow-400/10", badge: "bg-yellow-400/15 text-yellow-400" },
  { label: "Paid", email: "demo@hedgefund.com", password: "Paid@123", icon: Crown, color: "text-primary border-primary/30 hover:bg-primary/10", badge: "bg-primary/15 text-primary" },
  { label: "Free", email: "sign up", password: "", icon: User, color: "text-white/40 border-white/10 hover:bg-white/5", badge: "bg-white/10 text-white/40" },
];

export default function Login() {
  const [, setLocation] = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    const result = await login(email, password);
    setLoading(false);
    if (result.success) {
      setLocation("/dashboard");
    } else {
      setError(result.error || "Login failed.");
    }
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left panel */}
      <div className="hidden lg:flex flex-col justify-between w-[45%] bg-surface-1 border-r border-border p-12">
        <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-wide">
          <div className="w-7 h-7 bg-primary flex items-center justify-center text-[0.65rem] font-black clip-diamond">V</div>
          VARKONIS
        </Link>

        <div>
          <div className="text-[0.62rem] tracking-[0.14em] uppercase text-white/30 font-semibold mb-4">Trusted by leading firms</div>
          <div className="space-y-4">
            {[
              { quote: "We cut reporting time by 70% in the first month.", name: "James Harlow", title: "CIO, Aldgate Capital" },
              { quote: "The risk dashboard alone justified the cost.", name: "Sarah Chen", title: "PM, Kestrel Fund" },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="bg-surface-2 border border-border rounded-xl p-5"
              >
                <p className="text-sm text-white/70 leading-relaxed mb-3">"{t.quote}"</p>
                <div className="text-xs font-semibold text-white/90">{t.name}</div>
                <div className="text-xs text-white/40">{t.title}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-xs text-white/30">© 2025 VARKONIS · SOC 2 Type II · ISO 27001</div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Link href="/" className="lg:hidden flex items-center gap-2.5 font-display text-lg font-extrabold tracking-wide mb-10">
            <div className="w-7 h-7 bg-primary flex items-center justify-center text-[0.65rem] font-black clip-diamond">V</div>
            VARKONIS
          </Link>

          <div className="mb-8">
            <h1 className="font-display text-3xl font-extrabold text-white mb-2">Welcome back</h1>
            <p className="text-white/50 text-sm">Sign in to your VARKONIS account.</p>
          </div>

          {/* Demo accounts quick-fill */}
          <div className="mb-6">
            <div className="text-[0.62rem] uppercase tracking-[0.14em] text-white/30 font-semibold mb-2">Try a demo account</div>
            <div className="grid grid-cols-3 gap-2">
              {DEMO_ACCOUNTS.map(({ label, email, password, icon: Icon, color, badge }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => {
                    if (email === "sign up") { setLocation("/signup"); return; }
                    setEmail(email);
                    setPassword(password);
                    setError("");
                  }}
                  className={`flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-lg border bg-transparent transition-all ${color}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full ${badge}`}>{label}</span>
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 bg-red-500/10 border border-red-500/25 text-red-400 text-sm px-4 py-3 rounded-lg"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                {error}
              </motion.div>
            )}

            <div>
              <label className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wide">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@yourfirm.com"
                className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-white/60 uppercase tracking-wide">Password</label>
                <button type="button" className="text-xs text-primary hover:text-primary-hover transition-colors">
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 pr-12 text-sm text-white placeholder-white/25 outline-none focus:border-primary transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 font-display font-bold text-sm tracking-wide px-5 py-3.5 bg-primary text-white rounded-lg hover:bg-primary-hover hover:shadow-[0_8px_24px_rgba(79,110,247,0.4)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>Sign In <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </form>

          <p className="text-center text-white/40 text-sm mt-6">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary hover:text-primary-hover transition-colors font-semibold">
              Create one free
            </Link>
          </p>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `.clip-diamond { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }`}} />
    </div>
  );
}
