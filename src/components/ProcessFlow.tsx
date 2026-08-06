"use client";

import { useEffect, useRef } from "react";

export interface ProcessFlowStep {
  n: string;
  title: string;
  text: string;
  gate: string;
}

/**
 * Ports js/site.js's #flow scroll-driven vertical timeline: the connecting
 * line fills based on scroll position, and each step lights up once its
 * top crosses the 62%-viewport-height threshold.
 */
export default function ProcessFlow({ steps }: { steps: ProcessFlowStep[] }) {
  const flowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const flow = flowRef.current;
    if (!flow) return;
    const line = flow.querySelector<HTMLElement>(".line i");
    const stepEls = [...flow.querySelectorAll<HTMLElement>(".fstep")];
    if (!line) return;

    const update = () => {
      const r = flow.getBoundingClientRect();
      const p = Math.min(Math.max((innerHeight * 0.6 - r.top) / r.height, 0), 1);
      line.style.height = p * 100 + "%";
      stepEls.forEach((s) => {
        const sr = s.getBoundingClientRect();
        s.classList.toggle("on", sr.top < innerHeight * 0.62);
      });
    };

    addEventListener("scroll", update, { passive: true });
    update();
    return () => removeEventListener("scroll", update);
  }, []);

  return (
    <div className="flow" id="flow" ref={flowRef}>
      <div className="line">
        <i />
      </div>
      {steps.map((s) => (
        <div className="fstep" key={s.n}>
          <div className="fn">{s.n}</div>
          <h3>{s.title}</h3>
          <p style={{ maxWidth: "64ch" }}>{s.text}</p>
          <span className="gate">{s.gate}</span>
        </div>
      ))}
    </div>
  );
}
