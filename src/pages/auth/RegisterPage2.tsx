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
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { registerTwo } from "../../slices/RegisterSlice";

export default function RegisterPage2() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [designation, setDesignation] = useState("");
  const [error, setError] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const userData = { name, contact, designation };

  function handleNext() {
    if (name === "" || contact === "" || designation === "") {
      setError(true);
      setOpen(true);
    } else if (designation === "student") {
      dispatch(registerTwo(userData));
      setOpen(true);
      navigate("/registerStu");
    } else if (designation === "faculty" || designation === "industry") {
      dispatch(registerTwo(userData));
      setOpen(true);
      navigate("/registerInd");
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
                Basic details
              </p>
            </div>
            <div>
              <TextField
                color="warning"
                className="my-3 d-flex justify-content-center"
                label="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                color="warning"
                className="my-3 d-flex justify-content-center"
                label="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              <FormControl color="warning" fullWidth>
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
            <div className="d-flex justify-center-center pt-3 py-4">
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
