import { createClient } from "@supabase/supabase-js";

/**
 * Types will be replaced by the generated types in Phase 2.
 * Run: npx supabase gen types typescript --project-id YOUR_PROJECT_ID > src/types/database.types.ts
 */
export type Database = {
  public: {
    Tables: {
      contacts: {
        Row: {
          id: string;
          name: string;
          email: string;
          project_type: string | null;
          budget: string | null;
          deadline: string | null;
          message: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          project_type?: string | null;
          budget?: string | null;
          deadline?: string | null;
          message?: string | null;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["contacts"]["Insert"]>;
      };
      projects: {
        Row: {
          id: string;
          title: string;
          desc_fr: string;
          desc_en: string;
          stack: string[];
          url: string | null;
          order: number;
          thumb_color: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          desc_fr: string;
          desc_en: string;
          stack: string[];
          url?: string | null;
          order?: number;
          thumb_color?: string | null;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["projects"]["Insert"]>;
      };
    };
  };
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase environment variables. Check your .env.local file."
  );
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

/**
 * Server-side client using the service role key (bypasses RLS).
 * Use only in Route Handlers / Server Actions — NEVER expose to the client.
 */
export const supabaseAdmin = () => {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceRoleKey) {
    throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY environment variable.");
  }
  return createClient<Database>(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
};