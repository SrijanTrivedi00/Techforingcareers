import React from "react";
import { Button, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/techforing_back.png";

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
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
          zIndex: 0,
        }}
      />

      {/* Content Box */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          padding: isSmallScreen ? "24px" : "48px",
          textAlign: "center",
          color: "#fff",
          maxWidth: "600px",
          mx: "20px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Typography
          variant={isSmallScreen ? "h4" : "h2"}
          sx={{
            fontWeight: "bold",
            marginBottom: 3,
            letterSpacing: "1px",
          }}
        >
          Welcome to the Job Portal
        </Typography>

        <Typography
          variant="body1"
          sx={{ marginBottom: 4, color: "#ddd" }}
        >
          Discover amazing job opportunities tailored just for you.
        </Typography>

        <Button
          variant="contained"
          component={Link}
          to="/job"
          sx={{
            background: "linear-gradient(135deg, #ff8c00, #ff5a5f)",
            color: "white",
            padding: "14px 30px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            borderRadius: "12px",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              background: "linear-gradient(135deg, #ff5a5f, #ff8c00)",
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
