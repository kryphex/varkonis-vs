import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export function DashboardMock() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, rotateX: 2, rotateY: -5 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="bg-surface-2 border border-border-hover rounded-xl overflow-hidden shadow-[0_40px_90px_rgba(0,0,0,0.8)] relative z-10 w-full max-w-2xl transform-gpu"
    >
      {/* Fake Browser Bar */}
      <div className="bg-surface-3 border-b border-border flex items-center px-4 py-3 gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="ml-4 text-[0.65rem] text-white/30 bg-background px-3 py-1 rounded border border-border font-mono">
          app.varkonis.io/dashboard
        </div>
      </div>

      {/* Dashboard Body */}
      <div className="p-5 flex flex-col gap-4">
        {/* Metric Cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-surface-3 border border-border rounded-lg p-4 hover:border-white/20 transition-colors">
            <div className="text-[0.6rem] tracking-widest uppercase text-white/40 mb-2">Total AUM</div>
            <div className="font-display text-xl font-bold mb-1">$24.6M</div>
            <div className="text-xs text-success flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3" /> 4.8%
            </div>
          </div>
          <div className="bg-surface-3 border border-border rounded-lg p-4 hover:border-white/20 transition-colors">
            <div className="text-[0.6rem] tracking-widest uppercase text-white/40 mb-2">YTD Return</div>
            <div className="font-display text-xl font-bold mb-1">+18.3%</div>
            <div className="text-xs text-white/50 flex items-center gap-1">
              vs 11.2% bmk
            </div>
          </div>
          <div className="bg-surface-3 border border-border rounded-lg p-4 hover:border-white/20 transition-colors">
            <div className="text-[0.6rem] tracking-widest uppercase text-white/40 mb-2">Sharpe Ratio</div>
            <div className="font-display text-xl font-bold mb-1">0.94</div>
            <div className="text-xs text-success flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3" /> 0.81
            </div>
          </div>
        </div>

        {/* Chart Area */}
        <div className="bg-surface-3 border border-border rounded-lg p-4 relative h-[180px] overflow-hidden group">
          <div className="text-[0.6rem] tracking-widest text-white/40 mb-4 absolute top-4 left-4 z-10">PERFORMANCE</div>
          
          <svg className="absolute inset-0 w-full h-full pt-10 px-0" preserveAspectRatio="none" viewBox="0 0 100 50">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(229 90% 64%)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="hsl(229 90% 64%)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              d="M0,50 L0,30 C10,35 20,20 30,25 C40,30 50,10 60,15 C70,20 80,5 100,2 L100,50 Z"
              fill="url(#chartGradient)"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              d="M0,30 C10,35 20,20 30,25 C40,30 50,10 60,15 C70,20 80,5 100,2"
              fill="none"
              stroke="hsl(229 90% 64%)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        {/* Mini Table */}
        <div className="bg-surface-3 border border-border rounded-lg overflow-hidden">
          <div className="grid grid-cols-3 p-3 text-xs border-b border-border text-white/40 uppercase tracking-wider font-semibold">
            <div>Asset</div>
            <div className="text-right">Exposure</div>
            <div className="text-right">Day %</div>
          </div>
          <div className="grid grid-cols-3 p-3 text-sm border-b border-border/50 hover:bg-white/5 transition-colors">
            <div className="font-bold">AAPL</div>
            <div className="text-right">$2.1M</div>
            <div className="text-right text-success">+3.2%</div>
          </div>
          <div className="grid grid-cols-3 p-3 text-sm border-b border-border/50 hover:bg-white/5 transition-colors">
            <div className="font-bold">MSFT</div>
            <div className="text-right">$1.8M</div>
            <div className="text-right text-success">+1.9%</div>
          </div>
          <div className="grid grid-cols-3 p-3 text-sm hover:bg-white/5 transition-colors">
            <div className="font-bold">BRK.B</div>
            <div className="text-right">$1.2M</div>
            <div className="text-right text-destructive">-0.4%</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
