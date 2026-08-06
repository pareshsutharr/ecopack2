"use client";

import { useEffect, useState } from "react";

const DAY = 86400000;
const MT: [number, number][] = [
  [Date.UTC(2021, 0, 1), 2000],
  [Date.UTC(2026, 9, 1), 8000],
]; // MT per month
const SUN: [number, number][] = [
  [Date.UTC(2023, 0, 1), 1500],
  [Date.UTC(2026, 9, 1), 3000],
]; // units per day
const FACTORS = { co2: 0.18, tree: 17, h2o: 26500, kwh: 4100 };

function accumulate(t: number, table: [number, number][], perMonth: boolean) {
  let tot = 0;
  for (let i = 0; i < table.length; i++) {
    const s = table[i][0];
    const r = perMonth ? table[i][1] / 30.4375 : table[i][1];
    const e = i + 1 < table.length ? table[i + 1][0] : t;
    if (t > s) tot += ((Math.min(t, e) - s) / DAY) * r;
  }
  return tot;
}

const fmt = (n: number) => Math.floor(n).toLocaleString("en-IN");

/**
 * Ports index.html's live "impact" counters: time-accumulated production
 * tonnage (piecewise rate table) converted into environmental equivalences,
 * re-ticked every second.
 */
export default function ImpactCounters() {
  // Starts at 0 (matching the original's static "0" placeholders) so
  // server-rendered and first-client-render HTML match; the effect below
  // fills in the real, time-dependent values right after mount.
  const [values, setValues] = useState({ mt: 0, co2: 0, tree: 0, h2o: 0, kwh: 0, sun: 0 });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const T = accumulate(now, MT, true);
      setValues({
        mt: T,
        co2: T * FACTORS.co2,
        tree: T * FACTORS.tree,
        h2o: T * FACTORS.h2o,
        kwh: T * FACTORS.kwh,
        sun: accumulate(now, SUN, false),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="impact rv" id="impact">
      <div className="lt">
        <span className="dot" />
        LIVE · Production &amp; planet impact since 2021
      </div>
      <div className="grid6">
        <div className="m">
          <b id="imp-mt">{fmt(values.mt)}</b>
          <span>Metric tonnes of corrugated packaging produced till date</span>
        </div>
        <div className="m">
          <b>
            <em id="imp-co2">{fmt(values.co2)}</em> t
          </b>
          <span>CO₂ emissions avoided vs virgin-fibre production</span>
        </div>
        <div className="m">
          <b>
            <em id="imp-tree">{fmt(values.tree)}</em>
          </b>
          <span>Trees saved through recycled-fibre manufacturing</span>
        </div>
        <div className="m">
          <b>
            <em id="imp-h2o">{fmt(values.h2o)}</em> L
          </b>
          <span>Water conserved vs virgin paper processes</span>
        </div>
        <div className="m">
          <b>
            <em id="imp-kwh">{fmt(values.kwh)}</em> kWh
          </b>
          <span>Energy saved through recycled-fibre production</span>
        </div>
        <div className="m">
          <b>
            <em id="imp-sun">{fmt(values.sun)}</em>
          </b>
          <span>Solar units (kWh) generated on-site since 2023</span>
        </div>
      </div>
      <div className="cav">
        Live estimates: corrugated production at 2,000 MT/month since January 2021, stepping to
        8,000 MT/month from October 2026. Environmental factors per tonne of recycled-fibre board
        vs virgin: ~180 kg CO₂, ~17 trees, ~26,500 L water, ~4,100 kWh (US EPA, DEFRA — ballpark
        equivalences; actuals vary by process, energy mix and recycled content). On-site solar
        generation counted at 1,500 units/day since 2023, rising to 3,000 units/day in total from
        October 2026.
      </div>
    </div>
  );
}
