import Link from "next/link";

const topLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
  { href: "/disclaimer", label: "DISCLAIMER" },
  { href: "/privacy-policy", label: "PRIVACY POLICY" },
  { href: "/terms-and-conditions", label: "TERMS AND CONDITIONS" },
];

const branches = [
  "Johar Town • 28 Civic Centre",
  "DHA Phase 4 • CC Commercial Area",
  "DHA Phase 6 • 17 CCA",
  "Bahria Town • Sector C",
  "Emporium Mall • Food Court",
  "Gulberg • Delivery-only hub",
];

const hours = [
  "Johar Town: 12 PM – 3 AM",
  "DHA Phase 4: 12 PM – 3 AM",
  "DHA Phase 6: 12 PM – 3 AM",
  "Bahria Town: 12 PM – 3 AM",
  "Emporium Mall: 12 PM – 11 PM",
];

export default function Footer() {
  return (
    <footer className="border-t-4 border-[var(--color-brand-yellow)] bg-black/5 dark:bg-white/5 pt-16 pb-8 mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Top Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 border-b border-black/10 dark:border-white/10 pb-8 mb-10 text-xs font-black uppercase tracking-widest">
          {topLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[var(--color-brand-yellow)] transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Branches & Hours */}
        <div className="grid gap-12 md:grid-cols-2 mb-12">
          <div>
            <h3 className="text-2xl font-black uppercase tracking-widest text-[var(--color-brand-yellow)] mb-6">
              Our Branches
            </h3>
            <div className="space-y-3 opacity-80 font-medium text-sm">
              {branches.map((branch) => (
                <p key={branch}>{branch}</p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black uppercase tracking-widest text-[var(--color-brand-yellow)] mb-6">
              Working Hours
            </h3>
            <div className="space-y-3 opacity-80 font-medium text-sm">
              {hours.map((time) => (
                <p key={time}>{time}</p>
              ))}
            </div>
            
            <p className="mt-6 text-sm font-bold uppercase tracking-widest bg-[var(--color-brand-yellow)]/20 inline-block px-3 py-1 rounded text-[var(--color-foreground)]">
              Delivery Radius • Up to 10 km
            </p>
          </div>
        </div>

        {/* Bottom Copy */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-black/10 dark:border-white/10 pt-8 text-xs font-bold uppercase tracking-widest opacity-60">
          <p>Copyright © 2026 • Johnny & Jugnu • All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}