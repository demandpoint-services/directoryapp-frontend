"use client";

import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "../../components/navbar";
import { useTheme } from "../../context/ThemeContext";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Divider from "@mui/material/Divider";

export default function HowItWorksPage() {
  const { mode, toggleColorMode } = useTheme();

  return (
    <>
      <CssBaseline />
      {/* Navbar */}
      <NavBar mode={mode} toggleColorMode={toggleColorMode} />

      {/* Hero Section */}
      <HeroSection
        title="HOW IT WORKS"
        backgroundImage="/img1.jpg"
        alt="HeroSection Background Image"
      />
      <Features />
      <Divider />
      <Footer />
    </>
  );
}
