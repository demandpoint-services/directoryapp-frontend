"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
  Stack,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function AdminLoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormError("");

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signin`,
        form
      );

      if (response.status === 200) {
        localStorage.setItem("admin_token", response.data.token);
        router.push("/admin");
      }
    } catch (error) {
      setFormError(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }

    setLoading(false);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Box
        sx={{
          p: 4,
          textAlign: "center",
        }}>
        <Typography variant="h5" mb={2}>
          Admin Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Username"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              required
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit" variant="contained" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
            <Button
              variant="outlined"
              onClick={() => router.push("/admin-signup")}>
              Don't have an account? Sign up
            </Button>
            {formError && <Alert severity="error">{formError}</Alert>}
          </Stack>
        </form>
      </Box>
    </Container>
  );
}
