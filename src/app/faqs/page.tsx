import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, organizationJsonLd } from "@/lib/constants";
import { faqGroups } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Corrugated Box FAQs — 64 Answers from Basics to Export Specs | Bhaavya Ecopack",
  description:
    "64 straight answers on corrugated boxes: ply, GSM, flutes, bursting/ECT/BCT, Cobb and humidity, GST 5% & HSN 4819, MOQs, delivery across 160 km of Surat and pan-India.",
  alternates: { canonical: "/faqs" },
  openGraph: {
    title: "Corrugated Box FAQs — 64 Answers from Basics to Export Specs | Bhaavya Ecopack",
    description:
      "64 straight answers on corrugated boxes: ply, GSM, flutes, bursting/ECT/BCT, Cobb and humidity, GST 5% & HSN 4819, MOQs, delivery across 160 km of Surat and pan-India.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "FAQs" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((g) =>
    g.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

export default function FaqsPage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd, breadcrumbJsonLd, faqJsonLd]} />

      <section className="phero">
        <div className="wrap">
          <nav className="crumbs">
            <Link href="/">Home</Link> <span>›</span> <b>FAQs</b>
          </nav>
          <span className="kicker">FAQs · Answer Engine Ready</span>
          <h1>Every question buyers actually ask. Answered straight.</h1>
          <div className="qa">
            <b>What does this FAQ cover?</b>
            <p>
              64 answers across seven areas — corrugated basics, strength &amp; testing,
              moisture &amp; export, pricing &amp; GST (5% since 22 Sep 2025, HSN 4819),
              ordering &amp; design, delivery across our 160 km Surat radius and pan-India
              network, and sustainability. If your question isn&apos;t here, our engineers
              answer within 4 business hours.
            </p>
          </div>
        </div>
      </section>

      <section className="sec-soft">
        <div className="wrap" style={{ maxWidth: 920 }}>
          {faqGroups.map((g) => (
            <div key={g.group}>
              <div className="grouphead">{g.group}</div>
              <FaqAccordion items={g.items} />
            </div>
          ))}
          <p style={{ textAlign: "center", marginTop: 40 }}>
            <Link className="btn btn-primary" href="/contact">
              Ask our engineers directly
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
