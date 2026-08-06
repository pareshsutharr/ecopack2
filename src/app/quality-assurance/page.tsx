import type { Metadata } from "next";
import Link from "next/link";
import DarkCta from "@/components/DarkCta";
import Gauges from "@/components/Gauges";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, organizationJsonLd } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Quality Assurance | ISO 9001:2015 Testing & Certification — Bhaavya Ecopack",
  description:
    "Bhaavya Ecopack quality: ISO 9001:2015 system with bursting strength, Cobb moisture and box compression testing on every lot — reports supplied to buyers.",
  alternates: { canonical: "/quality-assurance" },
  openGraph: {
    title: "Quality Assurance | ISO 9001:2015 Testing & Certification — Bhaavya Ecopack",
    description:
      "Bhaavya Ecopack quality: ISO 9001:2015 system with bursting strength, Cobb moisture and box compression testing on every lot — reports supplied to buyers.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Capabilities" },
    { "@type": "ListItem", position: 3, name: "Quality Assurance" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you share test reports with buyers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — lot test reports (bursting strength, Cobb moisture, compression) and ISO certificate copies are supplied on request for vendor registration and audits.",
      },
    },
  ],
};

const gauges = [
  {
    value: 0.86,
    title: "Bursting Strength",
    subtitle: "kg/cm² · per lot",
    text: "Verifies the board resists rupture under pressure — the classic strength benchmark buyers specify.",
  },
  {
    value: 0.92,
    title: "Cobb Moisture (60/180)",
    subtitle: "g/m² water absorption",
    text: "Measures how much water the board absorbs — the test our moisture-resistant boards are built to win.",
  },
  {
    value: 0.8,
    title: "Box Compression",
    subtitle: "stacking load capability",
    text: "Confirms real-world stacking strength so pallets survive warehouses and containers.",
  },
];

export default function QualityAssurancePage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd, breadcrumbJsonLd, faqJsonLd]} />

      <section className="phero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link> &nbsp;/&nbsp; <Link href="/infrastructure">Capabilities</Link>{" "}
            &nbsp;/&nbsp; Quality Assurance
          </div>
          <span className="kicker">Quality Assurance</span>
          <h1>Tested before it travels. Documented before it ships.</h1>
          <p className="lead">
            An ISO 9001:2015 quality system with a working lab — bursting strength, Cobb
            moisture, GSM and compression testing on every lot, with reports your auditors will
            accept.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="qa">
            <b>How does Bhaavya Ecopack ensure box quality?</b>
            <p>
              Quality is controlled at three points: incoming paper inspection (GSM, moisture,
              burst factor), in-process checks on the automatic line (bond, print, dimensions),
              and finished-goods lot testing (bursting strength, Cobb moisture, box compression)
              — all documented under our ISO 9001:2015 system with reports supplied on request.
            </p>
          </div>

          <div className="shead rv" style={{ marginTop: 56 }}>
            <span className="kicker">Live from the lab</span>
            <h2>The tests behind every dispatch.</h2>
          </div>

          <Gauges items={gauges} />

          <div className="tsplit" style={{ marginTop: 72 }}>
            <div className="rv">
              <span className="kicker">Three-Stage Control</span>
              <h2 style={{ marginBottom: 18 }}>Where we check, and why.</h2>
              <div className="tl">
                <div className="tli">
                  <span>Stage 1</span>
                  <b>Incoming paper inspection</b>
                  <p>
                    GSM, moisture % and burst factor verified on every reel before use — bad
                    paper never becomes your box.
                  </p>
                </div>
                <div className="tli">
                  <span>Stage 2</span>
                  <b>In-process checks</b>
                  <p>
                    Bond strength, flute profile, print registration and dimensions monitored
                    continuously on the line.
                  </p>
                </div>
                <div className="tli">
                  <span>Stage 3</span>
                  <b>Finished-goods lot testing</b>
                  <p>BS, Cobb and compression tests per lot; results recorded and shared with buyers on request.</p>
                </div>
              </div>
            </div>
            <div className="rv rv2">
              <div className="card" style={{ padding: 34 }}>
                <span className="kicker">Certification</span>
                <h3 style={{ marginBottom: 10 }}>ISO 9001:2015</h3>
                <p style={{ fontSize: 15 }}>
                  Our quality management system is certified to ISO 9001:2015 — covering
                  documentation, traceability, corrective action and continuous improvement.
                  Certificate copies are provided for vendor registration.
                </p>
                <div className="tests" style={{ marginTop: 20 }}>
                  <span className="test">Lot test reports</span>
                  <span className="test">Spec sheets per SKU</span>
                  <span className="test">Traceability</span>
                  <span className="test">CAPA process</span>
                </div>
                <Link className="btn btn-primary" style={{ marginTop: 24 }} href="/contact">
                  Request certificate & sample report
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DarkCta />
    </>
  );
}
