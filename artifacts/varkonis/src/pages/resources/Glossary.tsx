import { useState, useMemo } from "react";
import { Link } from "wouter";
import { Search, ArrowRight, Zap, Filter, HelpCircle } from "lucide-react";

const GLOSSARY_TERMS = [
  { term: "AUM", definition: "Assets Under Management. The total market value of the investments that a person or entity handles on behalf of investors." },
  { term: "Alpha", definition: "A measure of the active return on an investment, the performance of that investment relative to a suitable market index." },
  { term: "Beta", definition: "A measure of the volatility, or systematic risk, of a security or a portfolio in comparison to the market as a whole." },
  { term: "CVaR", definition: "Conditional Value at Risk. Also known as Expected Shortfall, it is a risk assessment measure that quantifies the amount of tail risk an investment portfolio has." },
  { term: "DPI", definition: "Distributed to Paid-In. The ratio of cumulative distributions to the cumulative paid-in capital, used in private equity to measure realized returns." },
  { term: "ESG", definition: "Environmental, Social, and Governance. A set of standards for a company's operations that socially conscious investors use to screen potential investments." },
  { term: "Factor Exposure", definition: "The degree to which a portfolio's returns are sensitive to a specific risk factor, such as value, momentum, or size." },
  { term: "Greeks", definition: "A set of risk measures named after Greek letters that indicate the sensitivity of the price of an option to various factors." },
  { term: "Hedge Ratio", definition: "The proportion of an underlying asset or portfolio that is hedged by a derivative, used to mitigate risk." },
  { term: "IRR", definition: "Internal Rate of Return. The annual rate of growth that an investment is expected to generate." },
  { term: "J-Curve", definition: "A trend-line that shows a sharp drop followed by a dramatic rise. In PE, it represents the initial negative returns before capital starts to be realized." },
  { term: "Kurtosis", definition: "A statistical measure used to describe the distribution of observed data around the mean, specifically focusing on the 'tails'." },
  { term: "Leverage", definition: "The use of borrowed capital (debt) to increase the potential return of an investment." },
  { term: "Momentum", definition: "The tendency of investments to continue an upward or downward trend in price." },
  { term: "Net Asset Value (NAV)", definition: "The value of an entity's assets minus the value of its liabilities." },
  { term: "Option Delta", definition: "The ratio comparing the change in the price of an asset to the corresponding change in the price of its derivative." },
  { term: "PME", definition: "Public Market Equivalent. A set of performance measures that evaluate private equity returns against public market indices." },
  { term: "Quantitative Easing", definition: "A form of monetary policy in which a central bank purchases large-scale financial assets from the open market." },
  { term: "Risk-Adjusted Return", definition: "A concept that refines an investment's return by measuring how much risk is involved in producing that return." },
  { term: "Sharpe Ratio", definition: "A measure used to understand the return of an investment compared to its risk." },
  { term: "TVPI", definition: "Total Value to Paid-In. The ratio of the current value of remaining investments plus cumulative distributions to the total capital contributed." },
  { term: "Uptick", definition: "A transaction in a security that is executed at a higher price than the preceding transaction." },
  { term: "VaR", definition: "Value at Risk. A statistical technique used to measure and quantify the level of financial risk within a firm or investment portfolio." },
  { term: "Weighting", definition: "The percentage of an investment portfolio that is occupied by a particular security or sector." },
  { term: "Yield Curve", definition: "A line that plots the interest rates of bonds having equal credit quality but differing maturity dates." },
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Glossary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter(t => {
      const matchesSearch = t.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           t.definition.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLetter = activeLetter ? t.term.toUpperCase().startsWith(activeLetter) : true;
      return matchesSearch && matchesLetter;
    });
  }, [searchQuery, activeLetter]);

  return (
    <div className="min-h-screen bg-background text-white font-manrope">
      {/* Hero Section */}
      <section className="pt-[140px] pb-16 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-xs tracking-[0.18em] uppercase text-primary-hover flex items-center gap-3 mb-4 font-bold">
          <span className="w-4 h-px bg-primary"></span>
          Financial Glossary
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[0.95] tracking-tight mb-6">
          The <em className="not-italic text-gradient">VARKONIS lexicon.</em>
        </h1>
        <p className="text-white/60 text-base leading-relaxed max-w-2xl">
          Institutional finance can be complex. We've defined the key terms and methodologies used across our platform to ensure absolute clarity.
        </p>
      </section>

      {/* Filter & Search Bar */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto mb-12">
        <div className="bg-surface-1 border border-border p-4 rounded-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="relative group flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search terms or definitions..." 
              className="w-full bg-surface-2 border border-border rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-1">
            <button 
              onClick={() => setActiveLetter(null)}
              className={`w-8 h-8 rounded text-[10px] font-bold transition-colors ${!activeLetter ? 'bg-primary text-white' : 'bg-surface-2 text-white/40 hover:text-white'}`}
            >
              ALL
            </button>
            {ALPHABET.map(letter => (
              <button 
                key={letter}
                onClick={() => setActiveLetter(letter)}
                className={`w-8 h-8 rounded text-[10px] font-bold transition-colors ${activeLetter === letter ? 'bg-primary text-white' : 'bg-surface-2 text-white/40 hover:text-white'}`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Grid */}
      <section className="pb-32 px-6 sm:px-12 max-w-7xl mx-auto">
        {filteredTerms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTerms.map((t, i) => (
              <div key={i} className="bg-surface-1 border border-border p-8 rounded-xl hover:bg-surface-2 transition-all group">
                <div className="text-primary font-display font-extrabold text-2xl mb-4 group-hover:scale-105 transition-transform origin-left">{t.term}</div>
                <p className="text-white/50 text-sm leading-relaxed">{t.definition}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-surface-1 border border-border rounded-xl">
            <HelpCircle className="w-12 h-12 text-white/20 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">No terms found</h3>
            <p className="text-white/40 max-w-xs mx-auto">Try adjusting your search or filtering by a different letter.</p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveLetter(null); }}
              className="mt-6 text-primary font-bold text-sm hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-surface-1 border-t border-border px-6 sm:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="font-display font-extrabold text-3xl mb-6">Need more detailed documentation?</h2>
          <p className="text-white/60 mb-10">Check out our platform docs for a deep-dive into our calculation methodologies and data sources.</p>
          <Link href="/docs" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-3 rounded-lg transition-colors">
            View Platform Docs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
