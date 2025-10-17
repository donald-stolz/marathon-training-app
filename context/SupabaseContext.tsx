"use client";
import {
  AuthChangeEvent,
  Session,
  SupabaseClient,
  User,
} from "@supabase/supabase-js";
import { createContext, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface SupabaseContextProps {
  supabase: SupabaseClient | null;
  user: User | null;
}

export const SupabaseContext = createContext<SupabaseContextProps>({
  supabase: null,
  user: null,
});

export default function SupabaseContextProvider({
  children,
}: React.PropsWithChildren) {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);
  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser(user);
  };

  const handleAuthStateChange = async (
    event: AuthChangeEvent,
    session: Session | null
  ) => {
    if (event === "SIGNED_IN") {
      setUser(session?.user ?? null);
    } else if (event === "SIGNED_OUT") {
      setUser(null);
    }
  };

  useEffect(() => {
    getUser();
    supabase.auth.onAuthStateChange(handleAuthStateChange);
  }, []);

  return (
    <SupabaseContext.Provider value={{ supabase, user }}>
      {children}
    </SupabaseContext.Provider>
  );
}
