import React from "react";
import Layout from "../../components/Layout";
import { Button, TextField } from "@mui/material";
import { Typography, Box } from "@mui/material";
import Menu from "../../components/Menu";

export default function ResetPwd() {
  return (
    <Layout>
      <Box
        sx={{
          my: 20,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          //alignItems: "center",
        }}
      >
        <div className="text-center">
          <Box
            component="h1"
            sx={{
              letterSpacing: 3,
              m: 3,
              justifyContent: "center",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            RESET <br />
            PASSWORD
          </Box>
        </div>

        <TextField
          margin="normal"
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
        />

        <div className="text-end">
          <Button
            type="button"
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#FF8E23",
            }}
          >
            Generate OTP
          </Button>
        </div>
        <TextField
          margin="normal"
          fullWidth
          name="password"
          label="OTP"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <div className="text-center">
          <Button
            type="button"
            variant="contained"
            size="medium"
            sx={{
              my: 3,
              backgroundColor: "#FF8E23",
              borderRadius: "8px",
              width: "30%",
            }}
            href="/changepwd"
          >
            Next
          </Button>
        </div>
      </Box>
    </Layout>
  );
}
