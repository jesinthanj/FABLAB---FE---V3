import { useState } from "react";
import Layout from "../../components/Layout";
import MenuItem from "@mui/material/MenuItem";
import { InputLabel, FormControl, Select, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TimePicker from "@mui/lab/TimePicker";

export default function AddSlots() {
  const [age, setAge] = useState("");
  const section = ["3d printing", "laser cutting"];
  const [value, setValue] = useState<Date | null>(null);

  // const handleChange = (event) => {
  //   setAge(event.target.value as string);
  // };
  return (
    <Layout>
      <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
        <h3>Add Alots</h3>
        <div className="container">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Section</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              //   onChange={handleChange}
            >
              {section.map((item, index) => {
                return (
                  <MenuItem value={item} key={index}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Basic example"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider> */}
          {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="From Time"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider> */}
        </div>
      </div>
    </Layout>
  );
}
