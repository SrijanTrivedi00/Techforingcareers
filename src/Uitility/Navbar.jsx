import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import logo from "../assets/techforing_logo.jpeg";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mainNavLinks = [
    { text: "Home", path: "/" },
    { text: "About Us", path: "/about" },
    { text: "Contact Us", path: "/contact" },
    { text: "Products", path: "/products" },
    { text: "Services", path: "/services" },
  ];

  const authNavLinks = user
    ? [
        { text: "View Jobs", path: "/job" },
        { text: "Create Jobs", path: "/job-create" },
      ]
    : [];

  return (
    <>
      <AppBar
         position="relative"
  sx={{
    background: "linear-gradient(to bottom, rgba(4, 15, 17, 0.9), rgba(8, 45, 72, 0.8))",
    backdropFilter: "blur(8px)",
    boxShadow: "none",
    paddingY: 1,
  }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {/* Logo and Brand */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="Techforing Logo"
              style={{ height: 45, marginRight: 12, borderRadius: "8px" }}
            />
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                fontWeight: "bold",
                color: "white",
                textDecoration: "none",
                "&:hover": { color: "#00b0ff" },
              }}
            >
              TechForing
            </Typography>
          </Box>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            {[...mainNavLinks, ...authNavLinks].map((link) => (
              <Button
                key={link.text}
                component={Link}
                to={link.path}
                sx={{
                  color: "white",
                  fontWeight: 500,
                  textTransform: "none",
                  mx: 1,
                  "&:hover": { color: "#00b0ff" },
                }}
              >
                {link.text}
              </Button>
            ))}

            {user && (
              <Button
                onClick={logout}
                sx={{
                  ml: 2,
                  backgroundColor: "#ff4081",
                  color: "white",
                  fontWeight: "bold",
                  paddingX: 2,
                  borderRadius: "6px",
                  "&:hover": { backgroundColor: "#e91e63" },
                }}
              >
                Logout
              </Button>
            )}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box sx={{ width: 250, backgroundColor: "#073763", height: "100%" }}>
          <List>
            {[...mainNavLinks, ...authNavLinks].map((link) => (
              <ListItem key={link.text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={link.path}
                  onClick={handleDrawerToggle}
                >
                  <ListItemText
                    primary={link.text}
                    sx={{ color: "white", paddingLeft: 1 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}

            {user && (
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    logout();
                    handleDrawerToggle();
                  }}
                >
                  <ListItemText
                    primary="Logout"
                    sx={{ color: "#ff4081", fontWeight: "bold", paddingLeft: 1 }}
                  />
                </ListItemButton>
              </ListItem>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
