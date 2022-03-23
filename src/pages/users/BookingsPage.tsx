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

  const date = ["2022-03-30", "2022-04-01"];
  const time = ["11:00 - 13:00","14:00 - 16:00"];

  const [dateValue, setDateValue] = useState("");
  const [timeValue, setTimeValue] = useState("");
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

  const handleDateChange = (event: any) => {
    setDateValue(event.target.value as string);
  };

  const handleTimeChange = (event: any) => {
      setTimeValue(event.target.value as string);
  }

  const handleBooking = () => {
    if (
      dateValue === "" ||
      timeValue === ""
    ) {
      setError(true);
      setOpen(true);
    } else {
      setError(false);
      console.log(dateValue);
      console.log(timeValue);
      setOpen(true);
      navigate("/users/confirmationpage");
    }
  };

  return (
    <Layout>
      <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
        <h3>Section Name</h3>
        {/* <div className="align-self-start m-3">
          <h3>Add Slots</h3>
        </div> */}
        <div className="container">
          <FormControl fullWidth sx={{my:2}}>
            <InputLabel id="demo-simple-select-label">Date</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={dateValue}
              label="Sections"
              onChange={(e) => handleDateChange(e)}
            >
              {date.map((item, index) => {
                return (
                  <MenuItem value={item} key={index}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Section</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={timeValue}
              label="Time"
              onChange={(e) => handleTimeChange(e)}
            >
              {time.map((item, index) => {
                return (
                  <MenuItem value={item} key={index}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <div className="text-center">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FFA73F",
                width: 100,
                borderRadius: 10,
                my:2,
                ":hover": { backgroundColor: "#ff623f" },
              }}
              onClick={() => {
                handleBooking();
              }}
            >
              Book 
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
