// lib/auth.ts
export const getAuthToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("authToken");
  }
  return null;
};

export const setAuthToken = (token: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("authToken", token);
  }
};

export const removeAuthToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("authToken");
  }
};
