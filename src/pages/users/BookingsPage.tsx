import { useState, forwardRef, useEffect } from "react";
import Layout from "../../components/Layout";
import MenuItem from "@mui/material/MenuItem";
import {
  InputLabel,
  FormControl,
  Select,
  Button,
  Snackbar,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useNavigate, useLocation } from "react-router-dom";
import { axiosGet, axiosPost } from "../requests";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function BookingsPage() {
  let navigate = useNavigate();
  const { state } = useLocation();
  const { name }: any = state;

  type Slots = {
    slotId: number;
    date: String;
    from: Date;
    to: Date;
  };

  // const date = ["2022-03-30", "2022-04-01"];
  const time = ["11:00 - 13:00", "14:00 - 16:00"];

  const [slots, setSlots] = useState<Slots[]>([]);
  const [dateValue, setDateValue] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const [error, setError] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axiosGet("/users/bookSlots").then((res) => {
      setSlots(res.data.slots);
    });
  }, []);

  let date: any = [];
  slots.forEach((slot) => {
    if (date.indexOf(slot.date) === -1) {
      date.push(slot.date);
    }
  });
  console.log(date);

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
    let date = slots.filter((slot) => slot.date === event.target.value);
    console.log(date);
  };

  const handleTimeChange = (event: any) => {
    setTimeValue(event.target.value as string);
  };

  const handleBooking = () => {
    if (dateValue === "" || timeValue === "") {
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
        <h3
          className="mx-3"
          style={{ fontWeight: "bold", fontFamily: "montserrat" }}
        >
          {name}
        </h3>
        <div className="container my-4">
          <FormControl fullWidth sx={{ my: 2 }}>
            <InputLabel id="demo-simple-select-label">Date</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={dateValue}
              label="Sections"
              onChange={(e) => handleDateChange(e)}
            >
              {date.map((item: any, index: number) => {
                return (
                  <MenuItem value={item} key={index}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Time</InputLabel>

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
          <div className="text-center my-4">
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
