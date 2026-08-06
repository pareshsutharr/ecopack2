"use client";

import { useState } from "react";

const panels = [
  {
    label: "3-Ply",
    flute: (
      <svg viewBox="0 0 400 130">
        <rect x="10" y="20" width="380" height="8" rx="4" fill="#5C4937" />
        <path
          d="M10 60 q12 -26 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t12 0"
          stroke="#BAA378"
          strokeWidth={7}
          fill="none"
        />
        <rect x="10" y="92" width="380" height="8" rx="4" fill="#5C4937" />
      </svg>
    ),
    caption: "Single wall · Liner — Flute — Liner",
    title: "3-Ply · Single Wall",
    use: "Best for lightweight retail packs, e-commerce & inner cartons",
    specs: [
      { label: "Load capacity", value: "Up to ~15 kg per box", gauge: 30 },
      { label: "Flute options", value: "B, C or E flute — E for premium print surface" },
      { label: "GSM range", value: "100–250 GSM liners, customized to specification" },
      { label: "Printing", value: "Excellent — flattest surface for multi-colour branding" },
      { label: "Typical uses", value: "FMCG cartons, apparel, courier parcels, shelf-ready packs" },
    ],
  },
  {
    label: "5-Ply",
    flute: (
      <svg viewBox="0 0 400 190">
        <rect x="10" y="15" width="380" height="8" rx="4" fill="#5C4937" />
        <path
          d="M10 52 q10 -22 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t10 0"
          stroke="#BAA378"
          strokeWidth={6}
          fill="none"
        />
        <rect x="10" y="86" width="380" height="8" rx="4" fill="#8a7460" />
        <path
          d="M10 128 q14 -30 28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t14 0"
          stroke="#BAA378"
          strokeWidth={7}
          fill="none"
        />
        <rect x="10" y="160" width="380" height="8" rx="4" fill="#5C4937" />
      </svg>
    ),
    caption: "Double wall · Two flutes, three liners",
    title: "5-Ply · Double Wall",
    use: "Best for shipping cartons, exports & stacked warehouse loads",
    specs: [
      { label: "Load capacity", value: "~15–40 kg per box", gauge: 62 },
      { label: "Flute options", value: "BC combination — strength plus cushioning" },
      { label: "GSM range", value: "100–250 GSM liners; kraft or moisture-coated" },
      { label: "Stacking", value: "Engineered BCT for multi-tier container stacking" },
      { label: "Typical uses", value: "Export cartons, textiles & yarn, engineering goods, produce" },
    ],
  },
  {
    label: "7-Ply",
    flute: (
      <svg viewBox="0 0 400 250">
        <rect x="10" y="12" width="380" height="8" rx="4" fill="#5C4937" />
        <path
          d="M10 46 q10 -20 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t10 0"
          stroke="#BAA378"
          strokeWidth={6}
          fill="none"
        />
        <rect x="10" y="76" width="380" height="8" rx="4" fill="#8a7460" />
        <path
          d="M10 114 q12 -26 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t12 0"
          stroke="#BAA378"
          strokeWidth={7}
          fill="none"
        />
        <rect x="10" y="146" width="380" height="8" rx="4" fill="#8a7460" />
        <path
          d="M10 188 q14 -30 28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t14 0"
          stroke="#BAA378"
          strokeWidth={8}
          fill="none"
        />
        <rect x="10" y="222" width="380" height="8" rx="4" fill="#5C4937" />
      </svg>
    ),
    caption: "Triple wall · Three flutes, four liners",
    title: "7-Ply · Triple Wall",
    use: "Best for heavy industrial loads, machinery, solar & white goods",
    specs: [
      { label: "Load capacity", value: "40 kg and above — crate-replacement strength", gauge: 96 },
      { label: "Structure", value: "Wooden-crate alternative at a fraction of the weight" },
      { label: "GSM range", value: "Up to 350+ GSM liners; moisture-resistant options" },
      { label: "Stacking", value: "Highest BCT — palletized industrial & export stacking" },
      { label: "Typical uses", value: "Solar panels, appliances, auto assemblies, octabins" },
    ],
  },
];

export default function BoardGuide() {
  const [active, setActive] = useState(0);

  return (
    <>
      <div style={{ textAlign: "center" }} className="rv">
        <div className="tabs" data-tabs=".bpanel">
          {panels.map((p, i) => (
            <button
              key={p.label}
              type="button"
              className={`tab${active === i ? " on" : ""}`}
              data-b={i}
              onClick={() => setActive(i)}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
      {panels.map((p, i) => (
        <div className={`bpanel${active === i ? " on" : ""}`} data-bp={i} key={p.label}>
          <div className="flute">
            {p.flute}
            <div className="cap">{p.caption}</div>
          </div>
          <div>
            <h3>{p.title}</h3>
            <span className="use">{p.use}</span>
            <table className="spec-t">
              <tbody>
                {p.specs.map((s) => (
                  <tr key={s.label}>
                    <th>{s.label}</th>
                    <td>
                      {s.value}
                      {s.gauge != null && (
                        <div className="gauge">
                          <i style={{ width: `${s.gauge}%` }} />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  );
}
