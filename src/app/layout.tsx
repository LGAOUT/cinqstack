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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "https://cinqstack.com"
  ),
  title: {
    default: "CinqStack — Équipe tech agile pour startups & PME",
    template: "%s | CinqStack",
  },
  description:
    "5 ingénieurs pour construire vos solutions digitales rapidement. Sites web, landing pages, MVP, dashboards & automatisations livrés avec soin.",
  keywords: [
    "développement web",
    "agence tech",
    "Next.js",
    "React",
    "MVP",
    "startup",
    "freelance",
    "landing page",
    "dashboard",
    "automatisation",
    "CinqStack",
  ],
  authors: [{ name: "CinqStack", url: "https://cinqstack.com" }],
  creator: "CinqStack",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    url: "https://cinqstack.com",
    siteName: "CinqStack",
    title: "CinqStack — Équipe tech agile pour startups & PME",
    description:
      "5 ingénieurs pour construire vos solutions digitales rapidement. Sites web, MVP, dashboards & automatisations.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CinqStack — Équipe tech agile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CinqStack — Équipe tech agile",
    description:
      "5 ingénieurs pour construire vos solutions digitales rapidement.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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