import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getProduct } from "@/data/products";
import { SITE_URL, organizationJsonLd } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Corrugated Box Products — 28 Packaging Types | Bhaavya Ecopack Surat",
  description:
    "Explore 28 corrugated packaging products manufactured in Surat: shipping boxes, moisture-resistant & waterproof boxes, heavy-duty, printed, die-cut, trays, inserts and industry-specific packs.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Corrugated Box Products — 28 Packaging Types | Bhaavya Ecopack Surat",
    description:
      "Explore 28 corrugated packaging products manufactured in Surat: shipping boxes, moisture-resistant & waterproof boxes, heavy-duty, printed, die-cut, trays, inserts and industry-specific packs.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Products" },
  ],
};

// Curated display order from the original site (not alphabetical).
const groups = [
  {
    name: "Core Corrugated Range",
    slugs: [
      "corrugated-shipping-boxes",
      "corrugated-packaging-solutions",
      "heavy-duty-corrugated-boxes",
      "moisture-resistant-corrugated-boxes",
      "waterproof-corrugated-packaging",
      "export-packaging",
      "industrial-packaging",
      "printed-corrugated-boxes",
      "custom-corrugated-packaging",
    ],
  },
  {
    name: "Industry-Specific Packaging",
    slugs: [
      "pharmaceutical-packaging-boxes",
      "frozen-food-packaging-boxes",
      "fmcg-packaging",
      "e-commerce-packaging",
      "fruit-and-vegetable-boxes",
      "shelf-ready-packaging",
      "automotive-packaging",
      "auto-component-packaging",
      "white-goods-packaging",
      "solar-panel-packaging",
      "glass-packaging",
      "glass-and-ceramic-packaging",
      "textile-packaging",
      "yarn-packaging",
    ],
  },
  {
    name: "Formats & Components",
    slugs: ["corrugated-sheets", "corrugated-trays", "corrugated-inserts", "corrugated-dividers", "die-cut-boxes"],
  },
];

function teaser(text: string, max = 100) {
  return text.length > max ? text.slice(0, max).trimEnd() + "…" : text;
}

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd, breadcrumbJsonLd]} />

      <section className="phero">
        <div className="wrap">
          <nav className="crumbs">
            <Link href="/">Home</Link> <span>›</span> <b>Products</b>
          </nav>
          <span className="kicker">Products</span>
          <h1>Corrugated packaging, engineered to specification.</h1>
          <div className="qa">
            <b>What does Bhaavya Ecopack manufacture?</b>
            <p>
              28 corrugated product types across three families — core transit &amp; export
              boxes, industry-specific packaging, and formats &amp; components — all made to
              order at our ISO 9001:2015 plant in Kosamba, Surat with quotations in 4 business
              hours.
            </p>
          </div>
        </div>
      </section>

      <section className="sec-soft">
        <div className="wrap">
          {groups.map((group) => (
            <div key={group.name}>
              <div className="grouphead">{group.name}</div>
              <div className="hubgrid">
                {group.slugs.map((slug) => {
                  const p = getProduct(slug);
                  if (!p) return null;
                  return (
                    <Link className="hcard" href={`/products/${p.slug}`} key={p.slug}>
                      <b>{p.title}</b>
                      <span>{teaser(p.whatIsAnswer)}</span>
                      <span className="go">View details →</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
          <p style={{ textAlign: "center", marginTop: 44 }}>
            <Link className="btn btn-primary" href="/contact">
              Not sure which product? Ask our engineers
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
