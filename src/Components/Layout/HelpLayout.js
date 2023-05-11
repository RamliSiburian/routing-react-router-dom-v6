import { Box, Typography } from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <Box>
      <Typography>Help pages</Typography>
      <hr />
      <Box sx={{ display: "flex", gap: 2 }}>
        <NavLink to="/help">Faq</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default HelpLayout;
