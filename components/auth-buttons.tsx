"use client";
import { Button } from "@/components/ui/button";
import { Lock, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

export function AuthButtons() {
  const { user, signOut } = useAuth();

  return (
    <div className="flex justify-end">
      {user ? (
        <Button variant="outline" size="sm" onClick={signOut}>
          <LogOut className="h-4 w-4 mr-1 mb-0.5" />
          Sign out
        </Button>
      ) : (
        <Link href="/auth/login">
          <Button variant="outline" size="sm">
            <Lock className="h-4 w-4 mr-1 mb-0.5" />
            Sign in
          </Button>
        </Link>
      )}
    </div>
  );
}
