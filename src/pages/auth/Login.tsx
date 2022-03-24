import { useState } from "react";
import Layout from "../../components/Layout";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
import Button from "@mui/material/Button";

export default function Login() {
  let navigate = useNavigate();

  const licetLogo = require("../../assets/licet_logo.png");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const userData = { email, password };

  function handleLogin() {
    console.log("Login button clicked");
    if (email === "" || password === "") {
      setError(true);
      setOpen(true);
    } else {
      setError(false);
      console.log(userData);
      setOpen(true);
      navigate("/mainpage");
    }
  }
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
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
          <img src={licetLogo} alt="" width="80" height="80" />
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
                className="my-3 d-flex justify-content-center"
                label="username"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                className="my-3 d-flex justify-content-center"
                label="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-between">
              <a
                href="/resetpwd"
                rel="noopener noreferrer"
                className="text-decoration-none text-warning"
              >
                <p style={{ fontSize: "13px" }}>Forgot password</p>
              </a>
              <a
                href="/register1"
                rel="noopener noreferrer"
                className="text-decoration-none text-warning"
              >
                <p style={{ fontSize: "13px" }}>New user?</p>
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
                onClick={handleLogin}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {error ? (
          <Alert onClose={handleClose} severity="error">
            Please Fill All The Fields
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="success">
            Slots Added Successfully
          </Alert>
        )}
      </Snackbar>
    </Layout>
  );
}
