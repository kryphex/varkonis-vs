import { useState, FormEvent } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Eye, EyeOff, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const PERKS = [
  "14-day free trial — no credit card required",
  "Full access to all platform features",
  "Live dashboards in under 24 hours",
  "Dedicated onboarding support",
];

export default function Signup() {
  const [, setLocation] = useLocation();
  const { signup } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [firm, setFirm] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!name || !email || !password) {
      setError("Please fill in all required fields.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    setLoading(true);
    const result = await signup(name, email, password, firm);
    setLoading(false);
    if (result.success) {
      setLocation("/dashboard");
    } else {
      setError(result.error || "Signup failed.");
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
          <h2 className="font-display text-2xl font-extrabold text-white mb-3">
            Everything your firm needs to move faster.
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-8">
            Join hundreds of funds, advisories, and family offices that trust VARKONIS for institutional-grade intelligence.
          </p>
          <div className="space-y-3">
            {PERKS.map((perk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3 text-sm text-white/70"
              >
                <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0" />
                {perk}
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
            <h1 className="font-display text-3xl font-extrabold text-white mb-2">Start your free trial</h1>
            <p className="text-white/50 text-sm">No credit card required. 14 days, full access.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
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

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wide">Full Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="James Harlow"
                  className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wide">Firm Name</label>
                <input
                  type="text"
                  value={firm}
                  onChange={(e) => setFirm(e.target.value)}
                  placeholder="Aldgate Capital"
                  className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wide">Work Email *</label>
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
              <label className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wide">Password *</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters"
                  className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 pr-12 text-sm text-white placeholder-white/25 outline-none focus:border-primary transition-colors"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {password && (
                <div className="mt-1.5 flex gap-1">
                  {[8, 12, 16].map((len) => (
                    <div
                      key={len}
                      className={`h-1 flex-1 rounded-full transition-colors ${
                        password.length >= len ? "bg-accent-green" : "bg-surface-3"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 font-display font-bold text-sm tracking-wide px-5 py-3.5 bg-primary text-white rounded-lg hover:bg-primary-hover hover:shadow-[0_8px_24px_rgba(79,110,247,0.4)] transition-all disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>Create Account <ArrowRight className="w-4 h-4" /></>
              )}
            </button>

            <p className="text-center text-white/30 text-xs">
              By signing up you agree to our{" "}
              <span className="text-white/50 hover:text-white cursor-pointer transition-colors">Terms of Service</span>
              {" "}and{" "}
              <span className="text-white/50 hover:text-white cursor-pointer transition-colors">Privacy Policy</span>.
            </p>
          </form>

          <p className="text-center text-white/40 text-sm mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:text-primary-hover transition-colors font-semibold">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `.clip-diamond { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); } .accent-green { color: #1fcfa0; }`}} />
    </div>
  );
}
