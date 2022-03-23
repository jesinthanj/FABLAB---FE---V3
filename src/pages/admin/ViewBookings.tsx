import { useState } from "react";
import Layout from "../../components/Layout";
import {
  InputLabel,
  FormControl,
  Select,
  Divider,
  List,
  MenuItem,
} from "@mui/material";
import { MdDelete } from "react-icons/md";

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

export default function ViewBookings() {
  const section = ["3d printing", "laser cutting"];
  const date = ["2020-01-10", "2020-01-11", "2020-01-12"];
  return (
    <Layout>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h3 className="mb-4 fw-bolder">VIEW BOOKINGS</h3>
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ width: "90%" }}
        >
          <div className="col-md-5 mb-3 p-0">
            <FormControl variant="filled" fullWidth>
              <InputLabel>Section</InputLabel>
              <Select
                value={section}
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
          </div>
          <div className="col-md-5 mb-3 p-md-2 p-0">
            <FormControl variant="filled" fullWidth>
              <InputLabel>Date</InputLabel>
              <Select
                value={date}
                //   onChange={handleChange}
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
          </div>
          <div className="col-md-2 text-center mb-3 d-grid mx-auto p-0">
            <button
              type="button"
              className="btn text-white fw-bold"
              style={{ backgroundColor: "#F49C4B", borderRadius: "25px" }}
            >
              Search
            </button>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#f5f5f5",
            width: "90%",
            borderRadius: "10px",
          }}
        >
          {data && data.length > 0 ? (
            data.map((list, index) => {
              return (
                <>
                  <List key={`${list}-${index}`}>
                    <div className="d-flex justify-content-between p-sm-3 p-2 align-items-center">
                      <div>
                        <p className="m-0">
                          {list.name} <br />
                          {list.date} <br />
                          <span className="text-success">{list.status}</span>
                          <br />
                          {list.price}
                        </p>
                      </div>
                      <div>
                        <p className="m-0">
                          {list.rollno}
                          <br />
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
