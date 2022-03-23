import React from "react";
import Layout from "../../components/Layout";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ConfirmationPage() {
  let navigate = useNavigate();
  return (
    <Layout>
      <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
        <p>The Slot is added</p>
        <h2 className="my-2">Succesfully!</h2>
        <div className="text-center">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFA73F",
              width: 100,
              mt: 2,
              borderRadius: 10,
              ":hover": { backgroundColor: "#ff623f" },
            }}
            onClick={() => {
              navigate("/mainPage");
            }}
          >
            Home
          </Button>
        </div>
      </div>
    </Layout>
  );
}
