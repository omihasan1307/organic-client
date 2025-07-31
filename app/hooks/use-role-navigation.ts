// hooks/use-role-navigation.ts
"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../providers/auth-context";

export const useRoleNavigation = () => {
  const { role } = useAuth();
  const router = useRouter();

  const navigateToProfile = () => {
    const path = role === "admin" ? "/profile/admin" : "/profile";
    router.push(path);
  };

  return { navigateToProfile };
};