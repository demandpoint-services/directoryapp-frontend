import React from "react";
import { TextField } from "@mui/material";

const TextInput = ({ label, name, type = "text", required }) => {
  return (
    <TextField
      fullWidth
      label={label}
      name={name}
      type={type}
      required={required}
      variant="outlined"
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
          "&.Mui-focused fieldset": {
            boxShadow: 1,
          },
        },
        "& .MuiInputLabel-root": { fontSize: "1rem" },
        "& .MuiOutlinedInput-input": { padding: "14px" },
      }}
    />
  );
};

export default TextInput;
