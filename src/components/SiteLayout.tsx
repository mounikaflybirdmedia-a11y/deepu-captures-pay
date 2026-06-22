import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex flex-col leading-tight">
            <span className="font-display text-2xl tracking-wide text-primary">Deepu</span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">Photography</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <a
            href="tel:+919676126506"
            className="hidden sm:inline-flex items-center text-xs uppercase tracking-[0.25em] border border-primary/50 text-primary px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Book +91 96761 26506
          </a>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/60 mt-24">
        <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-2xl text-primary">Deepu Photography</div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Cinematic wedding & portrait stories crafted in Sathupalli, Khammam — and across Telangana.
            </p>
          </div>
          <div className="text-sm space-y-2">
            <div className="uppercase tracking-[0.25em] text-xs text-primary mb-3">Studio</div>
            <div className="text-muted-foreground">Sathupalli, Khammam</div>
            <div className="text-muted-foreground">Telangana, India</div>
            <a href="tel:+919676126506" className="block hover:text-primary">+91 96761 26506</a>
          </div>
          <div className="text-sm space-y-2">
            <div className="uppercase tracking-[0.25em] text-xs text-primary mb-3">Explore</div>
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="block text-muted-foreground hover:text-primary">
                {n.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Deepu Photography · Manideepak Vengapaka
        </div>
      </footer>
    </div>
  );
}