import React from "react";
import { Button, Card } from "@mui/material";
//import machine from "../../assets/machine1.jpg";
export default function HomePage() {
  return (
    <>
      <div
        className="container"
        style={{ maxHeight: "100vh", minWidth: "100vw" }}
      >
        <p
          className="m-5 justify-content-center d-flex"
          style={{ fontWeight: "bold", fontSize: "20px" }}
        >
          Pick your Slots
        </p>
        {/* <div className="justify-content-center align-items-center min-vh-100">
          <div className="justify-content-center align-items-center d-flex m-5">
            <Card
              variant="outlined"
              style={{
                height: "270px",
                width: "250px",
                background: "#e6e6e6",
                borderRadius: "10px",
              }}
            >
              <div className="justify-content-center d-flex">
                <img
                  style={{ marginTop: "30px", borderRadius: "10px" }}
                  width={200}
                  height={170}
                  src={machine}
                  alt=""
                />
              </div>
              <div className="justify-content-center d-flex m-3">
                <Button variant="contained">3D printer</Button>
              </div>
            </Card>
          </div>
          <div className="justify-content-center align-items-center d-flex m-5">
            <Card
              variant="outlined"
              style={{
                height: "270px",
                width: "250px",
                background: "#e6e6e6",
                borderRadius: "10px",
              }}
            >
              <div className="justify-content-center d-flex">
                <img
                  style={{ marginTop: "30px", borderRadius: "10px" }}
                  width={200}
                  height={170}
                  src={machine}
                  alt=""
                />
              </div>
              <div className="justify-content-center d-flex m-3">
                <Button variant="contained">CNC Machine</Button>
              </div>
            </Card>
          </div>
          <div className="justify-content-center align-items-center d-flex m-5">
            <Card
              variant="outlined"
              style={{
                height: "270px",
                width: "250px",
                background: "#e6e6e6",
                borderRadius: "10px",
              }}
            >
              <div className="justify-content-center d-flex">
                <img
                  style={{ marginTop: "30px", borderRadius: "10px" }}
                  width={200}
                  height={170}
                  src={machine}
                  alt=""
                />
              </div>
              <div className="justify-content-center d-flex m-3">
                <Button variant="contained">Laser cutting</Button>
              </div>
            </Card>
          </div>
        </div> */}
      </div>
    </>
  );
}
