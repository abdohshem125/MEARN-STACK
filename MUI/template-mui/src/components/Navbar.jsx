import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import * as React from "react";

export default function Navbar() {
  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{ bgcolor: "transparent", color: "black " , borderBottom : "1px solid #e0e0e0" }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 8 } }}>
          <Typography variant="h6" fontWeight="bold">
            Abdo
          </Typography>

          <Stack spacing={3} direction="row" >
            <Button sx={{color : "black" , fontWeight : "bold"}}>About</Button>
            <Button sx={{color : "black" , fontWeight : "bold"}}>Services</Button>
            <Button sx={{color : "black" , fontWeight : "bold"}}>Blogs</Button>
          </Stack>
          <Button
            variant="contained"
            sx={{
              bgcolor: "black",
              color: "white",
              borderRadius: "8px",
              fontWeight: "bold",
              "&:hover": { bgcolor: "#333" },
            }}
          >
            Explore Site
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
