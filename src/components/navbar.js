"use client";

import * as React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import ToggleColorMode from "./ToggleColorMode";

const logoStyle = {
  width: "10rem",
  height: "auto",
  cursor: "pointer",
  paddingTop: ".4rem",
};

function NavBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}>
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            }}>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "20px",
                px: 0,
              }}>
              <Link href="/">
                <Image
                  src="/demandpoint.png"
                  alt="Demand Point logo"
                  width={180}
                  height={25}
                  style={logoStyle}
                />
              </Link>
              <Box sx={{ display: { xs: "none", md: "flex" }, ml: "20px" }}>
                {[
                  "Artisans",
                  "About Us",
                  "How it Works",
                  "Contact Us",
                  "FAQ",
                ].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(/\s/g, "")}`}
                    passHref>
                    <MenuItem sx={{ py: "6px", px: "12px" }}>
                      <Typography variant="body2" color="text.primary">
                        {item}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}>
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              <Button
                color="primary"
                variant="contained"
                size="small"
                href="/artisanform">
                Register
              </Button>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
              }}>
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              <IconButton aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            top: "var(--template-frame-height, 0px)",
            backgroundColor:
              theme.palette.mode === "light"
                ? "rgba(255, 255, 255, 0.9)"
                : "rgba(0, 0, 0, 0.9)",
            color: theme.palette.text.primary,
            boxShadow:
              theme.palette.mode === "light"
                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                : `0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)`,
          },
        }}>
        <Box
          sx={{
            backgroundColor:
              theme.palette.mode === "light"
                ? "rgba(255, 255, 255, 0.9)" // Light mode background
                : "rgba(0, 0, 0, 0.9)", // Dark mode background
            height: "50vh",
            p: 2,
          }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseRoundedIcon sx={{ color: theme.palette.text.primary }} />
            </IconButton>
          </Box>
          <Box>
            {["Artisans", "About Us", "How it Works", "Contact Us", "FAQ"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s/g, "")}`}
                  passHref>
                  <MenuItem
                    onClick={toggleDrawer(false)}
                    sx={{ color: theme.palette.text.primary }}>
                    {item}
                  </MenuItem>
                </Link>
              )
            )}
          </Box>
          <Divider sx={{ my: 3, borderColor: theme.palette.divider }} />
          <MenuItem>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              href="/artisanform"
              onClick={toggleDrawer(false)}>
              Register
            </Button>
          </MenuItem>
        </Box>
      </Drawer>
    </div>
  );
}

NavBar.propTypes = {
  mode: PropTypes.string.isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default NavBar;
