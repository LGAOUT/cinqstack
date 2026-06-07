"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { useProjects } from "@/hooks/useProjects";
import { PROJECTS } from "@/lib/constants";
import type { Lang } from "@/types";

type ProjectsProps = { lang: Lang };

export default function Projects({ lang }: ProjectsProps) {
  const { projects: dbProjects, loading } = useProjects();
  const projects = dbProjects.length > 0 ? dbProjects : PROJECTS;

  return (
    <section id="projects" style={{ padding: "72px 0", background: "var(--carbon)" }}>
      <div className="container-site">
        <SectionHeader
          tag={lang === "fr" ? "Projets · Projects" : "Projects · Projets"}
          title={lang === "fr" ? "Ce qu'on a construit" : "What we've built"}
        />

        {loading ? (
          <p style={{ color: "var(--muted)", textAlign: "center", fontSize: "0.85rem" }}>
            Chargement...
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.1rem",
            }}
          >
            {projects.map((p) => (
              <div
                key={p.id}
                style={{
                  background: "var(--onyx)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  transition: "border-color 0.25s, transform 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--teal-border)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Thumbnail */}
                <div
                  style={{
                    height: "110px",
                    background: p.thumb_color ?? "var(--slate)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                  }}
                >
                  {p.thumb_emoji ?? "📁"}
                </div>

                {/* Body */}
                <div style={{ padding: "1.1rem" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-epilogue)",
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      color: "var(--white-full)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {p.title}
                  </h3>

                  <p style={{ fontSize: "0.74rem", color: "var(--muted)", marginBottom: "0.18rem" }}>
                    {lang === "fr" ? p.desc_fr : p.desc_en}
                  </p>

                  <p
                    style={{
                      fontSize: "0.68rem",
                      color: "var(--muted2)",
                      fontStyle: "italic",
                      marginBottom: "0.65rem",
                    }}
                  >
                    {lang === "fr" ? p.desc_en : p.desc_fr}
                  </p>

                  {/* Stack tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.28rem", marginBottom: "0.65rem" }}>
                    {(p.stack ?? []).map((t) => (
                      <span
                        key={t}
                        style={{
                          background: "var(--carbon)",
                          border: "1px solid var(--border)",
                          color: "var(--muted2)",
                          fontSize: "0.62rem",
                          padding: "0.18rem 0.45rem",
                          borderRadius: "3px",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--teal)",
                        fontFamily: "var(--font-epilogue)",
                        fontWeight: 700,
                        letterSpacing: "0.03em",
                        textDecoration: "none",
                      }}
                    >
                      {lang === "fr" ? "Voir le projet" : "View project"} {"\u2192"}
                    </a>
                  ) : (
                    <span style={{ fontSize: "0.72rem", color: "var(--muted2)" }}>
                      {lang === "fr" ? "Bientôt disponible" : "Coming soon"}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Placeholder card */}
            <div
              style={{
                background: "var(--onyx)",
                border: "1px dashed var(--border)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "180px",
                cursor: "pointer",
                transition: "border-color 0.25s",
              }}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--teal-border)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{ textAlign: "center", padding: "1.2rem" }}>
                <div
                  style={{
                    fontSize: "1.6rem",
                    marginBottom: "0.6rem",
                    color: "var(--teal)",
                  }}
                >
                  +
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-epilogue)",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "var(--muted)",
                    marginBottom: "0.2rem",
                  }}
                >
                  {lang === "fr" ? "Votre projet ici" : "Your project here"}
                </h3>
                <p style={{ fontSize: "0.72rem", color: "var(--muted2)" }}>
                  {lang === "fr" ? "Discutons" : "Let's talk"} {"\u2192"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}