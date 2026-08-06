"use client";

import { useRfqSubmit } from "@/lib/use-rfq-submit";

export default function ContactForm() {
  const { state, errorMessage, submit } = useRfqSubmit();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<
      string,
      string
    >;
    submit({ ...data, source: "contact-page" });
  };

  if (state === "success") {
    return (
      <div className="form rv rv2" style={{ boxShadow: "var(--shadow-lg)" }}>
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
    <form className="form rv rv2" style={{ boxShadow: "var(--shadow-lg)" }} onSubmit={handleSubmit}>
      <h3>Detailed RFQ</h3>
      <div className="fs">The more you share, the sharper the quote. All fields optional except contact.</div>
      <div className="frow">
        <input type="text" name="name" placeholder="Your name *" required />
        <input type="text" name="company" placeholder="Company Name *" required />
      </div>
      <div className="frow">
        <input type="tel" name="phone" placeholder="Phone / WhatsApp *" required />
        <input type="email" name="email" placeholder="Email" />
      </div>
      <div className="frow">
        <input type="text" name="product" placeholder="Product to be packed" />
        <input type="text" name="weight" placeholder="Approx. weight per box (kg)" />
      </div>
      <div className="frow">
        <input type="text" name="boxSize" placeholder="Box size L×W×H (cm), if known" />
        <input type="text" name="quantity" placeholder="Quantity / monthly volume" />
      </div>
      <div className="frow">
        <input type="text" name="ply" placeholder="Ply preference (3/5/7 or unsure)" />
        <input type="text" name="route" placeholder="Destination / route (e.g., export via Mundra)" />
      </div>
      <textarea name="message" placeholder="Anything else — printing, moisture needs, current problems" />
      <div className="file">＋ Attach drawing / artwork / current box photo (optional)</div>
      <button className="btn btn-primary" type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? "Sending…" : "Get My Quote"}
      </button>
      {state === "error" && (
        <small style={{ display: "block", color: "#B3261E", marginTop: 8 }}>{errorMessage}</small>
      )}
      <small>
        Response within 4 business hours · Mon–Sat. By submitting, you agree to be contacted about
        your enquiry.
      </small>
    </form>
  );
}
