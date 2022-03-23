import Layout from "../../components/Layout";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function RegisterPage1() {
  let navigate = useNavigate();
  return (
    <Layout>
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <div className="card shadow">
          <div className="card-body">
            <h5
              className="pb-1 d-flex justify-content-center"
              style={{
                fontFamily: "montserrat",
                fontWeight: "bold",
                letterSpacing: "10px",
              }}
            >
              LICET
            </h5>
            <h1
              className="pb-4 d-flex justify-content-center"
              style={{
                fontFamily: "montserrat",
                fontWeight: "bold",
                letterSpacing: "10px",
              }}
            >
              FABLAB
            </h1>
            <div>
              <TextField
                color="warning"
                className="my-4 d-flex justify-content-center"
                label="E-mail"
              />
              <TextField
                color="warning"
                className="my-4 d-flex justify-content-center"
                label="Password"
              />
              <TextField
                color="warning"
                className="my-4 d-flex justify-content-center"
                label="Confirm Password"
              />
            </div>
            <div className="d-flex justify-content-center pt-3 py-4">
              {" "}
              <Button
                variant="contained"
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
                onClick={() => {
                  navigate("/register2");
                }}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
