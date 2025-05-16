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
              {editMode ? "Edit Job" : "Create a Job"}
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
                name="description"
                label="Job Description"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                onChange={handleChange}
                value={job.description}
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
                  {editMode ? "Update Job" : "Add Job"}
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
