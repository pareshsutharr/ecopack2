import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import { locations, getLocation, locationTopProducts } from "@/data/locations";
import { moistureParagraphs, sustainabilityParagraphs } from "@/data/product-boilerplate";
import { SITE_URL, organizationJsonLd } from "@/lib/constants";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: `/service-areas/${location.slug}` },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      type: "website",
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_URL}/service-areas` },
      { "@type": "ListItem", position: 3, name: location.cityLabel },
    ],
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bhaavya Ecopack",
    image: `${SITE_URL}/assets/logo.png`,
    telephone: "+91-99099-62080",
    email: "bhaavyaecopack@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Block No. 250, Near Shital Hotel, Village Sava, Kosamba",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      postalCode: "394120",
      addressCountry: "IN",
    },
    areaServed: [{ "@type": "City", name: location.cityLabel }, { "@type": "Country", name: "India" }],
    geo: { "@type": "GeoCoordinates", latitude: 21.46, longitude: 72.96 },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={[organizationJsonLd, breadcrumbJsonLd, localBusinessJsonLd, faqJsonLd]} />

      <section className="phero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>›</span> <Link href="/service-areas">Service Areas</Link>{" "}
            <span>›</span> <b>{location.cityLabel}</b>
          </nav>
          <span className="kicker">{location.kicker}</span>
          <h1>Corrugated boxes in {location.cityLabel}</h1>
          <div className="qa">
            <b>Does Bhaavya Ecopack supply corrugated boxes in {location.cityLabel}?</b>
            <p>{location.qaAnswer}</p>
          </div>
          <p className="lead" style={{ marginTop: 16 }}>
            {location.heroIntro}
          </p>
          <div className="ctas" style={{ marginTop: 24 }}>
            <Link className="btn btn-primary" href="/contact">
              Get a {location.cityLabel} Quote
            </Link>
            <a className="btn btn-secondary" href="https://wa.me/919909962080">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="sec-soft">
        <div className="wrap split">
          <div>
            <h2 style={{ marginBottom: 16 }}>Who we serve in {location.cityLabel}</h2>
            {location.whoWeServe.map((w) => (
              <div className="check" key={w}>
                {w}
              </div>
            ))}
            <h2 style={{ margin: "26px 0 12px" }}>Why local buyers switch to us</h2>
            <p className="lead" style={{ fontSize: 15.5 }}>
              {moistureParagraphs[0]}
            </p>
          </div>
          <div>
            <h2 style={{ marginBottom: 16 }}>Most ordered from {location.cityLabel}</h2>
            <div className="pills">
              {locationTopProducts.map((p) => (
                <Link className="pill alt" href={p.href} key={p.href}>
                  {p.label}
                </Link>
              ))}
            </div>
            <h2 style={{ margin: "26px 0 12px" }}>Commercials at a glance</h2>
            <p className="lead" style={{ fontSize: 15.5 }}>
              {sustainabilityParagraphs[1]}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2 style={{ marginBottom: 16 }}>{location.cityLabel} — FAQs</h2>
          <FaqAccordion items={location.faqs} />
          <p style={{ marginTop: 22 }}>
            <Link className="pill alt" href={`/blog/corrugated-box-manufacturer-${location.slug}`}>
              Full {location.cityLabel} buyer&apos;s guide (2026) →
            </Link>
          </p>
        </div>
      </section>

      <section className="sec-dark cta">
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2>Supplying {location.cityLabel}, on schedule.</h2>
          <p className="lead" style={{ margin: "14px auto 26px", maxWidth: 640 }}>
            Engineered corrugated packaging from one accountable plant — quotations in 4 business
            hours.
          </p>
          <Link className="btn btn-primary" href="/contact">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
