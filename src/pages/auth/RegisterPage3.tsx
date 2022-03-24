import Layout from "../../components/Layout";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineArrowLeft } from "react-icons/ai";

export default function RegisterPage3() {
  let navigate = useNavigate();
  const [collegeName, setCollegeName] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [registerNumber, setRegisterNumber] = useState("");
  const [error, setError] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const userData = { collegeName, department, year, registerNumber };
  function handleNext() {
    console.log("Next button clicked");
    if (
      collegeName === "" ||
      department === "" ||
      year === "" ||
      registerNumber === ""
    ) {
      setError(true);
      setOpen(true);
    } else {
      console.log(userData);
      setOpen(true);
      navigate("/homepage");
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
            <div className="d-flex justify-content-between">
              <AiOutlineArrowLeft
                style={{ color: "black" }}
                size="20"
                onClick={() => navigate(-1)}
              />
              <p style={{ fontWeight: "bold", fontFamily: "montserrat" }}>
                Student
              </p>
            </div>
            <div>
              <TextField
                className="my-3 d-flex justify-content-center"
                label="College Name"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
              />
              <TextField
                className="my-3 d-flex justify-content-center"
                label="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
              <TextField
                className="my-3 d-flex justify-content-center"
                label="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
              <TextField
                className="my-3 d-flex justify-content-center"
                label="Register Number"
                value={registerNumber}
                onChange={(e) => setRegisterNumber(e.target.value)}
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
                Submit
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
