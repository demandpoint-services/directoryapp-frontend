import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Copyright from "../internals/components/Copyright";
import CustomizedDataGrid from "./CustomizedDataGrid";
import Header from "./Header";

export default function MainGrid() {
  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <Header />
      {/* cards */}
      <Typography
        component="h2"
        variant="h6"
        sx={{ mb: 2, color: "text.primary" }}>
        Artisans
      </Typography>
      <CustomizedDataGrid />
      <Copyright sx={{ mt: 4 }} />
    </Box>
  );
}
