import Layout from "../../components/Layout";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";

export default function AddEquipmentsPage() {
  let navigate = useNavigate();

  const [equip, setEquip] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const userData = { equip, price };

  function handleAdd() {
    console.log("Login button clicked");
    if (equip === "" || price === "") {
      setError(true);
      setOpen(true);
    } else {
      setError(false);
      console.log(userData);
      setOpen(true);
      navigate("/equipmentConfirmation");
    }
  }
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Layout>
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <div className="card shadow">
          <div className="card-body">
            <div className="d-flex ">
              <a
                href="/mainpage"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <AiOutlineArrowLeft style={{ color: "black" }} size="20" />
              </a>
              <div>
                <h5
                  className="mx-3"
                  style={{ fontWeight: "bold", fontFamily: "montserrat" }}
                >
                  Add Equipments:
                </h5>
              </div>
            </div>
            <div className="container my-4">
              <TextField
                color="warning"
                className="my-3 d-flex justify-content-center"
                label="Add Equipment"
                value={equip}
                onChange={(e) => setEquip(e.target.value)}
              />
              <TextField
                color="warning"
                className="my-3 d-flex justify-content-center"
                label="Price/Hr"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-center">
              <Button
                variant="contained"
                sx={{
                  borderRadius: 5,
                  backgroundColor: "#FF8E23",
                  width: 100,
                  maxHeight: "50px",
                  minHeight: "30px",
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#FFA500",
                  },
                }}
                onClick={handleAdd}
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {error ? (
          <Alert onClose={handleClose} severity="error">
            Please Fill All The Fields
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="success">
            Equipments Added Successfully
          </Alert>
        )}
      </Snackbar>
    </Layout>
  );
}
