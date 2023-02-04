import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import FormatPaintOutlinedIcon from "@mui/icons-material/FormatPaintOutlined";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import MobileScreenShareOutlinedIcon from "@mui/icons-material/MobileScreenShareOutlined";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import WatchIcon from "@mui/icons-material/Watch";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import But from "./Listbut";
import Bookingform from "./Bookingform";
import Calte from "./Calte";
import Modal from "@mui/material/Modal";
import Apperance from "../Apperanc/Apperance";
import Notify from "../Notification/Notify";
import Events from "../Notification/Events";

const drawerWidth = 290;
const drawerheight = "100vh";

export default function ClippedDrawer() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [openn, setOpenn] = React.useState(false);
  const [book, setBook] = React.useState("booking");
  const handleOpenn = () => setOpenn(true);
  const handleClose = () => setOpenn(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const butclick = () => {
    setBook("notif");
  };
  const handleClick2 = () => {
    setOpen1(!open1);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#32414a",
        }}
      >
        <Toolbar>
          <Button sx={{ color: "white" }}>
            <ArrowBackIosIcon sx={{ fontSize: 15 }} /> Back
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Typography sx={{ alignItems: "center" }}>
            <RadioButtonUncheckedIcon
              sx={{ fontSize: 13, fontWeight: "bold" }}
            />{" "}
            url will come here
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          height: drawerheight,
          flexShrink: 0,
          padding: 0,
          display: { xs: "none", lg: "block" },
          boxShadow: "5px 10px solid black",
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box
          sx={{
            backgroundColor: "#232e35",
            color: "white",
            position: "relative",
            height: "100%",
          }}
        >
          <List>
            <ListItem>
              <ListItemButton
                sx={{
                  height: 50,
                  marginTop: 1,
                  padding: 0.5,
                  borderRadius: 2,
                  ":hover": { backgroundColor: "#2d3b45" },
                }}
                onClick={() => {
                  setBook("booking");
                }}
              >
                <ListItemIcon>
                  <InboxIcon size="large" sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText>
                  <Typography sx={{ fontWeight: "bold" }}>General</Typography>
                  <Typography sx={{ fontSize: 13 }}>
                    set the title & description
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                sx={{
                  height: 50,
                  marginTop: 1,
                  padding: 0.5,
                  borderRadius: 2,
                  ":hover": { backgroundColor: "#2d3b45" },
                }}
                onClick={() => {
                  setBook("calender");
                }}
              >
                <ListItemIcon>
                  <PermContactCalendarOutlinedIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Calender & teams
                  </Typography>
                  <Typography sx={{ fontSize: 13 }}>
                    Calender preferance
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <List sx={{ paddingLeft: 2, paddingRight: 2 }}>
              <ListItemButton
                onClick={handleClick}
                sx={{
                  height: 50,
                  marginTop: 1,
                  padding: 0.5,
                  borderRadius: 2,
                  ":hover": { backgroundColor: "#2d3b45" },
                }}
              >
                <ListItemIcon>
                  <WatchIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Times & Availablity
                  </Typography>
                  <Typography sx={{ fontSize: 13 }}>
                    Working hours & duration
                  </Typography>
                </ListItemText>
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <But name={"Availablity"} selected></But>
                  <But name={" Duration & display"} />
                  <But name={"Appointment Types"}></But>
                  <But name={"Language & Timezones"}></But>
                </List>
              </Collapse>
            </List>
            <List sx={{ paddingLeft: 2, paddingRight: 2 }}>
              <ListItemButton
                onClick={handleClick2}
                sx={{
                  height: 50,
                  marginTop: 1,
                  padding: 0.5,
                  borderRadius: 2,
                  ":hover": { backgroundColor: "#2d3b45" },
                }}
              >
                <ListItemIcon>
                  <ListAltIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Booking form
                  </Typography>
                  <Typography sx={{ fontSize: 13 }}>
                    Questions & payments
                  </Typography>
                </ListItemText>
                {open1 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <But name={"Questions"} selected></But>
                  <But name={"After Booking"} />
                  <But name={"Payments"}></But>
                </List>
              </Collapse>
            </List>
            <List sx={{ paddingLeft: 2, paddingRight: 2 }}>
              <ListItemButton
                onClick={() => {
                  setOpen2(!open2);
                }}
                sx={{
                  height: 50,
                  marginTop: 1,
                  padding: 0.5,
                  borderRadius: 2,
                  ":hover": { backgroundColor: "#2d3b45" },
                }}
              >
                <ListItemIcon>
                  <MarkEmailUnreadIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Notification
                  </Typography>
                  <Typography sx={{ fontSize: 13 }}>
                    Emails, SMS & events
                  </Typography>
                </ListItemText>
                {open2 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{
                      pl: 4,
                      height: 50,
                      marginTop: 1,
                      borderRadius: 2,
                      ":hover": { backgroundColor: "#2d3b45" },
                    }}
                    onClick={butclick}
                  >
                    <ListItemText>
                      <Typography>&nbsp;Action</Typography>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton
                    sx={{
                      pl: 4,
                      height: 50,
                      marginTop: 1,
                      borderRadius: 2,
                      ":hover": { backgroundColor: "#2d3b45" },
                    }}
                    onClick={() => {
                      setBook("calend");
                    }}
                  >
                    <ListItemText>
                      <Typography>&nbsp;Calender Events</Typography>
                    </ListItemText>
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
            <ListItem>
              <ListItemButton
                sx={{
                  height: 50,
                  marginBottom: 1,
                  marginTop: 1,
                  padding: 0.5,
                  borderRadius: 2,
                  ":hover": { backgroundColor: "#2d3b45" },
                }}
              >
                <ListItemIcon>
                  <FormatPaintOutlinedIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {" "}
                    Styles & Appearance
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>

          <Divider />
          <List>
            <ListItem>
              <ListItemButton
                sx={{
                  padding: 0,
                  height: 50,
                  borderRadius: 2,
                  ":hover": { backgroundColor: "#2d3b45" },
                  paddingTop: 0.5,
                  paddingBottom: 0.5,
                }}
              >
                <ListItemIcon>
                  <CodeOffIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText>Live Booking page</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                sx={{
                  padding: 0,
                  height: 50,
                  ":hover": { backgroundColor: "#2d3b45" },
                  paddingTop: 0.5,
                  paddingBottom: 0.5,
                }}
                onClick={handleOpenn}
              >
                <ListItemIcon>
                  <MobileScreenShareOutlinedIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText>Share & embeded</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
          <Modal
            open={openn}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Apperance />
          </Modal>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#232e35",
          color: "white",
          maxHeight: "100%",
        }}
      >
        <Toolbar />

        {book === "booking" ? <Bookingform /> : ""}
        {book === "calender" ? <Calte /> : ""}
        {book === "notif" ? <Notify /> : ""}
        {book === "calend" ? <Events /> : ""}
        {/* <Bookingform /> */}
        {/* { <Notify />} */}
        {/* <Calte /> */}
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: 500,
          display: { xs: "none", lg: "block" },
          backgroundColor: "#232e35",
          color: "white",
        }}
      >
        <Toolbar />
        <Typography>Date selector will come here </Typography>
      </Box>
    </Box>
  );
}
