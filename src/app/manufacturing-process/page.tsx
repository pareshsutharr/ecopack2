import type { Metadata } from "next";
import Link from "next/link";
import DarkCta from "@/components/DarkCta";
import ProcessFlow from "@/components/ProcessFlow";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, organizationJsonLd } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Manufacturing Process | How Corrugated Boxes Are Made — Bhaavya Ecopack",
  description:
    "Step-by-step corrugated box manufacturing at Bhaavya Ecopack: paper testing, automatic corrugation, conditioning, printing, die-cutting and final lot testing before dispatch.",
  alternates: { canonical: "/manufacturing-process" },
  openGraph: {
    title: "Manufacturing Process | How Corrugated Boxes Are Made — Bhaavya Ecopack",
    description:
      "Step-by-step corrugated box manufacturing at Bhaavya Ecopack: paper testing, automatic corrugation, conditioning, printing, die-cutting and final lot testing before dispatch.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Capabilities" },
    { "@type": "ListItem", position: 3, name: "Manufacturing Process" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does corrugated box production take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sampling typically takes days, and production runs are scheduled with committed dispatch dates after sample approval. Repeat orders run faster on our fully automatic line.",
      },
    },
  ],
};

const steps = [
  {
    n: "01",
    title: "Paper Selection & Testing",
    text: "Kraft reels verified for GSM, moisture content and burst factor before they touch the corrugator.",
    gate: "Incoming QC: GSM · moisture · BF",
  },
  {
    n: "02",
    title: "Corrugation & Board Forming",
    text: "Fluting and bonding on the automatic line; heat, glue and pressure controlled continuously for uniform board.",
    gate: "In-line: bond strength · flute profile",
  },
  {
    n: "03",
    title: "Curing & Conditioning",
    text: "Board rested and conditioned so it converts cleanly and holds its engineered strength.",
    gate: "Check: warp · caliper",
  },
  {
    n: "04",
    title: "Printing, Slotting & Creasing",
    text: "Flexo print with proof-matched colour; slots and creases placed to the locked dieline.",
    gate: "Check: print registration · crease depth",
  },
  {
    n: "05",
    title: "Die-Cutting / Folding & Joining",
    text: "Structures cut, folded and joined — glued, stitched or taped per specification.",
    gate: "Check: joint strength · dimensions",
  },
  {
    n: "06",
    title: "Final Testing, Packing & Dispatch",
    text: "Lot-tested (BS, Cobb, compression), counted, palletized and dispatched on the committed date with documents.",
    gate: "Exit QC: lot test report issued",
  },
];

export default function ManufacturingProcessPage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd, breadcrumbJsonLd, faqJsonLd]} />

      <section className="phero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link> &nbsp;/&nbsp; <Link href="/infrastructure">Capabilities</Link>{" "}
            &nbsp;/&nbsp; Manufacturing Process
          </div>
          <span className="kicker">Manufacturing Process</span>
          <h1>From kraft reel to dispatched pallet — watch how a box is made.</h1>
          <p className="lead">
            Scroll through our production workflow. Every stage carries a quality gate, so
            problems are caught where they start, not at your dock.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="qa">
            <b>How are corrugated boxes manufactured at Bhaavya Ecopack?</b>
            <p>
              Corrugated boxes at Bhaavya Ecopack move through six stages — paper testing,
              automatic corrugation, board conditioning, printing and creasing, die-cutting and
              joining, and final lot testing before dispatch — with a documented quality gate at
              every stage under ISO 9001:2015.
            </p>
          </div>

          <ProcessFlow steps={steps} />

          <p className="rv" style={{ marginTop: 8 }}>
            See how we verify each gate on the{" "}
            <Link href="/quality-assurance" style={{ color: "var(--green-700)", fontWeight: 600 }}>
              Quality Assurance page
            </Link>
            , or the machinery behind it under{" "}
            <Link href="/infrastructure" style={{ color: "var(--green-700)", fontWeight: 600 }}>
              Infrastructure
            </Link>
            .
          </p>
        </div>
      </section>

      <DarkCta />
    </>
  );
}
