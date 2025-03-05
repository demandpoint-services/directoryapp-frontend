"use client";

import { Box, Typography, Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import Image from "next/image";

export default function DemandPointBrief() {
  return (
    <Container>
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
            Demand Point bridges the gap between skilled artisans and clients in
            need of quality services. With a focus on trust, convenience, and
            excellence, we help both clients and artisans find the perfect match
            for every project.
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
                Demand Point is a comprehensive platform designed to connect
                clients with skilled artisans in a seamless and secure way. The
                platform offers customizable user profiles for both artisans and
                clients, enabling artisans to showcase their skills, experience,
                and portfolio, while clients can outline their project needs and
                preferences. With a powerful search and matching system, clients
                can easily find artisans based on skill sets, location, ratings,
                and availability, while intelligent recommendations further
                enhance the user experience. Key features include real-time
                booking and notifications, secure payment integration, in-app
                communication tools, and a verification process to build trust.
              </Typography>
            </Box>

            {/* Read More Button */}
            <Box sx={{ mt: "auto" }}>
              <Button
                component={Link}
                href="/aboutus"
                variant="contained"
                color="primary"
                size="medium"
                sx={{
                  minWidth: "fit-content",
                  textTransform: "none",
                  py: 1.2,
                  mt: 4,
                }}>
                Learn More →
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
