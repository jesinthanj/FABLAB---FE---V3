import { useState, forwardRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Layout from "../../components/Layout";
import { Button, TextField } from "@mui/material";
import { Box, Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { axiosPost } from "../requests";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ChangePwd() {
  let navigate = useNavigate();
  const { state }: any = useLocation();
  const { email } = state;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<String>("");
  const [open, setOpen] = useState(false);

  function handleSubmit() {
    if (password !== "" || confirmPassword !== "") {
      if (password.length < 8) {
        setError(true);
        setOpen(true);
        setMessage("Password must be of 8 or more characters");
      } else {
        if (password === confirmPassword) {
          axiosPost("/auth/forgot-password-update-password", {
            password: password,
            email: email,
          }).then((res) => {
            if (res.data.status === true) {
              setError(false);
              setOpen(true);
              setMessage("Password updated successfully");
              navigate("/pwdConfirmation");
            } else {
              setError(true);
              setOpen(true);
              setMessage(res.data.message);
            }
          });
        } else {
          setError(true);
          setOpen(true);
          setMessage("Password did not match");
        }
      }
    } else {
      setMessage("Please fill out all fields");
      setError(true);
      setOpen(true);
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
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Box
          sx={{
            my: 20,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="text-center">
            <Box
              component="h3"
              sx={{
                m: 3,
                justifyContent: "center",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              CHANGE <br /> PASSWORD
            </Box>
          </div>

          <TextField
            color="warning"
            margin="normal"
            fullWidth
            id="password"
            label="New Password"
            name="password"
            autoComplete="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            color="warning"
            margin="normal"
            fullWidth
            name="cpassword"
            label="Confirm Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="text-center my-4">
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
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </Box>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {error ? (
          <Alert onClose={handleClose} severity="error">
            {message}
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="success">
            Password changed successfully
          </Alert>
        )}
      </Snackbar>
    </Layout>
  );
}
