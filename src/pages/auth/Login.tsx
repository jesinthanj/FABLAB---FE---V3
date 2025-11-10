import { useState } from "react";
import Layout from "../../components/Layout";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
import { axiosPost } from "../requests";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function Login() {
  let navigate = useNavigate();

  const licetLogo = require("../../assets/licet_logo.png");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [open, setOpen] = useState(false);
  const userData = { email, password };
  
  const handleOpen = () => setOpen(true);


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


const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
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
        <img src={licetLogo} alt="" width="90" height="90" />
      </div>
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <div className="card shadow" style={{ borderRadius: "30px" }}>
          <div className="card-body p-md-5 p-4">
            <h5
              className=" d-flex justify-content-start"
              style={{
                fontFamily: "montserrat",
                fontWeight: "bold",
                letterSpacing: "10px",
              }}
            >
              LICET
            </h5>
            <h1
              className="pb-4 d-flex justify-content-start"
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
                label="Username"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                color="warning"
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
                href="/register"
                rel="noopener noreferrer"
                className="text-decoration-none text-warning"
              >
                <p style={{ fontSize: "13px" }}>New user?</p>
              </a>
            </div>
            <div className="d-flex justify-content-end pt-3">
              {" "}
              <Button className="mx-2"
                variant="contained"
                sx={{
                  borderRadius: "30px",
                  backgroundColor: "#FF8E23",
                  maxHeight: "50px",
                  minHeight: "30px",
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#FFA500",
                  },
                }}
                onClick={handleOpen}>Want to get a demo?</Button>
              <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    <h4>Use these creds</h4>
                    <br />
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <h5>For Admin</h5>
                    Username : admin@licet.ac.in <br />
                    Password : Licet@123 <br />
                    <br />
                    <h5>For User</h5>
                    Username : user@licet.ac.in <br />
                    Password : Licet@123 <br />
                  </Typography>
                </Box>
              </Modal>
              <Button
                className=""
                variant="contained"
                sx={{
                  borderRadius: "30px",
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
