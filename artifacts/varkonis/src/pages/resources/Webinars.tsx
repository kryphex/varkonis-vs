import { Link } from "wouter";
import { Video, Calendar, ArrowRight, Play, CheckCircle2, Globe, Clock, Users } from "lucide-react";

const WEBINARS = [
  {
    title: "Navigating Volatility: Risk Management in 2024",
    date: "June 15, 2024",
    time: "10:00 AM EST",
    status: "Upcoming",
    desc: "Join our Chief Risk Officer for a deep-dive into managing tail-risk in the current macro environment.",
    image: "https://images.unsplash.com/photo-1591115765373-520b7a3f7294?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "AI & Alpha: Harnessing Machine Learning for Performance",
    date: "July 08, 2024",
    time: "2:00 PM EST",
    status: "Upcoming",
    desc: "A technical overview of the VARKONIS AI module and how to integrate signals into your workflow.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Scaling Operations for Multi-Asset Family Offices",
    date: "May 22, 2024",
    time: "Recording Available",
    status: "On-Demand",
    desc: "Learn how top family offices use VARKONIS to consolidate global holdings into a single source of truth.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Private Equity: From Deal Sourcing to Exit Strategy",
    date: "April 18, 2024",
    time: "Recording Available",
    status: "On-Demand",
    desc: "Optimizing the PE lifecycle with unified deal tracking and automated portfolio monitoring.",
    image: "https://images.unsplash.com/photo-1454165833767-027eeef1593e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Mastering the VARKONIS Enterprise API",
    date: "March 29, 2024",
    time: "Recording Available",
    status: "On-Demand",
    desc: "A developer-focused session on building custom extensions and integrations using our SDKs.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "ESG Integration: More Than Just a Compliance Check",
    date: "February 12, 2024",
    time: "Recording Available",
    status: "On-Demand",
    desc: "How to leverage ESG data for meaningful risk mitigation and value creation.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Webinars() {
  return (
    <div className="min-h-screen bg-background text-white font-manrope">
      {/* Hero Section */}
      <section className="pt-[140px] pb-24 px-6 sm:px-12 max-w-7xl mx-auto text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.18em] uppercase text-primary-hover flex items-center justify-center lg:justify-start gap-3 mb-4 font-bold">
              <span className="w-4 h-px bg-primary"></span>
              VARKONIS Events
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[0.95] tracking-tight mb-6">
              Expert Insights <em className="not-italic text-gradient">Delivered Live.</em>
            </h1>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Join industry leaders and platform experts for deep-dives into the latest trends in risk, analytics, and institutional technology.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-primary hover:bg-primary-hover text-white font-bold px-8 py-3 rounded-lg transition-colors">Register for Next Event</button>
              <button className="bg-surface-2 border border-border text-white hover:text-white/80 font-bold px-8 py-3 rounded-lg transition-colors">Explore All On-Demand</button>
            </div>
          </div>
          <div className="relative w-full max-w-lg aspect-video rounded-2xl overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1591115765373-520b7a3f7294?auto=format&fit=crop&q=80&w=800" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700" alt="Webinar Preview" />
            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer border border-white/30">
                <Play className="w-6 h-6 fill-white text-white ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories / Filter Bar */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto mb-16">
        <div className="flex flex-wrap gap-4 border-b border-border pb-6">
          {['All Webinars', 'Upcoming', 'Risk Management', 'Platform Training', 'Market Insights'].map((cat, i) => (
            <button key={i} className={`text-sm font-bold px-6 py-2 rounded-full transition-colors ${i === 0 ? 'bg-primary text-white' : 'bg-surface-1 border border-border text-white/40 hover:text-white hover:border-white/20'}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Webinar Grid */}
      <section className="pb-32 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WEBINARS.map((webinar, i) => (
            <div key={i} className="group bg-surface-1 border border-border rounded-xl overflow-hidden hover:bg-surface-2 transition-all">
              <div className="relative aspect-video overflow-hidden">
                <img src={webinar.image} alt={webinar.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                <div className={`absolute top-4 right-4 px-2 py-1 rounded text-[9px] font-bold uppercase tracking-wider ${webinar.status === 'Upcoming' ? 'bg-primary' : 'bg-white/10 backdrop-blur-md border border-white/20'}`}>
                  {webinar.status}
                </div>
                {webinar.status === 'On-Demand' && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                      <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-white/40 uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {webinar.date}
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-white/40 uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    {webinar.time}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-4 leading-tight group-hover:text-primary transition-colors">{webinar.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed mb-6">{webinar.desc}</p>
                <button className="w-full py-3 bg-surface-2 border border-border group-hover:bg-primary group-hover:border-primary text-white font-bold text-xs rounded transition-all flex items-center justify-center gap-2">
                  {webinar.status === 'Upcoming' ? 'Register Now' : 'Watch Recording'} <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Host / Speaker Section */}
      <section className="py-24 bg-surface-1 border-y border-border px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl mb-6">Learn from the <span className="text-gradient">Best in the Business.</span></h2>
            <p className="text-white/60 mb-8 max-w-lg">Our webinar hosts are veterans from top-tier hedge funds, asset managers, and fintech leaders, bringing decades of practical experience to every session.</p>
            <div className="space-y-4">
              {[
                { icon: <CheckCircle2 className="w-5 h-5 text-primary" />, text: "Direct Q&A with platform architects" },
                { icon: <CheckCircle2 className="w-5 h-5 text-primary" />, text: "Exclusive access to presentation decks" },
                { icon: <CheckCircle2 className="w-5 h-5 text-primary" />, text: "Certificate of completion for technical workshops" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-sm text-white/80">
                  {item.icon}
                  {item.text}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {[
              { name: "Sarah Chen", title: "CEO", img: "https://i.pravatar.cc/150?u=sarah" },
              { name: "Marcus Webb", title: "CTO", img: "https://i.pravatar.cc/150?u=marcus" },
              { name: "Priya Sharma", title: "CPO", img: "https://i.pravatar.cc/150?u=priya" },
              { name: "David Foster", title: "Head of Risk", img: "https://i.pravatar.cc/150?u=david" },
            ].map((speaker, i) => (
              <div key={i} className="bg-surface-2 p-4 rounded-xl border border-border flex items-center gap-4">
                <img src={speaker.img} className="w-12 h-12 rounded-full grayscale" alt={speaker.name} />
                <div>
                  <div className="font-bold text-xs">{speaker.name}</div>
                  <div className="text-[10px] text-white/30 uppercase font-bold tracking-wider">{speaker.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-32 px-6 sm:px-12 text-center max-w-4xl mx-auto">
        <Video className="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl mb-6">Never miss a live session</h2>
        <p className="text-white/60 mb-10 max-w-2xl mx-auto">Subscribe to our events calendar to receive calendar invites for all upcoming VARKONIS webinars and technical workshops.</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="work@firm.com" 
            className="flex-1 bg-surface-2 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/50" 
          />
          <button className="bg-primary hover:bg-primary-hover text-white font-bold px-8 py-3 rounded-lg transition-colors whitespace-nowrap">Subscribe</button>
        </div>
      </section>
    </div>
  );
}
