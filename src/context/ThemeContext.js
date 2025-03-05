import { createContext, useMemo, useState, useContext, useEffect } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import PropTypes from "prop-types";

// Create the context
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);

// ThemeContext provider
export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light"); // Default to "light"

  // Use `useEffect` to read the saved mode from localStorage on the client
  useEffect(() => {
    const savedMode =
      typeof window !== "undefined" ? localStorage.getItem("color-mode") : null;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("color-mode", mode);
    }

    // Dynamically update CSS variables for light/dark mode
    const root = document.documentElement.style;
    if (mode === "light") {
      root.setProperty("--foreground", "#000000");
      root.setProperty("--background", "#ffffff");
    } else {
      root.setProperty("--foreground", "#ffffff");
      root.setProperty("--background", "#000000");
    }
  }, [mode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#6100FF", // Cornflower Blue
          },
          secondary: {
            main: "#FFA500", // Soft Orange
          },
          background: {
            default: mode === "light" ? "#ffffff" : "#000000",
            paper: mode === "light" ? "#f5f5f5" : "#1e1e1e",
          },
          text: {
            primary: mode === "light" ? "#000000" : "#ffffff",
            secondary: mode === "light" ? "#555555" : "#bbbbbb",
          },
        },
        typography: {
          fontFamily: '"Inter", "Arial", sans-serif',
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Add PropTypes validation for the children prop
ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
