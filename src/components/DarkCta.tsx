import Link from "next/link";
import { contactInfo } from "@/lib/nav-links";

export default function DarkCta({
  heading = "Ready to engineer your packaging?",
  subtext = "Quotation within 4 business hours — free design and sampling included.",
}: {
  heading?: string;
  subtext?: string;
}) {
  return (
    <section className="sec-dark" style={{ padding: "72px 0" }}>
      <div
        className="wrap"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 32,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h2 style={{ fontSize: "clamp(24px,3vw,36px)", marginBottom: 8 }}>{heading}</h2>
          <p style={{ color: "#D6CEC0" }}>{subtext}</p>
        </div>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link className="btn btn-primary" href="/contact">
            Request a Quote
          </Link>
          <a className="btn btn-secondary" href={contactInfo.whatsappHref}>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
