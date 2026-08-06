"use client";

import { useRef } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

/**
 * Ports js/site.js's single-open FAQ accordion: native <details>/<summary>
 * (works with no JS at all for the toggle itself), plus a listener that
 * closes any other open item in the same group when one is opened.
 */
export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  const handleToggle = (e: React.SyntheticEvent<HTMLDetailsElement>) => {
    if (!e.currentTarget.open || !rootRef.current) return;
    rootRef.current
      .querySelectorAll("details")
      .forEach((d) => {
        if (d !== e.currentTarget) d.removeAttribute("open");
      });
  };

  return (
    <div className="faq" ref={rootRef}>
      {items.map((item) => (
        <details key={item.q} onToggle={handleToggle}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
