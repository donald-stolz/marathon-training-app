import { useContext } from "react";
import { SupabaseContext } from "@/context/SupabaseContext";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const router = useRouter();
  const context = useContext(SupabaseContext);
  const { user, supabase } = context;
  if (!supabase) {
    throw new Error("Supabase client not found");
  }

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    router.push("/");
  };
  const signOut = async () => {
    await supabase?.auth.signOut();
    router.push("/auth/login");
  };
  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo:
          process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ||
          `${window.location.origin}`,
      },
    });
    if (error) throw error;
    router.push("/auth/check-email");
  };

  return { user, signIn, signOut, signUp };
};
