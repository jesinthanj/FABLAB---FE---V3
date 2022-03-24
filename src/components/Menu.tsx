import { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { axiosGet } from "../pages/requests";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  backgroundColor: "#FF8E23",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Menu() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    axiosGet("/auth").then((res) => {
      if (res.data.success) {
        res.data.user.isAdmin && setIsAdmin(true);
      }
    });
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <AiOutlineMenu />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Fablab
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <BsChevronLeft /> : <BsChevronRight />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {isAdmin ? (
          <List>
            <ListItem button key={"Home"}>
              <ListItemText
                primary={"Home"}
                onClick={() => {
                  navigate("/mainPage");
                }}
              />
            </ListItem>
            <ListItem button key={"Bookings"}>
              <ListItemText
                primary={"Bookings"}
                onClick={() => {
                  navigate("/admin/viewbookings");
                }}
              />
            </ListItem>
            <ListItem button key={"Log Out"}>
              <ListItemText
                primary={"Log Out"}
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/");
                }}
              />
            </ListItem>
          </List>
        ) : (
          <List>
            <ListItem button key={"Home"}>
              <ListItemText
                primary={"Home"}
                onClick={() => {
                  navigate("/homepage");
                }}
              />
            </ListItem>
            <ListItem button key={"Bookings"}>
              <ListItemText
                primary={"My Bookings"}
                onClick={() => {
                  navigate("/mybookings");
                }}
              />
            </ListItem>
            <ListItem button key={"Log Out"}>
              <ListItemText
                primary={"Log Out"}
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/");
                }}
              />
            </ListItem>
          </List>
        )}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
