import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import DarkCta from "@/components/DarkCta";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, organizationJsonLd } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Request a Quote | Bhaavya Ecopack, Kosamba Surat",
  description:
    "Request a corrugated box quotation from Bhaavya Ecopack — response within 4 business hours. Call +91 99099 62080, WhatsApp, or send the detailed RFQ form.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact & Request a Quote | Bhaavya Ecopack, Kosamba Surat",
    description:
      "Request a corrugated box quotation from Bhaavya Ecopack — response within 4 business hours. Call +91 99099 62080, WhatsApp, or send the detailed RFQ form.",
    type: "website",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bhaavya Ecopack",
  image: `${SITE_URL}/assets/logo.png`,
  telephone: "+91-99099-62080",
  email: "bhaavyaecopack@gmail.com",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Block No. 250, Near Shital Hotel, Village Sava, Kosamba",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    postalCode: "394120",
    addressCountry: "IN",
  },
  openingHours: "Mo-Sa 09:00-19:00",
  url: `${SITE_URL}/contact`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Contact" },
  ],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd, localBusinessJsonLd, breadcrumbJsonLd]} />

      <PageHero
        breadcrumb="Contact"
        kicker="Contact & RFQ"
        title="Tell us what you ship. We'll engineer the box."
        lead="Quotation within 4 business hours — with free structural design and a physical sample before you commit. Call, WhatsApp or send the detailed RFQ below."
      />

      <section>
        <div className="wrap">
          <div
            className="cta wrap"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.1fr",
              gap: 64,
              padding: 0,
              maxWidth: "none",
            }}
          >
            <div>
              <div className="qa rv">
                <b>Fastest routes</b>
                <p>
                  📞{" "}
                  <a href="tel:+919909962080" style={{ color: "var(--green-700)", fontWeight: 600 }}>
                    +91 99099 62080
                  </a>{" "}
                  &nbsp;·&nbsp; 💬{" "}
                  <a
                    href="https://wa.me/919909962080"
                    style={{ color: "var(--green-700)", fontWeight: 600 }}
                  >
                    WhatsApp us
                  </a>{" "}
                  &nbsp;·&nbsp; ✉️ bhaavyaecopack@gmail.com
                </p>
              </div>
              <div className="card rv rv2" style={{ padding: 30, marginTop: 22 }}>
                <h3 style={{ fontSize: 17, marginBottom: 8 }}>Plant & Office</h3>
                <p style={{ fontSize: 14.5 }}>
                  Block No. 250, Near Shital Hotel, Village Sava, Kosamba, Dist. Mangrol — 394120,
                  Gujarat, India
                </p>
                <p style={{ fontSize: 14.5, marginTop: 8 }}>Mon–Sat · 9:00–19:00 IST</p>
                <div
                  style={{
                    marginTop: 16,
                    borderRadius: 12,
                    overflow: "hidden",
                    border: "1px solid var(--line)",
                    aspectRatio: "16/9",
                    background: "var(--bg-tint)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gray-500)",
                    fontSize: 14,
                  }}
                >
                  Google Map embed
                </div>
              </div>
              <div className="tl rv rv3" style={{ marginTop: 28 }}>
                <div className="tli">
                  <span>Step 1</span>
                  <b>We review & call back</b>
                  <p>Within 4 business hours, with a quotation.</p>
                </div>
                <div className="tli">
                  <span>Step 2</span>
                  <b>Free design & sample</b>
                  <p>Approve a real box, not a promise.</p>
                </div>
                <div className="tli">
                  <span>Step 3</span>
                  <b>Scheduled production</b>
                  <p>Committed dispatch dates, lot-tested.</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <DarkCta />
    </>
  );
}
