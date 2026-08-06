import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./home.css";
import Hero3DBox from "@/components/Hero3DBox";
import ValuePropsMarquee from "@/components/ValuePropsMarquee";
import ProductMarquee from "@/components/ProductMarquee";
import ImpactCounters from "@/components/ImpactCounters";
import BoxConfigurator from "@/components/BoxConfigurator";
import ProductFinder from "@/components/ProductFinder";
import IndustrySelector from "@/components/IndustrySelector";
import ProcessFlowAdvanced from "@/components/ProcessFlowAdvanced";
import BoardGuide from "@/components/BoardGuide";
import FaqAccordion from "@/components/FaqAccordion";
import QuickRfqForm from "@/components/QuickRfqForm";
import VideoEmbed from "@/components/VideoEmbed";

export const metadata: Metadata = {
  title: "Corrugated Box Manufacturer in Surat, Gujarat | Moisture-Resistant Packaging",
  description:
    "ISO 9001:2015-certified corrugated packaging manufacturer in Surat. Moisture-resistant & export-grade boxes, 2,000 MT/month (8,000 MT/month from Oct 2026) capacity, quotes in 4 business hours.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Corrugated Box Manufacturer in Surat, Gujarat | Moisture-Resistant Packaging",
    description:
      "ISO 9001:2015-certified corrugated packaging manufacturer in Surat. Moisture-resistant & export-grade boxes, 2,000 MT/month (8,000 MT/month from Oct 2026) capacity, quotes in 4 business hours.",
    type: "website",
  },
};

const stats = [
  {
    icon: <path d="M12 6v6l4 2" />,
    circle: true,
    value: "45+",
    label: "Years of promoter expertise in paper & packaging",
  },
  {
    icon: <path d="M3 21h18M6 21V9l6-5 6 5v12M10 21v-6h4v6M9 12h.01M15 12h.01" />,
    value: (
      <>
        2,000 <small style={{ fontSize: ".55em" }}>MT/mo</small>
      </>
    ),
    label: "Current monthly production capacity",
    sub: "8,000 MT/mo from Oct 2026",
  },
  {
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
    value: "21",
    label: "Industries served with sector-specific specs",
  },
  {
    icon: <path d="M12 2 3 7v10l9 5 9-5V7l-9-5zM3 7l9 5 9-5M12 12v10" />,
    value: "28",
    label: "Corrugated product types, fully made to order",
  },
  {
    icon: (
      <>
        <rect x="1" y="5" width="14" height="11" rx="1.5" />
        <path d="M15 9h4l4 4v3h-8z" />
        <circle cx="5.5" cy="18.5" r="2" />
        <circle cx="18.5" cy="18.5" r="2" />
      </>
    ),
    value: "160 km",
    label: "Core radius + Pan-India supply network",
  },
  {
    icon: <path d="M12 3v18M7 21h10M5 7l7-4 7 4M6 11h12M7 15h10" />,
    value: "4-colour",
    label: "Multicolour flexo printing, proofed per lot",
  },
];

const processSteps = [
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Requirement understanding",
    text: "Loads, transit lanes, storage and stacking mapped with you.",
    time: "Day 0–1",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Packaging design",
    text: "Structure, ply and dimensions engineered; samples on request.",
    time: "1–3 days",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2 2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5" />
      </svg>
    ),
    title: "Material selection",
    text: "Kraft grades, GSM and coatings matched to the job.",
    time: "Same day",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3h.1a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5h.1a1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8v.1a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z" />
      </svg>
    ),
    title: "Production",
    text: "Fully automatic corrugation, printing and conversion.",
    time: "3–7 days",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    ),
    title: "Quality check",
    text: "Bursting, Cobb & compression verified per lot, documented.",
    time: "Every lot",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    ),
    title: "Dispatch & delivery",
    text: "Highway-adjacent loading; aligned to your schedule or port cut-offs.",
    time: "On schedule",
  },
];

const workSteps = [
  { time: "Hour 0–4", title: "Enquiry", text: "Quotation within 4 business hours of your enquiry." },
  { time: "Days 1–4", title: "Design & Sample", text: "Free structural design, physical sample & print proof." },
  { time: "Day 5", title: "Approval & PO", text: "Locked spec sheet — board, print, tolerances, tests." },
  { time: "Scheduled", title: "Production", text: "Fully automatic line with in-process QC." },
  { time: "On date", title: "Test & Dispatch", text: "Lot-tested, documented, dispatched as committed." },
];

const cases = [
  {
    tag: "Ceramic Exporter",
    title: "Sea-freight moisture failures",
    text: "Consignments to the Gulf arrived with softened, collapsing cartons after humid container transit.",
    resultValue: "~0",
    resultText: "transit crush claims after switching to Cobb-tested moisture-resistant 5-ply",
  },
  {
    tag: "FMCG Brand",
    title: "Print inconsistency across lots",
    text: "Brand colours drifted between monthly orders, hurting shelf presence across regions.",
    resultValue: "Lot-wise",
    resultText: "colour verification with proofing — consistent branding every production run",
  },
  {
    tag: "Auto Components",
    title: "Heavy parts deforming cartons",
    text: "Dense machined parts crushed standard boards in stacked warehouse storage.",
    resultValue: "7-ply",
    resultText: "reinforced construction + partitions — stable triple-stack warehousing",
  },
];

const gallery = [
  {
    img: "https://static.wixstatic.com/media/3663c4_26aa5d997ba942529ee8516c7e97b51e~mv2.jpg/v1/fit/w_960,h_577,q_90,enc_avif,quality_auto/plant.jpg",
    alt: "Fully automatic corrugation line — Bhaavya Ecopack Kosamba plant",
    caption: "Fully automatic corrugation line",
  },
  {
    img: "https://static.wixstatic.com/media/3663c4_fbeca24dcf0d4ba99d63fdcb1b1be27b~mv2.jpg/v1/fit/w_960,h_577,q_90,enc_avif,quality_auto/plant.jpg",
    alt: "High-speed board production — Bhaavya Ecopack Kosamba plant",
    caption: "High-speed board production",
  },
  {
    img: "https://static.wixstatic.com/media/3663c4_13dfd763f946447ea503f7c19d2e3c78~mv2.jpg/v1/fit/w_960,h_577,q_90,enc_avif,quality_auto/plant.jpg",
    alt: "Precision conversion section — Bhaavya Ecopack Kosamba plant",
    caption: "Precision conversion section",
  },
  {
    img: "https://static.wixstatic.com/media/3663c4_f7a3990730494dd194d59b7bc5bf8f59~mv2.jpg/v1/fit/w_960,h_577,q_90,enc_avif,quality_auto/plant.jpg",
    alt: "Automated stacking & handling — Bhaavya Ecopack Kosamba plant",
    caption: "Automated stacking & handling",
  },
  {
    img: "https://static.wixstatic.com/media/3663c4_031176a98d25434e910f4bc75c50cf75~mv2.jpg/v1/fit/w_960,h_577,q_90,enc_avif,quality_auto/plant.jpg",
    alt: "Printing & finishing line — Bhaavya Ecopack Kosamba plant",
    caption: "Printing & finishing line",
  },
  {
    img: "https://static.wixstatic.com/media/3663c4_23d6f0de4e6049bebfa091abf35b41ec~mv2.jpg/v1/fit/w_960,h_577,q_90,enc_avif,quality_auto/plant.jpg",
    alt: "Quality inspection in progress — Bhaavya Ecopack Kosamba plant",
    caption: "Quality inspection in progress",
  },
];

const comparisonRows = [
  { crit: "Humidity & export protection", them: "Standard kraft only", us: "Moisture-resistant programs, Cobb-tested" },
  { crit: "Consistency", them: "Semi-automatic, batch variation", us: "Fully automatic line — every box identical" },
  { crit: "Quotation speed", them: "2–5 days", us: "Within 4 business hours" },
  { crit: "Design support", them: "You supply drawings", us: "Free structural design & sampling" },
  { crit: "Quality proof", them: "On request, if available", us: "ISO 9001:2015 · lot test reports supplied" },
  { crit: "Supply assurance", them: "Spot capacity", us: "Rate contracts, reserved capacity, buffer stock" },
];

const faqs = [
  {
    q: "How do I get a quotation, and how fast?",
    a: "Send your box size, quantity and board preference — or just your product's weight and route — via the form, phone or WhatsApp. You'll receive a detailed quotation within 4 business hours.",
  },
  {
    q: "Can I get a sample before placing an order?",
    a: "Yes. We produce physical samples to your specification for approval before any production run, including printed proofs for branded cartons.",
  },
  {
    q: "What makes your moisture-resistant boxes different?",
    a: "The board is treated and coated to absorb dramatically less water, retaining compression strength through sea freight, monsoon storage and cold-chain transit — verified with Cobb testing.",
  },
  {
    q: "What is your minimum order quantity?",
    a: "MOQs depend on size and print — typically one production run. Share your quantity and we'll confirm feasibility the same day.",
  },
  {
    q: "Do you handle export requirements?",
    a: "Yes — export-grade boards, international marking and labeling, container-optimized sizing, and dispatch aligned to Mundra, Hazira and Nhava Sheva schedules.",
  },
  {
    q: "Can you commit to a yearly supply contract?",
    a: "Yes — annual rate contracts with locked pricing, reserved capacity and buffer stock are how most of our 100+ clients work with us.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero2">
        <div className="flutes" />
        <div className="wash w1" />
        <div className="wash w2" />
        <div className="grid">
          <div className="content">
            <div className="inner">
              <span className="eyebrow">
                <i />
                ISO 9001:2015 Certified · Kosamba, Surat
              </span>
              <h1>
                Engineered corrugated packaging for{" "}
                <em>Industrial, Export, FMCG &amp; Pharma</em> needs.
              </h1>
              <p className="sub">
                Custom corrugated boxes and packaging solutions designed for strength,
                consistency and scalable supply — from a fully automatic plant on Gujarat&apos;s
                industrial corridor.
              </p>
              <div className="ctas">
                <Link className="btn btn-primary" href="/contact">
                  Get a Quote
                </Link>
                <Link className="btn btn-secondary" href="/products">
                  Explore Products
                </Link>
              </div>
              <div className="proof">
                <span>
                  <b>2,000</b> MT/month today
                </span>
                <span>
                  <b>8,000</b> MT/month from Oct 2026
                </span>
                <span>
                  <b>4-hr</b> quote response
                </span>
              </div>
            </div>
          </div>
          <Hero3DBox />
        </div>
        <svg
          className="divider-wave"
          viewBox="0 0 1440 44"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 44V20C60 8 120 32 180 20s120-24 180-12 120 32 180 20 120-24 180-12 120 32 180 20 120-24 180-12 120 32 180 20 120-24 180-12v12z"
            fill="#201C16"
          />
        </svg>
      </section>

      <ValuePropsMarquee />

      <section className="sec-soft">
        <div className="wrap">
          <div className="shead center rv">
            <span className="kicker">Bhaavya Ecopack at a Glance</span>
            <h2>Built for buyers who can&apos;t afford surprises.</h2>
          </div>
          <div className="stats2">
            {stats.map((s, i) => (
              <div className={`stat2 rv${i % 3 === 1 ? " rv2" : i % 3 === 2 ? " rv3" : ""}`} key={s.label}>
                <div className="ic">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "var(--olive)" }}
                  >
                    {s.circle && <circle cx="12" cy="12" r="9" />}
                    {s.icon}
                  </svg>
                </div>
                <b>{s.value}</b>
                <span>{s.label}</span>
                {s.sub && <span className="sub2">{s.sub}</span>}
              </div>
            ))}
          </div>

          <ImpactCounters />
        </div>
      </section>

      <ProductMarquee />

      <section className="sec-soft" id="configurator">
        <div className="wrap">
          <div className="shead center rv">
            <span className="kicker">Interactive · 3D Box Configurator</span>
            <h2>Design your box in 3D — Length × Width × Height, in cm or inches.</h2>
            <p className="lead">
              Type any dimensions (no upper limit — every box is made to order), pick ply and
              finish, and watch it build live. Drag to rotate.
            </p>
          </div>
          <BoxConfigurator />
        </div>
      </section>

      <section className="sec-soft" id="products">
        <div className="wrap">
          <div className="shead center rv">
            <span className="kicker">Product Finder</span>
            <h2>What packaging are you looking for?</h2>
            <p className="lead">
              Pick your industry — we&apos;ll highlight the product families buyers like you
              order most.
            </p>
          </div>
          <ProductFinder />
        </div>
      </section>

      <section id="industries">
        <IndustrySelector />
      </section>

      <section className="sec-soft">
        <div className="wrap">
          <div className="shead center rv">
            <span className="kicker">How We Work</span>
            <h2>From enquiry to dispatch — a process you can plan around.</h2>
          </div>
          <ProcessFlowAdvanced steps={processSteps} />
          <p style={{ textAlign: "center", marginTop: 38 }}>
            <Link className="btn btn-primary" href="/manufacturing-process">
              See the full manufacturing process
            </Link>
          </p>
        </div>
      </section>

      <section className="sec-soft" id="boards">
        <div className="wrap">
          <div className="shead center rv">
            <span className="kicker">Board Selection Guide</span>
            <h2>3-ply, 5-ply or 7-ply? Match the board to the load.</h2>
            <p className="lead">The specifications buyers ask for most — in one place.</p>
          </div>
          <BoardGuide />
          <p className="rv" style={{ textAlign: "center", marginTop: 44, fontSize: 15 }}>
            Not sure which board fits? Share your product weight and route —{" "}
            <Link href="/contact" style={{ color: "var(--green-700)", fontWeight: 600 }}>
              we&apos;ll recommend the right board and sample it for you
            </Link>
            .
          </p>
        </div>
        <div className="boardfx rv">
          <Image
            src="https://static.wixstatic.com/media/3663c4_aa418cb3dbf247999d9aaa88f8c71066~mv2.webp/v1/fill/w_353,h_515,al_c,q_85,enc_avif,quality_auto/types-of-cardboard.webp"
            alt="Types of corrugated cardboard — single face, single wall, double wall, triple wall infographic"
            width={353}
            height={515}
          />
          <div>
            <h3 style={{ fontFamily: "var(--font-archivo)", marginBottom: 8 }}>
              From single-face to triple wall
            </h3>
            <p style={{ color: "var(--gray-600)", lineHeight: 1.65, fontSize: 14.5 }}>
              Every construction is the same idea scaled: kraft liners bonded to fluted medium.
              Single wall (3-ply) for loads to ~15 kg, double wall (5-ply) to ~40 kg, triple wall
              (7-ply) to ~75 kg — per IS 2771:2022. The infographic shows how the layers stack;
              the tabs above show exactly what we build.
            </p>
            <Link className="pill alt" style={{ marginTop: 12, display: "inline-block" }} href="/blog/3-ply-vs-5-ply-vs-7-ply">
              Full 3 vs 5 vs 7-ply guide →
            </Link>
          </div>
        </div>
      </section>

      <section className="sec-dark">
        <div className="wrap">
          <div className="shead rv">
            <span className="kicker">How We Work</span>
            <h2>A process built for procurement teams.</h2>
          </div>
          <div className="steps">
            {workSteps.map((s, i) => (
              <div className={`stp rv${i >= 3 ? " rv2" : ""}${i === 4 ? " rv3" : ""}`} key={s.title}>
                <span className="n">{s.time}</span>
                <h3 style={{ color: "#fff" }}>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quotes">
        <div className="wrap">
          <div className="shead center rv">
            <span className="kicker">Representative Engagements</span>
            <h2>Real packaging problems. Measured outcomes.</h2>
            <p className="lead">
              Typical results from engagements like yours — client references shared on request.
            </p>
          </div>
          <div className="cases">
            {cases.map((c, i) => (
              <div className={`case rv${i === 1 ? " rv2" : i === 2 ? " rv3" : ""}`} key={c.title}>
                <span className="tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <div className="res">
                  <b>{c.resultValue}</b>
                  <span>{c.resultText}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="shead center rv">
            <span className="kicker">Inside Bhaavya Ecopack</span>
            <h2>The plant behind the promise.</h2>
          </div>
          <div className="rv" style={{ marginBottom: 32, maxWidth: 860, marginLeft: "auto", marginRight: "auto" }}>
            <VideoEmbed youtubeId="KvhFaUOv9og" title="Bhaavya Ecopack — Company Overview" />
          </div>
          <div className="gal rv">
            {gallery.map((g) => (
              <div className="g" key={g.img}>
                <Image src={g.img} alt={g.alt} width={960} height={577} loading="lazy" />
                <span>{g.caption}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 22 }}>
            <Link className="btn btn-secondary" href="/manufacturing-facility">
              Take the facility walkthrough
            </Link>
          </p>
        </div>
      </section>

      <section className="sec-soft" id="why">
        <div className="wrap">
          <div className="shead center rv">
            <span className="kicker">Why Bhaavya Ecopack</span>
            <h2>What changes when you switch suppliers.</h2>
          </div>
          <div className="ctable rv">
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
          <div className="tests rv">
            <span className="test">Bursting Strength</span>
            <span className="test">Cobb Moisture (60/180)</span>
            <span className="test">Box Compression</span>
            <span className="test">GSM Verification</span>
            <span className="test">Dimensional Audit</span>
            <span className="test">Print &amp; Finish Inspection</span>
          </div>
        </div>
      </section>

      <section className="sec-soft" id="faq">
        <div className="wrap">
          <div className="shead center rv">
            <span className="kicker">FAQs</span>
            <h2>Common questions, answered directly.</h2>
          </div>
          <div className="rv">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="sec-dark cta" id="quote">
        <div className="wrap">
          <div>
            <span className="kicker rv">Request a Quote</span>
            <h2 className="rv">Tell us what you ship. We&apos;ll engineer the box.</h2>
            <p className="rv rv2">
              A detailed quotation within 4 business hours — with free structural design and
              physical sampling before you commit.
            </p>
            <div className="pts rv rv2">
              <div className="checks">
                <div className="check">Response within 4 business hours</div>
                <div className="check">Free design &amp; physical sample</div>
                <div className="check">Committed dispatch dates</div>
              </div>
            </div>
            <p className="rv rv3" style={{ color: "#fff", fontSize: 15, marginTop: 8 }}>
              +91 99099 62080 · sales@bhaavyaecopack.com
            </p>
          </div>
          <QuickRfqForm />
        </div>
      </section>

      <div className="dock" aria-label="Quick contact">
        <a href="tel:+919909962080">
          <svg viewBox="0 0 24 24">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3A19.5 19.5 0 0 1 5.1 13 19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7A2 2 0 0 1 22 16.9z" />
          </svg>
          <b>Call Now</b>
        </a>
        <a href="https://wa.me/919909962080">
          <svg viewBox="0 0 24 24">
            <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 21l2-5.4A8.5 8.5 0 1 1 21 11.5z" />
          </svg>
          <b>WhatsApp</b>
        </a>
        <a href="mailto:sales@bhaavyaecopack.com">
          <svg viewBox="0 0 24 24">
            <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6" />
          </svg>
          <b>Email Us</b>
        </a>
        <Link className="q" href="/contact">
          <svg viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 2v6h6M9 13h6M9 17h6" />
          </svg>
          <b>Request Quote</b>
        </Link>
      </div>
    </>
  );
}
