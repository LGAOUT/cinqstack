import SectionHeader from "@/components/ui/SectionHeader";
import { WHY_POINTS, STACK_CATEGORIES } from "@/lib/constants";
import type { Lang } from "@/types";

type WhyProps = { lang: Lang };

export default function Why({ lang }: WhyProps) {
  return (
    <>
      {/* Why section */}
      <section id="why" style={{ padding: "72px 0" }}>
        <div className="container-site">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "4rem",
              alignItems: "start",
            }}
            className="why-grid"
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-epilogue)",
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 2.3vw, 2rem)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.25,
                  color: "var(--white-full)",
                  marginBottom: "0.4rem",
                }}
              >
                {lang === "fr" ? (
                  <>Pourquoi travailler avec <em style={{ color: "var(--teal)", fontStyle: "normal" }}>CinqStack</em> ?</>
                ) : (
                  <>Why work with <em style={{ color: "var(--teal)", fontStyle: "normal" }}>CinqStack</em>?</>
                )}
              </h2>
              <p style={{ fontSize: "0.8rem", color: "var(--muted)", fontStyle: "italic" }}>
                {lang === "fr" ? "Why work with CinqStack?" : "Pourquoi travailler avec CinqStack ?"}
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.85rem",
              }}
            >
              {WHY_POINTS.map((pt) => (
                <div
                  key={pt.icon}
                  style={{
                    background: "var(--carbon)",
                    border: "1px solid var(--border)",
                    borderRadius: "9px",
                    padding: "1rem",
                    transition: "border-color 0.25s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--teal-border)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <div style={{ fontSize: "1.1rem", marginBottom: "0.45rem" }}>{pt.icon}</div>
                  <h4
                    style={{
                      fontFamily: "var(--font-epilogue)",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "var(--white-full)",
                      marginBottom: "0.12rem",
                    }}
                  >
                    {pt.title[lang]}
                  </h4>
                  <em style={{ display: "block", fontStyle: "italic", fontWeight: 300, fontSize: "0.7rem", color: "var(--muted)", marginBottom: "0.25rem" }}>
                    {lang === "fr" ? pt.title.en : pt.title.fr}
                  </em>
                  <p style={{ fontSize: "0.7rem", color: "var(--muted)" }}>
                    {pt.description[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stack section */}
      <section id="stack" style={{ padding: "72px 0", background: "var(--carbon)" }}>
        <div className="container-site">
          <SectionHeader
            tag="Technologies"
            title={lang === "fr" ? "Notre stack technique" : "Our tech stack"}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "1.4rem",
            }}
          >
            {STACK_CATEGORIES.map((cat) => (
              <div key={cat.label}>
                <h4
                  style={{
                    fontFamily: "var(--font-epilogue)",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    color: "var(--teal)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.7rem",
                  }}
                >
                  {cat.label}
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.32rem" }}>
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        background: "var(--onyx)",
                        border: "1px solid var(--border)",
                        color: "var(--muted)",
                        fontSize: "0.73rem",
                        padding: "0.32rem 0.65rem",
                        borderRadius: "5px",
                        transition: "border-color 0.18s, color 0.18s",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--teal-border)";
                        e.currentTarget.style.color = "var(--white-full)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.color = "var(--muted)";
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}