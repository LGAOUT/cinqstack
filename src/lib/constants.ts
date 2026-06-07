import type {
  NavLink,
  Service,
  Package,
  ProcessStep,
  ProjectInsert,
  FaqItem,
  WhyPoint,
  StackCategory,
} from "@/types";

/* ─── Navigation ────────────────────────────────────── */
export const NAV_LINKS: NavLink[] = [
  { label: { fr: "Services",    en: "Services"   }, href: "#services"  },
  { label: { fr: "Process",     en: "Process"    }, href: "#process"   },
  { label: { fr: "Projets",     en: "Projects"   }, href: "#projects"  },
  { label: { fr: "Stack",       en: "Stack"      }, href: "#stack"     },
  { label: { fr: "FAQ",         en: "FAQ"        }, href: "#faq"       },
  { label: { fr: "Contact",     en: "Contact"    }, href: "#contact"   },
];

/* ─── Services ──────────────────────────────────────── */
export const SERVICES: Service[] = [
  {
    id: 1,
    icon: "🎯",
    title: { fr: "Landing pages",       en: "Landing pages"      },
    description: {
      fr: "Pages modernes pour présenter, vendre ou tester une offre rapidement.",
      en: "Modern pages to present, sell or test an offer quickly.",
    },
  },
  {
    id: 2,
    icon: "🏢",
    title: { fr: "Sites vitrines",      en: "Business websites"  },
    description: {
      fr: "Sites professionnels pour indépendants, PME, commerces et agences.",
      en: "Professional websites for freelancers, small businesses and agencies.",
    },
  },
  {
    id: 3,
    icon: "⚡",
    title: { fr: "MVP & apps web",      en: "MVPs & web apps"    },
    description: {
      fr: "Première version fonctionnelle de votre idée, développée rapidement.",
      en: "A functional first version of your idea, built quickly.",
    },
  },
  {
    id: 4,
    icon: "📊",
    title: { fr: "Dashboards & outils", en: "Dashboards & tools" },
    description: {
      fr: "Interfaces admin, tableaux de bord et outils métier sur mesure.",
      en: "Custom admin panels, dashboards and business tools.",
    },
  },
  {
    id: 5,
    icon: "🤖",
    title: { fr: "Automatisation & IA", en: "Automation & AI"    },
    description: {
      fr: "Automatisez vos tâches et intégrez l'IA dans vos workflows.",
      en: "Automate tasks and integrate AI into your workflows.",
    },
  },
];

/* ─── Packages ──────────────────────────────────────── */
export const PACKAGES: Package[] = [
  {
    id: "start",
    name: "Start",
    price: "300€",
    priceSuffix: { fr: "à partir de", en: "starting from" },
    description: {
      fr: "Landing page simple pour lancer vite.",
      en: "Simple landing page to launch fast.",
    },
    features: [
      "1 page responsive",
      "5 sections",
      "Formulaire de contact · Contact form",
      "Mise en ligne · Deployment",
      "Livraison 3–5 jours · 3–5 days",
    ],
    ctaLabel: { fr: "Commencer", en: "Get started" },
  },
  {
    id: "business",
    name: "Business",
    price: "700€",
    priceSuffix: { fr: "à partir de", en: "starting from" },
    description: {
      fr: "Site vitrine complet pour une présence professionnelle.",
      en: "Complete business website for a professional online presence.",
    },
    features: [
      "3 à 5 pages · 3 to 5 pages",
      "Design responsive",
      "SEO de base · Basic SEO",
      "Formulaire de contact · Contact form",
      "Livraison 7–14 jours · 7–14 days",
    ],
    featured: true,
    ctaLabel: { fr: "Commencer", en: "Get started" },
  },
  {
    id: "mvp",
    name: "MVP",
    price: "1 500€+",
    priceSuffix: { fr: "sur devis", en: "from" },
    description: {
      fr: "Application ou outil digital pour tester une idée réelle.",
      en: "Digital product or tool to test a real idea.",
    },
    features: [
      "Authentification · Optional auth",
      "Dashboard",
      "Base de données · Database",
      "Déploiement · Deployment",
      "Livraison 2–4 semaines · weeks",
    ],
    ctaLabel: { fr: "Nous contacter", en: "Contact us" },
  },
];

/* ─── Process steps ─────────────────────────────────── */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title:       { fr: "Brief rapide",       en: "Quick brief"         },
    description: { fr: "On comprend votre projet en 30 min", en: "We understand your project in 30 min" },
  },
  {
    number: "02",
    title:       { fr: "Proposition claire", en: "Clear proposal"       },
    description: { fr: "Devis précis sous 24h", en: "Precise quote within 24h" },
  },
  {
    number: "03",
    title:       { fr: "Design & Dev",       en: "Design & development" },
    description: { fr: "On construit, vous validez", en: "We build, you validate" },
  },
  {
    number: "04",
    title:       { fr: "Livraison",          en: "Delivery"            },
    description: { fr: "Mise en ligne complète", en: "Full deployment" },
  },
  {
    number: "05",
    title:       { fr: "Suivi",              en: "Support"             },
    description: { fr: "On reste disponibles", en: "We stay available" },
  },
];

/* ─── Projects (fallback statique) ─────────────────── */
export const PROJECTS: ProjectInsert[] = [
  {
    id: "tone-in",
    title: "Tone In",
    desc_fr: "Plateforme musicale, réseau social pour artistes.",
    desc_en: "Music platform and social network for artists.",
    stack: ["Next.js", "Supabase", "TypeScript", "Stripe"],
    url: "https://tone-in.vercel.app",
    order: 1,
    thumb_color: "#0d1a17",
    thumb_emoji: "🎵",
  },
  {
    id: "airbnb-concierge",
    title: "Airbnb Concierge",
    desc_fr: "Landing page pour service de conciergerie Airbnb.",
    desc_en: "Landing page for an Airbnb concierge service.",
    stack: ["React", "Tailwind", "Framer Motion"],
    order: 2,
    thumb_color: "#0e1a1f",
    thumb_emoji: "🏠",
  },
  {
    id: "admin-dashboard",
    title: "Admin Dashboard",
    desc_fr: "Interface de gestion moderne pour PME.",
    desc_en: "Modern management interface for small businesses.",
    stack: ["Next.js", "Recharts", "PostgreSQL"],
    order: 3,
    thumb_color: "#0d1a14",
    thumb_emoji: "📊",
  },
  {
    id: "netflix-clone",
    title: "Netflix Clone",
    desc_fr: "App de streaming React/Firebase avec auth.",
    desc_en: "React/Firebase streaming app with authentication.",
    stack: ["React", "Firebase", "TMDB API"],
    order: 4,
    thumb_color: "#1a0d0d",
    thumb_emoji: "🎬",
  },
  {
    id: "casa-zitouna",
    title: "Casa Zitouna",
    desc_fr: "Landing page touristique élégante pour villa.",
    desc_en: "Elegant tourism landing page for a private villa.",
    stack: ["HTML/CSS", "JavaScript", "Responsive"],
    order: 5,
    thumb_color: "#0d1a10",
    thumb_emoji: "🌴",
  },
];

/* ─── Why CinqStack ─────────────────────────────────── */
export const WHY_POINTS: WhyPoint[] = [
  {
    icon: "👥",
    title:       { fr: "Équipe de 5 ingénieurs", en: "Team of 5 engineers"    },
    description: { fr: "Une vraie équipe, pas un freelance isolé.", en: "A real team, not a solo freelancer." },
  },
  {
    icon: "⚡",
    title:       { fr: "Livraison rapide",        en: "Fast delivery"          },
    description: { fr: "3 jours à 4 semaines selon le projet.", en: "3 days to 4 weeks depending on the project." },
  },
  {
    icon: "💬",
    title:       { fr: "Communication directe",   en: "Direct communication"   },
    description: { fr: "Pas d'intermédiaire, réponse rapide.", en: "No middleman, fast responses." },
  },
  {
    icon: "💰",
    title:       { fr: "Prix accessibles",        en: "Accessible pricing"     },
    description: { fr: "Qualité agence, tarif freelance.", en: "Agency quality, freelance pricing." },
  },
  {
    icon: "🎯",
    title:       { fr: "Solutions modernes",      en: "Modern solutions"       },
    description: { fr: "Stack actuelle, design contemporain.", en: "Current stack, contemporary design." },
  },
  {
    icon: "🧹",
    title:       { fr: "Code propre",             en: "Clean code"             },
    description: { fr: "Vous repartez avec un produit maintenable.", en: "You leave with a maintainable product." },
  },
];

/* ─── Tech stack ────────────────────────────────────── */
export const STACK_CATEGORIES: StackCategory[] = [
  { label: "Frontend",        items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]  },
  { label: "Backend",         items: ["Node.js", "Express", "NestJS", "Spring Boot"]     },
  { label: "Data & Cloud",    items: ["Supabase", "Firebase", "PostgreSQL", "MongoDB"]   },
  { label: "Automation & AI", items: ["OpenAI API", "n8n", "Make", "REST APIs"]          },
  { label: "Deployment",      items: ["Vercel", "Netlify", "Docker", "GitHub Actions"]   },
];

/* ─── FAQ ───────────────────────────────────────────── */
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: { fr: "Combien coûte un projet ?",                   en: "How much does a project cost?"          },
    answer: {
      fr: "Une landing page commence à partir de 300€. Un site vitrine autour de 700€. Un MVP dépend des fonctionnalités, à partir de 1 500€.",
      en: "A landing page starts from €300. A business website from €700. An MVP depends on required features, starting from €1,500.",
    },
  },
  {
    id: 2,
    question: { fr: "Combien de temps faut-il ?",                  en: "How long does it take?"                 },
    answer: {
      fr: "Landing page : 3–5 jours. Site vitrine : 7–14 jours. MVP : 2–4 semaines. On respecte les délais annoncés.",
      en: "Landing page: 3–5 days. Business website: 7–14 days. MVP: 2–4 weeks. We respect announced deadlines.",
    },
  },
  {
    id: 3,
    question: { fr: "Pouvez-vous reprendre un projet existant ?",  en: "Can you take over an existing project?" },
    answer: {
      fr: "Oui. On peut analyser votre code existant et reprendre la main sur n'importe quel projet, quelle que soit la stack.",
      en: "Yes. We can audit your existing codebase and take over any project, regardless of the tech stack.",
    },
  },
  {
    id: 4,
    question: { fr: "Travaillez-vous avec de petits budgets ?",    en: "Do you work with small budgets?"        },
    answer: {
      fr: "Oui. Notre offre Start est pensée pour les petits budgets, sans compromis sur la qualité.",
      en: "Yes. Our Start package is designed for smaller budgets without compromising quality.",
    },
  },
  {
    id: 5,
    question: { fr: "Faites-vous la maintenance ?",                en: "Do you provide maintenance?"            },
    answer: {
      fr: "Oui. On propose un suivi post-livraison et peut intervenir à la demande pour toute évolution ou correction.",
      en: "Yes. We offer post-delivery support and can step in on demand for any update or fix.",
    },
  },
  {
    id: 6,
    question: { fr: "Comment démarrer avec vous ?",                en: "How do we get started?"                 },
    answer: {
      fr: "Remplissez le formulaire de contact avec votre brief. On vous répond sous 24h avec une première proposition.",
      en: "Fill in the contact form with your brief. We'll reply within 24h with an initial proposal.",
    },
  },
];