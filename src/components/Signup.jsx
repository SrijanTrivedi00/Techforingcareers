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
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  });

  const validateField = (name, value) => {
    let error = "";
    
    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        } else if (value.length < 3) {
          error = "Name must be at least 3 characters";
        }
        break;
      case "email":
        if (!value) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;
      case "password":
        if (!value) {
          error = "Password is required";
        } else if (value.length < 8) {
          error = "Password must be at least 8 characters";
        } else if (!/(?=.*[A-Z])/.test(value)) {
          error = "Password must contain at least one uppercase letter";
        } else if (!/(?=.*[0-9])/.test(value)) {
          error = "Password must contain at least one number";
        } else if (!/(?=.*[!@#$%^&*])/.test(value)) {
          error = "Password must contain at least one special character";
        }
        break;
      default:
        break;
    }
    
    return error;
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    
    const error = validateField(name, userData[name]);
    setErrors({ ...errors, [name]: error });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    
    // Validate only if the field has been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;
    
    Object.keys(userData).forEach((key) => {
      const error = validateField(key, userData[key]);
      newErrors[key] = error;
      if (error) isValid = false;
    });
    
    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      password: true,
    });
    
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Check if email already exists
    const existingUsers = JSON.parse(localStorage.getItem("register")) || [];
    if (existingUsers.some(user => user.email === userData.email)) {
      setErrors({
        ...errors,
        email: "This email is already registered"
      });
      return;
    }
    
    // Add new user
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
                  value={userData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
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
                  value={userData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
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
                  value={userData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
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
                  disabled={Object.values(errors).some(error => error) || 
                            Object.values(userData).some(value => !value)}
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
                    "&:disabled": {
                      background: "rgba(255, 255, 255, 0.12)",
                      color: "rgba(255, 255, 255, 0.3)",
                    }
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