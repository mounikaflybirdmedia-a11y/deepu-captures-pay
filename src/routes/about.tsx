import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import portrait from "@/assets/p2.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Deepu Photography" },
      { name: "description", content: "Manideepak Vengapaka — founder and lead photographer of Deepu Photography, based in Sathupalli, Khammam." },
      { property: "og:title", content: "About — Deepu Photography" },
      { property: "og:description", content: "Meet Manideepak Vengapaka, founder of Deepu Photography." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        <div className="aspect-[4/5] overflow-hidden">
          <img src={portrait} alt="Manideepak Vengapaka" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.35em] text-primary">About the studio</div>
          <h1 className="mt-4 font-display text-5xl md:text-6xl leading-tight">Manideepak Vengapaka.</h1>
          <div className="gold-rule w-20 my-6" />
          <p className="text-muted-foreground leading-relaxed">
            Deepu Photography began with a simple idea — that a wedding album should feel like the day, not just look like it.
            From a small studio in Sathupalli, Khammam, Manideepak photographs weddings, portraits, maternity and newborn
            sessions across Telangana and beyond.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            The studio also handles post-production for other photographers — culling, color grading, retouching and
            album design — quietly powering a lot of work you've already seen.
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-primary">Weddings</dt>
              <dd className="font-display text-3xl mt-1">200+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-primary">Years</dt>
              <dd className="font-display text-3xl mt-1">8</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-primary">Based in</dt>
              <dd className="font-display text-xl mt-2">Khammam</dd>
            </div>
          </dl>
        </div>
      </section>
    </SiteLayout>
  );
}