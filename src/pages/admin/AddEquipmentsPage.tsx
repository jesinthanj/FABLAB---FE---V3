import Layout from "../../components/Layout";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function AddEquipmentsPage() {
  return (
    <Layout>
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <div className="card shadow">
          <div className="card-body">
            <div className="d-flex ">
              {" "}
              <AiOutlineArrowLeft size="20" />
              <div>
                <p
                  className="mx-4"
                  style={{ fontWeight: "bold", fontFamily: "montserrat" }}
                >
                  Add Equipment:
                </p>
              </div>
            </div>
            <div>
              <TextField
                color="warning"
                className="py-3 d-flex justify-content-center"
                label="Add Equipment"
              />
              <TextField
                color="warning"
                className="py-3 d-flex justify-content-center"
                label="Price/Hr"
              />
            </div>
            <div className="d-flex justify-content-center pt-3">
              <Button
                variant="contained"
                href="#contained-buttons"
                sx={{
                  borderRadius: 5,
                  backgroundColor: "#FF8E23",
                  maxHeight: "50px",
                  minHeight: "30px",
                }}
              >
                ADD
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
