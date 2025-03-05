import Box from "@mui/material/Box";
import PropTypes from "prop-types";

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100dvw",
        position: "fixed",
        bottom: 24,
      }}>
      <button onClick={toggleCustomTheme}>
        {showCustomTheme ? "Disable Custom Theme" : "Enable Custom Theme"}
      </button>
    </Box>
  );
}

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.bool.isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

export default ToggleCustomTheme;
