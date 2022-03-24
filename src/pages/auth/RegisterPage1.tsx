import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Snackbar, Alert } from "@mui/material";

export default function RegisterPage1() {
  console.log("Next button clicked");
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const userData = { email, confirmPassword };
  const [message, setMessage] = useState<String>("");

  function handleNext() {
    if (email === "" || password === "" || confirmPassword === "") {
      console.log(false);
      setMessage("Please fill out all fields");
      setError(true);
      setOpen(true);
    } else {
      if (password.length < 8) {
        setError(true);
        setOpen(true);
        setMessage("Password must be of 8 or more characters");
      } else if (password !== confirmPassword) {
        console.log(false);
        setError(true);
        setOpen(true);
        setMessage("Password did not match");
      } else {
        console.log(userData);
        setError(false);
        setOpen(true);
        navigate("/register2");
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
                className="my-3 d-flex justify-content-center"
                label="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                className="my-3 d-flex justify-content-center"
                label="password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                className="my-3 d-flex justify-content-center"
                label="confirm password"
                variant="outlined"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-between pt-3 py-4">
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
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
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
                onClick={handleNext}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {error ? (
          <Alert onClose={handleClose} severity="error">
            {message}
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="success">
            Done
          </Alert>
        )}
      </Snackbar>
    </Layout>
  );
}
