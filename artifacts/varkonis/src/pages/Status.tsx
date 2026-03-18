import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CheckCircle2, AlertCircle, Clock } from "lucide-react";

export default function Status() {
  const services = [
    { name: "API", status: "operational", uptime: "99.99%" },
    { name: "Dashboard", status: "operational", uptime: "99.99%" },
    { name: "Data Sync", status: "operational", uptime: "99.98%" },
    { name: "Reporting Engine", status: "operational", uptime: "100%" },
    { name: "Webhooks", status: "operational", uptime: "99.99%" },
    { name: "Auth", status: "operational", uptime: "100%" },
    { name: "Mobile App", status: "operational", uptime: "99.95%" },
    { name: "Support", status: "operational", uptime: "100%" },
  ];

  const incidents = [
    { title: "Reporting Engine Latency", date: "Oct 22, 2024", status: "Resolved", desc: "A minor latency issue was observed in the PDF generation service. The issue has been identified and resolved." },
    { title: "Scheduled Maintenance", date: "Oct 15, 2024", status: "Completed", desc: "Successfully completed database optimization and software updates." },
    { title: "API Endpoint Intermittency", date: "Sep 28, 2024", status: "Resolved", desc: "Resolved a brief period of 5xx errors affecting the /market/quotes endpoint." },
  ];

  const chartBars = Array.from({ length: 30 }, (_, i) => ({
    height: Math.random() * 40 + 60,
    color: Math.random() > 0.95 ? 'bg-amber-500' : 'bg-green-500'
  }));

  return (
    <div className="min-h-screen">
      {/* Status Header */}
      <section className="pt-[140px] pb-12 px-6 sm:px-12 max-w-5xl mx-auto">
        <div className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 mb-16">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-8 h-8 text-emerald-500" />
          </div>
          <div>
            <h1 className="text-2xl font-display font-bold text-white mb-1">All Systems Operational</h1>
            <p className="text-emerald-500/70 font-medium">Verified at {new Date().toLocaleTimeString()} UTC</p>
          </div>
          <div className="md:ml-auto">
            <div className="text-xs uppercase tracking-[0.2em] text-white/30 mb-2">Current Uptime (90 days)</div>
            <div className="text-3xl font-display font-bold">99.992%</div>
          </div>
        </div>

        {/* Uptime Chart Placeholder */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">System Metrics</h2>
            <span className="text-xs text-white/40 uppercase tracking-widest">Last 30 Days</span>
          </div>
          <div className="bg-surface-1 border border-border p-6 rounded-xl h-32 flex items-end gap-1">
            {chartBars.map((bar, i) => (
              <div 
                key={i} 
                className={`flex-1 rounded-t-sm ${bar.color} opacity-80 hover:opacity-100 transition-opacity cursor-pointer`} 
                style={{ height: `${bar.height}%` }}
                title={`Oct ${i + 1}: 100%`}
              ></div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-white/30 uppercase tracking-widest font-bold">
            <span>30 days ago</span>
            <span>Today</span>
          </div>
        </div>

        {/* Services Table */}
        <div className="mb-24">
          <h2 className="text-xl font-display font-bold mb-6">Services</h2>
          <div className="bg-surface-1 border border-border rounded-xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-white/[0.02]">
                  <th className="px-6 py-4 text-xs font-semibold text-white/40 uppercase tracking-wider">Service</th>
                  <th className="px-6 py-4 text-xs font-semibold text-white/40 uppercase tracking-wider text-right">Uptime</th>
                  <th className="px-6 py-4 text-xs font-semibold text-white/40 uppercase tracking-wider text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {services.map((service, i) => (
                  <tr key={i} className="hover:bg-white/[0.01] transition-colors">
                    <td className="px-6 py-4 font-semibold text-white">{service.name}</td>
                    <td className="px-6 py-4 text-white/50 text-right font-mono text-sm">{service.uptime}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 text-emerald-500 text-sm">
                        Operational <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Incident History */}
        <div className="max-w-3xl">
          <h2 className="text-xl font-display font-bold mb-8">Incident History</h2>
          <div className="flex flex-col gap-12">
            {incidents.map((incident, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="relative pl-10 border-l border-border pb-2">
                <div className="absolute top-0 left-[-5px] w-[10px] h-[10px] rounded-full bg-surface-2 border-2 border-border"></div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-white/40 uppercase tracking-widest">{incident.date}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">{incident.status}</span>
                </div>
                <h3 className="text-lg font-bold mb-3">{incident.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{incident.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
