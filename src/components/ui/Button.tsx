"use client";

import Link from "next/link";

type ButtonVariant = "primary" | "outline" | "ghost";

type ButtonProps = {
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const styles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: "var(--teal)",
    color: "var(--onyx)",
    border: "none",
    fontWeight: 700,
  },
  outline: {
    background: "transparent",
    color: "var(--white)",
    border: "1px solid var(--border-hover)",
  },
  ghost: {
    background: "var(--teal-dim)",
    color: "var(--teal)",
    border: "1px solid var(--teal-border)",
  },
};

const hoverStyles: Record<ButtonVariant, string> = {
  primary: "opacity:.84;transform:translateY(-1px)",
  outline: "border-color:var(--teal);background:var(--teal-dim)",
  ghost:   "opacity:.8",
};

export default function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.4rem",
    padding: "0.65rem 1.5rem",
    borderRadius: "6px",
    fontFamily: "var(--font-epilogue)",
    fontSize: "0.85rem",
    letterSpacing: "0.02em",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "all 0.15s ease",
    textDecoration: "none",
    whiteSpace: "nowrap" as const,
    ...styles[variant],
  };

  if (href) {
    return (
      <Link
        href={href}
        style={base}
        className={className}
        onMouseEnter={(e) => {
          if (disabled) return;
          e.currentTarget.setAttribute("style",
            Object.entries(base).map(([k, v]) => `${k.replace(/([A-Z])/g, "-$1").toLowerCase()}:${v}`).join(";")
            + ";" + hoverStyles[variant]
          );
        }}
        onMouseLeave={(e) => {
          e.currentTarget.setAttribute("style",
            Object.entries(base).map(([k, v]) => `${k.replace(/([A-Z])/g, "-$1").toLowerCase()}:${v}`).join(";")
          );
        }}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={base}
      className={className}
    >
      {children}
    </button>
  );
}