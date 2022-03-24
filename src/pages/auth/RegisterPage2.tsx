import Layout from "../../components/Layout";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
export default function RegisterPage2() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [designation, setDesignation] = useState("");
  const [error, setError] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const userData = { name, number, designation };

  function handleNext() {
    console.log("Next button clicked");
    if (name === "" || number === "" || designation === "") {
      setError(true);
      setOpen(true);
    } else {
      console.log(userData);
      setOpen(true);
      navigate("/register3");
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
            <div>
              <p style={{ fontWeight: "bold", fontFamily: "montserrat" }}>
                Basic details
              </p>
            </div>
            <div>
              <TextField
                className="py-3 d-flex justify-content-center"
                label="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                className="py-3 d-flex justify-content-center"
                label="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Designation
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //value={age}
                  label="designation"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  //onChange={handleChange}
                >
                  <MenuItem value={"student"}>Student</MenuItem>
                  <MenuItem value={"faculty"}>Faculty</MenuItem>
                  <MenuItem value={"industry"}>Industry</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="d-flex justify-content-between pt-3 py-4">
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
