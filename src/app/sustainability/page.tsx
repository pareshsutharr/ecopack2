import type { Metadata } from "next";
import Link from "next/link";
import DarkCta from "@/components/DarkCta";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, organizationJsonLd } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sustainability | Recyclable Corrugated Packaging — Bhaavya Ecopack",
  description:
    "Bhaavya Ecopack sustainability: recyclable kraft boards, water-based barrier coatings, closed-loop trim recovery, responsible sourcing and wooden-crate replacement.",
  alternates: { canonical: "/sustainability" },
  openGraph: {
    title: "Sustainability | Recyclable Corrugated Packaging — Bhaavya Ecopack",
    description:
      "Bhaavya Ecopack sustainability: recyclable kraft boards, water-based barrier coatings, closed-loop trim recovery, responsible sourcing and wooden-crate replacement.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Sustainability" },
  ],
};

const cards = [
  {
    title: "♻ Recyclable by design",
    text: "Kraft-based boards that re-enter the paper cycle; we prioritize water-based barrier coatings over plastic laminates wherever the route allows.",
  },
  {
    title: "🔄 Closed-loop waste",
    text: "Corrugation and cutting trim is baled and returned to paper mills — production waste becomes tomorrow's liner.",
  },
  {
    title: "🌱 Responsible sourcing",
    text: "Paper sourced from mills with recycled-content and responsible-fibre programs; supplier declarations available.",
  },
  {
    title: "📦 Lightweighting",
    text: "Structural design that removes grams without removing strength — less fibre, less freight, less cost.",
  },
  {
    title: "🪵 Wood replacement",
    text: "7-ply engineering that replaces wooden crates — no felling, no fumigation, full recyclability.",
  },
  {
    title: "🎯 Honest goals",
    text: "We publish only what we can evidence — dated commitments on waste, energy and coatings, reviewed annually.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd, breadcrumbJsonLd]} />

      <section className="phero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link> &nbsp;/&nbsp; Sustainability
          </div>
          <span className="kicker">Sustainability</span>
          <h1>Ecopack by name. Ecopack by practice.</h1>
          <div className="qa" style={{ marginTop: 16 }}>
            <b>Service to the Nation</b>
            <p>
              At Bhaavya Ecopack, we are committed to bringing change in society by adopting
              Corporate Social Responsibility models designed for sustainable and responsible
              growth — from recycled-fibre manufacturing to on-site solar generation.
            </p>
          </div>
          <p className="lead">
            Corrugated is one of the world&apos;s most recycled materials. We push further —
            recyclable barrier coatings, trim-waste recovery, responsible sourcing and honest,
            measurable goals.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="qa">
            <b>Is corrugated packaging environmentally friendly?</b>
            <p>
              Yes — corrugated board is recyclable, biodegradable and among the most recycled
              packaging materials globally. Bhaavya Ecopack strengthens this with recyclable
              water-based moisture coatings, closed-loop trim-waste recovery and responsibly
              sourced kraft paper.
            </p>
          </div>

          <div className="grid3" style={{ marginTop: 48 }}>
            {cards.map((c, i) => (
              <div
                className={`card rv${i % 3 === 1 ? " rv2" : i % 3 === 2 ? " rv3" : ""}`}
                style={{ padding: 32 }}
                key={c.title}
              >
                <h3 style={{ marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: 14.5 }}>{c.text}</p>
              </div>
            ))}
          </div>
          <p className="rv" style={{ marginTop: 36 }}>
            Sustainability claims your buyers can verify: see our{" "}
            <Link href="/quality-assurance" style={{ color: "var(--green-700)", fontWeight: 600 }}>
              documentation practices
            </Link>
            .
          </p>
        </div>
      </section>

      <DarkCta />
    </>
  );
}
