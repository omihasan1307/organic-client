// components/role-route.tsx
"use client";

import { useAuth } from "@/app/providers/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type RoleRouteProps = {
  children: React.ReactNode;
  allowedRoles: ("admin" | "user")[];
  redirectPath?: string;
};

export default function RoleRoute({
  children,
  allowedRoles,
  redirectPath = "/login",
}: RoleRouteProps) {
  const { isAuthenticated, role } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated || (role && !allowedRoles.includes(role))) {
      router.push(redirectPath);
    }
  }, [isAuthenticated, role, allowedRoles, redirectPath, router]);

  if (!isAuthenticated || (role && !allowedRoles.includes(role))) {
    return null;
  }

  return children;
}
