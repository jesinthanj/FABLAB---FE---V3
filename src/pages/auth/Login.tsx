import { useState } from "react";
import Layout from "../../components/Layout";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
import Button from "@mui/material/Button";
import { axiosPost } from "../requests";

export default function Login() {
  let navigate = useNavigate();

  const licetLogo = require("../../assets/licet_logo.png");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [open, setOpen] = useState(false);
  const userData = { email, password };

  async function handleLogin() {
    if (email === "" || password === "") {
      setError(true);
      setOpen(true);
      setErrorMessage("Please Fill All The Fields");
    } else {
      setError(false);
      const res = await axiosPost("/auth/login", userData);
      if (res.data.status === false) {
        setError(true);
        setOpen(true);
        setErrorMessage(res.data.message);
      } else {
        localStorage.setItem("token", res.data.token);
        if (res.data.isAdmin) {
          navigate("/mainpage");
        } else {
          navigate("/homepage");
        }
      }
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
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          paddingRight: "8px",
          paddingTop: "8px",
        }}
      >
        <img src={licetLogo} alt="" width="100" height="100" />
      </div>
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <div className="card shadow" style={{ borderRadius: "30px" }}>
          <div className="card-body p-md-5 p-4">
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
                marginRight: "-10px",
              }}
            >
              FABLAB
            </h1>
            <div>
              <TextField
                className="my-3 d-flex justify-content-center"
                label="Username"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                className="my-3 d-flex justify-content-center"
                label="Password"
                variant="outlined"
                type="password"
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
            <div className="d-flex justify-content-center pt-3">
              {" "}
              <Button
                className="w-100"
                variant="contained"
                sx={{
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
        <Alert onClose={handleClose} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    </Layout>
  );
}
