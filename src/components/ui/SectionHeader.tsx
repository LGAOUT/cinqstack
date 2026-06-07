type SectionHeaderProps = {
  tag: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ tag, title, subtitle }: SectionHeaderProps) {
  return (
    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
      <span
        style={{
          display: "inline-block",
          fontSize: "0.68rem",
          fontWeight: 500,
          color: "var(--teal)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: "0.65rem",
          fontFamily: "var(--font-inter)",
        }}
      >
        {tag}
      </span>
      <h2
        style={{
          fontFamily: "var(--font-epilogue)",
          fontWeight: 800,
          fontSize: "clamp(1.7rem, 2.8vw, 2.4rem)",
          letterSpacing: "-0.03em",
          color: "var(--white-full)",
          marginBottom: "0.35rem",
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: "0.82rem",
            color: "var(--muted)",
            fontStyle: "italic",
            fontWeight: 300,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}