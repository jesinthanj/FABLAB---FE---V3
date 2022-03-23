import { useState } from "react";
import Layout from "../../components/Layout";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export default function AddSlots() {
  return (
    <Layout>
      <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
        <h3>MY BOOKINGS</h3>
        <div className="container">
          <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "#f2f2f2" }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Inbox" />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
          </Box>
        </div>
      </div>
    </Layout>
  );
}
