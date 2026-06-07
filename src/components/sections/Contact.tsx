"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Lang, ContactFormData, ContactFormState } from "@/types";

type ContactProps = { lang: Lang };

export default function Contact({ lang }: ContactProps) {
  const [form, setForm] = useState<ContactFormData>({
    name: "", email: "", project_type: "", budget: "", deadline: "", message: "",
  });
  const [state, setState] = useState<ContactFormState>({ status: "idle" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ status: "loading" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Erreur serveur");
      setState({ status: "success" });
      setForm({ name: "", email: "", project_type: "", budget: "", deadline: "", message: "" });
    } catch {
      setState({ status: "error", message: lang === "fr" ? "Une erreur est survenue. Réessayez." : "Something went wrong. Please try again." });
    }
  };

  const inputStyle: React.CSSProperties = {
    background: "var(--onyx)",
    border: "1px solid var(--border)",
    color: "var(--white-full)",
    borderRadius: "7px",
    padding: "0.6rem 0.85rem",
    fontFamily: "var(--font-inter)",
    fontSize: "0.82rem",
    outline: "none",
    width: "100%",
    transition: "border-color 0.18s",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "0.68rem",
    fontWeight: 500,
    color: "var(--muted)",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    fontFamily: "var(--font-inter)",
    marginBottom: "0.3rem",
    display: "block",
  };

  return (
    <section id="contact" style={{ padding: "72px 0", background: "var(--carbon)" }}>
      <div className="container-site">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-epilogue)",
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 2.3vw, 2rem)",
                letterSpacing: "-0.025em",
                lineHeight: 1.25,
                color: "var(--white-full)",
                marginBottom: "0.5rem",
              }}
            >
              {lang === "fr" ? (
                <>Parlez-nous de votre <em style={{ color: "var(--teal)", fontStyle: "normal" }}>projet</em></>
              ) : (
                <>Tell us about your <em style={{ color: "var(--teal)", fontStyle: "normal" }}>project</em></>
              )}
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "0.45rem" }}>
              {lang === "fr"
                ? "Décrivez votre besoin, on revient vers vous sous 24h avec une proposition claire."
                : "Describe your need, we'll get back to you within 24h with a clear proposal."}
            </p>
            <div
              style={{
                fontStyle: "italic",
                fontSize: "0.78rem",
                color: "var(--muted2)",
                borderLeft: "1px solid var(--teal-border)",
                paddingLeft: "0.7rem",
                marginTop: "0.4rem",
              }}
            >
              {lang === "fr"
                ? "Tell us about your project. We'll get back to you within 24h."
                : "Décrivez votre projet. On vous répond sous 24h."}
            </div>

            <div style={{ marginTop: "1.75rem", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {[
                { icon: "✉", text: "hello@cinqstack.com" },
                { icon: "in", text: "linkedin.com/company/cinqstack" },
                { icon: "⚡", text: lang === "fr" ? "Réponse sous 24h" : "Reply within 24h" },
              ].map((info) => (
                <div key={info.text} style={{ display: "flex", alignItems: "center", gap: "0.7rem", fontSize: "0.8rem", color: "var(--muted)" }}>
                  <span style={{ color: "var(--teal)", width: "18px", textAlign: "center" }}>{info.icon}</span>
                  {info.text}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.65rem" }}>
              <div>
                <label style={labelStyle}>{lang === "fr" ? "Nom" : "Name"}</label>
                <input name="name" value={form.name} onChange={handleChange} required placeholder={lang === "fr" ? "Votre nom" : "Your name"} style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--teal-border)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="hello@example.com" style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--teal-border)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.65rem" }}>
              <div>
                <label style={labelStyle}>{lang === "fr" ? "Type de projet" : "Project type"}</label>
                <select name="project_type" value={form.project_type} onChange={handleChange} style={inputStyle}>
                  <option value="">{lang === "fr" ? "Choisir..." : "Choose..."}</option>
                  <option>Landing page</option>
                  <option>{lang === "fr" ? "Site vitrine" : "Business website"}</option>
                  <option>MVP · Web app</option>
                  <option>Dashboard · {lang === "fr" ? "Outil interne" : "Internal tool"}</option>
                  <option>{lang === "fr" ? "Automatisation & IA" : "Automation & AI"}</option>
                  <option>{lang === "fr" ? "Autre" : "Other"}</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Budget</label>
                <select name="budget" value={form.budget} onChange={handleChange} style={inputStyle}>
                  <option value="">Budget...</option>
                  <option>— 500€</option>
                  <option>500€ – 1 000€</option>
                  <option>1 000€ – 3 000€</option>
                  <option>3 000€+</option>
                  <option>{lang === "fr" ? "À définir" : "TBD"}</option>
                </select>
              </div>
            </div>

            <div>
              <label style={labelStyle}>{lang === "fr" ? "Délai souhaité" : "Desired deadline"}</label>
              <input name="deadline" value={form.deadline} onChange={handleChange} placeholder={lang === "fr" ? "Ex: dans 2 semaines" : "Ex: in 2 weeks"} style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "var(--teal-border)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
            </div>

            <div>
              <label style={labelStyle}>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder={lang === "fr" ? "Décrivez votre projet..." : "Describe your project..."} style={{ ...inputStyle, resize: "vertical", minHeight: "80px" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--teal-border)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
            </div>

            <button
              type="submit"
              disabled={state.status === "loading"}
              style={{
                background: state.status === "loading" ? "var(--charcoal)" : "var(--teal)",
                color: "var(--onyx)",
                border: "none",
                borderRadius: "7px",
                padding: "0.72rem 1.4rem",
                fontFamily: "var(--font-epilogue)",
                fontWeight: 800,
                fontSize: "0.85rem",
                cursor: state.status === "loading" ? "not-allowed" : "pointer",
                letterSpacing: "0.03em",
                transition: "opacity 0.18s, transform 0.15s",
                width: "100%",
                marginTop: "0.2rem",
              }}
            >
              {state.status === "loading"
                ? (lang === "fr" ? "Envoi en cours..." : "Sending...")
                : (lang === "fr" ? "Recevoir une réponse sous 24h →" : "Get a reply within 24h →")}
            </button>

            {state.status === "success" && (
              <p style={{ color: "var(--teal)", fontSize: "0.75rem", textAlign: "center" }}>
                ✓ {lang === "fr" ? "Message envoyé ! On vous répond sous 24h." : "Message sent! We'll reply within 24h."}
              </p>
            )}
            {state.status === "error" && (
              <p style={{ color: "#e05555", fontSize: "0.75rem", textAlign: "center" }}>
                ❌ {state.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}