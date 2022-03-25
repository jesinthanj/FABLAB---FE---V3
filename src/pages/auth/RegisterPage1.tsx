import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerOne } from "../../slices/RegisterSlice";

import Layout from "../../components/Layout";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Snackbar, Alert } from "@mui/material";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function RegisterPage1() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const userData = { email, password };
  const [message, setMessage] = useState<String>("");

  function handleNext() {
    if (email === "" || password === "" || confirmPassword === "") {
      setMessage("Please fill out all fields");
      setError(true);
      setOpen(true);
    } else {
      if (password.length < 8) {
        setError(true);
        setOpen(true);
        setMessage("Password must be of 8 or more characters");
      } else if (password !== confirmPassword) {
        setError(true);
        setOpen(true);
        setMessage("Password did not match");
      } else {
        dispatch(registerOne(userData));
        setError(false);
        setOpen(true);
        navigate("/registerInfo");
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
            <div className="d-flex " onClick={() => navigate(-1)}>
              <AiOutlineArrowLeft style={{ color: "black" }} size="20" />
            </div>
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
                className="my-3 d-flex justify-content-center"
                label="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                color="warning"
                className="my-3 d-flex justify-content-center"
                label="password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                color="warning"
                className="my-3 d-flex justify-content-center"
                label="confirm password"
                variant="outlined"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-center pt-3 py-4">
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
