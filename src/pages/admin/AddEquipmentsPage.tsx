import Layout from "../../components/Layout";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TimePicker, LocalizationProvider } from "@mui/lab";
import { axiosGet, axiosPost } from "../requests";
import { useState, forwardRef, useEffect } from "react";
import Menu from "../../components/Menu";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AddEquipmentsPage() {
  let navigate = useNavigate();

  type Section = {
    equip: string;
    price: number;
  };

  const [equip, setEquip] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState("");
  const [fromTime, fromTimeValue] = useState<Date | string | null>(null);
  const [toTime, toTimeValue]= useState<Date | string | null>(null);
  // eslint-disable-next-line
  const [sections, setSections] = useState<Section[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  // const userData = { equip, price };

  useEffect(() => {
    axiosGet("/admin/addEquipments").then((res) => {
      setSections(res.data.sections);
    });
  }, []);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleAdd = () => {
    if (equip === "" || price === "" || fromTime ===""|| toTime==="") {
      setError(true);
      setOpen(true);
    } else {
      axiosPost("/admin/addEquipments", {
        equipment: equip,
        price: price,
        startTime: fromTime,
        endTime: toTime,
        count: count
      }).then((res) => {
        if (res.data.message === "Success") {
          setError(false);
          setOpen(true);
          navigate("/equipmentConfirmation");
        }
      });
    }
  };
  return (
    <Layout>
      <Menu />
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "80vh" }}
      >
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
              <div>
                  <LocalizationProvider
                    color="warning"
                    dateAdapter={AdapterDateFns}
                  >
                    <TimePicker
                      label="Opening Time"
                      value={fromTime}
                      onChange={(newValue) => {
                        fromTimeValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth />
                      )}
                    />
                  </LocalizationProvider>
                </div>
                <div>
                  <LocalizationProvider
                    color="warning"
                    dateAdapter={AdapterDateFns}
                  >
                    <TimePicker
                      label="Closing Time"
                      value={toTime}
                      onChange={(newValue) => {
                        toTimeValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth sx={{ mt:2}} />
                      )}
                    />
                  </LocalizationProvider>
                </div>
              <TextField
                color="warning"
                className="my-3 d-flex justify-content-center"
                label="Number of person"
                value={count}
                onChange={(e) => setCount(e.target.value)}
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
