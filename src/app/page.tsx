export default function Home() {
  return (
    <main>
      {/* Sections will be added in Phase 3 */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          fontFamily: "var(--font-epilogue)",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--white-full)",
          }}
        >
          Cinq<span style={{ color: "var(--teal)" }}>Stack</span>
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
          Phase 1 complete — Setup & Architecture ✓
        </p>
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "0.5rem",
          }}
        >
          {["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase"].map(
            (tech) => (
              <span
                key={tech}
                style={{
                  background: "var(--carbon)",
                  border: "1px solid var(--teal-border)",
                  color: "var(--teal)",
                  padding: "0.25rem 0.65rem",
                  borderRadius: "5px",
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </main>
  );
}