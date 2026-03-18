import { Link } from "wouter";
import { ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <ShieldAlert className="w-16 h-16 text-primary mb-6" />
      <h1 className="font-display text-4xl font-extrabold mb-4">404 - Asset Not Found</h1>
      <p className="text-white/50 mb-8 max-w-md">
        The page or resource you are looking for has been moved, deleted, or does not exist.
      </p>
      <Button href="/">Return to Dashboard</Button>
    </div>
  );
}
