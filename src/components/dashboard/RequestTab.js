import { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Box,
  Typography,
  Grid,
  Stack,
  TextField,
  CircularProgress,
} from "@mui/material";
import ArtisansCard from "../ArtisansCard";
import ArtisanDetails from "../ArtisanDetails";
import NavbarBreadcrumbs from "../NavbarBreadcrumbs";

const RequestTab = () => {
  const [artisans, setArtisans] = useState([]);
  const [selectedArtisan, setSelectedArtisan] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true); // 🔥 Add loading state

  // Fetch artisans from backend
  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        const response = await axios.get(
          `${process.env.API_BASE_URL}/artisans`
        );
        setArtisans(response.data);
      } catch (error) {
        console.error("Error fetching artisans:", error);
      } finally {
        setLoading(false); // ✅ Done loading
      }
    };

    fetchArtisans();
  }, []);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter artisans based on search query
  const filteredArtisans = artisans.filter(
    (artisan) =>
      artisan.status === "approved" &&
      (artisan.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artisan.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artisan.specialty.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleCardClick = (artisan) => {
    setSelectedArtisan(artisan);
  };

  const handleCloseDetails = () => {
    setSelectedArtisan(null);
  };

  return (
    <Container
      sx={{
        pb: { xs: 2, sm: 2 },
        px: { xs: 0, sm: 2 },
        position: "relative",
        display: "flex",
        maxWidth: { sm: "100%", md: "1700px" },
        flexDirection: "column",
        gap: { xs: 3 },
      }}>
      {/* Breadcrumbs */}
      <NavbarBreadcrumbs currentPage="Request Artisan" />

      {/* Header */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "left", sm: "center" },
        }}>
        <Typography
          component="h2"
          variant="h6"
          sx={{ color: "text.primary", mb: { xs: 1, sm: 0 } }}>
          Find Skilled Artisans
        </Typography>

        <TextField
          size="small"
          variant="outlined"
          placeholder="Search: State, LGA, City, Specialty"
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ width: { xs: "100%", sm: "300px" } }}
        />
      </Box>

      <Box>
        {loading ? (
          <Box
            sx={{
              mt: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={4}>
            {filteredArtisans.length > 0 ? (
              filteredArtisans.map((artisan, index) => (
                <Grid item xs={12} sm={6} lg={6} key={index}>
                  <ArtisansCard
                    artisan={artisan}
                    onClick={() => handleCardClick(artisan)}
                  />
                </Grid>
              ))
            ) : (
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ mt: 2, textAlign: "center", width: "100%" }}>
                No artisans found.
              </Typography>
            )}
          </Grid>
        )}
      </Box>

      {selectedArtisan && (
        <ArtisanDetails
          artisan={selectedArtisan}
          openDetails={Boolean(selectedArtisan)}
          onClose={handleCloseDetails}
        />
      )}
    </Container>
  );
};

export default RequestTab;
