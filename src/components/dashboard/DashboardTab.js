"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Copyright from "../../internals/components/Copyright";
import NavbarBreadcrumbs from "../NavbarBreadcrumbs";
import { Avatar, Grid, Paper, Divider, CircularProgress } from "@mui/material";
import { useUser } from "@/hooks/useUser";

export default function DashboardTab() {
  const { user, loading } = useUser();

  if (loading) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        maxWidth: { sm: "100%", md: "1700px" },
        px: { xs: 0, sm: 2 },
      }}>
      {/* Breadcrumbs */}
      <NavbarBreadcrumbs currentPage="" />

      {/* Header */}
      <Typography
        component="h2"
        variant="h6"
        sx={{ mb: 2, color: "text.primary" }}>
        Profile Overview
      </Typography>

      {/* Profile Card */}
      <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Avatar
              alt={user?.username || "User"}
              src={user?.avatar || "/static/images/avatar/default.jpg"}
              sx={{ width: 100, height: 100 }}
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h6" gutterBottom>
              {user?.username || "No name"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: {user?.email || "No email"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Role: {user?.role || "User"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Joined:{" "}
              {user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Unknown"}
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body1">
          Welcome to your user dashboard. You can manage your profile settings,
          update personal information, and view your activity history.
        </Typography>
      </Paper>

      {/* Footer */}
      <Copyright sx={{ mt: 4 }} />
    </Box>
  );
}
