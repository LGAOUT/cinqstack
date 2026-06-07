import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { PACKAGES } from "@/lib/constants";
import type { Lang } from "@/types";

type PackagesProps = { lang: Lang };

export default function Packages({ lang }: PackagesProps) {
  return (
    <section id="packages" style={{ padding: "72px 0", background: "var(--carbon)" }}>
      <div className="container-site">
        <AnimatedSection>
          <SectionHeader
            tag={lang === "fr" ? "Offres · Packages" : "Packages · Offres"}
            title={lang === "fr" ? "Des formules claires, sans surprise" : "Clear packages, no hidden fees"}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.3rem",
            }}
          >
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                style={{
                  background: pkg.featured
                    ? "linear-gradient(150deg, rgba(138,176,171,.06), var(--onyx))"
                    : "var(--onyx)",
                  border: `1px solid ${pkg.featured ? "var(--teal-border)" : "var(--border)"}`,
                  borderRadius: "14px",
                  padding: "1.85rem",
                  position: "relative",
                  transition: "border-color 0.25s",
                }}
              >
                {pkg.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-11px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "var(--teal)",
                      color: "var(--onyx)",
                      fontFamily: "var(--font-epilogue)",
                      fontSize: "0.6rem",
                      fontWeight: 800,
                      padding: "0.22rem 0.7rem",
                      borderRadius: "100px",
                      letterSpacing: "0.06em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Most popular
                  </div>
                )}

                <div
                  style={{
                    fontFamily: "var(--font-epilogue)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "var(--muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.45rem",
                  }}
                >
                  {pkg.name}
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-epilogue)",
                    fontSize: "1.85rem",
                    fontWeight: 800,
                    color: "var(--white-full)",
                    marginBottom: "0.2rem",
                  }}
                >
                  {pkg.price}{" "}
                  <span style={{ fontSize: "0.78rem", fontWeight: 400, color: "var(--muted)" }}>
                    {pkg.priceSuffix[lang]}
                  </span>
                </div>

                <p style={{ fontSize: "0.8rem", color: "var(--muted)", marginBottom: "0.15rem" }}>
                  {pkg.description[lang]}
                </p>
                <p
                  style={{
                    fontSize: "0.73rem",
                    color: "var(--muted2)",
                    fontStyle: "italic",
                    marginBottom: "1.1rem",
                    paddingBottom: "1.1rem",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {lang === "fr" ? pkg.description.en : pkg.description.fr}
                </p>

                <ul style={{ listStyle: "none", marginBottom: "1.4rem" }}>
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        fontSize: "0.77rem",
                        color: "var(--muted)",
                        padding: "0.28rem 0",
                        borderBottom: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.45rem",
                      }}
                    >
                      <span style={{ color: "var(--teal)", fontWeight: 700, fontSize: "0.75rem", flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  style={{
                    display: "block",
                    textAlign: "center",
                    background: pkg.featured ? "var(--teal)" : "var(--teal-dim)",
                    border: `1px solid ${pkg.featured ? "var(--teal)" : "var(--teal-border)"}`,
                    color: pkg.featured ? "var(--onyx)" : "var(--teal)",
                    fontFamily: "var(--font-epilogue)",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    padding: "0.6rem 1rem",
                    borderRadius: "7px",
                    letterSpacing: "0.03em",
                    transition: "opacity 0.18s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  {pkg.ctaLabel[lang]} →
                </Link>
              </div>
            ))}
          </div>

        </AnimatedSection>
      </div>
    </section>
  );
}