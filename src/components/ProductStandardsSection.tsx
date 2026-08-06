import PlyDiagram from "./PlyDiagram";
import {
  is2771Table,
  is2771BandNames,
  strengthParagraphs,
  moistureParagraphs,
  sustainabilityParagraphs,
} from "@/data/product-boilerplate";

export default function ProductStandardsSection({
  title,
  plyOptions,
  secondSection,
}: {
  title: string;
  plyOptions: number[];
  secondSection: "strength" | "moisture";
}) {
  const secondHeading =
    secondSection === "strength" ? "Strength you can calculate" : "Moisture & transit performance";
  const secondParagraphs = secondSection === "strength" ? strengthParagraphs : moistureParagraphs;

  return (
    <section>
      <div className="wrap">
        <h2 style={{ marginBottom: 12 }}>Engineering &amp; standards — IS 2771 (Part 1): 2022</h2>
        <p className="lead" style={{ fontSize: 15.5, marginBottom: 18 }}>
          Indian corrugated boxes are governed by IS 2771:2022, which ties board type to the
          maximum mass of contents and prescribes minimum bursting strength and — new in the 2022
          revision — a minimum Edge Crush Test value. The rows relevant to {title.toLowerCase()}:
        </p>

        <div className="plyviz rv">
          {plyOptions.map((ply) => (
            <PlyDiagram ply={ply} key={ply} />
          ))}
          <div style={{ flex: 1, minWidth: 220 }}>
            <b style={{ fontFamily: "var(--font-archivo)", color: "var(--ink)" }}>
              Board construction
            </b>
            <p style={{ fontSize: 13.5, color: "var(--gray-600)", lineHeight: 1.6, marginTop: 6 }}>
              Kraft liners (dark) bonded to fluted medium (waves). More walls = more stacking
              backbone — the exact minimums are in the IS 2771:2022 table below.
            </p>
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table className="spec" style={{ minWidth: 560 }}>
            <tbody>
              <tr>
                <th>Board type</th>
                <th>Max contents</th>
                <th>Max L+W+H</th>
                <th>Min bursting strength</th>
                <th>Min ECT</th>
              </tr>
              {plyOptions.map((ply) =>
                is2771Table[ply].map((row, i) => (
                  <tr key={`${ply}-${row.label}`}>
                    {i === 0 && <th rowSpan={is2771Table[ply].length}>{is2771BandNames[ply]}</th>}
                    <td>{row.label}</td>
                    <td>{row.maxLWH}</td>
                    <td>{row.burst}</td>
                    <td>{row.ect}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 13, color: "var(--gray-500)", marginTop: 8 }}>
          Reference values from IS 2771 (Part 1): 2022, Bureau of Indian Standards — the governing
          Indian specification for corrugated fibreboard boxes. We engineer to or beyond these
          minimums for your load.
        </p>

        <h2 style={{ margin: "34px 0 12px" }}>{secondHeading}</h2>
        {secondParagraphs.map((p, i) => (
          <p className="lead" style={{ fontSize: 15.5, marginTop: i > 0 ? 14 : 0 }} key={i}>
            {p}
          </p>
        ))}

        <h2 style={{ margin: "34px 0 12px" }}>Sustainability &amp; commercials</h2>
        {sustainabilityParagraphs.map((p, i) => (
          <p className="lead" style={{ fontSize: 15.5, marginTop: i > 0 ? 14 : 0 }} key={i}>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
