export interface FeaturedProduct {
  href: string;
  img: string;
  alt: string;
  flag?: string;
  title: string;
  text: string;
  tags: string[];
  industries: string[]; // industry slugs this product serves, for the ProductFinder filter
}

// Curated subset shown by the homepage ProductFinder — the full 28-product
// catalog (Phase 2's data/products.ts) is used by /products and /products/[slug].
export const featuredProducts: FeaturedProduct[] = [
  {
    href: "/products/moisture-resistant-corrugated-boxes",
    img: "https://static.wixstatic.com/media/3663c4_1edbe47a56c343f495bc4fbeb6c982a2~mv2.png/v1/fit/w_900,h_680,q_92/p1.png",
    alt: "Moisture-Resistant Boxes by Bhaavya Ecopack",
    flag: "Flagship",
    title: "Moisture-Resistant Boxes",
    text: "Coated, Cobb-tested boards that hold strength through sea freight, monsoon storage and cold chains.",
    tags: ["Export", "Ceramics", "Frozen Foods", "Pharma"],
    industries: ["export", "ceramics", "frozen-foods", "pharmaceutical", "agriculture", "fruits-and-vegetables", "garments"],
  },
  {
    href: "/products/heavy-duty-corrugated-boxes",
    img: "https://static.wixstatic.com/media/3663c4_140c28c1740247b4b70cdb4229d86490~mv2.webp/v1/fit/w_900,h_680,q_92/p2.webp",
    alt: "Heavy-Duty Boxes by Bhaavya Ecopack",
    title: "Heavy-Duty Boxes",
    text: "5-ply & 7-ply construction for industrial loads, dense stacking and rough transit lanes.",
    tags: ["Engineering", "Automobile", "Auto Components", "Export"],
    industries: ["engineering", "automobile", "auto-components", "export", "warehousing", "chemicals", "solar-energy"],
  },
  {
    href: "/products/printed-corrugated-boxes",
    img: "https://static.wixstatic.com/media/3663c4_d98e764381e241edb0bdfb16930c7ed6~mv2.jpg/v1/fit/w_900,h_680,q_92/p3.jpg",
    alt: "Printed Cartons by Bhaavya Ecopack",
    title: "Printed Cartons",
    text: "Up to 4-colour multicolour flexo with your branding, barcodes and export markings — proofed first.",
    tags: ["FMCG", "Retail", "E-commerce", "Garments"],
    industries: ["fmcg", "retail", "e-commerce", "garments", "food-processing"],
  },
  {
    href: "/products/die-cut-boxes",
    img: "https://static.wixstatic.com/media/3663c4_9c6c736e08e342938557678dd12a019c~mv2.jpg/v1/fit/w_900,h_680,q_92/p4.jpg",
    alt: "Die-Cut Boxes & Inserts by Bhaavya Ecopack",
    title: "Die-Cut Boxes & Inserts",
    text: "Precision structures, dividers and inserts that hold fragile and odd-shaped products firmly.",
    tags: ["Pharma", "Electronics", "Glass", "Retail"],
    industries: ["pharmaceutical", "electronics", "glass", "retail", "e-commerce"],
  },
  {
    href: "/products/export-packaging",
    img: "https://static.wixstatic.com/media/3663c4_26d753ef329a48f290da97ea7dff6018~mv2.jpeg/v1/fit/w_900,h_680,q_92/p5.jpeg",
    alt: "Export Packaging by Bhaavya Ecopack",
    title: "Export Packaging",
    text: "Container-optimised, moisture-managed packs with international marking compliance built in.",
    tags: ["Export", "Ceramics", "Garments", "Logistics"],
    industries: ["export", "ceramics", "garments", "logistics", "engineering"],
  },
  {
    href: "/products/pharmaceutical-packaging-boxes",
    img: "https://static.wixstatic.com/media/3663c4_9c6c736e08e342938557678dd12a019c~mv2.jpg/v1/fit/w_900,h_680,q_92/p4.jpg",
    alt: "Pharma Packaging Boxes by Bhaavya Ecopack",
    title: "Pharma Packaging Boxes",
    text: "Audit-ready cartons with per-lot test documentation and line-true dimensional tolerance.",
    tags: ["Pharma", "Chemicals"],
    industries: ["pharmaceutical", "chemicals"],
  },
  {
    href: "/products/fruit-and-vegetable-boxes",
    img: "https://static.wixstatic.com/media/3663c4_e918fdd4d9cd44aba04053d8f9337a7c~mv2.webp/v1/fit/w_900,h_680,q_92/p6.webp",
    alt: "Fruit & Vegetable Boxes by Bhaavya Ecopack",
    title: "Fruit & Vegetable Boxes",
    text: "Ventilated, moisture-resistant trays engineered per commodity for cold-store stacking.",
    tags: ["Agriculture", "Fruits & Veg", "Export", "Food Processing"],
    industries: ["agriculture", "fruits-and-vegetables", "export", "food-processing"],
  },
  {
    href: "/products/e-commerce-packaging",
    img: "https://static.wixstatic.com/media/3663c4_140c28c1740247b4b70cdb4229d86490~mv2.webp/v1/fit/w_900,h_680,q_92/p2.webp",
    alt: "E-commerce Packaging by Bhaavya Ecopack",
    title: "E-commerce Packaging",
    text: "Right-sized courier boxes engineered to survive sortation hubs and cut volumetric billing.",
    tags: ["E-commerce", "Retail", "Logistics", "FMCG"],
    industries: ["e-commerce", "retail", "logistics", "fmcg"],
  },
  {
    href: "/products/corrugated-sheets",
    img: "https://static.wixstatic.com/media/3663c4_e918fdd4d9cd44aba04053d8f9337a7c~mv2.webp/v1/fit/w_900,h_680,q_92/p6.webp",
    alt: "Corrugated Sheets & Trays by Bhaavya Ecopack",
    title: "Corrugated Sheets & Trays",
    text: "Converting-grade sheets, ventilated trays and partitions cut to your exact dimensions.",
    tags: ["Engineering", "Logistics", "Warehousing", "Textile"],
    industries: ["engineering", "logistics", "warehousing", "textile", "agriculture"],
  },
];
