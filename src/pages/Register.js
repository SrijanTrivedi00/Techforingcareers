import React, { useState, useContext } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/techforing_back.png";

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
    console.log("submitted");

    let existingUsers = JSON.parse(localStorage.getItem("register")) || [];

    if (!Array.isArray(existingUsers)) {
      existingUsers = [];
    }

    existingUsers.push(userData);
    localStorage.setItem("register", JSON.stringify(existingUsers));

    if (signup(userData.name, userData.email, userData.password)) {
      console.log("Signed up successfully");
      navigate("/login");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            width: "100%",
            padding: 3,
            boxShadow: 6,
            borderRadius: 3,
            background: "rgba(20, 32, 82, 0.9)", 
            color: "white",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Sign Up
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                name="name"
                label="Full Name"
                fullWidth
                margin="normal"
                onChange={handleChange}
                InputLabelProps={{
                  style: { color: "#ddd" },
                }}
                sx={{
                  "& .MuiInputBase-input": { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#ddd" },
                    "&:hover fieldset": { borderColor: "#F1C40F" },
                    "&.Mui-focused fieldset": { borderColor: "#F1C40F" },
                  },
                }}
              />

              <TextField
                name="email"
                label="Email"
                fullWidth
                margin="normal"
                onChange={handleChange}
                InputLabelProps={{
                  style: { color: "#ddd" },
                }}
                sx={{
                  "& .MuiInputBase-input": { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#ddd" },
                    "&:hover fieldset": { borderColor: "#F1C40F" },
                    "&.Mui-focused fieldset": { borderColor: "#F1C40F" },
                  },
                }}
              />

              <TextField
                name="password"
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                onChange={handleChange}
                InputLabelProps={{
                  style: { color: "#ddd" },
                }}
                sx={{
                  "& .MuiInputBase-input": { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#ddd" },
                    "&:hover fieldset": { borderColor: "#F1C40F" },
                    "&.Mui-focused fieldset": { borderColor: "#F1C40F" },
                  },
                }}
              />

              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#F1C40F",
                    color: "#142052",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#D4AC0D",
                    },
                  }}
                >
                  Sign Up
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Signup;
