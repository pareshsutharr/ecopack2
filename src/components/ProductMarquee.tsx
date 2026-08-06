import Link from "next/link";
import { marqueeIcons, marqueeProducts } from "@/data/product-marquee";

// Pure CSS marquee (animation: mq, defined in home.css) — content is
// duplicated so the -50% translateX loop is seamless.
export default function ProductMarquee() {
  const items = [...marqueeProducts, ...marqueeProducts];
  return (
    <div className="pmq" aria-label="All 28 corrugated products">
      <div className="track">
        {items.map((p, i) => (
          <Link href={p.href} key={`${p.href}-${i}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
              <path d={marqueeIcons[p.icon]} />
            </svg>
            {p.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
