import { useState } from "react";

interface RegistrationData {
  email: string;
  password: string;
  confirmPassword: string;
}

interface UseRegistration {
  register: (data: RegistrationData) => Promise<void>;
  loading: boolean;
  error: string | null;
}

export const useRegistration = (): UseRegistration => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (data: RegistrationData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "http://api.mnimedu.com/api/auth/registration/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Registration failed");
      }

      console.log("Registration successful!");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error };
};
