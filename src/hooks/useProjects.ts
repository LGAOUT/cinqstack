"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { ProjectRow } from "@/types";

export function useProjects() {
  const [projects, setProjects] = useState<ProjectRow[]>([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("order", { ascending: true });

      if (error) {
        setError(error.message);
      } else {
        setProjects(data ?? []);
      }
      setLoading(false);
    }

    fetchProjects();
  }, []);

  return { projects, loading, error };
}