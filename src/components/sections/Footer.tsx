import Link from "next/link";
import type { Lang } from "@/types";

type FooterProps = { lang: Lang };

export default function Footer({ lang }: FooterProps) {
  return (
    <footer
      style={{
        padding: "36px 0 28px",
        borderTop: "1px solid var(--border)",
        background: "var(--onyx)",
      }}
    >
      <div className="container-site">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-epilogue)",
                fontWeight: 800,
                fontSize: "0.95rem",
                color: "var(--white-full)",
              }}
            >
              Cinq<span style={{ color: "var(--teal)" }}>Stack</span>
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--muted)", fontStyle: "italic", marginTop: "0.18rem" }}>
              Built by five engineers. Shipped with care.
            </div>
          </div>

          <ul style={{ display: "flex", gap: "1.4rem", listStyle: "none" }}>
            {[
              { label: "Services",  href: "#services"  },
              { label: "Projects",  href: "#projects"  },
              { label: "Contact",   href: "#contact"   },
              { label: lang === "fr" ? "Mentions légales" : "Legal", href: "#" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--muted)",
                    transition: "color 0.18s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--teal)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div style={{ fontSize: "0.68rem", color: "var(--muted2)", textAlign: "right" }}>
            © 2025 CinqStack<br />
            <span>hello@cinqstack.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}