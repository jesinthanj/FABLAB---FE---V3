import Layout from "../../components/Layout";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Login() {
  let navigate = useNavigate();
  return (
    <Layout>
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            paddingRight: "8px",
            paddingTop: "8px",
          }}
        >
          <img
            src={"../../assets/licet_logo.png"}
            alt=""
            width="80"
            height="80"
          />
        </div>
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
            </div>
            <div className="d-flex justify-content-between">
              <a
                href="/"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <p style={{ fontSize: "15px", color: "#FF8E23" }}>
                  Forgot password?
                </p>
              </a>
              <a
                href="/register1"
                rel="noopener noreferrer"
                className="text-decoration-none "
              >
                <p style={{ fontSize: "15px", color: "#FF8E23" }}>New user</p>
              </a>
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
                  navigate("/homepage");
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
