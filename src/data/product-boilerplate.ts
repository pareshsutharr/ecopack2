// Boilerplate content confirmed byte-identical across all 28 product pages
// (extracted programmatically, not hand-duplicated per product).

export const strengthParagraphs: string[] = [
  "Stacking strength is engineering, not guesswork. Box Compression Test (BCT) capacity can be estimated with the McKee formula — BCT ≈ 5.87 × ECT × √(board caliper × box perimeter) — and then verified on the actual box. We apply safety factors of 2× for short-cycle distribution up to 4× for long-hold warehousing (per ASTM D642 practice), because long-term usable strength under load creep is only 50–60% of the peak laboratory value.",
];

export const moistureParagraphs: string[] = [
  "Humidity is the silent killer of box performance: independent studies show corrugated board loses 30–40% of its compression strength at 80% relative humidity, and losses can exceed 50% at 90% RH — exactly the conditions inside a sea-freight container or a non-air-conditioned monsoon warehouse. Board moisture content roughly doubles between 50% RH and 90% RH, which is why a box that stacks perfectly in the plant can crumple mid-voyage. Our answer is engineering, not hope: coated liners, Cobb-verified boards and strength safety factors sized for the real environment your cartons will live in.",
  "The Cobb test (IS 4006 / TAPPI T441) measures how many grams of water a square metre of board absorbs in a timed interval — lower is better. IS 2771:2022 caps water absorption at 225 g/m² over 30 minutes for standard board; export-grade moisture-resistant work typically demands Cobb values of 30–40 g/m² or lower, because material above ~45 g/m² shows measurable dimensional change in ordinary warehouse humidity. We test per lot and share the numbers, so \"moisture-resistant\" on our documentation is a measurement, not a marketing word.",
];

export const sustainabilityParagraphs: string[] = [
  "Every tonne of recycled-fibre corrugated board avoids roughly 180 kg of CO₂ versus virgin production (DEFRA life-cycle factors), and industry equivalences credit each tonne of recycled paper with saving about 17 trees, ~26,500 litres of water and ~4,000 kWh of energy (US EPA). Corrugated is also India’s practical answer to the single-use-plastic phase-out: recyclable, repulpable and biodegradable in weeks rather than centuries.",
  "Commercially, corrugated boxes fall under HSN 4819, and GST on corrugated boxes was reduced from 12% to 5% with effect from 22 September 2025 — worth re-checking on old supplier quotations. Pricing is driven by board grammage (GSM), ply, kraft paper prices (which rose ~6% through 2025), printing and quantity; we quote engineered specifications within 4 business hours, offer sampling before you commit, and support everything from trial lots to annual rate contracts.",
];

export interface Is2771Row {
  label: string;
  maxLWH: string;
  burst: string;
  ect: string;
}

export const is2771BandNames: Record<number, string> = {
  3: "Single wall (3-ply)",
  5: "Double wall (5-ply)",
  7: "Triple wall (7-ply)",
};

export const is2771Table: Record<number, Is2771Row[]> = {
  3: [
    { label: "Up to 5 kg", maxLWH: "635 mm", burst: "6 kgf/cm²", ect: "3.0 kN/m" },
    { label: "Up to 8 kg", maxLWH: "900 mm", burst: "8 kgf/cm²", ect: "4.0 kN/m" },
    { label: "Up to 10 kg", maxLWH: "1125 mm", burst: "9 kgf/cm²", ect: "4.25 kN/m" },
    { label: "Up to 15 kg", maxLWH: "1275 mm", burst: "10 kgf/cm²", ect: "4.5 kN/m" },
  ],
  5: [
    { label: "Up to 20 kg", maxLWH: "1525 mm", burst: "12 kgf/cm²", ect: "5.0 kN/m" },
    { label: "Up to 25 kg", maxLWH: "1715 mm", burst: "13 kgf/cm²", ect: "5.3 kN/m" },
    { label: "Up to 30 kg", maxLWH: "1905 mm", burst: "14 kgf/cm²", ect: "5.6 kN/m" },
    { label: "Up to 40 kg", maxLWH: "2286 mm", burst: "17 kgf/cm²", ect: "7.0 kN/m" },
  ],
  7: [
    { label: "Up to 55 kg", maxLWH: "2667 mm", burst: "24 kgf/cm²", ect: "9.6 kN/m" },
    { label: "Up to 75 kg", maxLWH: "2921 mm", burst: "35 kgf/cm²", ect: "12.4 kN/m" },
  ],
};
