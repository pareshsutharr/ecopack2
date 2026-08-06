import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import ProductStandardsSection from "@/components/ProductStandardsSection";
import { products, getProduct } from "@/data/products";
import { SITE_URL, organizationJsonLd } from "@/lib/constants";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      type: "website",
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
      { "@type": "ListItem", position: 3, name: product.title },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    brand: { "@type": "Brand", name: "Bhaavya Ecopack" },
    description: product.metaDescription,
    image: product.heroImage,
    manufacturer: { "@type": "Organization", name: "Bhaavya Ecopack" },
  };

  return (
    <>
      <JsonLd data={[organizationJsonLd, breadcrumbJsonLd, faqJsonLd, productJsonLd]} />

      <section className="phero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>›</span> <Link href="/products">Products</Link>{" "}
            <span>›</span> <b>{product.title}</b>
          </nav>
          <div className="split">
            <div>
              <span className="kicker">{product.category}</span>
              <h1>{product.title}</h1>
              <div className="qa">
                <b>What are {product.title.toLowerCase()}?</b>
                <p>{product.whatIsAnswer}</p>
              </div>
              <p className="lead" style={{ marginTop: 18 }}>
                {product.leadParagraph}
              </p>
              <div className="ctas" style={{ marginTop: 26 }}>
                <Link className="btn btn-primary" href="/contact">
                  Get a Quote in 4 Hours
                </Link>
                <a className="btn btn-secondary" href="https://wa.me/919909962080">
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="figure rv">
              <Image
                src={product.heroImage}
                alt={product.heroImageAlt}
                width={900}
                height={680}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sec-soft">
        <div className="wrap split">
          <div>
            <h2 style={{ marginBottom: 18 }}>Built for</h2>
            {product.builtFor.map((b) => (
              <div className="check" key={b}>
                {b}
              </div>
            ))}
            <h2 style={{ margin: "30px 0 12px" }}>How we manufacture it</h2>
            <p className="lead" style={{ fontSize: 15.5 }}>
              {product.howWeManufacture}
            </p>
          </div>
          <div>
            <h2 style={{ marginBottom: 18 }}>Specifications</h2>
            <table className="spec">
              <tbody>
                {product.specs.map((s, i) => (
                  <tr key={`${s.label}-${i}`}>
                    <th>{s.label}</th>
                    <td>{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h2 style={{ margin: "30px 0 12px" }}>Choosing the right spec</h2>
            <p className="lead" style={{ fontSize: 15.5 }}>
              {product.choosingSpec}
            </p>
          </div>
        </div>
      </section>

      <ProductStandardsSection
        title={product.title}
        plyOptions={product.plyOptions}
        secondSection={product.secondSection}
      />

      <section className="sec-soft">
        <div className="wrap">
          <h2 style={{ marginBottom: 18 }}>Frequently asked questions</h2>
          <FaqAccordion items={product.faqs} />
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="relrow">
            <div>
              <h3>Industries that order this</h3>
              <div className="pills">
                {product.industriesServed.map((i) => (
                  <Link className="pill" href={i.href} key={i.href}>
                    {i.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3>Related products &amp; reading</h3>
              <div className="pills">
                {product.relatedProducts.map((r) => (
                  <Link className="pill alt" href={r.href} key={r.href}>
                    {r.label}
                  </Link>
                ))}
                <Link className="pill alt" href={`/blog/${product.blogGuideSlug}`}>
                  Complete {product.title} guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-dark cta">
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2>Need {product.title.toLowerCase()} engineered to your spec?</h2>
          <p className="lead" style={{ margin: "14px auto 26px", maxWidth: 640 }}>
            Serving Surat, Hazira, Bharuch, Ankleshwar, Vapi, Navsari, Vadodara and all of
            industrial Gujarat within 160 km — plus pan-India programmes.
          </p>
          <Link className="btn btn-primary" href="/contact">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
