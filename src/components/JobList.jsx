import React, { useContext } from "react";
import { Grid, Typography, Container, Box, Button } from "@mui/material";
import JobCard from "../Uitility/JobCard";
import JobContext from "../context/JobContext";
import backgroundImage from "../assets/techforing_back.png";
import { useNavigate } from "react-router-dom";

const JobList = () => {
  const { storedJobs } = useContext(JobContext);
  const navigate = useNavigate();

  const handleEditJob = (job) => {
    window.location.href = `/job-edit/${job.id}`;
  };

  if (!Array.isArray(storedJobs)) {
    console.error("Jobs data is not an array");
    return null;
  }

  const addJobs = () => {
    navigate("/job-create");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: "20px 0", md: "40px 0" },
      }}
    >
      <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            color: "white",
            fontWeight: "bold",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
            mb: 4,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          }}
        >
          Available Job Listings
        </Typography>

        {storedJobs.length === 0 ? (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              padding: 4,
              borderRadius: 4,
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              maxWidth: "600px",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "white",
                mb: 3,
                fontSize: { xs: "1.1rem", sm: "1.3rem" },
              }}
            >
              No jobs available yet!
            </Typography>
            <Button
              onClick={addJobs}
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                color: "white",
                padding: "12px 24px",
                borderRadius: "50px",
                fontWeight: "bold",
                fontSize: "1rem",
                textTransform: "none",
                boxShadow: "0 4px 15px rgba(254, 107, 139, 0.4)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(254, 107, 139, 0.6)",
                  background: "linear-gradient(45deg, #FE6B8B 20%, #FF8E53 80%)",
                },
              }}
            >
              Create Your First Job Listing
            </Button>
          </Box>
        ) : (
          <Grid container spacing={3} sx={{ width: "100%" }}>
            {storedJobs.map((job) => (
              <Grid item xs={12} sm={6} md={4} key={job.id}>
                <JobCard job={job} onEdit={handleEditJob} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default JobList;