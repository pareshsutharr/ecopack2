import type { Metadata } from "next";
import Link from "next/link";
import DarkCta from "@/components/DarkCta";
import BoxConfigurator from "@/components/BoxConfigurator";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, organizationJsonLd } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Packaging Design & 3D Box Configurator | Free Structural Design — Bhaavya Ecopack",
  description:
    "Configure your corrugated box in interactive 3D — size, ply and finish — then get free structural design, dielines, inserts and physical prototypes from Bhaavya Ecopack.",
  alternates: { canonical: "/packaging-design" },
  openGraph: {
    title: "Packaging Design & 3D Box Configurator | Free Structural Design — Bhaavya Ecopack",
    description:
      "Configure your corrugated box in interactive 3D — size, ply and finish — then get free structural design, dielines, inserts and physical prototypes from Bhaavya Ecopack.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Capabilities" },
    { "@type": "ListItem", position: 3, name: "Packaging Design" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the packaging design service really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — structural design, dielines and physical sampling are free for genuine enquiries; you approve a real sample before committing to production.",
      },
    },
  ],
};

export default function PackagingDesignPage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd, breadcrumbJsonLd, faqJsonLd]} />

      <section className="phero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link> &nbsp;/&nbsp; <Link href="/infrastructure">Capabilities</Link>{" "}
            &nbsp;/&nbsp; Packaging Design
          </div>
          <span className="kicker">Packaging Design</span>
          <h1>Design it in 3D. We&apos;ll engineer and sample it.</h1>
          <p className="lead">
            Use the interactive configurator to shape your box — size, ply and finish — then
            send it straight into an RFQ. Our structural team takes it from concept to tested
            sample.
          </p>
        </div>
      </section>

      <section className="sec-soft" id="configurator">
        <div className="wrap">
          <div className="shead center rv">
            <span className="kicker">Interactive · 3D Box Configurator</span>
            <h2>Design your box in 3D — Length × Width × Height, in cm or inches.</h2>
            <p className="lead">
              Type any dimensions (no upper limit — every box is made to order), pick ply and
              finish, and watch it build live. Drag to rotate.
            </p>
          </div>
          <BoxConfigurator />
        </div>
      </section>

      <DarkCta />
    </>
  );
}
