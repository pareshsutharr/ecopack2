export interface FaqGroupData {
  group: string;
  items: { q: string; a: string }[];
}

export const faqGroups: FaqGroupData[] = [
  {
    group: "Corrugated basics",
    items: [
      { q: "What is a corrugated box?", a: "A box made from corrugated fibreboard — a fluted paper medium glued between flat kraft liners. The flutes work like arches, giving strength and cushioning far beyond the material’s weight." },
      { q: "What is the difference between a carton and a corrugated box?", a: "A folding carton is single-layer paperboard for retail unit packs; a corrugated box is the multi-layer transit pack. Most products use a carton inside and corrugated outside." },
      { q: "What does \"ply\" mean — 3-ply vs 5-ply vs 7-ply?", a: "Ply counts the paper layers. 3-ply (single wall) suits up to ~15 kg; 5-ply (double wall) up to ~40 kg; 7-ply (triple wall) up to ~75 kg, per IS 2771:2022 bands." },
      { q: "What is a flute, and which type do I need?", a: "The wave layer between liners. A-flute (~4.5–5 mm) cushions best; B-flute resists puncture and prints well; C-flute is the general workhorse; E-flute gives premium print for retail and e-commerce." },
      { q: "What is GSM in packaging?", a: "Grams per square metre — paper weight. Indian kraft liners typically run 120–250 GSM, fluting medium 100–150 GSM; higher GSM generally means stronger, heavier board." },
      { q: "What is kraft paper?", a: "Strong wood-pulp paper made by the kraft process — the brown paper corrugated board is built from; available in recycled and virgin grades." },
      { q: "What is an RSC box?", a: "Regular Slotted Container (FEFCO 0201) — the world’s most common style: all flaps the same length, outer flaps meeting at the centre." },
      { q: "What is a die-cut box?", a: "A box cut on custom tooling for shapes RSCs can’t do — mailers, self-locking trays, inserts and display packs — with clean folds every time." },
      { q: "How do I measure box dimensions correctly?", a: "Internal Length × Width × Height, in that order. Internal dimensions protect the product; external dimensions matter for palletising and couriers." },
      { q: "Can a corrugated box be any size?", a: "Yes — corrugated is made to order. IS 2771:2022 caps combined L+W+H per grade (up to 2,921 mm on the heaviest 7-ply band), and we manufacture to your exact spec." },
      { q: "What is white-top corrugated?", a: "Board with a white outer liner for premium print contrast — common in retail, e-commerce and branded shippers." },
      { q: "What is single-face corrugated?", a: "One liner plus exposed flutes — used as protective wrap and void-fill rather than boxes." },
    ],
  },
  {
    group: "Strength & testing",
    items: [
      { q: "How is box strength measured?", a: "Three tests: Bursting Strength (rupture, kgf/cm²), Edge Crush Test (stacking backbone, kN/m) and Box Compression Test (what the finished box carries, kgf)." },
      { q: "What is bursting strength / BF?", a: "Hydraulic pressure at which board ruptures, per IS 1060. IS 2771:2022 minimums: 6–10 kgf/cm² (3-ply), 12–17 (5-ply), 24–35 (7-ply)." },
      { q: "What is ECT and why did IS 2771:2022 add it?", a: "Edge Crush Test measures crush resistance along the flutes — the best predictor of stacking strength. The 2022 revision mandates 3.0–12.4 kN/m across grades." },
      { q: "What is BCT and the McKee formula?", a: "Box Compression Test capacity, estimable as BCT ≈ 5.87 × ECT × √(caliper × perimeter), then verified physically on the real box." },
      { q: "What safety factor should stacking use?", a: "2× for short distribution cycles up to 4× for long-hold warehousing (ASTM D642 practice) — creep reduces usable strength to 50–60% of the lab peak." },
      { q: "How much weight can a 5-ply box carry?", a: "Engineered correctly, 20–40 kg per IS 2771:2022 — but stack height, duration and humidity move the real answer; we calculate rather than assume." },
      { q: "What is 32 ECT?", a: "The everyday e-commerce/shipping benchmark board grade; Amazon India’s single-wall norm is 200 lb/in² burst or 32 ECT." },
      { q: "Do you test every lot?", a: "Yes — bursting, Cobb, GSM and compression are tested per lot in our in-house lab, with records shared on request." },
      { q: "What is ISTA testing?", a: "International Safe Transit Association protocols (1A, 3A, 3E) simulating drops, vibration and compression for parcel and unitised freight." },
      { q: "Why do boxes that pass lab tests still fail in transit?", a: "Humidity and creep — board loses 30–50% strength in high RH, and sustained loads erode capacity. Specs must be set for the journey, not the lab." },
    ],
  },
  {
    group: "Moisture & export",
    items: [
      { q: "What is the Cobb test?", a: "Water absorbed by board (g/m²) in a timed interval per IS 4006/TAPPI T441 — lower is better. It’s how \"moisture-resistant\" becomes a number instead of a claim." },
      { q: "What Cobb value should export boxes have?", a: "Export-grade work typically specifies ≤30–40 g/m²; IS 2771 caps standard board at 225 g/m² over 30 minutes — a huge gap that explains sea-freight failures." },
      { q: "How much strength does a box lose in humidity?", a: "30–40% at 80% RH and over 50% at 90% RH — the actual conditions inside sea containers and monsoon warehouses." },
      { q: "Moisture-resistant vs waterproof — what’s the difference?", a: "Moisture-resistant manages humid air over time; waterproof adds higher-barrier coatings for direct water contact (ice, condensation, washdowns)." },
      { q: "Are your moisture coatings recyclable?", a: "Yes — we default to water-based polymer barrier coatings that stay repulpable, unlike traditional wax dipping." },
      { q: "What happens inside a sea container?", a: "Interior humidity regularly exceeds 90% RH across a 30–45 day voyage; uncoated board softens and stacks collapse. Cobb-verified board is the fix." },
      { q: "Do chemical shipments need Cobb testing?", a: "For UN/dangerous-goods corrugated packaging, Cobb testing is mandatory (49 CFR §178.516) — compliance, not preference." },
      { q: "Which ports do your export despatches align to?", a: "Mundra (India’s first 200-MMT port), Hazira and Nhava Sheva — our NH-48 plant times consignments to vessel cut-offs." },
    ],
  },
  {
    group: "Pricing & commercial",
    items: [
      { q: "What is the GST rate on corrugated boxes in India (2026)?", a: "5%, reduced from 12% effective 22 September 2025 (56th GST Council). Re-check any older rate cards." },
      { q: "What is the HSN code for corrugated boxes?", a: "HSN 4819 — corrugated cartons/boxes commonly under 48191010." },
      { q: "What decides corrugated box price per kg?", a: "Board GSM and ply, kraft paper prices (up ~6% through 2025), printing, quantity and conversion complexity. Share specs for an engineered quote." },
      { q: "What is your minimum order quantity?", a: "MOQs depend on size and print; trial lots are welcome and repeat volumes run on scheduled programmes or annual rate contracts." },
      { q: "How fast do you quote?", a: "Within 4 business hours of receiving dimensions, load and quantity." },
      { q: "What are typical lead times?", a: "Sampling first in days; production scheduled to committed dispatch dates — surge months planned in advance against our 2,000 MT/month capacity, scaling to 8,000 MT/month from October 2026." },
      { q: "Do you offer sampling before production?", a: "Yes — samples on request so the spec is proven before you commit." },
      { q: "Can we lock pricing with a rate contract?", a: "Yes — annual rate contracts with agreed revision triggers are a standing model for repeat buyers." },
      { q: "Do you supply against purchase orders with credit terms?", a: "Commercial terms are agreed per account after the first cycles; documentation supports standard B2B processes." },
      { q: "Is printing extra?", a: "Up to 4-colour multicolour flexo is quoted within the box price based on coverage and colours — always proofed before production." },
    ],
  },
  {
    group: "Ordering & design",
    items: [
      { q: "How do I start an order?", a: "Send product dimensions/weight, quantity and destination — or just the product sample. Engineers respond with a spec and quote in 4 business hours." },
      { q: "Can you design the box structure for us?", a: "Yes — structure, ply, flute and internal fittings are engineered from your product and route; prototypes validate before tooling." },
      { q: "Can you match our existing box?", a: "Yes — we reverse-engineer current packs and usually improve material efficiency in the process." },
      { q: "Do you print branding, barcodes and export marks?", a: "Yes — up to 4-colour flexo with proofing; barcodes validated for scan contrast on kraft and white-top." },
      { q: "Can you make inserts and partitions to fit our product?", a: "Die-cut inserts and dividers are engineered from samples or drawings and drop-tested until movement is eliminated." },
      { q: "What file formats do you need for artwork?", a: "Print-ready vector files (AI/PDF) preferred; our prepress team adapts dielines to your artwork." },
      { q: "Do you handle both unit cartons and master shippers?", a: "Yes — coordinated unit-to-master systems so retail packs and shippers fit each other and the pallet." },
      { q: "Can I visit the plant?", a: "Yes — buyers are welcome at our Kosamba, Surat plant on NH-48; audits supported under ISO 9001:2015." },
    ],
  },
  {
    group: "Delivery & service area",
    items: [
      { q: "Where is Bhaavya Ecopack located?", a: "Block No. 250, Near Shital Hotel, Village Sava, Kosamba, Dist. Surat – 394120, Gujarat — on the NH-48 corridor." },
      { q: "Which areas do you deliver to?", a: "A committed 160 km scheduled-route radius around Surat — Hazira, Navsari, Bardoli, Bharuch, Ankleshwar, Valsad, Vapi, Daman, Silvassa, Vadodara — plus pan-India full-truck programmes (Morbi, Rajkot, Mundra, Delhi NCR, Pune, Bengaluru, Hyderabad, Chennai, Kolkata and more)." },
      { q: "Is there a corrugated box manufacturer near me in Surat?", a: "Yes — our plant is ~30 km from Surat city with same-belt scheduled routes; sampling and plant visits are easy." },
      { q: "Do you deliver to Ankleshwar and the chemical belt?", a: "Daily-corridor coverage of Bharuch–Ankleshwar–Panoli–Jhagadia–Dahej with UN-adjacent spec support." },
      { q: "How do pan-India deliveries work?", a: "As planned full-truck or consolidated programmes with agreed schedules and MOQs — engineered specs identical to our core belt." },
      { q: "Can you time despatches to vessel cut-offs?", a: "Yes — export consignments are scheduled against Mundra, Hazira and Nhava Sheva sailings." },
    ],
  },
  {
    group: "Sustainability",
    items: [
      { q: "Are corrugated boxes eco-friendly?", a: "Yes — recyclable, repulpable and biodegradable in weeks (vs centuries for plastic). Recycled-fibre board avoids ~180 kg CO₂ per tonne vs virgin (DEFRA factors)." },
      { q: "How much does recycling actually save?", a: "Per tonne of recycled paper: ~17 trees, ~26,500 litres of water and ~4,000 kWh of energy (US EPA equivalences — industry ballparks)." },
      { q: "Do you use recycled fibre?", a: "Recycled kraft is the backbone of Indian corrugated (recycled grades led the market in 2025); we match recycled/virgin content to your strength and compliance needs." },
      { q: "Is corrugated the answer to the plastic ban?", a: "For secondary packaging, largely yes — India’s single-use-plastic phase-out and EPR rules are actively shifting demand to recyclable corrugated." },
      { q: "Are moisture coatings compatible with recycling?", a: "Our water-based barrier coatings keep board repulpable — protection without the wax-dip landfill problem." },
      { q: "Where can I see your live impact numbers?", a: "Our homepage shows a live counter of tonnes produced since 2021 with CO₂, tree, water and energy equivalences — sourced and caveated." },
    ],
  },
];
