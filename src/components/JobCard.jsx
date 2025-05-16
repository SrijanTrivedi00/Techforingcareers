import React, { useContext } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import JobContext from "../context/JobContext";

const JobCard = ({ job, onEdit }) => {
  const { deleteJob } = useContext(JobContext);

  return (
    <Card
      sx={{
        minWidth: 280,
        maxWidth: 300,
        margin: 2,
        padding: 2,
        borderRadius: 3,
        boxShadow: 4,
        background: "linear-gradient(to right, #142052, #2C3E50)",
        color: "white",
        transition: "0.3s",
        "&:hover": {
          boxShadow: 6,
          transform: "scale(1.02)",
          background: "linear-gradient(to right, #1B3B6F, #34495E)",
        },
      }}
    >
      <CardContent>
        {/* Job Title */}
        <Typography
          variant="h6"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#F1C40F" }}
        >
          {job.title}
        </Typography>

        <Typography variant="body2" color="white" gutterBottom>
          {job.description.length > 50
            ? `${job.description.substring(0, 50)}...`
            : job.description}
        </Typography>

     
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#3498DB", 
              "&:hover": { backgroundColor: "#2980B9" },
            }}
            startIcon={<EditIcon />}
            onClick={() => onEdit(job)}
          >
            Edit
          </Button>

      
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#E74C3C",
              "&:hover": { backgroundColor: "#C0392B" },
            }}
            startIcon={<DeleteIcon />}
            onClick={() => deleteJob(job.id)}
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard;
