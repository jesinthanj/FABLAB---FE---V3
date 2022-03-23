import Layout from "../../components/Layout";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function RegisterPage2() {
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
              />
              <TextField
                className="py-3 d-flex justify-content-center"
                label="number"
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
                  //onChange={handleChange}
                >
                  <MenuItem value={"student"}>Student</MenuItem>
                  <MenuItem value={"faculty"}>Faculty</MenuItem>
                  <MenuItem value={"industry"}>Industry</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="d-flex justify-content-center pt-3">
              <button className="btn btn-warning btn-sm">Next</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
