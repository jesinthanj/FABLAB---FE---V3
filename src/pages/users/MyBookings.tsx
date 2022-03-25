import { useState, useEffect, forwardRef } from "react";
import Layout from "../../components/Layout";
import { Divider, Button, LinearProgress, Snackbar } from "@mui/material";
import { MdDelete } from "react-icons/md";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { axiosGet, axiosDelete } from "../requests";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MyBookings() {
  type Sections = {
    sectionId: number;
    sectionName: string;
    price: number;
  };

  type Slots = {
    isBooked: boolean;
    sections: Sections;
    fromTime: Date;
    toTime: Date;
    date: string;
  };
  interface SlotData {
    slotId: number;
    bookingId: number;
    slots: Slots;
  }
  const [loading, setLoading] = useState(true);
  const [slotData, setSlotData] = useState<SlotData[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axiosGet("/users/myBookings").then((res) => {
      setSlotData(res.data.slots);
      setLoading(false);
    });
  }, []);

  const handleDelete = (bookingId: number) => {
    axiosDelete("/users/myBookings", {
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
        setOpen(true);
      } else {
        setError(true);
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
      <div className="vh-100 d-flex align-items-center justify-content-center flex-column p-3">
        <h3 className="mb-5 fw-bolder">MY BOOKINGS</h3>
        <div
          style={{
            backgroundColor: "#f5f5f5",
            width: "90%",
            borderRadius: "10px",
          }}
        >
          {loading ? (
            <LinearProgress className="container" />
          ) : (
            <>
              {slotData && slotData.length > 0 ? (
                slotData.map((list, index) => {
                  return (
                    <>
                      <div
                        className="d-flex justify-content-between p-3 align-items-center"
                        key={list.bookingId}
                      >
                        <div>
                          <p className="m-0">
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
                            {list.slots.fromTime} - {list.slots.toTime}
                            <br />
                            {list.slots.sections.sectionName}
                            <br />
                            <MdDelete
                              size="25"
                              type="submit"
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
                })
              ) : (
                <p className="text-center p-2 m-0">
                  You have made no bookings!
                </p>
              )}
            </>
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {error ? (
          <Alert onClose={handleClose} severity="error">
            Delete was unsucessful!
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="success">
            Deleted Successfully!
          </Alert>
        )}
      </Snackbar>
    </Layout>
  );
}
