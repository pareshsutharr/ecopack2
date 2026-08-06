import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import RevealInit from "@/components/RevealInit";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, organizationJsonLd } from "@/lib/constants";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // No title template: every page in this site composes its own complete
  // "<Page> | Bhaavya Ecopack"-style title (matching the original site's
  // hand-authored <title> tags), so a template here would double the suffix.
  title: "Corrugated Box Manufacturer in Surat, Gujarat | Bhaavya Ecopack",
  icons: {
    icon: "/assets/logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body>
        <JsonLd data={organizationJsonLd} />
        <RevealInit />
        <Header />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
