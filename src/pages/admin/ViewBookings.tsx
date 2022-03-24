import { useState, forwardRef, useEffect } from "react";
import Layout from "../../components/Layout";
import {
  InputLabel,
  FormControl,
  Select,
  Divider,
  List,
  Button,
  MenuItem,
  TextField,
  Snackbar,
  LinearProgress,
} from "@mui/material";
import { MdDelete } from "react-icons/md";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { axiosGet, axiosPost } from "../requests";

const data = [
  {
    name: "Veroni Shwetha",
    rollno: "311119205041",
    date: "2020-06-01",
    time: "10:00 AM - 11.30 AM",
    section: "3d printing",
    status: "Booked",
    price: "$100",
  },
  {
    name: "Veroni Shwetha",
    rollno: "311119205041",
    date: "2020-06-01",
    time: "10:00 AM - 11.30 AM",
    section: "3d printing",
    status: "Booked",
    price: "$100",
  },
  {
    name: "Veroni Shwetha",
    rollno: "311119205041",
    date: "2020-06-01",
    time: "10:00 AM - 11.30 AM",
    section: "3d printing",
    status: "Booked",
    price: "$100",
  },
];

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ViewBookings() {
  type Section = {
    sectionId: number;
    sectionName: string;
  };

  type Users = {
    name: string;
    registerNumber: string;
  };

  type Sections = {
    sectionId: number;
    sectionName: string;
    price: number;
  };

  type Slots = {
    fromTime: string;
    toTime: string;
    sections: Sections;
  };
  interface SlotData {
    users: Users;
    slotId: number;
    slots: Slots;
  }

  const [sectionValue, setSectionValue] = useState<number>();
  const [sections, setSections] = useState<Section[]>([]);
  const [dateValue, setDateValue] = useState<Date | string | null>(null);
  const [slotData, setSlotData] = useState<SlotData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  const handleChange = (event: any) => {
    setSectionValue(event.target.value as number);
  };

  useEffect(() => {
    axiosGet("/admin/addSlots").then((res) => {
      setSections(res.data.sections);
    });
    axiosGet("/admin/viewBookings").then((res) => {
      setSlotData(res.data.slots);
      setLoading(false);
    });
  }, []);

  const handleSlots = () => {
    if (dateValue === null || sectionValue === null) {
      setError(true);
      setOpen(true);
    } else {
      axiosPost("/admin/viewBookings", {
        sectionId: sectionValue,
        date: dateValue,
      }).then((res) => {
        if (res.data.message === "Success") {
          setError(false);
          setOpen(true);
        }
        setSlotData(res.data.data);
        setLoading(false);
      });
    }
  };

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
      <div className="d-flex align-items-center p-3 justify-content-center flex-column">
        <h3 className="mb-4 fw-bolder">VIEW BOOKINGS</h3>
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ width: "90%" }}
        >
          <div className="col-md-5 mb-3 p-0">
            <FormControl variant="filled" fullWidth>
              <InputLabel>Section</InputLabel>
              <Select value={sectionValue} onChange={(e) => handleChange(e)}>
                {sections.map((item, index) => {
                  return (
                    <MenuItem value={item.sectionId} key={index}>
                      {item.sectionName}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
          <div className="col-md-5 mb-3 p-md-2 p-0">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date"
                value={dateValue}
                onChange={(newValue) => {
                  setDateValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} fullWidth variant="filled" />
                )}
              />
            </LocalizationProvider>
          </div>
          <div className="col-md-2 text-center mb-3 d-grid mx-auto p-0">
            <Button
              variant="contained"
              sx={{
                borderRadius: 6,
                backgroundColor: "#F49C4B",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#F49C4B",
                },
              }}
              onClick={() => {
                handleSlots();
              }}
            >
              Search
            </Button>
          </div>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            {error ? (
              <Alert onClose={handleClose} severity="error">
                Please Fill All The Fields
              </Alert>
            ) : (
              <Alert onClose={handleClose} severity="success">
                Check Out The Sections Here
              </Alert>
            )}
          </Snackbar>
        </div>
        <div
          style={{
            backgroundColor: "#f5f5f5",
            width: "90%",
            borderRadius: "10px",
          }}
        >
          {loading && <LinearProgress className="container" />}
          {slotData && slotData.length > 0 ? (
            slotData.map((list, index) => {
              return (
                <>
                  <List key={`${list}-${index}`}>
                    <div className="d-flex justify-content-between p-sm-3 p-2 align-items-center">
                      <div>
                        <p className="m-0">
                          {list.users.name} <br />
                          {list.slots.fromTime} <br />
                          <span className="text-success">Booked</span>
                          <br />
                          {list.slots.sections.price}
                        </p>
                      </div>
                      <div>
                        <p className="m-0">
                          {list.users.registerNumber}
                          <br />
                          {list.slots.toTime}
                          <br />
                          {list.slots.sections.sectionName}
                          <br />
                          <MdDelete size="25" />
                        </p>
                      </div>
                    </div>
                  </List>
                  {index !== data.length ? <Divider /> : null}
                </>
              );
            })
          ) : (
            <p>You have made no bookings!</p>
          )}
        </div>
        <Button
          variant="contained"
          href="/homepage"
          sx={{
            borderRadius: 6,
            marginTop: "20px",
            px: "30px",
            backgroundColor: "#F49C4B",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#F49C4B",
            },
          }}
        >
          BACK
        </Button>
      </div>
    </Layout>
  );
}
