import * as React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import UserMenuContent from "./UserMenuContent";
import UserOptionsMenu from "./UserOptionsMenu";
import Link from "next/link";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)(() => ({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
}));

const logoStyle = {
  width: "10rem",
  height: "auto",
  margin: "auto",
};

export default function UserSideMenu({ onMenuClick, user }) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "background.paper",
        },
      }}>
      {/* Logo */}
      <Box
        sx={{ display: "flex", mt: 1, p: 2 }}
        alignItems={"center"}
        margin={"auto"}>
        <Link href="/" passHref>
          <Image
            src="/demandpoint.png"
            alt="Demand Point logo"
            width={200}
            height={30}
            style={logoStyle}
          />
        </Link>
      </Box>

      <Divider />

      {/* Menu Content */}
      <Box
        sx={{
          overflow: "auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}>
        <UserMenuContent onMenuClick={onMenuClick} />
      </Box>

      {/* User Info */}
      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: "center",
          borderTop: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper",
        }}>
        <Avatar
          alt={user?.username || "User"}
          src={user?.avatar || "/static/images/avatar/default.jpg"}
          sx={{ width: 36, height: 36 }}
        />
        <Box sx={{ mr: "auto" }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, lineHeight: "16px" }}>
            {user?.username || "Guest User"}
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {user?.email || "user@example.com"}
          </Typography>
        </Box>
        <UserOptionsMenu />
      </Stack>
    </Drawer>
  );
}
