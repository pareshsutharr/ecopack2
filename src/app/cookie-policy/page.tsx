import type { Metadata } from "next";
import LegalSections from "@/components/LegalSections";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, organizationJsonLd } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cookie Policy | Bhaavya Ecopack",
  description: "Cookie Policy for www.bhaavyaecopack.com — Bhaavya Ecopack, Kosamba, Surat.",
  alternates: { canonical: "/cookie-policy" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Cookie Policy" },
  ],
};

const sections = [
  {
    heading: "What we use",
    body: "Essential cookies only where needed for site function. Any analytics cookies are used in aggregate to improve the site.",
  },
  {
    heading: "Your choices",
    body: "You can block or clear cookies in your browser at any time; the site remains usable.",
  },
  {
    heading: "Questions",
    body: "Write to sales@bhaavyaecopack.com.",
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd, breadcrumbJsonLd]} />
      <LegalSections sections={sections} />
    </>
  );
}
