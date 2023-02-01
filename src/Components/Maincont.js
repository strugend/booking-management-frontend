import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import Drawercomp from "./Drawercomp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookingform from "./Bookingform";
import Toolbar from "@mui/material/Toolbar";
import Calte from "./Calte";
import Thirdpart from "./Thirdpart";
import Notify from "../Notification/Notify";
import Events from "../Notification/Events";

function Maincont() {
  const [disp, setdisp] = useState("none");
  const handlec = () => {
    console.log(disp);
    disp === "none" ? setdisp("block") : setdisp("none");
  };
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar disp={disp} handlec={handlec} />
        <Drawercomp disp={disp} />
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
          <Routes>
            <Route path="/" element={<Bookingform />} />
            <Route path="/general" element={<Bookingform />} />
            <Route path="/calender-teams" element={<Calte />} />
            <Route path="/notif-action" element={<Notify />} />
            <Route path="/notif-events" element={<Events />} />
          </Routes>
        </Box>
        <Thirdpart />
      </Box>
    </BrowserRouter>
  );
}

export default Maincont;
