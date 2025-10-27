import { Box } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          py: 3,
          borderTop: "1px solid #ddd",
          textAlign: "center",
          fontSize: 14,
          color: "gray",
        }}
      >
        © {new Date().getFullYear()} Abdo. All rights reserved.
      </Box>
    </>
  );
}
