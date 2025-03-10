import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledBox = styled("div")(({ theme }) => ({
  alignSelf: "center",
  width: "100%",
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: "6px solid",
  outlineColor: "hsla(220, 25%, 80%, 0.2)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
  overflow: "hidden", // Ensures video fits well
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",

  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(10),
    height: 700,
  },

  ...theme.applyStyles("dark", {
    boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
    outlineColor: "hsla(220, 20%, 42%, 0.1)",
    borderColor: (theme.vars || theme).palette.grey[700],
  }),

  "& video": {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

export default function Hero() {
  return (
    <Box sx={{ width: "100%" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}>
        <Stack
          spacing={2}
          sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)",
              fontFamily: '"Bebas Neue", sans-serif',
            }}>
            Work&nbsp;Without&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: "inherit",
                color: "primary.main",
                fontFamily: '"Bebas Neue", sans-serif',
                ...theme.applyStyles("dark", {
                  color: "primary.light",
                }),
              })}>
              Limits
            </Typography>
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              width: { sm: "100%", md: "80%" },
            }}>
            Join Demand Point today and connect with clients seeking skilled
            artisans like yourself. Showcase your expertise, receive bookings,
            and secure payments, all in one place.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            sx={{ minWidth: "fit-content" }}
            href="/artisanform">
            Join Now
          </Button>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textAlign: "center" }}>
            By clicking &quot;Join now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>

        <StyledBox>
          <video autoPlay loop muted playsInline>
            <source src="/Vid8.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </StyledBox>
      </Container>
    </Box>
  );
}
