"use client";
import { useState } from "react";
import { CssBaseline, Box, Stack } from "@mui/material";
import AppTheme from "../shared-theme/AppTheme";
import { useUser } from "@/hooks/useUser";
import UserSideMenu from "../../components/UserSideMenu";
import AppNavbar from "../../components/UserAppNavbar";
import AuthGuard from "../../components/UserAuthGuard";

import RequestTab from "@/components/dashboard/RequestTab";
import HistoryTab from "@/components/dashboard/HistoryTab";
import InvoicesTab from "@/components/dashboard/InvoicesTab";
import DashboardTab from "@/components/dashboard/DashboardTab";
import TasksTab from "@/components/dashboard/TasksTab";

export default function UserDashboard(props) {
  const [selectedPage, setSelectedPage] = useState("Profile");
  const { user } = useUser();

  const handleMenuClick = (page) => setSelectedPage(page);

  const renderContent = () => {
    switch (selectedPage) {
      case "Dashboard":
        return <DashboardTab />;
      case "Request Artisan":
        return <RequestTab />;
      case "Order History":
        return <HistoryTab />;
      case "Tasks":
        return <TasksTab />;
      case "Invoices":
        return <InvoicesTab />;
      default:
        return <DashboardTab />;
    }
  };

  return (
    <AuthGuard>
      <AppTheme themeComponents={{}}>
        <CssBaseline enableColorScheme />
        <Box sx={{ display: "flex" }}>
          <UserSideMenu user={user} onMenuClick={handleMenuClick} />
          <AppNavbar onMenuClick={handleMenuClick} />
          <Box
            component="main"
            sx={(theme) => ({
              flexGrow: 1,
              backgroundColor: theme.vars
                ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                : alpha(theme.palette.background.default, 1),
              overflow: "auto",
            })}>
            <Stack
              spacing={2}
              sx={{
                alignItems: "center",
                mx: 3,
                pb: 5,
                mt: { xs: 8, md: 0 },
              }}>
              {renderContent()}
            </Stack>
          </Box>
        </Box>
      </AppTheme>
    </AuthGuard>
  );
}
