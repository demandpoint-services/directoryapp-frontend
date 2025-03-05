import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import MuiChip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";

const items = [
  {
    icon: <PersonAddRoundedIcon />,
    title: "Create Your Profile",
    description:
      "Sign up and set up your artisan profile with your skills, experience, and location. Upload a portfolio to showcase your work and for more credibility.",
    imageLight: "/img13.jpg",
    imageDark: "/img13.jpg",
  },
  {
    icon: <WorkRoundedIcon />,
    title: "Get Matched & Booked",
    description:
      "Clients can find you through smart search and recommendations. Receive real-time booking notifications and use in-app messaging or calls to finalize project details.",
    imageLight: "/img12.jpg",
    imageDark: "/img12.jpg",
  },
  {
    icon: <MonetizationOnRoundedIcon />,
    title: "Deliver & Get Paid",
    description:
      "Complete jobs, receive secure payments, and build your reputation through client reviews. Boost visibility with premium features and grow your business effortlessly.",
    imageLight: "/img14.jpg",
    imageDark: "/img14.jpg",
  },
];

const Chip = styled(MuiChip)(({ theme, selected }) => ({
  background: selected
    ? "linear-gradient(to bottom right, hsl(255, 100%, 50%), hsl(255, 100%, 35%))"
    : theme.palette.background.paper,
  color: selected ? "#fff" : theme.palette.text.primary,
  borderColor: selected ? theme.palette.primary.light : theme.palette.divider,
}));

function MobileLayout({ selectedItemIndex, handleItemClick, selectedFeature }) {
  if (!items[selectedItemIndex]) return null;

  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "none" },
        flexDirection: "column",
        gap: 2,
      }}>
      <Box sx={{ display: "flex", gap: 2, overflow: "auto" }}>
        {items.map(({ title }, index) => (
          <Chip
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
          />
        ))}
      </Box>
      <Card variant="outlined">
        <Box
          sx={{
            mb: 2,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: 280,
            backgroundImage: `url(${items[selectedItemIndex].imageLight})`,
          }}
        />
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography
            gutterBottom
            sx={{ color: "text.primary", fontWeight: "medium" }}>
            {selectedFeature.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
            {selectedFeature.description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

MobileLayout.propTypes = {
  handleItemClick: PropTypes.func.isRequired,
  selectedFeature: PropTypes.shape({
    description: PropTypes.string.isRequired,
    icon: PropTypes.element,
    imageDark: PropTypes.string.isRequired,
    imageLight: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  selectedItemIndex: PropTypes.number.isRequired,
};

export { MobileLayout };

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const handleItemClick = (index) => setSelectedItemIndex(index);
  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box sx={{ width: { sm: "100%", md: "60%" } }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{
            color: "text.primary",
            fontFamily: '"Bebas Neue", sans-serif',
          }}>
          3 Steps to Get Started as an Artisan
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", mb: { xs: 2, sm: 4 } }}>
          Getting started on Demand Point is simple and designed to help
          artisans showcase their skills, connect with clients, and grow their
          business.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          gap: 2,
        }}>
        <div>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 2,
            }}>
            {items.map(({ icon, title, description }, index) => (
              <Button
                key={index}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 2,
                  textAlign: "left",
                  color:
                    selectedItemIndex === index
                      ? "text.primary"
                      : "text.secondary",
                  backgroundColor:
                    selectedItemIndex === index
                      ? "action.selected"
                      : "transparent",
                  "&:hover": { backgroundColor: "action.hover" },
                }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: 1,
                    textAlign: "left",
                    textTransform: "none",
                    color: "text.secondary",
                  }}>
                  {icon}
                  <Typography
                    variant="h5"
                    sx={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                    {title}
                  </Typography>
                  <Typography variant="body2">{description}</Typography>
                </Box>
              </Button>
            ))}
          </Box>
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
          />
        </div>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            width: { xs: "100%", md: "70%" },
          }}>
          <Card variant="outlined" sx={{ width: "100%", height: 500 }}>
            <Box
              sx={{
                m: "auto",
                width: "100%",
                height: "100%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: `url(${items[selectedItemIndex].imageLight})`,
              }}
            />
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
