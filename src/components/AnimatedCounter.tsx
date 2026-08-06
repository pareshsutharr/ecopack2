"use client";

import { useEffect, useRef } from "react";

/**
 * Ports js/site.js's [data-count] counter: counts up from 0 to `end` over
 * 1.5s with an ease-out cubic curve, starting once the element is 50% visible.
 */
export default function AnimatedCounter({ end }: { end: number }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const t0 = performance.now();
          const step = (t: number) => {
            const p = Math.min((t - t0) / 1500, 1);
            const z = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(end * z).toLocaleString("en-IN");
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end]);

  return (
    <b
      ref={ref}
      style={{ fontFamily: "var(--font-archivo)", fontSize: 32, color: "var(--ink)" }}
    >
      0
    </b>
  );
}
