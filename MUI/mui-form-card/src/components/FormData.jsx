import { Container, Typography, Stack, TextField, Button, Paper } from "@mui/material";
import { useState } from "react";

export default function FormData({ getData }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hobby, setHobby] = useState("");

  function clearData() {
    setName("");
    setAge("");
    setHobby("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = { name, age, hobby };
    getData(data);
    clearData();
  }

  return (
    <Container sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, maxWidth: 400, mx: "auto" }}>
        <Typography variant="h5" gutterBottom textAlign="center" fontWeight="bold">
          Enter Data
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Name"
              variant="outlined"
              required
            />
            <TextField
              value={age}
              onChange={(e) => setAge(e.target.value)}
              label="Age"
              variant="outlined"
              type="number"
              required
            />
            <TextField
              value={hobby}
              onChange={(e) => setHobby(e.target.value)}
              label="Hobby"
              variant="outlined"
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ borderRadius: 2, py: 1 }}
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}
