import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import DarkCta from "@/components/DarkCta";
import JsonLd from "@/components/JsonLd";
import VideoEmbed from "@/components/VideoEmbed";
import { SITE_URL, organizationJsonLd } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Manufacturing Facility Tour | Bhaavya Ecopack Corrugation Plant, Surat",
  description:
    "Tour Bhaavya Ecopack's Kosamba facility: paper storage, fully automatic corrugation, flexo printing, die-cutting, ISO-certified quality lab and highway-side dispatch.",
  alternates: { canonical: "/manufacturing-facility" },
  openGraph: {
    title: "Manufacturing Facility Tour | Bhaavya Ecopack Corrugation Plant, Surat",
    description:
      "Tour Bhaavya Ecopack's Kosamba facility: paper storage, fully automatic corrugation, flexo printing, die-cutting, ISO-certified quality lab and highway-side dispatch.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Capabilities" },
    { "@type": "ListItem", position: 3, name: "Manufacturing Facility" },
  ],
};

const stations = [
  {
    n: "Station 01",
    title: "Paper Storage",
    text: "Kraft reels stored covered and dry — because moisture control starts before corrugation.",
    img: "/assets/facility-reel-storage.jpeg",
    alt: "Kraft paper reel storage area — Bhaavya Ecopack Kosamba",
    caption: "Reel storage — organized, protected, ready for production",
  },
  {
    n: "Station 02",
    title: "Automatic Corrugation",
    text: "Paper is fluted, bonded and built into 3/5/7-ply board on a fully automatic line for batch-to-batch consistency.",
    img: "/assets/facility-corrugation-line.jpeg",
    alt: "Fully automatic corrugation line and control panel — Bhaavya Ecopack Kosamba",
    caption: "Fully automatic corrugation line",
  },
  {
    n: "Station 03",
    title: "Printing & Converting",
    text: "Flexo printing, slotting and creasing in-line — your artwork proofed, then reproduced identically at speed.",
    img: "https://static.wixstatic.com/media/3663c4_13dfd763f946447ea503f7c19d2e3c78~mv2.jpg/v1/fit/w_960,h_577,q_90,enc_avif,quality_auto/plant.jpg",
    alt: "Precision conversion section — Bhaavya Ecopack Kosamba",
    caption: "Precision conversion section",
  },
  {
    n: "Station 04",
    title: "Die-Cutting & Finishing",
    text: "Rotary and platen die-cutting for structures and inserts; folder-gluer and stitching for final joints.",
    img: "https://static.wixstatic.com/media/3663c4_f7a3990730494dd194d59b7bc5bf8f59~mv2.jpg/v1/fit/w_960,h_577,q_90,enc_avif,quality_auto/plant.jpg",
    alt: "Automated stacking & handling — Bhaavya Ecopack Kosamba",
    caption: "Automated stacking & handling",
  },
  {
    n: "Station 05",
    title: "Quality Lab",
    text: "Bursting strength, Cobb moisture, GSM and compression checks on every lot — reports available to buyers.",
    img: "/assets/facility-qc-lab.jpeg",
    alt: "ISO-certified quality testing lab — Bhaavya Ecopack Kosamba",
    caption: "Quality testing lab",
  },
  {
    n: "Station 06",
    title: "Warehousing & Dispatch",
    text: "Finished goods staged under cover and loaded at highway-side bays, aligned to your schedules and vessel cut-offs.",
    img: "/assets/facility-finished-goods-warehouse.jpeg",
    alt: "Finished goods warehouse, staged and palletized — Bhaavya Ecopack Kosamba",
    caption: "Finished goods, staged for dispatch",
  },
];

const galleryShots = [
  {
    img: "/assets/facility-reel-storage.jpeg",
    alt: "Paper Storage — Bhaavya Ecopack facility, Surat",
  },
  {
    img: "/assets/facility-corrugation-line.jpeg",
    alt: "Automatic Corrugation — Bhaavya Ecopack facility, Surat",
  },
  {
    img: "https://static.wixstatic.com/media/3663c4_d98e764381e241edb0bdfb16930c7ed6~mv2.jpg/v1/fit/w_1000,h_800,q_92/a.jpg",
    alt: "Printing & Converting — Bhaavya Ecopack facility, Surat",
  },
  {
    img: "https://static.wixstatic.com/media/3663c4_9c6c736e08e342938557678dd12a019c~mv2.jpg/v1/fit/w_1000,h_800,q_92/a.jpg",
    alt: "Die-Cutting & Finishing — Bhaavya Ecopack facility, Surat",
  },
  {
    img: "/assets/facility-qc-lab.jpeg",
    alt: "Quality Lab — Bhaavya Ecopack facility, Surat",
  },
  {
    img: "/assets/facility-finished-goods-warehouse.jpeg",
    alt: "Warehousing & Dispatch — Bhaavya Ecopack facility, Surat",
  },
];

export default function ManufacturingFacilityPage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd, breadcrumbJsonLd]} />

      <section className="phero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link> &nbsp;/&nbsp; <Link href="/infrastructure">Capabilities</Link>{" "}
            &nbsp;/&nbsp; Manufacturing Facility
          </div>
          <span className="kicker">Manufacturing Facility</span>
          <h1>Walk through the plant your boxes are born in.</h1>
          <p className="lead" style={{ maxWidth: 760 }}>
            Built on nearly 1,00,000 sq ft beside NH-48 at Kosamba, the facility houses complete
            automatic machinery, high-volume production and ample ready-to-dispatch storage —
            automation that removes human error and delivers precision, lot after lot.
          </p>
          <p className="lead">
            A guided tour of the Bhaavya Ecopack facility at Kosamba — from paper storage to the
            automatic corrugator, converting lines, quality lab and dispatch bays.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="qa">
            <b>Can buyers visit the Bhaavya Ecopack facility?</b>
            <p>
              Yes — plant visits and virtual walkthroughs are welcomed for serious buyers and
              auditors. Contact us to schedule; vendor-audit documentation is available in
              advance.
            </p>
          </div>

          <div className="tsplit" style={{ marginTop: 48 }}>
            <div>
              <span className="kicker rv">The Walkthrough</span>
              <h2 className="rv" style={{ marginBottom: 10 }}>
                Six stations, one standard.
              </h2>
              <div className="tl">
                {stations.map((s) => (
                  <div className="tli rv" key={s.n}>
                    <span>{s.n}</span>
                    <b>{s.title}</b>
                    <p>{s.text}</p>
                    <figure style={{ margin: "14px 0 4px" }}>
                      <Image
                        src={s.img}
                        alt={s.alt}
                        width={960}
                        height={577}
                        style={{ width: "100%", height: "auto", borderRadius: 12, border: "1px solid var(--line)" }}
                      />
                      <figcaption style={{ fontSize: 12.5, color: "var(--gray-500)", marginTop: 7 }}>
                        {s.caption}
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="gal">
                {galleryShots.map((g) => (
                  <a href="#" key={g.img}>
                    <Image src={g.img} alt={g.alt} width={1000} height={800} />
                  </a>
                ))}
              </div>
              <div className="rv" style={{ marginTop: 18 }}>
                <VideoEmbed youtubeId="KvhFaUOv9og" title="Bhaavya Ecopack — Facility Walkthrough" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <DarkCta />
    </>
  );
}
