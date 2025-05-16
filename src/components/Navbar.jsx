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
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu"; 
import AuthContext from "../context/AuthContext";
import logo from "../assets/techforing_logo.jpeg"; 

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [mobileOpen, setMobileOpen] = useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = !user
    ? [
        { text: "Login", path: "/login" },
        { text: "Sign Up", path: "/signup" },
      ]
    : [
        { text: "View Jobs", path: "/job" },
        { text: "Create Jobs", path: "/job-create" },
      ];

  return (
    <>
     
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#142052",
          padding: "10px 0",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
          }}
        >
       
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="Techforing Logo"
              style={{ height: 45, marginRight: 12, borderRadius: "8px" }}
            />
            <Box>
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  lineHeight: 1,
                  textDecoration: "none",
                  "&:hover": { color: "#f8b400" },
                }}
              >
                TechForing
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#ddd", fontSize: "12px", marginTop: "2px" }}
              >
                Shaping Tomorrow’s Cybersecurity
              </Typography>
            </Box>
          </Box>

          
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navLinks.map((link) => (
              <Button
                key={link.text}
                color="inherit"
                component={Link}
                to={link.path}
                sx={{
                  fontWeight: "bold",
                  transition: "all 0.3s",
                  "&:hover": { color: "#f8b400" },
                }}
              >
                {link.text}
              </Button>
            ))}
            {user && (
              <Button
                onClick={logout}
                sx={{
                  backgroundColor: "#f50057",
                  color: "white",
                  fontWeight: "bold",
                  ml: 1,
                  padding: "6px 16px",
                  borderRadius: "8px",
                  "&:hover": { backgroundColor: "#d4004d" },
                }}
              >
                Logout
              </Button>
            )}
          </Box>

     
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

      
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={link.path}
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary={link.text} />
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
                    sx={{ color: "#f50057", fontWeight: "bold" }}
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
