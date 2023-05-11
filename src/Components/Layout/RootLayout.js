import { Box } from "@mui/material";
import React from "react";
import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Box sx={{ padding: 2, display: "flex", gap: 2, background: "#9D9D9E" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/help">Help</NavLink>
      </Box>
      <Box sx={{ p: 2 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default RootLayout;
