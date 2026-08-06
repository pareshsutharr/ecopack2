const WAVE_PATH =
  "M0 0 Q 5 -6 10 0 T 20 0 T 30 0 T 40 0 T 50 0 T 60 0 T 70 0 T 80 0 T 90 0 T 100 0 T 110 0 T 120 0";

const LABELS: Record<number, string> = {
  3: "3-Ply · Single wall",
  5: "5-Ply · Double wall",
  7: "7-Ply · Triple wall",
};

// The product-page ply cross-section diagrams are a liner/flute sandwich
// repeated N times (N = flute-layer count = (ply-1)/2); this generates the
// exact SVG the original site hand-authored per ply count, geometrically.
export default function PlyDiagram({ ply }: { ply: number }) {
  const flutes = (ply - 1) / 2;
  const height = 19 + flutes * 21;
  const liners = Array.from({ length: flutes + 1 }, (_, i) => 6 + i * 21);

  return (
    <figure>
      <svg
        width={130}
        height={height}
        viewBox={`0 0 130 ${height}`}
        role="img"
        aria-label={`${ply}-ply corrugated board cross-section`}
      >
        {liners.map((y) => (
          <rect key={y} x={4} y={y} width={122} height={5} rx={2} fill="#8A6F52" />
        ))}
        {liners.slice(0, -1).map((y) => (
          <g key={y} transform={`translate(5,${y + 13})`}>
            <path d={WAVE_PATH} stroke="#B08F63" strokeWidth={3} fill="none" />
          </g>
        ))}
      </svg>
      <figcaption>{LABELS[ply] ?? `${ply}-Ply`}</figcaption>
    </figure>
  );
}
