import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabase";

// ─── Validation schema ───────────────────────────────
const ContactSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères.")
    .max(100),
  email: z
    .string()
    .email("Adresse email invalide."),
  project_type: z
    .string()
    .max(100)
    .optional()
    .default(""),
  budget: z
    .string()
    .max(50)
    .optional()
    .default(""),
  deadline: z
    .string()
    .max(100)
    .optional()
    .default(""),
  message: z
    .string()
    .max(2000)
    .optional()
    .default(""),
  // Honeypot — doit rester vide
  _hp: z
    .string()
    .max(0, "Bot detected.")
    .optional()
    .default(""),
});

// ─── Rate limiting simple (in-memory) ────────────────
const rateLimitMap = new Map<string, { count: number; ts: number }>();
const RATE_LIMIT    = 3;   // max 3 soumissions
const WINDOW_MS     = 60 * 60 * 1000; // par heure

function isRateLimited(ip: string): boolean {
  const now   = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.ts > WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, ts: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;

  entry.count++;
  return false;
}

// ─── POST handler ────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    // 1. Rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Trop de soumissions. Réessayez dans une heure." },
        { status: 429 }
      );
    }

    // 2. Parse le body
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Corps de requête invalide." },
        { status: 400 }
      );
    }

    // 3. Validation Zod
    const result = ContactSchema.safeParse(body);
    if (!result.success) {
      const firstError = result.error.issues[0]?.message ?? "Données invalides.";
      return NextResponse.json(
        { error: firstError },
        { status: 422 }
      );
    }

    const { _hp, ...data } = result.data;

    // 4. Honeypot check
    if (_hp && _hp.length > 0) {
      // Silently return success to fool bots
      return NextResponse.json({ success: true });
    }

    // 5. Insert dans Supabase (service role bypasse RLS)
    const { error: dbError } = await supabaseAdmin()
      .from("contacts")
      .insert({
        name:         data.name,
        email:        data.email,
        project_type: data.project_type || null,
        budget:       data.budget       || null,
        deadline:     data.deadline     || null,
        message:      data.message      || null,
      });

    if (dbError) {
      console.error("[contact/route] Supabase error:", dbError);
      return NextResponse.json(
        { error: "Erreur lors de l'enregistrement. Réessayez." },
        { status: 500 }
      );
    }

    // 6. Email de notification (optionnel — Phase suivante avec Resend)
    await sendNotificationEmail(data);

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error("[contact/route] Unexpected error:", err);
    return NextResponse.json(
      { error: "Erreur serveur inattendue." },
      { status: 500 }
    );
  }
}

// ─── Email notification (Resend) ─────────────────────
async function sendNotificationEmail(data: {
  name: string;
  email: string;
  project_type?: string;
  budget?: string;
  deadline?: string;
  message?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return; // Pas de clé = on skip silencieusement

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from:    "CinqStack <noreply@cinqstack.com>",
      to:      ["hello@cinqstack.com"],
      subject: `[CinqStack] Nouveau contact : ${data.name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:2rem;background:#1a1d1a;color:#e8eeec;border-radius:8px;">
          <h2 style="color:#8ab0ab;margin-bottom:1.5rem;">Nouveau message de contact</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#6b8a85;width:140px;">Nom</td><td style="padding:8px 0;color:#f2f6f5;font-weight:600;">${data.name}</td></tr>
            <tr><td style="padding:8px 0;color:#6b8a85;">Email</td><td style="padding:8px 0;"><a href="mailto:${data.email}" style="color:#8ab0ab;">${data.email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#6b8a85;">Projet</td><td style="padding:8px 0;color:#f2f6f5;">${data.project_type || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#6b8a85;">Budget</td><td style="padding:8px 0;color:#f2f6f5;">${data.budget || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#6b8a85;">Délai</td><td style="padding:8px 0;color:#f2f6f5;">${data.deadline || "—"}</td></tr>
          </table>
          ${data.message ? `
            <div style="margin-top:1.5rem;padding:1rem;background:#26413c;border-radius:6px;">
              <p style="color:#6b8a85;font-size:0.8rem;margin-bottom:0.5rem;">Message :</p>
              <p style="color:#e8eeec;line-height:1.7;">${data.message.replace(/\n/g, "<br/>")}</p>
            </div>
          ` : ""}
          <p style="margin-top:2rem;font-size:0.75rem;color:#445550;">
            Reçu le ${new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
          </p>
        </div>
      `,
    });
  } catch (err) {
    // Ne pas bloquer la réponse si l'email échoue
    console.error("[contact/route] Email error:", err);
  }
}