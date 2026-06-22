import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import hero from "@/assets/hero-wedding.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deepu Photography — Wedding & Portrait Studio, Khammam" },
      { name: "description", content: "Cinematic wedding, portrait and post-production photography by Manideepak Vengapaka in Sathupalli, Khammam." },
      { property: "og:title", content: "Deepu Photography" },
      { property: "og:description", content: "Cinematic wedding & portrait photography in Khammam." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
        <img src={hero} alt="Bride at golden hour" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        <div className="relative z-10 mx-auto max-w-5xl h-full flex flex-col justify-end pb-24 px-6">
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-6">Khammam · Sathupalli · Telangana</div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-3xl">
            Frames that carry <em className="text-primary not-italic">memory</em>.
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground text-lg">
            Wedding, portrait and post-production photography by Manideepak Vengapaka — quiet, cinematic, and made to be revisited.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/portfolio" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm uppercase tracking-[0.25em] hover:opacity-90 transition">
              View Portfolio
            </Link>
            <Link to="/contact" className="inline-flex items-center px-6 py-3 border border-primary/60 text-primary text-sm uppercase tracking-[0.25em] hover:bg-primary hover:text-primary-foreground transition">
              Enquire
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-28 text-center">
        <div className="gold-rule w-24 mx-auto mb-8" />
        <h2 className="font-display text-4xl md:text-5xl">A studio for the unrepeatable day.</h2>
        <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
          From the muhurtam mandapam to the quietest in-between glances — every wedding gets handled with calm direction,
          careful light, and post-production that honors what really happened.
        </p>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-7xl px-6 pb-28 grid md:grid-cols-3 gap-8">
        {[
          { t: "Weddings", d: "Full-day candid coverage, traditional rituals, receptions, pre-wedding stories." },
          { t: "Portraits", d: "Brides, grooms, maternity, newborn and family sittings in studio or on location." },
          { t: "Post-Production", d: "Editing, color grading and album design for photographers and studios." },
        ].map((s) => (
          <div key={s.t} className="border border-border/60 p-8 hover:border-primary/60 transition-colors">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">Service</div>
            <h3 className="mt-3 font-display text-2xl">{s.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
          </div>
        ))}
      </section>

      {/* Portfolio preview */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-primary mb-3">Selected work</div>
            <h2 className="font-display text-4xl md:text-5xl">Recent stories</h2>
          </div>
          <Link to="/portfolio" className="text-sm uppercase tracking-[0.25em] text-primary hover:underline">All work →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[p1, p2, p3, p4].map((src, i) => (
            <div key={i} className="aspect-[3/4] overflow-hidden">
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="font-display text-4xl md:text-5xl">Let's plan your day.</h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Available across Khammam, Hyderabad and the Telugu states. Bookings open for the current season.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a href="tel:+919676126506" className="px-6 py-3 bg-primary text-primary-foreground text-sm uppercase tracking-[0.25em]">Call 96761 26506</a>
            <Link to="/contact" className="px-6 py-3 border border-primary/60 text-primary text-sm uppercase tracking-[0.25em]">Send enquiry</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
