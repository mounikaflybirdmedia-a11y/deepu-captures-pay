import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Deepu Photography" },
      { name: "description", content: "Book Deepu Photography for weddings & portraits. Call +91 96761 26506 or send an enquiry." },
      { property: "og:title", content: "Contact — Deepu Photography" },
      { property: "og:description", content: "Get in touch with Deepu Photography, Sathupalli, Khammam." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-16">
        <div>
          <div className="text-xs uppercase tracking-[0.35em] text-primary">Get in touch</div>
          <h1 className="mt-4 font-display text-5xl md:text-6xl leading-tight">Let's tell your story.</h1>
          <div className="gold-rule w-20 my-6" />
          <p className="text-muted-foreground leading-relaxed">
            Send a few words about your day — date, venue and what coverage you're imagining — and we'll get back within a day.
          </p>
          <div className="mt-10 space-y-5 text-sm">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-1">Phone</div>
              <a href="tel:+919676126506" className="text-lg hover:text-primary">+91 96761 26506</a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-1">Studio</div>
              <div>Sathupalli, Khammam, Telangana</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-1">Hours</div>
              <div>Mon — Sat · 10:00 to 8:00</div>
            </div>
          </div>
        </div>

        <form
          className="space-y-5 bg-card border border-border/60 p-8"
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            const text = `Hi Deepu,%0A%0AName: ${f.get("name")}%0APhone: ${f.get("phone")}%0AEvent: ${f.get("event")}%0ADate: ${f.get("date")}%0AMessage: ${f.get("message")}`;
            window.location.href = `https://wa.me/919676126506?text=${text}`;
          }}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Enquire</div>
          <Field name="name" label="Your name" />
          <Field name="phone" label="Phone" type="tel" />
          <Field name="event" label="Event type" placeholder="Wedding, portrait, post-production…" />
          <Field name="date" label="Date" type="date" />
          <div>
            <label className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">Message</label>
            <textarea name="message" rows={4} required className="w-full bg-input/30 border border-border focus:border-primary outline-none p-3 text-sm" />
          </div>
          <button className="w-full px-6 py-3 bg-primary text-primary-foreground text-sm uppercase tracking-[0.25em]">Send via WhatsApp</button>
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({ name, label, type = "text", placeholder }: { name: string; label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full bg-input/30 border border-border focus:border-primary outline-none p-3 text-sm"
      />
    </div>
  );
}