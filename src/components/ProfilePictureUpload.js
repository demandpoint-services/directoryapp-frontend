import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Stack,
  Avatar,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { IconButton } from "@mui/material";

const ProfilePictureUpload = ({ setProfilePic, profilePic }) => {
  const [preview, setPreview] = useState(null);
  const [openCamera, setOpenCamera] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Display captured photo as preview
  useEffect(() => {
    if (profilePic && typeof profilePic !== "string") {
      const objectUrl = URL.createObjectURL(profilePic);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [profilePic]);

  const openCameraHandler = async () => {
    setOpenCamera(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.error("Camera access error:", err);
    }
  };

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      if (blob) {
        const file = new File([blob], "profile_photo.jpg", {
          type: "image/jpeg",
        });
        setProfilePic(file);
        setPreview(URL.createObjectURL(file));
      }
    }, "image/jpeg");

    stopCamera();
    setOpenCamera(false);
  };

  const stopCamera = () => {
    const video = videoRef.current;
    const stream = video?.srcObject;
    if (stream && stream.getTracks) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
    }
  };

  return (
    <Stack direction="column" spacing={2} alignItems="center">
      {preview && (
        <Avatar src={preview} sx={{ width: 100, height: 100, mb: 1 }} />
      )}

      <Stack direction="row" spacing={2} alignItems="center">
        <Button variant="outlined" component="label">
          Choose from Gallery
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleFileChange}
          />
        </Button>

        <IconButton
          color="primary"
          onClick={openCameraHandler}
          sx={{
            backgroundColor: "#f0f0f0",
            borderRadius: 1,
            "&:hover": {
              backgroundColor: "#e0e0e0",
            },
          }}>
          <PhotoCamera />
        </IconButton>
      </Stack>

      {/* Camera Modal */}
      <Dialog
        open={openCamera}
        onClose={() => setOpenCamera(false)}
        maxWidth="sm"
        fullWidth>
        <DialogContent>
          <Box sx={{ position: "relative", width: "100%" }}>
            <video ref={videoRef} style={{ width: "100%", borderRadius: 8 }} />
            <canvas ref={canvasRef} style={{ display: "none" }} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={capturePhoto} variant="contained">
            Capture
          </Button>
          <Button
            onClick={() => {
              stopCamera();
              setOpenCamera(false);
            }}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default ProfilePictureUpload;
