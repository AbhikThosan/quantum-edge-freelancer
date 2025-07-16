import { useState } from "react";

interface LoginData {
  email: string;
  password: string;
}

interface UseLogin {
  login: (data: LoginData) => Promise<void>;
  loading: boolean;
  error: string | null;
}

export const useLogin = (): UseLogin => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (data: LoginData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://api.mnimedu.com/api/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Login failed");
      }

      console.log("Login successful!", result);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
