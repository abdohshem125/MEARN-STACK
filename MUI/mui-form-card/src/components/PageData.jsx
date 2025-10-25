import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import FormData from "./formData";
import CardShow from "./cardShow";

export default function PageData() {
  const [page, setPage] = useState("form");
  const [arr, setArr] = useState([]);

  function handleChange(e, val) {
    if (val !== null) setPage(val);
  }

  function getData(data) {
    setArr([...arr, data]);
  }

  return (
    <>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ mt: 5, mb: 3, fontWeight: "bold" }}
      >
        MUI Form & Card Example
      </Typography>

      <ToggleButtonGroup
        color="primary"
        value={page}
        exclusive
        onChange={handleChange}
        aria-label="Toggle Form/List"
        sx={{ display: "flex", justifyContent: "center", mb: 4 }}
      >
        <ToggleButton value="form">Form</ToggleButton>
        <ToggleButton value="card">card</ToggleButton>
      </ToggleButtonGroup>
      
      <Box sx={{ px: 2 }}>
        {page === "form" ? (
          <FormData getData={getData} />
        ) : (
          <CardShow arr={arr} />
        )}
      </Box>
    </>
  );
}
