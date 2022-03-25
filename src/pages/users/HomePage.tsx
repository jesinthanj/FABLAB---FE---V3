import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";
import Layout from "../../components/Layout";
import { axiosGet } from "../requests";

export default function HomePage() {
  type Sections = {
    sectionId: number;
    sectionName: string;
    price: number;
    imageUrl: string;
  };
  let navigate = useNavigate();

  const [details, setDetails] = useState<Sections[]>([]);

  useEffect(() => {
    axiosGet("/users/showSections").then((res) => {
      setDetails(res.data.sections);
    });
  }, []);

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
            Pick your slots for
          </h5>
          {details &&
            details.map((items, index) => {
              return (
                <div key={index}>
                  <div className="card-body">
                    <Card
                      className="shadow"
                      sx={{
                        maxWidth: 335,
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                        backgroundColor: "#F5F5F5",
                        margin: "20px",
                        paddingBottom: "-5px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        width="250px"
                        image={items.imageUrl}
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
                            {items.sectionName}
                          </Typography>
                        </div>
                        <div className="d-flex justify-content-between">
                          <Typography
                            className="pb-1"
                            style={{
                              fontFamily: "montserrat",
                            }}
                            color="text.secondary"
                          >
                            {items.price}
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
                                  name: items.sectionName,
                                  sectionId: items.sectionId,
                                },
                              });
                            }}
                          >
                            Book Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
        </div>
      </Layout>
    </>
  );
}
