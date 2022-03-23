import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  TextField,
  Button,
  FormHelperText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React from "react";
import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";

export default function ConfirmationPage() {
  let navigate = useNavigate();
  return (
    <Layout>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Your Request is being
              </Typography>
              <div className="my-3">
                <Typography gutterBottom variant="h3" component="div">
                  PROCESSED
                </Typography>
              </div>
              <div className="my-3">
                <Typography gutterBottom variant="h6" component="div">
                  Please check your email for confrimation
                </Typography>
              </div>
              <div className="my-3">
                  <Button variant="contained" color="warning" onClick={() => {
              navigate("/homepage");
            }}>
                    Home
                  </Button>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </Layout>
  );
}
