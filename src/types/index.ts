// ─── Types générés depuis Supabase ───────────────────
export type { Database } from "./database.types";
import type { Tables, TablesInsert } from "./database.types";

// ─── Row types (lecture) ─────────────────────────────
export type ContactRow = Tables<"contacts">;
export type ProjectRow  = Tables<"projects">;

// ─── Insert types (écriture) ─────────────────────────
export type ContactInsert = TablesInsert<"contacts">;
export type ProjectInsert  = TablesInsert<"projects">;

// ─── Language ────────────────────────────────────────
export type Lang = "fr" | "en";

// ─── Bilingual string helper ─────────────────────────
export type Bilingual = {
  fr: string;
  en: string;
};

// ─── Navigation ──────────────────────────────────────
export type NavLink = {
  label: Bilingual;
  href: string;
};

// ─── Service card ─────────────────────────────────────
export type Service = {
  id: number;
  icon: string;
  title: Bilingual;
  description: Bilingual;
};

// ─── Package / Pricing ───────────────────────────────
export type Package = {
  id: string;
  name: string;
  price: string;
  priceSuffix: Bilingual;
  description: Bilingual;
  features: string[];
  featured?: boolean;
  ctaLabel: Bilingual;
};

// ─── Process step ─────────────────────────────────────
export type ProcessStep = {
  number: string;
  title: Bilingual;
  description: Bilingual;
};

// ─── FAQ ──────────────────────────────────────────────
export type FaqItem = {
  id: number;
  question: Bilingual;
  answer: Bilingual;
};

// ─── Contact form ─────────────────────────────────────
export type ContactFormData = {
  name: string;
  email: string;
  project_type: string;
  budget: string;
  deadline: string;
  message: string;
};

export type ContactFormState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success" }
  | { status: "error"; message: string };

// ─── Why point ────────────────────────────────────────
export type WhyPoint = {
  icon: string;
  title: Bilingual;
  description: Bilingual;
};

// ─── Stack category ───────────────────────────────────
export type StackCategory = {
  label: string;
  items: string[];
};