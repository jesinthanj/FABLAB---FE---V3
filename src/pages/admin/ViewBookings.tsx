import { useState, forwardRef, useEffect } from "react";
import Layout from "../../components/Layout";
import {
  InputLabel,
  FormControl,
  Select,
  Divider,
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
import { axiosGet, axiosPost, axiosDelete } from "../requests";
import Menu from "../../components/Menu";

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

  type Booking = {
    bookingId: number;
    users: Users;
  };

  type Slots = {
    isBooked: boolean;
    sections: Sections;
    fromTime: Date;
    toTime: Date;
    date: string;
    booking: Booking;
  };
  interface SlotData {
    slotId: number;
    bookingId: number;
    slots: Slots;
    users: Users;
  }
  interface SearchData {
    sectionName: string;
    price: number;
    slots: Slots;
  }

  const [sectionValue, setSectionValue] = useState<number | null>(null);
  const [sections, setSections] = useState<Section[]>([]);
  const [dateValue, setDateValue] = useState<Date | string | null>(null);
  const [slotData, setSlotData] = useState<SlotData[]>([]);
  const [searchData, setSearchData] = useState<SearchData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [open, setOpen] = useState(false);

  const handleChange = (event: any) => {
    setSectionValue(event.target.value as number);
  };

  useEffect(() => {
    axiosGet("/admin/addSlots").then((res) => {
      setSections(res.data.sections);
    });
    axiosGet("/admin/viewBookings").then((res) => {
      setSlotData(res.data.data);
      console.log(res.data.data);
      setLoading(false);
    });
  }, []);

  async function handleSearch() {
    if (dateValue === null || sectionValue === null) {
      setError(true);
      setMessage("Please select all the fields");
      setOpen(true);
    } else {
      setLoading(true);
      setSlotData([]);
      console.log(dateValue, sectionValue);
      axiosPost("/admin/viewBookings", {
        sectionId: sectionValue,
        date: dateValue,
      }).then((res) => {
        console.log(res.data);
        setSearchData(res.data.data);
        setLoading(false);
      });
    }
  }

  const handleDelete = (bookingId: number) => {
    axiosDelete("/admin/viewBookings", {
      bookingId: bookingId,
    }).then((res) => {
      if (res.data.message === "Success") {
        slotData.forEach((data) => {
          if (data.bookingId === bookingId) {
            setSlotData(
              slotData.filter((data) => data.bookingId !== bookingId)
            );
          }
        });
        setError(false);
        setMessage("Booking deleted successfully");
        setOpen(true);
      } else {
        setError(true);
        setMessage("Booking not deleted");
        setOpen(true);
      }
    });
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
      <Menu />
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
                {sections.map((item, index) => (
                  <MenuItem value={item.sectionId} key={`${item}-${index}`}>
                    {item.sectionName}
                  </MenuItem>
                ))}
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
              type="button"
              sx={{
                borderRadius: 6,
                backgroundColor: "#F49C4B",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#F49C4B",
                },
              }}
              onClick={() => {
                handleSearch();
              }}
            >
              Search
            </Button>
          </div>
        </div>
        {loading ? (
          <LinearProgress className="container" />
        ) : (
          <>
            <div
              style={{
                backgroundColor: "#f5f5f5",
                width: "90%",
                borderRadius: "10px",
              }}
            >
              {slotData.length > 0 &&
                slotData.map((list, index) => {
                  return (
                    <>
                      <div
                        className="d-flex justify-content-between p-sm-3 p-2 align-items-center"
                        key={list.bookingId}
                      >
                        <div>
                          <p className="m-0">
                            {list.users.name} <br />
                            {list.slots.date} <br />
                            {list.slots.isBooked ? (
                              <span className="text-success">Booked</span>
                            ) : (
                              <span className="text-danger">Not Booked</span>
                            )}
                            <br />₹{list.slots.sections.price}/-
                          </p>
                        </div>
                        <div>
                          <p className="m-0">
                            {list.users.registerNumber}
                            <br />
                            {list.slots.fromTime} - {list.slots.toTime}
                            <br />
                            {list.slots.sections.sectionName}
                            <br />
                            <MdDelete
                              size="25"
                              onClick={() => {
                                handleDelete(list.bookingId);
                              }}
                            />
                          </p>
                        </div>
                      </div>
                      {index !== slotData.length ? <Divider /> : null}
                    </>
                  );
                })}
            </div>
          </>
        )}

        <>
          <div
            style={{
              backgroundColor: "#f5f5f5",
              width: "90%",
              borderRadius: "10px",
            }}
          >
            {searchData.length > 0 &&
              searchData.map((list, index) => {
                return (
                  <>
                    <div
                      className="d-flex justify-content-between p-sm-3 p-2 align-items-center"
                      key={list.slots.booking.bookingId}
                    >
                      <div>
                        <p className="m-0">
                          {list.slots.booking.users.name} <br />
                          {list.slots.date} <br />
                          <span className="text-success">Booked</span>
                          <br />₹{list.price}/-
                        </p>
                      </div>
                      <div>
                        <p className="m-0">
                          {list.slots.booking.users.registerNumber}
                          <br />
                          {list.slots.fromTime} - {list.slots.toTime}
                          <br />
                          {list.sectionName}
                          <br />
                          <MdDelete
                            size="25"
                            onClick={() => {
                              handleDelete(list.slots.booking.bookingId);
                            }}
                          />
                        </p>
                      </div>
                    </div>
                    {index !== slotData.length ? <Divider /> : null}
                  </>
                );
              })}
          </div>
        </>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {error ? (
          <Alert onClose={handleClose} severity="error">
            {message}
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="success">
            {message}
          </Alert>
        )}
      </Snackbar>
    </Layout>
  );
}
