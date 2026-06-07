"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { FAQ_ITEMS } from "@/lib/constants";
import type { Lang } from "@/types";

type FAQProps = { lang: Lang };

export default function FAQ({ lang }: FAQProps) {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section id="faq" style={{ padding: "72px 0" }}>
      <div className="container-site">
        <SectionHeader
          tag="FAQ"
          title={lang === "fr" ? "Questions fréquentes" : "Frequently asked questions"}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "0.9rem",
            maxWidth: "860px",
            margin: "0 auto",
          }}
        >
          {FAQ_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              style={{
                background: "var(--carbon)",
                border: `1px solid ${openId === item.id ? "var(--teal-border)" : "var(--border)"}`,
                borderRadius: "9px",
                padding: "1.1rem",
                cursor: "pointer",
                transition: "border-color 0.18s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-epilogue)",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "var(--white-full)",
                      marginBottom: "0.12rem",
                    }}
                  >
                    {item.question[lang]}
                  </p>
                  <p style={{ fontSize: "0.72rem", color: "var(--muted)", fontStyle: "italic" }}>
                    {lang === "fr" ? item.question.en : item.question.fr}
                  </p>
                </div>
                <span
                  style={{
                    color: "var(--teal)",
                    fontSize: "0.95rem",
                    transition: "transform 0.2s",
                    transform: openId === item.id ? "rotate(45deg)" : "rotate(0deg)",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  +
                </span>
              </div>

              {openId === item.id && (
                <div
                  style={{
                    fontSize: "0.76rem",
                    color: "var(--muted)",
                    lineHeight: 1.75,
                    paddingTop: "0.45rem",
                    borderTop: "1px solid var(--border)",
                    marginTop: "0.45rem",
                  }}
                >
                  {item.answer[lang]}
                  <br /><br />
                  <em style={{ color: "var(--muted2)", fontSize: "0.72rem" }}>
                    {lang === "fr" ? item.answer.en : item.answer.fr}
                  </em>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}