import React, { useState, useEffect } from "react";
import { Stack, TextField } from "@mui/material";

const PriceRangeInput = ({ onChange }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Update parent form whenever price changes
  useEffect(() => {
    console.log("Price Updated:", { minPrice, maxPrice });
    onChange({ minPrice: Number(minPrice), maxPrice: Number(maxPrice) });
  }, [minPrice, maxPrice, onChange]);

  return (
    <Stack direction="row" spacing={2}>
      <TextField
        fullWidth
        id="minPrice"
        name="minPrice"
        label="Min Price (NGN)"
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        required
      />
      <TextField
        fullWidth
        id="maxPrice"
        name="maxPrice"
        label="Max Price (NGN)"
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        required
      />
    </Stack>
  );
};

export default PriceRangeInput;
