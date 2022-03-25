import Layout from "../../components/Layout";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../slices/store";
import { axiosPost } from "../requests";

import { AiOutlineArrowLeft } from "react-icons/ai";

export default function RegisterPage4() {
  let navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [department, setDepartment] = useState("");
  const [companyWebsite, setcompanyWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  const registerData = useSelector((state: RootState) => state.register);

  async function handleNext() {
    if (
      companyName === "" ||
      department === "" ||
      companyWebsite === "" ||
      address === ""
    ) {
      setError(true);
      setOpen(true);
    } else {
      const response = await axiosPost("/auth/register", {
        email: registerData.email,
        name: registerData.name,
        password: registerData.password,
        collegeName: registerData.collegeName,
        companyName: registerData.companyName,
        companyAddress: registerData.companyAddress,
        companyWebsite: registerData.companyWebsite,
        contact: registerData.contact,
        department: department,
        designation: registerData.designation,
        registerNumber: registerData.registerNumber,
        year: registerData.year,
      });
      if (response.status) {
        setError(false);
        setOpen(true);
        navigate("/");
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
        <div className="card shadow" style={{ borderRadius: "30px" }}>
          <div className="card-body p-md-5 p-4">
            <div className="d-flex justify-content-between">
              <AiOutlineArrowLeft
                style={{ color: "black" }}
                size="20"
                onClick={() => navigate(-1)}
              />
              <p style={{ fontWeight: "bold", fontFamily: "montserrat" }}>
                Faculty/Industry
              </p>
            </div>
            <div>
              <TextField
                className="my-3 d-flex justify-content-center"
                label="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <TextField
                className="my-3 d-flex justify-content-center"
                label="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
              <TextField
                className="my-3 d-flex justify-content-center"
                label="Company Website"
                value={companyWebsite}
                onChange={(e) => setcompanyWebsite(e.target.value)}
              />
              <TextField
                className="my-3 d-flex justify-content-center"
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
            Successful
          </Alert>
        )}
      </Snackbar>
    </Layout>
  );
}
