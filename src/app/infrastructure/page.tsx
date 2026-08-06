import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import DarkCta from "@/components/DarkCta";
import AnimatedCounter from "@/components/AnimatedCounter";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, organizationJsonLd } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Infrastructure | Fully Automatic Corrugation Plant, Kosamba Surat — Bhaavya Ecopack",
  description:
    "Inside Bhaavya Ecopack's infrastructure: automatic corrugator, flexo printing, die-cutting, ISO-certified testing lab, warehousing and highway-side dispatch at Kosamba, Surat.",
  alternates: { canonical: "/infrastructure" },
  openGraph: {
    title: "Infrastructure | Fully Automatic Corrugation Plant, Kosamba Surat — Bhaavya Ecopack",
    description:
      "Inside Bhaavya Ecopack's infrastructure: automatic corrugator, flexo printing, die-cutting, ISO-certified testing lab, warehousing and highway-side dispatch at Kosamba, Surat.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Capabilities" },
    { "@type": "ListItem", position: 3, name: "Infrastructure" },
  ],
};

const machinery = [
  {
    section: "Corrugation",
    equipment: "Fully automatic corrugator line",
    capability: "3/5/7-ply board, consistent bonding & profile",
  },
  {
    section: "Printing & Converting",
    equipment: "Flexo printer–slotter",
    capability: "Multi-colour print, slotting, creasing in-line",
  },
  {
    section: "Die-Cutting",
    equipment: "Rotary / platen die-cutting",
    capability: "Precision structures, inserts & partitions",
  },
  {
    section: "Finishing",
    equipment: "Folder-gluer & stitching",
    capability: "Glued, stitched or taped joints to spec",
  },
  {
    section: "Quality Lab",
    equipment: "BS, Cobb, GSM & compression testing",
    capability: "Lot testing with reports under ISO 9001:2015",
  },
  {
    section: "Warehousing",
    equipment: "Covered RM & FG storage",
    capability: "Paper stored dry; FG buffer stock for contracts",
  },
];

const gallery = [
  {
    src: "https://static.wixstatic.com/media/3663c4_bd43ef176bce44f8997488b7a7abf373~mv2.jpg/v1/fit/w_960,h_577,q_90,enc_avif,quality_auto/plant.jpg",
    alt: "Finished-goods staging — Bhaavya Ecopack",
    caption: "Finished-goods staging",
  },
  {
    src: "https://static.wixstatic.com/media/3663c4_a6bcd38138534e4cbcc30ace6d7c3217~mv2.jpg/v1/fit/w_960,h_577,q_90,enc_avif,quality_auto/plant.jpg",
    alt: "Dispatch-ready inventory — Bhaavya Ecopack",
    caption: "Dispatch-ready inventory",
  },
  {
    src: "https://static.wixstatic.com/media/3663c4_0c72922e1a5c4039a1454cc006716b71~mv2.jpg/v1/fit/w_960,h_577,q_90,enc_avif,quality_auto/plant.jpg",
    alt: "Plant floor, Kosamba facility — Bhaavya Ecopack",
    caption: "Plant floor, Kosamba facility",
  },
];

export default function InfrastructurePage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd, breadcrumbJsonLd]} />

      <section className="phero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link> &nbsp;/&nbsp; <Link href="/infrastructure">Capabilities</Link>{" "}
            &nbsp;/&nbsp; Infrastructure
          </div>
          <span className="kicker">Infrastructure</span>
          <h1>A fully automatic plant on Gujarat&apos;s industrial corridor.</h1>
          <p className="lead" style={{ maxWidth: 760 }}>
            A fully automatic corrugated production facility on nearly 1,00,000 sq ft at Kosamba
            — space for the complete machine line, high output, and an adequate inventory of
            ready-to-dispatch finished goods, right beside the National Highway.
          </p>
          <p className="lead">
            Purpose-built infrastructure at Kosamba, Surat — high-speed automatic corrugation,
            in-house converting and printing, a testing lab, covered warehousing and
            highway-side dispatch.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="qa">
            <b>What infrastructure does Bhaavya Ecopack operate?</b>
            <p>
              Bhaavya Ecopack runs a fully automatic corrugation plant in Kosamba, Surat with
              2,000 MT/month capacity today — 8,000 MT/month from October 2026 — including an
              automatic corrugator line, flexo printing and converting machinery, die-cutting,
              an ISO 9001:2015 testing lab, covered raw-material and finished-goods warehousing,
              and highway-adjacent dispatch bays.
            </p>
          </div>

          <div className="grid3" style={{ marginTop: 48 }}>
            <div className="card rv" style={{ padding: 30 }}>
              <AnimatedCounter end={25000} />
              <span
                style={{
                  display: "block",
                  fontSize: 13,
                  color: "var(--gray-500)",
                  textTransform: "uppercase",
                  letterSpacing: ".06em",
                }}
              >
                MT annual capacity
              </span>
            </div>
            <div className="card rv rv2" style={{ padding: 30 }}>
              <b style={{ fontFamily: "var(--font-archivo)", fontSize: 32, color: "var(--ink)" }}>
                100%
              </b>
              <span
                style={{
                  display: "block",
                  fontSize: 13,
                  color: "var(--gray-500)",
                  textTransform: "uppercase",
                  letterSpacing: ".06em",
                }}
              >
                Automatic corrugation
              </span>
            </div>
            <div className="card rv rv3" style={{ padding: 30 }}>
              <b style={{ fontFamily: "var(--font-archivo)", fontSize: 32, color: "var(--ink)" }}>
                NH-side
              </b>
              <span
                style={{
                  display: "block",
                  fontSize: 13,
                  color: "var(--gray-500)",
                  textTransform: "uppercase",
                  letterSpacing: ".06em",
                }}
              >
                Dispatch location
              </span>
            </div>
          </div>

          <div style={{ marginTop: 64 }} className="rv">
            <span className="kicker">Plant & Machinery</span>
            <h2 style={{ marginBottom: 26 }}>Production capability</h2>
            <table className="mtable">
              <tbody>
                <tr>
                  <th>Section</th>
                  <th>Equipment</th>
                  <th>Capability</th>
                </tr>
                {machinery.map((row) => (
                  <tr key={row.section}>
                    <td>{row.section}</td>
                    <td>{row.equipment}</td>
                    <td>{row.capability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="gal" style={{ marginTop: 26 }}>
              {gallery.map((g) => (
                <div className="g" key={g.src}>
                  <Image src={g.src} alt={g.alt} width={960} height={577} />
                  <span>{g.caption}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 64 }} className="rv">
            <span className="kicker">Location Advantage</span>
            <h2 style={{ marginBottom: 14 }}>Minutes from the highway. Hours from the ports.</h2>
            <p style={{ maxWidth: "70ch" }}>
              Our plant sits beside Gujarat&apos;s national-highway corridor at Kosamba — between
              Surat and Bharuch, with direct routes to Hazira, Dahej, Mundra and, via NH-48, to
              Mumbai&apos;s Nhava Sheva. For buyers, that means shorter lead times, lower freight
              and dispatches that align with vessel cut-offs. Explore our{" "}
              <Link href="/service-areas" style={{ color: "var(--green-700)", fontWeight: 600 }}>
                service areas
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <DarkCta />
    </>
  );
}
