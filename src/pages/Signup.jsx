import React, { useState, useContext } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Link,
  Divider,
  InputAdornment,
  IconButton,
  Fade,
} from "@mui/material";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/techforing_back.png";
import { Person, Email, Lock, ArrowForward } from "@mui/icons-material";

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let existingUsers = JSON.parse(localStorage.getItem("register")) || [];
    if (!Array.isArray(existingUsers)) existingUsers = [];
    
    existingUsers.push(userData);
    localStorage.setItem("register", JSON.stringify(existingUsers));

    if (signup(userData.name, userData.email, userData.password)) {
      navigate("/login");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Fade in={true} timeout={500}>
        <Container maxWidth="sm">
          <Card
            sx={{
              width: "100%",
              p: { xs: 2, md: 4 },
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.5)",
              borderRadius: 4,
              background: "rgba(20, 32, 82, 0.85)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "white",
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{ 
                  fontWeight: "bold",
                  mb: 3,
                  background: "linear-gradient(45deg, #F1C40F, #FFA500)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Create Account
              </Typography>

              <form onSubmit={handleSubmit}>
                <TextField
                  name="name"
                  label="Full Name"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person sx={{ color: "rgba(255, 255, 255, 0.7)" }} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: { color: "rgba(255, 255, 255, 0.7)" },
                  }}
                  sx={{
                    "& .MuiInputBase-input": { color: "white" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "rgba(255, 255, 255, 0.2)" },
                      "&:hover fieldset": { borderColor: "#F1C40F" },
                      "&.Mui-focused fieldset": { 
                        borderColor: "#F1C40F",
                        boxShadow: "0 0 0 2px rgba(241, 196, 15, 0.2)"
                      },
                    },
                    mb: 2,
                  }}
                />

                <TextField
                  name="email"
                  label="Email"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email sx={{ color: "rgba(255, 255, 255, 0.7)" }} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: { color: "rgba(255, 255, 255, 0.7)" },
                  }}
                  sx={{
                    "& .MuiInputBase-input": { color: "white" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "rgba(255, 255, 255, 0.2)" },
                      "&:hover fieldset": { borderColor: "#F1C40F" },
                      "&.Mui-focused fieldset": { 
                        borderColor: "#F1C40F",
                        boxShadow: "0 0 0 2px rgba(241, 196, 15, 0.2)"
                      },
                    },
                    mb: 2,
                  }}
                />

                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock sx={{ color: "rgba(255, 255, 255, 0.7)" }} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: { color: "rgba(255, 255, 255, 0.7)" },
                  }}
                  sx={{
                    "& .MuiInputBase-input": { color: "white" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "rgba(255, 255, 255, 0.2)" },
                      "&:hover fieldset": { borderColor: "#F1C40F" },
                      "&.Mui-focused fieldset": { 
                        borderColor: "#F1C40F",
                        boxShadow: "0 0 0 2px rgba(241, 196, 15, 0.2)"
                      },
                    },
                    mb: 3,
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    py: 1.5,
                    borderRadius: 2,
                    background: "linear-gradient(45deg, #F1C40F, #FFA500)",
                    color: "#142052",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    boxShadow: "0 4px 15px rgba(241, 196, 15, 0.3)",
                    "&:hover": {
                      background: "linear-gradient(45deg, #D4AC0D, #E69500)",
                      boxShadow: "0 6px 20px rgba(241, 196, 15, 0.4)",
                    },
                  }}
                  endIcon={<ArrowForward />}
                >
                  Sign Up
                </Button>

                <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.1)" }} />

                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)", display: "inline" }}>
                    Already have an account?{" "}
                  </Typography>
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => navigate("/login")}
                    sx={{
                      color: "#F1C40F",
                      fontWeight: "bold",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Login
                  </Link>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Container>
      </Fade>
    </Box>
  );
};

export default Signup;