import { createFileRoute, useSearch } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useEffect, useState } from "react";

// 🔑 Replace with your live Razorpay Key ID from https://dashboard.razorpay.com
const RAZORPAY_KEY_ID = "rzp_test_REPLACE_WITH_YOUR_KEY";

type PaySearch = {
  amount?: number;
  for?: string;
  name?: string;
  email?: string;
  phone?: string;
};

export const Route = createFileRoute("/pay")({
  head: () => ({
    meta: [
      { title: "Secure Payment — Deepu Photography" },
      { name: "description", content: "Complete your photography payment securely via Razorpay." },
      { name: "robots", content: "noindex" },
    ],
  }),
  validateSearch: (s: Record<string, unknown>): PaySearch => ({
    amount: s.amount ? Number(s.amount) : undefined,
    for: typeof s.for === "string" ? s.for : undefined,
    name: typeof s.name === "string" ? s.name : undefined,
    email: typeof s.email === "string" ? s.email : undefined,
    phone: typeof s.phone === "string" ? s.phone : undefined,
  }),
  component: Pay,
});

declare global {
  interface Window {
    Razorpay?: new (opts: Record<string, unknown>) => { open: () => void };
  }
}

function Pay() {
  const search = useSearch({ from: "/pay" });
  const [amount, setAmount] = useState<string>(search.amount ? String(search.amount) : "");
  const [name, setName] = useState(search.name ?? "");
  const [email, setEmail] = useState(search.email ?? "");
  const [phone, setPhone] = useState(search.phone ?? "");
  const [forText, setForText] = useState(search.for ?? "Photography service");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    if (document.getElementById("rzp-script")) return;
    const s = document.createElement("script");
    s.id = "rzp-script";
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    const paise = Math.round(parseFloat(amount) * 100);
    if (!paise || paise < 100) {
      setStatus("Please enter a valid amount (minimum ₹1).");
      return;
    }
    if (!window.Razorpay) {
      setStatus("Payment is still loading — please try again in a moment.");
      return;
    }
    setLoading(true);
    const rzp = new window.Razorpay({
      key: RAZORPAY_KEY_ID,
      amount: paise,
      currency: "INR",
      name: "Deepu Photography",
      description: forText || "Photography service",
      prefill: { name, email, contact: phone },
      notes: { service: forText, studio: "Deepu Photography — Khammam" },
      theme: { color: "#c9a55a" },
      handler: (resp: { razorpay_payment_id: string }) => {
        setLoading(false);
        setStatus(`✓ Payment received. Reference: ${resp.razorpay_payment_id}`);
      },
      modal: {
        ondismiss: () => setLoading(false),
      },
    });
    rzp.open();
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-2xl px-6 py-24">
        <div className="text-xs uppercase tracking-[0.35em] text-primary text-center">Secure payment</div>
        <h1 className="mt-4 font-display text-5xl text-center">Complete your payment</h1>
        <div className="gold-rule w-20 mx-auto my-6" />
        <p className="text-center text-muted-foreground">
          Powered by Razorpay · UPI · Cards · Net Banking · Wallets
        </p>

        <form onSubmit={handlePay} className="mt-12 space-y-5 bg-card border border-border/60 p-8">
          <Row label="Service / reference">
            <input value={forText} onChange={(e) => setForText(e.target.value)} className="w-full bg-input/30 border border-border focus:border-primary outline-none p-3 text-sm" />
          </Row>
          <Row label="Amount (INR)">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">₹</span>
              <input
                type="number"
                min={1}
                step="0.01"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-input/30 border border-border focus:border-primary outline-none p-3 pl-8 text-lg font-display"
                placeholder="0.00"
              />
            </div>
          </Row>
          <div className="grid sm:grid-cols-2 gap-5">
            <Row label="Your name">
              <input required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-input/30 border border-border focus:border-primary outline-none p-3 text-sm" />
            </Row>
            <Row label="Phone">
              <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-input/30 border border-border focus:border-primary outline-none p-3 text-sm" />
            </Row>
          </div>
          <Row label="Email (for receipt)">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-input/30 border border-border focus:border-primary outline-none p-3 text-sm" />
          </Row>

          <button
            disabled={loading}
            className="w-full px-6 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-[0.3em] disabled:opacity-60"
          >
            {loading ? "Opening Razorpay…" : `Pay ${amount ? "₹" + amount : "now"}`}
          </button>

          {status && (
            <div className="text-sm text-center p-3 border border-primary/40 text-primary">{status}</div>
          )}

          <p className="text-xs text-muted-foreground text-center pt-2">
            By paying you agree to Deepu Photography's service terms. For invoice queries call +91 96761 26506.
          </p>
        </form>
      </section>
    </SiteLayout>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">{label}</label>
      {children}
    </div>
  );
}