import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { Divider, Button, LinearProgress } from "@mui/material";
import { MdDelete } from "react-icons/md";
import { axiosGet } from "../requests";

export default function MyBookings() {
  type Sections = {
    sectionId: number;
    sectionName: string;
    price: number;
  };

  type Slots = {
    fromTime: string;
    toTime: string;
    isBooked: boolean;
    sections: Sections;
  };
  interface SlotData {
    bookingId: number;
    slotId: number;
    slots: Slots;
  }
  const [loading, setLoading] = useState(false);
  const [slotData, setSlotData] = useState<SlotData[]>([]);

  useEffect(() => {
    axiosGet("/users/myBookings").then((res) => {
      setSlotData(res.data.slots);
      setLoading(false);
    });
  }, []);

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
          {loading && <LinearProgress className="container" />}
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
                        {list.slots.fromTime} <br />
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
                        {list.slots.toTime}
                        <br />
                        {list.slots.sections.sectionName}
                        <br />
                        <MdDelete size="25" />
                      </p>
                    </div>
                  </div>
                  {index !== slotData.length ? <Divider /> : null}
                </>
              );
            })
          ) : (
            <p className="text-center p-2 m-0">You have made no bookings!</p>
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
