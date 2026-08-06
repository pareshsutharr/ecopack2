"use client";

import { useEffect, useRef, type ReactNode } from "react";

export interface FlowStep {
  icon: ReactNode;
  title: string;
  text: string;
  time: string;
}

/**
 * Ports index.html's #pflow/#pbar process flow — the more advanced sibling
 * of ProcessFlow.tsx, supporting both a vertical (mobile, <=1024px) and
 * horizontal (desktop) progress bar driven by scroll position.
 */
export default function ProcessFlowAdvanced({ steps }: { steps: FlowStep[] }) {
  const flowRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const flow = flowRef.current;
    const bar = barRef.current;
    if (!flow || !bar) return;
    const vert = () => innerWidth <= 1024;

    const update = () => {
      const r = flow.getBoundingClientRect();
      const p = Math.min(Math.max((innerHeight * 0.72 - r.top) / (r.height * 0.9), 0), 1);
      if (vert()) {
        bar.style.height = p * 92 + "%";
        bar.style.width = "3px";
      } else {
        bar.style.width = p * 94 + "%";
        bar.style.height = "3px";
      }
      flow.querySelectorAll<HTMLElement>(".pstep").forEach((s) => {
        const sr = s.getBoundingClientRect();
        s.classList.toggle(
          "on",
          vert() ? sr.top < innerHeight * 0.78 : sr.left + sr.width * 0.4 < innerWidth * (0.12 + p * 0.95)
        );
      });
    };

    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    update();
    return () => {
      removeEventListener("scroll", update);
      removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="pflow" id="pflow" ref={flowRef}>
      <div className="bar" id="pbar" ref={barRef} />
      {steps.map((s, i) => (
        <div className="pstep" key={s.title}>
          <div className="node">
            {s.icon}
            <span className="n">{i + 1}</span>
          </div>
          <b>{s.title}</b>
          <p>{s.text}</p>
          <span className="tm">{s.time}</span>
        </div>
      ))}
    </div>
  );
}
