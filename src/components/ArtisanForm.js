import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const ArtisanForm = () => {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [experience, setExperience] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState("");

  // Handle Image Upload and Preview
  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhoto(file);
      const reader = new FileReader();
      reader.onload = (e) => setPhotoPreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  // Handle Form Submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const artisanData = {
      name,
      profession,
      experience,
      priceRange,
      photo,
    };

    console.log("Form Data:", artisanData);

    // Reset Form
    setName("");
    setProfession("");
    setExperience("");
    setPriceRange({ min: "", max: "" });
    setPhoto(null);
    setPhotoPreview("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        margin: "0 auto",
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}>
      <Typography variant="h4" gutterBottom>
        Artisan Registration
      </Typography>

      <TextField
        label="Name"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
        required
      />

      <TextField
        label="Profession"
        fullWidth
        value={profession}
        onChange={(e) => setProfession(e.target.value)}
        margin="normal"
        required
      />

      <TextField
        label="Years of Experience"
        type="number"
        fullWidth
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        margin="normal"
        required
      />

      <Box display="flex" gap={2}>
        <TextField
          label="Min Price"
          type="number"
          value={priceRange.min}
          onChange={(e) =>
            setPriceRange({ ...priceRange, min: e.target.value })
          }
          margin="normal"
          required
        />

        <TextField
          label="Max Price"
          type="number"
          value={priceRange.max}
          onChange={(e) =>
            setPriceRange({ ...priceRange, max: e.target.value })
          }
          margin="normal"
          required
        />
      </Box>

      <Button
        variant="contained"
        component="label"
        sx={{ marginY: 2, display: "block" }}>
        Upload Photo
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handlePhotoChange}
        />
      </Button>

      {photoPreview && (
        <Card sx={{ maxWidth: 300, margin: "0 auto", marginBottom: 2 }}>
          <CardMedia
            component="img"
            height="200"
            image={photoPreview}
            alt="Preview"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Photo Preview
            </Typography>
          </CardContent>
        </Card>
      )}

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </Box>
  );
};

export default ArtisanForm;
