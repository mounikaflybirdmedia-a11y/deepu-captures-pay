import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Deepu Photography" },
      { name: "description", content: "Wedding photography, portraits, maternity & newborn sittings, and professional post-production services." },
      { property: "og:title", content: "Services — Deepu Photography" },
      { property: "og:description", content: "Wedding, portrait & post-production services." },
    ],
  }),
  component: Services,
});

const services = [
  {
    title: "Wedding Photography",
    body: "Full-day candid coverage of muhurtam, reception and pre/post functions. Lead photographer with second shooter where needed, plus traditional coverage on request.",
    includes: ["Candid + traditional coverage", "Pre-wedding shoot option", "Edited highlight set", "Premium album design"],
  },
  {
    title: "Portrait & Family",
    body: "Studio and outdoor sittings — bridal portraits, family, maternity, newborn and milestone shoots. Calm direction and timeless lighting.",
    includes: ["Studio or location", "Wardrobe guidance", "Retouched final set"],
  },
  {
    title: "Post-Production for Studios",
    body: "Editing services for other photographers — culling, color grading, skin retouching and album layout. Consistent batches, fast turnaround, secure delivery links.",
    includes: ["Color grading & retouching", "Album / magazine design", "Private delivery link", "Online payment via Razorpay"],
  },
];

function Services() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <div className="text-xs uppercase tracking-[0.35em] text-primary">What we offer</div>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">Services & craft.</h1>
        <div className="gold-rule w-24 mx-auto mt-6" />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 space-y-6">
        {services.map((s, i) => (
          <article key={s.title} className="grid md:grid-cols-[120px_1fr] gap-6 border border-border/60 p-8 hover:border-primary/60 transition-colors">
            <div className="font-display text-5xl text-primary/70">0{i + 1}</div>
            <div>
              <h2 className="font-display text-3xl">{s.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
              <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-sm">
                {s.includes.map((it) => (
                  <li key={it} className="flex gap-2 text-muted-foreground">
                    <span className="text-primary">—</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="border-t border-border/60 bg-card">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="font-display text-4xl">Already received a payment link?</h2>
          <p className="mt-4 text-muted-foreground">Clients who've been sent a private link from the studio can complete payment securely.</p>
          <Link to="/pay" className="mt-8 inline-flex px-6 py-3 bg-primary text-primary-foreground text-sm uppercase tracking-[0.25em]">Open payment page</Link>
        </div>
      </section>
    </SiteLayout>
  );
}