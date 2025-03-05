"use client";

import { useState, useCallback } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import ArtisanDetails from "./ArtisanDetails";

const ArtisansCard = ({ artisan }) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [requestDescription, setRequestDescription] = useState("");
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleOpen = useCallback(() => setOpenDetails(true), []);
  const handleClose = useCallback(() => setOpenDetails(false), []);
  const handleSnackbarClose = () => setSnackbarOpen(false);

  const handleRequest = useCallback(() => {
    if (requestDescription.trim() === "") {
      setSnackbarOpen(true);
      return;
    }
    setConfirmationOpen(true);
    setTimeout(() => {
      setConfirmationOpen(false);
      handleClose();
    }, 3000);
  }, [requestDescription, handleClose]);

  return (
    <>
      <Card sx={{ display: "flex", minWidth: 345 }}>
        <CardActionArea
          sx={{ display: "flex", alignItems: "stretch" }}
          onClick={handleOpen}>
          <CardMedia
            component="img"
            sx={{ width: 140, height: 200, flex: "40%", objectfit: "cover" }}
            image={artisan.profilePicture}
            alt={artisan.name}
            loading="lazy"
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}>
            <Typography gutterBottom variant="h5" component="div">
              {artisan.fullName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {artisan.specialty}
            </Typography>
            <Typography variant="body2">
              <b>{artisan.experience}</b> years of experience
            </Typography>
            <Typography variant="body2">{artisan.city}</Typography>
            <Typography variant="body2">{artisan.state} State</Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* Artisan Details Component */}
      <ArtisanDetails
        artisan={artisan}
        openDetails={openDetails}
        onClose={handleClose}
        onRequest={handleRequest}
        requestDescription={requestDescription}
        setRequestDescription={setRequestDescription}
        confirmationOpen={confirmationOpen}
      />

      {/* Snackbar Notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert
          onClose={handleSnackbarClose}
          severity="warning"
          sx={{ width: "100%" }}>
          Please provide a brief description of the work required.
        </Alert>
      </Snackbar>
    </>
  );
};

export default ArtisansCard;
