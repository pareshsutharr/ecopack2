import Image from "next/image";
import Link from "next/link";
import {
  footerProductLinks,
  footerCompanyLinks,
  footerServiceAreas,
  contactInfo,
} from "@/lib/nav-links";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <span className="flogo">
              <Image src="/assets/logo.png" alt="Bhaavya Ecopack logo" width={130} height={46} />
            </span>
            <p>
              Bhaavya Ecopack is an ISO 9001:2015-certified corrugated packaging manufacturer in
              Kosamba, Surat, Gujarat, India — specialists in moisture-resistant and export-grade
              corrugated boxes.
            </p>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              {footerProductLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              {footerCompanyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>{contactInfo.address}</li>
              <li>
                <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
              </li>
              <li>
                <a href={contactInfo.emailHref}>{contactInfo.email}</a>
              </li>
              <li>{contactInfo.hours} IST</li>
            </ul>
          </div>
        </div>

        <div style={{ padding: "0 0 34px" }}>
          <h4 style={{ marginBottom: 14 }}>
            Service Areas — 160 km core radius · Pan-India supply
          </h4>
          <div className="locrow">
            {footerServiceAreas.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/service-areas">
              <b>All areas + Pan-India →</b>
            </Link>
          </div>
        </div>

        <div className="fbottom">
          <span>© 2021–2026 Bhaavya Ecopack™. All rights reserved.</span>
          <span>
            <Link href="/sitemap" style={{ color: "inherit" }}>
              Sitemap
            </Link>{" "}
            · <Link href="/privacy-policy" style={{ color: "inherit" }}>Privacy</Link> ·{" "}
            <Link href="/terms-of-use" style={{ color: "inherit" }}>Terms</Link> ·{" "}
            <Link href="/cookie-policy" style={{ color: "inherit" }}>Cookies</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
