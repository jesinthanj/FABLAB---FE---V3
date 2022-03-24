import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Layout from "../../components/Layout";

import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";

const image1 = require("../../assets/equipment/machine1.jpg");
const image2 = require("../../assets/equipment/machine2.png");

export default function MainPage() {
  let navigate = useNavigate();
  return (
    <>
      <Layout>
        <Menu />
        <div className="vh-100 d-flex align-items-center flex-column">
          <h5
            className="pb-1 mx-2 py-5"
            style={{
              fontFamily: "montserrat",
              fontWeight: "bold",
            }}
          >
            Welcome to <br />
            <span style={{ color: "#FF8E23", letterSpacing: "3px" }}>
              {" "}
              LICET FABLAB{" "}
            </span>
          </h5>
          <div className="py-1">
            <Card
              sx={{
                maxWidth: 335,
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                backgroundColor: "#F5F5F5",
                margin: "20px",
                boxShadow: "0 9px 9px -6px black",
                paddingBottom: "-15px",
              }}
            >
              <CardMedia
                component="img"
                height="194"
                image={image1}
                alt="Paella dish"
                style={{
                  borderBottomLeftRadius: "20px",
                  borderBottomRightRadius: "20px",
                }}
              />
              <CardContent>
                <div className="d-flex justify-content-center">
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
                      navigate("/addequip");
                    }}
                  >
                    Add Equipments
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="py-1">
            <Card
              sx={{
                maxWidth: 335,
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                backgroundColor: "#F5F5F5",
                margin: "20px",
                boxShadow: "0 9px 9px -6px black",
                paddingBottom: "-15px",
              }}
            >
              <CardMedia
                component="img"
                height="194"
                image={image2}
                alt="Paella dish"
                style={{
                  borderBottomLeftRadius: "20px",
                  borderBottomRightRadius: "20px",
                }}
              />
              <CardContent>
                <div className="d-flex justify-content-center">
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
                      navigate("/addSlots");
                    }}
                  >
                    Add Slots
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Layout>
    </>
  );
}
