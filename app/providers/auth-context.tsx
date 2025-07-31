// app/providers/auth-context.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { parseJwt } from "@/lib/jwt";

type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
};

type AuthContextType = {
  token: string | null;
  role: "admin" | "user" | null;
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<"admin" | "user" | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  // In your AuthProvider
  useEffect(() => {
    const initializeAuth = () => {
      const storedToken = localStorage.getItem("authToken");
      if (storedToken) {
        const decoded = parseJwt(storedToken);
        setToken(storedToken);
        setRole(decoded.role);
        setUser({
          id: decoded.sub,
          email: decoded.email,
          name: decoded.name || decoded.email.split("@")[0],
        });
      } else {
        router.push("/login"); // Redirect if no token
      }
      setIsLoading(false);
    };
    initializeAuth();
  }, [router]);

  const login = (newToken: string) => {
    const decoded = parseJwt(newToken);
    setToken(newToken);
    setRole(decoded.role);
    setUser({
      id: decoded.sub,
      email: decoded.email,
      name: decoded.name || decoded.email.split("@")[0],
    });
    localStorage.setItem("authToken", newToken);

    // Redirect based on role
    router.push(decoded.role === "admin" ? "/profile/admin" : "/profile");
  };

  const logout = () => {
    setToken(null);
    setRole(null);
    setUser(null);
    localStorage.removeItem("authToken");
    router.push("/login");
  };

  const isAuthenticated = !!token;

  if (isLoading) {
    return <div className="h-9 w-9 rounded-full bg-gray-200 animate-pulse" />;
  }

  return (
    <AuthContext.Provider
      value={{ token, role, user, login, logout, isAuthenticated, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
