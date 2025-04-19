"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { Box, Button, Typography, CssBaseline, Divider } from "@mui/material";
import NavBar from "../../components/navbar";
import Footer from "@/components/Footer";
import { useTheme } from "../../context/ThemeContext";
import TextInput from "../../components/TextInput";
import ProfilePictureUpload from "../../components/ProfilePictureUpload";
import LocationInput from "../../components/LocationInput";
import SpecialtySelect from "../../components/SpecialtySelect";

export default function ArtisanForm() {
  const { mode, toggleColorMode } = useTheme();
  const [profilePic, setProfilePic] = useState(null);
  const [priceRange, setPriceRange] = useState({
    minPrice: "",
    maxPrice: "",
  });

  const router = useRouter();

  const CLOUDINARY_URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
  const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let profilePicUrl = "";

    if (profilePic) {
      const formData = new FormData();
      formData.append("file", profilePic);
      formData.append("upload_preset", UPLOAD_PRESET);

      try {
        const cloudinaryRes = await axios.post(CLOUDINARY_URL, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        profilePicUrl = cloudinaryRes.data.secure_url;
      } catch (error) {
        console.error(
          "Image upload failed:",
          error.response?.data || error.message
        );
        toast.error("Image upload failed. Please try again.");
        return;
      }
    }

    const artisanData = {
      fullName: data.get("fullName"),
      profilePicture: profilePicUrl,
      phone: data.get("phone"),
      email: data.get("email"),
      city: data.get("city"),
      state: data.get("state"),
      specialty:
        data.get("specialty") === "Others"
          ? data.get("customSpecialty")
          : data.get("specialty"),
      experience: Number(data.get("experience")),
    };

    try {
      const response = await axios.post(
        `${process.env.API_BASE_URL}/artisans/register`,
        artisanData,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Response:", response.data);

      // ✅ Show toast notification
      toast.success("Registration Successful! Redirecting...", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
      });

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response?.data || error.message
      );
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <>
      <CssBaseline />
      <ToastContainer />{" "}
      {/* ✅ Add ToastContainer to ensure notifications show up */}
      <NavBar mode={mode} toggleColorMode={toggleColorMode} />
      <Box
        component="form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          maxWidth: "900px",
          margin: "auto",
          padding: 4,
          my: { xs: 6, md: 12 },
        }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: { xs: "2rem", md: "3.75rem" },
            textAlign: "center",
            mb: 2,
          }}>
          Artisan Registration
        </Typography>

        <ProfilePictureUpload
          setProfilePic={setProfilePic}
          profilePic={profilePic}
        />
        <TextInput label="Full Name" name="fullName" required />
        <TextInput label="Phone Number" name="phone" required />
        <TextInput label="Email Address" name="email" type="email" required />
        <LocationInput />
        <SpecialtySelect />
        <TextInput
          label="Years of Experience"
          name="experience"
          type="number"
          required
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 3, py: 1.5 }}>
          Join waitlist
        </Button>
      </Box>
      <Divider sx={{ my: 4 }} />
      <Footer />
    </>
  );
}
