"use client";

import * as React from "react";
import { useState } from "react";
import { alpha } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import AppNavbar from "../../components/AppNavbar";
import MainGrid from "../../components/MainGrid";
import SideMenu from "../../components/SideMenu";
import Analytics from "../../components/Analytics";
import Clients from "../../components/Clients";
import Tasks from "../../components/Tasks";
import AppTheme from "../shared-theme/AppTheme";
import AuthGuard from "../../components/AuthGuard";

import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from "../../theme/customizations";

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function AdminPage(props) {
  const [selectedPage, setSelectedPage] = useState("Home");

  const handleMenuClick = (page) => {
    setSelectedPage(page);
  };

  const renderContent = () => {
    switch (selectedPage) {
      case "Analytics":
        return <Analytics />;
      case "Clients":
        return <Clients />;
      case "Tasks":
        return <Tasks />;
      default:
        return <MainGrid />;
    }
  };

  return (
    <AuthGuard>
      <AppTheme {...props} themeComponents={xThemeComponents}>
        <CssBaseline enableColorScheme />
        <Box sx={{ display: "flex" }}>
          <SideMenu onMenuClick={handleMenuClick} />
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
