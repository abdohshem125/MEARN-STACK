import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Stack,
  Grid,
  Paper,
  Chip,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BrushIcon from "@mui/icons-material/Brush";
export default function Hero() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 10, mp: 12 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid xs={12} md={7}>
            <Chip
              label="• Available for work"
              sx={{
                bgcolor: "transparent",
                color: "green",
                fontWeight: "700",
                mt: 1,
              }}
            />
            <Typography
              variant="h3"
              sx={{
                fontWeight: "700",
                mb: 2,
                lineHeight: 1.2,
                fontSize: { xs: "2rem", md: "3.5rem" },
              }}
            >
              Turn Clicks Into Clients <br />
              With High-Impact Design
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, color: "gray.700", maxWidth: 500, fontWeight: 600 }}
            >
              I’m dedicated to crafting websites that bring your ideas to life,
              combining design and development to deliver fast, impactful
              results.
            </Typography>
            <Stack direction="row">
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: "black",
                  color: "white",
                  px: 3,
                  py: 1.2,
                  borderRadius: "8px",
                  textTransform: "none",
                  "&:hover": { bgcolor: "#333" },
                }}
              >
                View my services
              </Button>
              <Button
                variant="text"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                  color: "black",
                }}
              >
                See my process
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack spacing={2} sx={{mb : 2}}>
              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  borderColor: "#e0e0e0",
                }}
              >
                <TwitterIcon />
                <Box>
                  <Typography fontWeight={600}>Twitter</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Sharing insights throughout my design journey
                  </Typography>
                </Box>
              </Paper>

              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  borderColor: "#e0e0e0",
                }}
              >
                <YouTubeIcon />
                <Box>
                  <Typography fontWeight={600}>YouTube</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tips on user-centric design
                  </Typography>
                </Box>
              </Paper>

              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  borderColor: "#e0e0e0",
                }}
              >
                <LinkedInIcon />
                <Box>
                  <Typography fontWeight={600}>LinkedIn</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Connecting with like-minded people
                  </Typography>
                </Box>
              </Paper>

              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  borderColor: "#e0e0e0",
                }}
              >
                <BrushIcon />
                <Box>
                  <Typography fontWeight={600}>Dribbble</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Showing my UI designs
                  </Typography>
                </Box>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
