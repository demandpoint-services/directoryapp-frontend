"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  Box,
  Button,
  TextField,
  Typography,
  CssBaseline,
  FormControl,
  FormLabel,
  Stack,
  Link,
  Divider,
  Alert,
} from "@mui/material";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import AppTheme from "../shared-theme/AppTheme";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  border: 0,
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(0, 0.00%, 0.00%, 0.80), hsl(0, 0.00%, 0.00%))",
    }),
  },
}));

export default function UserSignupPage(props) {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/signup`,
        form
      );

      if (response.status === 201) {
        toast.success("Signup successful", {
          position: "top-right",
          autoClose: 3000,
        });

        localStorage.setItem("user_token", response.data.token);

        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      toast.error(
        error.response?.data?.message || "Signup failed. Please try again."
      );
    }

    setLoading(false);
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <ToastContainer />
      <SignUpContainer direction="column" justifyContent="center">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(1.5rem, 10vw, 1.8rem)" }}>
            User Signup
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <TextField
                name="username"
                id="username"
                required
                fullWidth
                placeholder="johndoe"
                value={form.username}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                name="email"
                id="email"
                type="email"
                required
                fullWidth
                placeholder="user@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                name="password"
                id="password"
                type="password"
                placeholder="••••••"
                required
                fullWidth
                value={form.password}
                onChange={handleChange}
              />
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}>
              {loading ? "Signing up..." : "Sign up"}
            </Button>

            {formError && <Alert severity="error">{formError}</Alert>}
          </Box>

          <Divider>
            <Typography sx={{ color: "text.secondary" }}>or</Typography>
          </Divider>

          <Typography sx={{ textAlign: "center" }}>
            Already have an account?{" "}
            <Link href="/" variant="body2">
              Log in
            </Link>
          </Typography>
        </Card>
      </SignUpContainer>
    </AppTheme>
  );
}
