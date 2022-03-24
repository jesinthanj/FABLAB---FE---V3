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
            component="h3"
            sx={{
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

        <div className="container my-2">
          {" "}
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
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#FFA500",
                },
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
        </div>
        <div className="text-center my-4">
          <Button
            variant="contained"
            href="/changepwd"
            sx={{
              borderRadius: 5,
              backgroundColor: "#FF8E23",
              maxHeight: "50px",
              minHeight: "30px",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#FFA500",
              },
            }}
          >
            Next
          </Button>
        </div>
      </Box>
    </Layout>
  );
}
