"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  productsMenu,
  capabilitiesMenu,
  industriesMenu,
  knowledgeMenu,
  mobileNavLinks,
  contactInfo,
} from "@/lib/nav-links";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="utility">
        <div className="wrap">
          <span>ISO 9001:2015 Certified Manufacturer · Kosamba, Surat, Gujarat</span>
          <div className="r">
            <a href={contactInfo.emailHref}>{contactInfo.email}</a>
            <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
          </div>
        </div>
      </div>

      <header id="hdr" className={scrolled ? "sc" : ""}>
        <div className="wrap nav">
          <Link className="logo" href="/">
            <Image
              src="/assets/logo.png"
              alt="Bhaavya Ecopack — corrugated packaging manufacturer in Surat, Gujarat"
              width={160}
              height={52}
              priority
            />
          </Link>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/products">Products ▾</Link>
              <div className="dd">
                {productsMenu.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
                <Link href="/products" style={{ fontWeight: 700, color: "var(--olive)" }}>
                  All 28 products →
                </Link>
              </div>
            </li>
            <li>
              <Link href="/infrastructure">Capabilities ▾</Link>
              <div className="dd">
                {capabilitiesMenu.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </li>
            <li>
              <Link href="/industries">Industries ▾</Link>
              <div className="dd">
                {industriesMenu.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
                <Link href="/industries" style={{ fontWeight: 700, color: "var(--olive)" }}>
                  All 21 industries →
                </Link>
              </div>
            </li>
            <li>
              <Link href="/knowledge-hub">Knowledge ▾</Link>
              <div className="dd">
                {knowledgeMenu.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </li>
          </ul>
          <div className="actions">
            <a className="tel" href={contactInfo.phoneHref}>
              {contactInfo.phone}
              <small>{contactInfo.hours}</small>
            </a>
            <Link className="btn btn-primary" href="/contact" style={{ padding: "13px 24px" }}>
              Request a Quote
            </Link>
            <button
              className="burger"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mnav${mobileOpen ? " open" : ""}`}
        id="mnav"
        onClick={(e) => {
          if (e.target === e.currentTarget) setMobileOpen(false);
        }}
      >
        <div className="panel">
          <div className="mtop">
            <Image src="/assets/logo.png" alt="Bhaavya Ecopack" width={140} height={44} />
            <button
              className="x"
              id="mclose"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              ✕
            </button>
          </div>
          <ul>
            {mobileNavLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mfoot">
            <Link className="btn btn-primary" href="/contact" onClick={() => setMobileOpen(false)}>
              Request a Quote
            </Link>
            <p>
              {contactInfo.phone} · {contactInfo.hours}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
