import Link from "next/link";
import type { ReactNode } from "react";

export default function PageHero({
  breadcrumb,
  kicker,
  title,
  lead,
}: {
  breadcrumb: string;
  kicker: string;
  title: ReactNode;
  lead: ReactNode;
}) {
  return (
    <section className="phero">
      <div className="wrap">
        <div className="crumbs">
          <Link href="/">Home</Link> &nbsp;/&nbsp; {breadcrumb}
        </div>
        <span className="kicker">{kicker}</span>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
      </div>
    </section>
  );
}
