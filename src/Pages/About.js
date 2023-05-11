import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>
        Back
      </Typography>
      <Box>Ini halaman About Gaes</Box>
    </Box>
  );
};

export default About;
