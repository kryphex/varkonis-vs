import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Our team will get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="w-full pt-10 pb-24 px-4 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left info */}
          <div>
            <span className="text-eyebrow">Contact</span>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold mb-6">
              Have a project<br />in mind?
            </h1>
            <p className="text-lg text-white/50 mb-12">
              Whether you need a platform demo, enterprise pricing, or have technical questions, our team of financial engineers is ready to help.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-2 border border-border flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Us</h4>
                  <p className="text-sm text-white/50">enterprise@varkonis.io</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-2 border border-border flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Call Us</h4>
                  <p className="text-sm text-white/50">+1 (800) 555-0199</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-2 border border-border flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Global HQ</h4>
                  <p className="text-sm text-white/50">One World Trade Center<br/>Suite 4500<br/>New York, NY 10007</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-surface-1 border border-border p-8 md:p-10 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-display font-bold mb-6">Send a message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-white/60 uppercase tracking-wider">First Name</label>
                  <input required type="text" className="bg-surface-3 border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-white/60 uppercase tracking-wider">Last Name</label>
                  <input required type="text" className="bg-surface-3 border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-white/60 uppercase tracking-wider">Work Email</label>
                <input required type="email" className="bg-surface-3 border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="john@company.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-white/60 uppercase tracking-wider">Company Name</label>
                <input required type="text" className="bg-surface-3 border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Acme Capital" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-white/60 uppercase tracking-wider">How can we help?</label>
                <textarea required rows={4} className="bg-surface-3 border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your needs..."></textarea>
              </div>
              <Button type="submit" className="mt-2" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

        </AnimatedSection>
      </div>
    </div>
  );
}
