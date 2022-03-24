import { useState, forwardRef, useEffect } from "react";
import Layout from "../../components/Layout";
import MenuItem from "@mui/material/MenuItem";
import {
  InputLabel,
  FormControl,
  Select,
  TextField,
  Button,
  Snackbar,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker, TimePicker, LocalizationProvider } from "@mui/lab";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { axiosGet, axiosPost } from "../requests";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Menu from "../../components/Menu";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AddSlots() {
  let navigate = useNavigate();

  type Section = {
    sectionId: number;
    sectionName: string;
  };

  const [dateValue, setDateValue] = useState<Date | string | null>(null);
  const [fromValue, setFromValue] = useState<Date | null>(null);
  const [toValue, setToValue] = useState<Date | null>(null);
  const [sections, setSections] = useState<Section[]>([]);
  const [sectionValue, setSectionValue] = useState<number>();
  const [error, setError] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axiosGet("/admin/addSlots").then((res) => {
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

  const handleChange = (event: any) => {
    setSectionValue(event.target.value as number);
  };

  const handleSlots = () => {
    if (
      dateValue === null ||
      fromValue === null ||
      toValue === null ||
      sectionValue === null
    ) {
      setError(true);
      setOpen(true);
    } else {
      axiosPost("/admin/addSlots", {
        date: dateValue,
        startTime: fromValue,
        endTime: toValue,
        sectionId: sectionValue,
      }).then((res) => {
        if (res.data.message === "Success") {
          setError(false);
          setOpen(true);
          navigate("/slotConfirmation");
        }
      });
    }
  };

  return (
    <Layout>
      <Menu />
      <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
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
              Add Slots:
            </h5>
          </div>
        </div>
        <div className="container  my-4">
          <FormControl color="warning" fullWidth>
            <InputLabel id="demo-simple-select-label">Section</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sectionValue}
              label="Sections"
              onChange={(e) => handleChange(e)}
            >
              {sections.map((item, index) => {
                return (
                  <MenuItem value={item.sectionId} key={index}>
                    {item.sectionName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <div>
            <LocalizationProvider color="warning" dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date"
                value={dateValue}
                onChange={(newValue) => {
                  setDateValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} fullWidth sx={{ my: 3 }} />
                )}
              />
            </LocalizationProvider>
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                label="From Time"
                value={fromValue}
                ampm={false}
                onChange={(newValue) => {
                  setFromValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                label="To Time"
                value={toValue}
                ampm={false}
                onChange={(newValue) => {
                  setToValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} fullWidth sx={{ my: 3 }} />
                )}
              />
            </LocalizationProvider>
          </div>
          <div className="text-center">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF8E23",
                width: 100,
                borderRadius: 10,
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#FFA500",
                },
              }}
              onClick={() => {
                handleSlots();
              }}
            >
              Add
            </Button>
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
            Slots Added Successfully
          </Alert>
        )}
      </Snackbar>
    </Layout>
  );
}
