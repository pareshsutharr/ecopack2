export const SITE_URL = "https://www.bhaavyaecopack.com";
export const SITE_NAME = "Bhaavya Ecopack";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bhaavya Ecopack",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/assets/logo.png`,
  description:
    "ISO 9001:2015-certified corrugated packaging manufacturer in Kosamba, Surat, Gujarat, India, specializing in moisture-resistant and export-grade corrugated boxes with 2,000 MT/month capacity today — 8,000 MT/month from October 2026.",
  foundingDate: "2021",
  telephone: "+91-99099-62080",
  email: "sales@bhaavyaecopack.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Block No. 250, Near Shital Hotel, Village Sava, Kosamba",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    postalCode: "394120",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/bhaavyaecopack",
    "https://www.instagram.com/bhaavyaecopack",
    "https://www.facebook.com/100090400401170",
  ],
  areaServed: [
    { "@type": "Country", name: "India" },
    {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 21.46, longitude: 72.96 },
      geoRadius: "160000",
    },
  ],
  serviceArea:
    "Surat, Hazira, Kosamba, Bharuch, Ankleshwar, Navsari, Bardoli, Valsad, Vapi, Daman, Silvassa, Vadodara and industrial Gujarat within 160 km of Surat",
};
