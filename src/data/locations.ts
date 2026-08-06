import type { RelatedLink } from "./products";

export interface LocationFaq {
  q: string;
  a: string;
}

export interface Location {
  slug: string;
  cityLabel: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  qaAnswer: string;
  heroIntro: string;
  whoWeServe: string[];
  faqs: LocationFaq[];
}

// Products shown under "Most ordered from {city}" — confirmed identical
// across all 23 location pages (extracted programmatically, not per-city).
export const locationTopProducts: RelatedLink[] = [
  { label: "Moisture-Resistant Boxes", href: "/products/moisture-resistant-corrugated-boxes" },
  { label: "Heavy-Duty Boxes", href: "/products/heavy-duty-corrugated-boxes" },
  { label: "Printed Cartons", href: "/products/printed-corrugated-boxes" },
  { label: "Export Packaging", href: "/products/export-packaging" },
  { label: "Die-Cut Boxes", href: "/products/die-cut-boxes" },
];

export const locations: Location[] = [
  {
    slug: "ahmedabad",
    cityLabel: "Ahmedabad",
    metaTitle: "Corrugated Box Manufacturer & Supplier — Ahmedabad | Bhaavya Ecopack",
    metaDescription: "Bhaavya Ecopack supplies moisture-resistant, export-grade corrugated boxes to Ahmedabad from its automatic plant at Kosamba, Surat. Quotes in 4 business hours.",
    kicker: "Service Area · 265 km · scheduled routes",
    qaAnswer: "Yes — Ahmedabad is part of our pan-India supply network. Planned full-truck routes; programme-based supply for repeat volumes. Quotations within 4 business hours; despatch from Kosamba, Surat on NH-48.",
    heroIntro: "Ahmedabad’s pharma, FMCG, textiles and engineering base — plus the Sanand auto cluster — draws on Gujarat’s full packaging supply chain. We serve it on scheduled full-truck routes with the same engineered specs as our core belt.",
    whoWeServe: ["Pharma & FMCG majors", "Sanand auto cluster suppliers", "Engineering exporters"],
    faqs: [{ q: "Who is the best corrugated box manufacturer near me in Ahmedabad?", a: "Buyers in Ahmedabad choose on four things: tested board (not claimed strength), moisture engineering, capacity headroom and response speed. Bhaavya Ecopack answers all four — IS 2771-referenced specs, Cobb-verified moisture-resistant board, 2,000 MT/month scaling to 8,000 MT/month from October 2026, and quotations in 4 business hours. Planned full-truck routes; programme-based supply for repeat volumes." }, { q: "How fast can you deliver corrugated boxes to Ahmedabad?", a: "Sampling comes first, then scheduled production with committed dispatch dates. Planned full-truck routes; programme-based supply for repeat volumes." }, { q: "Do you serve small and large orders in Ahmedabad?", a: "Yes — from trial lots to annual rate contracts, with genuine capacity headroom behind every commitment." }, { q: "What corrugated products are most ordered from Ahmedabad?", a: "Moisture-resistant boxes, heavy-duty 5/7-ply shippers, printed cartons and export packaging lead — with die-cut inserts and ventilated trays close behind, depending on the industry mix." }],
  },
  {
    slug: "bengaluru",
    cityLabel: "Bengaluru",
    metaTitle: "Corrugated Box Manufacturer & Supplier — Bengaluru | Bhaavya Ecopack",
    metaDescription: "Bhaavya Ecopack supplies moisture-resistant, export-grade corrugated boxes to Bengaluru from its automatic plant at Kosamba, Surat. Quotes in 4 business hours.",
    kicker: "Service Area · Pan-India network",
    qaAnswer: "Yes — Bengaluru is part of our pan-India supply network. Volume-based full-truck programmes; planned lead times. Quotations within 4 business hours; despatch from Kosamba, Surat on NH-48.",
    heroIntro: "Bengaluru’s electronics, EMS and D2C economy consumes insert-engineered, brand-printed cartons at scale — micro-flute print quality outside, drop-tested cushioning inside.",
    whoWeServe: ["Electronics & EMS units", "D2C & e-commerce brands", "Machine tool exporters"],
    faqs: [{ q: "Who is the best corrugated box manufacturer near me in Bengaluru?", a: "Buyers in Bengaluru choose on four things: tested board (not claimed strength), moisture engineering, capacity headroom and response speed. Bhaavya Ecopack answers all four — IS 2771-referenced specs, Cobb-verified moisture-resistant board, 2,000 MT/month scaling to 8,000 MT/month from October 2026, and quotations in 4 business hours. Volume-based full-truck programmes; planned lead times." }, { q: "How fast can you deliver corrugated boxes to Bengaluru?", a: "Sampling comes first, then scheduled production with committed dispatch dates. Volume-based full-truck programmes; planned lead times." }, { q: "Do you serve small and large orders in Bengaluru?", a: "Yes — from trial lots to annual rate contracts, with genuine capacity headroom behind every commitment." }, { q: "What corrugated products are most ordered from Bengaluru?", a: "Moisture-resistant boxes, heavy-duty 5/7-ply shippers, printed cartons and export packaging lead — with die-cut inserts and ventilated trays close behind, depending on the industry mix." }],
  },
  {
    slug: "bharuch",
    cityLabel: "Bharuch & Ankleshwar",
    metaTitle: "Corrugated Box Manufacturer & Supplier — Bharuch & Ankleshwar | Bhaavya Ecopack",
    metaDescription: "Bhaavya Ecopack supplies moisture-resistant, export-grade corrugated boxes to Bharuch & Ankleshwar from its automatic plant at Kosamba, Surat. Quotes in 4 business hours.",
    kicker: "Service Area · 60–70 km · core radius",
    qaAnswer: "Yes — Bharuch & Ankleshwar is inside our committed 160 km scheduled-route radius. Scheduled runs up the NH-48/Dahej corridor; UN-adjacent spec support. Quotations within 4 business hours; despatch from Kosamba, Surat on NH-48.",
    heroIntro: "The Bharuch–Ankleshwar corridor is one of Asia’s largest chemical concentrations: Ankleshwar GIDC alone hosts 1,500+ units in dyes, intermediates, agrochemicals and APIs, flanked by Panoli, Jhagadia and the Dahej PCPIR, with Jambusar hosting India’s first bulk-drug park. Chemical packaging here is compliance work — Cobb-tested board, partitions for filled containers, batch identification.",
    whoWeServe: ["Chemical & agrochemical units (Ankleshwar, Panoli, Jhagadia)", "Pharma & API manufacturers", "Dahej-bound exporters"],
    faqs: [{ q: "Who is the best corrugated box manufacturer near me in Bharuch & Ankleshwar?", a: "Buyers in Bharuch & Ankleshwar choose on four things: tested board (not claimed strength), moisture engineering, capacity headroom and response speed. Bhaavya Ecopack answers all four — IS 2771-referenced specs, Cobb-verified moisture-resistant board, 2,000 MT/month scaling to 8,000 MT/month from October 2026, and quotations in 4 business hours. Scheduled runs up the NH-48/Dahej corridor; UN-adjacent spec support." }, { q: "How fast can you deliver corrugated boxes to Bharuch & Ankleshwar?", a: "Sampling comes first, then scheduled production with committed dispatch dates. Scheduled runs up the NH-48/Dahej corridor; UN-adjacent spec support." }, { q: "Do you serve small and large orders in Bharuch & Ankleshwar?", a: "Yes — from trial lots to annual rate contracts, with genuine capacity headroom behind every commitment." }, { q: "What corrugated products are most ordered from Bharuch & Ankleshwar?", a: "Moisture-resistant boxes, heavy-duty 5/7-ply shippers, printed cartons and export packaging lead — with die-cut inserts and ventilated trays close behind, depending on the industry mix." }],
  },
  {
    slug: "chennai",
    cityLabel: "Chennai",
    metaTitle: "Corrugated Box Manufacturer & Supplier — Chennai | Bhaavya Ecopack",
    metaDescription: "Bhaavya Ecopack supplies moisture-resistant, export-grade corrugated boxes to Chennai from its automatic plant at Kosamba, Surat. Quotes in 4 business hours.",
    kicker: "Service Area · Pan-India network",
    qaAnswer: "Yes — Chennai is part of our pan-India supply network. Full-truck programmes; export-marked despatches. Quotations within 4 business hours; despatch from Kosamba, Surat on NH-48.",
    heroIntro: "Chennai combines India’s auto corridor with major container ports — heavy-duty component packs on one side, export cartons timed to Chennai/Ennore sailings on the other.",
    whoWeServe: ["Auto OEM & ancillaries", "Port-based exporters", "White goods units"],
    faqs: [{ q: "Who is the best corrugated box manufacturer near me in Chennai?", a: "Buyers in Chennai choose on four things: tested board (not claimed strength), moisture engineering, capacity headroom and response speed. Bhaavya Ecopack answers all four — IS 2771-referenced specs, Cobb-verified moisture-resistant board, 2,000 MT/month scaling to 8,000 MT/month from October 2026, and quotations in 4 business hours. Full-truck programmes; export-marked despatches." }, { q: "How fast can you deliver corrugated boxes to Chennai?", a: "Sampling comes first, then scheduled production with committed dispatch dates. Full-truck programmes; export-marked despatches." }, { q: "Do you serve small and large orders in Chennai?", a: "Yes — from trial lots to annual rate contracts, with genuine capacity headroom behind every commitment." }, { q: "What corrugated products are most ordered from Chennai?", a: "Moisture-resistant boxes, heavy-duty 5/7-ply shippers, printed cartons and export packaging lead — with die-cut inserts and ventilated trays close behind, depending on the industry mix." }],
  },
  {
    slug: "daman-silvassa",
    cityLabel: "Daman & Silvassa",
    metaTitle: "Corrugated Box Manufacturer & Supplier — Daman & Silvassa | Bhaavya Ecopack",
    metaDescription: "Bhaavya Ecopack supplies moisture-resistant, export-grade corrugated boxes to Daman & Silvassa from its automatic plant at Kosamba, Surat. Quotes in 4 business hours.",
    kicker: "Service Area · 125 km · core radius",
    qaAnswer: "Yes — Daman & Silvassa is inside our committed 160 km scheduled-route radius. Southern route despatches; insert-engineered packs for assembly lines. Quotations within 4 business hours; despatch from Kosamba, Surat on NH-48.",
    heroIntro: "The Daman–Silvassa UT cluster concentrates plastics, electronics, appliances and packaging-intensive assembly — tax-advantaged manufacturing that ships nationwide daily and needs cartons without Mumbai lead times.",
    whoWeServe: ["Plastic & polymer processors", "Electronics & appliance assemblers", "Consumer goods packers"],
    faqs: [{ q: "Who is the best corrugated box manufacturer near me in Daman & Silvassa?", a: "Buyers in Daman & Silvassa choose on four things: tested board (not claimed strength), moisture engineering, capacity headroom and response speed. Bhaavya Ecopack answers all four — IS 2771-referenced specs, Cobb-verified moisture-resistant board, 2,000 MT/month scaling to 8,000 MT/month from October 2026, and quotations in 4 business hours. Southern route despatches; insert-engineered packs for assembly lines." }, { q: "How fast can you deliver corrugated boxes to Daman & Silvassa?", a: "Sampling comes first, then scheduled production with committed dispatch dates. Southern route despatches; insert-engineered packs for assembly lines." }, { q: "Do you serve small and large orders in Daman & Silvassa?", a: "Yes — from trial lots to annual rate contracts, with genuine capacity headroom behind every commitment." }, { q: "What corrugated products are most ordered from Daman & Silvassa?", a: "Moisture-resistant boxes, heavy-duty 5/7-ply shippers, printed cartons and export packaging lead — with die-cut inserts and ventilated trays close behind, depending on the industry mix." }],
  },
  {
    slug: "delhi-ncr",
    cityLabel: "Delhi NCR",
    metaTitle: "Corrugated Box Manufacturer & Supplier — Delhi NCR | Bhaavya Ecopack",
    metaDescription: "Bhaavya Ecopack supplies moisture-resistant, export-grade corrugated boxes to Delhi NCR from its automatic plant at Kosamba, Surat. Quotes in 4 business hours.",
    kicker: "Service Area · Pan-India network",
    qaAnswer: "Yes — Delhi NCR is part of our pan-India supply network. Planned weekly full-truck programmes; MOQ-based scheduling. Quotations within 4 business hours; despatch from Kosamba, Surat on NH-48.",
    heroIntro: "North India holds roughly a third of the national corrugated market, and Delhi NCR is its consumption engine — e-commerce fulfilment, appliances, exports and D2C brands running on high volumes of printed, right-sized cartons.",
    whoWeServe: ["E-commerce & D2C brands", "Export houses", "Appliance & electronics units"],
    faqs: [{ q: "Who is the best corrugated box manufacturer near me in Delhi NCR?", a: "Buyers in Delhi NCR choose on four things: tested board (not claimed strength), moisture engineering, capacity headroom and response speed. Bhaavya Ecopack answers all four — IS 2771-referenced specs, Cobb-verified moisture-resistant board, 2,000 MT/month scaling to 8,000 MT/month from October 2026, and quotations in 4 business hours. Planned weekly full-truck programmes; MOQ-based scheduling." }, { q: "How fast can you deliver corrugated boxes to Delhi NCR?", a: "Sampling comes first, then scheduled production with committed dispatch dates. Planned weekly full-truck programmes; MOQ-based scheduling." }, { q: "Do you serve small and large orders in Delhi NCR?", a: "Yes — from trial lots to annual rate contracts, with genuine capacity headroom behind every commitment." }, { q: "What corrugated products are most ordered from Delhi NCR?", a: "Moisture-resistant boxes, heavy-duty 5/7-ply shippers, printed cartons and export packaging lead — with die-cut inserts and ventilated trays close behind, depending on the industry mix." }],
  },
  {
    slug: "gandhidham-mundra",
    cityLabel: "Gandhidham & Mundra",
    metaTitle: "Corrugated Box Manufacturer & Supplier — Gandhidham & Mundra | Bhaavya Ecopack",
    metaDescription: "Bhaavya Ecopack supplies moisture-resistant, export-grade corrugated boxes to Gandhidham & Mundra from its automatic plant at Kosamba, Surat. Quotes in 4 business hours.",
    kicker: "Service Area · Pan-India network",
    qaAnswer: "Yes — Gandhidham & Mundra is part of our pan-India supply network. Direct port-corridor despatches timed to vessel cut-offs. Quotations within 4 business hours; despatch from Kosamba, Surat on NH-48.",
    heroIntro: "Mundra is India’s largest commercial port — the first to cross 200 million tonnes in a year (200.7 MMT, FY25) and handler of 7.4 million TEU — making Gandhidham a packaging-hungry logistics city where cartons are timed to stuffing schedules.",
    whoWeServe: ["Mundra port exporters", "CFS & consolidation yards", "Timber-to-corrugated crate switchers"],
    faqs: [{ q: "Who is the best corrugated box manufacturer near me in Gandhidham & Mundra?", a: "Buyers in Gandhidham & Mundra choose on four things: tested board (not claimed strength), moisture engineering, capacity headroom and response speed. Bhaavya Ecopack answers all four — IS 2771-referenced specs, Cobb-verified moisture-resistant board, 2,000 MT/month scaling to 8,000 MT/month from October 2026, and quotations in 4 business hours. Direct port-corridor despatches timed to vessel cut-offs." }, { q: "How fast can you deliver corrugated boxes to Gandhidham & Mundra?", a: "Sampling comes first, then scheduled production with committed dispatch dates. Direct port-corridor despatches timed to vessel cut-offs." }, { q: "Do you serve small and large orders in Gandhidham & Mundra?", a: "Yes — from trial lots to annual rate contracts, with genuine capacity headroom behind every commitment." }, { q: "What corrugated products are most ordered from Gandhidham & Mundra?", a: "Moisture-resistant boxes, heavy-duty 5/7-ply shippers, printed cartons and export packaging lead — with die-cut inserts and ventilated trays close behind, depending on the industry mix." }],
  },
  {
    slug: "hazira",
    cityLabel: "Hazira",
    metaTitle: "Corrugated Box Manufacturer & Supplier — Hazira | Bhaavya Ecopack",
    metaDescription: "Bhaavya Ecopack supplies moisture-resistant, export-grade corrugated boxes to Hazira from its automatic plant at Kosamba, Surat. Quotes in 4 business hours.",
    kicker: "Service Area · 25 km · core radius",
    qaAnswer: "Yes — Hazira is inside our committed 160 km scheduled-route radius. Despatches timed to Hazira port cut-offs; 25 km from our plant. Quotations within 4 business hours; despatch from Kosamba, Surat on NH-48.",
    heroIntro: "Hazira is South Gujarat’s heavy-industry seafront: Reliance, ArcelorMittal Nippon Steel, L&T, Essar and Adani operate port-linked plants here, and the Hazira port cluster posted record volumes in FY25. Marine chemical precincts run near full occupancy — every unit shipping product needs cartons timed to vessel windows.",
    whoWeServe: ["Port exporters & CFS operators", "Steel, engineering & fabrication majors", "Chemical & petrochemical units"],
    faqs: [{ q: "Who is the best corrugated box manufacturer near me in Hazira?", a: "Buyers in Hazira choose on four things: tested board (not claimed strength), moisture engineering, capacity headroom and response speed. Bhaavya Ecopack answers all four — IS 2771-referenced specs, Cobb-verified moisture-resistant board, 2,000 MT/month scaling to 8,000 MT/month from October 2026, and quotations in 4 business hours. Despatches timed to Hazira port cut-offs; 25 km from our plant." }, { q: "How fast can you deliver corrugated boxes to Hazira?", a: "Sampling comes first, then scheduled production with committed dispatch dates. Despatches timed to Hazira port cut-offs; 25 km from our plant." }, { q: "Do you serve small and large orders in Hazira?", a: "Yes — from trial lots to annual rate contracts, with genuine capacity headroom behind every commitment." }, { q: "What corrugated products are most ordered from Hazira?", a: "Moisture-resistant boxes, heavy-duty 5/7-ply shippers, printed cartons and export packaging lead — with die-cut inserts and ventilated trays close behind, depending on the industry mix." }],
  },
  {
    slug: "hyderabad",
    cityLabel: "Hyderabad",
    metaTitle: "Corrugated Box Manufacturer & Supplier — Hyderabad | Bhaavya Ecopack",
    metaDescription: "Bhaavya Ecopack supplies moisture-resistant, export-grade corrugated boxes to Hyderabad from its automatic plant at Kosamba, Surat. Quotes in 4 business hours.",
    kicker: "Service Area · Pan-India network",
    qaAnswer: "Yes — Hyderabad is part of our pan-India supply network. Scheduled programmes with documentation per lot. Quotations within 4 business hours; despatch from Kosamba, Surat on NH-48.",
    heroIntro: "Hyderabad’s Pharma City and bulk-drug corridors demand documentation-first packaging — per-lot GSM, Cobb and bursting records that clear audits — plus moisture-managed shippers for humid-season despatch.",
    whoWeServe: ["Pharma & bulk drug exporters", "Med-device manufacturers", "FMCG brands"],
    faqs: [{ q: "Who is the best corrugated box manufacturer near me in Hyderabad?", a: "Buyers in Hyderabad choose on four things: tested board (not claimed strength), moisture engineering, capacity headroom and response speed. Bhaavya Ecopack answers all four — IS 2771-referenced specs, Cobb-verified moisture-resistant board, 2,000 MT/month scaling to 8,000 MT/month from October 2026, and quotations in 4 business hours. Scheduled programmes with documentation per lot." }, { q: "How fast can you deliver corrugated boxes to Hyderabad?", a: "Sampling comes first, then scheduled production with committed dispatch dates. Scheduled programmes with documentation per lot." }, { q: "Do you serve small and large orders in Hyderabad?", a: "Yes — from trial lots to annual rate contracts, with genuine capacity headroom behind every commitment." }, { q: "What corrugated products are most ordered from Hyderabad?", a: "Moisture-resistant boxes, heavy-duty 5/7-ply shippers, printed cartons and export packaging lead — with die-cut inserts and ventilated trays close behind, depending on the industry mix." }],
  },
  {
    slug: "indore",
    cityLabel: "Indore",
    metaTitle: "Corrugated Box Manufacturer & Supplier — Indore | Bhaavya Ecopack",
    metaDescription: "Bhaavya Ecopack supplies moisture-resistant, export-grade corrugated boxes to Indore from its automatic plant at Kosamba, Surat. Quotes in 4 business hours.",
    kicker: "Service Area · Pan-India network",
    qaAnswer: "Yes — Indore is part of our pan-India supply network. Scheduled full-truck despatches via NH-52/NH-47. Quotations within 4 business hours; despatch from Kosamba, Surat on NH-48.",
    heroIntro: "Indore anchors central India’s pharma and FMCG cluster — audit-documented pharma cartons and colour-consistent printed shippers are the standing requirement, with auto component vendors adding heavy-duty demand.",
    whoWeServe: ["Pharma formulation units", "FMCG & food brands", "Auto component vendors"],
    faqs: [{ q: "Who is the best corrugated box manufacturer near me in Indore?", a: "Buyers in Indore choose on four things: tested board (not claimed strength), moisture engineering, capacity headroom and response speed. Bhaavya Ecopack answers all four — IS 2771-referenced specs, Cobb-verified moisture-resistant board, 2,000 MT/month scaling to 8,000 MT/month from October 2026, and quotations in 4 business hours. Scheduled full-truck despatches via NH-52/NH-47." }, { q: "How fast can you deliver corrugated boxes to Indore?", a: "Sampling comes first, then scheduled production with committed dispatch dates. Scheduled full-truck despatches via NH-52/NH-47." }, { q: "Do you serve small and large orders in Indore?", a: "Yes — from trial lots to annual rate contracts, with genuine capacity headroom behind every commitment." }, { q: "What corrugated products are most ordered from Indore?", a: "Moisture-resistant boxes, heavy-duty 5/7-ply shippers, printed cartons and export packaging lead — with die-cut inserts and ventilated trays close behind, depending on the industry mix." }],
  },
  {
    slug: "jaipur",
    cityLabel: "Jaipur",
    metaTitle: "Corrugated Box Manufacturer & Supplier — Jaipur | Bhaavya Ecopack",
    metaDescription: "Bhaavya Ecopack supplies moisture-resistant, export-grade corrugated boxes to Jaipur from its automatic plant at Kosamba, Surat. Quotes in 4 business hours.",
    kicker: "Service Area · Pan-India network",
    qaAnswer: "Yes — Jaipur is part of our pan-India supply network. Consolidated loads on the Ahmedabad–Jaipur corridor. Quotations within 4 business hours; despatch from Kosamba, Surat on NH-48.",
    heroIntro: "Jaipur’s handicraft, gem and apparel exporters ship fragile, high-value goods worldwide — insert-engineered protection and export-marked cartons are the difference between artisan work arriving intact or as claims.",
    whoWeServe: ["Handicraft exporters", "Apparel & textile houses", "Stone & decor shippers"],
    faqs: [{ q: "Who is the best corrugated box manufacturer near me in Jaipur?", a: "Buyers in Jaipur choose on four things: tested board (not claimed strength), moisture engineering, capacity headroom and response speed. Bhaavya Ecopack answers all four — IS 2771-referenced specs, Cobb-verified moisture-resistant board, 2,000 MT/month scaling to 8,000 MT/month from October 2026, and quotations in 4 business hours. Consolidated loads on the Ahmedabad–Jaipur corridor." }, { q: "How fast can you deliver corrugated boxes to Jaipur?", a: "Sampling comes first, then scheduled production with committed dispatch dates. Consolidated loads on the Ahmedabad–Jaipur corridor." }, { q: "Do you serve small and large orders in Jaipur?", a: "Yes — from trial lots to annual rate contracts, with genuine capacity headroom behind every commitment." }, { q: "What corrugated products are most ordered from Jaipur?", a: "Moisture-resistant boxes, heavy-duty 5/7-ply shippers, printed cartons and export packaging lead — with die-cut inserts and ventilated trays close behind, depending on the industry mix." }],
  },
  {
    slug: "jamnagar",
    cityLabel: "Jamnagar",
    metaTitle: "Corrugated Box Manufacturer & Supplier — Jamnagar | Bhaavya Ecopack",
    metaDescription: "Bhaavya Ecopack supplies moisture-resistant, export-grade corrugated boxes to Jamnagar from its automatic plant at Kosamba, Surat. Quotes in 4 business hours.",
    kicker: "Service Area · Pan-India network",
    qaAnswer: "Yes — Jamnagar is part of our pan-India supply network. Consolidated freight via Rajkot; export-grade options for port routing. Quotations within 4 business hours; despatch from Kosamba, Surat on NH-48.",
    heroIntro: "Jamnagar pairs the world’s largest refining complex with India’s brass-parts capital — thousands of units shipping dense, count-critical components that need partitioned, count-accurate cartons.",
    whoWeServe: ["Brass component units", "Refinery & processing vendors", "Export consolidators"],
    faqs: [{ q: "Who is the best corrugated box manufacturer near me in Jamnagar?", a: "Buyers in Jamnagar choose on four things: tested board (not claimed strength), moisture engineering, capacity headroom and response speed. Bhaavya Ecopack answers all four — IS 2771-referenced specs, Cobb-verified moisture-resistant board, 2,000 MT/month scaling to 8,000 MT/month from October 2026, and quotations in 4 business hours. Consolidated freight via Rajkot; export-grade options for port routing." }, { q: "How fast can you deliver corrugated boxes to Jamnagar?", a: "Sampling comes first, then scheduled production with committed dispatch dates. Consolidated freight via Rajkot; export-grade options for port routing." }, { q: "Do you serve small and large orders in Jamnagar?", a: "Yes — from trial lots to annual rate contracts, with genuine capacity headroom behind every commitment." }, { q: "What corrugated products are most ordered from Jamnagar?", a: "Moisture-resistant boxes, heavy-duty 5/7-ply shippers, printed cartons and export packaging lead — with die-cut inserts and ventilated trays close behind, depending on the industry mix." }],
  },
  {
    slug: "kolkata",
    cityLabel: "Kolkata",
    metaTitle: "Corrugated Box Manufacturer & Supplier — Kolkata | Bhaavya Ecopack",
    metaDescription: "Bhaavya Ecopack supplies moisture-resistant, export-grade corrugated boxes to Kolkata from its automatic plant at Kosamba, Surat. Quotes in 4 business hours.",
    kicker: "Service Area · Pan-India network",
    qaAnswer: "Yes — Kolkata is part of our pan-India supply network. Planned consolidated freight; monsoon-proof board specs. Quotations within 4 business hours; despatch from Kosamba, Surat on NH-48.",
    heroIntro: "Kolkata gateways eastern India’s tea, leather and engineering exports — moisture is the constant enemy in this climate, making Cobb-controlled board the sensible default.",
    whoWeServe: ["Tea & agro exporters", "Leather goods houses", "Engineering units"],
    faqs: [{ q: "Who is the best corrugated box manufacturer near me in Kolkata?", a: "Buyers in Kolkata choose on four things: tested board (not claimed strength), moisture engineering, capacity headroom and response speed. Bhaavya Ecopack answers all four — IS 2771-referenced specs, Cobb-verified moisture-resistant board, 2,000 MT/month scaling to 8,000 MT/month from October 2026, and quotations in 4 business hours. Planned consolidated freight; monsoon-proof board specs." }, { q: "How fast can you deliver corrugated boxes to Kolkata?", a: "Sampling comes first, then scheduled production with committed dispatch dates. Planned consolidated freight; monsoon-proof board specs." }, { q: "Do you serve small and large orders in Kolkata?", a: "Yes — from trial lots to annual rate contracts, with genuine capacity headroom behind every commitment." }, { q: "What corrugated products are most ordered from Kolkata?", a: "Moisture-resistant boxes, heavy-duty 5/7-ply shippers, printed cartons and export packaging lead — with die-cut inserts and ventilated trays close behind, depending on the industry mix." }],
  },
  {
    slug: "morbi",
    cityLabel: "Morbi",
    metaTitle: "Corrugated Box Manufacturer & Supplier — Morbi | Bhaavya Ecopack",
    metaDescription: "Bhaavya Ecopack supplies moisture-resistant, export-grade corrugated boxes to Morbi from its automatic plant at Kosamba, Surat. Quotes in 4 business hours.",
    kicker: "Service Area · Pan-India network",
    qaAnswer: "Yes — Morbi is part of our pan-India supply network. Full-truck programmes via the Rajkot corridor; export documentation-ready. Quotations within 4 business hours; despatch from Kosamba, Surat on NH-48.",
    heroIntro: "Morbi is the world’s second-largest ceramic cluster: 1,200+ units producing ~60 lakh tonnes a year and 80–90% of India’s ceramic exports (~Rs 15,000 crore in 2024-25), shipping through Mundra and Kandla. Every export pallet depends on high-BF, moisture-resistant corrugated that survives the voyage.",
    whoWeServe: ["Ceramic tile exporters", "Sanitaryware manufacturers", "Mosaic & ware units"],
    faqs: [{ q: "Who is the best corrugated box manufacturer near me in Morbi?", a: "Buyers in Morbi choose on four things: tested board (not claimed strength), moisture engineering, capacity headroom and response speed. Bhaavya Ecopack answers all four — IS 2771-referenced specs, Cobb-verified moisture-resistant board, 2,000 MT/month scaling to 8,000 MT/month from October 2026, and quotations in 4 business hours. Full-truck programmes via the Rajkot corridor; export documentation-ready." }, { q: "How fast can you deliver corrugated boxes to Morbi?", a: "Sampling comes first, then scheduled production with committed dispatch dates. Full-truck programmes via the Rajkot corridor; export documentation-ready." }, { q: "Do you serve small and large orders in Morbi?", a: "Yes — from trial lots to annual rate contracts, with genuine capacity headroom behind every commitment." }, { q: "What corrugated products are most ordered from Morbi?", a: "Moisture-resistant boxes, heavy-duty 5/7-ply shippers, printed cartons and export packaging lead — with die-cut inserts and ventilated trays close behind, depending on the industry mix." }],
  },
  {
    slug: "mumbai",
    cityLabel: "Mumbai & Nhava Sheva",
    metaTitle: "Corrugated Box Manufacturer & Supplier — Mumbai & Nhava Sheva | Bhaavya Ecopack",
    metaDescription: "Bhaavya Ecopack supplies moisture-resistant, export-grade corrugated boxes to Mumbai & Nhava Sheva from its automatic plant at Kosamba, Surat. Quotes in 4 business hours.",
    kicker: "Service Area · 270 km · export corridor",
    qaAnswer: "Yes — Mumbai & Nhava Sheva is part of our pan-India supply network. Export-corridor despatches aligned to Nhava Sheva cut-offs. Quotations within 4 business hours; despatch from Kosamba, Surat on NH-48.",
    heroIntro: "Mumbai is India’s export gateway — Nhava Sheva (JNPT) moves the country’s largest containerised trade — and our export-corridor programme times moisture-resistant, container-fit consignments to vessel schedules there.",
    whoWeServe: ["Exporters & freight forwarders", "CFS & consolidation operators", "D2C brands fulfilling from MMR"],
    faqs: [{ q: "Who is the best corrugated box manufacturer near me in Mumbai & Nhava Sheva?", a: "Buyers in Mumbai & Nhava Sheva choose on four things: tested board (not claimed strength), moisture engineering, capacity headroom and response speed. Bhaavya Ecopack answers all four — IS 2771-referenced specs, Cobb-verified moisture-resistant board, 2,000 MT/month scaling to 8,000 MT/month from October 2026, and quotations in 4 business hours. Export-corridor despatches aligned to Nhava Sheva cut-offs." }, { q: "How fast can you deliver corrugated boxes to Mumbai & Nhava Sheva?", a: "Sampling comes first, then scheduled production with committed dispatch dates. Export-corridor despatches aligned to Nhava Sheva cut-offs." }, { q: "Do you serve small and large orders in Mumbai & Nhava Sheva?", a: "Yes — from trial lots to annual rate contracts, with genuine capacity headroom behind every commitment." }, { q: "What corrugated products are most ordered from Mumbai & Nhava Sheva?", a: "Moisture-resistant boxes, heavy-duty 5/7-ply shippers, printed cartons and export packaging lead — with die-cut inserts and ventilated trays close behind, depending on the industry mix." }],
  },
  {
    slug: "nagpur",
    cityLabel: "Nagpur",
    metaTitle: "Corrugated Box Manufacturer & Supplier — Nagpur | Bhaavya Ecopack",
    metaDescription: "Bhaavya Ecopack supplies moisture-resistant, export-grade corrugated boxes to Nagpur from its automatic plant at Kosamba, Surat. Quotes in 4 business hours.",
    kicker: "Service Area · Pan-India network",
    qaAnswer: "Yes — Nagpur is part of our pan-India supply network. Full-truck programmes on the Mumbai–Nagpur corridor. Quotations within 4 business hours; despatch from Kosamba, Surat on NH-48.",
    heroIntro: "Nagpur is India’s logistics zero-mile: MIHAN and the central warehousing belt hold goods for months, where creep — not peak strength — decides carton specs, alongside the famous orange trade’s ventilated-box season.",
    whoWeServe: ["MIHAN & logistics parks", "Food processing units", "Central warehousing"],
    faqs: [{ q: "Who is the best corrugated box manufacturer near me in Nagpur?", a: "Buyers in Nagpur choose on four things: tested board (not claimed strength), moisture engineering, capacity headroom and response speed. Bhaavya Ecopack answers all four — IS 2771-referenced specs, Cobb-verified moisture-resistant board, 2,000 MT/month scaling to 8,000 MT/month from October 2026, and quotations in 4 business hours. Full-truck programmes on the Mumbai–Nagpur corridor." }, { q: "How fast can you deliver corrugated boxes to Nagpur?", a: "Sampling comes first, then scheduled production with committed dispatch dates. Full-truck programmes on the Mumbai–Nagpur corridor." }, { q: "Do you serve small and large orders in Nagpur?", a: "Yes — from trial lots to annual rate contracts, with genuine capacity headroom behind every commitment." }, { q: "What corrugated products are most ordered from Nagpur?", a: "Moisture-resistant boxes, heavy-duty 5/7-ply shippers, printed cartons and export packaging lead — with die-cut inserts and ventilated trays close behind, depending on the industry mix." }],
  },
  {
    slug: "nashik",
    cityLabel: "Nashik",
    metaTitle: "Corrugated Box Manufacturer & Supplier — Nashik | Bhaavya Ecopack",
    metaDescription: "Bhaavya Ecopack supplies moisture-resistant, export-grade corrugated boxes to Nashik from its automatic plant at Kosamba, Surat. Quotes in 4 business hours.",
    kicker: "Service Area · Pan-India network",
    qaAnswer: "Yes — Nashik is part of our pan-India supply network. Consolidated despatches on the Surat–Nashik route. Quotations within 4 business hours; despatch from Kosamba, Surat on NH-48.",
    heroIntro: "Nashik ships wine, table grapes and engineering goods — three very different corrugated problems (bottle partitions, ventilated export trays, heavy-duty shippers) that we solve on one truck.",
    whoWeServe: ["Grape & produce exporters", "Winery & bottling units", "Engineering estates"],
    faqs: [{ q: "Who is the best corrugated box manufacturer near me in Nashik?", a: "Buyers in Nashik choose on four things: tested board (not claimed strength), moisture engineering, capacity headroom and response speed. Bhaavya Ecopack answers all four — IS 2771-referenced specs, Cobb-verified moisture-resistant board, 2,000 MT/month scaling to 8,000 MT/month from October 2026, and quotations in 4 business hours. Consolidated despatches on the Surat–Nashik route." }, { q: "How fast can you deliver corrugated boxes to Nashik?", a: "Sampling comes first, then scheduled production with committed dispatch dates. Consolidated despatches on the Surat–Nashik route." }, { q: "Do you serve small and large orders in Nashik?", a: "Yes — from trial lots to annual rate contracts, with genuine capacity headroom behind every commitment." }, { q: "What corrugated products are most ordered from Nashik?", a: "Moisture-resistant boxes, heavy-duty 5/7-ply shippers, printed cartons and export packaging lead — with die-cut inserts and ventilated trays close behind, depending on the industry mix." }],
  },
  {
    slug: "navsari",
    cityLabel: "Navsari",
    metaTitle: "Corrugated Box Manufacturer & Supplier — Navsari | Bhaavya Ecopack",
    metaDescription: "Bhaavya Ecopack supplies moisture-resistant, export-grade corrugated boxes to Navsari from its automatic plant at Kosamba, Surat. Quotes in 4 business hours.",
    kicker: "Service Area · 35 km · core radius",
    qaAnswer: "Yes — Navsari is inside our committed 160 km scheduled-route radius. On our daily southern route; harvest-season surge capacity planned in advance. Quotations within 4 business hours; despatch from Kosamba, Surat on NH-48.",
    heroIntro: "Navsari blends agro and industry — chikoo and mango orchards feeding seasonal produce packaging demand, plus textile processing and diamond units in the Surat orbit. Ventilated horticulture boxes and fabric cartons are the staple orders here.",
    whoWeServe: ["Chikoo & mango growers/packers", "Textile processors", "Local FMCG brands"],
    faqs: [{ q: "Who is the best corrugated box manufacturer near me in Navsari?", a: "Buyers in Navsari choose on four things: tested board (not claimed strength), moisture engineering, capacity headroom and response speed. Bhaavya Ecopack answers all four — IS 2771-referenced specs, Cobb-verified moisture-resistant board, 2,000 MT/month scaling to 8,000 MT/month from October 2026, and quotations in 4 business hours. On our daily southern route; harvest-season surge capacity planned in advance." }, { q: "How fast can you deliver corrugated boxes to Navsari?", a: "Sampling comes first, then scheduled production with committed dispatch dates. On our daily southern route; harvest-season surge capacity planned in advance." }, { q: "Do you serve small and large orders in Navsari?", a: "Yes — from trial lots to annual rate contracts, with genuine capacity headroom behind every commitment." }, { q: "What corrugated products are most ordered from Navsari?", a: "Moisture-resistant boxes, heavy-duty 5/7-ply shippers, printed cartons and export packaging lead — with die-cut inserts and ventilated trays close behind, depending on the industry mix." }],
  },
  {
    slug: "pune",
    cityLabel: "Pune",
    metaTitle: "Corrugated Box Manufacturer & Supplier — Pune | Bhaavya Ecopack",
    metaDescription: "Bhaavya Ecopack supplies moisture-resistant, export-grade corrugated boxes to Pune from its automatic plant at Kosamba, Surat. Quotes in 4 business hours.",
    kicker: "Service Area · Pan-India network",
    qaAnswer: "Yes — Pune is part of our pan-India supply network. Regular routes via the Mumbai–Pune corridor. Quotations within 4 business hours; despatch from Kosamba, Surat on NH-48.",
    heroIntro: "Pune’s auto OEM and tier-supplier ecosystem sets India’s benchmark for line-side packaging discipline — count accuracy, orientation, opening method — alongside engineering exporters replacing timber with 7-ply corrugated.",
    whoWeServe: ["Auto OEM & tier suppliers", "Engineering exporters", "Appliance manufacturers"],
    faqs: [{ q: "Who is the best corrugated box manufacturer near me in Pune?", a: "Buyers in Pune choose on four things: tested board (not claimed strength), moisture engineering, capacity headroom and response speed. Bhaavya Ecopack answers all four — IS 2771-referenced specs, Cobb-verified moisture-resistant board, 2,000 MT/month scaling to 8,000 MT/month from October 2026, and quotations in 4 business hours. Regular routes via the Mumbai–Pune corridor." }, { q: "How fast can you deliver corrugated boxes to Pune?", a: "Sampling comes first, then scheduled production with committed dispatch dates. Regular routes via the Mumbai–Pune corridor." }, { q: "Do you serve small and large orders in Pune?", a: "Yes — from trial lots to annual rate contracts, with genuine capacity headroom behind every commitment." }, { q: "What corrugated products are most ordered from Pune?", a: "Moisture-resistant boxes, heavy-duty 5/7-ply shippers, printed cartons and export packaging lead — with die-cut inserts and ventilated trays close behind, depending on the industry mix." }],
  },
  {
    slug: "rajkot",
    cityLabel: "Rajkot",
    metaTitle: "Corrugated Box Manufacturer & Supplier — Rajkot | Bhaavya Ecopack",
    metaDescription: "Bhaavya Ecopack supplies moisture-resistant, export-grade corrugated boxes to Rajkot from its automatic plant at Kosamba, Surat. Quotes in 4 business hours.",
    kicker: "Service Area · Pan-India network",
    qaAnswer: "Yes — Rajkot is part of our pan-India supply network. Full-truck and consolidated loads on the NH-27 corridor. Quotations within 4 business hours; despatch from Kosamba, Surat on NH-48.",
    heroIntro: "Rajkot is Saurashtra’s engineering hub — castings, forgings, machined parts, pumps and auto components — where part weight defeats ordinary board and 7-ply partitioned packs are the working answer.",
    whoWeServe: ["Engineering & casting units", "Pump & motor manufacturers", "Auto ancillary exporters"],
    faqs: [{ q: "Who is the best corrugated box manufacturer near me in Rajkot?", a: "Buyers in Rajkot choose on four things: tested board (not claimed strength), moisture engineering, capacity headroom and response speed. Bhaavya Ecopack answers all four — IS 2771-referenced specs, Cobb-verified moisture-resistant board, 2,000 MT/month scaling to 8,000 MT/month from October 2026, and quotations in 4 business hours. Full-truck and consolidated loads on the NH-27 corridor." }, { q: "How fast can you deliver corrugated boxes to Rajkot?", a: "Sampling comes first, then scheduled production with committed dispatch dates. Full-truck and consolidated loads on the NH-27 corridor." }, { q: "Do you serve small and large orders in Rajkot?", a: "Yes — from trial lots to annual rate contracts, with genuine capacity headroom behind every commitment." }, { q: "What corrugated products are most ordered from Rajkot?", a: "Moisture-resistant boxes, heavy-duty 5/7-ply shippers, printed cartons and export packaging lead — with die-cut inserts and ventilated trays close behind, depending on the industry mix." }],
  },
  {
    slug: "surat",
    cityLabel: "Surat",
    metaTitle: "Corrugated Box Manufacturer & Supplier — Surat | Bhaavya Ecopack",
    metaDescription: "Bhaavya Ecopack supplies moisture-resistant, export-grade corrugated boxes to Surat from its automatic plant at Kosamba, Surat. Quotes in 4 business hours.",
    kicker: "Service Area · 0–30 km · core radius",
    qaAnswer: "Yes — Surat is inside our committed 160 km scheduled-route radius. Same-belt scheduled routes — often next-day; sampling and plant visits welcome. Quotations within 4 business hours; despatch from Kosamba, Surat on NH-48.",
    heroIntro: "Surat cuts and polishes about 90% of the world’s diamonds and weaves roughly 60% of India’s synthetic fabric — an economy of 41,000+ SMEs spread across estates like Sachin GIDC (749 hectares, 2,400+ units, one of Asia’s largest industrial settlements), Pandesara, Katargam, Udhna and the Surat Apparel Park. Add the Hazira corridor and NH-48 logistics parks at Palsana, and you have one of India’s densest corrugated-demand zones.",
    whoWeServe: ["Textile mills & processors (Sachin, Pandesara)", "Diamond & jewellery packaging", "FMCG, food & e-commerce brands", "Engineering & export houses"],
    faqs: [{ q: "Who is the best corrugated box manufacturer near me in Surat?", a: "Buyers in Surat choose on four things: tested board (not claimed strength), moisture engineering, capacity headroom and response speed. Bhaavya Ecopack answers all four — IS 2771-referenced specs, Cobb-verified moisture-resistant board, 2,000 MT/month scaling to 8,000 MT/month from October 2026, and quotations in 4 business hours. Same-belt scheduled routes — often next-day; sampling and plant visits welcome." }, { q: "How fast can you deliver corrugated boxes to Surat?", a: "Sampling comes first, then scheduled production with committed dispatch dates. Same-belt scheduled routes — often next-day; sampling and plant visits welcome." }, { q: "Do you serve small and large orders in Surat?", a: "Yes — from trial lots to annual rate contracts, with genuine capacity headroom behind every commitment." }, { q: "What corrugated products are most ordered from Surat?", a: "Moisture-resistant boxes, heavy-duty 5/7-ply shippers, printed cartons and export packaging lead — with die-cut inserts and ventilated trays close behind, depending on the industry mix." }],
  },
  {
    slug: "vadodara",
    cityLabel: "Vadodara",
    metaTitle: "Corrugated Box Manufacturer & Supplier — Vadodara | Bhaavya Ecopack",
    metaDescription: "Bhaavya Ecopack supplies moisture-resistant, export-grade corrugated boxes to Vadodara from its automatic plant at Kosamba, Surat. Quotes in 4 business hours.",
    kicker: "Service Area · 150 km · core radius",
    qaAnswer: "Yes — Vadodara is inside our committed 160 km scheduled-route radius. Inside our committed 160 km radius; scheduled northern-corridor runs. Quotations within 4 business hours; despatch from Kosamba, Surat on NH-48.",
    heroIntro: "Vadodara is Gujarat’s engineering capital and a pharma heavyweight — the state holds ~33% of India’s drug manufacturing and 130 USFDA-approved facilities, many in this belt — alongside heavy engineering, petrochemicals and capital-goods exporters who specify crate-replacement corrugated.",
    whoWeServe: ["Engineering & capital goods", "Pharma formulations", "Auto ancillaries & exporters"],
    faqs: [{ q: "Who is the best corrugated box manufacturer near me in Vadodara?", a: "Buyers in Vadodara choose on four things: tested board (not claimed strength), moisture engineering, capacity headroom and response speed. Bhaavya Ecopack answers all four — IS 2771-referenced specs, Cobb-verified moisture-resistant board, 2,000 MT/month scaling to 8,000 MT/month from October 2026, and quotations in 4 business hours. Inside our committed 160 km radius; scheduled northern-corridor runs." }, { q: "How fast can you deliver corrugated boxes to Vadodara?", a: "Sampling comes first, then scheduled production with committed dispatch dates. Inside our committed 160 km radius; scheduled northern-corridor runs." }, { q: "Do you serve small and large orders in Vadodara?", a: "Yes — from trial lots to annual rate contracts, with genuine capacity headroom behind every commitment." }, { q: "What corrugated products are most ordered from Vadodara?", a: "Moisture-resistant boxes, heavy-duty 5/7-ply shippers, printed cartons and export packaging lead — with die-cut inserts and ventilated trays close behind, depending on the industry mix." }],
  },
  {
    slug: "vapi-ankleshwar",
    cityLabel: "Vapi – Valsad belt",
    metaTitle: "Corrugated Box Manufacturer & Supplier — Vapi – Valsad belt | Bhaavya Ecopack",
    metaDescription: "Bhaavya Ecopack supplies moisture-resistant, export-grade corrugated boxes to Vapi – Valsad belt from its automatic plant at Kosamba, Surat. Quotes in 4 business hours.",
    kicker: "Service Area · 95–120 km · core radius",
    qaAnswer: "Yes — Vapi – Valsad belt is inside our committed 160 km scheduled-route radius. Regular southern-corridor routes; consolidated and full-truck options. Quotations within 4 business hours; despatch from Kosamba, Surat on NH-48.",
    heroIntro: "Vapi anchors the southern end of Gujarat’s \"golden corridor\" — a 5,000+ SME chemical, dye, paper and packaging belt running through Valsad. GPCB and CETP-linked compliance culture here extends to packaging: buyers ask for tested board and documented lots.",
    whoWeServe: ["Chemical & dye manufacturers", "Paper & packaging converters", "Pharma intermediates"],
    faqs: [{ q: "Who is the best corrugated box manufacturer near me in Vapi – Valsad belt?", a: "Buyers in Vapi – Valsad belt choose on four things: tested board (not claimed strength), moisture engineering, capacity headroom and response speed. Bhaavya Ecopack answers all four — IS 2771-referenced specs, Cobb-verified moisture-resistant board, 2,000 MT/month scaling to 8,000 MT/month from October 2026, and quotations in 4 business hours. Regular southern-corridor routes; consolidated and full-truck options." }, { q: "How fast can you deliver corrugated boxes to Vapi – Valsad belt?", a: "Sampling comes first, then scheduled production with committed dispatch dates. Regular southern-corridor routes; consolidated and full-truck options." }, { q: "Do you serve small and large orders in Vapi – Valsad belt?", a: "Yes — from trial lots to annual rate contracts, with genuine capacity headroom behind every commitment." }, { q: "What corrugated products are most ordered from Vapi – Valsad belt?", a: "Moisture-resistant boxes, heavy-duty 5/7-ply shippers, printed cartons and export packaging lead — with die-cut inserts and ventilated trays close behind, depending on the industry mix." }],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export interface ServiceAreaCard {
  slug: string;
  label: string;
  teaser: string;
}

export interface ServiceAreaGroup {
  name: string;
  cards: ServiceAreaCard[];
}

// Listing-page card copy (labels/teasers distinct from the detail-page
// content) — matches the original service-areas.html curation exactly.
export const serviceAreaGroups: ServiceAreaGroup[] = [
  {
    name: "Core radius · within 160 km of Surat",
    cards: [
      { slug: "surat", label: "Surat", teaser: "0–30 km from our Kosamba plant" },
      { slug: "hazira", label: "Hazira", teaser: "25 km from our Kosamba plant" },
      { slug: "navsari", label: "Navsari", teaser: "35 km from our Kosamba plant" },
      { slug: "bharuch", label: "Bharuch & Ankleshwar", teaser: "60–70 km from our Kosamba plant" },
      { slug: "vapi-ankleshwar", label: "Vapi – Valsad belt", teaser: "95–120 km from our Kosamba plant" },
      { slug: "daman-silvassa", label: "Daman & Silvassa", teaser: "125 km from our Kosamba plant" },
      { slug: "vadodara", label: "Vadodara", teaser: "150 km from our Kosamba plant" },
    ],
  },
  {
    name: "Gujarat & export corridors",
    cards: [
      { slug: "ahmedabad", label: "Ahmedabad", teaser: "265 km · scheduled routes" },
      { slug: "mumbai", label: "Mumbai & Nhava Sheva", teaser: "270 km · export corridor" },
    ],
  },
  {
    name: "Pan-India supply network",
    cards: [
      { slug: "morbi", label: "Morbi", teaser: "Scheduled full-truck despatches via Rajkot corridor; export documentation-ready." },
      { slug: "rajkot", label: "Rajkot", teaser: "Full-truck and consolidated loads on the NH-27 corridor." },
      { slug: "jamnagar", label: "Jamnagar", teaser: "Consolidated freight via Rajkot; export-grade options for port routing." },
      { slug: "gandhidham-mundra", label: "Gandhidham & Mundra", teaser: "Direct port-corridor despatches timed to your stuffing schedule." },
      { slug: "delhi-ncr", label: "Delhi NCR", teaser: "Planned weekly full-truck programmes; MOQ-based scheduling." },
      { slug: "jaipur", label: "Jaipur", teaser: "Consolidated loads on the Ahmedabad–Jaipur corridor." },
      { slug: "indore", label: "Indore", teaser: "Scheduled full-truck despatches via NH-52/NH-47." },
      { slug: "nagpur", label: "Nagpur", teaser: "Full-truck programmes on the Mumbai–Nagpur corridor." },
      { slug: "pune", label: "Pune", teaser: "Regular routes via Mumbai–Pune expressway corridor." },
      { slug: "nashik", label: "Nashik", teaser: "Consolidated despatches on the Surat–Nashik route." },
      { slug: "bengaluru", label: "Bengaluru", teaser: "Volume-based full-truck programmes; planned lead times." },
      { slug: "hyderabad", label: "Hyderabad", teaser: "Scheduled programmes with documentation per lot." },
      { slug: "chennai", label: "Chennai", teaser: "Full-truck programmes; export-marked despatches." },
      { slug: "kolkata", label: "Kolkata", teaser: "Planned consolidated freight; monsoon-proof board specs." },
    ],
  },
];
