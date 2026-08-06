import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { serviceAreaGroups } from "@/data/locations";
import { SITE_URL, organizationJsonLd } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas | 160 km Core Radius + Pan-India Supply — Bhaavya Ecopack",
  description:
    "Bhaavya Ecopack delivers corrugated boxes across a committed 160 km radius around Surat, plus a pan-India full-truck supply network covering 23 cities.",
  alternates: { canonical: "/service-areas" },
  openGraph: {
    title: "Service Areas | 160 km Core Radius + Pan-India Supply — Bhaavya Ecopack",
    description:
      "Bhaavya Ecopack delivers corrugated boxes across a committed 160 km radius around Surat, plus a pan-India full-truck supply network covering 23 cities.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Service Areas" },
  ],
};

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd, breadcrumbJsonLd]} />

      <section className="phero">
        <div className="wrap">
          <nav className="crumbs">
            <Link href="/">Home</Link> <span>›</span> <b>Service Areas</b>
          </nav>
          <span className="kicker">Service Areas</span>
          <h1>A 160 km committed radius. A pan-India network.</h1>
          <div className="qa">
            <b>Where does Bhaavya Ecopack deliver corrugated boxes?</b>
            <p>
              Two tiers: a committed 160 km radius around our Kosamba, Surat plant — Surat,
              Hazira, Navsari, Bharuch, Ankleshwar, Valsad, Vapi, Daman, Silvassa, Vadodara — with
              scheduled routes and 4-business-hour quotations; and a pan-India supply network
              covering Morbi, Rajkot, Mundra, Delhi NCR, Jaipur, Indore, Nagpur, Pune, Nashik,
              Bengaluru, Hyderabad, Chennai and Kolkata through planned full-truck programmes.
            </p>
          </div>
        </div>
      </section>

      <section className="sec-soft">
        <div className="wrap">
          {serviceAreaGroups.map((group) => (
            <div key={group.name}>
              <div className="grouphead">{group.name}</div>
              <div className="hubgrid">
                {group.cards.map((c) => (
                  <Link className="hcard" href={`/service-areas/${c.slug}`} key={c.slug}>
                    <b>{c.label}</b>
                    <span>{c.teaser}</span>
                    <span className="go">
                      {group.name.startsWith("Core") || group.name.startsWith("Gujarat")
                        ? group.name.startsWith("Gujarat")
                          ? "Corridor details →"
                          : "Local details →"
                        : "Supply details →"}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sec-dark cta">
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2>Wherever you manufacture, we can pack it.</h2>
          <p className="lead" style={{ margin: "14px auto 26px", maxWidth: 640 }}>
            Core-radius scheduled routes or pan-India full-truck programmes — quotations in 4
            business hours either way.
          </p>
          <Link className="btn btn-primary" href="/contact">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
