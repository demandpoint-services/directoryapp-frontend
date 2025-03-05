"use client";

import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { ThemeContextProvider } from "../context/ThemeContext";

const theme = createTheme({
  palette: {
    primary: { main: "#6100FF" },
    secondary: { main: "#FF5722" },
    background: { default: "#f4f4f4", paper: "#ffffff" },
  },
  typography: {
    fontFamily: ["Inter", "Roboto Mono", "Arial", "sans-serif"].join(","),
    h1: { fontFamily: '"Bebas Neue", sans-serif' },
  },
});

export default function ThemeWrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </ThemeProvider>
  );
}
