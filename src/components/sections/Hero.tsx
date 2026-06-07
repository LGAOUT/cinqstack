"use client";

import Link from "next/link";
import type { Lang } from "@/types";

type HeroProps = { lang: Lang };

const metrics = [
  { n: "47+",   label: { fr: "Projets livrés",     en: "Projects shipped"   } },
  { n: "3j",    label: { fr: "Délai landing page", en: "Landing page ETA"   } },
  { n: "<24h",  label: { fr: "Temps de réponse",   en: "Response time"      } },
  { n: "300€",  label: { fr: "À partir de",        en: "Starting from"      } },
];

export default function Hero({ lang }: HeroProps) {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "90px 0 70px",
        background: "radial-gradient(ellipse 65% 55% at 65% 45%, rgba(138,176,171,.05) 0%, transparent 65%)",
      }}
    >
      <div className="container-site" style={{ width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left */}
          <div>
            {/* Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "var(--teal-dim)",
                border: "1px solid var(--teal-border)",
                padding: "0.28rem 0.8rem",
                borderRadius: "100px",
                fontSize: "0.7rem",
                fontWeight: 500,
                color: "var(--teal)",
                letterSpacing: "0.07em",
                textTransform: "uppercase" as const,
                marginBottom: "1.6rem",
                fontFamily: "var(--font-inter)",
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "var(--teal)",
                  animation: "blink 2s ease-in-out infinite",
                  flexShrink: 0,
                }}
              />
              {lang === "fr"
                ? "Collectif tech agile"
                : "Agile tech collective"}
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "var(--font-epilogue)",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 4.2vw, 3.5rem)",
                lineHeight: 1.07,
                letterSpacing: "-0.035em",
                color: "var(--white-full)",
                marginBottom: "0.9rem",
              }}
            >
              {lang === "fr" ? (
                <>
                  Cinq ingénieurs pour construire vos{" "}
                  <em style={{ color: "var(--teal)", fontStyle: "normal" }}>
                    solutions digitales
                  </em>{" "}
                  rapidement.
                </>
              ) : (
                <>
                  Five engineers to build your{" "}
                  <em style={{ color: "var(--teal)", fontStyle: "normal" }}>
                    digital solutions
                  </em>{" "}
                  fast.
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "0.98rem",
                color: "var(--muted)",
                maxWidth: "440px",
                marginBottom: "2rem",
                fontWeight: 300,
                lineHeight: 1.75,
              }}
            >
              {lang === "fr"
                ? "Sites web, MVP, dashboards & automatisations — livrés avec soin, vite et proprement."
                : "Websites, MVPs, dashboards & automations — delivered fast, clean and with care."}
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                gap: "0.65rem",
                flexWrap: "wrap",
                marginBottom: "2.2rem",
              }}
            >
              <Link
                href="#contact"
                style={{
                  background: "var(--teal)",
                  color: "var(--onyx)",
                  padding: "0.65rem 1.5rem",
                  borderRadius: "6px",
                  fontFamily: "var(--font-epilogue)",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  transition: "opacity .15s, transform .15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.84";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {lang === "fr" ? "Demander un devis" : "Get a quote"}
              </Link>
              <Link
                href="#services"
                style={{
                  background: "transparent",
                  color: "var(--white)",
                  padding: "0.65rem 1.5rem",
                  borderRadius: "6px",
                  fontFamily: "var(--font-epilogue)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  border: "1px solid var(--border-hover)",
                  transition: "border-color .15s, background .15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--teal)";
                  e.currentTarget.style.background = "var(--teal-dim)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-hover)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {lang === "fr" ? "Voir nos services" : "View services"}
              </Link>
            </div>

            {/* Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
              {[
                { fr: "⚡ Livraison rapide", en: "⚡ Fast delivery",      accent: true  },
                { fr: "5 ingénieurs",        en: "5 engineers",            accent: false },
                { fr: "Web · App · Auto",    en: "Web · App · Auto",       accent: false },
                { fr: "React · TS · AI",     en: "React · TS · AI",        accent: false },
              ].map((b) => (
                <span
                  key={b.fr}
                  style={{
                    background: b.accent ? "var(--teal-dim)" : "var(--carbon)",
                    border: `1px solid ${b.accent ? "var(--teal-border)" : "var(--border)"}`,
                    color: b.accent ? "var(--teal)" : "var(--muted)",
                    padding: "0.3rem 0.75rem",
                    borderRadius: "5px",
                    fontSize: "0.72rem",
                    fontWeight: b.accent ? 500 : 400,
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {lang === "fr" ? b.fr : b.en}
                </span>
              ))}
            </div>
          </div>

          {/* Right — metrics grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.7rem",
            }}
            className="hero-visual"
          >
            {/* Big stat */}
            <div
              style={{
                gridColumn: "1 / -1",
                background: "var(--carbon)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                padding: "1.2rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-epilogue)",
                  fontSize: "1.9rem",
                  fontWeight: 800,
                  color: "var(--teal)",
                }}
              >
                47+
              </div>
              <div style={{ fontSize: "0.72rem", color: "var(--muted)", marginTop: "0.2rem" }}>
                {lang === "fr" ? "Projets livrés" : "Projects shipped"}
              </div>
            </div>

            {/* Small cards */}
            {[
              { icon: "🚀", title: { fr: "Livraison rapide",   en: "Fast delivery"   }, desc: { fr: "3–5 jours landing page", en: "3–5 days landing page" } },
              { icon: "🤝", title: { fr: "Direct & clair",     en: "Direct & clear"  }, desc: { fr: "Communication directe",  en: "Direct communication"  } },
              { icon: "💰", title: { fr: "Prix accessibles",   en: "Fair pricing"    }, desc: { fr: "À partir de 300€",       en: "From €300"             } },
              { icon: "🧹", title: { fr: "Code propre",        en: "Clean code"      }, desc: { fr: "Maintenable & évolutif", en: "Maintainable & scalable"} },
            ].map((card) => (
              <div
                key={card.icon}
                style={{
                  background: "var(--carbon)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  padding: "1.2rem",
                  transition: "border-color 0.25s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--teal-border)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <div style={{ fontSize: "0.9rem", marginBottom: "0.65rem" }}>{card.icon}</div>
                <h4
                  style={{
                    fontFamily: "var(--font-epilogue)",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "var(--white-full)",
                    marginBottom: "0.2rem",
                  }}
                >
                  {card.title[lang]}
                </h4>
                <p style={{ fontSize: "0.72rem", color: "var(--muted)" }}>
                  {card.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}