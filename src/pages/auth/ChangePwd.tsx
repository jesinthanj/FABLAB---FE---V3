import React from "react";
import Layout from "../../components/Layout";
import { Button, TextField } from "@mui/material";
import { Typography, Box } from "@mui/material";
import Menu from "../../components/Menu";

export default function ChangePwd() {
  return (
    <Layout>
      <Box
        sx={{
          my: 20,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="text-center">
          <Box
            component="h1"
            sx={{
              letterSpacing: 3,
              m: 1,
              justifyContent: "center",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            CHANGE <br /> PASSWORD
          </Box>
        </div>

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
            borderRadius: "8px",
          }}
        >
          Submit
        </Button>
      </Box>
    </Layout>
  );
}
