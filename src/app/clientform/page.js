"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { Box, Button, Typography, CssBaseline, Divider } from "@mui/material";
import NavBar from "../../components/navbar";
import Footer from "@/components/Footer";
import { useTheme } from "../../context/ThemeContext";
import TextInput from "../../components/TextInput";
import ProfilePictureUpload from "../../components/ProfilePictureUpload";
import LocationInput from "../../components/LocationInput";

export default function ClientForm() {
  const { mode, toggleColorMode } = useTheme();
  const [profilePic, setProfilePic] = useState(null);
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
        const res = await axios.post(CLOUDINARY_URL, formData);
        profilePicUrl = res.data.secure_url;
      } catch (error) {
        toast.error("Image upload failed. Please try again.");
        return;
      }
    }

    const clientData = {
      fullName: data.get("fullName"),
      phone: data.get("phone"),
      email: data.get("email"),
      city: data.get("city"),
      state: data.get("state"),
      profilePicture: profilePicUrl,
    };

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/clients/register`,
        clientData
      );
      toast.success("Registration Successful! Redirecting...");
      setTimeout(() => router.push("/"), 2000);
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <>
      <CssBaseline />
      <ToastContainer />
      <NavBar mode={mode} toggleColorMode={toggleColorMode} />
      <Box
        component="form"
        onSubmit={handleSubmit}
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
          Client Registration
        </Typography>

        <ProfilePictureUpload
          setProfilePic={setProfilePic}
          profilePic={profilePic}
        />
        <TextInput label="Full Name" name="fullName" required />
        <TextInput label="Phone Number" name="phone" required />
        <TextInput label="Email Address" name="email" type="email" required />
        <LocationInput />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
          Join as Client
        </Button>
      </Box>
      <Divider sx={{ my: 4 }} />
      <Footer />
    </>
  );
}
