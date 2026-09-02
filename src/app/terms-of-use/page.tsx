import type { Metadata } from "next";
import LegalSections from "@/components/LegalSections";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, organizationJsonLd } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use | Bhaavya Ecopack",
  description: "Terms of Use for www.bhaavyaecopack.com — Bhaavya Ecopack, Kosamba, Surat.",
  alternates: { canonical: "/terms-of-use" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Terms of Use" },
  ],
};

const sections = [
  {
    heading: "Acceptance",
    body: "By using www.bhaavyaecopack.com you agree to these terms. Content is provided for information about our corrugated packaging products and services.",
  },
  {
    heading: "Quotations & orders",
    body: "Quotations are valid as stated on the quotation document; orders are confirmed against written purchase orders and agreed specifications. Product specifications reference IS 2771:2022 unless otherwise agreed in writing.",
  },
  {
    heading: "Intellectual property",
    body: "The Bhaavya Ecopack™ name, logo and site content are our property; client artwork remains the client's property and is used only for their production.",
  },
  {
    heading: "Liability",
    body: "Information on this site is provided in good faith; commercial terms, tolerances and liabilities are governed by the individual sales contract. Jurisdiction: Surat, Gujarat.",
  },
  {
    heading: "Contact",
    body: "Bhaavya Ecopack, Block No. 250, Near Shital Hotel, Village Sava, Kosamba, Dist. Surat – 394120 · bhaavyaecopack@gmail.com · +91 99099 62080.",
  },
];

export default function TermsOfUsePage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd, breadcrumbJsonLd]} />
      <LegalSections sections={sections} />
    </>
  );
}
