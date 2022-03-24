import { useState, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { Button, TextField } from "@mui/material";
import { Box, Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ResetPwd() {

  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [onetimePwd, setonetimePwd] = useState("");
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<String>("");
  const [open, setOpen] = useState(false);

  function handleNext() {
    if (email === "" || onetimePwd === "") {
      setError(true);
      setOpen(true);
      setMessage("Please fill out all fields");

      if (
        typeof email === "string" &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      ) {
        setError(true);
        setOpen(true);
        setMessage("Enter a valid email");
      }
    }
      else {
      setError(false);
      setOpen(true);
      navigate("/changePwd");
    }
  }

  function GetOtp() {
    if (email === "") {
      setError(true);
      setOpen(true);
      setMessage("Please enter your email");
    } else {
      setError(false);
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
          //alignItems: "center",
        }}
      >
        <div className="text-center">
          <Box
            component="h1"
            sx={{
              letterSpacing: 3,
              m: 3,
              justifyContent: "center",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            RESET <br />
            PASSWORD
          </Box>
        </div>

        <TextField
          margin="normal"
          fullWidth
          id="email"
          label="Email"
          name="email"
          type={email}
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="text-end">
          <Button
            type="button"
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#FF8E23",
            }}
            onClick={GetOtp}
          >
            Generate OTP
          </Button>
        </div>
        <TextField
          margin="normal"
          fullWidth
          name="password"
          label="OTP"
          type="password"
          id="password"
          value={onetimePwd}
          onChange={(e) => setonetimePwd(e.target.value)}
        />
        <div className="text-center">
          <Button
            type="button"
            variant="contained"
            size="medium"
            sx={{
              my: 3,
              backgroundColor: "#FF8E23",
              borderRadius: "8px",
              width: "30%",
            }}
            onClick={handleNext}
          >
            Next
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
            {message}
          </Alert>
        )}
      </Snackbar>
    </Layout>
  );
}
