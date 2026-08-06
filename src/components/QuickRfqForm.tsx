"use client";

import { useRfqSubmit } from "@/lib/use-rfq-submit";

export default function QuickRfqForm() {
  const { state, errorMessage, submit } = useRfqSubmit();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<
      string,
      string
    >;
    submit({ ...data, source: "homepage-quick-rfq" });
  };

  if (state === "success") {
    return (
      <div className="form rv rv2">
        <h3>Thanks — we&apos;ve got it.</h3>
        <p style={{ marginTop: 8 }}>
          A member of our team will respond within 4 business hours. For anything urgent, call{" "}
          <a href="tel:+919909962080" style={{ color: "var(--green-700)", fontWeight: 600 }}>
            +91 99099 62080
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form className="form rv rv2" onSubmit={handleSubmit}>
      <h3>Quick RFQ</h3>
      <div className="fs">Takes under a minute. No spam, ever.</div>
      <div className="frow">
        <input type="text" name="name" placeholder="Your name" aria-label="Name" />
        <input type="text" name="company" placeholder="Company Name *" aria-label="Company" required />
      </div>
      <div className="frow">
        <input type="tel" name="phone" placeholder="Phone / WhatsApp" aria-label="Phone" />
        <input type="email" name="email" placeholder="Email (optional)" aria-label="Email" />
      </div>
      <textarea
        name="message"
        placeholder="What do you need packed? (product, size, quantity)"
        aria-label="Requirement"
      />
      <div className="file">＋ Attach drawing / artwork / current box photo (optional)</div>
      <button className="btn btn-primary" type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? "Sending…" : "Get My Quote"}
      </button>
      {state === "error" && (
        <small style={{ display: "block", color: "#B3261E", marginTop: 8 }}>{errorMessage}</small>
      )}
      <small>By submitting, you agree to be contacted about your enquiry.</small>
    </form>
  );
}
