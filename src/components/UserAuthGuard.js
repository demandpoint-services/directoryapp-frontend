"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function UserAuthGuard({ children }) {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("user_token");
        if (!token) throw new Error("No token");

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
      } catch (err) {
        setIsAuthenticated(false);
        router.replace("/signin");
      } finally {
        setCheckingAuth(false);
      }
    };

    checkAuth();
  }, [router]);

  if (checkingAuth) {
    return (
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!isAuthenticated) return null;

  return children;
}
