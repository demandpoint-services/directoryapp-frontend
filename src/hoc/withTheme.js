import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import themeOptions from "../routes/Theme"; // Assuming Theme is an object with theme options
import ToggleCustomTheme from "../assets/components/ToggleCustomTheme";

const withTheme = (Component) => {
  const ThemedComponent = (props) => {
    const [mode, setMode] = React.useState("light");
    const [showCustomTheme, setShowCustomTheme] = React.useState(true);

    const theme = createTheme(themeOptions(mode)); // Pass theme options directly
    const defaultTheme = createTheme({ palette: { mode } });

    const toggleColorMode = () => {
      setMode((prev) => (prev === "dark" ? "light" : "dark"));
    };

    const toggleCustomTheme = () => {
      setShowCustomTheme((prev) => !prev);
    };

    return (
      <ThemeProvider theme={showCustomTheme ? theme : defaultTheme}>
        <CssBaseline />
        <Component
          {...props}
          mode={mode}
          toggleColorMode={toggleColorMode}
          showCustomTheme={showCustomTheme}
          toggleCustomTheme={toggleCustomTheme}
        />
        <ToggleCustomTheme
          showCustomTheme={showCustomTheme}
          toggleCustomTheme={toggleCustomTheme}
        />
      </ThemeProvider>
    );
  };

  ThemedComponent.propTypes = {
    Component: PropTypes.elementType.isRequired,
  };

  return ThemedComponent;
};

export default withTheme;
