import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import DarkCta from "@/components/DarkCta";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, organizationJsonLd } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Knowledge Hub | Corrugated Packaging Guides & Buyer Tools — Bhaavya Ecopack",
  description:
    "Free corrugated packaging knowledge: buyer's guide, export packaging guide, board spec chart, measurement guide, monsoon checklist and RFQ template.",
  alternates: { canonical: "/knowledge-hub" },
  openGraph: {
    title: "Knowledge Hub | Corrugated Packaging Guides & Buyer Tools — Bhaavya Ecopack",
    description:
      "Free corrugated packaging knowledge: buyer's guide, export packaging guide, board spec chart, measurement guide, monsoon checklist and RFQ template.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Knowledge Hub" },
  ],
};

const downloads = [
  {
    tag: "PDF Guide",
    title: "Corrugated Box Buyer's Guide",
    text: "Ply, flute, GSM and box styles — how to specify exactly what you need.",
  },
  {
    tag: "PDF Guide",
    title: "Export Packaging Guide",
    text: "Sea-freight moisture checklist, container sizing and marking norms for Indian exporters.",
  },
  {
    tag: "PDF Chart",
    title: "Board Specification Chart",
    text: "Ply/flute/GSM/load reference — the cheat sheet for writing your next RFQ.",
  },
  {
    tag: "PDF Guide",
    title: "Box Measurement Guide",
    text: "L × W × H, internal vs external — measure right the first time.",
  },
  {
    tag: "PDF Checklist",
    title: "Monsoon Packaging Checklist",
    text: "Ten checks before the humidity season hits your warehouse.",
  },
  {
    tag: "XLSX Template",
    title: "RFQ Template",
    text: "A ready spreadsheet that makes any converter quote you accurately.",
  },
];

export default function KnowledgeHubPage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd, breadcrumbJsonLd]} />

      <PageHero
        breadcrumb="Knowledge Hub"
        kicker="Knowledge Hub"
        title="Guides, tools and references for packaging buyers."
        lead="Everything your team needs to specify, compare and buy corrugated packaging with confidence — written by the people who make it."
      />

      <section>
        <div className="wrap">
          <div className="qa">
            <b>What is the difference between 3-ply, 5-ply and 7-ply boxes?</b>
            <p>
              3-ply (single wall) suits loads up to ~15 kg like retail and e-commerce cartons;
              5-ply (double wall) handles ~15–40 kg for shipping and export; 7-ply (triple wall)
              is for 40 kg+ industrial loads and can replace wooden crates. See the full
              interactive guide on our homepage Board Selection section.
            </p>
          </div>

          <div className="grid3" style={{ marginTop: 48 }}>
            {downloads.map((d, i) => (
              <Link
                className={`card dcard rv${i % 3 === 1 ? " rv2" : i % 3 === 2 ? " rv3" : ""}`}
                style={{ padding: 32, display: "flex", flexDirection: "column", textDecoration: "none" }}
                href="/contact"
                key={d.title}
              >
                <span
                  className="ft"
                  style={{
                    fontFamily: "var(--font-archivo)",
                    fontSize: 11,
                    letterSpacing: ".18em",
                    color: "#fff",
                    background: "var(--brown-600)",
                    borderRadius: 6,
                    padding: "5px 10px",
                    alignSelf: "flex-start",
                    marginBottom: 20,
                  }}
                >
                  {d.tag}
                </span>
                <h3 style={{ fontSize: 18, marginBottom: 8 }}>{d.title}</h3>
                <p style={{ fontSize: 14, marginBottom: 22 }}>{d.text}</p>
                <span className="link" style={{ marginTop: "auto" }}>
                  Request download
                </span>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 72 }} className="rv">
            <span className="kicker">Quick references</span>
            <h2 style={{ marginBottom: 20 }}>Answers buyers search for.</h2>
          </div>
          <div className="tsplit">
            <div className="rv">
              <div className="qa">
                <b>What is GSM in packaging paper?</b>
                <p>
                  GSM (grams per square metre) is the weight of the paper used in the box liners
                  and flutes. Higher GSM generally means stronger, stiffer board — our liners
                  range from 100 to 350+ GSM depending on the application.
                </p>
              </div>
              <div className="qa">
                <b>What is the Cobb test?</b>
                <p>
                  The Cobb test measures how much water (g/m²) a board surface absorbs in a set
                  time. Lower Cobb values mean better moisture resistance — it is the standard
                  verification for our moisture-resistant boxes.
                </p>
              </div>
            </div>
            <div className="rv rv2">
              <div className="qa">
                <b>Corrugated vs cardboard — what&apos;s the difference?</b>
                <p>
                  &quot;Cardboard&quot; is a loose term; corrugated board is an engineered
                  sandwich of flat liners and a fluted middle layer, giving far higher
                  strength-to-weight. Shipping boxes are corrugated, not plain cardboard.
                </p>
              </div>
              <div className="qa">
                <b>What is BCT / box compression strength?</b>
                <p>
                  BCT (Box Compression Test) measures the top-to-bottom load a box withstands —
                  the number that decides how high you can safely stack pallets in a warehouse or
                  container.
                </p>
              </div>
            </div>
          </div>
          <p className="rv" style={{ marginTop: 36 }}>
            Deeper dives on the{" "}
            <Link href="/blog" style={{ color: "var(--green-700)", fontWeight: 600 }}>
              blog
            </Link>{" "}
            · common questions in{" "}
            <Link href="/faqs" style={{ color: "var(--green-700)", fontWeight: 600 }}>
              FAQs
            </Link>
            .
          </p>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ maxWidth: 920 }}>
          <div className="shead">
            <span className="kicker">Standards Quick Answers</span>
            <h2>The numbers buyers keep asking for.</h2>
          </div>
          <div className="qa">
            <b>What does IS 2771:2022 require?</b>
            <p>
              India&apos;s governing corrugated standard ties board type to load: 3-ply up to 15
              kg (burst 6–10 kgf/cm²), 5-ply to 40 kg (12–17), 7-ply to 75 kg (24–35) — and, new
              in 2022, mandates Edge Crush Test minimums of 3.0–12.4 kN/m. Waterproofness and
              compression are buyer-specified extras, which is exactly where our
              moisture-resistant grades live.
            </p>
          </div>
          <div className="qa">
            <b>What is the GST on corrugated boxes now?</b>
            <p>
              5% under HSN 4819, reduced from 12% effective 22 September 2025 (56th GST Council).
              Printed corrugated boxes classify the same.
            </p>
          </div>
          <div className="qa">
            <b>How much strength do boxes lose in humidity?</b>
            <p>
              30–40% at 80% RH and over 50% at 90% RH — sea containers and monsoon warehouses
              live in that zone, which is why export work specifies Cobb ≤30–40 g/m².
            </p>
          </div>
          <div className="pills" style={{ marginTop: 18 }}>
            <Link className="pill alt" href="/blog/box-strength-bct-ect-bursting-explained">
              Box strength explained →
            </Link>
            <Link className="pill alt" href="/blog/how-humidity-destroys-box-strength">
              Humidity science →
            </Link>
            <Link className="pill alt" href="/blog/gst-hsn-corrugated-boxes-2026">
              GST &amp; HSN 2026 →
            </Link>
          </div>
        </div>
      </section>

      <DarkCta />
    </>
  );
}
