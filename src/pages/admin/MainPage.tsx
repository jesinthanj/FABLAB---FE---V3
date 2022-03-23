import React from "react";
import { Card } from "@mui/material";
//import { machine } from "../../assets/machine1.jpg";
import Layout from "../../components/Layout";
export default function MainPage() {
  return (
    <>
      <Layout>
        <div
          className="container"
          style={{
            maxHeight: "100vh",
            minWidth: "100vw",
            marginTop: "20%",
          }}
        >
          <p
            className="m-5 justify-content-center d-flex"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            Welcome to LICET FABLAB
          </p>
          <div className="justify-content-center align-items-center min-vh-100">
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
                  {/* <img
                    style={{ marginTop: "30px", borderRadius: "10px" }}
                    width={200}
                    height={170}
                    src={machine}
                    alt=""
                  /> */}
                </div>
                <div className="justify-content-center d-flex m-3">
                  <button
                    className="m-2"
                    type="button"
                    style={{
                      background: "#FF8E23",
                      border: "#FF8E23",
                      borderRadius: "3px",
                    }}
                  >
                    Add Slots
                  </button>
                </div>
              </Card>
            </div>
            <div className="justify-content-center d-flex m-5">
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
                  {/* <img
                    style={{ marginTop: "30px", borderRadius: "10px" }}
                    width={200}
                    height={170}
                    src={machine}
                    alt=""
                  /> */}
                </div>
                <div className="justify-content-center d-flex m-3">
                  <button
                    className="m-2"
                    type="button"
                    style={{
                      background: "#FF8E23",
                      border: "#FF8E23",
                      borderRadius: "3px",
                    }}
                  >
                    Add Equipments
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
