import type { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import { blogPosts, getBlogPost } from "@/data/blog";
import { SITE_URL, organizationJsonLd } from "@/lib/constants";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
    },
  };
}

function getBodyHtml(slug: string): string {
  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.html`);
  return fs.readFileSync(filePath, "utf-8");
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const bodyHtml = getBodyHtml(post.slug);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title.slice(0, 47) },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: { "@type": "Organization", name: "Bhaavya Ecopack" },
    publisher: {
      "@type": "Organization",
      name: "Bhaavya Ecopack",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/assets/logo.png` },
    },
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    articleSection: post.category,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={[organizationJsonLd, breadcrumbJsonLd, articleJsonLd, faqJsonLd]} />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>›</span> <Link href="/blog">Blog</Link> <span>›</span>{" "}
            <b>{post.title.slice(0, 47)}</b>
          </nav>
          <span className="kicker">{post.category}</span>
          <h1 style={{ fontSize: "clamp(28px,3.4vw,42px)" }}>{post.title}</h1>
          <p style={{ fontSize: 13, color: "var(--gray-500)", margin: "10px 0 18px" }}>
            Bhaavya Ecopack Engineering Desk · Updated{" "}
            {new Date(post.dateModified).toLocaleDateString("en-US", { month: "long", year: "numeric" })} ·{" "}
            {post.readTime}
          </p>
          <div className="qa">
            <b>{post.qaQuestion}</b>
            <p>{post.qaAnswer}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ maxWidth: 880 }}>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />

          <h2 style={{ margin: "34px 0 14px" }}>Frequently asked questions</h2>
          <FaqAccordion items={post.faqs} />

          {post.relatedLinks.length > 0 && (
            <>
              <h3 style={{ margin: "30px 0 8px" }}>Related reading &amp; pages</h3>
              <div className="pills">
                {post.relatedLinks.map((r) => (
                  <Link className="pill alt" href={r.href} key={r.href}>
                    {r.label}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="sec-dark cta">
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2>Get this engineered for your product.</h2>
          <p className="lead" style={{ margin: "14px auto 26px", maxWidth: 620 }}>
            Share dimensions, load and route — engineered quotation within 4 business hours from
            our Kosamba, Surat plant.
          </p>
          <Link className="btn btn-primary" href="/contact">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
