import React, { useContext } from "react";
import { Grid, Typography, Container, Box } from "@mui/material";
import JobCard from "../components/JobCard";
import JobContext from "../context/JobContext";
import backgroundImage from "../assets/techforing_back.png";

const JobList = () => {
  const { storedJobs } = useContext(JobContext);

  const handleEditJob = (job) => {
    window.location.href = `/job-edit/${job.id}`;
  };

  if (!Array.isArray(storedJobs)) {
    console.error("Jobs data is not an array");
    return null;
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 0",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            color: "white",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          }}
        >
          Available Job Listings
        </Typography>

        <Grid container spacing={3} sx={{ paddingTop: 2 }}>
          {storedJobs.length === 0 ? (
            <Grid item xs={12}>
              <Typography
                variant="h6"
                align="center"
                sx={{
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  padding: 2,
                  borderRadius: 2,
                }}
              >
                No jobs available. Add some jobs!
              </Typography>
            </Grid>
          ) : (
            storedJobs.map((job) => (
              <Grid item xs={12} sm={6} md={4} key={job.id}>
                <JobCard job={job} onEdit={handleEditJob} />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default JobList;
