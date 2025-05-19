"use client";

import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "../../components/navbar";
import { useTheme } from "../../context/ThemeContext";
import Artisans from "@/components/Artisans";
import Footer from "@/components/Footer";
import Divider from "@mui/material/Divider";

export default function ArtisansPage() {
  const { mode, toggleColorMode } = useTheme();

  return (
    <>
      <CssBaseline />
      {/* Navbar */}
      <NavBar mode={mode} toggleColorMode={toggleColorMode} />
      <Artisans />
      <Divider />
      <Footer />
    </>
  );
}
