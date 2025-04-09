"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthGuard({ children }) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/admin-login");
    }
  }, [status, router]);

  if (status === "loading") return null;

  if (status === "authenticated") {
    return children;
  }

  return null;
}
