import React, { useState, useEffect } from "react";
import { Button, Stack, Avatar } from "@mui/material";

const ProfilePictureUpload = ({ setProfilePic, profilePic }) => {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (profilePic) {
      const objectUrl = URL.createObjectURL(profilePic);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [profilePic]);

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
      <Button variant="outlined" component="label">
        {profilePic ? "Change Picture" : "Upload Profile Picture"}
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={handleFileChange}
        />
      </Button>
    </Stack>
  );
};

export default ProfilePictureUpload;
