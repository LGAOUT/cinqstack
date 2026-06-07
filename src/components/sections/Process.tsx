import SectionHeader from "@/components/ui/SectionHeader";
import { PROCESS_STEPS } from "@/lib/constants";
import type { Lang } from "@/types";

type ProcessProps = { lang: Lang };

export default function Process({ lang }: ProcessProps) {
  return (
    <section id="process" style={{ padding: "72px 0" }}>
      <div className="container-site">
        <SectionHeader
          tag="Process"
          title={lang === "fr" ? "Une méthode simple pour livrer vite" : "A simple process to ship fast"}
        />
        <div
          style={{
            display: "flex",
            gap: 0,
            position: "relative",
          }}
          className="process-steps"
        >
          {/* Connecting line */}
          <div
            style={{
              position: "absolute",
              top: "21px",
              left: 0,
              right: 0,
              height: "1px",
              background: "var(--border)",
              zIndex: 0,
            }}
          />

          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              style={{
                flex: 1,
                textAlign: "center",
                position: "relative",
                zIndex: 1,
                padding: "0 0.4rem",
              }}
              className="process-step"
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "var(--carbon)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-epilogue)",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  color: "var(--muted)",
                  margin: "0 auto 1rem",
                  transition: "background 0.25s, border-color 0.25s, color 0.25s",
                }}
                className="step-num"
              >
                {step.number}
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-epilogue)",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "var(--white-full)",
                  marginBottom: "0.2rem",
                }}
              >
                {step.title[lang]}
              </h4>
              <em
                style={{
                  display: "block",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "0.7rem",
                  color: "var(--muted)",
                  marginBottom: "0.3rem",
                }}
              >
                {lang === "fr" ? step.title.en : step.title.fr}
              </em>
              <p style={{ fontSize: "0.7rem", color: "var(--muted2)" }}>
                {step.description[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}