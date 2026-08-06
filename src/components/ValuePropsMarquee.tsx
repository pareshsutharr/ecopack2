import { Fragment } from "react";

const items = [
  {
    path: "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.9 2.9-2.1-2.1 2.9-2.9z",
    label: "Custom Packaging Solutions",
  },
  {
    path: "M12 2 2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5",
    label: "Bulk Supply Capability",
  },
  {
    path: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",
    label: "Industry-Specific Expertise",
  },
  {
    path: "M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
    label: "Quality-Focused Manufacturing",
  },
  {
    path: "M1 3h15v13H1zM16 8h4l3 3v5h-7zM5.5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18.5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    label: "Timely Delivery Support",
  },
];

// Pure CSS marquee (animation: mq, defined in home.css) — content is
// duplicated so the -50% translateX loop is seamless.
export default function ValuePropsMarquee() {
  const looped = [...items, ...items];
  return (
    <div className="mq" aria-label="Why buyers choose Bhaavya Ecopack">
      <div className="track">
        {looped.map((it, i) => (
          <Fragment key={`${it.label}-${i}`}>
            <span className="it">
              <svg viewBox="0 0 24 24">
                <path d={it.path} />
              </svg>
              {it.label}
            </span>
            <span className="dot" />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
