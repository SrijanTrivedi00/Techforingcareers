import React, { useState, useContext, useEffect } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import JobContext from "../context/JobContext";
import { useNavigate, useParams } from "react-router-dom";
import backgroundImage from "../assets/techforing_back.png";

const JobForm = ({ editMode = false }) => {
  const { addJob, updateJob, getJobById } = useContext(JobContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [job, setJob] = useState({
    title: "",
    description: "",
    id: Math.random() * 10000,
  });

  useEffect(() => {
    if (editMode && id) {
      const existingJob = getJobById(id);
      if (existingJob) {
        setJob(existingJob);
      }
    }
  }, [editMode, id, getJobById]);

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (job.title && job.description) {
      if (editMode) {
        updateJob(job);
      } else {
        addJob(job);
        const existingJobs = JSON.parse(localStorage.getItem("jobs")) || [];
        existingJobs.push(job);
        localStorage.setItem("jobs", JSON.stringify(existingJobs));
      }
      navigate("/job");
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
        padding: 2,
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            width: "100%",
            p: 4,
            borderRadius: 4,
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 12px 40px 0 rgba(31, 38, 135, 0.5)",
            },
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{
                fontWeight: "bold",
                background: "linear-gradient(90deg, #F1C40F, #FF8E53)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 3,
                textShadow: "0 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              {editMode ? "Edit Job Listing" : "Create New Job"}
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                name="title"
                label="Job Title"
                fullWidth
                margin="normal"
                onChange={handleChange}
                value={job.title}
                InputLabelProps={{
                  style: { color: "rgba(255,255,255,0.8)" },
                }}
                sx={{
                  "& .MuiInputBase-input": {
                    color: "white",
                    fontSize: "1.1rem",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.3)",
                      borderRadius: 2,
                    },
                    "&:hover fieldset": {
                      borderColor: "#F1C40F",
                      boxShadow: "0 0 0 2px rgba(241, 196, 15, 0.2)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#F1C40F",
                      boxShadow: "0 0 0 3px rgba(241, 196, 15, 0.3)",
                    },
                  },
                  mb: 3,
                }}
              />

              <TextField
                name="description"
                label="Job Description"
                fullWidth
                multiline
                rows={6}
                margin="normal"
                onChange={handleChange}
                value={job.description}
                InputLabelProps={{
                  style: { color: "rgba(255,255,255,0.8)" },
                }}
                sx={{
                  "& .MuiInputBase-input": {
                    color: "white",
                    fontSize: "1rem",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.3)",
                      borderRadius: 2,
                    },
                    "&:hover fieldset": {
                      borderColor: "#F1C40F",
                      boxShadow: "0 0 0 2px rgba(241, 196, 15, 0.2)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#F1C40F",
                      boxShadow: "0 0 0 3px rgba(241, 196, 15, 0.3)",
                    },
                  },
                  mb: 4,
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  mt: 2,
                }}
              >
                <Button
                  variant="outlined"
                  onClick={() => navigate("/job")}
                  sx={{
                    color: "#F1C40F",
                    borderColor: "rgba(241, 196, 15, 0.5)",
                    "&:hover": {
                      borderColor: "#F1C40F",
                      backgroundColor: "rgba(241, 196, 15, 0.1)",
                    },
                    px: 4,
                    py: 1,
                    borderRadius: 50,
                    fontWeight: "bold",
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(45deg, #F1C40F 0%, #FF8E53 100%)",
                    color: "#142052",
                    fontWeight: "bold",
                    px: 4,
                    py: 1,
                    borderRadius: 50,
                    boxShadow: "0 4px 15px rgba(241, 196, 15, 0.4)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 20px rgba(241, 196, 15, 0.6)",
                    },
                  }}
                >
                  {editMode ? "Update Job" : "Create Job"}
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default JobForm;