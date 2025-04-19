// components/SpecialtySelect.js

import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Stack,
} from "@mui/material";

const specialties = [
  "Electrician",
  "Plumber",
  "Carpenter",
  "Tiler",
  "Painter",
  "POP Ceiling Installer",
  "Aluminum Fabricator",
  "Bricklayer / Mason",
  "Welder",
  "Interior Designer",
  "Furniture Maker",
  "HVAC Technician (AC & Fridge)",
  "Solar Panel Installer",
  "Inverter Installer",
  "CCTV Installer",
  "Generator Repair Technician",
  "Appliance Repair Technician",
  "Mobile Phone Technician",
  "Computer / Laptop Technician",
  "Auto Mechanic",
  "Iron Bender",
  "Plasterer",
  "Tailor / Fashion Designer",
  "Shoe Maker / Cobbler",
  "Hair Stylist / Barber",
  "Make-up Artist",
  "Nail Technician",
  "Bead Maker / Jewelry Designer",
  "Caterer",
  "Photographer",
  "Videographer",
  "DJ",
  "Event Decorator",
  "Cake Baker",
  "House Cleaner",
  "Janitor",
  "Laundry Service Provider",
  "Nanny / Babysitter",
  "Security Guard",
  "Driver",
  "Dispatch Rider",
  "Signage Expert",
  "Printing Technician",
  "Scaffolder",
  "Heavy Equipment Operator",
  "Others",
];

const SpecialtySelect = () => {
  const [specialty, setSpecialty] = useState("");
  const [customSpecialty, setCustomSpecialty] = useState("");

  const handleSpecialtyChange = (e) => {
    setSpecialty(e.target.value);
    if (e.target.value !== "Others") {
      setCustomSpecialty("");
    }
  };

  return (
    <Stack spacing={2}>
      <FormControl fullWidth>
        <InputLabel>Trade / Specialty</InputLabel>
        <Select
          name="specialty"
          id="specialty"
          value={specialty}
          onChange={handleSpecialtyChange}
          required>
          {specialties.map((trade) => (
            <MenuItem key={trade} value={trade}>
              {trade}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {specialty === "Others" && (
        <TextField
          name="customSpecialty"
          label="Enter Your Specialty"
          value={customSpecialty}
          onChange={(e) => setCustomSpecialty(e.target.value)}
          required
          fullWidth
        />
      )}
    </Stack>
  );
};

export default SpecialtySelect;
