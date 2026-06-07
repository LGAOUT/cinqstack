import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedGrid from "@/components/ui/AnimatedGrid";
import { SERVICES } from "@/lib/constants";
import type { Lang } from "@/types";

type ServicesProps = { lang: Lang };

export default function Services({ lang }: ServicesProps) {
  return (
    <section id="services" style={{ padding: "72px 0" }}>
      <div className="container-site">
        <AnimatedSection>
          <SectionHeader
            tag="Services"
            title={
              lang === "fr"
                ? "Ce qu'on construit pour vous"
                : "What we build for you"
            }
          />
        </AnimatedSection>

        <AnimatedGrid
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "0.85rem",
          }}
        >
          {SERVICES.map((s) => (
            <div
              key={s.id}
              style={{
                background: "var(--carbon)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                padding: "1.4rem",
                transition: "border-color 0.25s, transform 0.25s",
                cursor: "default",
                height: "100%",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(138,176,171,0.4)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-epilogue)",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  color: "var(--teal)",
                  letterSpacing: "0.1em",
                  marginBottom: "0.9rem",
                  opacity: 0.55,
                }}
              >
                0{s.id}
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: "var(--teal-dim)",
                  border: "1px solid var(--teal-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.05rem",
                  marginBottom: "0.9rem",
                }}
              >
                {s.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-epilogue)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "var(--white-full)",
                  marginBottom: "0.25rem",
                }}
              >
                {s.title[lang]}
              </h3>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--muted)",
                  lineHeight: 1.6,
                  marginBottom: "0.35rem",
                }}
              >
                {s.description[lang]}
              </p>
              <p
                style={{
                  fontSize: "0.68rem",
                  color: "var(--muted2)",
                  fontStyle: "italic",
                  lineHeight: 1.5,
                }}
              >
                {lang === "fr" ? s.description.en : s.description.fr}
              </p>
            </div>
          ))}
        </AnimatedGrid>
      </div>
    </section>
  );
}