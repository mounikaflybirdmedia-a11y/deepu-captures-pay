import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import hero from "@/assets/hero-wedding.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Deepu Photography" },
      { name: "description", content: "Selected wedding, bridal, maternity and newborn photography by Deepu Photography, Khammam." },
      { property: "og:title", content: "Portfolio — Deepu Photography" },
      { property: "og:description", content: "Selected work by Deepu Photography." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Portfolio,
});

const work = [
  { src: hero, label: "Bridal · Golden hour", span: "md:col-span-2 md:row-span-2" },
  { src: p1, label: "Ring ceremony", span: "" },
  { src: p2, label: "Groom portrait", span: "" },
  { src: p3, label: "Pre-wedding · Hills", span: "md:col-span-2" },
  { src: p4, label: "Bridal detail", span: "" },
  { src: p5, label: "Newborn", span: "" },
  { src: p6, label: "Maternity", span: "md:col-span-2" },
];

function Portfolio() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-12 text-center">
        <div className="text-xs uppercase tracking-[0.35em] text-primary">Portfolio</div>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">Stories, lit softly.</h1>
        <div className="gold-rule w-24 mx-auto mt-6" />
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24 grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[220px] md:auto-rows-[260px]">
        {work.map((w, i) => (
          <figure key={i} className={`relative overflow-hidden group ${w.span}`}>
            <img src={w.src} alt={w.label} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-3 text-xs uppercase tracking-[0.25em] text-primary bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition">
              {w.label}
            </figcaption>
          </figure>
        ))}
      </section>
    </SiteLayout>
  );
}