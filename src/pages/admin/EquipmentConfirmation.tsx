import React from "react";
import Layout from "../../components/Layout";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function EquipmentConfirmation() {
  let navigate = useNavigate();
  return (
    <Layout>
      <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
        <h2
          className="pb-1"
          style={{
            fontFamily: "montserrat",
            fontWeight: "normal",
          }}
        >
          The Equipment is added
        </h2>
        <h2
          className="pb-1 py-3"
          style={{
            fontFamily: "montserrat",
            fontWeight: "bold",
          }}
        >
          SUCCESSFULLY!
        </h2>
        <div className="text-center mx-2 py-5">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF8E23",
              width: 100,
              mt: 2,
              borderRadius: 10,
              "&:hover": {
                backgroundColor: "#fff",
                color: "#FF8E23",
              },
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
