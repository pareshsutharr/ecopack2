"use client";

import { useState } from "react";
import Link from "next/link";
import { industries } from "@/data/industries";

function NeedsIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5zM3 7l9 5 9-5" />
    </svg>
  );
}
function ChallengeIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
    </svg>
  );
}
function SolutionIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M22 11.1V12a10 10 0 1 1-5.9-9.1" />
      <path d="M22 4 12 14l-3-3" />
    </svg>
  );
}
function BoxIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M21 8 12 3 3 8v8l9 5 9-5V8zM3 8l9 5 9-5" />
    </svg>
  );
}

export default function IndustrySelector() {
  const [active, setActive] = useState("pharmaceutical");
  const industry = industries.find((i) => i.slug === active) ?? industries[0];
  const primary = industry.recommendedProducts[0];

  return (
    <div className="wrap iselect">
      <div className="shead center rv">
        <span className="kicker">Industry Use-Cases</span>
        <h2>All 21 industries. Click yours — see exactly how we&apos;d pack it.</h2>
      </div>
      <div className="tabs rv">
        {industries.map((ind) => (
          <button
            key={ind.slug}
            type="button"
            data-i={ind.slug}
            className={active === ind.slug ? "on" : ""}
            onClick={() => setActive(ind.slug)}
          >
            <i>{ind.fullName}</i>
            {ind.title}
          </button>
        ))}
      </div>

      <div className="ipanel rv swap" id="ipanel" key={industry.slug}>
        <div className="maprow">
          <span className="lblm">Industry → Solution mapping</span>
          <span className="node">
            <i>{industry.icon}</i>
            {industry.title}
          </span>
          <span className="arrow" />
          <Link className="node" href={primary.href}>
            <i>📦</i>
            {primary.label}
          </Link>
        </div>
        <div className="cols">
          <div>
            <h4>
              <NeedsIcon />
              Packaging needs
            </h4>
            <ul>
              {industry.needs.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>
              <ChallengeIcon />
              Common challenges
            </h4>
            <ul>
              {industry.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>
              <SolutionIcon />
              Our solution
            </h4>
            <ul>
              {industry.solutions.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rec">
          <div className="bx">
            <span style={{ fontWeight: 700, color: "var(--brown-600)" }}>Recommended:</span>
            {industry.recommendedProducts.map((p) => (
              <Link className="b" href={p.href} key={p.href}>
                <BoxIcon />
                {p.label}
              </Link>
            ))}
          </div>
          <Link className="btn btn-primary" href={`/industries/${industry.slug}`}>
            Full {industry.title} guide
          </Link>
        </div>
      </div>

      <p style={{ textAlign: "center", marginTop: 26 }}>
        <Link className="btn btn-secondary" href="/industries">
          Open all 21 industry pages
        </Link>
      </p>
    </div>
  );
}
