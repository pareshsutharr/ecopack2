import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import DarkCta from "@/components/DarkCta";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, organizationJsonLd } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Careers at Bhaavya Ecopack | Packaging Jobs in Surat, Gujarat",
  description:
    "Join Bhaavya Ecopack in Kosamba, Surat — openings in production, quality testing, B2B sales and structural packaging design.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers at Bhaavya Ecopack | Packaging Jobs in Surat, Gujarat",
    description:
      "Join Bhaavya Ecopack in Kosamba, Surat — openings in production, quality testing, B2B sales and structural packaging design.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Careers" },
  ],
};

const openings = [
  {
    title: "Production Supervisor — Corrugation",
    detail: "Automatic line operations & quality gates",
    location: "Kosamba, Surat",
    type: "Full-time · 3+ yrs exp",
  },
  {
    title: "Quality Executive — Testing Lab",
    detail: "BS, Cobb & compression testing, documentation",
    location: "Kosamba, Surat",
    type: "Full-time · 1–3 yrs",
  },
  {
    title: "B2B Sales Executive — Packaging",
    detail: "Exporter & industrial accounts, Gujarat belt",
    location: "Surat / Field",
    type: "Full-time · 2+ yrs",
  },
  {
    title: "Structural Designer — Packaging",
    detail: "Dielines, inserts, prototyping",
    location: "Kosamba, Surat",
    type: "Full-time",
  },
];

export default function CareersPage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd, breadcrumbJsonLd]} />

      <PageHero
        breadcrumb="Careers"
        kicker="Careers"
        title="Build India's most trusted packaging company with us."
        lead="We're a young plant with old-school values — precision, ownership and respect. If you want your work to ship across India and beyond, we'd like to meet you."
      />

      <section>
        <div className="wrap">
          <div className="shead rv">
            <span className="kicker">Open Roles</span>
            <h2>Current openings</h2>
            <p className="lead">Roles are illustrative for launch — the live list is managed separately.</p>
          </div>
          <div className="rv">
            {openings.map((job) => (
              <div className="job" key={job.title}>
                <div>
                  <b>{job.title}</b>
                  <span style={{ display: "block" }}>{job.detail}</span>
                </div>
                <span>{job.location}</span>
                <span>{job.type}</span>
                <Link className="btn btn-secondary" href="/contact" style={{ padding: "11px 20px" }}>
                  Apply
                </Link>
              </div>
            ))}
          </div>
          <p className="rv" style={{ marginTop: 30 }}>
            Don&apos;t see your role? Write to{" "}
            <a
              href="mailto:bhaavyaecopack@gmail.com"
              style={{ color: "var(--green-700)", fontWeight: 600 }}
            >
              bhaavyaecopack@gmail.com
            </a>{" "}
            with &quot;Careers&quot; in the subject.
          </p>
        </div>
      </section>

      <DarkCta />
    </>
  );
}
