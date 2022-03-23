import { useState } from "react";
import Layout from "../../components/Layout";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { MdDelete } from "react-icons/md";

const data = [
  {
    date: "2020-06-01",
    time: "10:00 AM - 11.30 AM",
    section: "3d printing",
    status: "Booked",
    price: "$100",
  },
  {
    date: "2020-06-01",
    time: "10:00 AM - 11.30 AM",
    section: "3d printing",
    status: "Booked",
    price: "$100",
  },
  {
    date: "2020-06-01",
    time: "10:00 AM - 11.30 AM",
    section: "3d printing",
    status: "Booked",
    price: "$100",
  },
];

export default function MyBookings() {
  return (
    <Layout>
      <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
        <h3 className="mb-5 fw-bolder">MY BOOKINGS</h3>
        <div style={{ backgroundColor: "#f5f5f5", width: "90%" }}>
          {data && data.length > 0 ? (
            data.map((list, index) => {
              return (
                <>
                  <List key={`${list}-${index}`}>
                    <div className="d-flex justify-content-between p-3 align-items-center">
                      <div>
                        <p className="m-0">
                          {list.date} <br />
                          <span className="text-success">{list.status}</span>
                          <br />
                          {list.price}
                        </p>
                      </div>
                      <div>
                        <p className="m-0">
                          {list.time}
                          <br />
                          {list.section}
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
        <a
          role="button"
          href="/homepage"
          className="btn text-white mt-4 px-4 fw-bold"
          style={{ backgroundColor: "#F49C4B", borderRadius: "25px" }}
        >
          BACK
        </a>
      </div>
    </Layout>
  );
}
