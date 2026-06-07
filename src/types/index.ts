/* ─── Language ──────────────────────────────────────── */
export type Lang = "fr" | "en";

/* ─── Bilingual string helper ───────────────────────── */
export type Bilingual = {
  fr: string;
  en: string;
};

/* ─── Navigation ────────────────────────────────────── */
export type NavLink = {
  label: Bilingual;
  href: string;
};

/* ─── Service card ──────────────────────────────────── */
export type Service = {
  id: number;
  icon: string;
  title: Bilingual;
  description: Bilingual;
};

/* ─── Package / Pricing ─────────────────────────────── */
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

/* ─── Process step ──────────────────────────────────── */
export type ProcessStep = {
  number: string;
  title: Bilingual;
  description: Bilingual;
};

/* ─── Project card ──────────────────────────────────── */
export type Project = {
  id: string;
  title: string;
  desc_fr: string;
  desc_en: string;
  stack: string[];
  url?: string | null;
  thumb_color?: string;
  thumb_emoji?: string;
};

/* ─── FAQ ───────────────────────────────────────────── */
export type FaqItem = {
  id: number;
  question: Bilingual;
  answer: Bilingual;
};

/* ─── Contact form ──────────────────────────────────── */
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

/* ─── Why point ─────────────────────────────────────── */
export type WhyPoint = {
  icon: string;
  title: Bilingual;
  description: Bilingual;
};

/* ─── Stack category ────────────────────────────────── */
export type StackCategory = {
  label: string;
  items: string[];
};