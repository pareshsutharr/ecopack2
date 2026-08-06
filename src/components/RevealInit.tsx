"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Ports js/site.js's IntersectionObserver-based reveal-on-scroll for any
 * element carrying the `.rv` (optionally `.rv2` / `.rv3`) class. Re-scans
 * on every route change since App Router navigations don't reload the page.
 */
export default function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
