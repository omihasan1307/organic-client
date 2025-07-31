// components/AuthInitializer.tsx
"use client";

import { useAuth } from "@/app/providers/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthInitializer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return <div>Loading...</div>; // Or your custom loading component
  }

  return <>{children}</>;
}
