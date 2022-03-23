import { useState, forwardRef, useEffect } from "react";
import Layout from "../../components/Layout";
import MenuItem from "@mui/material/MenuItem";
import {
  InputLabel,
  FormControl,
  Select,
  TextField,
  Button,
  Snackbar,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker, TimePicker, LocalizationProvider } from "@mui/lab";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AddSlots() {
  let navigate = useNavigate();

  const section = ["3d printing", "laser cutting"];

  const [dateValue, setDateValue] = useState<Date | string | null>(null);
  const [fromValue, setFromValue] = useState<Date | null>(null);
  const [toValue, setToValue] = useState<Date | null>(null);
  const [sectionValue, setSectionValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {}, []);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleChange = (event: any) => {
    setSectionValue(event.target.value as string);
  };

  const handleSlots = () => {
    if (
      dateValue === null ||
      fromValue === null ||
      toValue === null ||
      sectionValue === ""
    ) {
      setError(true);
      setOpen(true);
    } else {
      setError(false);
      console.log(dateValue);
      console.log(fromValue);
      console.log(toValue);
      console.log(sectionValue);
      setOpen(true);
      navigate("/slotConfirmation");
    }
  };

  return (
    <Layout>
      <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
        <h3>Add Slots</h3>
        {/* <div className="align-self-start m-3">
          <h3>Add Slots</h3>
        </div> */}
        <div className="container">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Section</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sectionValue}
              label="Sections"
              onChange={(e) => handleChange(e)}
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
          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date"
                value={dateValue}
                onChange={(newValue) => {
                  setDateValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} fullWidth sx={{ my: 3 }} />
                )}
              />
            </LocalizationProvider>
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                label="From Time"
                value={fromValue}
                ampm={false}
                onChange={(newValue) => {
                  setFromValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                label="To Time"
                value={toValue}
                ampm={false}
                onChange={(newValue) => {
                  setToValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} fullWidth sx={{ my: 3 }} />
                )}
              />
            </LocalizationProvider>
          </div>
          <div className="text-center">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FFA73F",
                width: 100,
                borderRadius: 10,
                ":hover": { backgroundColor: "#ff623f" },
              }}
              onClick={() => {
                handleSlots();
              }}
            >
              Add
            </Button>
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
