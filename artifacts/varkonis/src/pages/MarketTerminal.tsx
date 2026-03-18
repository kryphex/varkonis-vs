import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, TrendingDown, Activity, Zap, Search, Bell, 
  ArrowUpRight, ArrowDownRight, BarChart3, Globe, Cpu,
  Calendar, Layers, Filter, Maximize2, ExternalLink
} from "lucide-react";
import { useMarketData, Quote } from "@/hooks/useMarketData";

export default function MarketTerminal() {
  const { quotes, news, isLoading, lastUpdated } = useMarketData();
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredQuotes = useMemo(() => {
    return quotes.filter(q => 
      q.symbol.toLowerCase().includes(searchQuery.toLowerCase()) || 
      q.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [quotes, searchQuery]);

  const selectedQuote = useMemo(() => {
    return quotes.find(q => q.symbol === (selectedSymbol || quotes[0]?.symbol));
  }, [quotes, selectedSymbol]);

  return (
    <div className="min-h-screen bg-[#09090f] text-white font-manrope pt-[80px]">
      {/* Ticker Bar */}
      <div className="bg-surface-1 border-b border-border h-10 flex items-center overflow-hidden whitespace-nowrap relative">
        <div className="flex animate-marquee hover:pause whitespace-nowrap">
          {[...quotes, ...quotes].map((q, i) => (
            <div key={`${q.symbol}-${i}`} className="inline-flex items-center gap-2 px-6 border-r border-border/30 h-full">
              <span className="font-display font-bold text-xs">{q.symbol}</span>
              <span className="text-xs text-white/70">{q.price.toFixed(2)}</span>
              <span className={`text-[10px] font-bold ${q.change >= 0 ? 'text-[#1fcfa0]' : 'text-[#f75a5a]'}`}>
                {q.change >= 0 ? '+' : ''}{q.changePercent.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto p-4 lg:p-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-primary-hover text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-1">
              <span className="w-4 h-px bg-primary"></span>
              Institutional Terminal
            </div>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl">Market <span className="text-gradient">Intelligence</span></h1>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search symbols..." 
                className="bg-surface-2 border border-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary/50 w-[240px] transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-surface-2 border border-border rounded-lg text-[10px] text-white/40">
              <Activity className="w-3 h-3 text-[#1fcfa0]" />
              <span>Live · Updated {lastUpdated.toLocaleTimeString()}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Watchlist / Quotes Table */}
          <div className="lg:col-span-7 bg-surface-1 border border-border rounded-xl overflow-hidden flex flex-col min-h-[600px]">
            <div className="p-4 border-b border-border flex items-center justify-between bg-surface-1/50">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" />
                <span className="font-bold text-sm">Global Watchlist</span>
              </div>
              <div className="flex gap-2">
                <button className="p-1.5 hover:bg-surface-2 rounded text-white/40 hover:text-white transition-colors"><Filter className="w-3.5 h-3.5" /></button>
                <button className="p-1.5 hover:bg-surface-2 rounded text-white/40 hover:text-white transition-colors"><Maximize2 className="w-3.5 h-3.5" /></button>
              </div>
            </div>
            
            <div className="flex-1 overflow-auto">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 bg-surface-1 text-[10px] uppercase tracking-wider text-white/30 font-bold border-b border-border z-10">
                  <tr>
                    <th className="px-5 py-3">Symbol</th>
                    <th className="px-5 py-3 text-right">Price</th>
                    <th className="px-5 py-3 text-right">Change %</th>
                    <th className="px-5 py-3 text-right hidden sm:table-cell">Volume</th>
                    <th className="px-5 py-3 text-right hidden md:table-cell">52W Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {filteredQuotes.map((q) => (
                    <tr 
                      key={q.symbol} 
                      onClick={() => setSelectedSymbol(q.symbol)}
                      className={`group hover:bg-surface-2 cursor-pointer transition-colors ${selectedSymbol === q.symbol ? 'bg-primary/5' : ''}`}
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-1 h-8 rounded-full ${selectedSymbol === q.symbol ? 'bg-primary' : 'bg-transparent'}`}></div>
                          <div>
                            <div className="font-display font-bold text-sm text-white group-hover:text-primary transition-colors">{q.symbol}</div>
                            <div className="text-[10px] text-white/40 truncate max-w-[120px]">{q.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <div className="font-bold text-sm">{q.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <div className={`inline-flex items-center gap-1 font-bold text-sm ${q.change >= 0 ? 'text-[#1fcfa0]' : 'text-[#f75a5a]'}`}>
                          {q.change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                          {Math.abs(q.changePercent).toFixed(2)}%
                        </div>
                      </td>
                      <td className="px-5 py-4 text-right hidden sm:table-cell">
                        <div className="text-xs text-white/60">{(q.volume / 1000000).toFixed(1)}M</div>
                      </td>
                      <td className="px-5 py-4 text-right hidden md:table-cell w-32">
                        <div className="flex flex-col gap-1">
                          <div className="h-1 bg-surface-2 rounded-full relative overflow-hidden">
                            <div 
                              className="absolute h-full bg-primary/40 rounded-full"
                              style={{ 
                                left: `${((q.price - q.week52Low) / (q.week52High - q.week52Low)) * 100}%`,
                                width: '4px'
                              }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-[8px] text-white/20 uppercase font-bold">
                            <span>{q.week52Low.toFixed(0)}</span>
                            <span>{q.week52High.toFixed(0)}</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Chart + News */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Chart Section */}
            <div className="bg-surface-1 border border-border rounded-xl p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg">{selectedQuote?.symbol} / USD</h3>
                  <div className="text-xs text-white/40">{selectedQuote?.name}</div>
                </div>
                <div className="text-right">
                  <div className="font-display font-extrabold text-xl text-primary">{selectedQuote?.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
                  <div className={`text-xs font-bold ${selectedQuote && selectedQuote.change >= 0 ? 'text-[#1fcfa0]' : 'text-[#f75a5a]'}`}>
                    {selectedQuote && selectedQuote.change >= 0 ? '+' : ''}{selectedQuote?.change.toFixed(2)} ({selectedQuote?.changePercent.toFixed(2)}%)
                  </div>
                </div>
              </div>

              {/* Mock Sparkline */}
              <div className="h-[200px] w-full mt-2 relative group">
                <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4f6ef7" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#4f6ef7" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M0,150 C50,140 80,180 120,130 C160,80 200,100 240,60 C280,20 320,50 360,30 L400,40" 
                    stroke="#4f6ef7" strokeWidth="3" fill="none" strokeLinecap="round" 
                  />
                  <path 
                    d="M0,150 C50,140 80,180 120,130 C160,80 200,100 240,60 C280,20 320,50 360,30 L400,40 L400,200 L0,200 Z" 
                    fill="url(#chartGradient)" 
                  />
                  {/* Hover Point */}
                  <circle cx="240" cy="60" r="4" fill="#4f6ef7" className="animate-pulse" />
                </svg>
                <div className="absolute top-0 right-0 flex gap-1">
                  {['1D', '1W', '1M', '1Y', 'ALL'].map(t => (
                    <button key={t} className={`text-[9px] font-bold px-2 py-1 rounded transition-colors ${t === '1D' ? 'bg-primary text-white' : 'bg-surface-2 text-white/40 hover:text-white'}`}>{t}</button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-border pt-4 mt-2">
                {[
                  { label: "Market Cap", value: selectedQuote?.marketCap ? `$${(selectedQuote.marketCap / 1e12).toFixed(2)}T` : "N/A" },
                  { label: "Vol (24h)", value: selectedQuote ? `${(selectedQuote.volume / 1e6).toFixed(1)}M` : "N/A" },
                  { label: "Day Range", value: selectedQuote ? `${selectedQuote.low.toFixed(1)} - ${selectedQuote.high.toFixed(1)}` : "N/A" },
                ].map(stat => (
                  <div key={stat.label}>
                    <div className="text-[9px] uppercase tracking-wider text-white/30 font-bold mb-1">{stat.label}</div>
                    <div className="text-sm font-bold">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* News Feed */}
            <div className="bg-surface-1 border border-border rounded-xl flex-1 flex flex-col overflow-hidden min-h-[350px]">
              <div className="p-4 border-b border-border flex items-center gap-2 bg-surface-1/50">
                <Globe className="w-4 h-4 text-primary" />
                <span className="font-bold text-sm">Market Intelligence Feed</span>
              </div>
              <div className="flex-1 overflow-auto p-4 flex flex-col gap-4">
                {news.map((item) => (
                  <div key={item.id} className="group cursor-pointer">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[8px] px-1.5 py-0.5 rounded-sm font-bold uppercase tracking-wider ${
                        item.impact === 'high' ? 'bg-red-500/20 text-red-400' : 
                        item.impact === 'medium' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {item.impact}
                      </span>
                      <span className="text-[10px] text-white/40">{item.source} · {item.time}</span>
                    </div>
                    <h4 className="text-xs font-bold leading-relaxed group-hover:text-primary transition-colors">{item.headline}</h4>
                  </div>
                ))}
              </div>
              <button className="p-3 text-[10px] font-bold text-white/30 hover:text-white border-t border-border bg-surface-1/50 flex items-center justify-center gap-2 transition-colors">
                View All Intelligence <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Grid: Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-surface-1 border border-border rounded-xl p-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-display font-bold text-sm uppercase tracking-wide">Derivatives Pricer</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] text-white/40 uppercase font-bold block mb-1.5">Underlying Price</label>
                <input type="text" className="w-full bg-surface-2 border border-border rounded p-2 text-xs focus:outline-none focus:border-primary/50" defaultValue="189.30" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] text-white/40 uppercase font-bold block mb-1.5">Strike</label>
                  <input type="text" className="w-full bg-surface-2 border border-border rounded p-2 text-xs focus:outline-none" defaultValue="190.00" />
                </div>
                <div>
                  <label className="text-[10px] text-white/40 uppercase font-bold block mb-1.5">IV %</label>
                  <input type="text" className="w-full bg-surface-2 border border-border rounded p-2 text-xs focus:outline-none" defaultValue="24.5" />
                </div>
              </div>
              <button className="w-full py-2.5 bg-primary text-white rounded font-bold text-xs hover:bg-primary-hover transition-colors">Calculate Greeks</button>
            </div>
          </div>

          <div className="bg-surface-1 border border-border rounded-xl p-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                <Calendar className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-display font-bold text-sm uppercase tracking-wide">Economic Calendar</h3>
            </div>
            <div className="space-y-3">
              {[
                { time: "08:30", event: "Core CPI (MoM)", forecast: "0.3%", actual: "0.4%", impact: "high" },
                { time: "10:00", event: "Existing Home Sales", forecast: "4.1M", actual: "3.9M", impact: "medium" },
                { time: "14:00", event: "FOMC Meeting Minutes", forecast: "-", actual: "-", impact: "high" },
              ].map((e, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded hover:bg-surface-2 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-white/40">{e.time}</span>
                    <span className="text-xs font-bold">{e.event}</span>
                  </div>
                  <div className="text-right">
                    <span className={`text-[8px] font-bold ${e.impact === 'high' ? 'text-[#f75a5a]' : 'text-yellow-400'}`}>●</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-1 border border-border rounded-xl p-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-display font-bold text-sm uppercase tracking-wide">AI Momentum</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-surface-2 rounded-lg border border-border/50">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1fcfa0]"></span>
                  <span className="text-xs font-bold text-white/80">Bullish Sector Alert</span>
                </div>
                <span className="text-[10px] font-bold text-[#1fcfa0]">Technology</span>
              </div>
              <p className="text-[11px] text-white/50 leading-relaxed italic">
                "Multiple factors indicate strong institutional accumulation in Mega-cap Tech ahead of earnings season. 
                VARKONIS signal: OVERWEIGHT."
              </p>
              <div className="flex gap-2">
                <span className="text-[9px] px-2 py-1 bg-surface-2 rounded text-white/40">NVDA</span>
                <span className="text-[9px] px-2 py-1 bg-surface-2 rounded text-white/40">MSFT</span>
                <span className="text-[9px] px-2 py-1 bg-surface-2 rounded text-white/40">AAPL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
}
