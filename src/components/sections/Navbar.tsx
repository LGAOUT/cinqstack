"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import type { Lang } from "@/types";

type NavbarProps = {
  lang: Lang;
  onLangToggle: () => void;
};

export default function Navbar({ lang, onLangToggle }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        background: "rgba(3,18,14,0.9)",
        backdropFilter: "blur(24px)",
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        className="container-site"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "58px",
        }}
      >
        {/* Logo */}
        <Link
          href="#home"
          style={{
            fontFamily: "var(--font-epilogue)",
            fontWeight: 800,
            fontSize: "1.15rem",
            color: "var(--white-full)",
            letterSpacing: "-0.02em",
          }}
        >
          Cinq<span style={{ color: "var(--teal)" }}>Stack</span>
        </Link>

        {/* Desktop nav */}
        <ul
          style={{
            display: "flex",
            gap: "1.75rem",
            listStyle: "none",
          }}
          className="hide-mobile"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  color: "var(--muted)",
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.8rem",
                  fontWeight: 400,
                  letterSpacing: "0.025em",
                  transition: "color 0.18s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--teal)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {link.label[lang]}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <button
            onClick={onLangToggle}
            style={{
              background: "none",
              border: "1px solid var(--border-hover)",
              color: "var(--muted)",
              fontSize: "0.72rem",
              padding: "0.3rem 0.55rem",
              borderRadius: "4px",
              cursor: "pointer",
              fontFamily: "var(--font-inter)",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--teal)";
              e.currentTarget.style.color = "var(--teal)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-hover)";
              e.currentTarget.style.color = "var(--muted)";
            }}
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>

          <Link
            href="#contact"
            style={{
              background: "var(--teal)",
              color: "var(--onyx)",
              padding: "0.42rem 1.1rem",
              borderRadius: "5px",
              fontFamily: "var(--font-epilogue)",
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.04em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            className="hide-mobile"
          >
            {lang === "fr" ? "Demander un devis" : "Get a quote"} →
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="show-mobile"
            style={{
              background: "none",
              border: "1px solid var(--border)",
              color: "var(--muted)",
              padding: "0.35rem 0.5rem",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "1rem",
              lineHeight: 1,
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--carbon)",
            borderTop: "1px solid var(--border)",
            padding: "1rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--muted)",
                fontFamily: "var(--font-inter)",
                fontSize: "0.9rem",
                padding: "0.4rem 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {link.label[lang]}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              background: "var(--teal)",
              color: "var(--onyx)",
              padding: "0.65rem 1rem",
              borderRadius: "6px",
              fontFamily: "var(--font-epilogue)",
              fontWeight: 700,
              fontSize: "0.85rem",
              textAlign: "center",
              marginTop: "0.5rem",
            }}
          >
            {lang === "fr" ? "Demander un devis" : "Get a quote"} →
          </Link>
        </div>
      )}
    </nav>
  );
}