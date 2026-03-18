import { Router, type IRouter } from "express";

const router: IRouter = Router();

const SYMBOLS = [
  "^GSPC",   // S&P 500
  "^IXIC",   // NASDAQ
  "^DJI",    // Dow Jones
  "^RUT",    // Russell 2000
  "AAPL",
  "MSFT",
  "NVDA",
  "GOOGL",
  "AMZN",
  "META",
  "BRK-B",
  "JPM",
  "GS",
  "GC=F",    // Gold
  "CL=F",    // WTI Oil
  "BTC-USD",
  "ETH-USD",
  "EURUSD=X",
  "GBPUSD=X",
  "USDJPY=X",
  "^TNX",    // 10Y Treasury
  "^TYX",    // 30Y Treasury
];

function formatSymbol(symbol: string): string {
  return symbol.replace(/\^/, "").replace(/=X$/, "").replace(/-/, "");
}

// GET /api/market/quotes?symbols=AAPL,MSFT,...
router.get("/market/quotes", async (req, res) => {
  try {
    const requested = (req.query.symbols as string | undefined)?.split(",").filter(Boolean) ?? SYMBOLS;
    const symbolList = requested.join(",");

    const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${encodeURIComponent(symbolList)}&fields=symbol,shortName,regularMarketPrice,regularMarketChange,regularMarketChangePercent,regularMarketVolume,regularMarketDayHigh,regularMarketDayLow,regularMarketOpen,fiftyTwoWeekHigh,fiftyTwoWeekLow,marketCap`;

    const resp = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; VARKONIS-Platform/1.0)",
        Accept: "application/json",
      },
    });

    if (!resp.ok) {
      throw new Error(`Yahoo Finance responded with ${resp.status}`);
    }

    const data = await resp.json() as any;
    const quotes = data?.quoteResponse?.result ?? [];

    const formatted = quotes.map((q: any) => ({
      symbol: q.symbol,
      name: q.shortName ?? q.symbol,
      price: q.regularMarketPrice ?? 0,
      change: q.regularMarketChange ?? 0,
      changePercent: q.regularMarketChangePercent ?? 0,
      volume: q.regularMarketVolume ?? 0,
      high: q.regularMarketDayHigh ?? 0,
      low: q.regularMarketDayLow ?? 0,
      open: q.regularMarketOpen ?? 0,
      week52High: q.fiftyTwoWeekHigh ?? 0,
      week52Low: q.fiftyTwoWeekLow ?? 0,
      marketCap: q.marketCap ?? null,
    }));

    res.json({ success: true, quotes: formatted, updatedAt: new Date().toISOString() });
  } catch (err: any) {
    console.error("[market/quotes]", err?.message);
    res.status(502).json({ success: false, error: "Failed to fetch market data", message: err?.message });
  }
});

// GET /api/market/chart/:symbol?range=1d&interval=5m
router.get("/market/chart/:symbol", async (req, res) => {
  try {
    const { symbol } = req.params;
    const range = (req.query.range as string) ?? "1d";
    const interval = (req.query.interval as string) ?? "5m";

    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=${range}&interval=${interval}&includePrePost=false`;

    const resp = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; VARKONIS-Platform/1.0)",
        Accept: "application/json",
      },
    });

    if (!resp.ok) {
      throw new Error(`Yahoo Finance chart responded with ${resp.status}`);
    }

    const data = await resp.json() as any;
    const result = data?.chart?.result?.[0];

    if (!result) {
      return res.status(404).json({ success: false, error: "No chart data found" });
    }

    const timestamps: number[] = result.timestamp ?? [];
    const closes: number[] = result.indicators?.quote?.[0]?.close ?? [];
    const opens: number[] = result.indicators?.quote?.[0]?.open ?? [];
    const volumes: number[] = result.indicators?.quote?.[0]?.volume ?? [];
    const meta = result.meta;

    const candles = timestamps.map((t, i) => ({
      time: t,
      close: closes[i] ?? null,
      open: opens[i] ?? null,
      volume: volumes[i] ?? null,
    })).filter(c => c.close !== null);

    res.json({
      success: true,
      symbol: meta?.symbol,
      currency: meta?.currency,
      exchangeName: meta?.exchangeName,
      previousClose: meta?.previousClose ?? meta?.chartPreviousClose,
      regularMarketPrice: meta?.regularMarketPrice,
      candles,
      updatedAt: new Date().toISOString(),
    });
  } catch (err: any) {
    console.error("[market/chart]", err?.message);
    res.status(502).json({ success: false, error: "Failed to fetch chart data", message: err?.message });
  }
});

// GET /api/market/news — curated financial headlines (simulated; replace with real news API)
router.get("/market/news", async (_req, res) => {
  const headlines = [
    { id: 1, headline: "Fed signals higher-for-longer rate path; markets reprice 2025 cuts", source: "Reuters", time: "2m ago", impact: "high", sentiment: "bearish" },
    { id: 2, headline: "NVIDIA Q1 earnings beat estimates by 18%; data center revenue surges", source: "Bloomberg", time: "8m ago", impact: "high", sentiment: "bullish" },
    { id: 3, headline: "Treasury 10Y yield climbs to 4.32% on stronger-than-expected jobs data", source: "WSJ", time: "14m ago", impact: "medium", sentiment: "bearish" },
    { id: 4, headline: "ECB holds rates steady, signals first cut may come in June", source: "FT", time: "22m ago", impact: "medium", sentiment: "neutral" },
    { id: 5, headline: "Apple launches new AI features; analysts upgrade price targets", source: "CNBC", time: "31m ago", impact: "medium", sentiment: "bullish" },
    { id: 6, headline: "Gold hits 3-month high as dollar weakens on inflation data", source: "Reuters", time: "45m ago", impact: "low", sentiment: "bullish" },
    { id: 7, headline: "S&P 500 earnings season on track for 7.4% YoY growth — FactSet", source: "FactSet", time: "1h ago", impact: "medium", sentiment: "bullish" },
    { id: 8, headline: "JPMorgan raises recession probability to 35%; cites yield curve", source: "Bloomberg", time: "2h ago", impact: "high", sentiment: "bearish" },
  ];
  res.json({ success: true, news: headlines, updatedAt: new Date().toISOString() });
});

export default router;
