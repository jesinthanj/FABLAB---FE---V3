import { useState, forwardRef, useEffect } from "react";
import Layout from "../../components/Layout";
import MenuItem from "@mui/material/MenuItem";
import {
  InputLabel,
  FormControl,
  Select,
  Button,
  Snackbar,
  LinearProgress
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useNavigate, useLocation } from "react-router-dom";
import { axiosGet, axiosPost } from "../requests";
import Menu from "../../components/Menu";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function BookingsPage() {
  let navigate = useNavigate();
  const { state } = useLocation();
  const { name, sectionId }: any = state;

  type Slots = {
    slotId: number;
    date: String;
    fromTime: String;
    toTime: String;
  };

  const [slots, setSlots] = useState<Slots[]>([]);
  const [dateValue, setDateValue] = useState("");
  const [slotTime, setSlotTime] = useState<Slots[]>([]);
  const [timeValue, setTimeValue] = useState<number>();
  const [error, setError] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosGet(`/users/bookSlots?sectionId=${sectionId}`).then((res) => {
      setSlots(res.data.slots);
      setLoading(false);
    });
  }, [sectionId]);

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

  let time: Slots[] = [];

  const handleDateChange = (event: any) => {
    time = [];
    setDateValue(event.target.value as string);
    time = slots.filter((slot) => slot.date === event.target.value);
    console.log(time);
    setSlotTime(time);
  };

  const handleTimeChange = (event: any) => {
    setTimeValue(event.target.value as number);
  };

  const handleBooking = () => {
    if (dateValue === "" || timeValue === null) {
      setError(true);
      setOpen(true);
    } else {
      axiosPost("/users/bookSlots", {
        slotId: timeValue,
      }).then((res) => {
        if (res.data.message === "Success") {
          setError(false);
          setOpen(true);
          navigate("/users/confirmationpage");
        }
      });
    }
  };

  return (
    <Layout>
      <Menu/>
      {loading ? (
        <div className="vh-100 d-flex align-items-center justify-content-center flex-column m-4">
          <LinearProgress className="container" />
        </div>
      ) : (
        <>
        {(
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
              {slotTime.map((item, index) => {
                console.log(item);
                return (
                  <MenuItem value={item.slotId} key={index}>
                    {item.fromTime} - {item.toTime}
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
  )}
</>
)}

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
