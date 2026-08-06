import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import { industries, getIndustry } from "@/data/industries";
import { getProduct } from "@/data/products";
import { strengthParagraphs, sustainabilityParagraphs, moistureParagraphs } from "@/data/product-boilerplate";
import { SITE_URL, organizationJsonLd } from "@/lib/constants";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      type: "website",
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const recommendedProduct = getProduct(industry.recommendedProductSlug);
  const secondParagraph =
    industry.secondSection === "sustainability" ? sustainabilityParagraphs[0] : moistureParagraphs[0];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE_URL}/industries` },
      { "@type": "ListItem", position: 3, name: industry.fullName },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={[organizationJsonLd, breadcrumbJsonLd, faqJsonLd]} />

      <section className="phero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>›</span> <Link href="/industries">Industries</Link>{" "}
            <span>›</span> <b>{industry.fullName}</b>
          </nav>
          <span className="kicker">Industry Solutions</span>
          <h1>
            <span style={{ fontSize: ".8em" }}>{industry.icon}</span> {industry.fullName} Packaging
          </h1>
          <div className="qa">
            <b>What packaging does the {industry.fullName.toLowerCase()} industry need?</b>
            <p>{industry.whatIsAnswer}</p>
          </div>
          <p className="lead" style={{ marginTop: 16 }}>
            {industry.heroIntro}
          </p>
          <div className="ctas" style={{ marginTop: 24 }}>
            <Link className="btn btn-primary" href="/contact">
              Get a {industry.fullName} Quote
            </Link>
            {recommendedProduct && (
              <Link className="btn btn-secondary" href={`/products/${recommendedProduct.slug}`}>
                See {recommendedProduct.title}
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="sec-soft">
        <div className="wrap">
          <div className="ipanel" style={{ boxShadow: "none" }}>
            <div className="cols">
              <div>
                <h4>Packaging needs</h4>
                <ul>
                  {industry.needs.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Common challenges</h4>
                <ul>
                  {industry.challenges.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Our solution</h4>
                <ul>
                  {industry.solutions.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rec">
              <div className="bx">
                <span style={{ fontWeight: 700, color: "var(--brown-600)" }}>Recommended:</span>
                {industry.recommendedProducts.map((p) => (
                  <Link className="pill alt" href={p.href} key={p.href}>
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap split">
          <div>
            <h2 style={{ marginBottom: 14 }}>Recommended specification</h2>
            <table className="spec">
              <tbody>
                {industry.specs.map((s, i) => (
                  <tr key={`${s.label}-${i}`}>
                    <th>{s.label}</th>
                    <td>{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h2 style={{ marginBottom: 14 }}>Why the spec matters here</h2>
            <p className="lead" style={{ fontSize: 15.5 }}>
              {strengthParagraphs[0]}
            </p>
            <p className="lead" style={{ fontSize: 15.5, marginTop: 14 }}>
              {secondParagraph}
            </p>
          </div>
        </div>
      </section>

      <section className="sec-soft">
        <div className="wrap">
          <h2 style={{ marginBottom: 18 }}>{industry.fullName} packaging — FAQs</h2>
          <FaqAccordion items={industry.faqs} />
          <p style={{ marginTop: 22 }}>
            <Link className="pill alt" href={`/blog/${industry.blogGuideSlug}`}>
              Read the full {industry.fullName} packaging guide (2026) →
            </Link>
          </p>
        </div>
      </section>

      <section className="sec-dark cta">
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2>Packing for {industry.fullName.toLowerCase()}? Let&apos;s engineer it.</h2>
          <p className="lead" style={{ margin: "14px auto 26px", maxWidth: 620 }}>
            Structure, ply and print matched to your product — quotation within 4 business hours.
          </p>
          <Link className="btn btn-primary" href="/contact">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
