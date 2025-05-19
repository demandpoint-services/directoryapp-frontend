"use client";

import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "../../components/navbar";
import HeroSection from "../../components/HeroSection"; // Import the new component
import { useTheme } from "../../context/ThemeContext";
import { Box, Typography, Container, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Footer from "@/components/Footer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Highlights from "@/components/Highlights";
import Team from "@/components/Team";

export default function AboutPage() {
  const { mode, toggleColorMode } = useTheme();

  return (
    <>
      <CssBaseline />
      <NavBar mode={mode} toggleColorMode={toggleColorMode} />

      {/* Hero Section */}
      <HeroSection
        title="ABOUT DEMAND POINT"
        backgroundImage="/img1.jpg"
        alt="HeroSection Background Image"
      />

      {/* About Content Section */}
      <Container>
        {/* Who we are */}
        <Box sx={{ py: { xs: 6, md: 12 }, gap: 2 }}>
          <Box
            sx={{
              width: { sm: "100%", md: "100%" },
              mx: "auto",
              textAlign: "center",
            }}>
            {/* Section Title */}
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontFamily: '"Bebas Neue", sans-serif',
                letterSpacing: 1,
              }}>
              WHO WE ARE
            </Typography>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: { xs: "2rem", md: "3.75rem" },
              }}>
              Connecting Artisans with Clients in Real Time
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mx: "auto",
                mt: 2,
                fontSize: "1.125rem",
                textAlign: "center",
              }}>
              Demand Point bridges the gap between skilled artisans and clients
              in need of quality services. With a focus on trust, convenience,
              and excellence, we help both clients and artisans find the perfect
              match for every project.
            </Typography>
          </Box>

          {/* Two-Column Layout */}
          <Grid
            container
            spacing={3}
            sx={{
              mx: "auto",
              mt: 6,
            }}>
            {/* Image Column */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: "15em", md: "24em" },
                  overflow: "hidden",
                  display: "block",
                }}>
                <Image
                  src="/img2.jpg"
                  alt="Artisan Services"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>

            {/* Text Column */}
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontSize: { xs: "1.5rem", md: "2rem" },
                  }}>
                  Brief about Demand Point
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "justify",
                    fontSize: "1rem",
                  }}>
                  Demand Point is a jointly-owned partnership venture and a
                  comprehensive platform designed to connect clients with
                  skilled artisans in a seamless and secure way. The platform
                  offers customizable user profiles for both artisans and
                  clients, enabling artisans to showcase their skills,
                  experience, and portfolio, while clients can outline their
                  project needs and preferences. With a powerful search and
                  matching system, clients can easily find artisans based on
                  skill sets, location, ratings, and availability, while
                  intelligent recommendations further enhance the user
                  experience. Key features include real-time booking and
                  notifications, secure payment integration, in-app
                  communication tools, and a verification process to build
                  trust.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Team Section */}
      <Team />

      {/* Values Section */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/img1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "auto", md: "500px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          py: { xs: 4, md: 0 },
        }}>
        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <Box
          sx={{ position: "relative", zIndex: 2, maxWidth: "1200px", px: 2 }}>
          <Typography
            variant="h6"
            sx={{
              mb: 1,
              fontFamily: '"Bebas Neue", sans-serif',
            }}>
            Our Values
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            The Foundation of Our Commitment & Innovation
          </Typography>

          {/* Cards Container */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              gap: 3,
              mt: 4,
            }}>
            {/* Vision Card */}
            <Card
              sx={{
                width: { xs: "100%", md: "48%" },
                backgroundColor: "#1a1a1a",
                color: "white",
                p: 2,
                py: 0,
              }}>
              <CardContent>
                <Grid container alignItems="center" spacing={2} direction="row">
                  {/* Icon Column - Hide on small screens */}
                  <Grid
                    size={{ xs: 4, md: 4 }}
                    sx={{
                      display: { xs: "none", md: "flex" },
                      justifyContent: "center",
                    }}>
                    <Box
                      bgcolor="#333333"
                      sx={{ p: 4, m: 2, borderRadius: "8px" }}>
                      <VisibilityIcon sx={{ fontSize: 50 }} />
                    </Box>
                  </Grid>

                  {/* Text Column */}
                  <Grid size={{ xs: 12, md: 8 }} textAlign="left">
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: '"Bebas Neue", sans-serif',
                      }}>
                      Our Vision
                    </Typography>
                    <Typography variant="body2">
                      To be the leading platform that revolutionizes how clients
                      connect with skilled artisans, fostering trust,
                      efficiency, and professional growth through seamless
                      technology and innovation.
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Mission Card */}
            <Card
              sx={{
                width: { xs: "100%", md: "48%" },
                backgroundColor: "#1a1a1a",
                color: "white",
                p: 2,
                py: 0,
              }}>
              <CardContent>
                <Grid container alignItems="center" spacing={2} direction="row">
                  {/* Icon Column - Hide on small screens */}
                  <Grid
                    size={{ xs: 4, md: 4 }}
                    sx={{
                      display: { xs: "none", md: "flex" },
                      justifyContent: "center",
                    }}>
                    <Box
                      bgcolor="#333333"
                      sx={{ p: 4, m: 2, borderRadius: "8px" }}>
                      <TrendingUpIcon sx={{ fontSize: 50 }} />
                    </Box>
                  </Grid>

                  {/* Text Column */}
                  <Grid size={{ xs: 12, md: 8 }} textAlign="left">
                    <Typography
                      variant="h6"
                      sx={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                      Our Mission
                    </Typography>
                    <Typography variant="body2">
                      To empower artisans and clients by providing a secure,
                      data-driven platform that simplifies connections, enhances
                      professional opportunities, and drives success through
                      innovation, collaboration, and user-centric solutions.
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>

      {/* Highlights */}
      <Highlights />
      <Footer />
    </>
  );
}
