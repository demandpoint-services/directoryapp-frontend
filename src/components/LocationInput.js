import React, { useState } from "react";
import {
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const statesAndCities = {
  Abia: ["Aba", "Arochukwu", "Umuahia"],
  Adamawa: ["Jimeta", "Mubi", "Numan", "Yola"],
  "Akwa Ibom": ["Ikot Abasi", "Ikot Ekpene", "Oron", "Uyo"],
  Anambra: ["Awka", "Onitsha"],
  Bauchi: ["Azare", "Bauchi", "Jama'are", "Katagum", "Misau"],
  Bayelsa: ["Brass"],
  Benue: ["Makurdi"],
  Borno: ["Biu", "Dikwa", "Maiduguri"],
  "Cross River": ["Calabar", "Ogoja"],
  Delta: ["Asaba", "Burutu", "Koko", "Sapele", "Ughelli", "Warri"],
  Ebonyi: ["Abakaliki"],
  Edo: ["Benin City"],
  Ekiti: ["Ado-Ekiti", "Effon-Alaiye", "Ikere-Ekiti"],
  Enugu: ["Enugu", "Nsukka"],
  FCT: ["Abuja"],
  Gombe: ["Deba Habe", "Gombe", "Kumo"],
  Imo: ["Owerri"],
  Jigawa: ["Birnin Kudu", "Dutse", "Gumel", "Hadejia", "Kazaure"],
  Kaduna: ["Jemaa", "Kaduna", "Zaria"],
  Kano: ["Kano"],
  Katsina: ["Daura", "Katsina"],
  Kebbi: ["Argungu", "Birnin Kebbi", "Gwandu", "Yelwa"],
  Kogi: ["Idah", "Kabba", "Lokoja", "Okene"],
  Kwara: ["Ilorin", "Jebba", "Lafiagi", "Offa", "Pategi"],
  Lagos: ["Badagry", "Epe", "Ikeja", "Ikorodu", "Lagos", "Mushin", "Shomolu"],
  Nasarawa: ["Keffi", "Lafia", "Nasarawa"],
  Niger: ["Agaie", "Baro", "Bida", "Kontagora", "Lapai", "Minna", "Suleja"],
  Ogun: ["Abeokuta", "Ijebu-Ode", "Ilaro", "Shagamu"],
  Ondo: ["Akure", "Ikare", "Oka-Akoko", "Ondo", "Owo"],
  Osun: [
    "Ede",
    "Ikire",
    "Ikirun",
    "Ila",
    "Ile-Ife",
    "Ilesha",
    "Ilobu",
    "Inisa",
    "Iwo",
    "Oshogbo",
  ],
  Oyo: ["Ibadan", "Iseyin", "Ogbomosho", "Oyo", "Saki"],
  Plateau: ["Bukuru", "Jos", "Vom", "Wase"],
  Rivers: ["Bonny", "Degema", "Okrika", "Port Harcourt"],
  Sokoto: ["Sokoto"],
  Taraba: ["Ibi", "Jalingo", "Muri"],
  Yobe: ["Damaturu", "Nguru"],
  Zamfara: ["Gusau", "Kaura Namoda"],
};

const LocationInput = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    setState(selectedState);
    setCity(""); // Reset city when state changes
  };

  return (
    <Stack direction="row" spacing={2}>
      {/* State Dropdown */}
      <FormControl fullWidth>
        <InputLabel>State</InputLabel>
        <Select
          id="state"
          name="state"
          value={state}
          onChange={handleStateChange}>
          {Object.keys(statesAndCities).map((stateName) => (
            <MenuItem key={stateName} value={stateName}>
              {stateName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* City Dropdown (Only shows when a state is selected) */}
      <FormControl fullWidth disabled={!state}>
        <InputLabel>City</InputLabel>
        <Select
          id="city"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}>
          {(statesAndCities[state] || []).map((cityName) => (
            <MenuItem key={cityName} value={cityName}>
              {cityName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default LocationInput;
