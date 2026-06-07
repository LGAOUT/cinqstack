import type { Metadata } from "next";
import { Epilogue, Inter } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-epilogue",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CinqStack — Équipe tech agile pour startups & PME",
    template: "%s | CinqStack",
  },
  description:
    "5 ingénieurs pour construire vos solutions digitales rapidement. Sites web, MVP, dashboards & automatisations livrés avec soin.",
  metadataBase: new URL("https://cinqstack.com"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://cinqstack.com",
    siteName: "CinqStack",
    title: "CinqStack — Équipe tech agile pour startups & PME",
    description: "5 ingénieurs pour construire vos solutions digitales rapidement.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CinqStack — Équipe tech agile",
    description: "5 ingénieurs pour construire vos solutions digitales rapidement.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${epilogue.variable} ${inter.variable}`}>
      <body style={{ backgroundColor: "var(--onyx)", color: "var(--white)" }}>
        {children}
      </body>
    </html>
  );
}