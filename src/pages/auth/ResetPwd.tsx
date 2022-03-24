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
    } else {
      if (
        typeof email === "string" &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      ) {
        setError(true);
        setOpen(true);
        setMessage("Enter a valid email");
      } else {
        axiosPost("/forgot-password-verify-otp", {
          email: email,
          otp: onetimePwd,
        }).then((res) => {
          if (res.data.status === true) {
            setError(false);
            setOpen(true);
            setMessage("OTP verified successfully");
            navigate("/changePwd");
          } else {
            setError(true);
            setOpen(true);
            setMessage(res.data.message);
          }
        });
        setError(false);
      }
    }
  }

  function GetOtp() {
    if (
      email === "" &&
      typeof email === "string" &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    ) {
      setError(true);
      setOpen(true);
      setMessage("Please enter your email");
    } else {
      axiosPost("/forgot-password-otp", { email: email }).then((res) => {
        if (res.data.status === true) {
          setError(false);
          setOpen(true);
          setMessage("OTP sent to your email");
        } else {
          setError(true);
          setOpen(true);
          setMessage(res.data.message);
        }
      });
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
            component="h3"
            sx={{
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
              "&:hover": {
                backgroundColor: "#fff",
                color: "#FFA500",
              },
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
            variant="contained"
            href="/changepwd"
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
