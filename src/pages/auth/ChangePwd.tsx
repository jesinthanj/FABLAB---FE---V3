import React from "react";
import Layout from "../../components/Layout";
import { Button, TextField } from "@mui/material";
import { Typography, Box } from "@mui/material";
import Menu from "../../components/Menu";

export default function ChangePwd() {
  return (
    <Layout>
      <Menu/>
      <div className="vh-100 d-flex align-items-center justify-content-center">
      <Box
        sx={{
          my: 5,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
      <Box component="h1" sx={{ letterSpacing: 3, m: 1 , justifyContent:"center"}}>
        CHANGE
        {/* PASSWORD */}
      </Box>
      <Box component="h1" sx={{ letterSpacing: 3, m: 1 }}>
        PASSWORD
      </Box>
      <Box component="form" noValidate sx={{ mt: 1, width: "25%" }} />
      <TextField
        margin="normal"
        fullWidth
        id="password"
        label="New Password"
        name="password"
        autoComplete="password"
        autoFocus
      />
      <TextField
        margin="normal"
        fullWidth
        name="cpassword"
        label="Confirm Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button
        type="button"
        variant="contained"
        size="medium"
        sx={{
          mt: 5,
          mb: 2,
          backgroundColor: "#FF8E23",
          alignItems: "center",
          justifyContent: "center",
          // width: "50%",
          borderRadius: "8px"
        }}
      >
        Submit
      </Button>
      </Box>
      </div>
    </Layout>
  );
}
