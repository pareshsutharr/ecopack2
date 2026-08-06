import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { blogListingGroups } from "@/data/blog";
import { SITE_URL, organizationJsonLd } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog — 78 Corrugated Packaging Guides | Bhaavya Ecopack",
  description:
    "Engineering-first answers for packaging buyers: corrugated fundamentals and IS 2771:2022 standards, moisture science, GST/HSN 2026, plus a dedicated 2026 buyer's guide for each of our 28 products, all 21 industries and 23 cities we serve.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — 78 Corrugated Packaging Guides | Bhaavya Ecopack",
    description:
      "Engineering-first answers for packaging buyers: corrugated fundamentals and IS 2771:2022 standards, moisture science, GST/HSN 2026, plus a dedicated 2026 buyer's guide for each of our 28 products, all 21 industries and 23 cities we serve.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Blog" },
  ],
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd, breadcrumbJsonLd]} />

      <section className="phero">
        <div className="wrap">
          <nav className="crumbs">
            <Link href="/">Home</Link> <span>›</span> <b>Blog</b>
          </nav>
          <span className="kicker">Knowledge · Blog</span>
          <h1>78 guides. Zero fluff.</h1>
          <div className="qa">
            <b>What does the Bhaavya Ecopack blog cover?</b>
            <p>
              Engineering-first answers for packaging buyers: corrugated fundamentals and IS
              2771:2022 standards, moisture science, GST/HSN 2026, plus a dedicated 2026 buyer&apos;s
              guide for each of our 28 products, all 21 industries and 23 cities we serve.
            </p>
          </div>
        </div>
      </section>

      <section className="sec-soft">
        <div className="wrap">
          {blogListingGroups.map((group) => (
            <div key={group.name}>
              <div className="grouphead">{group.name}</div>
              <div className="hubgrid">
                {group.cards.map((c, i) => (
                  <Link className="hcard" href={`/blog/${c.slug}`} key={`${c.slug}-${i}`}>
                    <b>{c.title}</b>
                    {c.sub && <span>{c.sub}</span>}
                    <span className="go">Read →</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
