"use client";

import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "../../components/navbar";
import { useTheme } from "../../context/ThemeContext";
import HeroSection from "@/components/HeroSection";
import Divider from "@mui/material/Divider";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Footer from "@/components/Footer";

export default function ContactUsPage() {
  const { mode, toggleColorMode } = useTheme();

  return (
    <>
      <CssBaseline />
      {/* Navbar */}
      <NavBar mode={mode} toggleColorMode={toggleColorMode} />

      {/* Hero Section */}
      <HeroSection
        title="CONTACT US"
        backgroundImage="/img1.jpg"
        alt="HeroSection Background Image"
      />

      {/* Main Content */}
      <Box sx={{ py: 8, my: 12 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Left Section */}
            <Grid item xs={12} md={6} textAlign="center">
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}>
                Contact Us
              </Typography>
              <Typography
                variant="h2"
                color="text.primary"
                sx={{
                  mb: 2,
                  fontFamily: '"Bebas Neue", sans-serif',
                }}>
                Have Questions? <br /> Get in Touch!
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Reach out to us using the details below.
              </Typography>

              {/* Contact Details */}
              <Box display="flex" flexDirection="column" alignItems="center">
                {/* Phone */}
                <Box display="flex" alignItems="center">
                  <IconButton>
                    <PhoneIcon />
                  </IconButton>
                  <Typography variant="body1" color="text.primary">
                    +2348147737062
                  </Typography>
                </Box>

                {/* Email */}
                <Box display="flex" alignItems="center">
                  <IconButton>
                    <EmailIcon />
                  </IconButton>
                  <Typography variant="body1" color="text.primary">
                    info@demandpoint.app
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right Section (Contact Form) */}
            <Grid item xs={12} md={6}>
              <form>
                {/* Name Field */}
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  margin="normal"
                  required
                />

                {/* Email Field */}
                <TextField
                  fullWidth
                  label="Your Email"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  required
                />

                {/* Message Field */}
                <TextField
                  fullWidth
                  label="Your Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  margin="normal"
                  required
                />

                {/* Submit Button */}
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{
                    mt: 2,
                    py: 1.5
                  }}
                  type="submit">
                  Send Message
                </Button>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />
      <Footer />
    </>
  );
}
