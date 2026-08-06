"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredProducts } from "@/data/featured-products";
import { industries } from "@/data/industries";

export default function ProductFinder() {
  const [filter, setFilter] = useState("all");

  return (
    <>
      <div className="chips" id="pfilter">
        <button type="button" data-f="all" className={filter === "all" ? "on" : ""} onClick={() => setFilter("all")}>
          All
        </button>
        {industries.map((ind) => (
          <button
            key={ind.slug}
            type="button"
            data-f={ind.slug}
            className={filter === ind.slug ? "on" : ""}
            onClick={() => setFilter(ind.slug)}
          >
            {ind.title}
          </button>
        ))}
      </div>
      <div className="grid3 pgrid" id="pgrid">
        {featuredProducts.map((p, i) => {
          const dim = filter !== "all" && !p.industries.includes(filter);
          return (
            <Link
              key={p.href}
              className={`card pcard rv tilt${i % 3 === 1 ? " rv2" : i % 3 === 2 ? " rv3" : ""}${dim ? " dim" : ""}`}
              data-ind={p.industries.join(" ")}
              href={p.href}
            >
              <div className="im">
                <Image src={p.img} alt={p.alt} width={900} height={680} loading="lazy" />
                {p.flag && <span className="flag">{p.flag}</span>}
              </div>
              <div className="body">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <div className="tagrow">
                  {p.tags.map((t) => (
                    <span className="tg" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <span className="link">View specifications</span>
              </div>
            </Link>
          );
        })}
      </div>
      <p style={{ textAlign: "center", marginTop: 34 }}>
        <Link className="btn btn-secondary" href="/products">
          Browse all 28 products
        </Link>
      </p>
    </>
  );
}
