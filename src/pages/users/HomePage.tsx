import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";

const details = [
  {
    sectionId: 1,
    equipname: "CNC Router",
    amt: "Rs 200/hr",
    image: require("../../assets/equipment/3d.png"),
  },
  {
    sectionId: 2,
    equipname: "Vinyl Cutter",
    amt: "Rs 200/hr",
    image: require("../../assets/equipment/vinyl.png"),
  },
  {
    sectionId: 3,
    equipname: "3D Printer",
    amt: "Rs 200/hr",
    image: require("../../assets/equipment/cnc.png"),
  },
];

export default function HomePage() {
  let navigate = useNavigate();
  return (
    <Layout>
      <div
        className=" d-flex align-items-center flex-column"
        style={{ marginTop: "10vh" }}
      >
        <div>
          <h5
            className="pb-1 mx-2 py-5"
            style={{
              fontFamily: "montserrat",
              fontWeight: "bold",
            }}
          >
            Pick your slots for
          </h5>
        </div>
        {details &&
          details.map((items, index) => {
            return (
              <div key={index}>
                <div>
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
                      paddingBottom: "-5px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="194"
                      image={items.image}
                      alt="Paella dish"
                      style={{
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                      }}
                    />
                    <CardContent>
                      <div className="d-flex justify-content-between">
                        <Typography
                          className="pb-1 d-flex justify-content-center"
                          style={{
                            fontFamily: "montserrat",
                            fontWeight: "bold",
                          }}
                        >
                          {items.equipname}
                        </Typography>
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
                            navigate("/booking", {
                              state: {
                                name: items.equipname,
                                sectionId: items.sectionId,
                              },
                            });
                          }}
                        >
                          Book Now
                        </Button>
                      </div>
                      <Typography
                        className="pb-1"
                        style={{
                          fontFamily: "montserrat",
                        }}
                        color="text.secondary"
                      >
                        {items.amt}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
      </div>
    </Layout>
  );
}
