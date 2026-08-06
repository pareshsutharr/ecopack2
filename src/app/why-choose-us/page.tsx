import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import DarkCta from "@/components/DarkCta";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, organizationJsonLd } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Why Choose Bhaavya Ecopack | Corrugated Packaging Supplier Comparison",
  description:
    "Compare Bhaavya Ecopack with typical converters: moisture-resistant technology, automatic consistency, 4-hour quotes, free design, ISO documentation and supply assurance.",
  alternates: { canonical: "/why-choose-us" },
  openGraph: {
    title: "Why Choose Bhaavya Ecopack | Corrugated Packaging Supplier Comparison",
    description:
      "Compare Bhaavya Ecopack with typical converters: moisture-resistant technology, automatic consistency, 4-hour quotes, free design, ISO documentation and supply assurance.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Why Choose Us" },
  ],
};

const advantages = [
  {
    title: "Latest Technology",
    text: "A fully automatic plant that eliminates the constraints of conventional corrugation machines.",
  },
  {
    title: "Beneficial Location",
    text: "Kosamba sits on the NH-48 corridor — highway access that turns into timely deliveries.",
  },
  {
    title: "International Standards",
    text: "ISO 9001:2015 discipline with IS 2771:2022-referenced specifications on every job.",
  },
  {
    title: "Skilled Workforce",
    text: 'A highly skilled team that has won "Best Supplier" awards from leading client companies.',
  },
  {
    title: "Range of Industries",
    text: "FMCG, apparel, medical, automobile, consumer goods, engineering and 15 more sectors.",
  },
  {
    title: "1,00,000 sq ft Facility",
    text: "Space for full automation, high production and ready-to-dispatch finished-goods inventory.",
  },
];

const comparisonRows = [
  {
    crit: "Humidity & export protection",
    them: "Standard kraft only",
    us: "Moisture-resistant programs, Cobb-tested",
  },
  {
    crit: "Consistency",
    them: "Semi-automatic, batch variation",
    us: "Fully automatic line — every box identical",
  },
  { crit: "Quotation speed", them: "2–5 days", us: "Within 4 business hours" },
  { crit: "Design support", them: "You supply drawings", us: "Free structural design & sampling" },
  {
    crit: "Quality proof",
    them: "On request, if available",
    us: "ISO 9001:2015 · lot test reports supplied",
  },
  {
    crit: "Supply assurance",
    them: "Spot capacity",
    us: "Rate contracts, reserved capacity, buffer stock",
  },
];

const testimonials = [
  {
    quote:
      "Transit damage on our export consignments dropped noticeably after switching to their moisture-resistant boards.",
    name: "Client Name",
    role: "Seafood Exporter, Gujarat",
  },
  {
    quote: "Consistent quality, honest lead times, and a team that actually understands packaging engineering.",
    name: "Client Name",
    role: "Textile Manufacturer, Surat",
  },
  {
    quote: "They redesigned our box and cut per-unit packaging cost without losing strength.",
    name: "Client Name",
    role: "FMCG Brand, Mumbai",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd, breadcrumbJsonLd]} />

      <PageHero
        breadcrumb="Why Choose Us"
        kicker="Why Choose Us"
        title="What changes when you switch to Bhaavya Ecopack."
        lead="Six differences procurement teams feel within the first order — measured in fewer damage claims, faster answers and audits that pass."
      />

      <section className="sec-soft">
        <div className="wrap">
          <div className="shead center rv">
            <span className="kicker">Proven Advantages</span>
            <h2>Why buyers stay with us.</h2>
          </div>
          <div className="grid3">
            {advantages.map((item) => (
              <div className="card rv" key={item.title}>
                <div className="body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="qa">
            <b>Why do buyers choose Bhaavya Ecopack?</b>
            <p>
              Buyers choose Bhaavya Ecopack for moisture-resistant board technology, fully
              automatic consistency, quotations within 4 business hours, free structural design
              and sampling, ISO 9001:2015 documentation, and supply assurance through annual rate
              contracts with reserved capacity.
            </p>
          </div>

          <div className="ctable rv" style={{ marginTop: 48 }}>
            <div className="ctr">
              <div>Criteria</div>
              <div>Typical converter</div>
              <div>Bhaavya Ecopack</div>
            </div>
            {comparisonRows.map((row) => (
              <div className="ctr" key={row.crit}>
                <div className="crit">{row.crit}</div>
                <div className="them">{row.them}</div>
                <div className="us">{row.us}</div>
              </div>
            ))}
          </div>

          <div className="grid3" style={{ marginTop: 64 }}>
            {testimonials.map((t, i) => (
              <div className="card rv" style={{ padding: 32 }} key={t.name + i}>
                <div className="stars">★★★★★</div>
                <p style={{ fontSize: 15, marginBottom: 16 }}>&quot;{t.quote}&quot;</p>
                <b style={{ fontFamily: "var(--font-archivo)", color: "var(--ink)" }}>{t.name}</b>
                <span style={{ fontSize: 13, color: "var(--gray-500)", display: "block" }}>
                  {t.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DarkCta />
    </>
  );
}
