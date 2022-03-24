import { useState, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
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
          console.log(true);
          setError(false);
          setOpen(true);
          navigate("/pwdConfirmation");
        } else {
          console.log(false);
          setError(true);
          setOpen(true);
          setMessage("Password did not match");
        }
      }
    }
     else {
      axiosPost("/forgot-password-update-password", {password: password }).then((res) => {
        if (res.data.status === true) {
          setError(false);
          setOpen(true);
          setMessage("Password updated successfully");
        } else {
          setError(true);
          setOpen(true);
          setMessage(res.data.message);
        }
      });
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
