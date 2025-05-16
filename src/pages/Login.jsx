import React, { useState, useContext } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Fade,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/techforing_back.png";
import { Visibility, VisibilityOff, Email, Lock } from "@mui/icons-material";
import { motion } from "framer-motion";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (await login(credentials.email, credentials.password)) {
        navigate("/");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const movetosignup=()=>{
    navigate("/signup")
  }

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
        padding: 2,
      }}
    >
      <Fade in={true} timeout={500}>
        <Container maxWidth="sm">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card
              sx={{
                width: "100%",
                padding: { xs: 2, sm: 4 },
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                borderRadius: 4,
                background: "rgba(20, 32, 82, 0.85)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "white",
              }}
            >
              <CardContent>
                <Box textAlign="center" mb={3}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      background: "linear-gradient(45deg, #F1C40F, #FFA500)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      mb: 1,
                    }}
                  >
                    Welcome Back
                  </Typography>
                  <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                    Sign in to access your account
                  </Typography>
                </Box>

                <form onSubmit={handleSubmit}>
                  <TextField
                    name="email"
                    label="Email"
                    fullWidth
                    margin="normal"
                    variant="outlined"
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
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock sx={{ color: "rgba(255, 255, 255, 0.7)" }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                            sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
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
                    }}
                  />

                  <Box textAlign="right" mt={1} mb={3}>
                    <Button
                      size="small"
                      sx={{
                        color: "rgba(241, 196, 15, 0.8)",
                        textTransform: "none",
                        "&:hover": {
                          color: "#F1C40F",
                          background: "transparent",
                        },
                      }}
                    >
                      Forgot password?
                    </Button>
                  </Box>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      disabled={isSubmitting}
                      sx={{
                        height: 48,
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
                        "&.Mui-disabled": {
                          background: "rgba(255, 255, 255, 0.12)",
                          color: "rgba(255, 255, 255, 0.5)",
                        },
                      }}
                    >
                      {isSubmitting ? "Signing In..." : "Sign In"}
                    </Button>
                  </motion.div>

                  <Box mt={3} mb={2}>
                    <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }}>
                      <Typography variant="body2" color="rgba(255, 255, 255, 0.5)">
                        OR
                      </Typography>
                    </Divider>
                  </Box>

                  <Box textAlign="center" mt={2}>
                    <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                      Don't have an account?{" "}
                      <Button
                        size="small"
                        onClick={movetosignup}
                        sx={{
                          color: "#F1C40F",
                          textTransform: "none",
                          fontWeight: "bold",
                          "&:hover": {
                            background: "transparent",
                          },
                        }}
                      >
                        Sign up
                      </Button>
                    </Typography>
                  </Box>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </Fade>
    </Box>
  );
};

export default Login;