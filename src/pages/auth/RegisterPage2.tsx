import Layout from "../../components/Layout";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function RegisterPage2() {
  let navigate = useNavigate();
  return (
    <Layout>
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <div className="card shadow">
          <div className="card-body">
            <div className="d-flex ">
              {" "}
              <a
                href="/register1"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <AiOutlineArrowLeft style={{ color: "black" }} size="20" />
              </a>
              <div>
                <p
                  className="mx-4"
                  style={{ fontWeight: "bold", fontFamily: "montserrat" }}
                >
                  Basic Details
                </p>
              </div>
            </div>
            <div className="my-4">
              <TextField
                color="warning"
                className="my-4 d-flex justify-content-center"
                label="Name"
              />
              <TextField
                color="warning"
                className="my-4 d-flex justify-content-center"
                label="Number"
              />
              <FormControl fullWidth>
                <InputLabel color="warning" id="demo-simple-select-label">
                  Designation
                </InputLabel>
                <Select
                  color="warning"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //value={age}
                  label="designation"
                  //onChange={handleChange}
                >
                  <MenuItem value={"student"}>Student</MenuItem>
                  <MenuItem value={"faculty"}>Faculty</MenuItem>
                  <MenuItem value={"industry"}>Industry</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="d-flex justify-content-center pt-3 py-4">
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
                onClick={() => {
                  navigate("/register3");
                }}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
