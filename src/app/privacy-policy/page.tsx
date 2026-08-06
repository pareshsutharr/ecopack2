import type { Metadata } from "next";
import LegalSections from "@/components/LegalSections";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, organizationJsonLd } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Bhaavya Ecopack",
  description: "Privacy Policy for www.bhaavyaecopack.com — Bhaavya Ecopack, Kosamba, Surat.",
  alternates: { canonical: "/privacy-policy" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Privacy Policy" },
  ],
};

const sections = [
  {
    heading: "What we collect",
    body: "Details you submit through enquiry and RFQ forms — name, company, phone, email and requirement details — used solely to respond to your enquiry and service your account.",
  },
  {
    heading: "How we use it",
    body: "To prepare quotations, samples and dispatches, and to communicate about your orders. We do not sell personal data to third parties.",
  },
  {
    heading: "Analytics",
    body: "The site may use privacy-respecting analytics to understand aggregate usage; no advertising profiles are built.",
  },
  {
    heading: "Retention & rights",
    body: "Business records are retained as required for commercial and statutory purposes. To review or delete your enquiry data, write to sales@bhaavyaecopack.com.",
  },
  {
    heading: "Contact",
    body: "Data queries: sales@bhaavyaecopack.com · +91 99099 62080.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd, breadcrumbJsonLd]} />
      <LegalSections sections={sections} />
    </>
  );
}
