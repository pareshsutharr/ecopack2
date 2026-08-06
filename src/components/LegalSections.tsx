export interface LegalSection {
  heading: string;
  body: string;
}

export default function LegalSections({ sections }: { sections: LegalSection[] }) {
  return (
    <section>
      <div className="wrap" style={{ maxWidth: 820 }}>
        {sections.map((s) => (
          <div key={s.heading}>
            <h2 style={{ margin: "26px 0 8px" }}>{s.heading}</h2>
            <p style={{ color: "var(--gray-600)", lineHeight: 1.7 }}>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
