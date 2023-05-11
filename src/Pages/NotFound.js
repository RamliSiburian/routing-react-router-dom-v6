import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Typography
        sx={{
          cursor: "pointer",
          color: "blue",
          fontSize: "22px",
          textDecoration: "underline",
        }}
        onClick={() => navigate("/")}
      >
        Back to home
      </Typography>
    </Box>
  );
};

export default NotFound;
