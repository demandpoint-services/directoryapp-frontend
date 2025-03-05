"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function HeroSection({ title, backgroundImage }) {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "25vh", sm: "30vh", md: "40vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "6em",
        padding: "2em",
        color: "#fff",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 1,
        },
      }}>
      <Box sx={{ position: "relative", zIndex: 2, maxWidth: "800px" }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          marginTop="12px"
          sx={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: "clamp(4rem, 10vw, 6rem)",
          }}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
