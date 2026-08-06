import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import DarkCta from "@/components/DarkCta";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, organizationJsonLd } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sitemap | Bhaavya Ecopack",
  description: "All pages of the Bhaavya Ecopack website.",
  alternates: { canonical: "/sitemap" },
  openGraph: {
    title: "Sitemap | Bhaavya Ecopack",
    description: "All pages of the Bhaavya Ecopack website.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Sitemap" },
  ],
};

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Manufacturing Facility", href: "/manufacturing-facility" },
  { label: "Manufacturing Process", href: "/manufacturing-process" },
  { label: "Quality Assurance", href: "/quality-assurance" },
  { label: "Packaging Design", href: "/packaging-design" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Knowledge Hub", href: "/knowledge-hub" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Service Area: Surat", href: "/service-areas/surat" },
  { label: "Service Area: Ahmedabad", href: "/service-areas/ahmedabad" },
  { label: "Service Area: Ankleshwar–Vapi", href: "/service-areas/vapi-ankleshwar" },
  { label: "Service Area: Mumbai", href: "/service-areas/mumbai" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export default function SitemapPage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd, breadcrumbJsonLd]} />

      <PageHero
        breadcrumb="Sitemap"
        kicker="Sitemap"
        title="Every page, one place."
        lead="The complete structure of the Bhaavya Ecopack website."
      />

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h3 style={{ margin: "0 0 10px" }}>Blog — 78 Guides</h3>
          <p>
            <Link href="/blog">
              <b>Blog home</b>
            </Link>{" "}
            · <Link href="/blog/what-is-a-corrugated-box">What is a corrugated box?</Link> ·{" "}
            <Link href="/blog/3-ply-vs-5-ply-vs-7-ply">3 vs 5 vs 7 ply</Link> ·{" "}
            <Link href="/blog/how-humidity-destroys-box-strength">Humidity & box strength</Link> ·{" "}
            <Link href="/blog/gst-hsn-corrugated-boxes-2026">GST & HSN 2026</Link> ·{" "}
            <Link href="/blog/box-strength-bct-ect-bursting-explained">BCT/ECT/Bursting</Link> ·{" "}
            <Link href="/blog/moisture-resistant-corrugated-boxes-explained">
              Moisture-resistant explained
            </Link>{" "}
            · plus 28 product, 21 industry and 23 city guides.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <ul style={{ listStyle: "none", columns: 2, maxWidth: 700 }}>
            {pages.map((p) => (
              <li style={{ marginBottom: 10 }} key={p.href}>
                <Link
                  href={p.href}
                  style={{ color: "var(--green-700)", fontWeight: 600, textDecoration: "none" }}
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <DarkCta />
    </>
  );
}
