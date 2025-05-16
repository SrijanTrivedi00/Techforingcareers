import React, { useContext } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import JobContext from "../context/JobContext";

const JobCard = ({ job, onEdit }) => {
  const { deleteJob } = useContext(JobContext);

  // Different sticky note colors
  const colors = ['#FFEE93', '#FFD1DC', '#B5EAD7', '#C7CEEA'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <Card
      sx={{
        minWidth: 250,
        maxWidth: 280,
        margin: 2,
        padding: 2,
        borderRadius: '2px',
        background: randomColor,
        boxShadow: `
          0 2px 3px rgba(0,0,0,0.12),
          0 3px 6px rgba(0,0,0,0.16),
          inset 0 -6px 6px -6px rgba(0,0,0,0.2),
          inset 0 -12px 12px -12px rgba(0,0,0,0.1)
        `,
        transform: `rotate(${Math.random() * 6 - 3}deg)`,
        transition: 'all 0.2s ease',
        position: 'relative',
        '&:hover': {
          transform: `rotate(${Math.random() * 2 - 1}deg) translateY(-4px)`,
          boxShadow: `
            0 4px 6px rgba(0,0,0,0.16),
            0 6px 12px rgba(0,0,0,0.20),
            inset 0 -6px 6px -6px rgba(0,0,0,0.2),
            inset 0 -12px 12px -12px rgba(0,0,0,0.1)
          `,
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          borderWidth: '0 16px 16px 0',
          borderStyle: 'solid',
          borderColor: `#f5f5f5 ${randomColor}`,
          boxShadow: '-1px 1px 2px rgba(0,0,0,0.1)',
        },
      }}
    >
      {/* Paper texture overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          pointerEvents: 'none',
          opacity: 0.6,
        }}
      />

      <CardContent sx={{ p: 1, position: 'relative', zIndex: 1 }}>
        {/* Job Title */}
        <Typography
          variant="h6"
          gutterBottom
          sx={{ 
            color: '#333',
            fontFamily: '"Reenie Beanie", cursive, "Comic Sans MS", sans-serif',
            fontSize: '1.8rem',
            lineHeight: 1.2,
            fontWeight: 'bold',
            mb: 2,
            borderBottom: '1px dashed rgba(0,0,0,0.2)',
            pb: 1,
          }}
        >
          {job.title}
        </Typography>

        {/* Job Description */}
        <Typography
          variant="body2"
          sx={{
            color: '#555',
            fontFamily: '"Reenie Beanie", cursive, "Comic Sans MS", sans-serif',
            fontSize: '1.3rem',
            lineHeight: 1.4,
            mb: 2,
          }}
        >
          {job.description.length > 60
            ? `${job.description.substring(0, 60)}...`
            : job.description}
        </Typography>

        {/* Action Buttons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 1,
            mt: 2,
          }}
        >
          {/* Edit Button */}
          <Button
            size="small"
            startIcon={<EditIcon />}
            onClick={() => onEdit(job)}
            sx={{
              minWidth: 0,
              p: '4px 8px',
              backgroundColor: 'rgba(255,255,255,0.7)',
              color: '#333',
              borderRadius: '12px',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.9)',
              },
            }}
          />

          {/* Delete Button */}
          <Button
            size="small"
            startIcon={<DeleteIcon />}
            onClick={() => deleteJob(job.id)}
            sx={{
              minWidth: 0,
              p: '4px 8px',
              backgroundColor: 'rgba(255,255,255,0.7)',
              color: '#333',
              borderRadius: '12px',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.9)',
              },
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard;