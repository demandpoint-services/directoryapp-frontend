import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

const profileImages = [
  "/headshot2.jpg",
  "/headshot8.jpg",
  "/headshot3.jpg",
  "/headshot4.jpg",
  "/headshot5.jpg",
  "/headshot6.jpg",
];

export default function TrustedByArtisans() {
  return (
    <Box id="trustedByArtisans" sx={{ py: 4, mb: 6, textAlign: "center" }}>
      <Typography
        component="p"
        variant="subtitle1"
        sx={{ color: "text.secondary" }}>
        Trusted by over{" "}
        <span
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}>
          50,000
        </span>{" "}
        artisans nationwide.
      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 1 }}>
        {profileImages.map((src, index) => (
          <Avatar
            key={index}
            src={src}
            alt="Artisans avatar"
            sx={{
              width: 50,
              height: 50,
              margin: "0 -8px",
              border: "2px solid white",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          />
        ))}
      </Grid>
    </Box>
  );
}
