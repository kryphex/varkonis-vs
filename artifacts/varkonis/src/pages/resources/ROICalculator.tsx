import { useState, useMemo } from "react";
import { Link } from "wouter";
import { 
  Calculator, ArrowRight, Zap, TrendingUp, 
  Users, Clock, BarChart3, Database, Shield 
} from "lucide-react";

export default function ROICalculator() {
  const [aum, setAum] = useState(500); // In Millions
  const [teamSize, setTeamSize] = useState(10);
  const [toolCost, setToolCost] = useState(50000); // Annual cost of current tools

  const savings = useMemo(() => {
    // Simulated calculation
    const efficiencyGain = (teamSize * 150000) * 0.35; // 35% productivity boost
    const reducedErrors = aum * 1000000 * 0.0005; // 5bps risk reduction
    const netSavings = efficiencyGain + reducedErrors - 75000; // Subtract VARKONIS cost estimate
    return {
      efficiency: efficiencyGain,
      risk: reducedErrors,
      total: netSavings,
      time: teamSize * 40 * 12, // Hours saved per year
    };
  }, [aum, teamSize]);

  return (
    <div className="min-h-screen bg-background text-white font-manrope">
      {/* Hero Section */}
      <section className="pt-[140px] pb-16 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-xs tracking-[0.18em] uppercase text-primary-hover flex items-center gap-3 mb-4 font-bold">
          <span className="w-4 h-px bg-primary"></span>
          Value Calculator
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[0.95] tracking-tight mb-6">
          Quantify the <em className="not-italic text-gradient">VARKONIS Advantage.</em>
        </h1>
        <p className="text-white/60 text-base leading-relaxed max-w-2xl">
          Use our interactive ROI tool to estimate potential cost savings, risk reduction, and operational efficiency gains for your firm.
        </p>
      </section>

      <section className="pb-32 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Inputs */}
          <div className="lg:col-span-5 space-y-10 bg-surface-1 border border-border p-8 rounded-xl h-fit">
            <div>
              <div className="flex justify-between items-center mb-6">
                <label className="text-sm font-bold uppercase tracking-wider text-white/70">AUM ($ Millions)</label>
                <span className="text-primary font-display font-extrabold text-2xl">${aum}M</span>
              </div>
              <input 
                type="range" min="100" max="10000" step="100" 
                value={aum} onChange={(e) => setAum(Number(e.target.value))}
                className="w-full h-1.5 bg-surface-2 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] font-bold text-white/20 mt-3 uppercase tracking-widest">
                <span>$100M</span>
                <span>$10B+</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-6">
                <label className="text-sm font-bold uppercase tracking-wider text-white/70">Team Size</label>
                <span className="text-primary font-display font-extrabold text-2xl">{teamSize}</span>
              </div>
              <input 
                type="range" min="2" max="100" step="1" 
                value={teamSize} onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-1.5 bg-surface-2 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] font-bold text-white/20 mt-3 uppercase tracking-widest">
                <span>2</span>
                <span>100+</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-6">
                <label className="text-sm font-bold uppercase tracking-wider text-white/70">Current Tool Spend ($)</label>
                <span className="text-primary font-display font-extrabold text-2xl">${toolCost.toLocaleString()}</span>
              </div>
              <input 
                type="range" min="5000" max="500000" step="5000" 
                value={toolCost} onChange={(e) => setToolCost(Number(e.target.value))}
                className="w-full h-1.5 bg-surface-2 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] font-bold text-white/20 mt-3 uppercase tracking-widest">
                <span>$5K</span>
                <span>$500K+</span>
              </div>
            </div>

            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-xs text-white/40 leading-relaxed italic">
                *Estimates are based on average efficiency gains reported by VARKONIS clients in 2023. Actual results may vary based on firm structure.
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-8 lg:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150"></div>
              
              <div className="relative z-10">
                <div className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">Estimated Annual Value</div>
                <div className="font-display font-extrabold text-5xl sm:text-7xl mb-6">
                  ${(savings.total / 1000).toFixed(0)}K<span className="text-white/20">+</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 pt-12 border-t border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-display font-bold">{savings.time.toLocaleString()}</div>
                      <div className="text-xs text-white/40 uppercase font-bold tracking-wider">Hours Saved / Year</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-display font-bold">${(savings.risk / 1000).toFixed(0)}K</div>
                      <div className="text-xs text-white/40 uppercase font-bold tracking-wider">Risk Loss Reduction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Database />, title: "Data Unification", desc: "Automate 95% of data ingestion from custodians and brokers." },
                { icon: <Shield />, title: "Risk Compliance", desc: "Automated pre-trade checks and audit-ready reporting." },
                { icon: <Users />, title: "Team Alignment", desc: "Unified dashboard reduces internal reporting friction." },
                { icon: <BarChart3 />, title: "Performance Alpha", desc: "AI insights surfacing trends 48h faster than manual analysis." },
              ].map((item, i) => (
                <div key={i} className="bg-surface-1 border border-border p-6 rounded-xl hover:bg-surface-2 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-surface-2 flex items-center justify-center mb-4 text-primary">{item.icon}</div>
                  <h3 className="font-bold mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-surface-1 border-t border-border px-6 sm:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="font-display font-extrabold text-3xl mb-6">Ready for a custom value assessment?</h2>
          <p className="text-white/60 mb-10">Our solutions team can provide a detailed ROI analysis based on your specific portfolio structure and goals.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-3 rounded-lg transition-colors">
              Book Solutions Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/platform" className="inline-flex items-center gap-2 bg-surface-2 border border-border text-white hover:text-white/80 font-bold px-8 py-3 rounded-lg transition-colors">
              Explore Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
