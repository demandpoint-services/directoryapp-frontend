"use client";

import { Box, Typography, Button, CssBaseline } from "@mui/material";
import { useRouter } from "next/navigation";

export default function SelectRole() {
  const router = useRouter();

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          height: "100vh",
        }}>
        {/* Artisan Section */}
        <Box
          sx={{
            flex: 1,
            background: "linear-gradient(135deg, #6100FF 0%, #FFA500 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}>
          {/* Overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
              color: "#fff",
              px: 4,
              maxWidth: 500,
            }}>
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontFamily: '"Bebas Neue", sans-serif',
              }}>
              I'm an Artisan
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Join our network of skilled professionals. Get seen by potential
              clients, showcase your expertise, and grow your business.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 6,
                py: 1.5,
                fontWeight: "bold",
                background: "linear-gradient(135deg, navy, #8A2BE2)",
                color: "#fff",
              }}
              onClick={() => router.push("/artisanform")}>
              Register as Artisan
            </Button>
          </Box>
        </Box>

        {/* Client Section */}
        <Box
          sx={{
            flex: 1,
            backgroundImage: `url(https://img.freepik.com/premium-photo/business-people-celebration-computer-office-night-stock-market-profit-ipo-launch-bonus-professional-trading-teamwork-victory-fist-desk-financial-investment-revenue_590464-479788.jpg?w=900)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          {/* Overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
              color: "#fff",
              px: 4,
              maxWidth: 500,
            }}>
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontFamily: '"Bebas Neue", sans-serif',
              }}>
              I'm a Client
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Looking for reliable and verified artisans? Sign up to find, hire,
              and review top-rated professionals near you.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 6,
                py: 1.5,
                fontWeight: "bold",
                borderColor: "#fff",
                color: "#fff",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  background: "linear-gradient(135deg, navy, #8A2BE2)",
                  color: "#fff",
                  borderColor: "transparent",
                },
              }}
              onClick={() => router.push("/clientform")}>
              Register as Client
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
