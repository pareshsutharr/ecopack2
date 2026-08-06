// The 4 distinct icon glyphs cycled across the homepage product marquee.
export const marqueeIcons: string[] = [
  "M12 2 3 7v10l9 5 9-5V7l-9-5zM3 7l9 5m0 0 9-5m-9 5v10",
  "M4 9h16v11H4zM4 9l2-5h12l2 5M12 9v11M8 13h2M14 13h2",
  "M3 10h18v8H3zM3 10l3-4h12l3 4M7 14h4",
  "M2 7h20M2 12h20M2 17h20M5 7c1.5-2 4.5-2 6 0s4.5 2 6 0M5 12c1.5-2 4.5-2 6 0s4.5 2 6 0M5 17c1.5-2 4.5-2 6 0s4.5 2 6 0",
];

export interface MarqueeProduct {
  href: string;
  label: string;
  icon: number; // index into marqueeIcons
}

export const marqueeProducts: MarqueeProduct[] = [
  { href: "/products/corrugated-shipping-boxes", label: "Corrugated Shipping Boxes", icon: 0 },
  { href: "/products/corrugated-packaging-solutions", label: "Corrugated Packaging Solutions", icon: 1 },
  { href: "/products/heavy-duty-corrugated-boxes", label: "Heavy-Duty Corrugated Boxes", icon: 2 },
  { href: "/products/moisture-resistant-corrugated-boxes", label: "Moisture-Resistant Corrugated Boxes", icon: 3 },
  { href: "/products/waterproof-corrugated-packaging", label: "Waterproof Corrugated Packaging", icon: 0 },
  { href: "/products/pharmaceutical-packaging-boxes", label: "Pharmaceutical Packaging Boxes", icon: 1 },
  { href: "/products/frozen-food-packaging-boxes", label: "Frozen Food Packaging Boxes", icon: 2 },
  { href: "/products/fmcg-packaging", label: "FMCG Packaging", icon: 3 },
  { href: "/products/e-commerce-packaging", label: "E-commerce Packaging", icon: 0 },
  { href: "/products/export-packaging", label: "Export Packaging", icon: 1 },
  { href: "/products/fruit-and-vegetable-boxes", label: "Fruit and Vegetable Boxes", icon: 2 },
  { href: "/products/shelf-ready-packaging", label: "Shelf-Ready Packaging", icon: 3 },
  { href: "/products/corrugated-sheets", label: "Corrugated Sheets", icon: 0 },
  { href: "/products/corrugated-trays", label: "Corrugated Trays", icon: 1 },
  { href: "/products/corrugated-inserts", label: "Corrugated Inserts", icon: 2 },
  { href: "/products/corrugated-dividers", label: "Corrugated Dividers", icon: 3 },
  { href: "/products/automotive-packaging", label: "Automotive Packaging", icon: 0 },
  { href: "/products/auto-component-packaging", label: "Auto Component Packaging", icon: 1 },
  { href: "/products/white-goods-packaging", label: "White Goods Packaging", icon: 2 },
  { href: "/products/solar-panel-packaging", label: "Solar Panel Packaging", icon: 3 },
  { href: "/products/glass-packaging", label: "Glass Packaging", icon: 0 },
  { href: "/products/glass-and-ceramic-packaging", label: "Glass and Ceramic Packaging", icon: 1 },
  { href: "/products/textile-packaging", label: "Textile Packaging", icon: 2 },
  { href: "/products/yarn-packaging", label: "Yarn Packaging", icon: 3 },
  { href: "/products/industrial-packaging", label: "Industrial Packaging", icon: 0 },
  { href: "/products/die-cut-boxes", label: "Die-Cut Boxes", icon: 1 },
  { href: "/products/printed-corrugated-boxes", label: "Printed Corrugated Boxes", icon: 2 },
  { href: "/products/custom-corrugated-packaging", label: "Custom Corrugated Packaging", icon: 3 },
];
