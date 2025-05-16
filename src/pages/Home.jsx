import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/techforing_back.png";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh", // Changed from height to minHeight
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", // Added this
        backgroundAttachment: "fixed", // Optional: creates parallax effect
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        padding: "20px",
        position: "relative",
        overflow: "hidden", // Added to prevent scroll bars
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1, // Added zIndex
        }}
      />

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 2, maxWidth: "800px" }}>
        <Typography variant="h2" sx={{ fontWeight: "bold", marginBottom: 3 }}>
          Welcome to the Job Portal
        </Typography>

        <Button
          variant="contained"
          component={Link}
          to="/job"
          sx={{
            background: "linear-gradient(90deg, #ff8c00, #ff5a5f)",
            color: "white",
            padding: "12px 24px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            borderRadius: "8px",
            "&:hover": {
              background: "linear-gradient(90deg, #ff5a5f, #ff8c00)",
            },
          }}
        >
          View Jobs
        </Button>
      </Box>
    </Box>
  );
};

export default Home;