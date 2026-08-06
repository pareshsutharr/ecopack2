import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { products } from "@/data/products";
import { industries } from "@/data/industries";
import { locations } from "@/data/locations";
import { blogPosts } from "@/data/blog";

const staticRoutes = [
  "/about",
  "/careers",
  "/contact",
  "/cookie-policy",
  "/faqs",
  "/infrastructure",
  "/knowledge-hub",
  "/manufacturing-facility",
  "/manufacturing-process",
  "/packaging-design",
  "/privacy-policy",
  "/quality-assurance",
  "/service-areas",
  "/sitemap",
  "/sustainability",
  "/terms-of-use",
  "/why-choose-us",
];

const priorityRoutes: Record<string, number> = {
  "/blog": 0.9,
  "/contact": 0.9,
  "/faqs": 0.9,
  "/industries": 0.9,
  "/products": 0.9,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: new Date(), priority: 1.0 },
    { url: `${SITE_URL}/products`, lastModified: new Date(), priority: 0.9 },
    { url: `${SITE_URL}/industries`, lastModified: new Date(), priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), priority: 0.9 },
  ];

  for (const route of staticRoutes) {
    entries.push({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
      priority: priorityRoutes[route] ?? 0.8,
    });
  }

  for (const p of products) {
    entries.push({ url: `${SITE_URL}/products/${p.slug}`, lastModified: new Date(), priority: 0.8 });
  }
  for (const i of industries) {
    entries.push({ url: `${SITE_URL}/industries/${i.slug}`, lastModified: new Date(), priority: 0.8 });
  }
  for (const l of locations) {
    entries.push({ url: `${SITE_URL}/service-areas/${l.slug}`, lastModified: new Date(), priority: 0.8 });
  }
  for (const b of blogPosts) {
    entries.push({
      url: `${SITE_URL}/blog/${b.slug}`,
      lastModified: new Date(b.dateModified),
      priority: 0.7,
    });
  }

  return entries;
}
