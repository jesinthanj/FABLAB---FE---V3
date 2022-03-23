import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import printing from "../../assets/equipment/3d.png";
// import Vinyl from "../../assets/equipment/vinyl.png";
// import CNC from "../../assets/equipment/cnc.png";

const details = [
  {
    equipname: "CNC Router",
    amt: "Rs 200",
    //image: CNC,
  },
  {
    equipname: "Pruning Plants",
    amt: "Rs 200",
    //image: Vinyl,
  },
  {
    equipname: "Pruning Plants",
    amt: "Rs 200",
    //image: printing,
  },
];

export default function HomePage() {
  return (
    <div className="vh-100 align-items-center justify-content-center">
      <h5
        className="pb-1 mx-2 py-5 d-flex justify-content-center"
        style={{
          fontFamily: "montserrat",
          fontWeight: "bold",
          letterSpacing: "5px",
        }}
      >
        Pick your slots for
      </h5>
      {details &&
        details.map((items, index) => {
          return (
            <div key={index}>
              <div className="align-items-center justify-content-center">
                {" "}
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
                  {/* <CardMedia
                    component="img"
                    height="194"
                    image={items.image}
                    alt="Paella dish"
                    style={{
                      borderBottomLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                    }}
                  /> */}
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
                        href="#contained-buttons"
                        sx={{
                          borderRadius: 5,
                          backgroundColor: "#FFA500",
                          maxHeight: "50px",
                          minHeight: "30px",
                        }}
                      >
                        Book Now
                      </Button>
                    </div>
                    <Typography
                      className="pb-1 d-flex justify-content-start"
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
  );
}
