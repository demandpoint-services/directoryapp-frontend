"use client";

import styles from "./page.module.css";
import NavBar from "@/components/navbar";
import Divider from "@mui/material/Divider";
import { useTheme } from "../context/ThemeContext"; // Import useTheme
import Hero from "@/components/hero";
import ProfileCollection from "@/components/ProfileCollection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Highlights from "@/components/Highlights";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Brief from "@/components/Brief";

export default function Home() {
  const { mode, toggleColorMode } = useTheme();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <NavBar mode={mode} toggleColorMode={toggleColorMode} />
        <Hero />
        <div>
          <ProfileCollection />
          <Divider />
          <Brief />
          <Features />
          <Divider />
          <Testimonials />
          <Divider />
          <Highlights />
          <Divider />
          <FAQ />
          <Divider />
          <Footer />
        </div>
      </main>
    </div>
  );
}
