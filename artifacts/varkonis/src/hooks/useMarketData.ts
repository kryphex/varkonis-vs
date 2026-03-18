import { useState, useEffect, useCallback } from 'react';

export interface Quote {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  high: number;
  low: number;
  open: number;
  week52High: number;
  week52Low: number;
  marketCap: number | null;
}

export interface NewsItem {
  id: number;
  headline: string;
  source: string;
  time: string;
  impact: 'high' | 'medium' | 'low';
  sentiment: 'bullish' | 'bearish' | 'neutral';
}

const MOCK_QUOTES: Quote[] = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 189.30, change: 1.42, changePercent: 0.76, volume: 52000000, high: 190.50, low: 188.20, open: 188.50, week52High: 199.62, week52Low: 164.08, marketCap: 2900000000000 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', price: 415.50, change: -2.30, changePercent: -0.55, volume: 21000000, high: 420.10, low: 414.20, open: 418.80, week52High: 430.82, week52Low: 305.00, marketCap: 3100000000000 },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 885.10, change: 25.40, changePercent: 2.95, volume: 45000000, high: 890.00, low: 860.50, open: 865.20, week52High: 974.00, week52Low: 262.25, marketCap: 2200000000000 },
  { symbol: 'BTC-USD', name: 'Bitcoin USD', price: 67450.20, change: 1240.50, changePercent: 1.87, volume: 35000000000, high: 68500.00, low: 65800.00, open: 66210.00, week52High: 73750.00, week52Low: 24900.00, marketCap: 1300000000000 },
];

const MOCK_NEWS: NewsItem[] = [
  { id: 1, headline: "Fed signals higher-for-longer rate path; markets reprice 2025 cuts", source: "Reuters", time: "2m ago", impact: "high", sentiment: "bearish" },
  { id: 2, headline: "NVIDIA Q1 earnings beat estimates by 18%; data center revenue surges", source: "Bloomberg", time: "8m ago", impact: "high", sentiment: "bullish" },
];

export function useMarketData() {
  const [quotes, setQuotes] = useState<Quote[]>(MOCK_QUOTES);
  const [news, setNews] = useState<NewsItem[]>(MOCK_NEWS);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const fetchQuotes = useCallback(async () => {
    try {
      const response = await fetch('/api/market/quotes');
      if (!response.ok) throw new Error('Failed to fetch quotes');
      const data = await response.json();
      if (data.success && data.quotes) {
        setQuotes(data.quotes);
        setLastUpdated(new Date());
      }
    } catch (err: any) {
      console.error('Error fetching quotes:', err);
      // Fallback to mock data already set
    }
  }, []);

  const fetchNews = useCallback(async () => {
    try {
      const response = await fetch('/api/market/news');
      if (!response.ok) throw new Error('Failed to fetch news');
      const data = await response.json();
      if (data.success && data.news) {
        setNews(data.news);
      }
    } catch (err: any) {
      console.error('Error fetching news:', err);
      // Fallback to mock data already set
    }
  }, []);

  const refresh = useCallback(async () => {
    setIsLoading(true);
    await Promise.all([fetchQuotes(), fetchNews()]);
    setIsLoading(false);
  }, [fetchQuotes, fetchNews]);

  useEffect(() => {
    refresh();
    const interval = setInterval(fetchQuotes, 30000);
    return () => clearInterval(interval);
  }, [refresh, fetchQuotes]);

  return {
    quotes,
    news,
    isLoading,
    error,
    lastUpdated,
    refetch: refresh,
  };
}
