import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import DarkCta from "@/components/DarkCta";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Bhaavya Ecopack | ISO-Certified Corrugated Box Manufacturer, Surat",
  description:
    "The story, vision and values of Bhaavya Ecopack — a fully automatic, ISO 9001:2015-certified corrugated packaging plant in Kosamba, Surat, built on 45+ years of paper expertise.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Bhaavya Ecopack | ISO-Certified Corrugated Box Manufacturer, Surat",
    description:
      "The story, vision and values of Bhaavya Ecopack — a fully automatic, ISO 9001:2015-certified corrugated packaging plant in Kosamba, Surat, built on 45+ years of paper expertise.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "About" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is Bhaavya Ecopack located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our plant is at Block No. 250, Near Shital Hotel, Village Sava, Kosamba, District Mangrol, Surat, Gujarat 394120 — on Gujarat's industrial highway corridor with direct routes to Hazira, Mundra and Nhava Sheva.",
      },
    },
    {
      "@type": "Question",
      name: "When was Bhaavya Ecopack founded?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bhaavya Ecopack was founded in 2021, backed by promoters with more than 45 years of experience in the paper and packaging industry.",
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd, faqJsonLd]} />

      <PageHero
        breadcrumb="About"
        kicker="About Bhaavya Ecopack"
        title="Built on 45+ years of paper expertise. Engineered for modern supply chains."
        lead="Bhaavya Ecopack is an ISO 9001:2015-certified corrugated packaging manufacturer in Kosamba, Surat, Gujarat — founded in 2021 on a fully automatic plant and four decades of promoter experience in the paper industry."
      />

      <section className="sec-soft">
        <div className="wrap">
          <div className="shead center rv">
            <span className="kicker">Our Foundation</span>
            <h2>Three stones every box stands on.</h2>
          </div>
          <div className="grid3">
            <div className="card rv">
              <div className="body">
                <h3>Brand Identity</h3>
                <p>
                  We believe the product is more than its content — well-thought packaging is
                  what moves a buyer to choose it. Your box is your brand travelling.
                </p>
              </div>
            </div>
            <div className="card rv rv2">
              <div className="body">
                <h3>Physical Protection</h3>
                <p>
                  Fully automatic machinery delivers high-accuracy packaging in less time —
                  precision that conventional lines can&apos;t hold, engineered to protect what&apos;s
                  inside.
                </p>
              </div>
            </div>
            <div className="card rv rv3">
              <div className="body">
                <h3>Satisfaction</h3>
                <p>
                  A dedicated, qualified team follows strict standards at every stage of
                  production so the product that reaches you satisfies — lot after lot.
                </p>
              </div>
            </div>
          </div>

          <div className="split" style={{ marginTop: 54, alignItems: "center" }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-archivo)", fontSize: 22, marginBottom: 12 }}>
                We are Bhaavya Ecopack
              </h3>
              <p style={{ color: "var(--gray-600)", lineHeight: 1.7 }}>
                Our promoters carry more than 45 years of experience in the paper and packaging
                industry, and today Bhaavya Ecopack stands among the leaders of India&apos;s
                corrugated carton manufacturing sector. The plant at Kosamba is a fully automatic
                corrugated box manufacturing facility — technology of its own kind — built on
                nearly 1,00,000 sq ft, with ample finished-goods storage and National Highway
                access for quick, hassle-free delivery.
              </p>
              <div className="pills" style={{ marginTop: 16 }}>
                <span className="pill">5+ crore boxes produced</span>
                <span className="pill">45+ yrs promoter expertise</span>
                <span className="pill">100+ clients</span>
                <span className="pill">1,00,000 sq ft facility</span>
              </div>
            </div>
            <div className="figure rv">
              <Image
                src="https://static.wixstatic.com/media/3663c4_26aa5d997ba942529ee8516c7e97b51e~mv2.jpg/v1/fit/w_960,h_577,q_90,enc_avif,quality_auto/plant.jpg"
                alt="Fully automatic corrugated box plant of Bhaavya Ecopack at Kosamba, Surat"
                width={960}
                height={577}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="qa">
            <b>Who is Bhaavya Ecopack?</b>
            <p>
              Bhaavya Ecopack is an ISO 9001:2015-certified corrugated box manufacturer based in
              Kosamba, Surat, Gujarat, India. The company operates a fully automatic corrugation
              plant with 2,000 MT/month capacity today — 8,000 MT/month from October 2026 and
              specializes in moisture-resistant and export-grade corrugated packaging for 14+
              industries.
            </p>
          </div>
          <div className="tsplit" style={{ marginTop: 56 }}>
            <div className="rv">
              <span className="kicker">Our Story</span>
              <h2 style={{ fontSize: "clamp(26px,3vw,38px)", marginBottom: 16 }}>
                From paper heritage to packaging engineering.
              </h2>
              <p>
                Our promoters have spent more than 45 years in the paper and packaging trade —
                long enough to see exactly where conventional corrugated supply fails buyers:
                inconsistent batches, vague delivery promises, and boxes that give up the moment
                humidity rises.
              </p>
              <p style={{ marginTop: 14 }}>
                Bhaavya Ecopack was founded in 2021 to fix precisely that. We invested in a fully
                automatic corrugation line from day one, built an ISO 9001:2015 quality system
                around it, and made moisture-resistant board technology our specialty — because
                India&apos;s exporters and manufacturers deserve packaging engineered for Indian
                conditions: monsoons, sea freight and long-haul transit.
              </p>
            </div>
            <div className="figure rv rv2">
              <Image
                src="https://static.wixstatic.com/media/3663c4_26aa5d997ba942529ee8516c7e97b51e~mv2.jpg/v1/fill/w_1600,h_1000,al_c,q_90/a.jpg"
                alt="Corrugated boxes manufactured at Bhaavya Ecopack, Surat"
                width={1600}
                height={1000}
              />
              <div className="stamp">
                <b>Est. 2021</b>
                <span>Kosamba, Gujarat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-soft">
        <div className="wrap">
          <div className="shead center rv">
            <span className="kicker">Vision · Mission · Values</span>
            <h2>What we stand for.</h2>
          </div>
          <div className="grid3">
            <div className="card rv" style={{ padding: 34 }}>
              <h3 style={{ marginBottom: 10 }}>Vision</h3>
              <p>
                To be India&apos;s most trusted partner for protective corrugated packaging — the
                name buyers think of when a shipment simply must arrive intact.
              </p>
            </div>
            <div className="card rv rv2" style={{ padding: 34 }}>
              <h3 style={{ marginBottom: 10 }}>Mission</h3>
              <p>
                Engineer, manufacture and deliver consistent, moisture-resistant, sustainable
                corrugated packaging — with the speed and documentation modern procurement
                demands.
              </p>
            </div>
            <div className="card rv rv3" style={{ padding: 34 }}>
              <h3 style={{ marginBottom: 10 }}>Values</h3>
              <p>
                Protection · Precision · Partnership · Planet. Every decision — from board grade
                to dispatch date — is tested against these four.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="shead rv">
            <span className="kicker">Growth Journey</span>
            <h2>Milestones</h2>
          </div>
          <div className="tl">
            <div className="tli rv">
              <span>Legacy</span>
              <b>45+ years of promoter experience</b>
              <p>Four decades in paper trading and converting across Gujarat&apos;s industrial belt.</p>
            </div>
            <div className="tli rv">
              <span>2021</span>
              <b>Bhaavya Ecopack founded</b>
              <p>Fully automatic corrugation plant commissioned at Kosamba, Surat.</p>
            </div>
            <div className="tli rv">
              <span>2022</span>
              <b>ISO 9001:2015 certification</b>
              <p>Quality management system certified; in-house testing lab operational.</p>
            </div>
            <div className="tli rv">
              <span>2023–24</span>
              <b>100+ clients across 14 industries</b>
              <p>Moisture-resistant board programs adopted by exporters and FMCG brands.</p>
            </div>
            <div className="tli rv">
              <span>Today</span>
              <b>2,000 MT/month capacity today — 8,000 MT/month from October 2026</b>
              <p>Serving Gujarat, Maharashtra and pan-India with export-aligned dispatch.</p>
            </div>
          </div>
        </div>
      </section>

      <DarkCta />
    </>
  );
}
