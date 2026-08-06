"use client";

import { useEffect, useRef } from "react";

export interface GaugeItem {
  value: number; // 0..1
  title: string;
  subtitle: string;
  text: string;
}

/**
 * Ports js/site.js's .gauges arc animation: each .arc's stroke-dashoffset
 * animates in once the .gauges container is 40% visible.
 */
export default function Gauges({ items }: { items: GaugeItem[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.querySelectorAll<SVGPathElement>(".arc").forEach((a) => {
            const v = parseFloat(a.dataset.v || "0");
            a.style.strokeDashoffset = String(220 - 220 * v);
          });
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );
    io.observe(root);
    return () => io.disconnect();
  }, []);

  return (
    <div className="gauges" ref={rootRef}>
      {items.map((g, i) => (
        <div className={`gau rv${i === 1 ? " rv2" : i === 2 ? " rv3" : ""}`} key={g.title}>
          <svg viewBox="0 0 160 95">
            <path className="arc-bg" d="M15 85 A65 65 0 0 1 145 85" />
            <path className="arc" data-v={g.value} d="M15 85 A65 65 0 0 1 145 85" />
          </svg>
          <b>{g.title}</b>
          <span>{g.subtitle}</span>
          <p>{g.text}</p>
        </div>
      ))}
    </div>
  );
}
