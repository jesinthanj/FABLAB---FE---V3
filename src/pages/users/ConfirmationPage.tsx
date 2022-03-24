import React from "react";
import Layout from "../../components/Layout";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ConfirmationPage() {
  let navigate = useNavigate();
  return (
    <Layout>
      <div className="vh-100 m-2 d-flex align-items-center justify-content-center flex-column">
        <h2
          className="pb-1 py-5 my-3"
          style={{
            fontFamily: "montserrat",
            fontWeight: "normal",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Your request is being
        </h2>
        <h2
          className="pb-1"
          style={{
            fontFamily: "montserrat",
            fontWeight: "bold",
            letterSpacing: 5,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          PROCESSED
        </h2>
        <h2
          className="pb-1 py-3 my-3"
          style={{
            fontFamily: "montserrat",
            fontWeight: "normal",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Please check your e-mail <br />
          <span style={{ color: "black", letterSpacing: "3px" }}>
            for confirmation
          </span>
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
              navigate("/homePage");
            }}
          >
            Home
          </Button>
        </div>
      </div>
    </Layout>
  );
}
