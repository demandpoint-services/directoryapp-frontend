import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "Smart Matching System",
    description:
      "Instantly connect with clients searching for your exact skills. Our AI-powered system ensures you get job requests tailored to your expertise.",
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: "Built for Artisans",
    description:
      "Designed specifically for skilled professionals, Demand Point helps you showcase your work, attract clients, and manage bookings effortlessly.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Seamless User Experience",
    description:
      "An intuitive and user-friendly platform that makes it easy to create profiles, communicate with clients, and secure more projects.",
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Innovative Features",
    description:
      "From secure payments to real-time booking and reviews, Demand Point offers the tools you need to grow your business and build trust.",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Reliable Support",
    description:
      "Our dedicated support team is here to assist you, ensuring a smooth experience while you focus on delivering top-notch services.",
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: "Growth & Insights",
    description:
      "Track your earnings, monitor client feedback, and gain valuable insights to improve your services and increase your bookings.",
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        // color: "white",
        // bgcolor: "black",
      }}>
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}>
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}>
          <Typography component="h2" variant="h4" gutterBottom>
            Highlights
          </Typography>
          <Typography variant="body1" >
            Discover key features designed to help artisans showcase their
            skills, attract more clients, and grow their businesses
            effortlessly.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: "inherit",
                  p: 3,
                  height: "100%",
                  borderColor: "hsla(220, 25%, 25%, 0.3)",
                }}>
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: "medium" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2">
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
