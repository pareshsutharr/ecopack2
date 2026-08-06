import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { industries } from "@/data/industries";
import { SITE_URL, organizationJsonLd } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Industries We Serve — Corrugated Packaging for 21 Sectors | Bhaavya Ecopack",
  description:
    "Corrugated packaging engineered for 21 industries: pharma, FMCG, frozen foods, agriculture, automotive, textiles, electronics, solar, ceramics, export, e-commerce and more — from Surat, Gujarat.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries We Serve — Corrugated Packaging for 21 Sectors | Bhaavya Ecopack",
    description:
      "Corrugated packaging engineered for 21 industries: pharma, FMCG, frozen foods, agriculture, automotive, textiles, electronics, solar, ceramics, export, e-commerce and more — from Surat, Gujarat.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Industries" },
  ],
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd, breadcrumbJsonLd]} />

      <section className="phero">
        <div className="wrap">
          <nav className="crumbs">
            <Link href="/">Home</Link> <span>›</span> <b>Industries</b>
          </nav>
          <span className="kicker">Industries</span>
          <h1>21 industries. One engineering standard.</h1>
          <div className="qa">
            <b>Which industries does Bhaavya Ecopack serve?</b>
            <p>
              We engineer corrugated packaging for 21 sectors — from pharmaceutical and frozen
              foods to automotive, solar, ceramics and export — each with challenge-specific
              board grades, structures and testing, supplied across the 160 km industrial belt
              around Surat.
            </p>
          </div>
        </div>
      </section>

      <section className="sec-soft">
        <div className="wrap">
          <div className="hubgrid">
            {industries.map((ind) => (
              <Link className="hcard ic" href={`/industries/${ind.slug}`} key={ind.slug}>
                <i>{ind.fullName}</i>
                <span>
                  <b>{ind.icon}</b>
                  <span>
                    {ind.challenges[0]} · {ind.challenges[1].toLowerCase()}
                  </span>
                  <span className="go">See solutions →</span>
                </span>
              </Link>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 44 }}>
            <Link className="btn btn-primary" href="/contact">
              Discuss your industry&apos;s packaging
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
