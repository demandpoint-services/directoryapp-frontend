// components/AuthGuard.js

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("admin_token");
        if (!token) {
          throw new Error("No token");
        }

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/validate-token`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setIsAuthenticated(true);
        } else {
          throw new Error("Invalid token");
        }
      } catch (error) {
        setIsAuthenticated(false);
        router.replace("/admin-login");
      }
    };

    checkAuth();
  }, [router]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return children;
  }

  return null;
}
